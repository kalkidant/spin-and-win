import * as AiIcons from "react-icons/ai";
import "./Css/popup.css";
import axios from "axios";
import React, { useRef, useState } from "react";
import { BASEURL } from "../Functions/apiUrl";
import { useAlert } from "react-alert";
import ReactDOM from "react-dom";
import Keyboard from "react-simple-keyboard";


export default function TicketCheck(props) {
  const alphabetCol1 = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J"];
  const alphabetCol2 = ["K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U"];
  const alphabetCol3 = ["V", "W", "X", "Y", "Z"];
  const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
  const [ticketNum, setTicketNum] = useState("");
  const alert = useAlert();
  const [input, setInput] = useState("");
  const [layout, setLayout] = useState("default");
  const keyboard = useRef();

  const onChange = input => {
    setInput(input);
    console.log("Input changed", input);
  };

  const handleShift = () => {
    const newLayoutName = layout === "default" ? "shift" : "default";
    setLayout(newLayoutName);
  };

  const onKeyPress = button => {
    console.log("Button pressed", button);

    /**
     * If you want to handle the shift and caps lock buttons
     */
    if (button === "{shift}" || button === "{lock}") handleShift();
  };

  const onChangeInput = event => {
    const input = event.target.value;
    setInput(input);
    keyboard.current.setInput(input);
  };
  var moment = require("moment");

  const setTicket = (val) => {
    var currentVal = ticketNum;
    setTicketNum(currentVal.concat(val));
  };
  const clearTicket = () => {
    setInput("");
  };
  const checkTicket = () => {
    props.setTicketID(input);

    props.setStatus(true);
    props.setTrigger(false);

    // props.setTicketID(ticketNum);
    // var ticket = {
    //   ticketId: props.ticketID,
    //   requestTime: moment().format(),
    // };
    // try {
    //   axios.interceptors.request.use(
    //     (config) => {
    //       config.headers.authorization = `${localStorage.getItem("token")}`;
    //       return config;
    //     },
    //     (error) => {
    //       return Promise.reject(error);
    //     }
    //   );
    //   axios.post(BASEURL + "bet/cancelTicket", ticket).then((response) => {
    //     if (response.data.cancel) {
    //       alert.show("Ticket Cancelled successfully  ");
    //     } else {
    //       alert.show("Not able to cancel the ticket ");
    //     }
    //   });
    // } catch (e) {
    //   alert.show("Incorrect Credential ");
    // }
  };
  return props.trigger ? (
    <div className='popup p-3'>
      <div className='popupInner p-3'>
        <div className='row p-1'>
          <div className='col-lg-11'></div>
          <div className='col-lg-1'>
            <AiIcons.AiOutlineClose
              color='black'
              onClick={() => props.setTrigger(false)}
            />
          </div>
        </div>
        <div className='row center'>
          <div className='col-lg-10 '>
            {" "}
            <b>Ticket ID</b>
          </div>
          <div className='col-lg-12 my-2'>
          <input
        value={input}
        placeholder='XD4HS7'
        onChange={onChangeInput}
        variant="standard"
      />
    
      <Keyboard
        keyboardRef={r => (keyboard.current = r)}
        layoutName={layout}
        onChange={onChange}
        onKeyPress={onKeyPress}
        
      />
          
            {/* <input
              type='text'
              className='form-control'
              placeholder='XD4HS7'
              value={ticketNum}
            /> */}
          </div>
       
         
          <div className='col-lg-10 ' style={{width:"20%",marginLeft:"60%"}}>
            <div class='btn-group my-1 text-white'>
            
              <button
                type='button'
                className={"btn clearBtn  mx-1"}
                onClick={() => clearTicket()}
              >
                <b>CLEAR</b>
              </button>
              <button
                type='button'
                className={"btn okBtn  mx-1"}
                onClick={() => checkTicket()}
              >
                <b>OK</b>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  ) : (
    ""
  );
}
