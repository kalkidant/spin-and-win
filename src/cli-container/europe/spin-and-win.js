import React, { useContext,useEffect, useRef, useState } from "react";
import { useParams } from "react-router";
import'./spinandwin.css';
import socketIOClient from "socket.io-client";
import { createGlobalStyle } from 'styled-components';
import "../../public/spinv.1/css/plugins/spinnwin/roulettedraw.css"
import { Helmet } from 'react-helmet';
import  { useNavigate } from "react-router-dom";

import Wheel from '../europe/wheel.js'
import Timer from "../../components/timer";
import { SocketContext } from '../../context/socket';
import TopTen from "./top_ten";
import Total from "./total";
import Modal from "react-modal";
function SpinAndWin() {
    const [gameCounter, setGameCounter] = useState(0);
    const [ result , setRsult] = useState(false)
    const sttt = useRef(0); 
    const[betBirr,setBetBirr]=useState("");
    const[dee,setDee]=useState(0);
    const[jackPotTickets,setJackPotTickets]=useState([]);
 
    const element=useRef();
      const history=  useNavigate() ;
  const[prev,setPrev]=useState(0);
  
       const[ress,setRess]=useState("");
    const resRef =useRef(null);
  var itemone = JSON.parse(localStorage.getItem('clinet-shop-info'));
  const params = useParams();
  
  const st = useRef(0) 
  const [rou, setRou] = useState({round:0,second:0,minute:0,pause:false,result:null})
  const [time, settime] = useState({round:0,second:0,minute:0,pause:false,result:null,kenoResult:null})
  
  const socket = useContext(SocketContext); 
  const[dataShop,setDataShop]=useState('');
  const[jackMoney,setJackMoney]=useState(0);
  
  const prevCountRef = useRef();
  const prevCountRefDeg = useRef();
  
  const [isOpenreissue, setreissue] = useState(false);

    function toggleReissueModal() {
      setreissue(!isOpenreissue);
      console.log("modall")
    }
  
  useEffect(()=>{
    setreissue(true)
    
    async function getData() {
      const response = await fetch(`https://api.cobet.et/api/auth/terminal/withId/?id=${params.id.toString()}`);
      
    
        if (!response.ok) {
          const message = `An error occurred: ${response.status}`;
          window.alert(message);
          history("/error")
          return;
        }
        
        const dbdata = await response.json();
        setDataShop(dbdata);
       
        if (dbdata.status=="error") {
          const message = `An error occurred: ${response.status}`;
          history("/error")
          return;
        }
    
        localStorage.setItem("clinet-shop-info",JSON.stringify(dbdata.get.Shop.shopname))
      
        itemone = JSON.parse(localStorage.getItem('clinet-shop-info'));
    
    
    
    
      }
      getData();
  
  },[])
  
  useEffect(()=>{
  
    socket.on("FromAPI", data => {
     
    if(data.minute<=4 && data.second<=34 && data.resultFound === false){
      settime({round:data.round,second:data.second,minute:data.minute,pause:data.pause,result:data.result,kenoResult:data.keno_result})
  
    
  }
  
      
    if(data.resultFound === false){
      sttt.current = 0
  }
 
 
  if( data.resultFound === true && sttt.current===0){
  console.log("datass")
  console.log(data)
          if(data.result instanceof Array ){
                for (let i = 0; i < data.result.length; i++) {
                  const element = data.result[i];
                  
                     const keys= Object.keys(element);
                      for (let j = 0; j < keys.length; j++) {
                                const key = keys[j];
                                if(key===itemone ){
                              
                                                     if(element[key].is_jackpot===true){
                                                      console.log(element[key].jackpot_tickets);
                                                                setJackMoney(element[key].jackpot)
                                                                setJackPotTickets(element[key].jackpot_tickets)
                                                               
                                                        }
                              setRess(element[key].winNumber.number);
                            
  
                              if(prevCountRef.current===element[key].winNumber.number){ 
                                setDee(prevCountRefDeg.current+360*15)
                                break;
                              }
                              else{
                              if(element[key].winNumber.number===0){
                               
                                setDee((0)+360*15);
                              break;
                                }
                                if(element[key].winNumber.number==26){
                                  setDee((9.72)+360*15);
                                  break;
                               
                                }
                                if(element[key].winNumber.number==3){
                                  setDee((19.5)+360*15);
                                  break;
                               
                                }
                                if(element[key].winNumber.number==35){
                                  setDee((29.5)+360*15);
                                  break;
                               
                                }
                                if(element[key].winNumber.number==12){
                                  setDee((38.91)+360*15);
                                  break;
                               
                                }
                                if(element[key].winNumber.number==28){
                                  setDee((48.65)+360*15);
                                  break;
                               
                                }
                                if(element[key].winNumber.number==7){
                                  setDee((58.4)+360*15);
                                  break;
                               
                                }
                                if(element[key].winNumber.number==29){
                                  setDee((68.1)+360*15);
                                  break;
                               
                                }
                                if(element[key].winNumber.number==18){
                                  setDee((77.8)+360*15);
                                  break;
                               
                                }
                                if(element[key].winNumber.number==22){
                                  setDee((87.561)+360*15);
                                  break;
                               
                                }
                                if(element[key].winNumber.number==9){
                                  setDee((97.29)+360*15);
                                  break;
                               
                                }
                                if(element[key].winNumber.number==31){
                                  setDee((107)+360*15);
                                  break;
                               
                                }
                                if(element[key].winNumber.number==14){
                                  setDee((116.7)+360*15);
                                  break;
                               
                                }
                                if(element[key].winNumber.number==20){
                                  setDee((126.5)+360*15);
                                  break;
                               
                                }
                                if(element[key].winNumber.number==1){
                                  setDee((136.2)+360*15);
                                  break;
                               
                                }
                                if(element[key].winNumber.number==33){
                                  setDee((145.935)+360*15);
                                  break;
                               
                                }
                                if(element[key].winNumber.number==16){
                                  setDee((155.7)+360*15);
                                  break;
                               
                                }
                                if(element[key].winNumber.number==24){
                                  setDee((165.4)+360*15);
                                  break;
                               
                                }
                                if(element[key].winNumber.number==5){
                                  setDee((175.1)+360*15);
                                  break;
                               
                                }
                                if(element[key].winNumber.number==10){
                                  setDee((184.85)+360*15);
                                  break;
                               
                                }
                                if(element[key].winNumber.number==23){
                                  setDee((194.58)+360*15);
                                  break;
                               
                                }
                                if(element[key].winNumber.number==8){
                                  setDee((204.31)+360*15);
                                  break;
                               
                                }
                                if(element[key].winNumber.number==30){
                                  setDee((214)+360*15);
                                  break;
                               
                                }
                                if(element[key].winNumber.number==11){
                                  setDee((223.767)+360*15);
                               
                               break;
                              }
                                if(element[key].winNumber.number==36){
                                  setDee((233.5)+360*15);
                                  break;
                               
                                }
                                if(element[key].winNumber.number==13){
                                  setDee((243.225)+360*15);
                                  break;
                               
                                }
                                if(element[key].winNumber.number==27){
                                  setDee((252.95)+360*15);
                                  break;
                               
                                }
                                if(element[key].winNumber.number==6){
                                  setDee((262.7)+360*15);
                                  break;
                               
                                }
                                if(element[key].winNumber.number==34){
                                  setDee((272.4)+360*15);
                                  break;
                               
                                }
                                if(element[key].winNumber.number==17){
                                  setDee((282.141)+360*15);
                                  break;
                               
                                }
                                if(element[key].winNumber.number==25){
                                  setDee((291.87)+360*15);
                                  break;
                               
                                }
                                if(element[key].winNumber.number==2){
                                  setDee((301.6)+360*15);
                                  break;
                               
                                }
                                if(element[key].winNumber.number==21){
                                  setDee((311.3)+360*15);
                                  break;
                               
                                }
                                if(element[key].winNumber.number==4){
                                  setDee((321)+360*15);
                                  break;
                               
                                }
                                if(element[key].winNumber.number==19){
                                  setDee((330.786)+360*15);
                                  break;
                               
                                }
                                if(element[key].winNumber.number==15){
                                  setDee((340.5)+360*15);
                                  break;
                               
                                }
                                if(element[key].winNumber.number==32){
                                  setDee((350.2)+360*15);
                                  break;
                               
                                }
                               
                             
                              }
                              
              
  
               }
               
       }} }  
       
        sttt.current=+1
    }  
  
  })
      },[])
  
  
  
  
  
    
        useEffect(()=>{
      
          socket.on("ShopBalance", data => {
  
           if(data instanceof Array ){
            for (let i = 0; i < data.length; i++) {
              const element = data[i];
          
                 const keys= Object.keys(element);
                  for (let j = 0; j < keys.length; j++) {
                    const key = keys[j];
                    if(key===itemone ){
                           
                           
                            

                          setBetBirr(element[key]);
                        
  
           }
           
   }} 
  
           }
  
           if(data.length==0){
                   setBetBirr("0");
           }
          }
          
          
          )
          return () => {
            socket.disconnect();
          
          
          
          }
      },[])
        

      
      
    useEffect(() => {
      prevCountRef.current = ress;
    }, [ress]);
  
    useEffect(() => {
     
      prevCountRefDeg.current = dee;
    }, [dee]);
    

  return (
    <div className="App">
       <Helmet>
       <script type="text/javascript">
 (     window.ZAPNET_SERVER_NAME = 'retail.best-bet.net';
      window.ZAPNET_RESOURCE_LOCATION = '/v5.11';
      window.ZAPNET_SHOW_MODE = false;
      window.ZAPNET_CONSTANTS = (
          CURRENCY: 'ETB ',
          CURRENCY_CHAR: 'ETB ',
          CURRENCY_DECIMALS: 2,
          CURRENCY_DECIMALS_SEPARATOR: '.',
          CURRENCY_THOUSANDS_SEPARATOR: ',',
          CURRENCY_SIGN_POS: 'before',
          CURRENCY_MIN_DENOMINATION: false,
          ODDS_DISPLAY_FORMAT: 'decimal',
          MIN_TOTAL_STAKE: 10,
          MIN_VIRTUAL_STAKE: 50,
          SLIP_MATCHMULTI: false,
          MIN_LINE_STAKE: 5,
          DEFAULT_LOCALE: 'en',
          BET_DB_REMOTE: false,
          CYPRUS_RULE: false,
          CYPRUS_RULE_FOUR_PLUS: '',
          OUT_OF_RULES: false,
          BET_SYSTEMS: false,
          KIOSK_WELCOME: false,
          KIOSK_GAMES: false,
          LIVE_SPORTS_LEFT_MENU: false,
          LIVE_SPORTS_HEADER_MENU: false,
          KIOSK_LOAD_INCR: false,
          MLC: false,
          POOLS:false,
          SKIN: 'b3',
          THEME: 'default',
          SHOW_WORLD_CUP: false,
          SHOW_RACING: false,
          SHOW_VIRTUAL: false,
          SHOW_SPINNWIN: false,
          SHOW_KENO: false,
          SHOW_LUCKYBALLS: false,
          URL_PREFIX: '',
          SOCCER_ROULETTE: false,
          MAX_SELECTIONS: false,
          MAX_ODDS: false,
          MIN_ODDS: false,
          MAX_PAYOUT: '1000000',
          MAX_PAYOUT_CYP: '',
          MENU_COUNT_PREFIX : '',
          ADMIN_AUTH_SOUND: 'os.mp3',
          ADMIN_AUTH_SOUND_LOOPS: '100',
          SLIP_SORT: 'matchtime',
          SLIP_REFUNDS: false,
          BETSLIP_POPULAR_STAKE_BUTTONS: false,
          BETSLIP_SAVETOSESSION: true,
          BET_BOOKING: true,
          BET_BOOKING_PRINT: true,
          RACING_FORECAST_LABEL: 'Exacta',
          RACING_REVERSEFORECAST_LABEL: 'Quinella',
          ALLOW_MARKETS_MULTIPLE_GROUPS: false,
          RACING_TRICAST_LABEL: 'Trifecta',
          RACING_REVERSETRICAST_LABEL: 'Trio',
          RACING_TETRACAST_LABEL: 'Quartet',
          BONUS_MINODDS: 1.2,
          BONUS: false,
          MAX_BONUS: 0,
          KIOSK_ALLOW_CASHOUT: false,
          VIRTUALS:false,
          LOTTERY_MACHINENUMBERS_LABEL:'(+M)',
          LOTTERY_MAX_LINES:'',
          LOTTERY_DEFAULT_SUSPEND_MINUTES:'0',
          BETSLIP_ACCEPT_ANY_ODDS: true,
          ZAPNET_SIMULATE_COMPANY_NAME: '',
          LMT_PITCH_LOGO: '',
          LMT_GOAL_BANNER: '',
          LMT_LOGO: '',
      )
      window.ZAPNET_DEVSERVER = false,
      window.ZAPNET_SERVER_TIME = 1654767925,
      window.ZAPNET_LOCAL_TIME = Math.round(new Date().getTime() / 1000),
      window.ZAPNET_SHOP_TERM = true,
      window.ZAPNET_KIOSKSKIN = 'bestbet',
      window.ZAPNET_COMPANYNAME='BestBet',
      window.ZAPNET_CUST_ID='default',
      window.CASHIER_CLIENT_VERSION='',
      window.ZAPNET_LOCALE = 'en')
      </script>
   

  <script type="text/javascript" src="./public/spinv.1/js/lib.js"></script>
  <script type="text/javascript" src="./public/spinv.1/js/util.js"></script>
  <script type="text/javascript" src="./spinv.1/js/common/events.js"></script>
<script type="text/javascript" src="./spinv.1/js/plugins/spinnwin/roulettedraw.js"></script>
</Helmet>
 
    <div id="spinandwin" className="">
    
    <div id="debug"></div>
    <div id="game-logo"></div>
    <div id="company-logo"></div>
    <div id="current-draw" className="message-box">
    <div className="bg"></div>
    <div className="label label-1">Game:</div>
    <div className="value" id="last-draw-id">{time.round}</div>
    </div>
    <div id="countdown" className="message-box">
    <div className="bg"></div>
    <div className="label label-1">Next Game:</div>
    <div className="value" id="next-draw-id">140685</div>
    <div className="label label-2">Next Game Time:</div>
    <div className="value" id="next-draw-time">12:50</div>
    <div className="label label-3">Bets Closing:</div>
    <div className="value" id="countdown-timer"><Timer/></div>
    </div>
    <div id="wheel-container">
<Wheel
   de={dee}
   betbirr={betBirr}
   jackPotTickets={jackPotTickets}
    timee={time}
    prizeNumber={{number:ress.toString()}}
    result = {ress.toString()}
    setRsult = {setRsult}
    resetTimer={() => {
      setGameCounter((c) => {
    
        return c + 1;
      });
    }}

/>
    <div id="wheel-money-plane">
    <div className="number-money number-money-0">
    <div className="number-money-bar"></div>
    </div>
    <div className="number-money number-money-1">
    <div className="number-money-bar"></div>
    </div>
    <div className="number-money number-money-2">
    <div className="number-money-bar"></div>
    </div>
    <div className="number-money number-money-3">
    <div className="number-money-bar"></div>
    </div>
    <div className="number-money number-money-4">
    <div className="number-money-bar"></div>
    </div>
    <div className="number-money number-money-5">
    <div className="number-money-bar"></div>
    </div>
    <div className="number-money number-money-6">
    <div className="number-money-bar"></div>
    </div>
    <div className="number-money number-money-7">
    <div className="number-money-bar"></div>
    </div>
    <div className="number-money number-money-8">
    <div className="number-money-bar"></div>
    </div>
    <div className="number-money number-money-9">
    <div className="number-money-bar"></div>
    </div>
    <div className="number-money number-money-10">
    <div className="number-money-bar"></div>
    </div>
    <div className="number-money number-money-11">
    <div className="number-money-bar"></div>
    </div>
    <div className="number-money number-money-12">
    <div className="number-money-bar"></div>
    </div>
    <div className="number-money number-money-13">
    <div className="number-money-bar"></div>
    </div>
    <div className="number-money number-money-14">
    <div className="number-money-bar"></div>
    </div>
    <div className="number-money number-money-15">
    <div className="number-money-bar"></div>
    </div>
    <div className="number-money number-money-16">
    <div className="number-money-bar"></div>
    </div>
    <div className="number-money number-money-17">
    <div className="number-money-bar"></div>
    </div>
    <div className="number-money number-money-18">
    <div className="number-money-bar"></div>
    </div>
    <div className="number-money number-money-19">
    <div className="number-money-bar"></div>
    </div>
    <div className="number-money number-money-20">
    <div className="number-money-bar"></div>
    </div>
    <div className="number-money number-money-21">
    <div className="number-money-bar"></div>
    </div>
    <div className="number-money number-money-22">
    <div className="number-money-bar"></div>
    </div>
    <div className="number-money number-money-23">
    <div className="number-money-bar"></div>
    </div>
    <div className="number-money number-money-24">
    <div className="number-money-bar"></div>
    </div>
    <div className="number-money number-money-25">
    <div className="number-money-bar"></div>
    </div>
    <div className="number-money number-money-26">
    <div className="number-money-bar"></div>
    </div>
    <div className="number-money number-money-27">
    <div className="number-money-bar"></div>
    </div>
    <div className="number-money number-money-28">
    <div className="number-money-bar"></div>
    </div>
    <div className="number-money number-money-29">
    <div className="number-money-bar"></div>
    </div>
    <div className="number-money number-money-30">
    <div className="number-money-bar"></div>
    </div>
    <div className="number-money number-money-31">
    <div className="number-money-bar"></div>
    </div>
    <div className="number-money number-money-32">
    <div className="number-money-bar"></div>
    </div>
    <div className="number-money number-money-33">
    <div className="number-money-bar"></div>
    </div>
    <div className="number-money number-money-34">
    <div className="number-money-bar"></div>
    </div>
    <div className="number-money number-money-35">
    <div className="number-money-bar"></div>
    </div>
    <div className="number-money number-money-36">
    <div className="number-money-bar"></div>
    </div>
    </div>
    <div id="wheel-top"></div>
    </div>
    <div id="totalstake"></div>
    <div id="statistics-column">
    <div id="statistics" className="display-tables"><div className="statistics-history">
        <TopTen round={time.round}/>

    </div>
    <Total  round={time.round}/>
    {(jackMoney && (time.minute===4 && time.second<=24) && (time.minute===4 && time.second>=14))?(  <div className="jackPot-place" >${jackMoney}</div>):(  <div className="jackPot-place" >${0}</div>)}
  

    </div>
    <div id="payouts" className="display-tables">
    {/* <table>
    <tr>
    <th colspan="7" className="header">PAY TABLE</th>
    </tr>
    <tr>
    <td className="subheader">Color</td>
    <td colspan="2" className="color-red">2</td>
    <td colspan="2" className="color-black">2</td>
    <td colspan="2" className="color-green">36</td>
    </tr>
    <tr>
    <td className="subheader">Dozens</td>
    <td className="cc01" colspan="2"><span className="label">1-12:</span> <span className="payout">3</span></td>
    <td className="cc01" colspan="2"><span className="label">13-24:</span> <span className="payout">3</span></td>
    <td className="cc01" colspan="2"><span className="label">25-36:</span> <span className="payout">3</span></td>
    </tr>
    <tr>
    <td className="subheader">Odd/Even</td>
    <td className="cc11" colspan="3"><span className="label">Odd:</span> <span className="payout">2</span></td>
    <td className="cc11" colspan="3"><span className="label">Even:</span> <span className="payout">2</span></td>
    </tr>
    <tr>
    <td className="subheader">Number</td>
    <td className="cc01" colspan="7"><span className="label">Exact Number:</span> <span className="payout">36</span></td>
    </tr>
    </table> */}
    <div className="payout-number">x 36</div>
    <div className="payout-color">x 2</div>
    <div className="payout-oddeven">x 2</div>
    <div className="payout-hilo">x 2</div>
    <div className="payout-dozen">x 3</div>
    </div>
    </div>
    <div id="jackpot-panel">
    <div className="background"></div>
    <div className="rays rays-1"></div>
    <div className="rays rays-2"></div>
    <div className="jackpot-screen">
    <div className="color-pulse"></div>
    <div className="jackpot-info">
    <div id="jackpot-panel-amount"></div>
    <div id="jackpot-panel-ticket"></div>
    </div>
    <div className="screen-top"></div>
    </div>
    
    </div>
    </div>

   
    
   </div>
   
  );
}

export default SpinAndWin;
