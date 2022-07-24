(function(){

    var Dom = YAHOO.util.Dom,
        Event = YAHOO.util.Event,
        $ = YAHOO.util.Selector.query,
        Util = ZAPNET.util;

    (function() {
        var Rotate = function(el, attributes, duration,  method) {
            if (el) { // dont break existing subclasses not using YAHOO.extend
                Rotate.superclass.constructor.call(this, el, attributes, duration, method);
                this.lastAngle = 0;
            }
        };

        Rotate.NAME = 'Rotate';

        // shorthand
        YAHOO.extend(Rotate, YAHOO.util.ColorAnim);

        var superclass = Rotate.superclass;
        var proto = Rotate.prototype;

        proto.doMethod = function(attr, start, end) {
            var val = null;
            if (attr == 'rotate') {
                val = [
                    this.method(this.currentFrame, start, end - start, this.totalFrames),
                ];

            } else {
                val = superclass.doMethod.call(this, attr, start, end);
            }
            return val;
        };

        proto.getAttribute = function(attr) {
            var val = null, valStr;
            var el = this.getEl();

            if (attr == 'rotate') {
                valStr = el.style.transform;
                val = parseInt(valStr.substring(7));
                if (!val){
                    val = 0;
                }
            } else {
                val = superclass.getAttribute.call(this, attr);
            }
            return val;
        };

        proto.setAttribute = function(attr, val, unit) {
            var el = this.getEl();

            if (attr == 'rotate') {
                el.style.transform = 'rotate(' + val[0] + 'deg)';
                el.style.MozTransform = 'rotate(' + val[0] + 'deg)';
                el.style.WebkitTransform = 'rotate(' + val[0] + 'deg)';
                this.lastAngle = val[0];
            } else {
                superclass.setAttribute.call(this, attr, val, unit);
            }
        };

        proto.getLastAngle = function(){
            return this.lastAngle;
        };

        ZAPNET.Rotate = Rotate;
    })();

    ZAPNET.Spinwin = ZAPNET.Spinwin || {};

    ZAPNET.Spinwin.Draw = function(){
        var nextDrawTime = 0,
            drawRunning = false,
            busy = false,
            lastEventId = 0,
            showingJackpot = false,
            animRays1 = false,
            animRays2 = false,
            jackpotColorAnim = false,
            wheelNumbers = [0, 32, 15, 19, 4, 21, 2, 25, 17, 34, 6, 27, 13, 36, 11, 30, 8, 23, 10, 5, 24, 16, 33, 1, 20, 14, 31, 9, 22, 18, 29, 7, 28, 12, 35, 3, 26],
            sliceDegrees = 360.0 / 37.0,
            dom = {
                spinnwin: Dom.get('spinandwin'),
                wheel: Dom.get('wheel'),
                countdown: Dom.get('countdown-timer'),
                number: Dom.get('number'),
                totalStake: Dom.get('totalstake'),
                debug: Dom.get('debug'),
                statistics: Dom.get('statistics'),
                lastDrawId: Dom.get('last-draw-id'),
                nextDrawId: Dom.get('next-draw-id'),
                nextDrawTime: Dom.get('next-draw-time'),
                moneyPlane: Dom.get('wheel-money-plane'),
                jackpot: Dom.get('jackpot'),
                jackpotPanel: Dom.get('jackpot-panel'),
                jackpotPanelRays1: $('#jackpot-panel div.rays-1', null, true),
                jackpotPanelRays2: $('#jackpot-panel div.rays-2', null, true),
                jackpotPanelColor: $('#jackpot-panel div.color-pulse', null, true),
                jackpotPanelAmount: Dom.get('jackpot-panel-amount'),
                jackpotPanelTicket: Dom.get('jackpot-panel-ticket')
            },

        numberFromAngle = function(deg){
            deg = parseInt(deg);
            var pos = 36 - parseInt(Math.floor(((deg - (sliceDegrees * 0.5))  % 360) / sliceDegrees));
            if (pos in wheelNumbers){
                return wheelNumbers[pos];
            }
            return '-';
        },

        angleFromNumber = function(num){
            var index = wheelNumbers.indexOf(num);
            if (index >= 0){
                return (37 - index) * sliceDegrees;
            }

            return 0;
        },

        colorFromNumber = function(num){
            var index = wheelNumbers.indexOf(num);
            if (index == 0){
                return '#060';
            } else if (index % 2 == 0){
                return '#000';
            } else {
                return '#800';
            }

            return '#888';
        },

        nextDraw = function(){
            drawRunning = false;
        },

        stopDraw = function(){
            nextDraw();

            if (window.parent && window.parent.ZAPNET && window.parent.ZAPNET.Display){
                window.parent.ZAPNET.Display.stop(2);
            }
        },

        startDraw = function(number, duration){
            if (drawRunning){
                return;
            }

            if (window.parent && window.parent.ZAPNET && window.parent.ZAPNET.Display){
                window.parent.ZAPNET.Display.start(2);
            }
            clearStakes();

            drawRunning = true;
            Dom.setStyle(dom.number, 'left', '');
            Dom.setStyle(dom.number, 'top', '');
            var degrees = angleFromNumber(+number);
            var anim = new ZAPNET.Rotate(dom.wheel, {
                rotate: { by: 3600 + +degrees },
            }, duration, YAHOO.util.Easing.easeOutStrong);
            dom.wheel.style.transform = 'rotate(0deg)';
            anim.onComplete.subscribe(function(){
                stopDraw();
                dom.moneyPlane.style.transform = dom.wheel.style.transform;
                setTimeout(function(){
                    Dom.addClass(dom.spinnwin, 'show-stakes');
                }, 15000);
            });
            anim.onTween.subscribe(function(){
                var number = numberFromAngle(anim.getLastAngle());
                dom.number.innerHTML = number;
                dom.number.style.backgroundColor = colorFromNumber(number);
            });
            anim.animate();
        },

        stopJackpot = function(){
            showingJackpot = false;
            if (animRays1){
                animRays1.stop();
                animRays1 = false;
            }
            if (animRays2){
                animRays2.stop();
                animRays2 = false;
            }
            if (jackpotColorAnim){
                jackpotColorAnim.stop();
                jackpotColorAnim = false;
            }
            Dom.setStyle(dom.jackpotPanel, 'display', 'none');
        },

        showJackpot = function(amount, ticket){
            stopJackpot();
            showingJackpot = true;
            Dom.setStyle(dom.jackpotPanel, 'display', 'block');
            animRays1 = new ZAPNET.Rotate(dom.jackpotPanelRays1, {
                rotate: { by: 360 }
            }, 30);
            animRays1.onComplete.subscribe(function(){
                if (showingJackpot){
                    animRays1.animate();
                }
            });
            animRays1.animate();
            animRays2 = new ZAPNET.Rotate(dom.jackpotPanelRays2, {
                rotate: { by: -360 }
            }, 35);
            animRays1.onComplete.subscribe(function(){
                if (showingJackpot){
                    animRays2.animate();
                }
            });
            animRays2.animate();

            dom.jackpotPanelAmount.innerHTML = Util.formatAmountCommas(amount, true);
            dom.jackpotPanelTicket.innerHTML = '-' + ticket + '-';

            var col1 = '#fc6060';
            var col2 = '#a51010';
            Dom.setStyle(dom.jackpotPanelColor, 'background-color', col1);
            jackpotColorAnim = new YAHOO.util.ColorAnim(dom.jackpotPanelColor, {
                backgroundColor: {
                    to: col2
                }
            }, 0.5);
            jackpotColorAnim.onComplete.subscribe(function(){
                jackpotColorAnim.attributes.backgroundColor.to = jackpotColorAnim.attributes.backgroundColor.to == col1 ? col2 : col1;
                jackpotColorAnim.animate();
            });
            jackpotColorAnim.animate();

            setTimeout(function(){
                stopJackpot();
            }, 30000);
        },

        processJackpotEvent = function(event, data){
            if (event.t == 'update' || event.t == 'new'){
                if (dom.jackpot){
                    dom.jackpot.innerHTML = Util.formatAmountCommas(event.v, true, true);
                }
            }
            if (event.t == 'drop'){
                showJackpot(event.v, data.ticket);
            }
        },

        clearStakes = function(){
            Dom.removeClass(dom.spinnwin, 'show-stakes');
            var i, bar;
            for(i = 0; i <= 36; i += 1){
                bar = $('.number-money-' + wheelNumbers[i] + ' .number-money-bar', dom.moneyPlane, true);
                if (slice){
                    bar.style.height = 0;
                }
            }
        },

        showStakes = function(data){
            var total = 0;
            var max = 0;
            Util.foreach(data.stakes, function(amt){
                total = total + +amt;
                if (+amt > max){
                    max = +amt;
                }
            });
            Util.foreach(data.stakes, function(amt, i){
                var perc = Math.round((+amt / max) * 100);
                var bar = $('.number-money-' + i + ' .number-money-bar', dom.moneyPlane, true);
                Dom.setStyle(bar, 'height', perc + '%');
            });

            dom.totalStake.innerHTML = Util.formatAmountCommas(total ? total : 0, true, true);
        },

        processEvent = function(event){
            var data = event.d ? YAHOO.lang.JSON.parse(event.d) : false;
            if (event.o == 'jackpot'){
                return processJackpotEvent(event, data);
            }
            if (event.t == 'spin'){
                stopJackpot();
                nextDrawTime = new Date().getTime() + (data.next.secs * 1000);
                dom.lastDrawId.innerHTML = data.id;
                dom.nextDrawId.innerHTML = data.next.id;
                dom.nextDrawTime.innerHTML = data.next.time;
                startDraw(+data.n, +data.ds);
            } else if (event.t == 'number'){
                nextDrawTime = new Date().getTime() + (data.next.secs * 1000);
                dom.nextDrawId.innerHTML = data.next.id;
                dom.nextDrawTime.innerHTML = data.next.time;
                dom.statistics.innerHTML = data.stats;
            } else if (event.t == 'stakes'){
                showStakes(data);
            }
        },

        tick = function(){
            var now = new Date().getTime();
            var timeLeft = nextDrawTime - now;
            if (timeLeft < 0) {
                timeLeft = 0;
            }
            var timeSecs = Math.round(timeLeft / 1000);
            var secs = timeSecs % 60;
            var mins = (timeSecs - secs) / 60;
            dom.countdown.innerHTML = Util.timePad(mins) + ':' + Util.timePad(secs);
        };


        nextDraw();
        if (ZAPNET.SPINNWIN_NEXT_DRAW_SECONDS){
            nextDrawTime = new Date().getTime() + (ZAPNET.SPINNWIN_NEXT_DRAW_SECONDS * 1000)
        }
        ZAPNET.Events.subscribe(processEvent, 'spinnwin');
        setInterval(tick, 250);
        Util.fullscreenElem(dom.spinnwin);
        Event.on(window, 'resize', function(){
            Util.fullscreenElem(dom.spinnwin);
        });

        Event.on('jackpot', 'click', function(){
            showJackpot(999999, '1234567890');
        });

        var i, slice;
        for(i = 0; i <= 36; i += 1){
            slice = $('.number-money-' + wheelNumbers[i], dom.moneyPlane, true);
            if (slice){
                if (i){
                    slice.style.transform = 'rotate(' + (i * (360/37)) + 'deg)';
                }
            }
        }

        var spinImages = [
            window.ZAPNET_RESOURCE_LOCATION + './images/plugins/spinwin/jackpotscreen.png',
            window.ZAPNET_RESOURCE_LOCATION + './images/plugins/spinwin/background.png',
            window.ZAPNET_RESOURCE_LOCATION + './images/plugins/spinwin/rays.png'
        ];
        Util.loadImages(spinImages, function(){});
    }();



}());
