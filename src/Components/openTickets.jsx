import { Fragment, useState,useRef, useEffect } from "react";
import axios from "axios";
import { BASEURL } from "../Functions/apiUrl";
import { useAlert } from "react-alert";
import * as GiIcons from "react-icons/gi";
import { OpenTicktPrint } from "./openTicketPrint";
import * as GrIcons from "react-icons/gr";
import * as BiIcons from "react-icons/bi";
import DetailTicket from "./detailticket";
import OpenTicketDetail from "./openTicketDetail"
import ReactToPrint from "react-to-print";
import * as FcIcons from "react-icons/fc";
import {
  MenuItem,
  Select,
  Button,
  TextField,
  Grid,
  FormControl,
  InputLabel,
  FormHelperText,
} from "@mui/material";
import * as React from "react";
export default function OpenTickets(props) {
  const [openTickets, setOpenTickets] = useState([]);
  const [selectedticket, selectticket] = useState("");
  const [displayReport, showReport] = useState(false);
  const [searchForm, setForm] = React.useState({
  
    eventid:"",
 
  });
  const { eventid } =
    searchForm;
  const alert = useAlert();
  var moment = require("moment");
  let componentRefTicket = useRef();
  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...searchForm, [name]: value });
  };
  const openTicket = () => {
    const params ={
      eventId: eventid
    }
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
      axios
        .get(`${BASEURL}ticket/openTickets/?id=${eventid}`)
        .then((response) => {
          setOpenTickets(response.data.tickets.rows);
   
        })
        .catch(function (error) {});
    } catch (e) {
      alert.show("Error fetching last ticket !!!");
    }
  };
  const openTicketss = () => {
    const params ={
      eventId: eventid
    }
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
      axios
        .get(`${BASEURL}ticket/openTickets`)
        .then((response) => {
          setOpenTickets(response.data.tickets.rows);
   
        })
        .catch(function (error) {});
    } catch (e) {
      alert.show("Error fetching last ticket !!!");
    }
  };
 
  useEffect(() => {
    openTicketss();
  }, []);
  const getId = (ticket) =>{
 
    selectticket(ticket)
    showReport(true);
    
    console.log("ticket",ticket)
    // axios.interceptors.request.use(
    //   (config) => {
    //     config.headers.authorization = `${localStorage.getItem("token")}`;
    //     return config;
    //   },
    //   (error) => {
    //     return Promise.reject(error);
    //   }
    // );
    // try {
    //   var param = {
        
    //     // ticketID: props.ticketID,
    //     ticketId:id,
    //   };
    //   axios
    //     .post(BASEURL + "bet/payout", param)
    //     .then((response) => {
    //       selectticket(response.data.ticket)
    //       showReport(true);

    //     })
    //     .catch((e) => {
    //       alert.show("Some error occured...try again");
    //     });
    // } catch (e) {
    //   alert.show("Some error occured...try again");
    // }
  }
  return (
    <Fragment>
      {displayReport ?(
        <div className='row'>
        <div className='col-lg-8 mx-4'>
          <div className='col-lg-4 mt-1'>
            <h5>OPEN TICKETS({openTickets.length}) </h5>
          </div>
          <div className='col-lg-2'>
            <button className='btn bg-black text-white'> Refresh </button>
          </div>
          <div >
          <form>
          <Grid container spacing={4}>
            <Grid item xs={2}>
              <FormControl style={{width:"100%"}}>
              <label for="exampleInputPassword1">event Id</label>
      <input type="text"  name="eventid" onChange={handleChange} value={eventid} class="form-control" id="exampleInputPassword1" />
              </FormControl>
            </Grid>
            <Grid item xs={3} style={{marginTop:"3%"}}>
            
            {/* <button type="submit" className='btn bg-black text-white' >Apply</button> */}
              <Button  className='btn bg-black text-white' variant="contained" size="large" onClick={()=>openTicket()}>
                Apply
              </Button>
            </Grid>
            </Grid>
            </form>
            </div>
        <div className='row mt-2'>
          {openTickets.length == 0 ? (
            <small>There are no open tickets at this time</small>
          ) : (
            openTickets.map((ticket) => {
              <small>ticket</small>;
            })
          )}
        </div>
        <div className='overflow'>
          <table class='table mt-2  '>
            <thead className='bg-secondary text-white'>
              <tr>
                <th scope='col'>
                  <small>EventID</small>
                </th>
                <th scope='col'>
                  <small>Date </small>
                </th>
                <th scope='col'>
                  <small>Print Status</small>
                </th>
                
  
                <th scope='col'>
                  <small>Game</small>
                </th>
                <th scope='col'>
                  <small>Round</small>
                </th>
                <th scope='col'>
                  <small>Stake</small>
                </th>
                <th scope='col'>
                  <small>Currency</small>
                </th>
                <th scope='col'>
                  <small>Status</small>
                </th>
                <th scope='col'>
                  <small>Detail  </small>
                </th>
              </tr>
            </thead>
            <tbody>
              {openTickets.map((ticket, key) => {
                return (
                  <tr className='text-secondary '>
                    <th scope='row'>
                      <small className='verySmallText'>{ticket.eventId}</small>
                    </th>
                    <td>{moment(ticket.createdAt).format("YYYY-MM-DD HH-MM")}</td>
                    <td>
                      <small>{ticket.status ? "Printed" : "Not Printed"}</small>
                    </td>
  
                    
  
                    <td>
                      <GiIcons.GiSpinningBlades /> <small>Spin to win</small>
                    </td>
                    <td>
                      <small>{ticket.round}</small>
                    </td>
                    <td>
                      <small>{ticket.stake}</small>
                    </td>
  
                    <td>
                      <small>ETH</small>
                    </td>
                    <td>
                      <small>
                        <small>Pending</small>
                      </small>
                    </td>
                    <td>
    <button type='button'
                  className='btn bg-white customBtn mx-1' onClick={() => getId(ticket)}>
    <BiIcons.BiMessageRoundedDetail   />
    </button>
  
  </td>
                    {/* <td >
                      <div  
                                >
                                   <ReactToPrint
                                 
  
                onBeforeGetContent={localStorage.setItem("openTicket",JSON.stringify(ticket))}
                trigger={() => (
                  <FcIcons.FcPrint  />
                )}
                content={() => ticket}
              />
               
                
                <div className='d-none'>
                  {" "}
                  <OpenTicktPrint
                  
                    // ticketID={selectedticket.ticketID}
                    // selectedBets={selectedticket}
                    // // getValue={selectedticket.getValue()}
                    // total={selectedticket.total}
                  />
                </div>
  
                   
                      </div>
                    
                 
                   
                    </td> */}
                  </tr>
                );
              })}
            </tbody>
          </table>
          </div>
          </div>
          <div className='col-lg-3 overlayColor' style={{height:"20%", marginTop:"10%"}}>
              <div className='row bg-secondary p-1'>
                {" "}
                <div className='col-8'> Open Ticket Detail</div>
                <div className='col-4'>
                  {" "}
                  <ReactToPrint
                    trigger={() => (
                      <button className='btn '>
                        {" "}
                        <GrIcons.GrPrint size={20} />
                      </button>
                    )}
                    content={() => componentRefTicket.current}
                  />
                  <div className='d-none'>
                    {" "}
                    <OpenTicktPrint openTickt={selectedticket} ref={componentRefTicket} />
                    
                  </div>
                </div>{" "}
              </div>
  
              <OpenTicketDetail ticket={selectedticket} />
              </div>
         
         
        </div>
      ):(<div className='row'>
      <div className=' mx-4'>
        <div className='col-lg-4 mt-1'>
          <h5>OPEN TICKETS({openTickets.length}) </h5>
        </div>
        <div className='col-lg-2'>
          <button className='btn bg-black text-white'> Refresh </button>
        </div>
        <div >
          <form>
          <Grid container spacing={4}>
            <Grid item xs={2}>
              <FormControl >
              <label for="exampleInputPassword1">event Id</label>
      <input type="text"  name="eventid" onChange={handleChange} value={eventid} class="form-control" id="exampleInputPassword1" />
              </FormControl>
            </Grid>
            <Grid item xs={3} style={{marginTop:"3%"}}>
            
            {/* <button type="submit" className='btn bg-black text-white' >Apply</button> */}
              <Button  className='btn bg-black text-white' variant="contained" size="large" onClick={()=>openTicket()}>
                Apply
              </Button>
            </Grid>
            </Grid>
            </form>
            </div>
      <div className='row mt-2'>
        {openTickets.length == 0 ? (
          <small>There are no open tickets at this time</small>
        ) : (
          openTickets.map((ticket) => {
            <small>ticket</small>;
          })
        )}
      </div>
      <div className='overflow'>
        <table class='table mt-2  '>
          <thead className='bg-secondary text-white'>
            <tr>
              <th scope='col'>
                <small>EventID</small>
              </th>
              <th scope='col'>
                <small>Date </small>
              </th>
              <th scope='col'>
                <small>Print Status</small>
              </th>
              

              <th scope='col'>
                <small>Game</small>
              </th>
              <th scope='col'>
                <small>Round</small>
              </th>
              <th scope='col'>
                <small>Stake</small>
              </th>
              <th scope='col'>
                <small>Currency</small>
              </th>
              <th scope='col'>
                <small>Status</small>
              </th>
              <th scope='col'>
                <small>Print </small>
              </th>
            </tr>
          </thead>
          <tbody>
            {openTickets.map((ticket, key) => {
              return (
                <tr className='text-secondary '>
                  <th scope='row'>
                    <small className='verySmallText'>{ticket.eventId}</small>
                  </th>
                  <td>{moment(ticket.createdAt).format("YYYY-MM-DD HH-MM")}</td>
                  <td>
                    <small>{ticket.status ? "Printed" : "Not Printed"}</small>
                  </td>

                  

                  <td>
                    <GiIcons.GiSpinningBlades /> <small>Spin to win</small>
                  </td>
                  <td>
                    <small>{ticket.round}</small>
                  </td>
                  <td>
                    <small>{ticket.stake}</small>
                  </td>

                  <td>
                    <small>ETH</small>
                  </td>
                  <td>
                    <small>
                      <small>Pending</small>
                    </small>
                  </td>
                  <td>
  <button type='button'
                className='btn bg-white customBtn mx-1' onClick={() => getId(ticket)}>
  <BiIcons.BiMessageRoundedDetail   />
  </button>

</td>
                  {/* <td >
                    <div  
                              >
                                 <ReactToPrint
                               

              onBeforeGetContent={localStorage.setItem("openTicket",JSON.stringify(ticket))}
              trigger={() => (
                <FcIcons.FcPrint  />
              )}
              content={() => ticket}
            />
             
              
              <div className='d-none'>
                {" "}
                <OpenTicktPrint
                
                  // ticketID={selectedticket.ticketID}
                  // selectedBets={selectedticket}
                  // // getValue={selectedticket.getValue()}
                  // total={selectedticket.total}
                />
              </div>

                 
                    </div>
                  
               
                 
                  </td> */}
                </tr>
              );
            })}
          </tbody>
        </table>
        </div>
        </div>
        </div>)}
      
    </Fragment>
  );
}
