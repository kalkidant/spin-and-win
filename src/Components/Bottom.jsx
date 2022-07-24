import React from "react";
import "./Css/tabs.css";
import * as RiIcons from "react-icons/ri";
import * as GiIcons from "react-icons/gi";

import { useNavigate } from "react-router-dom";

function Bottom() {
  const history = useNavigate();
  return (
    <div class='btn-group my-2 '>
      <button type='button' class='btn btnBottom1  btn-lg'>
        <div className='row'>
          <div className='col-lg-1'>
            {" "}
            <GiIcons.GiHorseHead color='white' className='m-1' size={30} />
          </div>
          <div className='col-lg-10 text-white'>
            <div className='row text-warning'>
              <small>G6</small>
            </div>
            <div className='row'>
              <h6>GRAYHOUNDS RACING</h6>
            </div>
          </div>
        </div>
      </button>

      <button
        type='button'
        class='btn btnBottom1  btn-lg'
        onClick={() => {
          history("/kuno");
        }}
      >
        <div className='row'>
          <div className='col-lg-1'>
            {" "}
            <RiIcons.RiBilliardsFill color='white' className='m-1' size={30} />
          </div>
          <div className='col-lg-10 text-white'>
            <div className='row text-warning'>
              <small>Keno Deluxe</small>
            </div>
            <div className='row'>
              <h6>KENO</h6>
            </div>
          </div>
        </div>
      </button>

      <button type='button' class='btn btnBottom1  btn-lg'>
        <div className='row'>
          <div className='col-lg-1'>
            {" "}
            <GiIcons.GiCardAceClubs color='white' className='m-1' size={30} />
          </div>
          <div className='col-lg-10 text-white'>
            <div className='row text-warning'>
              <small>Cards</small>
            </div>
            <div className='row'>
              <h6>CARDS</h6>
            </div>
          </div>
        </div>
      </button>
      <button
        type='button'
        class='btn btnBottom1  btn-lg'
        onClick={() => {
          history("/");
        }}
      >
        <div className='row'>
          <div className='col-lg-1'>
            {" "}
            <RiIcons.RiBasketballFill color='white' className='m-1' size={30} />
          </div>
          <div className='col-lg-10 text-white'>
            <div className='row text-warning'>
              <small>Spin 2 Win Royale</small>
            </div>
            <div className='row'>
              <h6>SPIN 2 WIN</h6>
            </div>
          </div>
        </div>
      </button>
    </div>
  );
}

export default Bottom;
