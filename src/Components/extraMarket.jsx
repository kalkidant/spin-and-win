import { useState, useEffect } from "react";
import * as AiIcons from "react-icons/ai";
import "./Css/popup.css";
import axios from "axios";
import { Fragment } from "react/cjs/react.production.min";
export default function ExtraMarket(props) {
  return (
    <Fragment>
      <div className='row w-200'>
        <div className='col-lg-6'>
          <div className='row '>
            <div className='title d-inline mb-2'>Number Bets</div>
          </div>
          <div className='row innerRow mt-1'>
            <div className='col-lg-8 '>First Single YES</div>
            <div className='col-lg-2  d-flex flex-row-reverse'>x7</div>
          </div>
          <div className='row innerRow mt-1'>
            <div className='col-lg-8 '>First Single NO</div>
            <div className='col-lg-2  d-flex flex-row-reverse'>x1</div>
          </div>{" "}
          <div className='row innerRow mt-1'>
            <div className='col-lg-8 '>Last Single YES</div>
            <div className='col-lg-2  d-flex flex-row-reverse'>x7</div>
          </div>{" "}
          <div className='row innerRow mt-1'>
            <div className='col-lg-8 '>Last Single No</div>
            <div className='col-lg-2  d-flex flex-row-reverse'>x1</div>
          </div>{" "}
          <div className='row innerRow mt-1'>
            <div className='col-lg-8 '>First Even</div>
            <div className='col-lg-2  d-flex flex-row-reverse'>x1</div>
          </div>{" "}
          <div className='row innerRow mt-1'>
            <div className='col-lg-8 '>First Odd</div>
            <div className='col-lg-2  d-flex flex-row-reverse'>x1</div>
          </div>
          <div className='row innerRow mt-1'>
            <div className='col-lg-8 '>Last Even</div>
            <div className='col-lg-2  d-flex flex-row-reverse'>x1</div>
          </div>
          <div className='row innerRow mt-1'>
            <div className='col-lg-8 '>Last Odd</div>
            <div className='col-lg-2  d-flex flex-row-reverse '>x1</div>
          </div>{" "}
        </div>
        <div className='col-lg-6'>
          <div className='row '>
            <div className='title d-inline mb-2'>Sum Bets</div>
          </div>
          <div className='row innerRow mt-1'>
            <div className='col-lg-8 '>&lt; 810.5</div>
            <div className='col-lg-2  d-flex flex-row-reverse'>x1</div>
          </div>
          <div className='row innerRow mt-1'>
            <div className='col-lg-8 '>&gt; 810.5</div>
            <div className='col-lg-2  d-flex flex-row-reverse'>x1</div>
          </div>{" "}
          <div className='row innerRow mt-1'>
            <div className='col-lg-8 '>First &lt; 40.5</div>
            <div className='col-lg-2  d-flex flex-row-reverse'>x1</div>
          </div>{" "}
          <div className='row innerRow mt-1'>
            <div className='col-lg-8 '>First &gt; 40.5</div>
            <div className='col-lg-2  d-flex flex-row-reverse'>x1</div>
          </div>{" "}
          <div className='row innerRow mt-1'>
            <div className='col-lg-8 '>5 First &lt; 202.5</div>
            <div className='col-lg-2  d-flex flex-row-reverse'>x1</div>
          </div>{" "}
          <div className='row innerRow mt-1'>
            <div className='col-lg-8 '>5 First &gt; 202.5</div>
            <div className='col-lg-2  d-flex flex-row-reverse'>x1</div>
          </div>
          <div className='row innerRow mt-1'>
            <div className='col-lg-8 '>Last &lt; 40.5 </div>
            <div className='col-lg-2  d-flex flex-row-reverse'>x1</div>
          </div>
          <div className='row innerRow mt-1'>
            <div className='col-lg-8 '>Last &lt; 40.5</div>
            <div className='col-lg-2  d-flex flex-row-reverse '>x1</div>
          </div>{" "}
        </div>
      </div>
    </Fragment>
  );
}
