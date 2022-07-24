

import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import * as AiIcons from "react-icons/ai";
import "./Css/popup.css";
import axios from "axios";
import React, { useRef, useState } from "react";
import { BASEURL } from "../Functions/apiUrl";
import { useAlert } from "react-alert";
import ReactDOM from "react-dom";
import Keyboard from "react-simple-keyboard";

function ModalTicketCheck(
  props,

) {
    
      const alphabetCol1 = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J"];
      const alphabetCol2 = ["K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U"];
      const alphabetCol3 = ["V", "W", "X", "Y", "Z"];
      const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
      const [ticketNum, setTicketNum] = useState("");
      const alert = useAlert();
      const [input, setInput] = useState("");
      const [layout, setLayout] = useState("default");
      const keyboard = useRef();
     
      // const [ticketStatus, setTicketStatus] = useState(null);
      const onChange = input => {
        setInput(input);
        console.log("Input changed", input);
      };
    
      const handleShift = () => {
        const newLayoutName = layout === "default" ? "shift" : "default";
        setLayout(newLayoutName);
      };
      const handleClose = () => {
       props.closeUpdateDialog();
      };
    
      const onKeyPress = button => {
        console.log("Button pressed", button);
    
        /**
         * If you want to handle the shift and caps lock buttons
         */
        if (button === "{shift}" || button === "{lock}") handleShift();
      };
      const checkStatus = () => {
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
          var param = {
            
            // ticketID: props.ticketID,
            ticketId:input,
          };
          axios
            .post(BASEURL + "bet/payout", param)
            .then((response) => {
              
              props.ticketStatuss(response.data)
             
              // localStorage.setItem("ticketStatus",JSON.stringify(response.data))
              // setTicketStatus(response.data);
              checkTicket()
              
              
              
              
            })
            .catch((e) => {
              alert("Some error occured...try again");
            });
        } catch (e) {
          alert("Some error occured...try again");
        }
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

return (
  <div>
    <Dialog fullWidth={true} open={props.open} onClose={handleClose}>
   
        <DialogTitle>Ticket ID</DialogTitle>
        <DialogContent>
      
        <div className='col-lg-12 my-2'>
        
          <input
         autoFocus
        value={input}
        placeholder='XD4HS7'
        type="text"
        onChange={onChangeInput}
        
        required
      />
      <Keyboard
      style={{width:"120%"}}
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
       
        </DialogContent>
        <DialogActions>
          <Button onClick={() => clearTicket()} style={{backgroundColor:"rgb(233, 51, 51)", color:"white"}} className={"btn clearBtn  mx-1"} >CLEAR</Button>
          <Button onClick={() => checkStatus()} style={{backgroundColor:"rgb(35, 124, 35)", color:"white"}}  className={"btn okBtn  mx-1"}>OK</Button>
        </DialogActions>
     
    </Dialog>
  </div>
);
}

export default ModalTicketCheck;