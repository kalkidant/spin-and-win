import { Fragment, useState,useRef, useEffect } from "react";
import * as React from "react";
import Dropdown from "react-dropdown";
import "react-dropdown/style.css";
import { Ticket } from "../Pages/printComponent";
import * as GrIcons from "react-icons/gr";
import ReactToPrint from "react-to-print";
import "./Css/popup.css";
import * as FcIcons from "react-icons/fc";
import * as GiIcons from "react-icons/gi";
import * as BiIcons from "react-icons/bi";
import axios from "axios";
import { BASEURL } from "../Functions/apiUrl";
import { useAlert } from "react-alert";
import { RePrintTicketLast } from "../Pages/reprintLastComponent";
import { SingleTicket } from "./SingleTicket";
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
import DetailTicket from "./detailticket";
export default function Tickets(props) {
  const [state, setState] = React.useState({
   
    currentData: null,
  });
  const {  currentData } = state;
  const options = ["one", "two", "three"];
  const defaultOption = options[0];
  const [tickets, setTickets] = useState([""]);
  const [gameType, setgameType] = useState([]);
  const alert = useAlert();
  const [selectedticket, selectticket] = useState("");
  const [tid, settid] = useState("")
  const [openUpdate, setUpdate] = React.useState(false);
  const [searchForm, setForm] = React.useState({
    gameTypes: "",
    eventid:"",
    startdate: "",
    enddate: "",
  });
console.log("selectedticket")
console.log(openUpdate)
const [displayReport, showReport] = useState(false);
  const { gameTypes,  startdate, enddate,eventid } =
    searchForm;
    const handleChange = (e) => {
      const { name, value } = e.target;
      setForm({ ...searchForm, [name]: value });
    };
  let componentRefTicket = useRef();
  var moment = require("moment");
  const openUpdateDialog = (data) => {
    setState({ ...state, currentData: data });
    setUpdate(true);
  };

  const closeUpdateDialog = () => {
    setUpdate(false);
  };
  const checkStatus = (data) => {
    if (data === null) {
      return "OPEN";
    } else if (data) {
      return "WIN";
    } else {
      return "LOST";
    }
  };
  const  getGameTypes =() => {
    try {
      axios.interceptors.request.use(
        (config) => {
          config.headers.authorization = `${localStorage.getItem("token")}`;
          return config;
        },
        (error) => {
          return Promise.reject(error);
        }
      );
      axios.get(BASEURL + "bet/gameTypes/").then((response) => {
        if (response.data) {
          console.log("GAME TYPES", response.data.gameTypes);
          setgameType(response.data.gameTypes)
          
        } else {
          alert.show("Not able to cancel the ticket ");
        }
      });
    } catch (e) {}
  }

  useEffect(() => {
    try {
      axios.interceptors.request.use(
        (config) => {
          config.headers.authorization = `${localStorage.getItem("token")}`;
          return config;
        },
        (error) => {
          return Promise.reject(error);
        }
      );
      axios.get(BASEURL + "bet/gameTypes/").then((response) => {
        if (response.data) {
          console.log("GAME TYPES", response.data.gameTypes);
          setgameType(response.data.gameTypes)
          
        } else {
          alert.show("Not able to cancel the ticket ");
        }
      });
    } catch (e) {}
    getGameTypes()
    handleSubmit()
  

  }, []);
 
  const handleSubmit= ()=> {
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
    var  params = {
        startDate:startdate,
        endDate:enddate,
        GameTypeId :gameTypes,
        eventId:eventid
      };
      axios.post(BASEURL + "ticket/todaytickets", params).then((response) => {
      
 
        setTickets(response.data.tickets.rows);
      });
    } catch (e) {
      alert("Some error occured...try again");
    }
  }
  const getId = (ticket) =>{
   
    showReport(true);
    selectticket(ticket)
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
    //       alert("Some error occured...try again");
    //     });
    // } catch (e) {
    //   alert("Some error occured...try again");
    // }
  }
  return (
    <Fragment >
      {displayReport?(
         <div className='row '>
       
         <div className='col-lg-8 mx-4'>
           <div className='col-lg-2 mt-1 d-none-sm'>
             <h5>Tickets</h5>
           </div>
           <div className='col-lg-2 d-none-sm'>
             <button className='btn bg-black text-white'> Refresh</button>
           </div>
        
         <form >
           <Grid container spacing={4}>
             <Grid item xs={3} >
               <FormControl style={{width:"100%"}}>
               <label for="demo-simple-select-label">Game Type</label>
                 <select 
                 labelId="demo-simple-select-label"
                 id="demo-simple-select"
                 name="gameTypes"
                   value={gameTypes}
                   label="Choose Game Type"
                   onChange={handleChange} class="form-control">
       {gameType.map((each) => (
                     <option key={each.id} value={each.id}> {each.name}</option>
                    
                   ))}
   </select>
               </FormControl>
   
             </Grid>
           
             <Grid item xs={3} >
               <FormControl style={{width:"100%"}}>
               <label for="exampleInputPassword1">start Date</label>
       <input type="date"  name="startdate" onChange={handleChange} value={startdate} class="form-control" id="exampleInputPassword1" />
                
               </FormControl>
             </Grid>
             <Grid item xs={3} >
               <FormControl style={{width:"100%"}}>
               <label for="exampleFormControlInput1">End Date</label>
       <input   value={enddate}
                   type="date"
                   name="enddate"
                   onChange={handleChange} class="form-control" id="exampleFormControlInput1" />
                 
               </FormControl>
             </Grid>
             <Grid item xs={3} style={{marginTop:"3%"}}>
            
             {/* <button type="submit" className='btn bg-black text-white' >Apply</button> */}
               <Button  className='btn bg-black text-white' variant="contained" size="large" onClick={()=>handleSubmit()}>
                 Apply
               </Button>
             </Grid>
           </Grid>
         </form>
         
        
         <div className='overflow'>
           <table class='table mt-2  '>
             <thead className='bg-secondary text-white'>
               <tr>
                 <th scope='col'>
                   <small>TicketID</small>
                 </th>
                 <th scope='col'>
                   <small>Date </small>
                 </th>
                 
                 {/* <th scope='col'>
                   <small>Issued By</small>
                 </th> */}
   
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
               {tickets.map((ticket, key) => {
                 return (
                   <tr className='text-secondary '>
                     <th scope='row'>
                       <small className='verySmallText'>{ticket.eventId}</small>
                     </th>
                     <td>
                       <small>
                         {moment(ticket.createdAt).format("YYYY-MM-DD HH-MM")}
                       </small>
                     </td>
                     
                     {/* <td>
                       <small>{ticket.CashierId ? ticket.CashierId : " "}</small>
                     </td> */}
   
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
                       <small>{checkStatus(ticket.winStatus)}</small>
                     </td>
   <td>
     <button type='button'
                   className='btn bg-white customBtn mx-1' onClick={() => getId(ticket)}>
     <BiIcons.BiMessageRoundedDetail   />
     </button>
   
   </td>
                     {/* <td >
                       <div onClick={()=>{settid(ticket.eventId)}} >
                                    <ReactToPrint
                                     // onBeforeGetContent={()=>{settid(ticket.eventId)}}
                                     
                 
                 trigger={() => (
                   <FcIcons.FcPrint  />
                 )}
                 content={() => componentRefTicket.current}
               />
                
                 
                 <div className='d-none'>
                   {" "}
   
                   <SingleTicket
                     ref={componentRefTicket}
                     tid= {ticket.eventId}
                  ticket={selectedticket}
                    
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
           <div className='col-lg-3 overlayColor' style={{height:"50vh", marginTop:"10%",overflow:"auto"}}>
           <div className='row bg-secondary p-1'>
             {" "}
             <div className='col-8'> Ticket Detail</div>
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
                 <SingleTicket ticket={selectedticket} ref={componentRefTicket} />
                 
               </div>
             </div>{" "}
           </div>
   
           <DetailTicket ticket={selectedticket} />
           </div>
         </div>
      ):(
        <div className='row '>
       
        <div className=' mx-4'>
          <div className='col-lg-2 mt-1 d-none-sm'>
            <h5>Tickets</h5>
          </div>
          <div className='col-lg-2 d-none-sm'>
            <button className='btn bg-black text-white'> Refresh</button>
          </div>
       
        <form >
          <Grid container spacing={4}>
            <Grid item xs={2}>
              <FormControl style={{width:"100%"}}>
              <label for="exampleInputPassword1">event Id</label>
      <input type="text"  name="eventid" onChange={handleChange} value={eventid} class="form-control" id="exampleInputPassword1" />
              </FormControl>
            </Grid>
            <Grid item xs={2} >
              <FormControl style={{width:"100%"}}>
              <label for="demo-simple-select-label">Game Type</label>
                <select 
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                name="gameTypes"
                  value={gameTypes}
                  label="Choose Game Type"
                  onChange={handleChange} class="form-control">
      {gameType.map((each) => (
                    <option key={each.id} value={each.id}> {each.name}</option>
                   
                  ))}
  </select>
              </FormControl>
  
            </Grid>
          
            <Grid item xs={2} >
              <FormControl style={{width:"100%"}}>
              <label for="exampleInputPassword1">start Date</label>
      <input type="date"  name="startdate" onChange={handleChange} value={startdate} class="form-control" id="exampleInputPassword1" />
               
              </FormControl>
            </Grid>
            <Grid item xs={2} >
              <FormControl style={{width:"100%"}}>
              <label for="exampleFormControlInput1">End Date</label>
      <input   value={enddate}
                  type="date"
                  name="enddate"
                  onChange={handleChange} class="form-control" id="exampleFormControlInput1" />
                
              </FormControl>
            </Grid>
            <Grid item xs={3} style={{marginTop:"3%"}}>
           
            {/* <button type="submit" className='btn bg-black text-white' >Apply</button> */}
              <Button  className='btn bg-black text-white' variant="contained" size="large" onClick={()=>handleSubmit()}>
                Apply
              </Button>
            </Grid>
          </Grid>
        </form>
        
       
        <div className='overflow'>
          <table class='table mt-2  '>
            <thead className='bg-secondary text-white'>
              <tr>
                <th scope='col'>
                  <small>TicketID</small>
                </th>
                <th scope='col'>
                  <small>Date </small>
                </th>
                
                {/* <th scope='col'>
                  <small>Issued By</small>
                </th> */}
  
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
              {tickets.map((ticket, key) => {
                return (
                  <tr className='text-secondary '>
                    <th scope='row'>
                      <small className='verySmallText'>{ticket.eventId}</small>
                    </th>
                    <td>
                      <small>
                        {moment(ticket.createdAt).format("YYYY-MM-DD HH-MM")}
                      </small>
                    </td>
                    
                    {/* <td>
                      <small>{ticket.CashierId ? ticket.CashierId : " "}</small>
                    </td> */}
  
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
                      <small>{checkStatus(ticket.winStatus)}</small>
                    </td>
  <td>
    <button type='button'
                  className='btn bg-white customBtn mx-1' onClick={() => getId(ticket)}>
    <BiIcons.BiMessageRoundedDetail   />
    </button>
  
  </td>
                    {/* <td >
                      <div onClick={()=>{settid(ticket.eventId)}} >
                                   <ReactToPrint
                                    // onBeforeGetContent={()=>{settid(ticket.eventId)}}
                                    
                
                trigger={() => (
                  <FcIcons.FcPrint  />
                )}
                content={() => componentRefTicket.current}
              />
               
                
                <div className='d-none'>
                  {" "}
  
                  <SingleTicket
                    ref={componentRefTicket}
                    tid= {ticket.eventId}
                 ticket={selectedticket}
                   
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
          </div>
      )}
     
     
    </Fragment>
  );
}
