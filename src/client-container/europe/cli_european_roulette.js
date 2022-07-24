import React, { useContext,useEffect, useRef, useState } from "react";
import  { useNavigate } from "react-router-dom";
// import Timer from "../../components/timer";
import { useParams } from "react-router";
import Wheel from "../../components/wheel";
import './euro-roul.css'
import rouletteBack from "../../assets/roulette-back.png" 
import { SocketContext } from '../../context/socket';
import TableColor from "./table_colors";
import Timer from "../../components/timer";
// import { clear } from "@testing-library/user-event/dist/clear";
// import { cleanup } from "@testing-library/react";
import Total from "./total";
import TopTen from "./top_ten";
import { data } from "autoprefixer";
import {Helmet} from "react-helmet";
import useWindowSize from './windowssize'
function EuropeanRoulette() {
  const [gameCounter, setGameCounter] = useState(0);
  const [ result , setRsult] = useState(false)
  const sttt = useRef(0); 
  const[betBirr,setBetBirr]=useState("");
  const[dee,setDee]=useState(0);
  const element=useRef();
	const history=  useNavigate() ;
  const size = useWindowSize();
  //  const[round,setRound]=({round:0});
const[prev,setPrev]=useState(0);

     const[ress,setRess]=useState("");

  // const ENDPOINT = "https://api.bet-shop.net/";
  // var itemone=null;
  const resRef =useRef(null);

  // const socket = socketIOClient("https://app.bet-shop.net/");
var itemone = JSON.parse(localStorage.getItem('clinet-shop-info'));
const params = useParams();

const st = useRef(0) 
const [rou, setRou] = useState({round:0,second:0,minute:0,pause:false,result:null})
const [time, settime] = useState({round:0,second:0,minute:0,pause:false,result:null,kenoResult:null})

const socket = useContext(SocketContext); 
const[dataShop,setDataShop]=useState('');

// useEffect(() => {
//   async function getData() {
//   const response = await fetch(`https://api.cobet.et/api/auth/terminal/withId/?id=${params.id.toString()}`);
//   //const response = await fetch(`http://localhost:5000/record/gopa`);

//     if (!response.ok) {
//       const message = `An error occurred: ${response.status}`;
//       window.alert(message);
//       history("/error")
//       return;
//     }
    
//     const dbdata = await response.json();
//     //dbdata = response.json();
//     //window.alert(JSON.stringify(dbdata));
//     setDataShop(dbdata);
// 		// localStorage.setItem("clinet-shop-info",JSON.stringify(dbdata.get.Shop.shopname))

//     if (dbdata.status=="error") {
//       const message = `An error occurred: ${response.status}`;
//       history("/error")
//       return;
//     }
    
//     // console.log(dbdata)
//     //setData('fake data')

// 		localStorage.setItem("clinet-shop-info",JSON.stringify(dbdata.get.Shop.shopname))
  




//   }
//   getData();
//   return;
// },[]);



// console.log( dataShop);


// const clearState = () => {
//   setDee(0)

// }


// setPrev(prev=> prev+1)
// console.log(prev,'prev')
// console.log("asdasdasdasdas")
const prevCountRef = useRef();
const prevCountRefDeg = useRef();


useEffect(()=>{

  
  async function getData() {
    const response = await fetch(`https://api.cobet.et/api/auth/terminal/withId/?id=${params.id.toString()}`);
    //const response = await fetch(`http://localhost:5000/record/gopa`);
  
      if (!response.ok) {
        const message = `An error occurred: ${response.status}`;
        window.alert(message);
        history("/error")
        return;
      }
      
      const dbdata = await response.json();
      //dbdata = response.json();
      //window.alert(JSON.stringify(dbdata));
      setDataShop(dbdata);
      // localStorage.setItem("clinet-shop-info",JSON.stringify(dbdata.get.Shop.shopname))
  
      if (dbdata.status=="error") {
        const message = `An error occurred: ${response.status}`;
        history("/error")
        return;
      }
      
      // console.log(dbdata)
      //setData('fake data')
  
      localStorage.setItem("clinet-shop-info",JSON.stringify(dbdata.get.Shop.shopname))
    
      itemone = JSON.parse(localStorage.getItem('clinet-shop-info'));
  
  
  
  
    }
    getData();

},[])

useEffect(()=>{

  socket.on("FromAPI", data => {
      
  // console.log(data)

  // settime({round:data.round,second:data.second,minute:data.minute,pause:data.pause,result:data.result,kenoResult:data.keno_result})
  // if(data.minute==2&& data.second===0){

  // if(prevCountRef.current===ress){
  //    setDee(prevCountRef.current+360*15)
  // }

  

  if(data.minute<=4 && data.second<=34 && data.resultFound === false){
    settime({round:data.round,second:data.second,minute:data.minute,pause:data.pause,result:data.result,kenoResult:data.keno_result})

  
}

    
  if(data.resultFound === false){
    // console.log(sttt.current)
    sttt.current = 0
    // console.log(sttt.current)
  //  setRes(undef)


    
  
}

// if(data.minute==0 && data.second==2){
//   // setDee(0);
//   clearState();
// }
  
if( data.resultFound === true && sttt.current===0){
  // setDee(769);
 
        if(data.result instanceof Array ){
              for (let i = 0; i < data.result.length; i++) {
                const element = data.result[i];
                
                   const keys= Object.keys(element);
                    for (let j = 0; j < keys.length; j++) {
                              const key = keys[j];
                              // console.log(element[key].winNumber,key)
                              if(key===itemone ){
                              // console.log( element[key].winNumber,itemone,key)
                // getWinner();  
                            
                            setRess(element[key].winNumber.number);

                            if(prevCountRef.current===element[key].winNumber.number){
                              setDee(prevCountRefDeg.current+360*15)
                              break;
                            }
                            else{
                            if(element[key].winNumber.number===0){
                              // setPrev()
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
                            
               // resRef.current=element[key].winNumber.number.toString()

             }
             
     }} }  
     
      sttt.current=+1
  }  

})

// return () => {
//   socket.disconnect();

// }
// getData();

 
    },[])





  
      useEffect(()=>{
    
        socket.on("ShopBalance", data => {

        //  console.log(data,'shopbalance-------------------------------------------------------')


         if(data instanceof Array ){
          for (let i = 0; i < data.length; i++) {
            const element = data[i];
        
               const keys= Object.keys(element);
                for (let j = 0; j < keys.length; j++) {
                  const key = keys[j];
                  if(key===itemone ){
                         
                          console.log(element[key],key)
                          
                          // console.log( element[key].winNumber,itemone,key)
            // getWinner();  
                        
                        setBetBirr(element[key]);
                        // sttt.current=+1
         
                        
           // resRef.current=element[key].winNumber.number.toString()

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

    // useEffect(()=>{
    //   let resnw = ress.toString();
    //   socket.on("FromAPI", data => {

    //    if(data.minute==0 && data.second==0){
        
    //      if(resnw==="0"){
    //        setDee((0)+360*15);
        
    //      }
    //      if(resnw=="26"){
    //        setDee((9.72)+360*15);
        
    //      }
    //      if(resnw=="3"){
    //        setDee((19.5)+360*15);
        
    //      }
    //      if(resnw=="35"){
    //        setDee((29.5)+360*15);
        
    //      }
    //      if(resnw=="12"){
    //        setDee((38.91)+360*15);
        
    //      }
    //      if(resnw=="28"){
    //        setDee((48.65)+360*15);
        
    //      }
    //      if(resnw=="7"){
    //        setDee((58.4)+360*15);
        
    //      }
    //      if(resnw=="29"){
    //        setDee((68.1)+360*15);
        
    //      }
    //      if(resnw=="18"){
    //        setDee((77.8)+360*15);
        
    //      }
    //      if(resnw=="22"){
    //        setDee((87.561)+360*15);
        
    //      }
    //      if(resnw=="9"){
    //        setDee((97.29)+360*15);
        
    //      }
    //      if(resnw=="31"){
    //        setDee((107)+360*15);
        
    //      }
    //      if(resnw=="14"){
    //        setDee((116.7)+360*15);
        
    //      }
    //      if(resnw=="20"){
    //        setDee((126.5)+360*15);
        
    //      }
    //      if(resnw=="1"){
    //        setDee((136.2)+360*15);
        
    //      }
    //      if(resnw=="33"){
    //        setDee((145.935)+360*15);
        
    //      }
    //      if(resnw=="16"){
    //        setDee((155.7)+360*15);
        
    //      }
    //      if(resnw=="24"){
    //        setDee((165.4)+360*15);
        
    //      }
    //      if(resnw=="5"){
    //        setDee((175.1)+360*15);
        
    //      }
    //      if(resnw=="10"){
    //        setDee((184.85)+360*15);
        
    //      }
    //      if(resnw=="23"){
    //        setDee((194.58)+360*15);
        
    //      }
    //      if(resnw=="8"){
    //        setDee((204.31)+360*15);
        
    //      }
    //      if(resnw=="30"){
    //        setDee((214)+360*15);
        
    //      }
    //      if(resnw=="11"){
    //        setDee((223.767)+360*15);
        
    //      }
    //      if(resnw=="36"){
    //        setDee((233.5)+360*15);
        
    //      }
    //      if(resnw=="13"){
    //        setDee((243.225)+360*15);
        
    //      }
    //      if(resnw=="27"){
    //        setDee((252.95)+360*15);
        
    //      }
    //      if(resnw=="6"){
    //        setDee((262.7)+360*15);
        
    //      }
    //      if(resnw=="34"){
    //        setDee((272.4)+360*15);
        
    //      }
    //      if(resnw=="17"){
    //        setDee((282.141)+360*15);
        
    //      }
    //      if(resnw=="25"){
    //        setDee((291.87)+360*15);
        
    //      }
    //      if(resnw=="2"){
    //        setDee((301.6)+360*15);
        
    //      }
    //      if(resnw=="21"){
    //        setDee((311.3)+360*15);
        
    //      }
    //      if(resnw=="4"){
    //        setDee((321)+360*15);
        
    //      }
    //      if(resnw=="19"){
    //        setDee((330.786)+360*15);
        
    //      }
    //      if(resnw=="15"){
    //        setDee((340.5)+360*15);
        
    //      }
    //      if(resnw=="32"){
    //        setDee((350.2)+360*15);
        
    //      }
        
    //    }

    //   })

    // },[])
    
      // console.log(sttt.current)
// console.log(dee);
// console.log(resnw);
  // console.log(resu.result);

      // useEffect(()=>{
       
      // })

      // useEffect(()=>{

      //     getWinner();
   
      
      // },[])
      // let v=resRef.current;
   
      // let ab;
      
      // console.log(ress)


  // console.log(prize.number)
  // function randomInteger() {
  //   console.log("the random number");
  //   return "hi";
  //   // setPrizeNumber(Math.floor(Math.random() * (36 - 0 + 1)) + 0);
  // }
  useEffect(() => {
    //assign the ref's current value to the count Hook
    prevCountRef.current = ress;
  }, [ress]);
  // console.log(prevCountRef.current)
  
  
  
  useEffect(() => {
    //assign the ref's current value to the count Hook
    prevCountRefDeg.current = dee;
  }, [dee]);
  // console.log(prevCountRefDeg.current)

  return (
    <div style={{width:size.width,height:size.height}}>


<div className="container-main">

<div  className="relative-two" >  <img  className="relative-two"  src={rouletteBack } />  </div>

    <div id="custom"
      // ref={mouseRef}
      // onMouseEnter={() => (mouseRef.current.style.cursor = "none")}
      className="flex h-screen"
    >

      <div className="bg-rd-400 flex flex-3">
        <div className="time-pos">
        {<Timer finishTimer={() => {
          
          setRsult(false)
          }} /> }






          </div>

          <div>
 <TopTen round={time.round}/>

      	</div>
        <div>
           <Total round={time.round}/>
        </div>
<TableColor round={time.round}/>
               <p className="number">

                              x36
                </p>
      
                
               <p className="color">

                                 x2
                </p>
                <p className="oddandeven">

                                 x2
                  </p>
                
                  <p className="dozen">

                                 x3
                  </p>

 
                  <p className="highorlow">

                                 x2
                  </p>





         <div className="couter-pos">
         <p className="text-left text-xl font-bold ">{time.round}</p>
      
        </div>
        <div className="wheel-pos">
          <div className="flex justify-center">
          {/* { console.log(prize) } */}
            <Wheel
            de={dee}
             betbirr={betBirr}
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
          </div>
        </div>
      </div>
      {/* <div className="flex-1 bg-zinc-900 p-3">
        <div className="relative flex flex-col h-full">
          <PlayTable />
          <StatisticsTable />
        </div>
      </div> */}
    </div>
    </div>
    </div>
  );
}

export default EuropeanRoulette;

// Todo
// make async function request
// request inevery 4 second
// show the result
