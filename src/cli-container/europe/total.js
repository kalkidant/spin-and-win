import React, { useContext,useEffect, useRef, useState } from "react";
import  { useNavigate } from "react-router-dom";
// import Timer from "../../components/timer";
import './spinandwin.css'
import "../../public/spinv.1/css/plugins/spinnwin/roulettedraw.css"

import { SocketContext } from '../../context/socket';


const  Total= ({round}) => {
  var itemone = JSON.parse(localStorage.getItem('clinet-shop-info'));
const [rou,setRou]=useState({round:0})
const[total,setTotal]=useState({});
const [table, SetTable] = useState({black:0,even:0,first_dozen:0,green:0,high:0,low:0,odd:0,red:0,second_dozen:0,third_dozen:0})

const[cold,setCold]=useState({});
const[hot,setHot]=useState({});



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
  async function nw() {
    
      let result = await fetch(  `${process.env.REACT_APP_TABLE_COLOR_END_POINT}`,{
    
        method:'POST',
        headers:{
          "Content-Type":"application/json",
          "Accept":"application/json",
      
          
           
        },
        body:JSON.stringify({shop:itemone})
        })
    
    
        result=await result.json();
        // console.log(result);
     
    
        SetTable({black:result.result.black,even:result.result.even,first_dozen:result.result.first_dozen,green:result.result.green,high:result.result.high,low:result.result.low, odd:result.result.odd,red:result.result.red, second_dozen:result.result.second_dozen,third_dozen:result.result.third_dozen})
        
      }
    
      nw()
  }, 2000);

},[round])












useEffect(()=>{
  setTimeout(() => {
    // const interval = setInterval(() => {
          async function totalTwo() {
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
      
        totalTwo()
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
<div  className="hot-cold-line">
{/* <div className="element-history-hot-first-col"
 
> */}
<div    style={
    number===" 0"
    ? { color: "green"}:


    number===" 32"
    ? { color: "#ff0c03"}:

    number===" 15"
    ? { color: "white"}:

    number===" 19"
    ? { color: "#ff0c03"}:

    number===" 4"
    ? { color: "white"}:

    number===" 21"
    ? { color: "#ff0c03"}:

    number===" 2"
    ? { color: "white"}:

    number===" 25"
    ? { color: "#ff0c03"}:

    number===" 17"
    ? { color: "white"}:

    number===" 34"
    ? { color: "#ff0c03"}:

    number===" 6"
    ? { color: "white"}:

    number===" 27"
      ? { color: "#ff0c03"}:

    number===" 13"
      ? { color: "white"}:

      number===" 36"
      ? { color: "#ff0c03"}:

      number===" 11"
      ? { color: "white"}:

      number===" 30"
      ? { color: "#ff0c03"}:

      number===" 8"
      ? { color: "white"}:

      number===" 23"
      ? { color: "#ff0c03"}:

      number===" 10"
      ? { color: "white"}:

      number===" 5"
      ? { color: "#ff0c03"}:

      number===" 24"
      ? { color: "white"}:

      number===" 16"
      ? { color: "#ff0c03"}:

      number===" 33"
      ? { color: "white"}:

      number===" 1"
      ? { color: "#ff0c03"}:
      
      number===" 20"
      ? { color: "white"}:

      number===" 14"
      ? { color: "#ff0c03"}:

      number===" 31"
      ? { color: "white"}:

      number===" 9"
      ? { color: "#ff0c03"}:

      
      number===" 22"
      ? { color: "white"}:

      number===" 18"
      ? { color: "#ff0c03"}:

      number===" 29"
      ? { color: "white"}:

      number===" 7"
      ? { color: "#ff0c03"}:

      number===" 28"
      ? { color: "white"}:

      number===" 12"
      ? { color: "#ff0c03"}:

      number===" 35"
      ? { color: "white"}:

      number===" 3"
      ? { color: "#ff0c03"}:

      number===" 26"
      ? { color: "white"}:

      number===" 0"
      ? {color:"white", color: "green"}

      : {}
    
    } className="hot-cold-number hot-cold-number-red">{number}</div>

</div>


);







let listItemsValue = resulttValueHot.map((number) =>
<div  className="hot-cold-line">

<div className="hot-cold-freq" id="pos-hot-lis">{number}</div>


</div>

);






















let listItemsCold = resulttCold.map((number) =>
<div className="hot-cold-line">

 

<div  style={
    number===" 0"
    ? { color: "green"}:


    number===" 32"
    ? { color: "#ff0c03"}:

    number===" 15"
    ? { color: "white"}:

    number===" 19"
    ? { color: "#ff0c03"}:

    number===" 4"
    ? { color: "white"}:

    number===" 21"
    ? { color: "#ff0c03"}:

    number===" 2"
    ? { color: "white"}:

    number===" 25"
    ? { color: "#ff0c03"}:

    number===" 17"
    ? { color: "white"}:

    number===" 34"
    ? { color: "#ff0c03"}:

    number===" 6"
    ? { color: "white"}:

    number===" 27"
      ? { color: "#ff0c03"}:

    number===" 13"
      ? { color: "white"}:

      number===" 36"
      ? { color: "#ff0c03"}:

      number===" 11"
      ? { color: "white"}:

      number===" 30"
      ? { color: "#ff0c03"}:

      number===" 8"
      ? { color: "white"}:

      number===" 23"
      ? { color: "#ff0c03"}:

      number===" 10"
      ? { color: "white"}:

      number===" 5"
      ? { color: "#ff0c03"}:

      number===" 24"
      ? { color: "white"}:

      number===" 16"
      ? { color: "#ff0c03"}:

      number===" 33"
      ? { color: "white"}:

      number===" 1"
      ? { color: "#ff0c03"}:
      
      number===" 20"
      ? { color: "white"}:

      number===" 14"
      ? { color: "#ff0c03"}:

      number===" 31"
      ? { color: "white"}:

      number===" 9"
      ? { color: "#ff0c03"}:

      
      number===" 22"
      ? { color: "white"}:

      number===" 18"
      ? { color: "#ff0c03"}:

      number===" 29"
      ? { color: "white"}:

      number===" 7"
      ? { color: "#ff0c03"}:

      number===" 28"
      ? { color: "white"}:

      number===" 12"
      ? { color: "#ff0c03"}:

      number===" 35"
      ? { color: "white"}:

      number===" 3"
      ? { color: "#ff0c03"}:

      number===" 26"
      ? { color: "white"}:

      number===" 0"
      ? {color:"white", color: "green"}

      : {}
    
    } className="hot-cold-number hot-cold-number-green">{number}</div>
</div>


);



let listItemsValueCold = resulttValueCold.map((number) =>
<div className="hot-cold-line">
<div className="element-history-hot-second-col-total">
<div className="hot-cold-freq" id="pos-hot-lis">{number}</div>

</div>
</div>

);





















return(



    <div>

      <div className="statistics-hot-cold statistics-hot">
      {listItems}
      {listItemsValue}
       </div>



       <div className="statistics-hot-cold statistics-cold">
        {listItemsCold}
        {listItemsValueCold}
       </div>



       
    <div className="statistics-frequencies">
    <div className="frequency-column frequency-column-1">
   
{ Object.keys(items).map((item, i) => (
           <div>
          
             {/* <p className="input-label">key: {i} Name: {items[item]}</p> */}
             <div className="frequency"> {items[item]} </div>
       </div>
       
     ))}



    <div className="frequency"></div>
    <div className="frequency">{table.first_dozen}</div>
    <div className="frequency">         {table.low}</div>
    <div className="frequency">   {table.odd}</div>
    </div>
    <div className="frequency-column frequency-column-2">

{ Object.keys(itemsTwo).map((item, i) => (
   <div>
        
             {/* <p className="input-label">key: {i} Name: {items[item]}</p> */}
             <div className="frequency"> {itemsTwo[item]}</div>
           
         </div>
     ))}



    

{ Object.keys(itemsZero).map((item, i) => (

            <div>
             {/* <p className="input-label">key: {i} Name: {items[item]}</p> */}
             <div className="frequency" id="sty-total"> {itemsZero[item]}</div>
             </div>
      
     ))}



    <div className="frequency">      {table.second_dozen}</div>
    <div className="frequency">{table.red}</div>
    <div className="frequency">     {table.black}</div>
    </div>
    <div className="frequency-column frequency-column-3">
     

{ Object.keys(itemsThree).map((item, i) => (
      
            <div>
             {/* <p className="input-label">key: {i} Name: {items[item]}</p> */}
             <div className="frequency"> {itemsThree[item]}</div>
             </div>
        
     ))}



    <div className="frequency"></div>
    <div className="frequency"> {table.third_dozen}</div>
    <div className="frequency">  {table.high}</div>
    <div className="frequency">      {table.even}</div>
    </div>
    </div>
          


    </div>
)





}


export default Total;