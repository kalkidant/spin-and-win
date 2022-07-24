import React, { useEffect, useState } from "react";
import "../Components/Css/homeCss.css";
import * as GiIcons from "react-icons/gi";
import axios from "axios";
import { BASEURL } from "../Functions/apiUrl";
import bwipjs from 'bwip-js';
var Barcode = require("react-barcode");
export const TicketLast = React.forwardRef((props, ref) => {
  const [ticket, setticket] = useState([]);

 
  useEffect(() => {
    if (typeof localStorage.allticket !== 'undefined') {
      setticket(JSON.parse(localStorage.allticket))
      
    }
    try {
      // The return value is the canvas element
     const canvas = bwipjs.toCanvas('mycanvas', {
                bcid:        'code128',       // Barcode type
                text:        `${props.ticket.eventId}`,    // Text to encode
                scale:       6 ,               // 3x scaling factor
                height:      3,              // Bar height, in millimeters
                includetext: false,            // Show human-readable text
                textxalign:  'center',        // Always good to set this
            });
    } catch (e) {
        // e may be a string or Error object
    }
    // try {
    //   axios.interceptors.request.use(
    //     (config) => {
    //       config.headers.authorization = `${localStorage.getItem("token")}`;
    //       return config;
    //     },
    //     (error) => {
    //       return Promise.reject(error);
    //     }
    //   );
    //   axios.post(BASEURL + "ticket/printlastticket").then((response) => {
    //     if (response.data.ticket) {
    //       setTicket(response.data.ticket);
    //     } else {
    //       console.log("Error getting last ticket");
    //     }
    //   });
    // } catch (e) {
    //   console.log("Error getting last ticket", e);
    // }
  }, []);

  return (
   (props.ticket )?(
    <div ref={ref} className='p-1' style={{width:"78%"}}>
    <div className='row'>
      <div >
        <div className='row'>
          <div className='col-8'>
            <div className='row'>
              <div className='col-lg-12'>
                <small style={{fontSize:20}}>PROVIDED BY</small>
              </div>
              <div style={{fontSize:20}} className='col-lg-12'>BetShop</div>
            </div>
          </div>
          <div className='col-4'>
            {" "}
            <GiIcons.GiSpinningBlades size={40} />
          </div>
        </div>
        <div className='border border-dark smallFont'>
          <div className='row smallFont'>
            <div className='col-8 smallFont'>
              <small style={{fontSize:20}}> Ticket ID </small>
            </div>
            <div className='col-4 smallFont'>
              <small style={{fontSize:20}}>{props.ticket.eventId}</small>
            </div>
            {/* {props.ticket.eventId ?(
              <div className='col-4 smallFont'>
              <small>{props.ticket.eventId}</small>
            </div>
            ):(
              <div className='col-4 smallFont'>
              <small>{localStorage.ticketIds}</small>
            </div>
            )} */}
            
          </div>

          <div className='row'>
            <div className='col-8'>
              <small style={{fontSize:20}}> Printed on </small>
            </div>
            <div className='col-4 smallFont '>
              <small style={{fontSize:20}}>{props.ticket.createdAt}</small>
            </div>
          </div>
        </div>
        <div className='border border-dark'>
          {props.ticket.Bets ? (
            props.ticket.Bets.map((bets) => {
              return (
                <div className="row">
                <div className='col-8'>
                  <small style={{fontSize:20}}> {bets.number}</small>

                </div>
                <div className='col-4'>
                  <small style={{fontSize:20}}>ብር {bets.stake}</small>
                </div>
                </div>
                // <div className='row'>
                //   {!isNaN(bets.number)?(
                //     <div className="row">
                //   <div className='col-8'>
                //     <small style={{fontSize:20}}>Number: {bets.number}</small>

                //   </div>
                //   <div className='col-4'>
                //     <small style={{fontSize:20}}>ብር {bets.stake}</small>
                //   </div>
                //   </div>
                //   ):(
                //     <div> {(bets.color!==null)?(<div className='col-8'>
                //     <small style={{fontSize:20}}>Color: {bets.color}</small>
                //   </div>):""}
                //   {(bets.dozen!==null)?( <div className='col-8'>
                //     <small style={{fontSize:20}}>Dozen: {bets.dozen}</small>
                //   </div>):""}
                //  {(bets.odd!==null)?(<div className='col-8'>
                //     <small style={{fontSize:20}}>Odd: {bets.odd}</small>
                //   </div>):""}
                //   {(bets.low!==null)?( <div className='col-8'>
                //     <small style={{fontSize:20}}>Low: {bets.low}</small>
                //   </div>):""}
        
                  
                  
                //   <div className='col-4'>
                //     <small style={{fontSize:20}}>ብር {bets.stake}</small>
                //   </div>
                //   </div>
                //  )}
                 
                 
                // </div>
              );
            })
          ) : (
          
          
            <div className='row'>
              <div className='col-8'>
                <small style={{fontSize:20}}>Bets</small>
              </div>
              <div className='col-4'>
                <small style={{fontSize:20}}>ብር []</small>
              </div>
            </div>
          )}{" "}
        </div>
        <div className='border border-dark'>
          {" "}
          <div className='row'>
            <div className='col-8'>
              <small style={{fontSize:20}}> Total Stake </small>
            </div>
            <div className='col-4'>
              <small style={{fontSize:20}}>
                {" "}
                <b> {"ብር " + props.ticket.stake}</b>
              </small>
            </div>
          </div>
        </div>

        <div className='border border-dark'>
          {" "}
          <div className='row'>
            <div className='col-8'>
              <small style={{fontSize:20}}> Total win </small>
            </div>
            <div className='col-4' style={{fontSize:20}}>
              <small>
                {" "}
                <b> {"ብር " + props.ticket.possibleWin}</b>
              </small>
            </div>
          </div>
        </div>
        <div className='border border-dark'>
          {" "}
          <div className='row'>
            <div className='col-8'>
              <small style={{fontSize:20}}> Maximum winning payout </small>
            </div>
            <div className='col-4'>
              <small style={{fontSize:20}}>
                {" "}
                <b> {"ብር " + 100000}</b>
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


value={props.ticket.eventId} />
        
        <div className='row nomargin' >
        {/* <canvas id="mycanvas" style={{marginTop:10}}></canvas> */}
          <div className="col">
        

          </div>
        
       
        
          {/* <Barcode
            value={"http://localhost:3000/" + props.ticket.eventId}
            height={100}
            width={1}
            displayValue='false'
            format= "CODE128"


fontOptions= ""
font= "monospace"
textAlign= "center"
textPosition= "bottom"
          /> */}
        </div>
      </div>
      <div ></div>
    </div>
  </div>
   )

   :("")
    
  );
});
