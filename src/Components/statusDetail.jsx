import { Fragment, useState,useRef, useEffect } from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";

import "./Css/popup.css";
function StatusDetail(
 props
) {
 const headercolor = (data) =>{

   if(data === true){
          return "col-9 verySmallText paid"
   }else if(data === false){
    return "col-9 verySmallText notpaid"
   }else{
    return "col-9 verySmallText null"
   }
 }
 const headercolor1 = (data) =>{
  
  if(data === true){
         return "col-3 verySmallText paid"
  }else if(data === false){
   return "col-3 verySmallText notpaid"
  }else{
    return "col-3 verySmallText null"
  }
}
 

  
  return (
    <Fragment>
     
     

      <div className='row mt-1'>
       
  
        {props.ticket.Bets ? (
            props.ticket.Bets.map((bets) => {
              return (
                <div >
                <div className="row">
        <div className={headercolor(bets.winStatus)} > {bets.number}</div>
        <div className={headercolor1(bets.winStatus)} >
          <small>ብር {bets.stake}</small>
        </div>
                 </div>
                 
                </div>
              );
           
})) : (
            <div className='row'>
              
              <div className='col-8'>
                <small>Bets</small>
              </div>
              <div className='col-4'>
                <small>ብር []</small>
              </div>
            </div>
          )}{" "}
      </div>
 
      
    

    </Fragment>
  );
}

export default StatusDetail;
