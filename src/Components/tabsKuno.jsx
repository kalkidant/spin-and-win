import React from "react";
import { useState } from "react";
import "./Css/tabs.css";

function TabsKuno(props) {
  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
  };
  const betsMaxLength = 10;

  return (
    <div className='container'>
      <div className='bloc-tabs'>
        <button
          // className={toggleState === 1 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(1)}
          className='btn bg-white'
        >
          <h5 className='mt-1'>Number Bets</h5>
        </button>
      </div>

      <div className='content-tabs'>
        <div
          className={toggleState === 1 ? "content  active-content" : "content"}
        >
          <hr />

          <div class='btn-group my-2'>
            <button
              type='button'
              class='btn btnGray btn-lg mx-1'
              className={
                props.selectedBet.includes("yesFirst")
                  ? "btn btnGray btn-sm btnKuno active mx-1"
                  : "btn btnGray btn-sm bg-white  mx-1"
              }
              onClick={() => {
                if (props.selectedBet.includes("yesFirst")) {
                  var currentBet = props.selectedBet.filter(function (e) {
                    return e !== "yesFirst";
                  });

                  props.selectBet(currentBet);
                } else {
                  currentBet = props.selectedBet;
                  currentBet.push("yesFirst");

                  props.selectBet(currentBet);
                }
              }}
            >
              First Single YES
            </button>

            <button
              type='button'
              class='btn btnGray btn-lg mx-1'
              className={
                props.selectedBet.includes("noFirst")
                  ? "btn btnGray btn-sm btnKuno active mx-1"
                  : "btn btnGray btn-sm bg-white  mx-1"
              }
              onClick={() => {
                if (props.selectedBet.includes("noFirst")) {
                  var currentBet = props.selectedBet.filter(function (e) {
                    return e !== "noFirst";
                  });

                  props.selectBet(currentBet);
                } else {
                  currentBet = props.selectedBet;
                  currentBet.push("noFirst");

                  props.selectBet(currentBet);
                }
              }}
            >
              First Single NO
            </button>
          </div>

          <div class='btn-group my-2'>
            <button
              type='button'
              class='btn btnGray btn-lg mx-1'
              className={
                props.selectedBet.includes("yesLast")
                  ? "btn btnGray btn-sm btnKuno active mx-1"
                  : "btn btnGray btn-sm bg-white  mx-1"
              }
              onClick={() => {
                if (props.selectedBet.includes("yesLast")) {
                  var currentBet = props.selectedBet.filter(function (e) {
                    return e !== "yesLast";
                  });

                  props.selectBet(currentBet);
                } else {
                  currentBet = props.selectedBet;
                  currentBet.push("yesLast");

                  props.selectBet(currentBet);
                }
              }}
            >
              Last Single YES
            </button>

            <button
              type='button'
              class='btn btnGray btn-lg mx-1'
              className={
                props.selectedBet.includes("noLast")
                  ? "btn btnGray btn-sm btnKuno active mx-1"
                  : "btn btnGray btn-sm bg-white  mx-1"
              }
              onClick={() => {
                if (props.selectedBet.includes("noLast")) {
                  var currentBet = props.selectedBet.filter(function (e) {
                    return e !== "noLast";
                  });

                  props.selectBet(currentBet);
                } else {
                  currentBet = props.selectedBet;
                  currentBet.push("noLast");

                  props.selectBet(currentBet);
                }
              }}
            >
              Last Single NO
            </button>
          </div>

          <div class='btn-group my-2'>
            <button
              type='button'
              class='btn btnGray btn-lg mx-1'
              className={
                props.selectedBet.includes("firstEven")
                  ? "btn btnGray btn-sm btnKuno active mx-1"
                  : "btn btnGray btn-sm bg-white  mx-1"
              }
              onClick={() => {
                if (props.selectedBet.includes("firstEven")) {
                  var currentBet = props.selectedBet.filter(function (e) {
                    return e !== "firstEven";
                  });

                  props.selectBet(currentBet);
                } else {
                  currentBet = props.selectedBet;
                  currentBet.push("firstEven");

                  props.selectBet(currentBet);
                }
              }}
            >
              First EVEN
            </button>

            <button
              type='button'
              class='btn btnGray btn-lg mx-1'
              className={
                props.selectedBet.includes("firstOdd")
                  ? "btn btnGray btn-sm btnKuno active mx-1"
                  : "btn btnGray btn-sm bg-white  mx-1"
              }
              onClick={() => {
                if (props.selectedBet.includes("firstOdd")) {
                  var currentBet = props.selectedBet.filter(function (e) {
                    return e !== "firstOdd";
                  });

                  props.selectBet(currentBet);
                } else {
                  currentBet = props.selectedBet;
                  currentBet.push("firstOdd");

                  props.selectBet(currentBet);
                }
              }}
            >
              First ODD
            </button>
          </div>

          <div class='btn-group my-2'>
            <button
              type='button'
              class='btn btnGray btn-lg mx-1'
              className={
                props.selectedBet.includes("lastEven")
                  ? "btn btnGray btn-sm btnKuno active mx-1"
                  : "btn btnGray btn-sm bg-white  mx-1"
              }
              onClick={() => {
                if (props.selectedBet.includes("lastEven")) {
                  var currentBet = props.selectedBet.filter(function (e) {
                    return e !== "lastEven";
                  });

                  props.selectBet(currentBet);
                } else {
                  currentBet = props.selectedBet;
                  currentBet.push("lastEven");

                  props.selectBet(currentBet);
                }
              }}
            >
              Last EVEN
            </button>

            <button
              type='button'
              class='btn btnGray btn-lg mx-1'
              className={
                props.selectedBet.includes("lastOdd")
                  ? "btn btnGray btn-sm btnKuno active mx-1"
                  : "btn btnGray btn-sm bg-white  mx-1"
              }
              onClick={() => {
                if (props.selectedBet.includes("lastOdd")) {
                  var currentBet = props.selectedBet.filter(function (e) {
                    return e !== "lastOdd";
                  });

                  props.selectBet(currentBet);
                } else {
                  currentBet = props.selectedBet;
                  currentBet.push("lastOdd");

                  props.selectBet(currentBet);
                }
              }}
            >
              Last ODD
            </button>
          </div>

          <div class='btn-group my-2'>
            <button
              type='button'
              class='btn btnGray btn-lg mx-1'
              className={
                props.selectedBet.includes("firstLT40.5")
                  ? "btn btnGray btn-sm btnKuno active mx-1"
                  : "btn btnGray btn-sm bg-white  mx-1"
              }
              onClick={() => {
                if (props.selectedBet.includes("firstLT40.5")) {
                  var currentBet = props.selectedBet.filter(function (e) {
                    return e !== "firstLT40.5";
                  });

                  props.selectBet(currentBet);
                } else {
                  currentBet = props.selectedBet;
                  currentBet.push("firstLT40.5");

                  props.selectBet(currentBet);
                }
              }}
            >
              First &lt; 40.5
            </button>

            <button
              type='button'
              class='btn btnGray btn-lg mx-1'
              className={
                props.selectedBet.includes("firstGT40.5")
                  ? "btn btnGray btn-sm btnKuno active mx-1"
                  : "btn btnGray btn-sm bg-white  mx-1"
              }
              onClick={() => {
                if (props.selectedBet.includes("firstGT40.5")) {
                  var currentBet = props.selectedBet.filter(function (e) {
                    return e !== "firstGT40.5";
                  });

                  props.selectBet(currentBet);
                } else {
                  currentBet = props.selectedBet;
                  currentBet.push("firstGT40.5");

                  props.selectBet(currentBet);
                }
              }}
            >
              First &gt; 4.4
            </button>
          </div>

          <div class='btn-group my-2'>
            <button
              type='button'
              class='btn btnGray btn-lg mx-1'
              className={
                props.selectedBet.includes("lastLT40.5")
                  ? "btn btnGray btn-sm btnKuno active mx-1"
                  : "btn btnGray btn-sm bg-white  mx-1"
              }
              onClick={() => {
                if (props.selectedBet.includes("40.5lastLT")) {
                  var currentBet = props.selectedBet.filter(function (e) {
                    return e !== "lastLT40.5";
                  });

                  props.selectBet(currentBet);
                } else {
                  currentBet = props.selectedBet;
                  currentBet.push("lastLT40.5");

                  props.selectBet(currentBet);
                }
              }}
            >
              Last &lt; 40.5
            </button>

            <button
              type='button'
              class='btn btnGray btn-lg mx-1'
              className={
                props.selectedBet.includes("lastGT40.5")
                  ? "btn btnGray btn-sm btnKuno active mx-1"
                  : "btn btnGray btn-sm bg-white  mx-1"
              }
              onClick={() => {
                if (props.selectedBet.includes("lastGT40.5")) {
                  var currentBet = props.selectedBet.filter(function (e) {
                    return e !== "lastGT40.5";
                  });

                  props.selectBet(currentBet);
                } else {
                  currentBet = props.selectedBet;
                  currentBet.push("lastGT40.5");

                  props.selectBet(currentBet);
                }
              }}
            >
              Last &gt; 4.4
            </button>
          </div>
        </div>
      </div>
      <div className='bloc-tabs'>
        <button
          // className={toggleState === 1 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(1)}
          className='btn bg-white'
        >
          <h5 className='mt-1'>Sum Bets</h5>
        </button>
      </div>

      <div class='btn-group my-2'>
        <button
          type='button'
          class='btn btnGray btn-lg mx-1'
          className={
            props.selectedBet.includes("LT810.5")
              ? "btn btnGray btn-sm btnKuno active mx-1"
              : "btn btnGray btn-sm bg-white  mx-1"
          }
          onClick={() => {
            if (props.selectedBet.includes("LT810.5")) {
              var currentBet = props.selectedBet.filter(function (e) {
                return e !== "LT810.5";
              });

              props.selectBet(currentBet);
            } else {
              currentBet = props.selectedBet;
              currentBet.push("LT810.5");

              props.selectBet(currentBet);
            }
          }}
        >
          &lt; 810.5
        </button>

        <button
          type='button'
          class='btn btnGray btn-lg mx-1'
          className={
            props.selectedBet.includes("GT810.5")
              ? "btn btnGray btn-sm btnKuno active mx-1"
              : "btn btnGray btn-sm bg-white  mx-1"
          }
          onClick={() => {
            if (props.selectedBet.includes("GT810.5")) {
              var currentBet = props.selectedBet.filter(function (e) {
                return e !== "GT810.5";
              });

              props.selectBet(currentBet);
            } else {
              currentBet = props.selectedBet;
              currentBet.push("GT810.5");

              props.selectBet(currentBet);
            }
          }}
        >
          &gt; 810.5
        </button>
      </div>

      <div class='btn-group my-2'>
        <button
          type='button'
          class='btn btnGray btn-lg mx-1'
          className={
            props.selectedBet.includes("LT810.5")
              ? "btn btnGray btn-sm btnKuno active mx-1"
              : "btn btnGray btn-sm bg-white  mx-1"
          }
          onClick={() => {
            if (props.selectedBet.includes("LT810.5")) {
              var currentBet = props.selectedBet.filter(function (e) {
                return e !== "LT810.5";
              });

              props.selectBet(currentBet);
            } else {
              currentBet = props.selectedBet;
              currentBet.push("LT810.5");

              props.selectBet(currentBet);
            }
          }}
        >
          5 First &lt; 202.5
        </button>

        <button
          type='button'
          class='btn btnGray btn-lg mx-1'
          className={
            props.selectedBet.includes("GT202.5")
              ? "btn btnGray btn-sm btnKuno active mx-1"
              : "btn btnGray btn-sm bg-white  mx-1"
          }
          onClick={() => {
            if (props.selectedBet.includes("GT202.5")) {
              var currentBet = props.selectedBet.filter(function (e) {
                return e !== "GT202.5";
              });

              props.selectBet(currentBet);
            } else {
              currentBet = props.selectedBet;
              currentBet.push("GT202.5");

              props.selectBet(currentBet);
            }
          }}
        >
          5 First &gt; 202.5
        </button>
      </div>
    </div>
  );
}

export default TabsKuno;
