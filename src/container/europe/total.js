import React, { useContext,useEffect, useRef, useState } from "react";
import  { useNavigate } from "react-router-dom";
// import Timer from "../../components/timer";

import './euro-roul.css' 
import { SocketContext } from '../../context/socket';

const  Total= ({round}) => {

const [rou,setRou]=useState({round:0})
const[total,setTotal]=useState({});

const[cold,setCold]=useState({});
const[hot,setHot]=useState({});
var itemone = JSON.parse(localStorage.getItem('shop-info'));
    // const socket = useContext(SocketContext); 
    // useEffect(()=>{

    //     socket.on("FromAPI", data => {
      
    //         console.log(data.resultFound,data.result)
    //         setRou({round:data.round})
    //     }
        
        
        
    //     )

    //     return () => {
    //         socket.disconnect();}

    // },[]
    
    // )






const MINUTE_MS = 20000;


useEffect(()=>{
  setTimeout(() => {
    // const interval = setInterval(() => {
          async function nwTwo() {
        let results = await fetch(`${process.env.REACT_APP_TOTAL_END_POINT}`,{
      
          method:'POST',
          headers:{
            "Content-Type":"application/json",
            "Accept":"application/json",
        
            
             
          },
          body:JSON.stringify({shop:itemone})
          })
      
      
          results=await results.json();
          // console.log(results);
          setTotal([results.total][0])
          setCold([results.cold][0])
          setHot([results.hot][0])
      
        }
      
        nwTwo()
            }, 2000);

    // },MINUTE_MS);
    // return () => clearInterval(interval);
},[round])
// console.log(cold);


function listItemstotal(){

  

 }


 const items = Object.keys(total).slice(1, 13).reduce((result, key) => {
    result[key] = total[key];

    return result;
}, {});


const itemsTwo=Object.keys(total).slice(13,25).reduce((result, key) => {
    result[key] = total[key];

    return result;
}, {});



const itemsThree=Object.keys(total).slice(25,37).reduce((result, key) => {
    result[key] = total[key];

    return result;
}, {});



const itemsZero=Object.keys(total).slice(25,37).reduce((result, key) => {
    result[0] = total[0];

    return result;
}, {});


let resultt = Object.keys(hot);
let resulttValueHot=Object.values(hot);

let resulttCold = Object.keys(cold);
let resulttValueCold=Object.values(cold);













let listItems = resultt.map((number) =>
<li>
<div className="element-history-hot-first-col"
  style={
    number===" 0"
    ? { color: "green"}:


    number===" 32"
    ? { color: "#d92929"}:

    number===" 15"
    ? { color: "white"}:

    number===" 19"
    ? { color: "#d92929"}:

    number===" 4"
    ? { color: "white"}:

    number===" 21"
    ? { color: "#d92929"}:

    number===" 2"
    ? { color: "white"}:

    number===" 25"
    ? { color: "#d92929"}:

    number===" 17"
    ? { color: "white"}:

    number===" 34"
    ? { color: "#d92929"}:

    number===" 6"
    ? { color: "white"}:

    number===" 27"
      ? { color: "#d92929"}:

    number===" 13"
      ? { color: "white"}:

      number===" 36"
      ? { color: "#d92929"}:

      number===" 11"
      ? { color: "white"}:

      number===" 30"
      ? { color: "#d92929"}:

      number===" 8"
      ? { color: "white"}:

      number===" 23"
      ? { color: "#d92929"}:

      number===" 10"
      ? { color: "white"}:

      number===" 5"
      ? { color: "#d92929"}:

      number===" 24"
      ? { color: "white"}:

      number===" 16"
      ? { color: "#d92929"}:

      number===" 33"
      ? { color: "white"}:

      number===" 1"
      ? { color: "#d92929"}:
      
      number===" 20"
      ? { color: "white"}:

      number===" 14"
      ? { color: "#d92929"}:

      number===" 31"
      ? { color: "white"}:

      number===" 9"
      ? { color: "#d92929"}:

      
      number===" 22"
      ? { color: "white"}:

      number===" 18"
      ? { color: "#d92929"}:

      number===" 29"
      ? { color: "white"}:

      number===" 7"
      ? { color: "#d92929"}:

      number===" 28"
      ? { color: "white"}:

      number===" 12"
      ? { color: "#d92929"}:

      number===" 35"
      ? { color: "white"}:

      number===" 3"
      ? { color: "#d92929"}:

      number===" 26"
      ? { color: "white"}:

      number===" 0"
      ? {color:"white", color: "green"}

      : {}
    
    }
>
   <p >{number}</p>
</div>
</li>

);



let listItemsValue = resulttValueHot.map((number) =>
<li>
<div className="element-history-hot-second-col">
   <p >{number}</p>
</div>
</li>

);






















let listItemsCold = resulttCold.map((number) =>
<li>
<div className="element-history-hot-first-col"
  style={
    number===" 0"
    ? { color: "green"}:


    number===" 32"
    ? { color: "#d92929"}:

    number===" 15"
    ? { color: "white"}:

    number===" 19"
    ? { color: "#d92929"}:

    number===" 4"
    ? { color: "white"}:

    number===" 21"
    ? { color: "#d92929"}:

    number===" 2"
    ? { color: "white"}:

    number===" 25"
    ? { color: "#d92929"}:

    number===" 17"
    ? { color: "white"}:

    number===" 34"
    ? { color: "#d92929"}:

    number===" 6"
    ? { color: "white"}:

    number===" 27"
      ? { color: "#d92929"}:

    number===" 13"
      ? { color: "white"}:

      number===" 36"
      ? { color: "#d92929"}:

      number===" 11"
      ? { color: "white"}:

      number===" 30"
      ? { color: "#d92929"}:

      number===" 8"
      ? { color: "white"}:

      number===" 23"
      ? { color: "#d92929"}:

      number===" 10"
      ? { color: "white"}:

      number===" 5"
      ? { color: "#d92929"}:

      number===" 24"
      ? { color: "white"}:

      number===" 16"
      ? { color: "#d92929"}:

      number===" 33"
      ? { color: "white"}:

      number===" 1"
      ? { color: "#d92929"}:
      
      number===" 20"
      ? { color: "white"}:

      number===" 14"
      ? { color: "#d92929"}:

      number===" 31"
      ? { color: "white"}:

      number===" 9"
      ? { color: "#d92929"}:

      
      number===" 22"
      ? { color: "white"}:

      number===" 18"
      ? { color: "#d92929"}:

      number===" 29"
      ? { color: "white"}:

      number===" 7"
      ? { color: "#d92929"}:

      number===" 28"
      ? { color: "white"}:

      number===" 12"
      ? { color: "#d92929"}:

      number===" 35"
      ? { color: "white"}:

      number===" 3"
      ? { color: "#d92929"}:

      number===" 26"
      ? { color: "white"}:

      number===" 0"
      ? {color:"white", color: "green"}

      : {}
    
    }
>
   <p >{number}</p>
</div>
</li>

);



let listItemsValueCold = resulttValueCold.map((number) =>
<li>
<div className="element-history-hot-second-col">
   <p >{number}</p>
</div>
</li>

);





















return(



    <div>

<ul className="element-history-one-move">
{ Object.keys(items).map((item, i) => (
        <li  key={i}>
            <div className="element-history-one">
             {/* <p className="input-label">key: {i} Name: {items[item]}</p> */}
             <p className="input-label"> {items[item]}</p>
             </div>
         </li>
     ))}


  </ul>





  <ul className="element-history-two-move">
{ Object.keys(itemsTwo).map((item, i) => (
        <li  key={i}>
            <div className="element-history-two">
             {/* <p className="input-label">key: {i} Name: {items[item]}</p> */}
             <p className="input-label"> {itemsTwo[item]}</p>
             </div>
         </li>
     ))}


  </ul>




  
  <ul className="element-history-three-move">
{ Object.keys(itemsThree).map((item, i) => (
        <li  key={i}>
            <div className="element-history-three">
             {/* <p className="input-label">key: {i} Name: {items[item]}</p> */}
             <p className="input-label"> {itemsThree[item]}</p>
             </div>
         </li>
     ))}


  </ul>





  <ul className="element-history-zero-move">
{ Object.keys(itemsZero).map((item, i) => (
        <li  key={i}>
            <div className="element-history-zero">
             {/* <p className="input-label">key: {i} Name: {items[item]}</p> */}
             <p className="input-label"> {itemsZero[item]}</p>
             </div>
         </li>
     ))}


  </ul>










  

  <ul className="element-history-cold-move">

  
        <li >
           
            <div>
            {listItemsCold}

         <div className="cold-col-two-pos">
                 {listItemsValueCold}
         </div>
            
         
             </div>
         </li>
   


  </ul>





  <ul className="element-history-hot-move">

  
        <li >
           
            <div>
            {listItems}

         <div className="hot-col-two-pos">
                 {listItemsValue}
         </div>
            
         
             </div>
         </li>
   


  </ul>














 
    </div>
)





}


export default Total;