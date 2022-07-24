

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

function StakeModal(
  props,

) {
    const num1 = [1, 2, 3];
    const num2 =[4, 5, 6];
    const num3 =[7, 8, 9]
    const num4 =[0]
    const [staketNum, setstaketNum] = useState("");
    
const  value = props.stakevalue
    const values = props.values
    const setstaket = (val) => {
        var currentVal = staketNum;
        setstaketNum(currentVal.concat(val));
      };
      const handleOnChange = (event) => {
        setstaketNum(event.target.value);
      };
      const clearstaket = () => {
        setstaketNum("");
      };
    const [searchForm, setForm] = React.useState({
        stake: "",
      
      });
      
    
      const { stake } =
        searchForm;
        const handleChange = (e) => {
          const { name, value } = e.target;
          setForm({ ...searchForm, [name]: value });
          
        };
       
        
        const summit = (index) => {
          const  obj0 = props.getvalueall.findIndex((obj => obj.id === 0));
          const  obj = props.getvalueall.findIndex((obj => obj.id === 1));
          const  obj1 = props.getvalueall.findIndex((obj => obj.id === 2));
          const  obj2 = props.getvalueall.findIndex((obj => obj.id === 3));
          const  obj3 = props.getvalueall.findIndex((obj => obj.id === 4));
          const  obj4 = props.getvalueall.findIndex((obj => obj.id === 5));
          const  obj5 = props.getvalueall.findIndex((obj => obj.id === 6));
          const  obj6 = props.getvalueall.findIndex((obj => obj.id === 7));
          const  obj7 = props.getvalueall.findIndex((obj => obj.id === 8));
          const  obj8 = props.getvalueall.findIndex((obj => obj.id === 9));
          const  obj9 = props.getvalueall.findIndex((obj => obj.id === 10));
          const  obj10 = props.getvalueall.findIndex((obj => obj.id === 11));
          const  obj11 = props.getvalueall.findIndex((obj => obj.id === 12));
          const  obj12 = props.getvalueall.findIndex((obj => obj.id === 13));
          const  obj13 = props.getvalueall.findIndex((obj => obj.id === 14));
          const  obj14 = props.getvalueall.findIndex((obj => obj.id === 15));
          const  obj15 = props.getvalueall.findIndex((obj => obj.id === 16));
          const  obj16 = props.getvalueall.findIndex((obj => obj.id === 17));
          const  obj17 = props.getvalueall.findIndex((obj => obj.id === 18));
          const  obj18 = props.getvalueall.findIndex((obj => obj.id === 19));
          const  obj19 = props.getvalueall.findIndex((obj => obj.id === 20));
          const  obj20 = props.getvalueall.findIndex((obj => obj.id === 21));
          const  obj21 = props.getvalueall.findIndex((obj => obj.id === 22));
          const  obj22 = props.getvalueall.findIndex((obj => obj.id === 23));
          const  obj23 = props.getvalueall.findIndex((obj => obj.id === 24));
          const  obj24 = props.getvalueall.findIndex((obj => obj.id === 25));
          const  obj25 = props.getvalueall.findIndex((obj => obj.id === 26));
          const  obj26 = props.getvalueall.findIndex((obj => obj.id === 27));
          const  obj27 = props.getvalueall.findIndex((obj => obj.id === 28));
          const  obj28 = props.getvalueall.findIndex((obj => obj.id === 29));
          const  obj29 = props.getvalueall.findIndex((obj => obj.id === 30));
          const  obj30 = props.getvalueall.findIndex((obj => obj.id === 31));
          const  obj31 = props.getvalueall.findIndex((obj => obj.id === 32));
          const  obj32 = props.getvalueall.findIndex((obj => obj.id === 33));
          const  obj33 = props.getvalueall.findIndex((obj => obj.id === 34));
          const  obj34= props.getvalueall.findIndex((obj => obj.id === 35));
          const  obj35 = props.getvalueall.findIndex((obj => obj.id === 36));
          const  obj36 = props.getvalueall.findIndex((obj => obj.id === 37));
          const  obj37 = props.getvalueall.findIndex((obj => obj.id === 38));
          const  obj38 = props.getvalueall.findIndex((obj => obj.id === 39));
          const  obj39 = props.getvalueall.findIndex((obj => obj.id === 40));
          const  obj40 = props.getvalueall.findIndex((obj => obj.id === 41));
          const  obj41 = props.getvalueall.findIndex((obj => obj.id === 42));
          const  obj42 = props.getvalueall.findIndex((obj => obj.id === 43));
          const  obj43 = props.getvalueall.findIndex((obj => obj.id === 44));
          const  obj44 = props.getvalueall.findIndex((obj => obj.id === 45));
          const  obj45 = props.getvalueall.findIndex((obj => obj.id === 46));

          
          const  objIndex0 = props.values.findIndex((obj => obj.id === 0));
         const  objIndex = props.values.findIndex((obj => obj.id === 1));
         const  objIndex1 = props.values.findIndex((obj => obj.id === 2));
         const  objIndex2 = props.values.findIndex((obj => obj.id === 3));
         const  objIndex3 = props.values.findIndex((obj => obj.id === 4));
         const  objIndex4 = props.values.findIndex((obj => obj.id === 5));
         const  objIndex5 = props.values.findIndex((obj => obj.id === 6));
         const  objIndex6 = props.values.findIndex((obj => obj.id === 7));
         const  objIndex7 = props.values.findIndex((obj => obj.id === 8));
         const  objIndex8 = props.values.findIndex((obj => obj.id === 9));
         const  objIndex9 = props.values.findIndex((obj => obj.id === 10));
         const  objIndex10 = props.values.findIndex((obj => obj.id === 11));
         const  objIndex11 = props.values.findIndex((obj => obj.id === 12));
         const  objIndex12 = props.values.findIndex((obj => obj.id === 13));
         const  objIndex13 = props.values.findIndex((obj => obj.id === 14));
         const  objIndex14 = props.values.findIndex((obj => obj.id === 15));
         const  objIndex15 = props.values.findIndex((obj => obj.id === 16));
         const  objIndex16 = props.values.findIndex((obj => obj.id === 17));
         const  objIndex17 = props.values.findIndex((obj => obj.id === 18));
         const  objIndex18 = props.values.findIndex((obj => obj.id === 19));
         const  objIndex19 = props.values.findIndex((obj => obj.id === 20));
         const  objIndex20 = props.values.findIndex((obj => obj.id === 21));
         const  objIndex21 = props.values.findIndex((obj => obj.id === 22));
         const  objIndex22 = props.values.findIndex((obj => obj.id === 23));
         const  objIndex23 = props.values.findIndex((obj => obj.id === 24));
         const  objIndex24 = props.values.findIndex((obj => obj.id === 25));
         const  objIndex25 = props.values.findIndex((obj => obj.id === 26));
         const  objIndex26 = props.values.findIndex((obj => obj.id === 27));
         const  objIndex27 = props.values.findIndex((obj => obj.id === 28));
         const  objIndex28 = props.values.findIndex((obj => obj.id === 29));
         const  objIndex29 = props.values.findIndex((obj => obj.id === 30));
         const  objIndex30 = props.values.findIndex((obj => obj.id === 31));
         const  objIndex31 = props.values.findIndex((obj => obj.id === 32));
         const  objIndex32 = props.values.findIndex((obj => obj.id === 33));
         const  objIndex33 = props.values.findIndex((obj => obj.id === 34));
         const  objIndex34= props.values.findIndex((obj => obj.id === 35));
         const  objIndex35 = props.values.findIndex((obj => obj.id === 36));
         const  objIndex36 = props.values.findIndex((obj => obj.id === 37));
         const  objIndex37 = props.values.findIndex((obj => obj.id === 38));
         const  objIndex38 = props.values.findIndex((obj => obj.id === 39));
         const  objIndex39 = props.values.findIndex((obj => obj.id === 40));
         const  objIndex40 = props.values.findIndex((obj => obj.id === 41));
         const  objIndex41 = props.values.findIndex((obj => obj.id === 42));
         const  objIndex42 = props.values.findIndex((obj => obj.id === 43));
         const  objIndex43 = props.values.findIndex((obj => obj.id === 44));
         const  objIndex44 = props.values.findIndex((obj => obj.id === 45));
         const  objIndex45 = props.values.findIndex((obj => obj.id === 46));
      
          // const updatedCarsArray = [props.values[1], staketNum];
console.log("objIndex10")
console.log(props.values[objIndex0])

          // props.setStake(updatedCarsArray);
          switch (value) {
            
            case "Green":
              return (
                props.values[objIndex].number = JSON.parse(staketNum),
                props.closeStakelog(),
                props.getvalueall[obj].number = JSON.parse(staketNum));
            case "Red":
              return (props.values[objIndex1].number = JSON.parse(staketNum),
                props.closeStakelog(),
                props.getvalueall[obj1].number = JSON.parse(staketNum));
      
            case "Black":
              return (props.values[objIndex2].number = JSON.parse(staketNum),
                props.closeStakelog(),
                props.getvalueall[obj2].number = JSON.parse(staketNum));
            case "1-12":
              return (props.values[objIndex3].number = JSON.parse(staketNum),
                props.closeStakelog(),
                props.getvalueall[obj3].number = JSON.parse(staketNum));
              case "13-24":
                return (props.values[objIndex4].number = JSON.parse(staketNum),
                  props.closeStakelog(),
                  props.getvalueall[obj4].number = JSON.parse(staketNum));
                case "25-36":
                  return (props.values[objIndex5].number = JSON.parse(staketNum),
                    props.closeStakelog(),
                    props.getvalueall[obj5].number = JSON.parse(staketNum));
                   
            case "Low":
              return (props.values[objIndex6].number = JSON.parse(staketNum),
                props.closeStakelog(),
                props.getvalueall[obj6].number = JSON.parse(staketNum));
            case "High":
              return (props.values[objIndex7].number = JSON.parse(staketNum),
                props.closeStakelog(),
                props.getvalueall[obj7].number = JSON.parse(staketNum));
            case "Odd":
              return (props.values[objIndex8].number = JSON.parse(staketNum),
                props.closeStakelog(),
                props.getvalueall[obj8].number = JSON.parse(staketNum));
            case "Even":
              return (props.values[objIndex9].number = JSON.parse(staketNum),
                props.closeStakelog(),
                props.getvalueall[obj9].number = JSON.parse(staketNum));
      
              case 0:
              return (props.values[objIndex0].number = JSON.parse(staketNum),
                props.closeStakelog(),
                props.getvalueall[obj0].number = JSON.parse(staketNum));
              case 1:
                return (props.values[objIndex10].number = JSON.parse(staketNum),
                  props.closeStakelog(),
                  props.getvalueall[obj10].number = JSON.parse(staketNum));
                case 2:
              return (props.values[objIndex11].number = JSON.parse(staketNum),
                props.closeStakelog(),
                props.getvalueall[obj11].number = JSON.parse(staketNum));
              case 3:
              return (props.values[objIndex12].number = JSON.parse(staketNum),
                props.closeStakelog(),
                props.getvalueall[obj12].number = JSON.parse(staketNum));
              case 4:
              return (props.values[objIndex13].number = JSON.parse(staketNum),
                props.closeStakelog(),
                props.getvalueall[obj13].number = JSON.parse(staketNum));
              case 5:
              return (props.values[objIndex14].number = JSON.parse(staketNum),
                props.closeStakelog(),
                props.getvalueall[obj14].number = JSON.parse(staketNum));
              case 6:
              return (props.values[objIndex15].number = JSON.parse(staketNum),
                props.closeStakelog(),
                props.getvalueall[obj15].number = JSON.parse(staketNum));
              case 7:
              return (props.values[objIndex16].number = JSON.parse(staketNum),
                props.closeStakelog(),
                props.getvalueall[obj16].number = JSON.parse(staketNum));
              case 8:
              return (props.values[objIndex17].number = JSON.parse(staketNum),
                props.closeStakelog(),
                props.getvalueall[obj17].number = JSON.parse(staketNum));
              case 9:
              return (props.values[objIndex18].number = JSON.parse(staketNum),
                props.closeStakelog(),
                props.getvalueall[obj18].number = JSON.parse(staketNum));
              case 10:
              return (props.values[objIndex19].number = JSON.parse(staketNum),
                props.closeStakelog(),
                props.getvalueall[obj19].number = JSON.parse(staketNum));
              case 11:
              return (props.values[objIndex20].number = JSON.parse(staketNum),
                props.closeStakelog(),
                props.getvalueall[obj20].number = JSON.parse(staketNum));
              case 12:
              return (props.values[objIndex21].number = JSON.parse(staketNum),
                props.closeStakelog(),
                props.getvalueall[obj21].number = JSON.parse(staketNum));
              case 13:
              return (props.values[objIndex22].number = JSON.parse(staketNum),
                props.closeStakelog(),
                props.getvalueall[obj22].number = JSON.parse(staketNum));
              case 14:
              return (props.values[objIndex23].number = JSON.parse(staketNum),
                props.closeStakelog(),
                props.getvalueall[obj23].number = JSON.parse(staketNum));
              case 15:
              return (props.values[objIndex24].number = JSON.parse(staketNum),
                props.closeStakelog(),
                props.getvalueall[obj24].number = JSON.parse(staketNum));
              case 16:
              return (props.values[objIndex25].number = JSON.parse(staketNum),
                props.closeStakelog(),
                props.getvalueall[obj25].number = JSON.parse(staketNum));
              case 17:
              return (props.values[objIndex26].number = JSON.parse(staketNum),
                props.closeStakelog(),
                props.getvalueall[obj26].number = JSON.parse(staketNum));
              case 18:
              return (props.values[objIndex27].number = JSON.parse(staketNum),
                props.closeStakelog(),
                props.getvalueall[obj27].number = JSON.parse(staketNum));
              case 19:
                return (props.values[objIndex28].number = JSON.parse(staketNum),
                  props.closeStakelog(),
                  props.getvalueall[obj28].number = JSON.parse(staketNum));
                case 20:
              return (props.values[objIndex29].number = JSON.parse(staketNum),
                props.closeStakelog(),
                props.getvalueall[obj29].number = JSON.parse(staketNum));
              case 21:
              return (props.values[objIndex30].number = JSON.parse(staketNum),
                props.closeStakelog(),
                props.getvalueall[obj30].number = JSON.parse(staketNum));
              case 22:
              return (props.values[objIndex31].number = JSON.parse(staketNum),
                props.closeStakelog(),
                props.getvalueall[obj31].number = JSON.parse(staketNum));
              case 23:
              return (props.values[objIndex32].number = JSON.parse(staketNum),
                props.closeStakelog(),
                props.getvalueall[obj32].number = JSON.parse(staketNum));
              case 24:
              return (props.values[objIndex33].number = JSON.parse(staketNum),
                props.closeStakelog(),
                props.getvalueall[obj33].number = JSON.parse(staketNum));
              case 25:
              return (props.values[objIndex34].number = JSON.parse(staketNum),
                props.closeStakelog(),
                props.getvalueall[obj34].number = JSON.parse(staketNum));
              case 26:
              return (props.values[objIndex35].number = JSON.parse(staketNum),
                props.closeStakelog(),
                props.getvalueall[obj35].number = JSON.parse(staketNum));
              case 27:
              return (props.values[objIndex36].number = JSON.parse(staketNum),
                props.closeStakelog(),
                props.getvalueall[obj36].number = JSON.parse(staketNum));
              case 28:
              return (props.values[objIndex37].number = JSON.parse(staketNum),
                props.closeStakelog(),
                props.getvalueall[obj37].number = JSON.parse(staketNum));
              case 29:
              return (props.values[objIndex38].number = JSON.parse(staketNum),
                props.closeStakelog(),
                props.getvalueall[obj38].number = JSON.parse(staketNum));
              case 30:
              return (props.values[objIndex39].number = JSON.parse(staketNum),
                props.closeStakelog(),
                props.getvalueall[obj39].number = JSON.parse(staketNum));
              case 31:
              return (props.values[objIndex40].number = JSON.parse(staketNum),
                props.closeStakelog(),
                props.getvalueall[obj40].number = JSON.parse(staketNum));
              case 32:
              return (props.values[objIndex41].number = JSON.parse(staketNum),
                props.closeStakelog(),
                props.getvalueall[obj41].number = JSON.parse(staketNum));
              case 33:
              return (props.values[objIndex42].number = JSON.parse(staketNum),
                props.closeStakelog(),
                props.getvalueall[obj42].number = JSON.parse(staketNum));
              case 34:
              return (props.values[objIndex43].number = JSON.parse(staketNum),
                props.closeStakelog(),
                props.getvalueall[obj43].number = JSON.parse(staketNum));
              case 35:
              return (props.values[objIndex44].number = JSON.parse(staketNum),
                props.closeStakelog(),
                props.getvalueall[obj44].number = JSON.parse(staketNum));
              case 36:
              return (props.values[objIndex45].number = JSON.parse(staketNum),
                props.closeStakelog(),
                props.getvalueall[obj45].number = JSON.parse(staketNum));
              
          }
         
        };
    const handleClose = () => {
        props.closeStakelog();
       };
      //  const summit=() =>{
      //   props.setValue(staketNum)
      //   
      //  }
    
     
return (
  <div>
    <Dialog ref={props.ref}    open={props.open} onClose={handleClose}>
   
    <DialogTitle>
        <div className="row">
         
          <div className='col-lg-12'>
              
            <AiIcons.AiOutlineClose
            style={{marginLeft:"90%"}}
              color='black'
              onClick={() => handleClose()}
            /></div></div>
          </DialogTitle>
        <DialogContent>
        <div className='col-lg-12 my-2'>
            <input
              type='number'
              className='form-control'
              placeholder='stake'
              value={staketNum}
              onChange={handleOnChange}
            />
          </div>
          <div className='col-lg-12'>
            <div class='btn-group my-1 text-white'>
              {num1.map((num, index) => {
                return (
                  <button
                    type='button'
                    className={"btn alphaBtn  mx-1"}
                    onClick={() => setstaket(num)}
                  >
                    <b>{num}</b>
                  </button>
                );
              })}
            </div>
          </div>
          <div className='col-lg-12 '>
            <div class='btn-group my-1 text-white'>
              {num2.map((letter, index) => {
                return (
                  <button
                    type='button'
                    className={"btn alphaBtn  mx-1"}
                    onClick={() => setstaket(letter)}
                  >
                    <b>{letter}</b>
                  </button>
                );
              })}
            </div>
          </div><div className='col-lg-12 '>
            <div class='btn-group my-1 text-white'>
              {num3.map((letter, index) => {
                return (
                  <button
                    type='button'
                    className={"btn alphaBtn  mx-1"}
                    onClick={() => setstaket(letter)}
                  >
                    <b>{letter}</b>
                  </button>
                );
              })}
            </div>
          </div><div className='col-lg-12 '>
            <div class='btn-group my-1 text-white'>
              {num4.map((letter, index) => {
                return (
                  <button
                    type='button'
                    className={"btn alphaBtn  mx-1"}
                    onClick={() => setstaket(letter)}
                  >
                    <b>{letter}</b>
                  </button>
                );
              })}{""}
              <button
               type='button'
               className={"btn clearBtn  mx-1"}
               onClick={() => clearstaket()}
             >
               <b>CLEAR</b>
             </button>
             <button
               type='button'
               className={"btn okBtn  mx-1"}
               onClick={()=>{summit()}}
             >
               <b>OK</b>
             </button>
            </div>
          </div>
        
        </DialogContent>
        
     
    </Dialog>
  </div>
);
}

export default StakeModal;