import React from "react";
import { useState } from "react";
import "./Css/tabs.css";
import * as FaIcons from "react-icons/fa";
import * as BsIcons from "react-icons/bs";
import * as RiIcons from "react-icons/ri";
import * as BiIcons from "react-icons/bi";
import * as GiIcons from "react-icons/gi";
import * as AiIcons from "react-icons/ai";

function BottomTabs() {
  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
  };

  return (
    <div className="container">
      <div className="bloc-tabs">
        <button
          className={toggleState === 1 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(1)}
        >
          <h6>QUICK PICKS</h6>
        </button>
        <button
          className={toggleState === 2 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(2)}
        >
          <h6 className="text-secodary"> MULTIPLIER X1</h6>{" "}
        </button>
      </div>

      <div className="content-tabs">
        <div
          className={toggleState === 1 ? "content  active-content" : "content"}
        >
          <div class="btn-group my-2">
            <button type="button" class="btn btnBottom mx-1">
              1
            </button>
            <button type="button" class="btn btnBottom btn-sm mx-1">
              2
            </button>
            <button type="button" class="btn btnBottom btn-sm mx-1">
              3
            </button>
            <button type="button" class="btn btnBottom mx-1">
              5
            </button>
            <button type="button" class="btn btnBottom btn-sm mx-1">
              7
            </button>
            <button type="button" class="btn btnBottom btn-sm mx-1">
              10
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BottomTabs;
