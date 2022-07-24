import React, { useEffect, useState } from "react";
import "../Components/Css/homeCss.css";
import * as GiIcons from "react-icons/gi";
import axios from "axios";
import { BASEURL } from "../Functions/apiUrl";
import bwipjs from 'bwip-js';
var Barcode = require("react-barcode");
export const SingleTicket = React.forwardRef((props,ref) => {
    const [ticket, setticketid] = useState("");
   
    useEffect(() => {
      axios.interceptors.request.use(
        (config) => {
          config.headers.authorization = `${localStorage.getItem("token")}`;
          return config;
        },
        (error) => {
          return Promise.reject(error);
        }
      );
      try {
        var param = {
          
          // ticketID: ticketID,
          ticketId:props.tid,
        };
        axios
          .post(BASEURL + "bet/payout", param)
          .then((response) => {
            setticketid(response.data.ticket)
  
          })
          .catch((e) => {
            alert("Some error occured...try again");
          });
      } catch (e) {
        alert("Some error occured...try again");
      }
      }, []);
  
   
      try {
        // The return value is the canvas element
       const canvas = bwipjs.toCanvas('mycanvas', {
         
                  bcid:        'code128',       // Barcode type
                  text:        `${props.ticket.eventId}`,
                     // Text to encode
                  scale:       6 ,               // 3x scaling factor
                  height:      3,              // Bar height, in millimeters
                  includetext: false,            // Show human-readable text
                  textxalign:  'center',        // Always good to set this
              });
      } catch (e) {
          // e may be a string or Error object
      }
  return (
    (props.ticket)?(
      <div ref={ref} className='p-1'style={{width:"78%"}}>
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
            <div className='col-7 '>
              <small style={{fontSize:20}}> Ticket ID </small>
            </div>
            <div className='col-5 smallFont'>
              <small style={{fontSize:20}}>{props.ticket.eventId}</small>
            </div>
          </div>

          
        </div>
        <div className='border border-dark'>
          {props.ticket.Bets ? (
            props.ticket.Bets.map((bets) => {
              return (
                <div className="row">
                  <div className='col-7'>
                    <small style={{fontSize:20}}> {bets.number}</small>

                  </div>
                  <div className='col-5'>
                    <small style={{fontSize:20}}>ብር {bets.stake}</small>
                  </div>
                  </div>
              );
            })
          ) : (
            <div className='row'>
              <div className='col-7'>
                <small style={{fontSize:20}}>Bets</small>
              </div>
              <div className='col-5'>
                <small style={{fontSize:20}}>ብር []</small>
              </div>
            </div>
          )}{" "}
        </div>
        <div className='border border-dark'>
          {" "}
          <div className='row'>
            <div className='col-7'>
              <small style={{fontSize:20}}> Total Stake </small>
            </div>
            <div className='col-5'>
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
            <div className='col-7'>
              <small style={{fontSize:20}}> Total win </small>
            </div>
            <div className='col-5'>
              <small style={{fontSize:20}}>
                {" "}
                <b> {"ብር " + props.ticket.win }</b>
              </small>
            </div>
          </div>
        </div>
        <div className='border border-dark'>
          {" "}
          <div className='row'>
            <div className='col-7'>
              <small style={{fontSize:20}}> Maximum winning payout </small>
            </div>
            <div className='col-5'>
              <small  style={{fontSize:20}}>
                {" "}
                <b> {"ብር " + 100000}</b>
              </small>
            </div>
          </div>
        </div>
        <Barcode 
          height= {50}
          format= "CODE128"
          displayValue= {true}
          fontOptions= ""
          
          textAlign= "left"
          textPosition= "bottom"
          paddingRight="4"
          fontSize= {10}
         
          marginRight= "3"
         
        
          value={props.ticket.eventId} />
        <div className='row nomargin' >
            {/* <canvas id="mycanvas" style={{marginTop:10}}></canvas> */}
          {/* <div className="col">
          <Barcode 
          height= {50}
          format= "CODE128"
          displayValue= {true}
          fontOptions= ""
          
          textAlign= "left"
          textPosition= "bottom"
          paddingRight="4"
          fontSize= {10}
         
          marginRight= "3"
         
        
          value={"c.cobet.et/s/" + ticket.eventId} />

          </div> */}

        </div>
       
      </div>
      <div></div>
    </div>
  </div>
    ):("")
    
  );
});
