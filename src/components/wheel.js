import React, { useContext,useEffect, useRef, useState } from "react";
import { Wheel } from "react-custom-roulette";
import Myaudio from "../audio/index";
import './wheel.css'
// import pic from "../assets/border.svg"
import pic from "../assets/circle-image.png"
import pic1 from "../assets/sw.png" 
// import ring from "../assets/ring-royale.png"
import zero from "../assets/mid-ball.png"   
import nwwheel from "../assets/roulettewheelmoney.png"
import { SocketContext } from '../context/socket';
import { keyframes,css } from "styled-components";
import pic2 from"../assets/roulettetop.png";
// import useWindowSize from '../client-container/europe/windowssize'

const data = [
  { option: "21",style: { backgroundColor: "#ff0c03" }  },
  { option: "2",style: { backgroundColor: "#18181b" }  },
  { option: "25",style: { backgroundColor: "#ff0c03" }  },
  { option: "17",style: { backgroundColor: "#18181b" }  },
  { option: "34" ,style: { backgroundColor: "#ff0c03" } },
  { option: "6",style: { backgroundColor: "#18181b" }  },
  { option: "27",style: { backgroundColor: "#ff0c03" }  },
  { option: "13" ,style: { backgroundColor: "#18181b" } },
  { option: "36" ,style: { backgroundColor: "#ff0c03" } },
  { option: "11" ,style: { backgroundColor: "#18181b" } },
  { option: "30" ,style: { backgroundColor: "#ff0c03" } },
  { option: "8",style: { backgroundColor: "#18181b" }  },
  { option: "23",style: { backgroundColor: "#ff0c03" }  },
  { option: "10",style: { backgroundColor: "#18181b" }  },
  { option: "5",style: { backgroundColor: "#ff0c03" }  },
  { option: "24" ,style: { backgroundColor: "#18181b" } },
  { option: "16",style: { backgroundColor: "#ff0c03" }  },
  { option: "33",style: { backgroundColor: "#18181b" }  },
  { option: "1" ,style: { backgroundColor: "#ff0c03" } },
  { option: "20",style: { backgroundColor: "#18181b" }  },
  { option: "14",style: { backgroundColor: "#ff0c03" }  },
  { option: "31",style: { backgroundColor: "#18181b" }  },
  { option: "9",style: { backgroundColor: "#ff0c03" }  },
  { option: "22",style: { backgroundColor: "#18181b" }  },
  { option: "18",style: { backgroundColor: "#ff0c03" }  },
  { option: "29",style: { backgroundColor: "#18181b" }  },
  { option: "7" ,style: { backgroundColor: "#ff0c03" } },
  { option: "28",style: { backgroundColor: "#18181b" }  },
  { option: "12",style: { backgroundColor: "#ff0c03" }  },
  { option: "35" ,style: { backgroundColor: "#18181b" } },
  { option: "3" ,style: { backgroundColor: "#ff0c03" } },
  { option: "26",style: { backgroundColor: "#18181b" }  },
  { option: "0", style: { backgroundColor: "green" } },
  { option: "32" ,style: { backgroundColor: "#ff0c03" } },
  { option: "15" ,style: { backgroundColor: "#18181b" } },
  { option: "19" ,style: { backgroundColor: "#ff0c03" } },
  { option: "4" ,style: { backgroundColor: "#18181b" } },
];

// prize number

// a function that triggered after 10 second

const MyWheel = ({ prizeNumber, de,setStarter ,result, setRsult,timee,betbirr  }) => {
  const [mustSpin, setMustSpin] = useState(false);
  // const[starter,setStarter]=useState(false);
  // const [result, setResultNumber] = useState('');
  const stt = useRef(0); 
  const stttwo = useRef(0); 
  const socket = useContext(SocketContext); 
  const [time, settime] = useState({round:0,second:0,minute:0,pause:false,result:null,kenoResult:null})
  
  const [counter, setCounter] = useState(60);
  let signup='/signup';
// let de=0;
// const[de,setDe]=useState(0);
  const deg = Math.floor(5000 + Math.random()*5000)
const [data, setData]=useState(0)
  useEffect(() => {
    counter > 0 && setTimeout(() => setCounter(counter - 1), 1000);
    

  // if(counter==10){
  //   setDe(380+360);
  //     // spin();
  //   }
  }, []);









  
  useEffect(() => {
    socket.on("FromAPI", data => {
      //  console.log(data);
      settime({round:data.round,second:data.second,minute:data.minute,pause:data.pause,result:data.result,kenoResult:data.keno_result})
   
      if(data.resultFound==false){
     
        stt.current = 0
        setMustSpin(false);
      }
  

      // if(data.resultFound==true){
    //  stttwo.current = 0;
     
    // if(data.resultFound==true){

    // spinn();

// switch(result){
// case '0':  setDe(((0)+360*10));
// case '26': setDe(((9.72)+360*10));
// case '3': setDe(((19.5)+360*10));
// case '35': setDe(((29.5)+360*10));
// case '12': setDe(((38.91)+360*10));
// case '28': setDe(((48.65)+360*10));
// case '7':  setDe(((58.4)+360*10));
// case '29': setDe(((68.1)+360*10));
// case '18':setDe(((77.8)+360*10));
// case '22': setDe(((87.561)+360*10));
// case '9':  setDe(((97.29)+360*10));
// case '31':  setDe(((107)+360*10));
// case '14':  setDe(((116.7)+360*10));
// case '20':  setDe(((126.5)+360*10));
// case '1':  setDe(((136.2)+360*10));
// case '33':setDe(((145.935)+360*10));
// case '16':  setDe(((155.7)+360*10));
// case '24': setDe(((165.4)+360*10));
// case '5':setDe(((175.1)+360*10));
// case '10':setDe(((184.85)+360*10));
// case '23': setDe(((194.58)+360*10));
// case '8':setDe(((204.31)+360*10));
// }
// if(result==""){
//   setDe(((19.5)+360*10));

//  }
// if(result==""){
//   setDe(((19.5)+360*10));

//  }

//  if(result==="0"){
//   setDe(((0)+360*10));

//  }
//  if(result=="26"){
//   setDe(((9.72)+360*10));

//  }
//  if(result=="3"){
//   setDe(((19.5)+360*10));

//  }
//  if(result=="35"){
//   setDe(((29.5)+360*10));

//  }
//  if(result=="12"){
//   setDe(((38.91)+360*10));

//  }
//  if(result=="28"){
//   setDe(((48.65)+360*10));

//  }
//  if(result=="7"){
//   setDe(((58.4)+360*10));

//  }
//  if(result=="29"){
//   setDe(((68.1)+360*10));

//  }
//  if(result=="18"){
//   setDe(((77.8)+360*10));

//  }
//  if(result=="22"){
//   setDe(((87.561)+360*10));

//  }
//  if(result=="9"){
//   setDe(((97.29)+360*10));

//  }
//  if(result=="31"){
//   setDe(((107)+360*10));

//  }
//  if(result=="14"){
//   setDe(((116.7)+360*10));

//  }
//  if(result=="20"){
//   setDe(((126.5)+360*10));

//  }
//  if(result=="1"){
//   setDe(((136.2)+360*10));

//  }
//  if(result=="33"){
//   setDe(((145.935)+360*10));

//  }
//  if(result=="16"){
//   setDe(((155.7)+360*10));

//  }
//  if(result=="24"){
//   setDe(((165.4)+360*10));

//  }
//  if(result=="5"){
//   setDe(((175.1)+360*10));

//  }
//  if(result=="10"){
//   setDe(((184.85)+360*10));

//  }
//  if(result=="23"){
//   setDe(((194.58)+360*10));

//  }
//  if(result=="8"){
//   setDe(((204.31)+360*10));

//  }
//  if(result=="30"){
//   setDe(((214)+360*10));

//  }
//  if(result=="11"){
//   setDe(((223.767)+360*10));

//  }
//  if(result=="36"){
//   setDe(((233.5)+360*10));

//  }
//  if(result=="13"){
//   setDe(((243.225)+360*10));

//  }
//  if(result=="27"){
//   setDe(((252.95)+360*10));

//  }
//  if(result=="6"){
//   setDe(((262.7)+360*10));

//  }
//  if(result=="34"){
//   setDe(((272.4)+360*10));

//  }
//  if(result=="17"){
//   setDe(((282.141)+360*10));

//  }
//  if(result=="25"){
//   setDe(((291.87)+360*10));

//  }
//  if(result=="2"){
//   setDe(((301.6)+360*10));

//  }
//  if(result=="21"){
//   setDe(((311.3)+360*10));

//  }
//  if(result=="4"){
//   setDe(((321)+360*10));

//  }
//  if(result=="19"){
//   setDe(((330.786)+360*10));

//  }
//  if(result=="15"){
//   setDe(((340.5)+360*10));

//  }
//  if(result=="32"){
//   setDe(((350.2)+360*10));

//  }

// setDe(((350)+360*10));


      // spinn()
                // if ( stt.current===0 ) {
        // console.log("must spin is", true, prizeNumber["number"]);
        // playVideo();

          
        
        // setMustSpin(true);
    
        // new Audio(Myaudio[`_${getWinnerIndex(prizeNumber["number"])}`]).muted=false;

            //  }
            
            
      // }
 
      
  })
// spinn();

  return () => {
    socket.disconnect();
  }
   

},[]);
// console.log(result,time.second)
// console.log(de)

// if(timee.minute==1 && timee.second){

//   setDe()
// }
// var spin = keyframes`
// 0% { transform: rotate(0deg); }
// 100% { transform: rotate(${de}deg); }
// `;
function spinn(){
  var spino = keyframes`
  from{ transform: rotate(${0}deg); }
  to { transform: rotate(${de}deg); }
`;

// let styles = css`
//     animation: ${spino} ${20} ${'cubic-bezier(0, 0, 0.58, 1.0)'} ;
//   `;



  var mystyle = {

    // transition: " 15s ease-out;",
    // animateTo:` ${de} + 360*1`,
    // transition: "20s cubic-bezier(0, 0,0, 0.95)",
    // duration: "30s",
    // transitionTimingFunction: "cubic-bezier(0, 0, 0.58, 1.0)",
    transform: `rotate(${de}deg)`,
    // animation: `css${spino} 2s linear infinite`
    animation:  `${spino} 29s cubic-bezier(0, 0,0, 0.98)` ,
    overflow:"hidden"

    // console.log(de);

  };
  return(
  // <img style={mystyle} src={nwwheel}/>
  <div style={mystyle} id="nwwheel"/>

 
  )
}



//   function playVideo() {
//     const media = this.videoplayer.nativeElement;
//     media.muted = true; // without this line it's not working although I have "muted" in HTML
//     media.play();
// }

  // console.log(stt.current)

  // console.log(prizeNumber["number"])

  // const getWinnerIndex = (winNumber)=>{
  //   let index = null
  //   data.map((d,i)=> {
  //     if( parseInt(winNumber) ===  parseInt(d.option) ){
  //       index = i
  //     }
  //   })  
  //   return index
  // }

  // console.log(timee.pause)
  useEffect(()=>{
 renderElementBirr();
 spinn()
  },[])



  function renderElementBirr(){
    // if(timee.minute<3 ){
    
    // }
  
    if(timee.minute<3 ){
      // {result=("")}
      
      return <div id="inner-number"
         
      style={{ background: "#18181b"}} 
    // style={{ top: "39%", bottom: "40%", right: "37%", left: "40%"  }}
    // onClick={() => new Audio(Myaudio[`_${prizeNumber["number"]}`]).play()}
  >
      <div> 
      {/* <p className="inner-nu">  {  result ? result : ''}</p>   */}
      <p className="inner-nu">  {}</p>  

</div>
</div>
    }
    if(timee.minute>=4  && timee.second>34 ){
      // {result=("")}
      
      return <div id="inner-number"
         
      style={{ background: "#18181b"}} 
    // style={{ top: "39%", bottom: "40%", right: "37%", left: "40%"  }}
    // onClick={() => new Audio(Myaudio[`_${prizeNumber["number"]}`]).play()}
  >
      <div> 
      {/* <p className="inner-nu">  {  result ? result : ''}</p>   */}
      <p className="inner-nu">  {}</p>  

</div>
</div>
    }


//     if(timee.minute<2 ){
//       // {result=("")}
      
//       return <div id="inner-number"
         
//       style={{ background: "#18181b"}} 
//     // style={{ top: "39%", bottom: "40%", right: "37%", left: "40%"  }}
//     // onClick={() => new Audio(Myaudio[`_${prizeNumber["number"]}`]).play()}
//   >
//       <div> 
//       {/* <p className="inner-nu">  {  result ? result : ''}</p>   */}
//       <p className="inner-nu">  {}</p>  

// </div>
// </div>
//     }
    if((timee.minute===4 && timee.second<=34)){
      return<div id="inner-number"
         
      style={
  
  
        result===("wait")
        ? { background: "#18181b"}:
  
        result===("0")
        ? { background: "green"}:
  
  
        result===("32")
        ? { background: "#ff0c03"}:
  
        result===("15")
        ? { background: "#18181b"}:
  
        result===("19")
        ? { background: "#ff0c03"}:
  
        result===("4")
        ? { background: "#18181b"}:
  
        result===("21")
        ? { background: "#ff0c03"}:
  
        result===("2")
        ? { background: "#18181b"}:
  
        result===("25")
        ? { background: "#ff0c03"}:
  
        result===("17")
        ? { background: "#18181b"}:
  
        result===("34")
        ? { background: "#ff0c03"}:
  
        result===("6")
        ? { background: "#18181b"}:
  
        result===("27")
          ? { background: "#ff0c03"}:
  
               result===("13")
          ? { background: "#18181b"}:
  
          result===("36")
          ? { background: "#ff0c03"}:
  
          result===("11")
          ? { background: "#18181b"}:
  
          result===("30")
          ? { background: "#ff0c03"}:
  
          result===("8")
          ? { background: "#18181b"}:
  
          result===("23")
          ? { background: "#ff0c03"}:
  
          result===("10")
          ? { background: "#18181b"}:
  
          result===("5")
          ? { background: "#ff0c03"}:
  
          result===("24")
          ? { background: "#18181b"}:
  
          result===("16")
          ? { background: "#ff0c03"}:
  
          result===("33")
          ? { background: "#18181b"}:
  
          result===("1")
          ? { background: "#ff0c03"}:
          
          result===("20")
          ? { background: "#18181b"}:
  
          result===("14")
          ? { background: "#ff0c03"}:
  
          result===("31")
          ? { background: "#18181b"}:
  
          result===("9")
          ? { background: "#ff0c03"}:
  
          
          result===("22")
          ? { background: "#18181b"}:
  
          result===("18")
          ? { background: "#ff0c03"}:
  
          result===("29")
          ? { background: "#18181b"}:
  
          result===("7")
          ? { background: "#ff0c03"}:
  
          result===("28")
          ? { background: "#18181b"}:
  
          result===("12")
          ? { background: "#ff0c03"}:
  
          result===("35")
          ? { background: "#18181b"}:
  
          result===("3")
          ? { background: "#ff0c03"}:
  
          result===("26")
          ? { background: "#18181b"}:
  
          result===("0")
          ? {color:"white", background: "green"}
  
          : {}
        
        } 
    // style={{ top: "39%", bottom: "40%", right: "37%", left: "40%"  }}
    // onClick={() => new Audio(Myaudio[`_${prizeNumber["number"]}`]).play()}
  >
       <div> 
      <p className="inner-nu">  {  result }</p>  
</div>
</div>
    }
    if((timee.minute===3)){
      return<div id="inner-number"
         
      style={
  
  
        result===("wait")
        ? { background: "#18181b"}:
  
        result===("0")
        ? { background: "green"}:
  
  
        result===("32")
        ? { background: "#ff0c03"}:
  
        result===("15")
        ? { background: "#18181b"}:
  
        result===("19")
        ? { background: "#ff0c03"}:
  
        result===("4")
        ? { background: "#18181b"}:
  
        result===("21")
        ? { background: "#ff0c03"}:
  
        result===("2")
        ? { background: "#18181b"}:
  
        result===("25")
        ? { background: "#ff0c03"}:
  
        result===("17")
        ? { background: "#18181b"}:
  
        result===("34")
        ? { background: "#ff0c03"}:
  
        result===("6")
        ? { background: "#18181b"}:
  
        result===("27")
          ? { background: "#ff0c03"}:
  
               result===("13")
          ? { background: "#18181b"}:
  
          result===("36")
          ? { background: "#ff0c03"}:
  
          result===("11")
          ? { background: "#18181b"}:
  
          result===("30")
          ? { background: "#ff0c03"}:
  
          result===("8")
          ? { background: "#18181b"}:
  
          result===("23")
          ? { background: "#ff0c03"}:
  
          result===("10")
          ? { background: "#18181b"}:
  
          result===("5")
          ? { background: "#ff0c03"}:
  
          result===("24")
          ? { background: "#18181b"}:
  
          result===("16")
          ? { background: "#ff0c03"}:
  
          result===("33")
          ? { background: "#18181b"}:
  
          result===("1")
          ? { background: "#ff0c03"}:
          
          result===("20")
          ? { background: "#18181b"}:
  
          result===("14")
          ? { background: "#ff0c03"}:
  
          result===("31")
          ? { background: "#18181b"}:
  
          result===("9")
          ? { background: "#ff0c03"}:
  
          
          result===("22")
          ? { background: "#18181b"}:
  
          result===("18")
          ? { background: "#ff0c03"}:
  
          result===("29")
          ? { background: "#18181b"}:
  
          result===("7")
          ? { background: "#ff0c03"}:
  
          result===("28")
          ? { background: "#18181b"}:
  
          result===("12")
          ? { background: "#ff0c03"}:
  
          result===("35")
          ? { background: "#18181b"}:
  
          result===("3")
          ? { background: "#ff0c03"}:
  
          result===("26")
          ? { background: "#18181b"}:
  
          result===("0")
          ? {color:"white", background: "green"}
  
          : {}
        
        } 
    // style={{ top: "39%", bottom: "40%", right: "37%", left: "40%"  }}
    // onClick={() => new Audio(Myaudio[`_${prizeNumber["number"]}`]).play()}
  >
       <div> 
      <p className="inner-nu">  {  result }</p>  
</div>
</div>
    }


//     if(timee.minute<4){
//  {result=("")}
      
//     return  <div id="inner-number-birr"
         
//     style={ { background: "#18181b"}} 
//   // style={{ top: "39%", bottom: "40%", right: "37%", left: "40%"  }}
//   // onClick={() => new Audio(Myaudio[`_${prizeNumber["number"]}`]).play()}
// >
//     <div id="center-birr-number-pos"> 
//     {/* <p  className="inner-nu" id="center-birr-number">ETB {betbirr}</p> */}
//     <div >
//     <p id="center-birr-number">ETB</p>
//     <p id="center-birr-number">{betbirr}</p>
//     </div>
// </div>
// </div>;
//     }
  }

  // function renderElementResult(){
  //   if(timee.minute ){
  //     return <div> 
  //              <p className="inner-nu">  {  result ? result : ''}</p>  
  //     </div>;
  //   }
 
  // }
















  return (
    <div className="all-wheel-pos">
                   <div className="size-for-rela">
                                                                              <img className="relative-pic-frame" src={pic} />
                                                                        </div>
    <div  className="relative">                                                       
       {/* <div className="royal-sty">
      <img src={ring} />
      </div> */}
                                                                        {/* <div >
                                                                              <img id="relative-pic-frame" src={pic} />
                                                                        </div> */}
      {/* <div className="canvas-sty">
      <img src={pic1} />
      </div> */}
        
      {/* <div className="midball-sty">
      <img src={zero} />
      </div> */}
      <div className="canvas-sty-for-two-white"></div>
        <div className="canvas-sty-for-two"></div>
 <div >
      <img className="canvas-sty-two" src={pic2} />
      </div>
    

      <div>
      <div id="circle"></div>
     
        
        {/* <div id="inner-number"> */}
        {renderElementBirr()}
  
        {/* </div> */}
        {/* {renderElementResult()} */}
        {/* <p>abebe</p> */}

 


      </div>

     
       <div className="rotatee">
       <div  className="parent-container">
        
       {/* <img className="parent-container" src={nwwheel} /> */}

       {spinn()}

 
      {/* <Wheel
  
        mustStartSpinning={mustSpin}
        prizeNumber={getWinnerIndex(prizeNumber["number"])}
        data={data}
        innerRadius={65}
        perpendicularText={true}
        textDistance={89}
        spinDuration={1.5}
        outerBorderWidth={0}
        // innerBorderWidth={2}
        // radiusLineColor={'#D4AF37'}
        radiusLineWidth={0}

        // radiusLineColor={["#DAA520"]}
        fontSize={24}
        backgroundColors={["#18181b", "#ff0c03"]}
        textColors={["#ffffff"]}
        onStopSpinning={() => {
          setMustSpin(false);
          setResultNumber(prizeNumber["number"])
          try {
            setRsult(true)
            // setStarter(true)
            new Audio(Myaudio[`_${getWinnerIndex(prizeNumber["number"])}`]).play();
            new Audio(Myaudio[`_${getWinnerIndex(prizeNumber["number"])}`]).muted=false;
            console.log(prizeNumber["number"],'after audio')
          } catch (error) {
            console.log("audio error ", error);
          }
       
        }}
      /> */}


</div>
      </div>

      
    </div></div>
  );
};
export default MyWheel;
