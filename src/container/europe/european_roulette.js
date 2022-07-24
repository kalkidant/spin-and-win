import React, { useContext,useEffect, useRef, useState } from "react";
import  { useNavigate } from "react-router-dom";
// import Timer from "../../components/timer";
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
function EuropeanRoulette() {
  // const [gameCounter, setGameCounter] = useState(0);
  const [ result , setRsult] = useState(false)
  const sttt = useRef(0); 
  const[betBirr,setBetBirr]=useState("");
  //  const[starter,setStarter]=useState(false);
  //  const[round,setRound]=({round:0});

     const[ress,setRess]=useState("");

  // const ENDPOINT = "https://api.bet-shop.net/";
  // var itemone=null;
  const resRef =useRef(null);

  // const socket = socketIOClient("https://app.bet-shop.net/");
var itemone = JSON.parse(localStorage.getItem('shop-info'));


const st = useRef(0) 
const [rou, setRou] = useState({round:0,second:0,minute:0,pause:false,result:null})
const [timer, settimee] = useState({round:0,second:0,minute:0,pause:false,result:null,kenoResult:null})

const socket = useContext(SocketContext); 
// const clearState = () => {
//   setRess("");
// };
useEffect(()=>{
    
  socket.on("FromAPI", data => {
    // // if(starter===true){
    // settimee({round:data.round,second:data.second,minute:data.minute,pause:data.pause,result:data.result,kenoResult:data.keno_result})

    // // }
  // console.log(data)
  if(data.minute<=4 && data.second<=34 && data.resultFound === false){
    settimee({round:data.round,second:data.second,minute:data.minute,pause:data.pause,result:data.result,kenoResult:data.keno_result})

  
}


  // if(data.minute <=3 && data.second<=17){
  //     settimee({round:data.round,second:data.second,minute:data.minute,pause:data.pause,result:data.result,kenoResult:data.keno_result})

  // }

    
  if(data.resultFound === false){
    // console.log(sttt.current)
    sttt.current = 0

  
}
// if(data.minute < 3 && sttt.current===0){
//   clearState();

// }
  
if(data.minute ===0 && data.second ===2 && sttt.current===0){
 
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
                            sttt.current=+1
             
                            
               // resRef.current=element[key].winNumber.number.toString()

             }
             
     }} }   
  }   })

return () => {
  socket.disconnect();



}
 
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
                         
                          // console.log(element[key],key)
                          
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

      // console.log(sttt.current)

  // console.log(ress);

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

  return (
<div>

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
 <TopTen round={timer.round}/>

      	</div>
        <div>
           <Total round={timer.round}/>
        </div>
<TableColor round={timer.round}/>
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
         <p className="text-left text-xl font-bold ">{timer.round}</p>
      
        </div>
        <div className="wheel-pos">
          <div className="flex justify-center">
          {/* { console.log(prize) } */}
            <Wheel
             betbirr={betBirr}
              timee={timer}
              prizeNumber={{number:ress.toString()}}
              result = {result}
              setRsult = {setRsult}
              // resetTimer={() => {
              //   setGameCounter((c) => {
              
              //     return c + 1;
              //   });
              // }}
            
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
  );
}

export default EuropeanRoulette;

// Todo
// make async function request
// request inevery 4 second
// show the result
