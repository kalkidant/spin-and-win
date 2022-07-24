// import React, { useContext,useEffect, useRef, useState } from "react";
// import  { useNavigate } from "react-router-dom";
// // import Timer from "../../components/timer";
// import Wheel from "../../components/wheel";
// import './euro-roul.css'
// import rouletteBack from "../../assets/roulette-back.png" 
// import { SocketContext } from '../../context/socket';
// import TableColor from "./table_colors";
// import Timer from "../../components/timer";
// // import { clear } from "@testing-library/user-event/dist/clear";
// // import { cleanup } from "@testing-library/react";
// import Total from "./total";
// import TopTen from "./top_ten";
// import './euro-roul.css' 
// import EuropeanRoulette from "./european_roulette";

// const  Collect= () => {



//     const [gameCounter, setGameCounter] = useState(0);
//     const [ result , setRsult] = useState(false)
//     const sttt = useRef(0); 
//     const[betBirr,setBetBirr]=useState("");
  
//     //  const[round,setRound]=({round:0});
  
//        const[ress,setRess]=useState("");
  
//     // const ENDPOINT = "https://api.bet-shop.net/";
//     // var itemone=null;
//     const resRef =useRef(null);
  
//     // const socket = socketIOClient("https://app.bet-shop.net/");
//   var itemone = JSON.parse(localStorage.getItem('shop-info'));
  
  
//   const st = useRef(0) 
//   const [rou, setRou] = useState({round:0,second:0,minute:0,pause:false,result:null})
//   const [time, settime] = useState({round:0,second:0,minute:0,pause:false,result:null,kenoResult:null})
  
//   const socket = useContext(SocketContext); 
//   useEffect(()=>{
      
//     socket.on("FromAPI", data => {
        
//     // console.log(data)
  
//     settime({round:data.round,second:data.second,minute:data.minute,pause:data.pause,result:data.result,kenoResult:data.keno_result})
  
  
  
      
//     if(data.resultFound === false){
//       // console.log(sttt.current)
//       sttt.current = 0
//       // console.log(sttt.current)
//     //  setRes(undef)
  
  
      
    
//   }
    
//   if(data.resultFound==false && data.minute ===0 && data.second ===2 && sttt.current===0){
   
//           if(data.result instanceof Array ){
//                 for (let i = 0; i < data.result.length; i++) {
//                   const element = data.result[i];
                  
//                      const keys= Object.keys(element);
//                       for (let j = 0; j < keys.length; j++) {
//                                 const key = keys[j];
//                                 console.log(element[key].winNumber,key)
//                                 if(key===itemone ){
//                                 console.log( element[key].winNumber,itemone,key)
//                   // getWinner();  
                              
//                               setRess(element[key].winNumber.number);
//                               sttt.current=+1
               
                              
//                  // resRef.current=element[key].winNumber.number.toString()
  
//                }
               
//        }} }   
//     }   })
  
//   return () => {
//     socket.disconnect();
  
  
  
//   }
   
//       },[])
  
  
  
  
  
    
//         useEffect(()=>{
      
//           socket.on("ShopBalance", data => {
  
//           //  console.log(data,'shopbalance-------------------------------------------------------')
  
  
//            if(data instanceof Array ){
//             for (let i = 0; i < data.length; i++) {
//               const element = data[i];
          
//                  const keys= Object.keys(element);
//                   for (let j = 0; j < keys.length; j++) {
//                     const key = keys[j];
//                     if(key===itemone ){
                           
//                             console.log(element[key],key)
                            
//                             // console.log( element[key].winNumber,itemone,key)
//               // getWinner();  
                          
//                           setBetBirr(element[key]);
//                           // sttt.current=+1
           
                          
//              // resRef.current=element[key].winNumber.number.toString()
  
//            }
           
//    }} 
  
//            }
  
//            if(data.length==0){
//                    setBetBirr("0");
//            }
//           }
          
          
//           )
//           return () => {
//             socket.disconnect();
          
          
          
//           }
        
  
//       },[])
  












// return(


//     <div>
// <div  className="relative-two" >  <img  className="relative-two"  src={rouletteBack } />  </div>

// <div
//   // ref={mouseRef}
//   // onMouseEnter={() => (mouseRef.current.style.cursor = "none")}
//   className="flex h-screen"
// >

//   <div className="bg-rd-400 flex flex-3">
//     <div className="time-pos">
//     {<Timer finishTimer={() => {
      
//       setRsult(false)
//       }} /> }






//       </div>

//       <div>
// <TopTen round={time.round}/>

//       </div>
//     <div>
//        <Total round={time.round}/>
//     </div>
// <TableColor round={time.round}/>
//            <p className="number">

//                           x36
//             </p>
  
            
//            <p className="color">

//                              x2
//             </p>
//             <p className="oddandeven">

//                              x2
//               </p>
            
//               <p className="dozen">

//                              x3
//               </p>


//               <p className="highorlow">

//                              x2
//               </p>





//      <div className="couter-pos">
//      {/* <p className="text-left text-xl font-bold ">{time.round}</p> */}
  
//     </div>

//   </div>
// </div>







//         <div>
//       <EuropeanRoulette   betBirr={betBirr} time={time}/>
//       </div>
//     </div>
// )

// }


// export default Collect;