import { React, useState, useEffect } from "react";
import socketIOClient from "socket.io-client";
import SpinStretch from "react-cssfx-loading/lib/SpinStretch";
import axios from "axios";
import { Fragment } from "react/cjs/react.production.min";
import "../Components/Css/homeCss.css";
import "../Components/Css/navBar.css";
import "../Components/Css/popup.css";
import * as FaIcons from "react-icons/fa";
import { useParams } from "react-router-dom";
import Tabs from "../Components/tabs";
import BottomTabs from "../Components/bottomTabs";
import Bottom from "../Components/Bottom";
import RightSideBar from "../Components/rightSideBar";
import NavBar from "../Components/NavBar";
import { BASEURL } from "../Functions/apiUrl";
function ScanHome(props) {
  const row1Color = ["danger", "black", "danger", "black", "danger", "black"];
  const row2Color = ["danger", "black", "danger", "black", "black", "danger"];
  const row3Color = ["black", "danger", "black", "danger", "black", "danger"];
  const row4Color = ["danger", "black", "danger", "black", "danger", "black"];
  const row5Color = ["danger", "black", "danger", "black", "black", "danger"];
  const row6Color = ["black", "danger", "black", "danger", "black", "danger"];

  const [timer, setTimer] = useState("00:00");
  const [disable, setDisable] = useState(false);
  const [odds, setOdds] = useState([]);
 

  const [selectedBets, selectBet] = useState([]);
  const { id } = useParams();
  const { eventid } = useParams();
  
  localStorage.setItem("id",eventid)
  const Odd = () => {
    try {
      axios.get(BASEURL + "bet/odds").then((response) => {
        var temp = [];
        temp.push(
          response.data.odds.number,
          response.data.odds.green,
          response.data.odds.red,
          response.data.odds.black,
          response.data.odds.dozens,
          response.data.odds.low,
          response.data.odds.high,
          response.data.odds.odd,
          response.data.odds.even
        );
        setOdds(temp);
      });
    } catch (e) {
      
      setOdds([]);
    }
  };

  useEffect(() => {
    
    try {
      const socket = socketIOClient("https://api.cobet.et/");
      socket.on("FromAPI", (data) => {
        setTimer(data.minute + ":" + data.second);
        if (data.minute === 0) {
          if (data.second < 5) {
            setDisable(true);
          }
        } else {
          setDisable(data.pause);
        }
      });
      Odd();
      if (eventid) {
        props.setscanStatus(true);
      }
      props.setKunoActive(false);
    } catch (e) {
      console.log("Error in Timer");
    }
  }, []);

  if (!localStorage.getItem("token")) {
    window.location.pathname = "/login";
  } else {
    return (
      <Fragment>
        <div className='home homepage '>
          <div className='bg-white '>
            <div className='row'>
              <div className='col-lg-9'>
                <div className='row'>
                  <div className='col-lg-12'>
                    <NavBar
                      setshopAdminKuno={(value) =>
                        props.setshopAdminKuno(value)
                      }
                      shopAdminKuno={props.shopAdminKuno}
                      kunoActive={props.kunoActive}
                      getValue={() => props.getValue()}
                      payTable={props.payTable}
                      setPayTable={(value) => props.setPayTable(value)}
                      shopAdmin={props.shopAdmin}
                      setshopAdmin={(value) => props.setshopAdmin(value)}
                      timer={timer}
                      id={() => props.match.params.id}
                    />
                  </div>
                  {disable ? (
                    <Fragment>
                      {" "}
                      <div className='col-lg-12 opacity-75 opacity-50' style={{backgroundColor:"rgba(0,24,100,0.9)",paddingTop:"25%",paddingBottom:"25%"}}>
                      <div >
                      <div className='center' >
                            <FaIcons.FaHandPaper  color='white' size={30}/>
                          </div>
                     
                        <div className='center'>
                          {/* <SpinStretch
                            color='#ff5b00'
                            width='100px'
                            height='100px'
                            duration='1s'
                           
                            backgroundColor="rgba(0,24,100,0.9)"
                          /> */}
                         
                          
                          <div className='  ml-1' style={{color:"white",fontSize:"150%"}}> MARKET CLOSE </div>
                        </div>
                        </div>
                      </div>
                   
                    </Fragment>
                  ) : (
                    <Fragment>
                      {" "}
                      <div className='col-lg-6 '>
                        <div className='row'>
                          <h2 className='titleGame'>Exact Number</h2>
                          <div style={{paddingTop:"0.2%"}} class='btn-group  text-white'>
                            <button
                              type='button'
                              style={{backgroundColor:"#4CAF50"}}
                              className={"btn  customBtn2 mx-1"}
                              onClick={() => {
                                let currentBet;
                                if (selectedBets.includes(0)) {
                                  currentBet = selectedBets.filter(function (
                                    e
                                  ) {
                                    return e !== 0;
                                  });

                                  selectBet(currentBet);
                                } else {
                                  currentBet = selectedBets;
                                  currentBet.push(0);

                                  selectBet(currentBet);
                                }
                              }}
                            >
                              <div
                                className={
                                  selectedBets.includes(0)
                                    ? "bg-warning text-black rounded-circle"
                                    : ""
                                }
                              >
                                {" "}
                                {0}
                              </div>
                            </button>
                          </div>
                          <div style={{paddingTop:"0.3%"}} class='btn-group  text-white'>
                            {row1Color.map((color, index) => {
                              return (
                                <button
                                  type='button'
                                  style={{ marginLeft:"0.3%"}}
                                  className={
                                    "btn " + color + " customBtn2 "
                                  }
                                  onClick={() => {
                                    let currentBet;
                                    if (selectedBets.includes(index + 1)) {
                                      currentBet = selectedBets.filter(
                                        function (e) {
                                          return e !== index + 1;
                                        }
                                      );

                                      selectBet(currentBet);
                                    } else {
                                      currentBet = selectedBets;
                                      currentBet.push(index + 1);

                                      selectBet(currentBet);
                                    }
                                  }}
                                >
                                  <div
                                  
                                    className={
                                      selectedBets.includes(index + 1)
                                        ? "bg-warning text-black rounded-circle"
                                        : ""
                                    }
                                  >
                                    {" "}
                                    {index + 1}
                                  </div>
                                </button>
                              );
                            })}
                          </div>
                          <div style={{paddingTop:"0.2%"}} className='btn-group  text-white'>
                            {row2Color.map((color, index) => {
                              return (
                                <button
                                  type='button'
                                  style={{ marginLeft:"0.3%"}}
                                  className={
                                    "btn " + color + " customBtn2"
                                  }
                                  onClick={() => {
                                    if (selectedBets.includes(index + 7)) {
                                      var currentBet = selectedBets.filter(
                                        function (e) {
                                          return e !== index + 7;
                                        }
                                      );

                                      selectBet(currentBet);
                                    } else {
                                      currentBet = selectedBets;
                                      currentBet.push(index + 7);
                                      selectBet(currentBet);
                                    }
                                  }}
                                >
                                  <div
                                    className={
                                      selectedBets.includes(index + 7)
                                        ? "bg-warning text-black rounded-circle"
                                        : ""
                                    }
                                  >
                                    {" "}
                                    {index + 7}
                                  </div>{" "}
                                </button>
                              );
                            })}
                          </div>
                          <div style={{paddingTop:"0.2%"}} className='btn-group  text-white'>
                            {row3Color.map((color, index) => {
                              return (
                                <button
                                style={{ marginLeft:"0.3%"}}
                                  type='button'
                                  className={
                                    "btn " + color + " customBtn2 "
                                  }
                                  onClick={() => {
                                    if (selectedBets.includes(index + 13)) {
                                      var currentBet = selectedBets.filter(
                                        function (e) {
                                          return e !== index + 13;
                                        }
                                      );

                                      selectBet(currentBet);
                                    } else {
                                      currentBet = selectedBets;
                                      currentBet.push(index + 13);
                                      selectBet(currentBet);
                                    }
                                  }}
                                >
                                  <div
                                    className={
                                      selectedBets.includes(index + 13)
                                        ? "bg-warning text-black rounded-circle"
                                        : ""
                                    }
                                  >
                                    {" "}
                                    {index + 13}
                                  </div>{" "}
                                </button>
                              );
                            })}
                          </div>
                          <div style={{paddingTop:"0.2%"}} className='btn-group  text-white'>
                            {row4Color.map((color, index) => {
                              return (
                                <button
                                  type='button'
                                  style={{ marginLeft:"0.3%"}}
                                  className={
                                    "btn " + color + " customBtn2"
                                  }
                                  onClick={() => {
                                    if (selectedBets.includes(index + 19)) {
                                      var currentBet = selectedBets.filter(
                                        function (e) {
                                          return e !== index + 19;
                                        }
                                      );

                                      selectBet(currentBet);
                                    } else {
                                      currentBet = selectedBets;
                                      currentBet.push(index + 19);
                                      selectBet(currentBet);
                                    }
                                  }}
                                >
                                  <div
                                    className={
                                      selectedBets.includes(index + 19)
                                        ? "bg-warning text-black rounded-circle"
                                        : ""
                                    }
                                  >
                                    {" "}
                                    {index + 19}
                                  </div>{" "}
                                </button>
                              );
                            })}
                          </div>
                          <div style={{paddingTop:"0.3%"}} className='btn-group text-white'>
                            {row5Color.map((color, index) => {
                              return (
                                <button
                                  type='button'
                                  style={{ marginLeft:"0.3%"}}
                                  className={
                                    "btn " + color + " customBtn2 "
                                  }
                                  onClick={() => {
                                    if (selectedBets.includes(index + 25)) {
                                      var currentBet = selectedBets.filter(
                                        function (e) {
                                          return e !== index + 25;
                                        }
                                      );

                                      selectBet(currentBet);
                                    } else {
                                      currentBet = selectedBets;
                                      currentBet.push(index + 25);
                                      selectBet(currentBet);
                                    }
                                  }}
                                >
                                  <div
                                    className={
                                      selectedBets.includes(index + 25)
                                        ? "bg-warning text-black rounded-circle"
                                        : ""
                                    }
                                  >
                                    {" "}
                                    {index + 25}
                                  </div>{" "}
                                </button>
                              );
                            })}
                          </div>
                          <div style={{paddingTop:"0.2%"}} className='btn-group text-white'>
                            {row6Color.map((color, index) => {
                              return (
                                <button
                                  type='button'
                                  style={{ marginLeft:"0.3%"}}
                                  className={
                                    "btn " + color + " customBtn2 "
                                  }
                                  onClick={() => {
                                    if (selectedBets.includes(index + 31)) {
                                      var currentBet = selectedBets.filter(
                                        function (e) {
                                          return e !== index + 31;
                                        }
                                      );

                                      selectBet(currentBet);
                                      
                                    } else {
                                      currentBet = selectedBets;
                                      currentBet.push(index + 31);
                                      selectBet(currentBet);
                                    
                                    }
                                  }}
                                >
                                  <div
                                    className={
                                      selectedBets.includes(index + 31)
                                        ? "bg-warning text-black rounded-circle"
                                        : ""
                                    }
                                  >
                                    {" "}
                                    {index + 31}
                                  </div>{" "}
                                </button>
                              );
                            })}
                          </div>
                        </div>
                        <div className='row'>
                          <BottomTabs />
                        </div>
                      </div>
                      <div className='col-lg-6 '>
                        <Tabs
                          selectedBet={selectedBets}
                          selectBet={(value) => selectBet(value)}
                        />
                      </div>
                    </Fragment>
                  )}
                </div>
              </div>

              <div className='col-lg-3 '>
                <RightSideBar
                  setshopAdmin={(value) => props.setshopAdmin(value)}
                  disable={disable}
                  setDisable={(value) => setDisable(value)}
                  setValue={(value) => props.setValue(value)}
                  getValue={() => props.getValue()}
                  selectedBets={selectedBets}
                  setStatus={(value) => props.setStatus(value)}
                  selectBets={(value) => selectBet(value)}
                  trigger={props.trigger}
                  setTrigger={(value) => props.setTrigger(value)}
                  ticketID={props.ticketID}
                  ticketStatuss={(value)=>  props.ticketStatuss(value)}
                  setTicketID={(value) => props.setTicketID(value)}
                  odds={odds}
                  setTotal={(value) => props.setTotal(value)}
                  total={props.total}
                  maxWin={props.maxWin}
                />
              </div>
            </div>
            <div className='row'>
              <Bottom />
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}

export default ScanHome;
