import { Fragment, useState, useEffect } from "react";
import Dropdown from "react-dropdown";
import "react-dropdown/style.css";
import "./Css/popup.css";
import * as FcIcons from "react-icons/fc";
import * as GiIcons from "react-icons/gi";
import axios from "axios";
import { BASEURL } from "../Functions/apiUrl";
import { useAlert } from "react-alert";

export default function TurnoverPreview(props) {
  const options = ["one", "two", "three"];
  const defaultOption = options[0];
  const [tickets, setTickets] = useState([""]);
  const alert = useAlert();
  var moment = require("moment");

  const closedTickets = () => {
    axios.interceptors.request.use(
      (config) => {
        config.headers.authorization = `${localStorage.getItem("token")}`;
        return config;
      },
      (error) => {
        return Promise.reject(error);
      }
    );
    // try {
    //   axios.get(BASEURL + "ticket/todaytickets").then((response) => {
    //     console.log(response.data.tickets);
    //     setTickets(response.data.tickets.rows);
    //   });
    // } catch (e) {
    //   alert("Some error occured...try again");
    // }
  };
  useEffect(() => {
    closedTickets();
  }, []);
  return (
    <Fragment>
      <div className='row mt-1'>
        <div className='col-8 verySmallText'>Shop Name</div>
        <div className='col-4 verySmallText'>
          <small>{props.report.shopname}</small>
        </div>{" "}
        <div className='col-8 verySmallText'>Printed By</div>
        <div className='col-4 verySmallText'>
          <small>{props.report.printed_by}</small>
        </div>{" "}
        <div className='col-8 verySmallText'>From </div>
        <div className='col-4 verySmallText'>
          <small> {moment(props.report.from).format("YYYY-MM-DD HH-MM")}</small>
        </div>{" "}
        <div className='col-8 verySmallText'>To </div>
        <div className='col-4 verySmallText'>
          <small> {moment(props.report.to).format("YYYY-MM-DD HH-MM")}</small>
        </div>{" "}
      </div>
      <div className='row mt-1 marginBottom2 '>
        <div className='col-3 verySmallTextBold'>Income</div>
        <div className='col-3 verySmallTextBold '>Stake</div>
        <div className='col-3 verySmallTextBold'>Canceled</div>
        <div className='col-3 verySmallTextBold'>Confirmed</div>
      </div>
      <div className='row'>
        <div className='col-12 '>
          <hr />
        </div>
      </div>

      <div>
        {Object.values(props.report.income).map((income, key) => {
          return (
            <div className='row '>
              <div className='col-3 verySmallText'>{income.game}</div>
              <div className='col-3 verySmallText '>{income.stake}</div>
              <div className='col-3 verySmallText'>{income.cancled}</div>
              <div className='col-3 verySmallText'>{income.confirmed}</div>{" "}
            </div>
          );
        })}
      </div>
      <hr />

      <div className='row mt-1'>
        <div className='col-9 verySmallText'>Stake</div>
        <div className='col-3 verySmallText'>
          <small>{props.report.stake}</small>
        </div>{" "}
        <div className='col-9 verySmallText'>Confirmed</div>
        <div className='col-3 verySmallText'>
          <small>{props.report.confirmed}</small>
        </div>{" "}
        <div className='col-9 verySmallText'>Total Income </div>
        <div className='col-3 verySmallText'>
          <small>{props.report.total_income}</small>
        </div>{" "}
        <div className='col-9 verySmallText'>Total Outcome </div>
        <div className='col-3 verySmallText'>
          <small>{props.report.total_outcome}</small>
        </div>{" "}
        <div className='col-9 verySmallText'>Cancelled </div>
        <div className='col-3 verySmallText'>
          <small>{props.report.cancled}</small>
        </div>{" "}
        <div className='col-9 verySmallText'>Balance </div>
        <div className='col-3 verySmallText'>
          <small>{props.report.balance}</small>
        </div>{" "}
        <div className='col-9 verySmallText'>Open Tickets </div>
        <div className='col-3 verySmallText'>
          <small>{props.report.open_tickets}</small>
        </div>{" "}
      </div>

      <div className='row marginBottom2'>
        <div className='col-9 font-weight-bolder varySmallText'>Outcome</div>
        <div className='col-3 '></div>
      </div>
      <hr />
      {/* <div className='row marginBottom2 marginTop2'>
        <div className='col-9 verySmallText '>Keno Delux</div>
        <div className='col-3 verySmallText'>ብር 105</div>
        <div className='col-9 verySmallText '>Total Outcome</div>

        <div className='col-3 verySmallText'>ብር 105</div>
      </div> */}
      <hr />
      <div className='row marginTop2 mb-3'>
        {" "}
        <div className='col-9 verySmallText '>Net Balance</div>
        <div className='col-3 verySmallText'>ብር {props.report.net_balance}</div>
      </div>
    </Fragment>
  );
}
