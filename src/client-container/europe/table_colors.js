import React, { useContext,useEffect, useRef, useState } from "react";
import  { useNavigate } from "react-router-dom";
// import Timer from "../../components/timer";

import './euro-roul.css' 
import { SocketContext } from '../../context/socket';

const  TableColor= ({round}) => {

const [rou,setRou]=useState({round:0})
const [time, settime] = useState({round:0,second:0,minute:0,pause:false,result:null,kenoResult:null})
const [table, SetTable] = useState({black:0,even:0,first_dozen:0,green:0,high:0,low:0,odd:0,red:0,second_dozen:0,third_dozen:0})
const [errorMessage, setErrorMessage] = useState('');


const history=  useNavigate() ;
var itemone = JSON.parse(localStorage.getItem('clinet-shop-info'));
    const socket = useContext(SocketContext); 
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



return(



    <div>

<p className=" first-dozen">

{table.first_dozen}
</p>

<p className=" second-dozen">

            {table.second_dozen}
</p>

<p className=" three-dozen">
{table.third_dozen}
              
</p>

<p className="low">

         {table.low}
</p>

<p className="high">

        {table.high}
</p>
<p className="red">

{table.red}
</p>
<p className="black">

     {table.black}
 </p>
 {/* <p className="green">

      {table.green}
 </p> */}

 <p className="even">

       {table.even}
  </p>

 <p className="odd">

        {table.odd}
 </p>

    </div>
)





}


export default TableColor;