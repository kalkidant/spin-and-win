import React from "react";
import { useState } from "react";
import { CgNametag } from "react-icons/cg";
import "./Css/tabs.css";

function Tabs(props) {
  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
  };
  const handleOdd = (bet) => {
    
    switch (bet) {
      case "Green":
        return props.odds[1];
      case "Red":
        return props.odds[2];

      case "Black":
        return props.odds[3];
      case "1-12":
        return props.odds[4];
        case "13-24":
          return props.odds[4];
          case "25-36":
            return props.odds[4];
             
      case "Low":
        return props.odds[5];
      case "High":
        return props.odds[6];
      case "Odd":
        return props.odds[7];
      case "Even":
        return props.odds[8];

      default:
        return props.odds[0];
    }
  };
  const getconstant=(bet)=>{
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
       
  
    
        const  objIndex0 = props.value.findIndex((obj => obj.id === 0));
        const  objIndex = props.value.findIndex((obj => obj.id === 1));
        const  objIndex1 = props.value.findIndex((obj => obj.id === 2));
        const  objIndex2 = props.value.findIndex((obj => obj.id === 3));
        const  objIndex3 = props.value.findIndex((obj => obj.id === 4));
        const  objIndex4 = props.value.findIndex((obj => obj.id === 5));
        const  objIndex5 = props.value.findIndex((obj => obj.id === 6));
        const  objIndex6 = props.value.findIndex((obj => obj.id === 7));
        const  objIndex7 = props.value.findIndex((obj => obj.id === 8));
        const  objIndex8 = props.value.findIndex((obj => obj.id === 9));
        const  objIndex9 = props.value.findIndex((obj => obj.id === 10));
       
     
         // const updatedCarsArray = [props.value[1], staketNum];

         // props.setStake(updatedCarsArray);
         switch (bet) {
           case "Green":
             return  props.value[objIndex].number = props.constant 
           case "Red":
             return (props.value[objIndex1].number = props.constant 
               );
     
           case "Black":
             return (props.value[objIndex2].number = props.constant 
              );
           case "1-12":
             return (props.value[objIndex3].number = props.constant 
              );
             case "13-24":
               return (props.value[objIndex4].number = props.constant );
               case "25-36":
                 return (props.value[objIndex5].number =props.constant 
                   );
                  
           case "Low":
             return (props.value[objIndex6].number =props.constant );
           case "High":
             return (props.value[objIndex7].number =props.constant );
           case "Odd":
             return (props.value[objIndex8].number =props.constant );
           case "Even":
             return (props.value[objIndex9].number =props.constant );
     
                 }
  }
  const addvalue=(bet)=>{
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
       
  
    
        const  objIndex0 = props.value.findIndex((obj => obj.id === 0));
        const  objIndex = props.value.findIndex((obj => obj.id === 1));
        const  objIndex1 = props.value.findIndex((obj => obj.id === 2));
        const  objIndex2 = props.value.findIndex((obj => obj.id === 3));
        const  objIndex3 = props.value.findIndex((obj => obj.id === 4));
        const  objIndex4 = props.value.findIndex((obj => obj.id === 5));
        const  objIndex5 = props.value.findIndex((obj => obj.id === 6));
        const  objIndex6 = props.value.findIndex((obj => obj.id === 7));
        const  objIndex7 = props.value.findIndex((obj => obj.id === 8));
        const  objIndex8 = props.value.findIndex((obj => obj.id === 9));
        const  objIndex9 = props.value.findIndex((obj => obj.id === 10));
       
     
         // const updatedCarsArray = [props.value[1], staketNum];

         // props.setStake(updatedCarsArray);
         if(!props.Back && !props.constant){
          switch (bet) {
            case "Green":
              return  props.value[objIndex].number = props.value[objIndex].number + props.getvalueall[obj].number 
            case "Red":
              return (props.value[objIndex1].number = props.value[objIndex1].number + props.getvalueall[obj1].number
                );
      
            case "Black":
              return (props.value[objIndex2].number = props.value[objIndex2].number + props.getvalueall[obj2].number
               );
            case "1-12":
              return (props.value[objIndex3].number = props.value[objIndex3].number + props.getvalueall[obj3].number
               );
              case "13-24":
                return (props.value[objIndex4].number = props.value[objIndex4].number + props.getvalueall[obj4].number);
                case "25-36":
                  return (props.value[objIndex5].number =props.value[objIndex5].number + props.getvalueall[obj5].number
                    );
                   
            case "Low":
              return (props.value[objIndex6].number =props.value[objIndex6].number + props.getvalueall[obj6].number);
            case "High":
              return (props.value[objIndex7].number =props.value[objIndex7].number + props.getvalueall[obj7].number);
            case "Odd":
              return (props.value[objIndex8].number =props.value[objIndex8].number + props.getvalueall[obj8].number);
            case "Even":
              return (props.value[objIndex9].number =props.value[objIndex9].number + props.getvalueall[obj9].number);
      
                  }
         }
         else if(!props.Back && props.constant){
          switch (bet) {
            case "Green":
              return  props.value[objIndex].number = props.value[objIndex].number + props.constant
            case "Red":
              return (props.value[objIndex1].number = props.value[objIndex1].number + props.constant
                );
      
            case "Black":
              return (props.value[objIndex2].number = props.value[objIndex2].number + props.constant
               );
            case "1-12":
              return (props.value[objIndex3].number = props.value[objIndex3].number + props.constant
               );
              case "13-24":
                return (props.value[objIndex4].number = props.value[objIndex4].number + props.constant);
                case "25-36":
                  return (props.value[objIndex5].number =props.value[objIndex5].number + props.constant
                    );
                   
            case "Low":
              return (props.value[objIndex6].number =props.value[objIndex6].number + props.constant);
            case "High":
              return (props.value[objIndex7].number =props.value[objIndex7].number + props.constant);
            case "Odd":
              return (props.value[objIndex8].number =props.value[objIndex8].number + props.constant);
            case "Even":
              return (props.value[objIndex9].number =props.value[objIndex9].number + props.constant);
      
                  }

         }else if(props.Back && !props.constant){
          switch (bet) {
            case "Green":
              return  props.value[objIndex].number = props.value[objIndex].number - 10
            case "Red":
              return (props.value[objIndex1].number = props.value[objIndex1].number - 10
                );
      
            case "Black":
              return (props.value[objIndex2].number = props.value[objIndex2].number - 10
               );
            case "1-12":
              return (props.value[objIndex3].number = props.value[objIndex3].number - 10
               );
              case "13-24":
                return (props.value[objIndex4].number = props.value[objIndex4].number - 10);
                case "25-36":
                  return (props.value[objIndex5].number =props.value[objIndex5].number - 10
                    );
                   
            case "Low":
              return (props.value[objIndex6].number =props.value[objIndex6].number - 10);
            case "High":
              return (props.value[objIndex7].number =props.value[objIndex7].number - 10);
            case "Odd":
              return (props.value[objIndex8].number =props.value[objIndex8].number - 10);
            case "Even":
              return (props.value[objIndex9].number =props.value[objIndex9].number - 10);
      
                  }
         }
         else {
          switch (bet) {
            case "Green":
              return  props.value[objIndex].number = props.value[objIndex].number - props.constant
            case "Red":
              return (props.value[objIndex1].number = props.value[objIndex1].number - props.constant
                );
      
            case "Black":
              return (props.value[objIndex2].number = props.value[objIndex2].number - props.constant
               );
            case "1-12":
              return (props.value[objIndex3].number = props.value[objIndex3].number - props.constant
               );
              case "13-24":
                return (props.value[objIndex4].number = props.value[objIndex4].number - props.constant);
                case "25-36":
                  return (props.value[objIndex5].number =props.value[objIndex5].number - props.constant
                    );
                   
            case "Low":
              return (props.value[objIndex6].number =props.value[objIndex6].number - props.constant);
            case "High":
              return (props.value[objIndex7].number =props.value[objIndex7].number - props.constant);
            case "Odd":
              return (props.value[objIndex8].number =props.value[objIndex8].number - props.constant);
            case "Even":
              return (props.value[objIndex9].number =props.value[objIndex9].number - props.constant);
      
                  }
         }


      
         
  }

  return (
    <div className='container'>
      <div className='bloc-tabs'>
        <button
          // className={toggleState === 1 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(1)}
          className='btn bg-white'
        >
          <h2 className='titleGame'>Main</h2>
        </button>
      </div>

      <div className='content-tabs'>
        <div
          className={toggleState === 1 ? "content  active-content" : "content"}
        >
          <h4>Colours</h4>
          <hr />

          <div class='btn-group my-2'>
       
                               <button
              type='button'
              class='btn btnGray btn-lg mx-1'
              className={
                props.selectedBet.includes("Red")
                  ? "btn btnGray btn-lg btnredkCss  mx-1"
                  : "btn btnGray btn-lg bg-white  mx-1"
              }
              onClick={() => {
                let currentBet;
                if (props.selectedBet.includes("Red")) {
                  addvalue("Red")
                  props.setBetvalue("Red")
                  
                } else {
                  if(props.constant){
                    getconstant("Red");
                    currentBet = props.selectedBet;
                  currentBet.push("Red");

                  props.selectBet(currentBet);
                  props.setBetvalue("Red")
                  }else{
                    currentBet = props.selectedBet;
                  currentBet.push("Red");

                  props.selectBet(currentBet);
                  props.setBetvalue("Red")
                  }
                
                }
                const add = props.value[props.value.findIndex((obj => obj.id === 2))].number;
                               
                props.stakeValue[2] = add;
                props.totalbet[2] =  props.stakeValue[2]* handleOdd("Red");
             
              }}
            >
              Red
            </button>
       
            <button
              type='button'
              className={
                props.selectedBet.includes("Black")
                  ? "btn btnGray btn-lg btnBlackCss active mx-1"
                  : "btn btnGray btn-lg bg-white  mx-1"
              }
              onClick={() => {
                let currentBet;
                if (props.selectedBet.includes("Black")) {
                  addvalue("Black")
                  props.setBetvalue("Black")
                } else {
                 if(props.constant){
                  getconstant("Black")
                  currentBet = props.selectedBet;
                  currentBet.push("Black");
                  props.selectBet(currentBet);
                  props.setBetvalue("Black")
                 }else{
                  currentBet = props.selectedBet;
                  currentBet.push("Black");
                  props.selectBet(currentBet);
                  props.setBetvalue("Black")
                 }
                }
                const add = props.value[props.value.findIndex((obj => obj.id === 3))].number;
                               
                props.stakeValue[3] = add;
                props.totalbet[ 3] =  props.stakeValue[3]*  handleOdd("Black");
              }}
            >
              Black
            </button>
         
           <button
              type='button'
              className={
                props.selectedBet.includes("Green")
                  ? "btn btnGray btn-lg btnGreenCss active mx-1"
                  : "btn btnGray btn-lg bg-white  mx-1"
              }
              onClick={() => {
                let currentBet;
                if (props.selectedBet.includes("Green")) {
                  addvalue("Green")
                  props.setBetvalue("Green")
                } else {
                  if(props.constant){
                    getconstant("Green")
                    currentBet = props.selectedBet;
                    currentBet.push("Green");
                    props.selectBet(currentBet);
                    props.setBetvalue("Green")
                  }else{
                    currentBet = props.selectedBet;
                    currentBet.push("Green");
                    props.selectBet(currentBet);
                    props.setBetvalue("Green")
                  }
                 
                }
                const add = props.value[props.value.findIndex((obj => obj.id === 1))].number;
                               
                props.stakeValue[1] = add;
                props.totalbet[ 1] =  props.stakeValue[1]* handleOdd("Green");
              }}
            >
              Green
            </button>
           
            
          </div>

          <h4>Dozens</h4>
          <hr />

          <div class='btn-group my-2'>
          <button
              type='button'
              className={
                props.selectedBet.includes("1-12")
                  ? "btn btnGray btn-lg btnbluekCss active mx-1"
                  : "btn btnGray btn-lg bg-white  mx-1"
              }
             
              onClick={() => {
                let currentBet;
                if (props.selectedBet.includes("1-12")) {

                  addvalue("1-12")
                  props.setBetvalue("1-12")
               
                } else {
                  if(props.constant){
                    getconstant("1-12")
                    currentBet = props.selectedBet;
                    currentBet.push("1-12");
                    props.selectBet(currentBet);
                    props.setBetvalue("1-12")
                  }else{
                    currentBet = props.selectedBet;
                    currentBet.push("1-12");
                    props.selectBet(currentBet);
                    props.setBetvalue("1-12")
                  }
                 
                }
                const add = props.value[props.value.findIndex((obj => obj.id === 4))].number;
                               
                props.stakeValue[4] = add;
                props.totalbet[ 4] =  props.stakeValue[4]* handleOdd("1-12");
              }}
            >
              1 - 12
            </button>
           
           <button
              type='button'
              className={
                props.selectedBet.includes("13-24")
                  ? "btn btnGray btn-lg btnbluekCss active mx-1"
                  : "btn btnGray btn-lg bg-white  mx-1"
              }
              onClick={() => {
                let currentBet;
                if (props.selectedBet.includes("13-24")) {
                  addvalue("13-24")
                  props.setBetvalue("13-24")
                } else {
                  if (props.constant){
                    getconstant("13-24")
                    currentBet = props.selectedBet;
                    currentBet.push("13-24");
                    props.selectBet(currentBet);
                    props.setBetvalue("13-24")
                  }else{
                    currentBet = props.selectedBet;
                    currentBet.push("13-24");
                    props.selectBet(currentBet);
                    props.setBetvalue("13-24")
                  }
                 
                }
                const add = props.value[props.value.findIndex((obj => obj.id === 5))].number;
                               
                props.stakeValue[5] = add;
                props.totalbet[ 5] =  props.stakeValue[5]* handleOdd("13-24");
              }}
              
            >
              13 - 24
            </button>
 
            <button
              type='button'
              className={
                props.selectedBet.includes("25-36")
                  ? "btn btnGray btn-lg btnbluekCss active mx-1"
                  : "btn btnGray btn-lg bg-white  mx-1"
              }
              onClick={() => {
                let currentBet;
                if (props.selectedBet.includes("25-36")) {
                  addvalue("25-36")
                  props.setBetvalue("25-36")
                } else {
                  if (props.constant){
                    getconstant("25-36")
                    currentBet = props.selectedBet;
                    currentBet.push("25-36");
                    props.selectBet(currentBet);
                    props.setBetvalue("25-36")
                  }else{
                    currentBet = props.selectedBet;
                    currentBet.push("25-36");
                    props.selectBet(currentBet);
                    props.setBetvalue("25-36")
                  }
                 
                }
                const add = props.value[props.value.findIndex((obj => obj.id === 6))].number;
                               
                props.stakeValue[6] = add;
                props.totalbet[ 6] =  props.stakeValue[6]* handleOdd("25-36");
              }}
            >
              25 - 36
            </button>
          
           
          </div>

          <h4>Even / Odd</h4>
          <hr />

          <div class='btn-group my-2'>
          <button
              type='button'
              className={
                props.selectedBet.includes("Even")
                  ? "btn btnGray btn-lg btnbluekCss active mx-1"
                  : "btn btnGray btn-lg bg-white  mx-1"
              }
              onClick={() => {
                let currentBet;
                if (props.selectedBet.includes("Even")) {
                  addvalue("Even")
                  props.setBetvalue("Even")
                } else {
                  if (props.constant){
                    getconstant("Even")
                    currentBet = props.selectedBet;
                    currentBet.push("Even");
                    props.selectBet(currentBet);
                    props.setBetvalue("Even")
                  }else{
                    currentBet = props.selectedBet;
                    currentBet.push("Even");
                    props.selectBet(currentBet);
                    props.setBetvalue("Even")
                  }
                
                }
                const add = props.value[props.value.findIndex((obj => obj.id === 10))].number;
                               
                props.stakeValue[10] = add;
                props.totalbet[ 10] =  props.stakeValue[10]* handleOdd("Even");
              }}
            >
              Even{" "}
            </button>
         
            <button
              type='button'
              className={
                props.selectedBet.includes("Odd")
                  ? "btn btnGray btn-lg btnbluekCss active mx-1"
                  : "btn btnGray btn-lg bg-white  mx-1"
              }
              onClick={() => {
              let  currentBet;
                if (props.selectedBet.includes("Odd")) {
                  addvalue("Odd")
                  props.setBetvalue("Odd")
                } else {
                  if(props.constant){
                    getconstant("Odd")
                    currentBet = props.selectedBet;
                    currentBet.push("Odd");
                    props.selectBet(currentBet);
                    props.setBetvalue("Odd")
                  }else{
                    currentBet = props.selectedBet;
                    currentBet.push("Odd");
                    props.selectBet(currentBet);
                    props.setBetvalue("Odd")
                  }
                
                }
                const add = props.value[props.value.findIndex((obj => obj.id === 9))].number;
                               
                props.stakeValue[9] = add;
                props.totalbet[ 9] =  props.stakeValue[9]* handleOdd("Odd");
              }}
            >
              Odd{" "}
            </button>

          
          </div>
          <h4>High / Low</h4>
          <hr />

          <div class='btn-group my-2'>
          <button
              type='button'
              className={
                props.selectedBet.includes("High")
                  ? "btn btnGray btn-lg btnbluekCss active mx-1"
                  : "btn btnGray btn-lg bg-white  mx-1"
              }
              onClick={() => {
                let currentBet
                if (props.selectedBet.includes("High")) {
                  addvalue("High")
                  props.setBetvalue("High")
                } else {
                  if(props.constant){
                    getconstant("High")
                    currentBet = props.selectedBet;
                    currentBet.push("High");
                    props.selectBet(currentBet);
                    props.setBetvalue("High")
                  }else{
                    currentBet = props.selectedBet;
                    currentBet.push("High");
                    props.selectBet(currentBet);
                    props.setBetvalue("High")
                  }
                 
                }
                const add = props.value[props.value.findIndex((obj => obj.id === 8))].number;
                               
                props.stakeValue[8] = add;
                props.totalbet[ 8] =  props.stakeValue[8]*  handleOdd("High");
              }}
            >
              High{" "}
            </button>
       
            <button
              type='button'
              className={
                props.selectedBet.includes("Low")
                  ? "btn btnGray btn-lg btnbluekCss active mx-1"
                  : "btn btnGray btn-lg bg-white  mx-1"
              }
              onClick={() => {
                let currentBet
                if (props.selectedBet.includes("Low")) {
                  addvalue("Low")
                  props.setBetvalue("Low")
                } else {
                  if(props.constant){
                    getconstant("Low")
                    currentBet = props.selectedBet;
                    currentBet.push("Low");
                    props.selectBet(currentBet);
                    props.setBetvalue("Low")
                  }{
                    currentBet = props.selectedBet;
                    currentBet.push("Low");
                    props.selectBet(currentBet);
                    props.setBetvalue("Low")
                  }
                 
                }
                const add = props.value[props.value.findIndex((obj => obj.id === 7))].number;
                               
                props.stakeValue[7] = add;
                props.totalbet[ 7] =  props.stakeValue[7]* handleOdd("Low");
              }}
            >
              Low{" "}
            </button>
         
            
          </div>
        </div>
      </div>
    </div>
  );
}

export default Tabs;
