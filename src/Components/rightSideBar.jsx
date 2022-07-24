import React, { Fragment, useState, useRef, useEffect } from "react";
import ReactToPrint from "react-to-print";
import { useAlert } from "react-alert";
import axios from "axios";
import * as FaIcons from "react-icons/fa";

import * as BsIcons from "react-icons/bs";
import * as GrIcons from "react-icons/gr";
import * as MdIcons from "react-icons/md";

import * as AiIcons from "react-icons/ai";
import * as BiIcons from "react-icons/bs"
import { IconContext } from "react-icons";

import { Link } from "react-router-dom";
import "./Css/navBar.css";
import { Ticket } from "../Pages/printComponent";
import sendBets, { getCashierBalance } from "../Functions/requests";
import { BASEURL } from "../Functions/apiUrl";
import { TicketLast } from "../Pages/printLastComponent";
import { RePrintTicketLast } from "../Pages/reprintLastComponent";
import ModalTicketCheck from "./ModalTicketCheck";
import StakeModal from "./stakeModal";

export default function RightSideBar(props) {
  const [sidebar, setSideBar] = useState(false);
  const showSideBar = () => setSideBar(!sidebar);
  const [lastTicket, setLastTicket] = useState("");
  const [relastTicket, setReLastTicket] = useState("");
  const [show, setShow] = useState(false);
  const [stakeopen, setstakeopen] = useState(false);
  const [placebate, setplacebate] = useState("")
  const[totalset, setTotat] = useState(false)
  
const total = Object.values(props.stakeValue).reduce((prev,curr) => prev + curr,0)
const totalBets = Object.values(props.totalbet).reduce((prev,curr) => prev + curr,0)

 
  // const handleClose = () => setShow(false);
  // const handleShow = () => setShow(true);
 const [betdata, setBetdata] = useState("")
  const alert = useAlert();

const value = props.stakevalue
  let componentRef = useRef();
  let componentRefTicket = useRef();
  let componentRefReprint = useRef();
  let componentRefstake = useRef();
  const [openUpdate, setUpdate] = React.useState(false);

  const openUpdateDialog = (data) => {
    
    setUpdate(true);
    props.selectBets([]);
  };
  const openStakelog = (data) => {
    props.setValues(data)
    setstakeopen(true);
   
  };

  const closeStakelog = (data) => {
    
    setstakeopen(false);
   
  };
  const closeUpdateDialog = () => {
    setUpdate(false);
  };
 
 
  const handleLogOut = () => {
    localStorage.setItem("token", null);

    window.location.pathname = "/login";
  };

  const handleOnChange = (event) => {
    props.setConstant(JSON.parse(event.target.value));
  };

  const setValue =(data)=>{
    props.stakeval(data)
    props.setstack(true)
   
  }
const data1=()=>{
  props.setConstant(10)
  props.setBack(false)
}
const data2=()=>{
  props.setConstant(20)
  props.setBack(false)
}
const data3=()=>{
  props.setConstant(50)
  props.setBack(false)
}
const data4=()=>{
  props.setConstant(100)
  props.setBack(false)
}
const stake = (bet) => {
 
  switch (bet) {
    case 0:
      
     
      return props.value[0].number;
    case "Green":
      return props.value[1].number;
    case "Red":
      return props.value[2].number;

    case "Black":
      return props.value[3].number;
    case "1-12":
      return props.value[4].number;
      case "13-24":
        return props.value[5].number;
        case "25-36":
          return props.value[6].number;
           
    case "Low":
      return props.value[7].number;
    case "High":
      return props.value[8].number;
    case "Odd":
      return props.value[9].number;
    case "Even":
      return props.value[10].number
      case 1:
        return props.value[11].number;
        case 2:
      return props.value[12].number;
      case 3:
      return props.value[13].number;
      case 4:
      return props.value[14].number;
      case 5:
      return props.value[15].number;
      case 6:
      return props.value[16].number;
      case 7:
      return props.value[17].number;
      case 8:
      return props.value[18].number;
      case 9:
      return props.value[19].number;
      case 10:
      return props.value[20].number;
      case 11:
      return props.value[21].number;
      case 12:
      return props.value[22].number;
      case 13:
      return props.value[23].number;
      case 14:
      return props.value[24].number;
      case 15:
      return props.value[25].number;
      case 16:
      return props.value[26].number;
      case 17:
      return props.value[27].number;
      case 18:
      return props.value[28].number;
      case 19:
        return props.value[29].number;
        case 20:
      return props.value[30].number;
      case 21:
      return props.value[31].number;
      case 22:
      return props.value[32].number;
      case 23:
      return props.value[33].number;
      case 24:
      return props.value[34].number;
      case 25:
      return props.value[35].number;
      case 26:
      return props.value[36].number;
      case 27:
      return props.value[37].number;
      case 28:
      return props.value[38].number;
      case 29:
      return props.value[39].number;
      case 30:
      return props.value[40].number;
      case 31:
      return props.value[41].number;
      case 32:
      return props.value[42].number;
      case 33:
      return props.value[43].number;
      case 34:
      return props.value[44].number;
      case 35:
      return props.value[45].number;
      case 36:
      return props.value[46].number;
      
  }

}
  const handleSubmitBet= async()=> {
    var bets = [];
    
    props.selectedBets.forEach((bet) => {
      bets.push({
        number: bet,
        stake: stake(bet),
        GameTypeId: localStorage.getItem("spin"),
      });
    });
    try {
   await   axios
        .post(BASEURL + "bet/placebet", {
          bets: bets,
        })
        .then((response) => {
           localStorage.setItem("ticketIds",response.data.bets[0].eventId  )
           localStorage.setItem("stake",response.data.bets[0].stake  )
           localStorage.setItem("allticket",JSON.stringify(response.data.bets))
          if (response.data) {
            setplacebate(response.data.bets[0])

            setShow(true)
            props.setTicketID(
              response.data.bets[0].eventId ? response.data.bets[0].eventId : ""
            );
            
            alert.success("Successful");
           
            props.selectBets([])
            
          
           
          } else {
            alert.show("Some error...try again");
          }
        })
       
    } catch (e) {
      alert.show("Some error occured...try again");
    }
  }
  
  
  const handlevalue = (value) => {
    const  objIndex0 = props.value.findIndex((obj => obj.id === 0));
    const  objIndex1 = props.value.findIndex((obj => obj.id === 1));
    switch (value) {
      case 0:
         return (props.value[0].number
          );
      case "Green":
        return (props.value[1].number
        
        )
      case "Red":
        return props.value[2].number;

      case "Black":
        return props.value[3].number;
      case "1-12":
        return props.value[4].number;
        case "13-24":
          return props.value[5].number;
          case "25-36":
            return props.value[6].number;
             
      case "Low":
        return props.value[7].number;
      case "High":
        return props.value[8].number;
      case "Odd":
        return props.value[9].number;
      case "Even":
        return props.value[10].number;

      default:
        return props.value[0].number;
        case 1:
          return props.value[11].number;
          case 2:
        return props.value[12].number;
        case 3:
        return props.value[13].number;
        case 4:
        return props.value[14].number;
        case 5:
        return props.value[15].number;
        case 6:
        return props.value[16].number;
        case 7:
        return props.value[17].number;
        case 8:
        return props.value[18].number;
        case 9:
        return props.value[19].number;
        case 10:
        return props.value[20].number;
        case 11:
        return props.value[21].number;
        case 12:
        return props.value[22].number;
        case 13:
        return props.value[23].number;
        case 14:
        return props.value[24].number;
        case 15:
        return props.value[25].number;
        case 16:
        return props.value[26].number;
        case 17:
        return props.value[27].number;
        case 18:
        return props.value[28].number;
        case 19:
          return props.value[29].number;
          case 20:
        return props.value[30].number;
        case 21:
        return props.value[31].number;
        case 22:
        return props.value[32].number;
        case 23:
        return props.value[33].number;
        case 24:
        return props.value[34].number;
        case 25:
        return props.value[35].number;
        case 26:
        return props.value[36].number;
        case 27:
        return props.value[37].number;
        case 28:
        return props.value[38].number;
        case 29:
        return props.value[39].number;
        case 30:
        return props.value[40].number;
        case 31:
        return props.value[41].number;
        case 32:
        return props.value[42].number;
        case 33:
        return props.value[43].number;
        case 34:
        return props.value[44].number;
        case 35:
        return props.value[45].number;
        case 36:
        return props.value[46].number;
    }
  };
  const handlevalues = (value) => {
    const  objIndex0 = props.value.findIndex((obj => obj.id === 0));
    const  objIndex1 = props.value.findIndex((obj => obj.id === 1));
   
     switch (value) {
      case 0:
         return ( props.selectedStack.push(props.value[0].number)
          );
      case "Green":
        return (props.selectedStack.push(props.value[1].number)
        
        )
      case "Red":
        return props.selectedStack.push(props.value[2].number)
      case "Black":
        return props.selectedStack.push(props.value[3].number)
      case "1-12":
        return props.selectedStack.push(props.value[4].number)
        case "13-24":
          return props.selectedStack.push(props.value[5].number)
          case "25-36":
            return props.selectedStack.push(props.value[6].number)
             
     
    }
  };

  const handleOdd = (bet) => {
    
    switch (bet) {
      case "Green":
        return props.odds[1];
      case "Red":
        return props.odds[2];

      case "Black":
        return props.odds[3];
      case "1-12":
        return props.odds[4];
        case "13-24":
          return props.odds[4];
          case "25-36":
            return props.odds[4];
             
      case "Low":
        return props.odds[5];
      case "High":
        return props.odds[6];
      case "Odd":
        return props.odds[7];
      case "Even":
        return props.odds[8];

      default:
        return props.odds[0];
    }
  };

  const removeSelected = (bet) => {
    var currentBet = props.selectedBets.filter(function (e) {
      return e !== bet;
    });

    props.selectBets(currentBet);
  
    switch (bet) {
      case 0:
         return  (props.stakeValue[0] = 0,props.totalbet[0]=0)
          
      case "Green":
        return (props.stakeValue[1] = 0,props.totalbet[1]=0)
        
        
      case "Red":
        return (props.stakeValue[2] = 0,props.totalbet[2]=0)
      case "Black":
        return (props.stakeValue[3] = 0,props.totalbet[3]=0)
      case "1-12":
        return (props.stakeValue[4] = 0,props.totalbet[4]=0)
        case "13-24":
          return (props.stakeValue[5] = 0,props.totalbet[5]=0)
          case "25-36":
            return (props.stakeValue[6] = 0,props.totalbet[6]=0)
            case "Low":
              return (props.stakeValue[7] = 0,props.totalbet[7]=0)
            case "High":
              return (props.stakeValue[8] = 0,props.totalbet[8]=0)
            case "Odd":
              return (props.stakeValue[9] = 0,props.totalbet[9]=0)
            case "Even":
              return (props.stakeValue[10] = 0,props.totalbet[10]=0)
              case 1:
                return (props.stakeValue[11] = 0,props.totalbet[11]=0)
                case 2:
              return (props.stakeValue[12] = 0,props.totalbet[12]=0)
              case 3:
              return (props.stakeValue[13] = 0,props.totalbet[13]=0)
              case 4:
              return (props.stakeValue[14] = 0,props.totalbet[14]=0)
              case 5:
              return (props.stakeValue[15] = 0,props.totalbet[15]=0)
              case 6:
              return (props.stakeValue[16] = 0,props.totalbet[16]=0)
              case 7:
              return (props.stakeValue[17] = 0,props.totalbet[17]=0)
              case 8:
              return (props.stakeValue[18] = 0,props.totalbet[18]=0)
              case 9:
              return (props.stakeValue[19] = 0,props.totalbet[19]=0)
              case 10:
              return (props.stakeValue[20] = 0,props.totalbet[20]=0)
              case 11:
              return (props.stakeValue[21] = 0,props.totalbet[21]=0)
              case 12:
              return (props.stakeValue[22] = 0,props.totalbet[22]=0)
              case 13:
              return (props.stakeValue[23] = 0,props.totalbet[23]=0)
              case 14:
              return (props.stakeValue[24] = 0,props.totalbet[24]=0)
              case 15:
              return (props.stakeValue[25] = 0,props.totalbet[25]=0)
              case 16:
              return (props.stakeValue[26] = 0,props.totalbet[26]=0)
              case 17:
              return (props.stakeValue[27] = 0,props.totalbet[0]=0)
              case 18:
              return (props.stakeValue[28] = 0,props.totalbet[28]=0)
              case 19:
                return (props.stakeValue[29] = 0,props.totalbet[29]=0)
                case 20:
              return (props.stakeValue[30] = 0,props.totalbet[30]=0)
              case 21:
              return (props.stakeValue[31] = 0,props.totalbet[31]=0)
              case 22:
              return (props.stakeValue[32] = 0,props.totalbet[32]=0)
              case 23:
              return (props.stakeValue[33] = 0,props.totalbet[33]=0)
              case 24:
              return (props.stakeValue[34] = 0,props.totalbet[34]=0)
              case 25:
              return (props.stakeValue[35] = 0,props.totalbet[35]=0)
              case 26:
              return (props.stakeValue[36] = 0,props.totalbet[36]=0)
              case 27:
              return (props.stakeValue[37] = 0,props.totalbet[37]=0)
              case 28:
              return (props.stakeValue[38] = 0,props.totalbet[38]=0)
              case 29:
              return (props.stakeValue[39] = 0,props.totalbet[39]=0)
              case 30:
              return (props.stakeValue[40] = 0,props.totalbet[40]=0)
              case 31:
              return (props.stakeValue[41] = 0,props.totalbet[41]=0)
              case 32:
              return (props.stakeValue[42] = 0,props.totalbet[42]=0)
              case 33:
              return (props.stakeValue[43] = 0,props.totalbet[43]=0)
              case 34:
              return (props.stakeValue[44] = 0,props.totalbet[44]=0)
              case 35:
              return (props.stakeValue[45] = 0,props.totalbet[45]=0)
              case 36:
              return (props.stakeValue[46] = 0,props.totalbet[46]=0)
     
    }
  };
  // handlevalues

  

  const totalBet = () => {
    let total = 0;
    handlevalues()
    props.selectedBets.forEach((bet) => {
      total += handleOdd(bet);
      
   
    });
   
    if (props.getValue() * total > props.maxWin) {
      props.setDisable(true);
      props.setTotat(true)
      // alert.show("Maximum bet reached !!");

      return props.total;
    } else {
      // props.setDisable(false);
      switch (props.betvalue) {
        case 0:
           return props.value[0].number * total 
           
        case "Green":
          return props.value[1].number * total
          
          
        case "Red":
          return props.value[2].number * total;
  
        case "Black":
          return props.value[3].number * total;
        case "1-12":
          return props.value[4].number* total;
          case "13-24":
            return props.value[5].number* total;
            case "25-36":
              return props.value[6].number * total;
               
        case "Low":
          return props.value[7].number * total;
        case "High":
          return props.value[8].number * total;
        case "Odd":
          return props.value[9].number * total;
        case "Even":
          return props.value[10].number * total;
  
        default:
          return 0;
          case 0:
          return props.value[0].number * total;
          case 1:
            return props.value[11].number * total;
            case 2:
          return props.value[12].number * total;
          case 3:
          return props.value[13].number * total;
          case 4:
          return props.value[14].number * total;
          case 5:
          return props.value[15].number * total;
          case 6:
          return props.value[16].number * total;
          case 7:
          return props.value[17].number * total;
          case 8:
          return props.value[18].number * total;
          case 9:
          return props.value[19].number * total;
          case 10:
          return props.value[20].number * total;
          case 11:
          return props.value[21].number * total;
          case 12:
          return props.value[22].number * total;
          case 13:
          return props.value[23].number * total;
          case 14:
          return props.value[24].number * total;
          case 15:
          return props.value[25].number * total;
          case 16:
          return props.value[26].number * total;
          case 17:
          return props.value[27].number * total;
          case 18:
          return props.value[28].number * total;
          case 19:
            return props.value[29].number * total;
            case 20:
          return props.value[30].number * total;
          case 21:
          return props.value[31].number * total;
          case 22:
          return props.value[32].number * total;
          case 23:
          return props.value[33].number * total;
          case 24:
          return props.value[34].number * total;
          case 25:
          return props.value[35].number * total;
          case 26:
          return props.value[36].number * total;
          case 27:
          return props.value[37].number * total;
          case 28:
          return props.value[38].number * total;
          case 29:
          return props.value[39].number * total;
          case 30:
          return props.value[40].number * total;
          case 31:
          return props.value[41].number * total;
          case 32:
          return props.value[42].number * total;
          case 33:
          return props.value[43].number* total;
          case 34:
          return props.value[44].number* total;
          case 35:
          return props.value[45].number* total;
          case 36:
          return props.value[46].number * total;
      }
      
      
    }
  };
  
  useEffect(() => {
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
    //   axios
    //     .post(BASEURL + "ticket/printlastticket/")
    //     .then((response) => setLastTicket(response.data.ticket))
    //     console.log("ticketlist")
    //     console.log(lastTicket)
    //     .catch(function (error) {});
    // } catch (e) {
    //   alert.show("Error fetching last ticket !!!");
    // }
  }, []);
  const reprint=async() =>{
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
     await axios.post(BASEURL + "ticket/reprintlastticket").then((response) => {
        if (response.data.ticket[0]) {
          
          setReLastTicket(response.data.ticket[0]);
          
        } else {
          console.log("Error getting last ticket");
        }
      });
    } catch (e) {
      console.log("Error getting last ticket", e);
    }
  }
 
  const  lastTickets= async()=>{
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
    await   axios
        .post(BASEURL + "ticket/printlastticket/")
        .then((response) => setLastTicket(response.data.ticket))
        
        .catch(function (error) {});
    } catch (e) {
      alert.show("Error fetching last ticket !!!");
    }
  
  }


  return (
    <Fragment>
      <IconContext.Provider value={{ color: "" }}>
        <nav className='side-menu'>
          <div className='nav-menu-items p-1 text-white '>
            <div className='d-flex justify-content-between '>
              <div className='p-2 flex-fill'>
                <Link to='#' className='menu-bars  '>
                  <BsIcons.BsCashStack color='gray' size={25} />
                </Link>
                <div className=' text-white'>
                  ብር {localStorage.getItem("balance")}
                </div>
              </div>
              <div className='vr'></div>

              <div className='p-2 flex-fill'>
                <Link to='#' className='menu-bars  '>
                  <BsIcons.BsFillPersonFill color='gray' size={25} />
                </Link>
                <div className=' text-white'>
                  {localStorage.getItem("user")}
                </div>
              </div>
              <div className='vr'></div>

              <div className='col-lg p-2  my-3 hamburger'>
                <Link to='#' className='menu-bars mx-3 m-3 '>
                  <FaIcons.FaAlignJustify color='white' onClick={showSideBar} />
                </Link>
              </div>
            </div>
            <div className='row mx-1 button2' style={{overflowX:"hidden"}}>
              <div className='col-lg-3'>
                <small>Section</small>
              </div>
              <div className='col-lg-3'>
                <small>Odds</small>
              </div>
              <div className='col-lg-3'>
                <small>Stake</small>
              </div>
            </div>
            <div className='bg-white mx-1 resultSection text-primary '>
              {Object.values(props.selectedBets).map((bets, key) => {
                return (
                  <div className='row text-primary betsCard' key={key}>
                    <div className='col-lg-3'>
                      <small>{bets}</small>
                    </div>
                    <div className='col-lg-3'>
                     
                      <small>{handleOdd(bets)}</small>
                    </div>
                    <div className='col-lg-4'
                    content={() => componentRefstake.current}
                     >
                     <button   onClick={() => {
                       
                  openStakelog(bets)
                }}  style={{width:"100%"}} > <small>{handlevalue(bets)}</small></button>
                     
                    </div>
                    <div className='col-lg-1'>
                      <AiIcons.AiOutlineClose
                        color='red'
                        onClick={() => removeSelected(bets)}
                      />
                    </div>
                  </div>
                );
              })}
            </div>
            
            <div className='row mx-1 bg-primary'>
              <div className='col-lg-8'><b>Total stake</b></div>
              <div className='col-lg-4'>
                <b>Total Bet</b>
              </div>
            </div>
            <div className='row mx-1 bg-primary'>
              <div className='col-lg-8'> 
               <b> {"ብር " + total}</b>
               </div>
              <div className='col-lg-4'>
                <b> {"ብር " + totalBets}</b>
              </div>
            </div>
            <div className='row mx-1 bg-primary color-secondary'>
              <div className='col-lg-8'>
                <small>Max.Winning</small>
              </div>
              <div className='col-lg-4'>
                <small>ብር 100,000</small>
              </div>
            </div>
             <div className='row mx-1 my-1'>
             <div className='col-lg-4 my-2'>
                <small>Stake:</small>
              </div>
              <div className='col-lg-8'>
                <input
                  type='text'
                  className='form-control'
                  placeholder='ብር 10'
                  value={props.constant}
                  onChange={handleOnChange}
                />
              </div>
            </div>

            <div className='btn-group'>
            <button
                type='button'
              
                className='btn bg-white customBtn mx-1'
                onClick={()=>props.setBack(true)}
              >
                <BiIcons.BsFillBackspaceFill color='red' />
              </button>
              <button
                type='button'
                className='btn bg-white mx-1 customBtn'
                onClick={()=>data1()}
               
              >
                10
              </button>
              <button
                type='button'
                className='btn bg-white mx-1 customBtn'
                onClick={()=>data2()}
              >
                20
              </button>
              <button
                type='button'
                className='btn bg-white mx-1 customBtn'
                onClick={()=>data3()}
              >
                50
              </button>
            </div>
            {/* <div className='btn-group my-1'>
              <button
                type='button'
                className='btn bg-white customBtn mx-1'
                onClick={() =>  props.setConstant(100)}
              >
                100
              </button>
              <button
                type='button'
                className='btn bg-white customBtn mx-1'
                onClick={() =>  props.setConstant(300)}
              >
                300
              </button>
              <button
                type='button'
                className='btn bg-white customBtn mx-1'
                onClick={() =>  props.setConstant(500)}
              >
                500
              </button>
              <button
                type='button'
                className='btn bg-white customBtn mx-1'
                onClick={() =>  props.setConstant(1000)}
              >
                1K
              </button>
            </div> */}
            <div className='btn-group my-1'>
              <button
                type='button'
                className='btn bg-white customBtn mx-1'
                onClick={()=>data4()}
              >
                100
              </button>
            </div> 

            <div className='btn-group my-1'>
           
              {/* <button
                type='button'
                disabled={
                  !(props.selectedBets.length > 0 && props.disable === false)
                }
                className='btn bg-white customBtn mx-1'
                onClick={handleSubmitBet}
              >
                <AiIcons.AiOutlineCheck color='green' />
              </button> */}
              <button
                type='button'
                className='btn bg-white customBtn mx-1'
                onClick={() => {
                  props.selectBets([]);
                }}
              >
                <AiIcons.AiOutlineClose color='red' />
              </button>
              <button
                type='button'
                className='btn bg-white customBtn mx-1'
                
                onClick={() => {
                  openUpdateDialog()
                }}
              >
                <AiIcons.AiOutlineBarcode color='black' />
              </button>
              <div  >
                 
             
                  <ReactToPrint
              onBeforeGetContent={handleSubmitBet}
              trigger={() => (
                <button disabled={!(props.selectedBets.length > 0 || totalset)} type='button' className='btn printBtn  mx-1'  >
                  <AiIcons.AiOutlinePrinter size={20} color='white' />
                </button>
              )}
              content={() => componentRefTicket.current}
            />
              
            
              </div>
               <div className='d-none'>
                {" "}
                <Ticket
                  ref={componentRefTicket}
                  ticket = {placebate}
                  ticketID={props.ticketID}
                  selectedBets={props.selectedBets}
                  getValue={props.getValue()}
                  total={props.total}
                />
              </div>
              
            </div>
          </div>
        </nav>
      </IconContext.Provider>
      <div className={sidebar ? "nav-menu active" : "nav-menu"}>
        <div className='nav-menu-items  text-white '>
          <div className='d-flex justify-content-between '>
            <div className='p-2 flex-fill'></div>

            <div className='p-2 flex-fill'></div>

            <div className='col-lg p-2  hamburger'>
              <Link to='#' className='menu-bars mx-3 m-3 '>
                <AiIcons.AiOutlineClose color='white' onClick={showSideBar} />
              </Link>
            </div>
          </div>
          <div className='row p-3'>
            <button
              type='button'
              className='btn btn-lg bg-white'
              onClick={() => {
                props.setshopAdmin(true);
              }}
            >
              <div className='row d-flex justify-content-center'>
                <GrIcons.GrUserAdmin size={20} />
                <h5>Admin</h5>
              </div>
            </button>
          </div>

         <div className='row p-3' >
          
            <ReactToPrint
            onBeforeGetContent={lastTickets}
              trigger={() => (
                <button  type='button' className='btn btn-lg bg-white'>
                  <div className='row d-flex justify-content-center'>
                    <GrIcons.GrPrint size={20} />
                    <h5>Print Last Ticket</h5>
                  </div>
                </button>
              )}
              content={() => componentRef.current}
            />
            <div className='d-none'>
              {" "}
              <TicketLast ticket={lastTicket} ref={componentRef} ticketID={""} />
            </div>
          </div>
           <div className='row p-3' >
            <ReactToPrint
            onBeforeGetContent={reprint}
              trigger={() => (
                <button   type='button' className='btn btn-lg bg-white'>
                  <div className='row d-flex justify-content-center'>
                    <GrIcons.GrPrint size={20} />
                    <h5>Reprint A Ticket</h5>
                  </div>
                </button>
              )}
              content={() => componentRefReprint.current}
            />
            <div className='d-none'>
              {" "}
              <RePrintTicketLast ticket={relastTicket} ref={componentRefReprint} />
            </div>
          </div>
          <div className='row p-3'>
            <button type='button' className='btn btn-lg bg-secondary'>
              <div className='row d-flex justify-content-center'>
                <GrIcons.GrHelp size={20} />
                <h5>Fastbet Help</h5>
              </div>
            </button>
          </div>
          <div className='row p-3'>
            <button type='button' className='btn btn-lg bg-white'>
              <div className='row d-flex justify-content-center'>
                <MdIcons.MdShortcut size={20} />
                <h5>Shortcuts Help</h5>
              </div>
            </button>
          </div>
          <div className='row p-3'>
            <button
              type='button'
              className='btn btn-lg bg-white'
              onClick={handleLogOut}
            >
              <div className='row d-flex justify-content-center'>
                <FaIcons.FaPowerOff size={20} />
                <h5>Log Out</h5>
              </div>
            </button>
          </div>
        
 
        </div>
        {openUpdate && (
        <ModalTicketCheck
          closeUpdateDialog={closeUpdateDialog}
          open={openUpdate}
          setTicketID={(value) => props.setTicketID(value)}
          setStatus={(value) => props.setStatus(value)}
          ticketStatuss={(value)=>  props.ticketStatuss(value)}
  
        />
      )}
      {stakeopen && (
        <StakeModal
        closeStakelog={closeStakelog }
        setgetvalueall={(value)=>props.setgetvalueall(value)}
              getvalueall ={props.getvalueall}
        ref={componentRefstake}
          open={stakeopen}
          setTicketID={(value) => props.setTicketID(value)}
          setStatus={(value) => props.setStatus(value)}
          ticketStatuss={(value)=>  props.ticketStatuss(value)}
          setValue={(value) => props.setValues(value)}
          values={props.value}
          setStake={(value)=>props.setStake(value)}
          stakevalue={props.stakevalue}
          setvalue0={(value)=>props.setvalue0(value)}
              getvalue0={props.getvalue0}
         
        />
      )}
      </div>
    </Fragment>
  );
}
