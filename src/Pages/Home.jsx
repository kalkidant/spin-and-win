import { React, useState, useEffect } from "react";
import socketIOClient from "socket.io-client";
import SpinStretch from "react-cssfx-loading/lib/SpinStretch";
import axios from "axios";
import { Fragment } from "react/cjs/react.production.min";
import "../Components/Css/homeCss.css";
import "../Components/Css/navBar.css";
import "../Components/Css/popup.css";
import * as FaIcons from "react-icons/fa";
import { useParams } from "react-router-dom";
import Tabs from "../Components/tabs";
import BottomTabs from "../Components/bottomTabs";
import Bottom from "../Components/Bottom";
import RightSideBar from "../Components/rightSideBar";
import NavBar from "../Components/NavBar";
import { BASEURL } from "../Functions/apiUrl";
function Home(props) {
  const row1Color = ["danger", "black", "danger", "black", "danger", "black"];
  const row2Color = ["danger", "black", "danger", "black", "black", "danger"];
  const row3Color = ["black", "danger", "black", "danger", "black", "danger"];
  const row4Color = ["danger", "black", "danger", "black", "danger", "black"];
  const row5Color = ["danger", "black", "danger", "black", "black", "danger"];
  const row6Color = ["black", "danger", "black", "danger", "black", "danger"];
  
  const [timer, setTimer] = useState("00:00");
  const [disable, setDisable] = useState(false);
  const [odds, setOdds] = useState([]);
  const { id } = useParams();
  const  value = props.stakevalue
  const [selectedBets, selectBet] = useState([]);


  const Odd = () => {
    try {
      axios.get(BASEURL + "bet/odds").then((response) => {
        var temp = [];
        temp.push(
          response.data.odds.number,
          response.data.odds.green,
          response.data.odds.red,
          response.data.odds.black,
          response.data.odds.dozens,
          response.data.odds.low,
          response.data.odds.high,
          response.data.odds.odd,
          response.data.odds.even
        );
        setOdds(temp);
      });
    } catch (e) {
      
      setOdds([]);
    }
  };

  useEffect(() => {
    try {
      const socket = socketIOClient("https://api.cobet.et/");
      socket.on("FromAPI", (data) => {
        setTimer(data.minute + ":" + data.second);
        if (data.minute === 0) {
          if (data.second < 5) {
            setDisable(true);
          }
        } else {
          setDisable(data.pause);
        }
      });
      Odd();
      if (id) {
        props.setStatus(true);
      }
      props.setKunoActive(false);
    } catch (e) {
      console.log("Error in Timer");
    }
  }, []);
  
  const getconstant = (bet) =>{
   props.setBack(false)
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
    const  objIndex10 = props.value.findIndex((obj => obj.id === 11));
    const  objIndex11 = props.value.findIndex((obj => obj.id === 12));
    const  objIndex12 = props.value.findIndex((obj => obj.id === 13));
    const  objIndex13 = props.value.findIndex((obj => obj.id === 14));
    const  objIndex14 = props.value.findIndex((obj => obj.id === 15));
    const  objIndex15 = props.value.findIndex((obj => obj.id === 16));
    const  objIndex16 = props.value.findIndex((obj => obj.id === 17));
    const  objIndex17 = props.value.findIndex((obj => obj.id === 18));
    const  objIndex18 = props.value.findIndex((obj => obj.id === 19));
    const  objIndex19 = props.value.findIndex((obj => obj.id === 20));
    const  objIndex20 = props.value.findIndex((obj => obj.id === 21));
    const  objIndex21 = props.value.findIndex((obj => obj.id === 22));
    const  objIndex22 = props.value.findIndex((obj => obj.id === 23));
    const  objIndex23 = props.value.findIndex((obj => obj.id === 24));
    const  objIndex24 = props.value.findIndex((obj => obj.id === 25));
    const  objIndex25 = props.value.findIndex((obj => obj.id === 26));
    const  objIndex26 = props.value.findIndex((obj => obj.id === 27));
    const  objIndex27 = props.value.findIndex((obj => obj.id === 28));
    const  objIndex28 = props.value.findIndex((obj => obj.id === 29));
    const  objIndex29 = props.value.findIndex((obj => obj.id === 30));
    const  objIndex30 = props.value.findIndex((obj => obj.id === 31));
    const  objIndex31 = props.value.findIndex((obj => obj.id === 32));
    const  objIndex32 = props.value.findIndex((obj => obj.id === 33));
    const  objIndex33 = props.value.findIndex((obj => obj.id === 34));
    const  objIndex34= props.value.findIndex((obj => obj.id === 35));
    const  objIndex35 = props.value.findIndex((obj => obj.id === 36));
    const  objIndex36 = props.value.findIndex((obj => obj.id === 37));
    const  objIndex37 = props.value.findIndex((obj => obj.id === 38));
    const  objIndex38 = props.value.findIndex((obj => obj.id === 39));
    const  objIndex39 = props.value.findIndex((obj => obj.id === 40));
    const  objIndex40 = props.value.findIndex((obj => obj.id === 41));
    const  objIndex41 = props.value.findIndex((obj => obj.id === 42));
    const  objIndex42 = props.value.findIndex((obj => obj.id === 43));
    const  objIndex43 = props.value.findIndex((obj => obj.id === 44));
    const  objIndex44 = props.value.findIndex((obj => obj.id === 45));
    const  objIndex45 = props.value.findIndex((obj => obj.id === 46));
    switch (bet) {
      case "Green":
        return  props.value[objIndex0].number = props.constant
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
          return (props.value[objIndex4].number = props.constant)
          case "25-36":
            return (props.value[objIndex5].number =props.console
              );
             
      case "Low":
        return (props.value[objIndex6].number =props.constant);
      case "High":
        return (props.value[objIndex7].number =props.constant);
      case "Odd":
        return (props.value[objIndex8].number =props.constant);
      case "Even":
        return (props.value[objIndex9].number =props.constant);

        case 0:
         
        return (props.value[objIndex0].number = props.constant);
        case 1:
          return (props.value[objIndex10].number =props.constant);
          case 2:
        return (props.value[objIndex11].number =props.constant);
        case 3:
        return (props.value[objIndex12].number =props.constant);
        case 4:
        return (props.value[objIndex13].number =props.constant);
        case 5:
        return (props.value[objIndex14].number =props.constant);
        case 6:
        return (props.value[objIndex15].number =props.constant)
        case 7:
        return (props.value[objIndex16].number =props.constant);
        case 8:
        return (props.value[objIndex17].number =props.constant);
        case 9:
        return (props.value[objIndex18].number =props.constant);
        case 10:
        return (props.value[objIndex19].number =props.constant);
        case 11:
        return (props.value[objIndex20].number =props.constant);
        case 12:
        return (props.value[objIndex21].number =props.constant);
        case 13:
        return (props.value[objIndex22].number =props.constant);
        case 14:
        return (props.value[objIndex23].number =props.constant);
        case 15:
        return (props.value[objIndex24].number =props.constant);
        case 16:
        return (props.value[objIndex25].number =props.constant);
        case 17:
        return (props.value[objIndex26].number =props.constant)
        case 18:
        return (props.value[objIndex27].number =props.constant);
        case 19:
          return (props.value[objIndex28].number =props.constant);
          case 20:
        return (props.value[objIndex29].number =props.constant);
        case 21:
        return (props.value[objIndex30].number =props.constant);
        case 22:
        return (props.value[objIndex31].number =props.constant);
        case 23:
        return (props.value[objIndex32].number =props.constant);
        case 24:
        return (props.value[objIndex33].number =props.constant);
        case 25:
        return (props.value[objIndex34].number =props.constant);
        case 26:
        return (props.value[objIndex35].number =props.constant);
        case 27:
        return (props.value[objIndex36].number =props.constant);
        case 28:
        return (props.value[objIndex37].number =props.constant);
        case 29:
        return (props.value[objIndex38].number =props.constant);
        case 30:
        return (props.value[objIndex39].number =props.constant);
        case 31:
        return (props.value[objIndex40].number =props.constant);
        case 32:
        return (props.value[objIndex41].number =props.constant);
        case 33:
        return (props.value[objIndex42].number =props.constant);
        case 34:
        return (props.value[objIndex43].number =props.constant);
        case 35:
        return (props.value[objIndex44].number =props.constant);
        case 36:
        return (props.value[objIndex45].number =props.constant);
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
      const  objIndex10 = props.value.findIndex((obj => obj.id === 11));
      const  objIndex11 = props.value.findIndex((obj => obj.id === 12));
      const  objIndex12 = props.value.findIndex((obj => obj.id === 13));
      const  objIndex13 = props.value.findIndex((obj => obj.id === 14));
      const  objIndex14 = props.value.findIndex((obj => obj.id === 15));
      const  objIndex15 = props.value.findIndex((obj => obj.id === 16));
      const  objIndex16 = props.value.findIndex((obj => obj.id === 17));
      const  objIndex17 = props.value.findIndex((obj => obj.id === 18));
      const  objIndex18 = props.value.findIndex((obj => obj.id === 19));
      const  objIndex19 = props.value.findIndex((obj => obj.id === 20));
      const  objIndex20 = props.value.findIndex((obj => obj.id === 21));
      const  objIndex21 = props.value.findIndex((obj => obj.id === 22));
      const  objIndex22 = props.value.findIndex((obj => obj.id === 23));
      const  objIndex23 = props.value.findIndex((obj => obj.id === 24));
      const  objIndex24 = props.value.findIndex((obj => obj.id === 25));
      const  objIndex25 = props.value.findIndex((obj => obj.id === 26));
      const  objIndex26 = props.value.findIndex((obj => obj.id === 27));
      const  objIndex27 = props.value.findIndex((obj => obj.id === 28));
      const  objIndex28 = props.value.findIndex((obj => obj.id === 29));
      const  objIndex29 = props.value.findIndex((obj => obj.id === 30));
      const  objIndex30 = props.value.findIndex((obj => obj.id === 31));
      const  objIndex31 = props.value.findIndex((obj => obj.id === 32));
      const  objIndex32 = props.value.findIndex((obj => obj.id === 33));
      const  objIndex33 = props.value.findIndex((obj => obj.id === 34));
      const  objIndex34= props.value.findIndex((obj => obj.id === 35));
      const  objIndex35 = props.value.findIndex((obj => obj.id === 36));
      const  objIndex36 = props.value.findIndex((obj => obj.id === 37));
      const  objIndex37 = props.value.findIndex((obj => obj.id === 38));
      const  objIndex38 = props.value.findIndex((obj => obj.id === 39));
      const  objIndex39 = props.value.findIndex((obj => obj.id === 40));
      const  objIndex40 = props.value.findIndex((obj => obj.id === 41));
      const  objIndex41 = props.value.findIndex((obj => obj.id === 42));
      const  objIndex42 = props.value.findIndex((obj => obj.id === 43));
      const  objIndex43 = props.value.findIndex((obj => obj.id === 44));
      const  objIndex44 = props.value.findIndex((obj => obj.id === 45));
      const  objIndex45 = props.value.findIndex((obj => obj.id === 46));
   
       // const updatedCarsArray = [props.value[1], staketNum];
     

if(!props.Back && !props.constant){
  switch (bet) {
    case "Green":
      return  props.value[objIndex0].number = props.value[objIndex].number + props.getvalueall[obj].number 
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

      case 0:
       
      return (props.value[objIndex0].number = props.value[objIndex0].number  + props.getvalueall[obj0].number);
      case 1:
        return (props.value[objIndex10].number =props.value[objIndex10].number + props.getvalueall[obj10].number);
        case 2:
      return (props.value[objIndex11].number =props.value[objIndex11].number + props.getvalueall[obj11].number);
      case 3:
      return (props.value[objIndex12].number =props.value[objIndex12].number + props.getvalueall[obj12].number);
      case 4:
      return (props.value[objIndex13].number =props.value[objIndex13].number + props.getvalueall[obj13].number);
      case 5:
      return (props.value[objIndex14].number =props.value[objIndex14].number + props.getvalueall[obj14].number);
      case 6:
      return (props.value[objIndex15].number =props.value[objIndex15].number + props.getvalueall[obj15].number)
      case 7:
      return (props.value[objIndex16].number =props.value[objIndex16].number + props.getvalueall[obj16].number);
      case 8:
      return (props.value[objIndex17].number =props.value[objIndex17].number + props.getvalueall[obj17].number);
      case 9:
      return (props.value[objIndex18].number =props.value[objIndex18].number + props.getvalueall[obj18].number);
      case 10:
      return (props.value[objIndex19].number =props.value[objIndex19].number + props.getvalueall[obj19].number);
      case 11:
      return (props.value[objIndex20].number =props.value[objIndex20].number + props.getvalueall[obj20].number);
      case 12:
      return (props.value[objIndex21].number =props.value[objIndex21].number + props.getvalueall[obj21].number);
      case 13:
      return (props.value[objIndex22].number =props.value[objIndex22].number + props.getvalueall[obj22].number);
      case 14:
      return (props.value[objIndex23].number =props.value[objIndex23].number + props.getvalueall[obj23].number);
      case 15:
      return (props.value[objIndex24].number =props.value[objIndex24].number + props.getvalueall[obj24].number);
      case 16:
      return (props.value[objIndex25].number =props.value[objIndex25].number + props.getvalueall[obj25].number);
      case 17:
      return (props.value[objIndex26].number =props.value[objIndex26].number + props.getvalueall[obj26].number)
      case 18:
      return (props.value[objIndex27].number =props.value[objIndex27].number + props.getvalueall[obj27].number);
      case 19:
        return (props.value[objIndex28].number =props.value[objIndex28].number + props.getvalueall[obj28].number);
        case 20:
      return (props.value[objIndex29].number =props.value[objIndex29].number + props.getvalueall[obj29].number);
      case 21:
      return (props.value[objIndex30].number =props.value[objIndex30].number + props.getvalueall[obj30].number);
      case 22:
      return (props.value[objIndex31].number =props.value[objIndex31].number + props.getvalueall[obj31].number);
      case 23:
      return (props.value[objIndex32].number =props.value[objIndex32].number + props.getvalueall[obj32].number);
      case 24:
      return (props.value[objIndex33].number =props.value[objIndex33].number + props.getvalueall[obj33].number);
      case 25:
      return (props.value[objIndex34].number =props.value[objIndex34].number + props.getvalueall[obj34].number);
      case 26:
      return (props.value[objIndex35].number =props.value[objIndex35].number + props.getvalueall[obj35].number);
      case 27:
      return (props.value[objIndex36].number =props.value[objIndex36].number + props.getvalueall[obj36].number);
      case 28:
      return (props.value[objIndex37].number =props.value[objIndex37].number + props.getvalueall[obj37].number);
      case 29:
      return (props.value[objIndex38].number =props.value[objIndex38].number + props.getvalueall[obj38].number);
      case 30:
      return (props.value[objIndex39].number =props.value[objIndex39].number + props.getvalueall[obj39].number);
      case 31:
      return (props.value[objIndex40].number =props.value[objIndex40].number + props.getvalueall[obj40].number);
      case 32:
      return (props.value[objIndex41].number =props.value[objIndex41].number + props.getvalueall[obj41].number);
      case 33:
      return (props.value[objIndex42].number =props.value[objIndex42].number + props.getvalueall[obj42].number);
      case 34:
      return (props.value[objIndex43].number =props.value[objIndex43].number + props.getvalueall[obj43].number);
      case 35:
      return (props.value[objIndex44].number =props.value[objIndex44].number + props.getvalueall[obj44].number);
      case 36:
      return (props.value[objIndex45].number =props.value[objIndex45].number + props.getvalueall[obj45].number);
}
}else if(!props.Back && props.constant){
   switch (bet) {
          case "Green":
            return  props.value[objIndex0].number = props.value[objIndex].number + props.constant
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
    
            case 0:
             
            return (props.value[objIndex0].number = props.value[objIndex0].number + props.constant);
            case 1:
              return (props.value[objIndex10].number =props.value[objIndex10].number + props.constant);
              case 2:
            return (props.value[objIndex11].number =props.value[objIndex11].number + props.constant);
            case 3:
            return (props.value[objIndex12].number =props.value[objIndex12].number + props.constant);
            case 4:
            return (props.value[objIndex13].number =props.value[objIndex13].number + props.constant);
            case 5:
            return (props.value[objIndex14].number =props.value[objIndex14].number + props.constant);
            case 6:
            return (props.value[objIndex15].number =props.value[objIndex15].number + props.constant)
            case 7:
            return (props.value[objIndex16].number =props.value[objIndex16].number + props.constant);
            case 8:
            return (props.value[objIndex17].number =props.value[objIndex17].number + props.constant);
            case 9:
            return (props.value[objIndex18].number =props.value[objIndex18].number + props.constant);
            case 10:
            return (props.value[objIndex19].number =props.value[objIndex19].number + props.constant);
            case 11:
            return (props.value[objIndex20].number =props.value[objIndex20].number + props.constant);
            case 12:
            return (props.value[objIndex21].number =props.value[objIndex21].number + props.constant);
            case 13:
            return (props.value[objIndex22].number =props.value[objIndex22].number + props.constant);
            case 14:
            return (props.value[objIndex23].number =props.value[objIndex23].number + props.constant);
            case 15:
            return (props.value[objIndex24].number =props.value[objIndex24].number + props.constant);
            case 16:
            return (props.value[objIndex25].number =props.value[objIndex25].number + props.constant);
            case 17:
            return (props.value[objIndex26].number =props.value[objIndex26].number + props.constant)
            case 18:
            return (props.value[objIndex27].number =props.value[objIndex27].number + props.constant);
            case 19:
              return (props.value[objIndex28].number =props.value[objIndex28].number + props.constant);
              case 20:
            return (props.value[objIndex29].number =props.value[objIndex29].number + props.constant);
            case 21:
            return (props.value[objIndex30].number =props.value[objIndex30].number + props.constant);
            case 22:
            return (props.value[objIndex31].number =props.value[objIndex31].number + props.constant);
            case 23:
            return (props.value[objIndex32].number =props.value[objIndex32].number + props.constant);
            case 24:
            return (props.value[objIndex33].number =props.value[objIndex33].number + props.constant);
            case 25:
            return (props.value[objIndex34].number =props.value[objIndex34].number + props.constant);
            case 26:
            return (props.value[objIndex35].number =props.value[objIndex35].number + props.constant);
            case 27:
            return (props.value[objIndex36].number =props.value[objIndex36].number + props.constant);
            case 28:
            return (props.value[objIndex37].number =props.value[objIndex37].number + props.constant);
            case 29:
            return (props.value[objIndex38].number =props.value[objIndex38].number + props.constant);
            case 30:
            return (props.value[objIndex39].number =props.value[objIndex39].number + props.constant);
            case 31:
            return (props.value[objIndex40].number =props.value[objIndex40].number + props.constant);
            case 32:
            return (props.value[objIndex41].number =props.value[objIndex41].number + props.constant);
            case 33:
            return (props.value[objIndex42].number =props.value[objIndex42].number + props.constant);
            case 34:
            return (props.value[objIndex43].number =props.value[objIndex43].number + props.constant);
            case 35:
            return (props.value[objIndex44].number =props.value[objIndex44].number + props.constant);
            case 36:
            return (props.value[objIndex45].number =props.value[objIndex45].number + props.constant);
   }
}else if(props.Back && !props.constant){
  switch (bet) {
   

    case 0:
     
    return (props.value[objIndex0].number = props.value[objIndex0].number - 10);
    case 1:
      return (props.value[objIndex10].number =props.value[objIndex10].number - 10);
      case 2:
    return (props.value[objIndex11].number =props.value[objIndex11].number - 10);
    case 3:
    return (props.value[objIndex12].number =props.value[objIndex12].number - 10);
    case 4:
    return (props.value[objIndex13].number =props.value[objIndex13].number - 10);
    case 5:
    return (props.value[objIndex14].number =props.value[objIndex14].number - 10);
    case 6:
    return (props.value[objIndex15].number =props.value[objIndex15].number - 10)
    case 7:
    return (props.value[objIndex16].number =props.value[objIndex16].number - 10);
    case 8:
    return (props.value[objIndex17].number =props.value[objIndex17].number - 10);
    case 9:
    return (props.value[objIndex18].number =props.value[objIndex18].number - 10);
    case 10:
    return (props.value[objIndex19].number =props.value[objIndex19].number - 10);
    case 11:
    return (props.value[objIndex20].number =props.value[objIndex20].number - 10);
    case 12:
    return (props.value[objIndex21].number =props.value[objIndex21].number - 10);
    case 13:
    return (props.value[objIndex22].number =props.value[objIndex22].number - 10);
    case 14:
    return (props.value[objIndex23].number =props.value[objIndex23].number - 10);
    case 15:
    return (props.value[objIndex24].number =props.value[objIndex24].number - 10);
    case 16:
    return (props.value[objIndex25].number =props.value[objIndex25].number - 10);
    case 17:
    return (props.value[objIndex26].number =props.value[objIndex26].number - 10)
    case 18:
    return (props.value[objIndex27].number =props.value[objIndex27].number - 10);
    case 19:
      return (props.value[objIndex28].number =props.value[objIndex28].number - 10);
      case 20:
    return (props.value[objIndex29].number =props.value[objIndex29].number - 10);
    case 21:
    return (props.value[objIndex30].number =props.value[objIndex30].number - 10);
    case 22:
    return (props.value[objIndex31].number =props.value[objIndex31].number - 10);
    case 23:
    return (props.value[objIndex32].number =props.value[objIndex32].number - 10);
    case 24:
    return (props.value[objIndex33].number =props.value[objIndex33].number - 10);
    case 25:
    return (props.value[objIndex34].number =props.value[objIndex34].number - 10);
    case 26:
    return (props.value[objIndex35].number =props.value[objIndex35].number - 10);
    case 27:
    return (props.value[objIndex36].number =props.value[objIndex36].number - 10);
    case 28:
    return (props.value[objIndex37].number =props.value[objIndex37].number - 10);
    case 29:
    return (props.value[objIndex38].number =props.value[objIndex38].number - 10);
    case 30:
    return (props.value[objIndex39].number =props.value[objIndex39].number - 10);
    case 31:
    return (props.value[objIndex40].number =props.value[objIndex40].number - 10);
    case 32:
    return (props.value[objIndex41].number =props.value[objIndex41].number - 10);
    case 33:
    return (props.value[objIndex42].number =props.value[objIndex42].number - 10);
    case 34:
    return (props.value[objIndex43].number =props.value[objIndex43].number - 10);
    case 35:
    return (props.value[objIndex44].number =props.value[objIndex44].number - 10);
    case 36:
    return (props.value[objIndex45].number =props.value[objIndex45].number - 10);
} 
}else{
  switch (bet) {
     
    case 0:
     
    return (props.value[objIndex0].number = props.value[objIndex0].number - props.constant);
    case 1:
      return (props.value[objIndex10].number =props.value[objIndex10].number - props.constant);
      case 2:
    return (props.value[objIndex11].number =props.value[objIndex11].number - props.constant);
    case 3:
    return (props.value[objIndex12].number =props.value[objIndex12].number - props.constant);
    case 4:
    return (props.value[objIndex13].number =props.value[objIndex13].number - props.constant);
    case 5:
    return (props.value[objIndex14].number =props.value[objIndex14].number - props.constant);
    case 6:
    return (props.value[objIndex15].number =props.value[objIndex15].number - props.constant)
    case 7:
    return (props.value[objIndex16].number =props.value[objIndex16].number - props.constant);
    case 8:
    return (props.value[objIndex17].number =props.value[objIndex17].number - props.constant);
    case 9:
    return (props.value[objIndex18].number =props.value[objIndex18].number - props.constant);
    case 10:
    return (props.value[objIndex19].number =props.value[objIndex19].number - props.constant);
    case 11:
    return (props.value[objIndex20].number =props.value[objIndex20].number - props.constant);
    case 12:
    return (props.value[objIndex21].number =props.value[objIndex21].number - props.constant);
    case 13:
    return (props.value[objIndex22].number =props.value[objIndex22].number - props.constant);
    case 14:
    return (props.value[objIndex23].number =props.value[objIndex23].number - props.constant);
    case 15:
    return (props.value[objIndex24].number =props.value[objIndex24].number - props.constant);
    case 16:
    return (props.value[objIndex25].number =props.value[objIndex25].number - props.constant);
    case 17:
    return (props.value[objIndex26].number =props.value[objIndex26].number - props.constant)
    case 18:
    return (props.value[objIndex27].number =props.value[objIndex27].number - props.constant);
    case 19:
      return (props.value[objIndex28].number =props.value[objIndex28].number - props.constant);
      case 20:
    return (props.value[objIndex29].number =props.value[objIndex29].number - props.constant);
    case 21:
    return (props.value[objIndex30].number =props.value[objIndex30].number - props.constant);
    case 22:
    return (props.value[objIndex31].number =props.value[objIndex31].number - props.constant);
    case 23:
    return (props.value[objIndex32].number =props.value[objIndex32].number - props.constant);
    case 24:
    return (props.value[objIndex33].number =props.value[objIndex33].number - props.constant);
    case 25:
    return (props.value[objIndex34].number =props.value[objIndex34].number - props.constant);
    case 26:
    return (props.value[objIndex35].number =props.value[objIndex35].number - props.constant);
    case 27:
    return (props.value[objIndex36].number =props.value[objIndex36].number - props.constant);
    case 28:
    return (props.value[objIndex37].number =props.value[objIndex37].number - props.constant);
    case 29:
    return (props.value[objIndex38].number =props.value[objIndex38].number - props.constant);
    case 30:
    return (props.value[objIndex39].number =props.value[objIndex39].number - props.constant);
    case 31:
    return (props.value[objIndex40].number =props.value[objIndex40].number - props.constant);
    case 32:
    return (props.value[objIndex41].number =props.value[objIndex41].number - props.constant);
    case 33:
    return (props.value[objIndex42].number =props.value[objIndex42].number - props.constant);
    case 34:
    return (props.value[objIndex43].number =props.value[objIndex43].number - props.constant);
    case 35:
    return (props.value[objIndex44].number =props.value[objIndex44].number - props.constant);
    case 36:
    return (props.value[objIndex45].number =props.value[objIndex45].number - props.constant);
}
}

      
     
}

  if (!localStorage.getItem("token")) {
    window.location.pathname = "/login";
  } else {
    return (
      <Fragment>
        <div className='home homepage '>
          <div className='bg-white '>
            <div className='row'>
              <div className='col-lg-9'>
                <div className='row'>
                  <div className='col-lg-12'>
                    <NavBar
                      setshopAdminKuno={(value) =>
                        props.setshopAdminKuno(value)
                      }
                      shopAdminKuno={props.shopAdminKuno}
                      kunoActive={props.kunoActive}
                      getValue={() => props.getValue()}
                      payTable={props.payTable}
                      setPayTable={(value) => props.setPayTable(value)}
                      shopAdmin={props.shopAdmin}
                      setshopAdmin={(value) => props.setshopAdmin(value)}
                      timer={timer}
                      id={() => props.match.params.id}
                    />
                  </div>
                  {disable ? (
                    <Fragment>
                      {" "}
                      <div className='col-lg-12 opacity-75 opacity-50' style={{backgroundColor:"rgba(0,24,100,0.9)",paddingTop:"25%",paddingBottom:"25%"}}>
                      <div >
                      <div className='center' >
                            <FaIcons.FaHandPaper  color='white' size={30}/>
                          </div>
                     
                        <div className='center'>
                          {/* <SpinStretch
                            color='#ff5b00'
                            width='100px'
                            height='100px'
                            duration='1s'
                           
                            backgroundColor="rgba(0,24,100,0.9)"
                          /> */}
                         
                          
                          <div className='  ml-1' style={{color:"white",fontSize:"150%"}}> MARKET CLOSE </div>
                        </div>
                        </div>
                      </div>
                   
                    </Fragment>
                  ) : (
                    <Fragment>
                      {" "}
                      <div className='col-lg-6 '>
                        <div className='row'>
                          <h2 className='titleGame'>Exact Number</h2>
                          <div style={{paddingTop:"0.2%"}} class='btn-group  text-white'>
                          <button
                              type='button'
                              style={{backgroundColor:"#4CAF50"}}
                              className={"btn  customBtn2 mx-1"}
                           
                              onClick={() => {
                                let currentBet;
                                if (selectedBets.includes(0)) {
                                  
                                  addvalue(0);
                                  props.setBetvalue(0)
                                 
                                } else {
                                  if(props.constant){
                                  
                                    getconstant(0)
                                    currentBet = selectedBets;
                                  currentBet.push(0);
                                 
                                  selectBet(currentBet);
                                    props.setBetvalue(0)
                                  }else{
                                    currentBet = selectedBets;
                                  currentBet.push(0);
                                 
                                  selectBet(currentBet);
                                  props.setBetvalue(0)
                                  }
                                 
                                  // 
                                }
                                 const add = props.value[props.value.findIndex((obj => obj.id === 0))].number;
                             
                                  props.stakeValue[0] = selectedBets.includes(0) && add;
                                  props.totalbet[0] =  selectedBets.includes(0) && props.stakeValue[0]* odds[0];
                               
                               
                              }}

                            >

                              <div
                                className={
                                  selectedBets.includes(0)
                                    ? "bg-warning text-black rounded-circle"
                                    : ""
                                }
                              >
                                {" "}
                                {0}
                              </div>
                            </button>
                            
                          </div>
                          <div style={{paddingTop:"0.3%"}} class='btn-group  text-white'>
                           
                           {row1Color.map((color, index) => {
                             return (
                               <button
                                 type='button'
                                 style={{ marginLeft:"0.3%"}}
                                 className={
                                   "btn " + color + " customBtn2 "
                                 }
                               l  onClick={() => {
                                  let currentBet;
                                  if (selectedBets.includes(index + 1)) {
                                    addvalue(index + 1);
                                    props.setBetvalue(index + 1)
                                    
                                  } else {
                                    if(props.constant){
                                      getconstant(index + 1);
                                      currentBet = selectedBets;
                                      currentBet.push(index + 1);
                                     
                                      selectBet(currentBet);
                                      props.setBetvalue(index + 1)
                                    }else{
                                      currentBet = selectedBets;
                                      currentBet.push(index + 1);
                                     
                                      selectBet(currentBet);
                                      props.setBetvalue(index + 1)
                                    }
                                   
                                    // 
                                  }
                                  const add = props.value[props.value.findIndex((obj => obj.id === index + 11))].number;
                               
                                  props.stakeValue[index + 11] = add;
                                  props.totalbet[index + 11] =  props.stakeValue[index + 11]* odds[0];
                                }}

                                
                               >
                                 <div
                                 
                                   className={
                                     selectedBets.includes(index + 1)
                                       ? "bg-warning text-black rounded-circle"
                                       : ""
                                   }
                                 >
                                   {" "}
                                   {index + 1}
                                 </div>
                               </button>
                             );
                           })}
                         </div>
                 
                         <div style={{paddingTop:"0.2%"}} className='btn-group  text-white'>
                          {row2Color.map((color, index) => {
                            return (
                              <button
                                type='button'
                                style={{ marginLeft:"0.3%"}}
                                className={
                                  "btn " + color + " customBtn2"
                                }
                                onClick={() => {
                                  let currentBet;
                                  if (selectedBets.includes(index + 7)) {
                                    addvalue(index + 7);
                                    props.setBetvalue(index + 7)
                                    
                                  } else {
                                    if(props.constant){
                                      getconstant(index + 7);
                                      currentBet = selectedBets;
                                      currentBet.push(index + 7);
                                     
                                      selectBet(currentBet);
                                      props.setBetvalue(index + 7)
                                    }else{
 
                                      currentBet = selectedBets;
                                      currentBet.push(index + 7);
                                     
                                      selectBet(currentBet);
                                      props.setBetvalue(index + 7)
                                    }
                                   
                                    // 
                                  }
                                  const add = props.value[props.value.findIndex((obj => obj.id === index + 17))].number;
                               
                                  props.stakeValue[index + 17] = add;
                                 
                                  props.totalbet[index + 17] =  props.stakeValue[index + 17]* odds[0];
                                 
                                }}
                              >
                                <div
                                  className={
                                    selectedBets.includes(index + 7)
                                      ? "bg-warning text-black rounded-circle"
                                      : ""
                                  }
                                >
                                  {" "}
                                  {index + 7}
                                </div>{" "}
                              </button>
                            );
                          })}
                        </div>
                         
                       <div style={{paddingTop:"0.2%"}} className='btn-group  text-white'>
                            {row3Color.map((color, index) => {
                              return (
                                <button
                                style={{ marginLeft:"0.3%"}}
                                  type='button'
                                  className={
                                    "btn " + color + " customBtn2 "
                                  }
                                  onClick={() => {
                                    let currentBet;
                                    if (selectedBets.includes(index + 13)) {
                                      addvalue(index + 13);
                                      props.setBetvalue(index + 13)
                                      
                                    } else {
                                      if(props.constant){
                                        getconstant(index + 13);
                                        currentBet = selectedBets;
                                        currentBet.push(index + 13);
                                       
                                        selectBet(currentBet);
                                        props.setBetvalue(index + 13)
                                      }else{
                                        currentBet = selectedBets;
                                        currentBet.push(index + 13);
                                       
                                        selectBet(currentBet);
                                        props.setBetvalue(index + 13)
                                      }
                                     
                                      // 
                                    }
                                    const add = props.value[props.value.findIndex((obj => obj.id === index + 23))].number;
                               
                                  props.stakeValue[index + 23] = add;
                                  props.totalbet[index + 23] =  props.stakeValue[index + 23]* odds[0];
                                  }}
                                >
                                  <div
                                    className={
                                      selectedBets.includes(index + 13)
                                        ? "bg-warning text-black rounded-circle"
                                        : ""
                                    }
                                  >
                                    {" "}
                                    {index + 13}
                                  </div>{" "}
                                </button>
                              );
                            })}
                          </div>
                      
                          <div style={{paddingTop:"0.2%"}} className='btn-group  text-white'>
                            {row4Color.map((color, index) => {
                              return (
                                <button
                                  type='button'
                                  style={{ marginLeft:"0.3%"}}
                                  className={
                                    "btn " + color + " customBtn2"
                                  }
                                  onClick={() => {
                                    let currentBet;
                                    if (selectedBets.includes(index + 19)) {
                                      addvalue(index + 19);
                                      props.setBetvalue(index + 19)
                                      
                                    } else {
                                      if(props.constant){
                                        getconstant(index + 19);
                                        currentBet = selectedBets;
                                        currentBet.push(index + 19);
                                       
                                        selectBet(currentBet);
                                        props.setBetvalue(index + 19)
                                      }else{
                                        currentBet = selectedBets;
                                        currentBet.push(index + 19);
                                       
                                        selectBet(currentBet);
                                        props.setBetvalue(index + 19)
                                      }
                                      
                                      // 
                                    }
                                    const add = props.value[props.value.findIndex((obj => obj.id === index + 29))].number;
                               
                                  props.stakeValue[index + 29] = add;
                                  props.totalbet[index + 29] =  props.stakeValue[index + 29]* odds[0];
                                   
                                  }}
                                >
                                  <div
                                    className={
                                      selectedBets.includes(index + 19)
                                        ? "bg-warning text-black rounded-circle"
                                        : ""
                                    }
                                  >
                                    {" "}
                                    {index + 19}
                                  </div>{" "}
                                </button>
                              );
                            })}
                          </div>
                         
                          <div style={{paddingTop:"0.3%"}} className='btn-group text-white'>
                            {row5Color.map((color, index) => {
                              return (
                                <button
                                  type='button'
                                  style={{ marginLeft:"0.3%"}}
                                  className={
                                    "btn " + color + " customBtn2 "
                                  }
                                  onClick={() => {
                                    let currentBet;
                                    if (selectedBets.includes(index + 25)) {
                                      addvalue(index + 25);
                                      props.setBetvalue(index + 25)
                                      
                                    } else {
                                      if(props.constant){
                                        getconstant(index + 25);
                                        currentBet = selectedBets;
                                        currentBet.push(index + 25);
                                       
                                        selectBet(currentBet);
                                        props.setBetvalue(index + 25)
                                      }else{
                                        currentBet = selectedBets;
                                        currentBet.push(index + 25);
                                       
                                        selectBet(currentBet);
                                        props.setBetvalue(index + 25)
                                      }
                                      
                                      // 
                                    }
                                    const add = props.value[props.value.findIndex((obj => obj.id === index + 35))].number;
                               
                                  props.stakeValue[index + 35] = add;
                                  props.totalbet[index + 35] =  props.stakeValue[index + 35]* odds[0];
                                  }}
                                >
                                  <div
                                    className={
                                      selectedBets.includes(index + 25)
                                        ? "bg-warning text-black rounded-circle"
                                        : ""
                                    }
                                  >
                                    {" "}
                                    {index + 25}
                                  </div>{" "}
                                </button>
                              );
                            })}
                          </div>
                       
                          <div style={{paddingTop:"0.2%"}} className='btn-group text-white'>
                            {row6Color.map((color, index) => {
                              return (
                                <button
                                  type='button'
                                  style={{ marginLeft:"0.3%"}}
                                  className={
                                    "btn " + color + " customBtn2 "
                                  }
                                  onClick={() => {
                                    let currentBet;
                                    if (selectedBets.includes(index + 31)) {
                                      addvalue(index + 31);
                                      props.setBetvalue(index + 31)
                                      
                                    } else {
                                      if(props.constant){
                                        getconstant(index + 31);
                                        currentBet = selectedBets;
                                        currentBet.push(index + 31);
                                       
                                        selectBet(currentBet);
                                        props.setBetvalue(index + 31)
                                      }else{
                                        currentBet = selectedBets;
                                        currentBet.push(index + 31);
                                       
                                        selectBet(currentBet);
                                        props.setBetvalue(index + 31)
                                      }
                                     
                                      // 
                                    }
                                    const add = props.value[props.value.findIndex((obj => obj.id === index + 41))].number;
                               
                                  props.stakeValue[index + 41] = add;
                                  props.totalbet[index + 41] =  props.stakeValue[index + 41]* odds[0];
                                    // const add = props.value.filter(v => v.id == index + 31  ).number;
                                   
                                    // props.stakeValue[index + 31] = props.stakeValue[index + 31] ? props.stakeVaue[index + 31] + add : add;
                                  }}
                                >
                                  <div
                                    className={
                                      selectedBets.includes(index + 31)
                                        ? "bg-warning text-black rounded-circle"
                                        : ""
                                    }
                                  >
                                    {" "}
                                    {index + 31}
                                  </div>{" "}
                                </button>
                              );
                            })}
                          </div>
                        
                         
                        </div>
                        <div className='row'>
                          <BottomTabs />
                        </div>
                      </div>
                      <div className='col-lg-6 '>
                        <Tabs
                        odds={odds}
                         totalbet={props.totalbet}
                 setStakeValue ={(value)=>props.setStakeValue(value)}
                 stakeValue={props.stakeValue}
                          setBetvalue = {(value)=>props.setBetvalue(value)}
                        setBack = {(value)=>props.setBack(value)}
                        Back={props.Back}
                          setConstant={(value)=> props.setConstant(value)}
                          constant = {props.constant}
                          selectedBet={selectedBets}
                          value={props.value}
                          selectBet={(value) => selectBet(value)}
                          getvalueall ={props.getvalueall}
                        />
                      </div>
                    </Fragment>
                  )}
                </div>
              </div>

              <div className='col-lg-3 '>
                <RightSideBar
                   totalbet={props.totalbet}
                 setStakeValue ={(value)=>props.setStakeValue(value)}
                 stakeValue={props.stakeValue}
                selectStack={(value)=>props.selectStack(value)}
                selectedStack={props.selectedStack}
                setBack = {(value)=>props.setBack(value)}
                Back={props.back}
                setBetvalue = {(value)=>props.setBetvalue(value)}
              betvalue={props.betvalue}
                  setshopAdmin={(value) => props.setshopAdmin(value)}
                  disable={disable}
                  setDisable={(value) => setDisable(value)}
                  setValue={(value) => props.setValue(value)}
                  getValue={() => props.getValue()}
                  stakeval ={(value)=>props.stakeval(value)}
                  selectedBets={selectedBets}
                  setStatus={(value) => props.setStatus(value)}
                  selectBets={(value) => selectBet(value)}
                  trigger={props.trigger}
                  setTrigger={(value) => props.setTrigger(value)}
                  ticketID={props.ticketID}
                  ticketStatuss={(value)=>  props.ticketStatuss(value)}
                  setTicketID={(value) => props.setTicketID(value)}
                  odds={odds}
                  setConstant={(value)=> props.setConstant(value)}
                  constant = {props.constant}
                  setgetvalueall={(value)=>props.setgetvalueall(value)}
              getvalueall ={props.getvalueall}
                  value={props.value}
                  setValues={(value)=>props.setValues(value)}
                  setTotal={(value) => props.setTotal(value)}
                  setvalue={(value) => props.setvalue(value)}
                  total={props.total}
                  maxWin={props.maxWin}
                  setStake={(value)=> props.setStake(value)}
                  stakevalue={props.stakevalue}
                  setstack = {(value)=>props.setstack(value)}
                  getstakes={props.getstakes}
                stack = {props.stack}
                setvalue0={(value)=>props.setvalue0(value)}
              getvalue0={props.getvalue0}
                />
              </div>
            </div>
            <div className='row'>
              <Bottom />
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}

export default Home;
