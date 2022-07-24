import { React, useState, useEffect } from "react";
import socketIOClient from "socket.io-client";
import SpinStretch from "react-cssfx-loading/lib/SpinStretch";
import axios from "axios";
import { Fragment } from "react/cjs/react.production.min";
import "../Components/Css/navBar.css";
import "../Components/Css/popup.css";
import "../Components/Css/homeCss.css";
import "../Components/Css/cardsCss.css";
import * as FaIcons from "react-icons/fa";
import * as GiIcons from "react-icons/gi";

import { useParams } from "react-router-dom";
import TabsKuno from "../Components/tabsKuno";
import BottomTabs from "../Components/bottomTabs";
import Bottom from "../Components/Bottom";
import RightSideBar from "../Components/rightSideBar";
import NavBar from "../Components/NavBar";
import { cols } from "../Functions/utils";
import RightSideBarKuno from "../Components/rightSideBarKuno";
import { BASEURL } from "../Functions/apiUrl";
function Cards(props) {
  const rowColor = [
    "secondary",
    "secondary",
    "secondary",
    "secondary",
    "secondary",
    "secondary",
  ];

  //onclick Listeners
  const [timer, setTimer] = useState("00:00");
  const [disable, setDisable] = useState(false);
  const [odds, setOdds] = useState([]);
  let { id } = useParams();
  const betsMaxLength = 10;
  const [selectedBets, selectBet] = useState([]);

  useEffect(() => {
    const socket = socketIOClient("https://virtual-bets.herokuapp.com/");
    socket.on("FromAPI", (data) => {
      setTimer(data.minute + ":" + data.second);
      setDisable(data.pause);
    });
  }, [props]);
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
                      <div className='col-lg-12 overlayStop' style={{backgroundColor:"rgba(0,24,100,0.9)"}}>
                        <div className='center'>
                          {/* <SpinStretch
                            color='#ff5b00'
                            width='100px'
                            height='100px'
                            duration='1s'
                           
                            backgroundColor="rgba(0,24,100,0.9)"
                          /> */}
                          <div style={{marginLeft:"20%"}} className='display-4'>
                            <FaIcons.FaHandPaper/>
                          </div>
                          <div className='  ml-1' style={{color:"black"}}> MARKET </div>
                        </div>
                      </div>
                    </Fragment>
                  ) : (
                    <Fragment>
                      {" "}
                      <div className='col-lg-5 '>
                        <div className='row'>
                          <div className='col-6'>
                            <h2 className='titleGame'>Pick a number</h2>
                          </div>

                          <div class='btn-group text-white cardsMain '>
                            {rowColor.map((color, index) => {
                              return (
                                <div>
                                  {" "}
                                  <div className='btn-group'>
                                    <button
                                      type='button'
                                      className={
                                        selectedBets.includes(index + 1)
                                          ? "btn bg-primary mx-1 cardsButton"
                                          : "btn bg-" +
                                            color +
                                            "  mx-1 cardsButton"
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
                                          if (
                                            !(
                                              currentBet.length >= betsMaxLength
                                            )
                                          ) {
                                            currentBet.push(index + 1);
                                          }

                                          selectBet(currentBet);
                                        }
                                      }}
                                    >
                                      <div className='display-3'>
                                        {index + 1}
                                      </div>
                                    </button>
                                  </div>
                                </div>
                              );
                            })}
                          </div>
                          <div className='btn-group my-3 cardsMain centerButtons'>
                            {" "}
                            <button
                              type='button'
                              className={
                                selectedBets.includes("symbol")
                                  ? "btn bg-primary   cardsButton mx-1"
                                  : "btn bg-secondary cardsButton mx-1"
                              }
                              onClick={() => {
                                let currentBet;

                                if (selectedBets.includes("symbol")) {
                                  currentBet = selectedBets.filter(function (
                                    e
                                  ) {
                                    return e !== "symbol";
                                  });

                                  selectBet(currentBet);
                                } else {
                                  currentBet = selectedBets;
                                  if (!(currentBet.length >= betsMaxLength)) {
                                    currentBet.push("symbol");
                                  }

                                  selectBet(currentBet);
                                }
                              }}
                            >
                              <GiIcons.GiGriffinSymbol
                                color='white'
                                size={50}
                              />
                            </button>
                          </div>
                        </div>
                      </div>
                      <div className='col-lg-7'></div>
                    </Fragment>
                  )}
                </div>
              </div>

              <div className='col-lg-3 '>
                <RightSideBarKuno
                  setshopAdmin={(value) => props.setshopAdmin(value)}
                  setValue={(value) => props.setValue(value)}
                  getValue={() => props.getValue()}
                  selectedBets={selectedBets}
                  selectBets={(value) => selectBet(value)}
                  trigger={props.trigger}
                  setTrigger={(value) => props.setTrigger(value)}
                  ticketID={props.ticketID}
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

export default Cards;
