import React, { useEffect, useState } from "react";
import "../Components/Css/homeCss.css";
import * as GiIcons from "react-icons/gi";
import axios from "axios";
import { BASEURL } from "../Functions/apiUrl";
import bwipjs from 'bwip-js';
var Barcode = require("react-barcode");
export const OpenTicktPrint = React.forwardRef((props,ref) => {
 console.log("possibleWin")
 console.log(props.openTickt)
   
    
    useEffect(() => {
     
      try {
        // The return value is the canvas element
       const canvas = bwipjs.toCanvas('mycanvas', {
                  bcid:        'code128',       // Barcode type
                  text:        `${props.openTickt.eventId}`,    // Text to encode
                  scale:       6 ,               // 3x scaling factor
                  height:      3,              // Bar height, in millimeters
                  includetext: false,            // Show human-readable text
                  textxalign:  'center',        // Always good to set this
              });
      } catch (e) {
          // e may be a string or Error object
      }
      }, []);
 
  return (
    <div ref={ref} className='p-1'  style={{width:"78%"}}>
      <div className='row'>
        <div>
          <div className='row'>
            <div className='col-8'>
              <div className='row'>
                <div className='col-lg-12'>
                  <small  style={{fontSize:20}}>PROVIDED BY</small>
                </div>
                <div className='col-lg-12' style={{fontSize:20}}>BetShop</div>
              </div>
            </div>
            <div className='col-4'> </div>
          </div>
          <div className='border border-dark smallFont'>
            <div className='row '>
              <div className='col-8 '>
                <small style={{fontSize:20}}> Open Tickt ID </small>
              </div>
              <div className='col-4 smallFont'>
                <small style={{fontSize:20}}>{props.openTickt.eventId}</small>
              </div>
            </div>

            <div className='row'>
              <div className='col-8'>
                <small style={{fontSize:20}}> Printed on </small>
              </div>
              <div className='col-4 smallFont '>
                <small style={{fontSize:20}}>{props.openTickt.createdAt}</small>
              </div>
            </div>
          </div>
          <div className='border border-dark'>
            {props.openTickt.Bets ? (
              props.openTickt.Bets.map((bets) => {
                return (
                  <div className='row'>
                  {!isNaN(bets.number)?(
                    <div className="row">
                  <div className='col-8'>
                    <small style={{fontSize:20}}>Number: {bets.number}</small>

                  </div>
                  <div className='col-4'>
                    <small style={{fontSize:20}}>ብር {bets.stake}</small>
                  </div>
                  </div>
                  ):(
                    <div> {(bets.color!==null)?(<div className='col-8'>
                    <small style={{fontSize:20}}>Color: {bets.color}</small>
                  </div>):""}
                  {(bets.dozen!==null)?( <div className='col-8'>
                    <small style={{fontSize:20}}>Dozen: {bets.dozen}</small>
                  </div>):""}
                 {(bets.odd!==null)?(<div className='col-8'>
                    <small style={{fontSize:20}}>Odd: {bets.odd}</small>
                  </div>):""}
                  {(bets.low!==null)?( <div className='col-8'>
                    <small style={{fontSize:20}}>Low: {bets.low}</small>
                  </div>):""}
        
                  
                  
                  <div className='col-4'>
                    <small style={{fontSize:20}}>ብር {bets.stake}</small>
                  </div>
                  </div>
                 )}
                 
                 
                </div>
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
                  <b style={{fontSize:20}}> {"ብር " + props.openTickt.stake}</b>
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
                  <b style={{fontSize:20}}> {"ብር " + props.openTickt.possibleWin}</b>
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
            displayValue= {true}
            fontOptions= ""
            
            textAlign= "left"
            textPosition= "bottom"
            paddingRight="4"
            fontSize= {10}
           
            marginRight= "3"
           
          
            value={props.openTickt.eventId} />
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
           
          
            value={"c.cobet.et/s/" + props.openTickt.eventId} />

            </div> */}
          
          </div>
          
        </div>
        <div ></div>
      </div>
    </div>
  );
});
