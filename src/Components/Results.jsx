
import Dropdown from "react-dropdown";
import React, { Fragment, useState, useRef, useEffect } from "react";
import "react-dropdown/style.css";
import "./Css/popup.css";
import * as FcIcons from "react-icons/fc";
import * as GiIcons from "react-icons/gi";
import axios from "axios";
import { TicketLast } from "../Pages/printLastComponent";
import { BASEURL } from "../Functions/apiUrl";
import * as GrIcons from "react-icons/gr";
import ReactToPrint from "react-to-print";
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
export default function Results(props) {
  const options = ["Spin 2 Win", "Kuno Deluxe"];
  const defaultOption = options[0];
  const [result, setResult] = useState([]);
  var moment = require("moment");
  const [gameType, setgameType] = useState([]);
  let componentRef = useRef();
  const [ticketlists,setLastTicket]=("")
  const [searchForm, setForm] = React.useState({
    gameTypes: "",
  
  });

  const { gameTypes } =
    searchForm;
    const handleChange = (e) => {
      const { name, value } = e.target;
      setForm({ ...searchForm, [name]: value });
      todayresult()
    };
    const todayresult = ()=>{
      try {
        axios.get(BASEURL + "result/todayresult",{
          
         params: {GameTypeId :gameTypes}
          
        }).then((response) => {
         
          setResult(response.data.results.rows);
        });
      } catch (e) {
        setResult([]);
      }
    }
    const  lastTickets= async()=>{
      axios.interceptors.request.use(
      (config) => {
        config.headers.authorization = `${localStorage.getItem("token")}`;
        return config;
      },
      (error) => {
        return Promise.reject(error);
      }
    );
    try {
    await   axios
        .post(BASEURL + "ticket/printlastticket/")
        .then((response) => setLastTicket(response.data.ticket))
        
        .catch(function (error) {});
    } catch (e) {
      alert.show("Error fetching last ticket !!!");
    }
  
  }
  useEffect(() => {
    todayresult()
    getGameTypes()
  }, []);
  const  getGameTypes =() => {
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
  }

  return (
    <Fragment>
      <div className='row '>
        <div className='col-lg-12 mt-1 d-none-sm'>
          <h5>Results</h5>
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
        
        </Grid>
      </form>
      
      </div>
      <div className='overflow'>
        <table class='table mt-2'>
          <thead className=''>
            <tr>
              <th scope='col'>
                <small>ID</small>
              </th>
              <th scope='col'>
                <small>Date / Time</small>
              </th>
              <th scope='col'>
                <small>Results</small>
              </th>
              <th scope='col'>
                <small>Round</small>
              </th>
            </tr>
          </thead>
          <tbody>
            {result.map((result, key) => {
              return (
                <tr className='text-secondary'>
                  <th scope='row'>
                    <small>{result.id}</small>
                  </th>
                  <td>{moment(result.createdAt).format("YYYY-MM-DD HH-MM")}</td>

                  <td>
                    <small>{result.result}</small>
                  </td>
                  <td>
                    <small>{result.round}</small>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </Fragment>
  );
}
