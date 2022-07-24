import React from "react";
import "../Components/Css/homeCss.css";
import * as GiIcons from "react-icons/gi";
import bwipjs from 'bwip-js';
var Barcode = require("react-barcode");
export const ReportTicket = React.forwardRef((props, ref) => {
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
  var moment = require("moment");
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
    <div ref={ref} className='p-1' style={{width:"78%"}}>
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
              <h3 className='text-white' style={{fontSize:20}}>Settlement Report</h3>
            </div>
          </div>

          <div className=' '>
            <div className='row'>
              <div className='col-8'>
                <small style={{fontSize:20}}> Shop Name</small>
              </div>
              <div className='col-4'>
                <small style={{fontSize:20}}>{props.report.shopname}</small>
              </div>
            </div>
            <div className='row'>
              <div className='col-8'>
                <small style={{fontSize:20}}>Printed By</small>
              </div>
              <div className='col-4'>
                <small style={{fontSize:20}}>{props.report.printed_by}</small>
              </div>
            </div>
            
            <div className='row'>
              <div className='col-8'>
                <small style={{fontSize:20}}> From</small>
              </div>
              <div className='col-4'>
                <small style={{fontSize:20}}>{moment(props.report.from).format("YYYY-MM-DD HH-MM")}</small>
              </div>
            </div>
            <div className='row'>
              <div className='col-8'>
                <small style={{fontSize:20}}> To</small>
              </div>
              <div className='col-4'>
                <small style={{fontSize:20}}>{moment(props.report.to).format("YYYY-MM-DD HH-MM")}</small>
              </div>
            </div>
          </div>
          <div className='row mt-1  bg-black text-white'>
            <div className='col-3 verySmallTextBold' style={{fontSize:20}}>Income</div>
            <div className='col-3 verySmallTextBold' style={{fontSize:20}}>Turnover</div>
            <div className='col-3 verySmallTextBold' style={{fontSize:20}}>Canceled</div>
            <div className='col-3 verySmallTextBold' style={{fontSize:20}}>Confirmed</div>
          </div>
          {Object.values(props.report.income).map((income, key) => {
          return (
            <div className='row '>
              <div className='col-3 verySmallText' style={{fontSize:20}}>{income.game}</div>
              <div className='col-3 verySmallText' style={{fontSize:20}}>{income.stake}</div>
              <div className='col-3 verySmallText' style={{fontSize:20}}>{income.cancled}</div>
              <div className='col-3 verySmallText' style={{fontSize:20}}>{income.confirmed}</div>{" "}
            </div>
          );
        })}
         <hr/>
         <div className='row'>
              <div className='col-8'>
                <small style={{fontSize:20}}>Stake</small>
              </div>
              <div className='col-4'>
                <small style={{fontSize:20}}>{props.report.stake}</small>
              </div>
            </div>
            <div className='row'>
              <div className='col-8'>
                <small style={{fontSize:20}}>Confirmed</small>
              </div>
              <div className='col-4'>
                <small style={{fontSize:20}}>{props.report.confirmed}</small>
              </div>
            </div>
            <div className='row'>
              <div className='col-8'>
                <small style={{fontSize:20}}>Total Income</small>
              </div>
              <div className='col-4'>
                <small style={{fontSize:20}}>{props.report.total_income}</small>
              </div>
            </div>
            <div className='row'>
              <div className='col-8'>
                <small style={{fontSize:20}}>Total Outcome</small>
              </div>
              <div className='col-4'>
                <small style={{fontSize:20}}>{props.report.total_outcome}</small>
              </div>
            </div>
            <div className='row'>
              <div className='col-8'>
                <small style={{fontSize:20}}>Cancelled </small>
              </div>
              <div className='col-4'>
                <small style={{fontSize:20}}>{props.report.cancled}</small>
              </div>
            </div>
            <div className='row'>
              <div className='col-8'>
                <small style={{fontSize:20}}>Balance</small>
              </div>
              <div className='col-4'>
                <small style={{fontSize:20}}>{props.report.balance}</small>
              </div>
            </div>
            <div className='row'>
              <div className='col-8'>
                <small style={{fontSize:20}}>Open Tickets</small>
              </div>
              <div className='col-4'>
                <small style={{fontSize:20}}>{props.report.open_tickets}</small>
              </div>
            </div>
            

          <div className='row mt-1  bg-black text-white'>
            <div className='col-9 verySmallTextBold' style={{fontSize:20}}>Outcome</div>
            <div className='col-3 verySmallTextBold ' style={{fontSize:20}}>Paid</div>
          </div>
          
          <div className=''>
            {" "}
            {/* <div className='row'>
              <div className='col-9'>
                <small> Kenu Deluxe </small>
              </div>
              <div className='col-3 '>
                <small>
                  <b> {"ብር " + 0}</b>
                </small>
              </div>
            </div> */}
            <div className='row mt-1  bg-black text-white'>
              <div className='col-9 verySmallTextBold' style={{fontSize:20}}>Net Balance</div>
              <div className='col-3 verySmallTextBold ' style={{fontSize:20}}>ብር {props.report.net_balance}</div>
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
           
          
            value={props.report.ticketID} />
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
           
          
            value={"c.cobet.et/s/" + props.report.ticketID} />

            </div> */}
           
          </div>
           
          </div>
          <div className='col-8'></div>
        </div>
      </div>
    </div>
  );
});
