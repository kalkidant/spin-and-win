import React from "react";
import "../Components/Css/homeCss.css";
import * as GiIcons from "react-icons/gi";
var Barcode = require("react-barcode");
export const TicketKuno = React.forwardRef((props, ref) => {
  let numberBets = [];
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
                <div className='col-lg-12'>BetShop</div>
              </div>
            </div>
            <div className='col-4'>
              {" "}
              <small>Kuno Deluxe</small>
            </div>
          </div>
          <div
            className='border border-dark .smallFontPrint {
'
          >
            <div className='row'>
              <div
                className='col-8 .smallFontPrint {
'
              >
                <small> Ticket ID</small>
              </div>
              <div
                className='col-4 .smallFontPrint {
'
              >
                <small>{props.ticketID}</small>
              </div>
            </div>
            <div className='row'>
              <div
                className='col-8 .smallFontPrint {
'
              >
                <small> Printed on </small>
              </div>
              <div
                className='col-4 .smallFontPrint {
'
              >
                <small>{time()}</small>
              </div>
            </div>
          </div>
          <div className='border border-dark'>
            {props.selectedBets.map((bets) => {
              if (Number.isInteger(bets)) {
                numberBets.push(bets);
              }
            })}
            <div className='row'>
              <div className='col-8'>
                <small> {"{" + numberBets + "}"}</small>
              </div>
              <div className='col-4'>
                <small>ብር {props.getValue}</small>
              </div>
            </div>
            <div className='border border-dark'>
              {props.selectedBets.map((bets) => {
                if (!Number.isInteger(bets)) {
                  return (
                    <div className='row'>
                      <div className='col-8'>
                        <small> {bets}</small>
                      </div>
                      <div className='col-4'>
                        <small>ብር {props.getValue}</small>
                      </div>
                    </div>
                  );
                }
              })}
            </div>
          </div>
          <div className='border border-dark'>
            {" "}
            <div className='row'>
              <div className='col-8 '>
                <small> Total Stake </small>
              </div>
              <div className='col-4 smallFontPrint'>
                <small>
                  {" "}
                  <b> {"ብር " + props.getValue}</b>
                </small>
              </div>
            </div>
          </div>

          <div className='border border-dark'>
            {" "}
            <div className='row'>
              <div className='col-8 '>
                <small> Total win </small>
              </div>
              <div className='col-4 smallFontPrint'>
                <small>
                  {" "}
                  <b> {"ብር " + props.total}</b>
                </small>
              </div>
            </div>
          </div>
          <div className='border border-dark'>
            {" "}
            <div className='row'>
              <div className='col-8'>
                <small> Maximum winning payout </small>
              </div>
              <div className='col-4'>
                <small>
                  {" "}
                  <b> {"ብር " + 100000}</b>
                </small>
              </div>
            </div>
          </div>
          <div className='row noMargin'>
            <Barcode
              value={"http://localhost:3000/" + props.ticketID}
              height={100}
              width={1}
            />
          </div>
        </div>
        <div className='col-8'></div>
      </div>
    </div>
  );
});
