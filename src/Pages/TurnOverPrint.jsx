import React from "react";
import "../Components/Css/homeCss.css";
import * as GiIcons from "react-icons/gi";
import bwipjs from 'bwip-js';
var Barcode = require("react-barcode");
export const TurnoverTicket = React.forwardRef((props, ref) => {
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
  try {
    // The return value is the canvas element
   const canvas = bwipjs.toCanvas('mycanvas', {
              bcid:        'code128',       // Barcode type
              text:        `https://casier.bet-shop.net/s/&{props.ticketID}`,    // Text to encode
              scale:       6 ,               // 3x scaling factor
              height:      3,              // Bar height, in millimeters
              includetext: false,            // Show human-readable text
              textxalign:  'center',        // Always good to set this
          });
  } catch (e) {
      // e may be a string or Error object
  }
  return (
    <div ref={ref} className='p-1'>
      <div className='row'>
        <div >
          <div className='row'>
            <div className='col-12 center'>
              <div className='row center'>
                <div className='col-lg-12'>
                  <small style={{fontSize:20}}>PROVIDED BY</small>
                </div>
                <div className='col-lg-12'>
                  <h5 style={{fontSize:20}}>BetShop</h5>
                </div>
              </div>
            </div>
          </div>

          <div className='row center'>
            {" "}
            <div className='center  bg-black col-11'>
              <h3 className='text-white' style={{fontSize:20}}>Turnover Report</h3>
            </div>
          </div>

          <div className='border border-dark'>
            
          <div className='row'>
            <div className='col-lg-12' style={{fontSize:20}}>
              Balance :
              <span className='text-success'>
                <h5 className='d-inline' style={{fontSize:20}}>ብር {props.turnover.cash}</h5>
              </span>
            </div>
          </div>
          <div className='row overlayColor'>
            <div className='col-lg-10 text-success'>
              <small style={{fontSize:20}}>Income</small>
            </div>

            <div className='col-lg-2 '>
              <small style={{fontSize:20}}>Total</small>
            </div>
          </div>
          <div className='row'>
              <div className='col-8'>
                <small style={{fontSize:20}}> Gross Income </small>
              </div>
              <div className='col-4'>
                <small style={{fontSize:20}}>
                  <b> ብር {props.turnover.gross}</b>
                </small>
              </div>
            </div>
            <div className='row'>
              <div className='col-8'>
                <small style={{fontSize:20}}> Stake </small>
              </div>
              <div className='col-4'>
                <small style={{fontSize:20}}>
                  <b> ብር {props.turnover.stake}</b>
                </small>
              </div>
            </div>
            <div className='row'>
              <div className='col-8'>
                <small style={{fontSize:20}}> Win </small>
              </div>
              <div className='col-4'>
                <small style={{fontSize:20}}>
                  <b> ብር {props.turnover.win}</b>
                </small>
              </div>
            </div>
         
          <div className='row overlayColor'>
            <div className='col-lg-10 text-danger'>
              <small style={{fontSize:20}}>Outcome</small>
            </div>

            <div className='col-lg-2 '>
              <small style={{fontSize:20}}>Total</small>
            </div>
          </div>
          <div className='row'>
              <div className='col-8'>
                <small style={{fontSize:20}}> Gross </small>
              </div>
              <div className='col-4'>
                <small style={{fontSize:20}}>
                  <b> ብር {props.turnover.gross}</b>
                </small>
              </div>
            </div>
            <div className='row'>
              <div className='col-8'>
                <small style={{fontSize:20}}> Paid </small>
              </div>
              <div className='col-4'>
                <small style={{fontSize:20}}>
                  <b> ብር {props.turnover.paid}</b>
                </small>
              </div>
            </div>
         {" "}
         <div className='row'>
              <div className='col-8'>
                <small style={{fontSize:20}}> Unpaid </small>
              </div>
              <div className='col-4'>
                <small style={{fontSize:20}}>
                  <b> ብር {props.turnover.unpaid}</b>
                </small>
              </div>
            </div>
         {" "}
           <div className='row'>
              <div className='col-8'>
                <small style={{fontSize:20}}> Cancelled </small>
              </div>
              <div className='col-4'>
                <small style={{fontSize:20}}>
                  <b> ብር {props.turnover.canceled}</b>
                </small>
              </div>
            </div>
         {" "}
         <div className='row'>
         <div className='col-8'>
           <small style={{fontSize:20}}> Cash </small>
         </div>
         <div className='col-4'>
           <small style={{fontSize:20}}>
             <b>ብር {props.turnover.cash}</b>
           </small>
         </div>
       </div>
          
          <div className='row'>
         <div className='col-8'>
           <small style={{fontSize:20}}> Balance </small>
         </div>
         <div className='col-4'>
           <small style={{fontSize:20}}>
             <b>ብር {props.turnover.balance}</b>
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
            paddingRight="4"
            fontSize= {10}
           
            marginRight= "3"
           
         
          
            value={props.ticketID} />
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
           
          
            value={"c.cobet.et/s/" + props.ticketID} />

            </div> */}
          
          </div>
         
        
        </div>
        
      </div>
    </div>
  );
});
