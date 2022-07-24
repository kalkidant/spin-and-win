import { Fragment, useState,useRef, useEffect } from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";


function OpenTicketDetail(
 props
) {
 
 
  const [ticket, setticketid] = useState("");
  useEffect(() => {
    if(localStorage.openticketdetail){
    setticketid(JSON.parse(localStorage.openticketdetail))
    }
  }, []);
  console.log(props.ticket,"kkkk")
  return (
    <Fragment>
     
     

      <div className='row mt-1'>
        <div className='col-7 verySmallText'>Ticket ID</div>
        <div className='col-5 verySmallText'>
          <small>{props.ticket.eventId}</small>
        </div>{" "}
        
        <hr/>
        {props.ticket.Bets ? (
            props.ticket.Bets.map((bets) => {
              return (
                <div className="row">
                <div className='col-7 verySmallText'>{bets.number}</div>
                <div className='col-5 verySmallText'>
                  <small>ብር {bets.stake}</small>
                </div>
                      </div>
              );
           
})) : (
            <div className='row'>
              
              <div className='col-7'>
                <small>Bets</small>
              </div>
              <div className='col-5'>
                <small>ብር []</small>
              </div>
            </div>
          )}{" "}
      </div>
      <hr/>
      
      <div className='row'>
      <div className='col-7 verySmallText'>Total Stake </div>
        <div className='col-5 verySmallText'>
          <small>{"ብር " +props.ticket.stake}</small>
        </div>{" "}
           
        <div className='col-7 verySmallText'>Total win </div>
        <div className='col-5 verySmallText'>
          <small>{"ብር " +props.ticket.possibleWin}</small>
        </div>{" "}
        <div className='col-7 verySmallText'>Maximum winning payout </div>
        <div className='col-5 verySmallText'>
          <small>{"ብር " + 100000}</small>
        </div>{" "}
        
      </div>

    </Fragment>
  );
}

export default OpenTicketDetail;
