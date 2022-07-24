import React, { useEffect, useState } from "react";
import "../Components/Css/homeCss.css";
import * as GiIcons from "react-icons/gi";
import bwipjs from 'bwip-js';
var Barcode = require("react-barcode");
export const Ticket = React.forwardRef((props, ref) => {
  const [ticketIDs, setticketIDs] = useState(props.ticket.eventId);
 
  function time() {
    var currentdate = new Date();
    var datetime =
      currentdate.getDay() +
      "/" +
      currentdate.getMonth() +
      "/" +
      currentdate.getFullYear() +
      "  " +
      currentdate.getHours() +
      ":" +
      currentdate.getMinutes();

    return datetime;
  }
  
  useEffect(() => {
    
    setticketIDs(props.ticket.eventId)
    try {
      // The return value is the canvas element
     const canvas = bwipjs.toCanvas('mycanvas', {
                bcid:        'code128',       // Barcode type
                text:        {ticketIDs},    // Text to encode
                scale:       4 ,               // 3x scaling factor
                height:      4,              // Bar height, in millimeters
                includetext: true,            // Show human-readable text
                textxalign:  'left',        // Always good to set this
               
            });
    } catch (e) {
        // e may be a string or Error object
    }
  }, []);
  
  return (
    <div ref={ref} className='p-1'style={{width:"78%"}}>
    <div className='row'>
      <div >
        <div className='row'>
          <div className='col-8'>
            <div className='row'>
              <div className='col-lg-12'>
                <small style={{fontSize:20}}>PROVIDED BY</small>
              </div>
              <div className='col-lg-12' style={{fontSize:20}}><b>BetShop</b></div>
            </div>
          </div>
          <div className='col-4'>
            {" "}
            <GiIcons.GiSpinningBlades size={40} /> <small><b>Spin to win</b></small>
          </div>
        </div>
        <div className='border border-dark'>
          <div className='row'>
            <div className='col-9'>
              <small style={{fontSize:20}}> Ticket ID</small>
            </div>
            <div className='col-3'>
              <small style={{fontSize:20}}>{localStorage.ticketIds}</small>
            </div>
          </div>
           
          <div className='row'>
            <div className='col-9'>
              <small style={{fontSize:20}}> Printited on </small>
            </div>
            <div className='col-3 smallFont'>
              <small style={{fontSize:20}}>{time()}</small>
            </div>
          </div>
        </div>
        <div className='border border-dark'>
        {props.ticket.Bets ? (
              props.ticket.Bets.map((bets) => {
                return (
                  <div className="row">
                  <div className='col-6'>
                    <small style={{fontSize:20}}> {bets.number}</small>


                  </div>
                  <div className='col-3'>
                    <small style={{fontSize:20}}>ብር {bets.stake}</small>
                  </div>
                 
                  <div className='col-3'>
                    <small style={{fontSize:20}}>ብር {bets.stake * bets.odd}</small>
                  </div>
                  </div>
                  // <div className='row'>
                  //   {!isNaN(bets.number)?(
                  //     <div className="row">
                  //   <div className='col-7'>
                  //     <small style={{fontSize:20}}>Number: {bets.number}</small>


                  //   </div>
                  //   <div className='col-5'>
                  //     <small style={{fontSize:20}}>ብር {bets.stake}</small>
                  //   </div>
                  //   </div>
                  //   ):(
                  //     <div> {(bets.color!==null)?(<div className='col-7'>
                  //     <small style={{fontSize:20}}>Color: {bets.color}</small>
                  //   </div>):""}
                  //   {(bets.dozen!==null)?( <div className='col-7'>
                  //     <small style={{fontSize:20}}>Dozen: {bets.dozen}</small>
                  //   </div>):""}
                  //  {(bets.odd!==null)?(<div className='col-7'>
                  //     <small style={{fontSize:20}}>Odd: {bets.odd}</small>
                  //   </div>):""}
                  //   {(bets.low!==null)?( <div className='col-7'>
                  //     <small style={{fontSize:20}}>Low: {bets.low}</small>
                  //   </div>):""}
          
                    
                    
                  //   <div className='col-4'>
                  //     <small>ብር {bets.stake}</small>
                  //   </div>
                  //   </div>
                  //  )}
                   
                   
                  // </div>
                );
              })
          ):( 
           <div className='row'>
           <div className='col-9'>
             <small style={{fontSize:20}}>Bets</small>
           </div>
           <div className='col-3'>
             <small style={{fontSize:20}}>ብር []</small>
           </div>
         </div>)}
          {" "}
        </div>
        <div className='border border-dark'>
          {" "}
          <div className='row'>
            <div className='col-9'>
              <small style={{fontSize:20}}> Total Stake </small>
            </div>
            <div className='col-3'>
              <small>
                <b  style={{fontSize:20}}> {"ብር " + props.ticket.stake}</b>
              </small>
            </div>
          </div>
        </div>

        <div className='border border-dark'>
          {" "}
          <div className='row'>
            <div className='col-9'>
              <small style={{fontSize:20}}> Total win </small>
            </div>
            <div className='col-3'>
              <small>
                {" "}
                <b style={{fontSize:20}}> {"ብር " + props.ticket.possibleWin}</b>
              </small>
            </div>
          </div>
        </div>
        <div className='border border-dark'>
          {" "}
          <div className='row'>
            <div className='col-9'>
              <small style={{fontSize:20}}> Maximum winning payout </small>
            </div>
            <div className='col-3'>
              <small>
                {" "}
                <b style={{fontSize:20}}> {"ብር " + 100000}</b>
              </small>
            </div>
          </div>
        </div>
        <Barcode 
height= {50}
format= "CODE128"
displayValue= {false}
fontOptions= ""


textAlign= "left"
textPosition= "bottom"
padding="7"
fontSize= {10}

margin= "6"


value={props.ticketID} />
        <div className='row' >
        {/* <canvas id="mycanvas"   ></canvas> */}
          {/* <div className="col" > */}
         
          

          {/* </div> */}
          </div>
       
       
        
      </div>
      <div ></div>
    </div>
  </div>
    
  );
});
