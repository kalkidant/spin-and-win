import React from "react";

import * as GiIcons from "react-icons/gi";
export const PayoutTicket = React.forwardRef((props, ref) => {
  function time() {
    var currentdate = new Date();
    var datetime =
      currentdate.getDay() +
      "/" +
      currentdate.getMonth() +
      "/" +
      currentdate.getFullYear() +
      "  " +
      currentdate.getHours() +
      ":" +
      currentdate.getMinutes();

    return datetime;
  }
  return (
    <div ref={ref} className='p-1'>
      <div className='row'>
        <div className='col-4'>
          <div className='row'>
            <div className='col-8'>
              <div className='row'>
                <div className='col-lg-12'>
                  <small>PROVIDED BY</small>
                </div>
                <div className='col-lg-12 '>BetShops</div>
              </div>
            </div>
            <div className='col-4'>
              {" "}
              <GiIcons.GiSpinningBlades size={40} />{" "}
              <small>PAYOUT TICKET</small>
            </div>
          </div>
          <div className='border border-dark'>
            <div className='row'>
              <div className='col-8'>
                <small> Ticket ID</small>
              </div>
              <div className='col-4'>
                <small>{props.ticketID}</small>
              </div>
            </div>
            <div className='row'>
              <div className='col-8'>
                <small> Entity ID</small>
              </div>
              <div className='col-4'>
                <small>576786</small>
              </div>
            </div>
            <div className='row'>
              <div className='col-8'>
                <small> E.Result </small>
              </div>
              <div className='col-4'>
                <small>20</small>
              </div>
            </div>
            <div className='row'>
              <div className='col-8'>
                <small> Printited on </small>
              </div>
              <div className='col-4'>
                <small>{time()}</small>
              </div>
            </div>
          </div>

          <div className='border border-dark'>
            {" "}
            <div className='row'>
              <div className='col-8'>
                <small> Won amount </small>
              </div>
              <div className='col-4'>
                <small>
                  {" "}
                  <b> {"ብር " + 200}</b>
                </small>
              </div>
            </div>
            <div className='row'>
              <div className='col-8'>
                <small> Total Stake </small>
              </div>
              <div className='col-4'>
                <small>
                  {" "}
                  <b> {"ብር " + 20}</b>
                </small>
              </div>
            </div>
          </div>
        </div>
        <div className='col-8'></div>
      </div>
    </div>
  );
});
