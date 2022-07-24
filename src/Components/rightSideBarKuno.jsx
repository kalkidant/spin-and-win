import React, { Fragment, useState, useRef } from "react";
import ReactToPrint from "react-to-print";
import { useAlert } from "react-alert";

import * as FaIcons from "react-icons/fa";
import * as BsIcons from "react-icons/bs";
import * as GrIcons from "react-icons/gr";
import * as MdIcons from "react-icons/md";

import * as AiIcons from "react-icons/ai";
import { IconContext } from "react-icons";

import { Link } from "react-router-dom";
import "./Css/navBar.css";
import sendBets from "../Functions/requests";
import { TicketKuno } from "../Pages/printComponentKuno";
import { TicketLast } from "../Pages/printLastComponent";
import { RePrintTicketLast } from "../Pages/reprintLastComponent";
import axios from "axios";
import { BASEURL } from "../Functions/apiUrl";
export default function RightSideBarKuno(props) {
  const [sidebar, setSideBar] = useState(false);
  const showSideBar = () => setSideBar(!sidebar);
  const [lastTicket, setLastTicket] = useState("");
  const [relastTicket, setReLastTicket] = useState("");
  const alert = useAlert();

  let componentRef = useRef();
  let componentRefTicket = useRef();
  let componentRefReprint = useRef();

  const handleLogOut = () => {
    localStorage.clear();

    window.location.pathname = "/login";
  };
  const handleOnChange = (event) => {
    props.setValue(event.target.value);
  };
  function handleSubmitBet() {
    var bets = [];
    props.selectedBets.forEach((bet) => {
      bets.push({
        number: bet,
        stake: props.getValue(),
        GameTypeId: localStorage.getItem("spin"),
      });
    });
    try {
      axios
        .post(BASEURL + "bet/placebet", {
          bets: bets,
        })
        .then((response) => {
          if (response.data) {
            console.log("IN BETS", response.data.bets[0].eventId);
            props.setTicketID(
              response.data.bets[0].eventId ? response.data.bets[0].eventId : ""
            );
            alert.success("Successful");
          } else {
            alert.show("Some error...try again");
          }
        });
    } catch (e) {
      alert.show("Some error occured...try again");
    }
  }
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
  const handleOdd = (bet) => {
    switch (bet) {
      case 10:
        return 10000;
      case 9:
        return 5000;

      case 8:
        return 2000;
      case 7:
        return 1000;
      case 6:
        return 500;
      case 5:
        return 150;
      case 4:
        return 100;
      case 3:
        return 50;
      case 2:
        return 10;
      case 1:
        return 3;
      case "yesFirst":
        return 7;
      case "noFirst":
        return 1;
      case "yesLast":
        return 7;
      case "noLast":
        return 1;
      case "firstEven":
        return 1;
      case "firstOdd":
        return 1;
      case "lastEven":
        return 1;
      case "lastOdd":
        return 1;
      case "firstLT40.5":
        return 1;
      case "firstGT40.5":
        return 1;
      case "LT810.5":
        return 1;
      case "GT810.5":
        return 1;
      case "GT202.5":
        return 1;
      case "LT202.5":
        return 1;
      case "lastLT40.5":
        return 1;
      case "lastGT40.5":
        return 1;

      default:
        return 1;
    }
  };

  const handleOddExtra = (bet) => {
    switch (bet) {
      case "yesFirst":
        return 7;
      case "noFirst":
        return 1;
      case "yesLast":
        return 7;
      case "noLast":
        return 1;
      case "firstEven":
        return 1;
      case "firstOdd":
        return 1;
      case "lastEven":
        return 1;
      case "lastOdd":
        return 1;
      case "firstLT40.5":
        return 1;
      case "firstGT40.5":
        return 1;
      case "LT810.5":
        return 1;
      case "GT810.5":
        return 1;
      case "GT202.5":
        return 1;
      case "LT202.5":
        return 1;
      case "lastLT40.5":
        return 1;
      case "lastGT40.5":
        return 1;
      default:
        return 1;
    }
  };
  const removeSelected = (bet) => {
    var currentBet = props.selectedBets.filter(function (e) {
      return e !== bet;
    });

    props.selectBets(currentBet);
  };
  const totalBet = () => {
    let total = 0;

    props.selectedBets.forEach((bet) => {
      if (!Number.isInteger(bet)) {
        total += handleOddExtra(bet);
      }
    });
    if (
      props.getValue() * (total + handleOdd(numberBets.length)) >
      props.maxWin
    ) {
      alert.show("Maximum bet reached !!");

      return props.total;
    } else {
      props.setTotal(props.getValue() * (total + handleOdd(numberBets.length)));
      return props.getValue() * (total + handleOdd(numberBets.length));
    }
  };

  // async function handleSubmitBet() {
  //   try {
  //     sendBets(props.selectedBets, props.getValue()).then((res) => {
  //       if (res[0] === true) {
  //         alert.show("Bet placed successfully");
  //         props.setTicketID(res[1].id);
  //       } else {
  //         alert.show("Some error...try again");
  //       }
  //     });
  //   } catch (e) {
  //     alert.show("Some error occured...try again");
  //   }
  // }
  let numberBets = [];
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
                <div className=' text-white'>ብር 5k</div>
              </div>
              <div className='vr'></div>

              <div className='p-2 flex-fill'>
                <Link to='#' className='menu-bars  '>
                  <BsIcons.BsFillPersonFill color='gray' size={25} />
                </Link>
                <div className=' text-white'>test</div>
              </div>
              <div className='vr'></div>

              <div className='col-lg p-2  my-3 hamburger'>
                <Link to='#' className='menu-bars mx-3 m-3 '>
                  <FaIcons.FaAlignJustify color='white' onClick={showSideBar} />
                </Link>
              </div>
            </div>
            <div className='row mx-1 bg-primary'>
              <div className='col-lg-5'>
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
              {props.selectedBets.map((bets, key) => {
                if (Number.isInteger(bets)) {
                  numberBets.push(bets);
                  return null;
                }
              })}

              <div
                className={
                  numberBets.length > 0 ? "row text-primary betsCard" : "d-none"
                }
              >
                <div className='col-lg-5'>
                  <small>{"{ " + numberBets + " }"}</small>
                </div>
                <div className='col-lg-3'>
                  <small>{handleOdd(numberBets.length)}</small>
                </div>
                <div className='col-lg-3'>
                  <small>{props.getValue()}</small>
                </div>
                <div className='col-lg-1'>
                  <AiIcons.AiOutlineClose
                    color='red'
                    onClick={() => removeSelected(numberBets)}
                  />
                </div>
              </div>

              {Object.values(props.selectedBets).map((bets, key) => {
                if (!Number.isInteger(bets)) {
                  return (
                    <div className='row text-primary betsCard' key={key}>
                      <div className='col-lg-5'>
                        <small>{bets}</small>
                      </div>
                      <div className='col-lg-3'>
                        <small>{handleOdd(bets)}</small>
                      </div>
                      <div className='col-lg-3'>
                        <small>{props.getValue()}</small>
                      </div>
                      <div className='col-lg-1'>
                        <AiIcons.AiOutlineClose
                          color='red'
                          onClick={() => removeSelected(bets)}
                        />
                      </div>
                    </div>
                  );
                } else {
                  return <div></div>;
                }
              })}
            </div>
            <div className='row mx-1 bg-primary'>
              <div className='col-lg-8'></div>
              <div className='col-lg-4'>
                <b>Total Bet</b>
              </div>
            </div>
            <div className='row mx-1 bg-primary'>
              <div className='col-lg-8'></div>
              <div className='col-lg-4'>
                <b> {"ብር " + totalBet()}</b>
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
                  value={props.getValue()}
                  onChange={handleOnChange}
                />
              </div>
            </div>

            <div className='btn-group'>
              <button
                type='button'
                className='btn bg-white mx-1 customBtn'
                onClick={() => props.setValue(10)}
              >
                10
              </button>
              <button
                type='button'
                className='btn bg-white mx-1 customBtn'
                onClick={() => props.setValue(30)}
              >
                30
              </button>
              <button
                type='button'
                className='btn bg-white mx-1 customBtn'
                onClick={() => props.setValue(50)}
              >
                50
              </button>
            </div>
            <div className='btn-group my-1'>
              <button
                type='button'
                className='btn bg-white customBtn mx-1'
                onClick={() => props.setValue(100)}
              >
                100
              </button>
              <button
                type='button'
                className='btn bg-white customBtn mx-1'
                onClick={() => props.setValue(300)}
              >
                300
              </button>
              <button
                type='button'
                className='btn bg-white customBtn mx-1'
                onClick={() => props.setValue(500)}
              >
                500
              </button>
              <button
                type='button'
                className='btn bg-white customBtn mx-1'
                onClick={() => props.setValue(1000)}
              >
                1K
              </button>
            </div>
            <div className='btn-group my-1'>
              <button
                type='button'
                className='btn bg-white customBtn mx-1'
                onClick={() => props.setValue(1500)}
              >
                1.5K
              </button>
            </div>
            {console.log("Length", props.selectedBets.length, props.disable)}
            <div className='btn-group my-1'>
              <button
                type='button'
                disabled={
                  !(
                    numberBets.length > 0 ||
                    (props.selectedBets.length > 0 && props.disable === false)
                  )
                }
                className='btn bg-white customBtn mx-1'
                onClick={handleSubmitBet}
              >
                <AiIcons.AiOutlineCheck color='green' />
              </button>
              <button
                type='button'
                className='btn bg-white customBtn mx-1'
                onClick={() => {
                  if (true) {
                    var currentBet = props.selectedBets.filter(function (e) {
                      return;
                    });

                    props.selectBets(currentBet);
                  }
                }}
              >
                <AiIcons.AiOutlineClose color='red' />
              </button>
              <button
                type='button'
                className='btn bg-white customBtn mx-1'
                onClick={() => props.setTrigger(true)}
              >
                <AiIcons.AiOutlineBarcode color='black' />
              </button>
              <ReactToPrint
                trigger={() => (
                  <button type='button' className='btn printBtn customBtn mx-1'>
                    <AiIcons.AiOutlinePrinter color='white' />
                  </button>
                )}
                content={() => componentRefTicket.current}
              />
              <div className='d-none'>
                {" "}
                <TicketKuno
                  ref={componentRefTicket}
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

          <div className='row p-3'onClick={()=>{lastTickets()}}>
            <ReactToPrint
              trigger={() => (
                <button type='button' className='btn btn-lg bg-white'>
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
              <TicketLast
              ticket={lastTicket}
                ref={componentRef}
                ticketID={lastTicket.id}
                selectedBets={lastTicket}
              />
            </div>
          </div>
          <div className='row p-3' onClick={()=>{reprint()}}>
            <ReactToPrint
              trigger={() => (
                <button type='button' className='btn btn-lg bg-white'>
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
              <RePrintTicketLast
              ticket={lastTicket}
                ref={componentRefReprint}
                ticketID={relastTicket.id}
                selectedBets={relastTicket}
              />
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
      </div>
    </Fragment>
  );
}
