import React, { useContext,useEffect, useRef, useState } from "react";
import  { useNavigate } from "react-router-dom";
// import Timer from "../../components/timer";

import './euro-roul.css' 
import { SocketContext } from '../../context/socket';

const  TopTen= ({round}) => {

const[topTenValue,setTopTen]=useState([]);

var itemone = JSON.parse(localStorage.getItem('clinet-shop-info'));




    useEffect(()=>{
      setTimeout(() => {
        // const interval = setInterval(() => {
              async function nwTwo() {
            let results = await fetch(`${process.env.REACT_APP_TOP_TEN_END_POINT}`,{
          
              method:'POST',
              headers:{
                "Content-Type":"application/json",
                "Accept":"application/json",
            
                
                 
              },
              body:JSON.stringify({shop:itemone})
              })
          
          
              results=await results.json();
              // console.log(results);
            setTopTen([results.results][0])
          
            }
          
            nwTwo()
          }, 2000);

        // },MINUTE_MS);
        // return () => clearInterval(interval);
    },[round])


// console.log(topTenValue)



// useEffect(()=>{


//     async function nw() {
//         let results = await fetch(`https://api.cobet.et/api/result/todayshopresult`,{
      
//           method:'POST',
//           headers:{
//             "Content-Type":"application/json",
//             "Accept":"application/json",
        
            
             
//           },
//           body:JSON.stringify({shop:itemone})
//           })
      
      
//           results=await results.json();
//           console.log(results);
       
      
//         //   SetTable({black:result.result.black,even:result.result.even,first_dozen:result.result.first_dozen,green:result.result.green,high:result.result.high,low:result.result.low, odd:result.result.odd,red:result.result.red, second_dozen:result.result.second_dozen,third_dozen:result.result.third_dozen})
          
//         }
      
//         nw()


// },[rou.round])

let v=23;
// const numbers = [1, 2, 7,9,11,13,15,19,0,22]
// console.log(numbers);
let listItems = topTenValue.map((number) =>

<div className="element"
  style={
    number==="0"
    ? { color: "green",marginLeft:'1.5rem'}:


    number==="32"
    ? { color: "#ff0c03"}:

    number==="15"
    ? { color: "white",marginLeft:'3rem'}:

    number==="19"
    ? { color: "#ff0c03"}:

    number==="4"
     ? { color: "white",marginLeft:'3rem'}:

    number==="21"
    ? { color: "#ff0c03"}:

    number==="2"
     ? { color: "white",marginLeft:'3rem'}:

    number==="25"
    ? { color: "#ff0c03"}:

    number==="17"
     ? { color: "white",marginLeft:'3rem'}:

    number==="34"
    ? { color: "#ff0c03"}:

    number==="6"
     ? { color: "white",marginLeft:'3rem'}:

    number==="27"
      ? { color: "#ff0c03"}:

           number==="13"
       ? { color: "white",marginLeft:'3rem'}:

      number==="36"
      ? { color: "#ff0c03"}:

      number==="11"
       ? { color: "white",marginLeft:'3rem'}:

      number==="30"
      ? { color: "#ff0c03"}:

      number==="8"
       ? { color: "white",marginLeft:'3rem'}:

      number==="23"
      ? { color: "#ff0c03"}:

      number==="10"
       ? { color: "white",marginLeft:'3rem'}:

      number==="5"
      ? { color: "#ff0c03"}:

      number==="24"
       ? { color: "white",marginLeft:'3rem'}:

      number==="16"
      ? { color: "#ff0c03"}:

      number==="33"
       ? { color: "white",marginLeft:'3rem'}:

      number==="1"
      ? { color: "#ff0c03"}:
      
      number==="20"
       ? { color: "white",marginLeft:'3rem'}:

      number==="14"
      ? { color: "#ff0c03"}:

      number==="31"
       ? { color: "white",marginLeft:'3rem'}:

      number==="9"
      ? { color: "#ff0c03"}:

      
      number==="22"
       ? { color: "white",marginLeft:'3rem'}:

      number==="18"
      ? { color: "#ff0c03"}:

      number==="29"
       ? { color: "white",marginLeft:'3rem'}:

      number==="7"
      ? { color: "#ff0c03"}:

      number==="28"
       ? { color: "white",marginLeft:'3rem'}:

      number==="12"
      ? { color: "#ff0c03"}:

      number==="35"
       ? { color: "white",marginLeft:'3rem'}:

      number==="3"
      ? { color: "#ff0c03"}:

      number==="26"
       ? { color: "white",marginLeft:'3rem'}:

      number==="0"
      ? {color:"white", color: "green"}

      : {}
    
    }

>
   <li id="top-ten-pos" className="padding-element">{number}</li>
</div>


);

return(



    <div className="element-pos-last">
<ul>
    {listItems}
</ul>

    </div>
)





}


export default TopTen;