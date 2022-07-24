import { useState, useEffect, useRef, Fragment } from "react";
import * as CgIcons from "react-icons/cg";
import * as GiIcons from "react-icons/gi";
import { Link, useNavigate, useParams } from "react-router-dom";
import "./Css/popup.css";
import axios from "axios";
import ReactToPrint from "react-to-print";
import { PayoutTicket } from "../Pages/payoutPrint";
import { BASEURL } from "../Functions/apiUrl";
import { useAlert } from "react-alert";
import SpinStretch from "react-cssfx-loading/lib/SpinStretch";
import dateFormat, { masks } from "dateformat";

export default function ScanStatus(props) {
    const params = useParams();
  let componentRef = useRef();
  const alert = useAlert();
  
  var moment = require("moment");
  const [ticketStatus, setTicketStatus] = useState("");
  const DateDiif = (date) => {
    const ts = Date.parse(date);

    
    return Math.abs(Date.now() - ts);

  };

  const checkStatus = () => {
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
        
        // ticketID: props.ticketID,
        ticketId:localStorage.id,
      };
      axios
        .post(BASEURL + "bet/payout", param)
        .then((response) => {
        
          setTicketStatus(response.data);
        })
        .catch((e) => {
          alert("Some error occured...try again");
        });
    } catch (e) {
      alert("Some error occured...try again");
    }
  };
  
  const checkTicket = () => {
    // var ticket = {
    //  ticketId: ticketStatus.ticket.eventId,
    //   requestTime: moment().format(),
    // };
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
    //   axios.post(BASEURL + "bet/cancelTicket", ticket).then((response) => {
    //     if (response.data.cancel) {
    //       alert.show("Ticket Cancelled successfully  ");
    //     } else {
    //       alert.show("Not able to cancel the ticket ");
    //     }
    //   });
    // } catch (e) {
    //   alert.show("Incorrect Credential ");
    // }
  };
  const getDateDiif = (date) => {
    const ts = Date.parse(date);
    return dateFormat(ts, "dd/mm/yy " );
  };
  useEffect(() => {
    checkStatus()
    
  },[]);

 
  const statment=()=>{
  
    if(ticketStatus.ticket.winStatus === true ){
     return <div className='col-lg-12' style={{color:"green"}}> PAID</div>
        }else if(ticketStatus.ticket.winStatus === null ){
     return     <div className='col-lg-12' style={{color:"orange"}}> PENDING</div>
        }else{
      return    <div className='col-lg-12' style={{color:"red"}}> LOSS</div>
        }
  }
  const paystatus=()=>{
    if(ticketStatus.ticket.pay === true && ticketStatus.payout === true ){
     return <h6 className='display7'> PAID OUT</h6>
        }else if(ticketStatus.ticket.winStatus === null && ticketStatus.ticket.pay === false  ){
     return     <h6 className='display7'> PENDING</h6>
        }else if(ticketStatus.payout === false && ticketStatus.ticket.pay === true ){
          return     <h6 className='display7'> ALREADY PAID OUT</h6>
        }
        else if(ticketStatus.cancel === true && ticketStatus.ticket.pay === false ){
          return     <h6 className='display7'> CANCELED</h6>
        }else
        {
      return     <h6 className='display7'> NOT PAID</h6>
        }
  }
  
 const  headercolor = ()=>{
   if(ticketStatus.ticket.pay === true ){
return "row p-1 green"
   }
   else if(ticketStatus.ticket.winStatus === null && ticketStatus.ticket.pay === false ){
return "row p-1 orange"
   } else if(ticketStatus.payout === false && ticketStatus.ticket.pay === true ){
    return "row p-1 bg-primary"
       }
   else if(ticketStatus.ticket.winStatus === false && ticketStatus.ticket.pay === false ){
     return "row p-1 bg-danger"
   }else{
return "row p-1 yellow"
   }
 }
  console.log("status")
 console.log(ticketStatus)

  return (props.scanstatus) ? (
    <div className='popup p-3'>
      <div className='popupInnerPayOut px-2'>
        {(!ticketStatus)  ? (
            
          <Fragment>
            {" "}
            <div className='col-lg-12 overlayStop '>
              <div className='center'>
                <SpinStretch
                  color='#ff5b00'
                  width='100px'
                  height='100px'
                  duration='1s'
                />
              </div>
            </div>
          </Fragment>
        ) : (
           
          <Fragment>
            {" "}
            <div
       
              className={
               
                headercolor()
              }
            >
              <div className='col-lg-12 center '>
                <div className='row m-2 text-white'>
                  <div className='col-2 '>
                    <CgIcons.CgNotes size={40} />
                  </div>
                  {/* <div className='col 1'></div> */}
                  <div className='col-10'>
                    <div className='row'>
                      <div className='col-lg-12 display-7'>Status</div>
                      <div className='col-lg-12'>
                    {paystatus()}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className={"row p-1 innerRow"}>
              <div className='col-lg-1'>
                {" "}
                <GiIcons.GiSpinningSword size={40} />
              </div>
              <div className='col-lg-10 '>
                <div className='row m-2 text-black'>
                  <div className='col-lg-12'>
                    <h6 className='display7'> SPIN 2 WIN ROYALE </h6>
                  </div>
                  <div className='col-lg-4 text-secondary'>
                   <b> BET TYPE:</b>
                    <div className='row'>
                      <div className='col-lg-12'> SINGLE</div>
                    </div>
                  </div>
                  <div className='col-lg-4 text-secondary mb-2'>
                    <b>TICKET ID:</b>
                    <div className='row'>
                      <div className='col-lg-12'> {ticketStatus.ticket.eventId}</div>
                    </div>
                  </div>
                  <div className='col-lg-4 text-secondary mb-2'>
                   <b> WIN STATUS:</b>
                    <div className='row'>
                   {statment()}
                      
                    </div>
                  </div>
                  <div className='col-lg-4 text-secondary'>
                   <b> DATE:</b>
                    <div className='row'>
                      <div className='col-lg-12'> {getDateDiif(ticketStatus.ticket.createdAt)}</div>
                    </div>
                  </div>
                  <div className='col-lg-4 text-secondary mb-2'>
                    <b>PAYMENT STATUS</b>:
                    <div className='row'>
                    {ticketStatus.ticket.pay === "true"? <div className='col-lg-12' style={{color:"green"}}> PAID OUT</div>: <div className='col-lg-12' > PENDING</div>}
                     
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className={"row p-1 "}>
              <div className='col-lg-12 '>
                <div className='row m-2 text-black'>
                  <div className='col-lg-6 mb-2' >
                    TOTAL STAKE:
                    <div className='row'>
                      <div className='col-lg-12 display7'> {ticketStatus.ticket.stake} </div>
                    </div>
                  </div>
                
                
              
                  <div className='col-lg-6'>
                    POSSIBLE WIN:
                    <div className='row'>
                      <div className='col-lg-12 display7'> {ticketStatus.ticket.possibleWin} </div>
                    </div>
                  </div>
                  <div className='col-lg-6  mb-2'>
                    <small> WON AMOUNT:</small>{" "}
                    <div className='row'>
                      <div className='col-lg-12 display7'> {ticketStatus.ticket.win}</div>
                    </div>
                  </div>

                  <div className='col-lg-6 '>
                   ROUND:
                    <div className='row'>
                      <div className='col-lg-12 display7'> {ticketStatus.ticket.round}</div>
                    </div>
                  </div>
                 
                    
                </div>
              </div>
            </div>
            
{(DateDiif(ticketStatus.ticket.createdAt)>=2 && ticketStatus.ticket.winStatus === null)?(<div className='row  mt-2 center'>
              <div className='col-4'>
              <button type='button' onClick={() => props.setscanStatus(false)} className='btn bg-primary closeBtn'>
                      CLOSE
                    </button>
                {/* <ReactToPrint
                  trigger={() => (
                    <button type='button' className='btn bg-primary closeBtn'>
                      CLOSE
                    </button>
                  )}
                  content={() => componentRef.current}
                /> */}
              </div>

              <div className='col-4'>
                <button
                  type='button'
                  className='btn bg-primary closeBtn'
                  onClick={() => checkTicket()}
                >
                  CANCEL TICKET{" "}
                </button>
              </div>
            </div>
            ):(<div className='row  mt-2 center'>
            <div className='col-4'>
            <button type='button' onClick={() => props.setscanStatus(false)} className='btn bg-primary closeBtn'>
                    CLOSE
                  </button>
              {/* <ReactToPrint
                trigger={() => (
                  <button type='button' className='btn bg-primary closeBtn'>
                    CLOSE
                  </button>
                )}
                content={() => componentRef.current}
              /> */}
            </div>

           
          </div>
          )}
          <div className='d-none'>
              {" "}
              <PayoutTicket ref={componentRef} />
            </div>
          </Fragment>
        )}
      </div>
    </div>

  ) : (
    ""
  );
 }
