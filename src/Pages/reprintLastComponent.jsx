import React, { useEffect, useState } from "react";
import "../Components/Css/homeCss.css";
import * as GiIcons from "react-icons/gi";
import axios from "axios";
import { BASEURL } from "../Functions/apiUrl";
import bwipjs from 'bwip-js';
var Barcode = require("react-barcode");
export const RePrintTicketLast = React.forwardRef((props, ref) => {
  const [ticket, setreprint] = useState(props.ticket.eventId);
  
  useEffect(() => {
    setreprint(props.ticket.eventId)
    try {
      // The return value is the canvas element
      const canvas = bwipjs.toCanvas('mycanvas', {
        bcid:        'code128',       // Barcode type
        text:        {ticket},    // Text to encode
        scale:       4 ,               // 3x scaling factor
        height:      4,              // Bar height, in millimeters
        includetext: true,            // Show human-readable text
        textxalign:  'left',        // Always good to set this
       
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
    //   axios.post(BASEURL + "props.ticket/reprintlastprops.ticket").then((response) => {
    //     if (response.data.props.ticket[0]) {
    //       console.log(response.data.props.ticket[0]);
    //       setprops.ticket(response.data.props.ticket[0]);
    //     } else {
    //       console.log("Error getting last props.ticket");
    //     }
    //   });
    // } catch (e) {
    //   console.log("Error getting last props.ticket", e);
    // }
  }, []);
  return (
   
    <div ref={ref} className='p-1' style={{width:"78%"}}>
      <div className='row'>
        <div >
          <div className='row'>
            <div className='col-8'>
              <div className='row'>
                <div className='col-lg-12'>
                  <small style={{fontSize:20}}>PROVIDED BY</small>
                </div>
                <div className='col-lg-12' style={{fontSize:20}}>BetShop</div>
              </div>
            </div>
            <div className='col-4'> </div>
          </div>
          <div className='border border-dark smallFont'>
            <div className='row '>
              <div className='col-8 '>
                <small style={{fontSize:20}}> ticket ID </small>
              </div>
              <div className='col-4 smallFont'>
                <small style={{fontSize:20}}>{props.ticket.eventId}</small>
              </div>
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
                    <small style={{fontSize:20}}>Number: {bets.number}</small>

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
                <small>
                  {" "}
                  <b style={{fontSize:20}}> {"ብር " + props.ticket.stake}</b>
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
              <div className='col-4'>
                <small>
                  {" "}
                  <b style={{fontSize:20}}> {"ብር " + props.ticket.win ? props.ticket.win : "0"}</b>
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


value={props.ticket.eventId} />
          <div className='row ' >
        {/* <canvas id="mycanvas" style={{marginTop:10}}></canvas> */}
            <div className="col">
           

            </div>
          </div>
         
        </div>
        <div ></div>
      </div>
    </div>
  );
});
