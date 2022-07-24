import React, { useContext,useEffect, useRef, useState } from "react";

import "../../public/spinv.1/css/plugins/spinnwin/roulettedraw.css"
import { SocketContext } from '../../context/socket';
import { keyframes,css } from "styled-components";
import "./spinandwin.css"
import Modal from "react-modal";
import Grid from "./Grid";
const Wheel=({ prizeNumber, de,setStarter ,result, setRsult,timee,betbirr,jackPotTickets  })=>{

    const [mustSpin, setMustSpin] = useState(false);
    const stt = useRef(0); 
    const stttwo = useRef(0); 
    const arrOfObj = [100000, 200000, 300000, 400000, 500000, 600000, 700000, 800000, 900000, 1000000]
    const socket = useContext(SocketContext); 
    const [time, settime] = useState({round:0,second:0,minute:0,pause:false,result:null,kenoResult:null})
    const [isOpenreissue, setreissue] = useState(false);
 
    function toggleReissueModal() {
      setreissue(!isOpenreissue);
  
    }
  
   
    const [counter, setCounter] = useState(60);
    let signup='/signup';
 
    const deg = Math.floor(5000 + Math.random()*5000)
  const [data, setData]=useState(0)
    useEffect(() => {
      setreissue(true)
      counter > 0 && setTimeout(() => setCounter(counter - 1), 1000);
    
    }, []);
  
    useEffect(() => {
      
      socket.on("FromAPI", data => {
        settime({round:data.round,second:data.second,minute:data.minute,pause:data.pause,result:data.result,kenoResult:data.keno_result})
     
        if(data.resultFound==false){
       
          stt.current = 0
          setMustSpin(false);
        }
    
    })

  
    return () => {
      socket.disconnect();
    }
     
  
  },[]);

  function spinn(){
    var spino = keyframes`
    from{ transform: rotate(${0}deg); }
    to { transform: rotate(${de}deg); }
  
  `;
    var mystyle = {
      transform: `rotate(${de}deg)`,
      animation:  `${spino} 29s cubic-bezier(0, 0,0, 0.99)` ,
  
    };
    return(
    <div style={mystyle} id="wheel" ></div>
    );
    
    
  }


    useEffect(()=>{
   renderElementBirr();
   spinn()
  
    },[])
  
   
   
    // if(timee.minute===1  ){
    //   return setreissue(false)
    // }
    function renderElementBirr(){
      if(timee.minute<3 ){
        return <div>
        <div>
        <div  style={{ backgroundColor: "black",color:"black"}}  id="number"></div>
  </div>
  </div>
      }
      if(timee.minute>=4  && timee.second>34 ){
        return <div
    >
        <div> 
        <div         style={{ backgroundColor: "black",color:"black"}}  id="number">{}</div>

  
  </div>
  </div>
      }
      if((timee.minute===4 && timee.second<=34)){
        return<div 
    
    >
         <div> 
         <div 
        style={
    
    
          result===("wait")
          ? { backgroundColor: "black"}:
    
          result===("0")
          ? { background: "green"}:
    
    
          result===("32")
          ? { backgroundColor: "red"}:
    
          result===("15")
          ? { backgroundColor: "black"}:
    
          result===("19")
          ? { backgroundColor: "red"}:
    
          result===("4")
          ? { backgroundColor: "black"}:
    
          result===("21")
          ? { backgroundColor: "red"}:
    
          result===("2")
          ? { backgroundColor: "black"}:
    
          result===("25")
          ? { backgroundColor: "red"}:
    
          result===("17")
          ? { backgroundColor: "black"}:
    
          result===("34")
          ? { backgroundColor: "red"}:
    
          result===("6")
          ? { backgroundColor: "black"}:
    
          result===("27")
            ? { backgroundColor: "red"}:
    
                 result===("13")
            ? { backgroundColor: "black"}:
    
            result===("36")
            ? { backgroundColor: "red"}:
    
            result===("11")
            ? { backgroundColor: "black"}:
    
            result===("30")
            ? { backgroundColor: "red"}:
    
            result===("8")
            ? { backgroundColor: "black"}:
    
            result===("23")
            ? { backgroundColor: "red"}:
    
            result===("10")
            ? { backgroundColor: "black"}:
    
            result===("5")
            ? { backgroundColor: "red"}:
    
            result===("24")
            ? { backgroundColor: "black"}:
    
            result===("16")
            ? { backgroundColor: "red"}:
    
            result===("33")
            ? { backgroundColor: "black"}:
    
            result===("1")
            ? { backgroundColor: "red"}:
            
            result===("20")
            ? { backgroundColor: "black"}:
    
            result===("14")
            ? { backgroundColor: "red"}:
    
            result===("31")
            ? { backgroundColor: "black"}:
    
            result===("9")
            ? { backgroundColor: "red"}:
    
            
            result===("22")
            ? { backgroundColor: "black"}:
    
            result===("18")
            ? { backgroundColor: "red"}:
    
            result===("29")
            ? { backgroundColor: "black"}:
    
            result===("7")
            ? { backgroundColor: "red"}:
    
            result===("28")
            ? { backgroundColor: "black"}:
    
            result===("12")
            ? { backgroundColor: "red"}:
    
            result===("35")
            ? { backgroundColor: "black"}:
    
            result===("3")
            ? { backgroundColor: "red"}:
    
            result===("26")
            ? { backgroundColor: "black"}:
    
            result===("0")
            ? {color:"white", background: "green"}
    
            : {}
          
          }  id="number"> {  result }</div>
    
  </div>
  </div>
      }
      if((timee.minute===3 && timee.second<=36)){
        return<div>
         <div> 
         <div 
        style={
    
    
          result===("wait")
          ? { backgroundColor: "black"}:
    
          result===("0")
          ? { background: "green"}:
    
    
          result===("32")
          ? { backgroundColor: "red"}:
    
          result===("15")
          ? { backgroundColor: "black"}:
    
          result===("19")
          ? { backgroundColor: "red"}:
    
          result===("4")
          ? { backgroundColor: "black"}:
    
          result===("21")
          ? { backgroundColor: "red"}:
    
          result===("2")
          ? { backgroundColor: "black"}:
    
          result===("25")
          ? { backgroundColor: "red"}:
    
          result===("17")
          ? { backgroundColor: "black"}:
    
          result===("34")
          ? { backgroundColor: "red"}:
    
          result===("6")
          ? { backgroundColor: "black"}:
    
          result===("27")
            ? { backgroundColor: "red"}:
    
                 result===("13")
            ? { backgroundColor: "black"}:
    
            result===("36")
            ? { backgroundColor: "red"}:
    
            result===("11")
            ? { backgroundColor: "black"}:
    
            result===("30")
            ? { backgroundColor: "red"}:
    
            result===("8")
            ? { backgroundColor: "black"}:
    
            result===("23")
            ? { backgroundColor: "red"}:
    
            result===("10")
            ? { backgroundColor: "black"}:
    
            result===("5")
            ? { backgroundColor: "red"}:
    
            result===("24")
            ? { backgroundColor: "black"}:
    
            result===("16")
            ? { backgroundColor: "red"}:
    
            result===("33")
            ? { backgroundColor: "black"}:
    
            result===("1")
            ? { backgroundColor: "red"}:
            
            result===("20")
            ? { backgroundColor: "black"}:
    
            result===("14")
            ? { backgroundColor: "red"}:
    
            result===("31")
            ? { backgroundColor: "black"}:
    
            result===("9")
            ? { backgroundColor: "red"}:
    
            
            result===("22")
            ? { backgroundColor: "black"}:
    
            result===("18")
            ? { backgroundColor: "red"}:
    
            result===("29")
            ? { backgroundColor: "black"}:
    
            result===("7")
            ? { backgroundColor: "red"}:
    
            result===("28")
            ? { backgroundColor: "black"}:
    
            result===("12")
            ? { backgroundColor: "red"}:
    
            result===("35")
            ? { backgroundColor: "black"}:
    
            result===("3")
            ? { backgroundColor: "red"}:
    
            result===("26")
            ? { backgroundColor: "black"}:
    
            result===("0")
            ? {color:"white", background: "green"}
    
            : {}
          
          } 
          id="number"> {  result }</div>
        
  </div>
  </div>
      }
     
    }
  
   
  
  
  
  
  
  
  
  
  
  
  
  

    return(


        <div>
                <div id="wheel-center"></div>
               {spinn()}

                {/* <div id="wheel" ></div> */}
                <div id="wheel-top-base"></div>
      {renderElementBirr()}

    
      {((timee.minute===4 && timee.second<=24) && (timee.minute===4 && timee.second>=14)&&jackPotTickets.length !== 0)?(
  
         <Modal
         jackPotTickets={jackPotTickets}
         isOpen={isOpenreissue}
         onRequestClose={toggleReissueModal}
         contentLabel="My dialog"
         className="mymodal"
         overlayClassName="myoverlay"
         closeTimeoutMS={500}
       >
         {/* {console.log("testttt newww")} */}
      
         <div className="container">
         <Grid arrOfObj={jackPotTickets}/>
         </div>
</Modal>
      ):(
        ""
      )
     
      }
   
        </div>
    )
}
export default Wheel;