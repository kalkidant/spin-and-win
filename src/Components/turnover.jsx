import { Fragment, useState,useRef, useEffect } from "react";
import "react-dropdown/style.css";
import "./Css/popup.css";
import * as GrIcons from "react-icons/gr";
import * as React from "react";
import TurnoverPreview from "./turnovePreview";
import { TurnoverTicket } from "../Pages/TurnOverPrint";
import ReactToPrint from "react-to-print";
import { ReportTicket } from "../Pages/SettlementReport";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Dropdown from "react-dropdown";
import axios from "axios";
import { BASEURL } from "../Functions/apiUrl";
import { gameTypeValues } from "../Functions/utils";
import {
  MenuItem,
  Select,
  Button,
  TextField,
  Grid,
  FormControl,
  InputLabel,
  FormHelperText,
} from "@mui/material";


export default function Turnover(props) {
  let componentRef = useRef();
  let componentRefSettlement = useRef();
  const [startDate, setStartDate] = useState(false);
  const [endDate, setEndDate] = useState(false);
  const [displayReport, showReport] = useState(false);
  const [report, setReport] = useState("");
  const [gameType, setgameType] = useState([]);
  const [turnover, setTurnover] = useState([]);
  const options = ["Game Type", "Kuno", "Spin"];
  const [searchForm, setForm] = React.useState({
    gameTypes: "",
  
    startdate: "",
    enddate: "",
  });

  const { gameTypes,  startdate, enddate } =
    searchForm;
    const handleChange = (e) => {
      const { name, value } = e.target;
      setForm({ ...searchForm, [name]: value });
      
    };
   
  const defaultOption = options[0];
  const getTurnover = () => {
    axios.interceptors.request.use(
      (config) => {
        config.headers.authorization = `${localStorage.getItem("token")}`;
        return config;
      },
      (error) => {
        return console.log(error);
      }
    );
    try {
      var  params = {
        startDate:startdate,
        endDate:enddate,
        GameTypeId :gameTypes
        
      };
      axios.post(BASEURL + "report/todayTurnover",params).then((response) => {
        setTurnover(response.data);
      });
    } catch (e) {
      alert("Some error occured...try again");
    }
  };
  
  const gameTypeChangeHandler = (event) => {
    var param = startDate
      ? {
          GameTypeId: gameTypeValues(event.value),
          startDate: startDate,
          endDate: endDate,
        }
      : {};
    axios.interceptors.request.use(
      (config) => {
        config.headers.authorization = `${localStorage.getItem("token")}`;
        return config;
      },
      (error) => {
        return console.log(error);
      }
    );
    try {
      axios.post(BASEURL + "report/todayturnover", param).then((response) => {
        setTurnover(response.data);
      });
    } catch (e) {
      alert("Some error occured...try again");
    }
  };
  const getReport = () => {
    var param = startDate
      ? {
          startDate: startDate,
          endDate: endDate,
        }
      : {};
    axios.interceptors.request.use(
      (config) => {
        config.headers.authorization = `${localStorage.getItem("token")}`;
        return config;
      },
      (error) => {
        return console.log(error);
      }
    );
    try {
      axios.post(BASEURL + "report/allbetreport/", param).then((response) => {
        console.log(response.data.report);
        setReport(response.data.report);
        showReport(true);
      });
    } catch (e) {
      alert("Some error occured...try again");
    }
  };
  useEffect(() => {
    getTurnover();
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
      axios.get(BASEURL + "bet/gameTypes/").then((response) => {
        if (response.data) {
          console.log("GAME TYPES", response.data.gameTypes);
          setgameType(response.data.gameTypes)
          
        } else {
          alert.show("Not able to cancel the ticket ");
        }
      });
    } catch (e) {}
  }, []);

  return (
    <Fragment>
      <div className='row'>
        <div className='col-lg-8 mx-4'>
          <div className='row '>
            <div className='col-lg-2'>
              <h5>TURNOVER</h5>
            </div>

            <form >
        <Grid container spacing={2}>
          <Grid item xs={4}>
            <FormControl fullWidth>
            <label for="demo-simple-select-label">Select Game Type</label>
              <select 
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              name="gameTypes"
                value={gameTypes}
                label="Choose Game Type"
                onChange={handleChange} class="form-control">
    {gameType.map((each) => (
                  <option key={each.id} value={each.id}> {each.name}</option>
                 
                ))}
</select>
            </FormControl>

          </Grid>
        
          <Grid item xs="auto">
            <FormControl>
            <label for="exampleInputPassword1">start Date</label>
    <input type="date"  name="startdate" onChange={handleChange} value={startdate} class="form-control" id="exampleInputPassword1" />
             
            </FormControl>
          </Grid>
          <Grid item xs="auto">
            <FormControl>
            <label for="exampleFormControlInput1">End Date</label>
    <input   value={enddate}
                type="date"
                name="enddate"
                onChange={handleChange} class="form-control" id="exampleFormControlInput1" />
              
            </FormControl>
          </Grid>
          <Grid item xs="auto" style={{marginTop:"-9%", marginLeft:"90%"}}>
         
          {/* <button type="submit" className='btn bg-black text-white' >Applay</button> */}
            <Button  className='btn bg-black text-white' variant="contained" size="large" onClick={()=>getTurnover()}>
              Applay
            </Button>
          </Grid>
        </Grid>
      </form>
            <ReactToPrint
              trigger={() => (
                <button className='btn elevatedBtn col-lg-1 '>
                  {" "}
                  <GrIcons.GrPrint size={20} />
                </button>
              )}
              content={() => componentRef.current}
            />
            <div className='d-none'>
              {" "}
              <TurnoverTicket turnover={turnover} ref={componentRef} />
              
            </div>

            <div className='col-lg-1'>
              <button
                className='btn bg-black text-white '
                onClick={() => getReport()}
              >
                <small>REPORT</small>
              </button>
            </div>
          </div>
          <div className='row'>
            <div className='col-lg-12'>
              Balance :
              <span className='text-success'>
                <h5 className='d-inline'>ብር {turnover.cash}</h5>
              </span>
            </div>
          </div>
          <div className='row overlayColor'>
            <div className='col-lg-10 text-success'>
              <small>Income</small>
            </div>

            <div className='col-lg-2 '>
              <small>Total</small>
            </div>
          </div>
          <div className='row '>
            <div className='col-lg-10 border border-left '>
              <small>Gross Income</small>
            </div>

            <div className='col-lg-2 border border-left d-flex justify-content-end'>
              <small>ብር {turnover.gross}</small>
            </div>
          </div>
          <div className='row '>
            <div className='col-lg-10 border border-left'>
              <small>Stake</small>
            </div>

            <div className='col-lg-2 border border-left d-flex justify-content-end'>
              <small>ብር {turnover.stake}</small>
            </div>
          </div>
          <div className='row'>
            <div className='col-lg-10 border border-left'>
              <small>Win</small>
            </div>

            <div className='col-lg-2 border border-left d-flex justify-content-end'>
              <small>ብር {turnover.win}</small>
            </div>
          </div>
          <div className='row'>
            <div className='col-lg-10 border border-left'>
              <small>Jackpot</small>
            </div>

            <div className='col-lg-2 border border-left d-flex justify-content-end'>
              <small>ብር {turnover.jackpot}</small>
            </div>
          </div>
          <div className='row overlayColor'>
            <div className='col-lg-10 text-danger'>
              <small>Outcome</small>
            </div>

            <div className='col-lg-2 '>
              <small>Total</small>
            </div>
          </div>
          <div className='row '>
            <div className='col-lg-10 border border-left'>
              <small>Gross</small>
            </div>

            <div className='col-lg-2 border border-left d-flex justify-content-end'>
              <small>ብር {turnover.gross}</small>
            </div>
          </div>
          <div className='row '>
            <div className='col-lg-10 border border-left'>
              <small>Paid</small>
            </div>

            <div className='col-lg-2 border border-left d-flex justify-content-end'>
              <small>ብር {turnover.paid}</small>
            </div>
          </div>{" "}
          <div className='row '>
            <div className='col-lg-10 border border-left'>
              <small>Unpaid</small>
            </div>

            <div className='col-lg-2 border border-left d-flex justify-content-end'>
              <small>ብር {turnover.unpaid}</small>
            </div>
          </div>{" "}
          <div className='row '>
            <div className='col-lg-10 border border-left'>
              <small>Cancelled</small>
            </div>

            <div className='col-lg-2 border border-left d-flex justify-content-end'>
              <small>ብር {turnover.canceled}</small>
            </div>
          </div>{" "}
          <div className='row '>
            <div className='col-lg-10 border border-left'>
              <small>Cash</small>
            </div>

            <div className='col-lg-2 border border-left d-flex justify-content-end'>
              <small>ብር {turnover.cash}</small>
            </div>
          </div>
          <div className='row '>
            <div className='col-lg-10 border border-left'>
              <small>Balance</small>
            </div>

            <div className='col-lg-2 border border-left d-flex justify-content-end'>
              <small>ብር {turnover.balance}</small>
            </div>
          </div>
        </div>
        {displayReport ? (
          <div className='col-lg-3 overlayColor'>
            {}
            <div className='row bg-secondary p-1'>
              {" "}
              <div className='col-8'> LATEST REPORT</div>
              <div className='col-4'>
                {" "}
                <ReactToPrint
                  trigger={() => (
                    <button className='btn '>
                      {" "}
                      <GrIcons.GrPrint size={20} />
                    </button>
                  )}
                  content={() => componentRefSettlement.current}
                />
                <div className='d-none'>
                  {" "}
                  <ReportTicket report={report} ref={componentRefSettlement} />
                  
                </div>
              </div>{" "}
            </div>

            <TurnoverPreview report={report} />
          </div>
        ) : (
          <div></div>
        )}
      </div>
    </Fragment>
  );
}
