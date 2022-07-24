import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import { useState } from "react";
import "./App.css";
import TicketCheck from "./Components/ticketCheck";
import PayTable from "./Components/payTable";
import TerminalCheck from "./Components/terminalCheck";
import LogIn from "./Components/logIn";
import Status from "./Components/status";
import Kuno from "./Pages/kuno";
import AdminShopKuno from "./Components/shopAdminKuno";
import AdminShop from "./Components/shopAdmin";

import Cards from "./Pages/cards";
import { getCashierBalance, getGameTypes } from "./Functions/requests";
import ModalTicketCheck from "./Components/ModalTicketCheck";
import ScanStatus from "./Components/scanStatus";
import ScanHome from "./Pages/scanHome";
import StakeModal from "./Components/stakeModal";
function App() {
  const [stake, setStake] = useState(10);
  const [getvalue0, setvalue0] = useState(10);
  const [stakes, setStakes] = useState(10);
  const  [constant, setConstant] = useState("");
  const [stakeValue, setStakeValues] = useState({})
 const [totalbet, setTotalbet] = useState({})

  const [betvalue,setBetvalue] = useState("");
  const [back,setBack] = useState(false);
  const [selectedStack, selectStack] = useState([]);
  const [getvalueall, setgetvalueall] = useState([{id:0,number:10}, {id:1,number:10}, {id:2,number:10}, 
    {id:3,number:10}, {id:4,number:10},{id:5,number:10},{id:6,number:10},
    {id:7,number:10},{id:8,number:10},{id:9,number:10},{id:10,number:10},
    {id:11,number:10},{id:12,number:10},{id:13,number:10},{id:14,number:10},{id:15,number:10},{id:16,number:10},{id:17,number:10},
    {id:18,number:10},{id:19,number:10},{id:20,number:10},{id:21,number:10},{id:22,number:10},{id:23,number:10},
    {id:24,number:10},{id:25,number:10},{id:26,number:10},{id:27,number:10},{id:28,number:10},{id:29,number:10},
    {id:30,number:10},{id:31,number:10},{id:32,number:10},{id:33,number:10},{id:34,number:10},{id:35,number:10},
    {id:36,number:10},{id:37,number:10},{id:38,number:10},{id:39,number:10},{id:40,number:10},{id:41,number:10},
    {id:42,number:10},{id:43,number:10},{id:44,number:10},{id:45,number:10},{id:46,number:10}
  ]);
  const [values, setvalu] = useState([{id:0,number:10}, {id:1,number:10}, {id:2,number:10}, 
    {id:3,number:10}, {id:4,number:10},{id:5,number:10},{id:6,number:10},
    {id:7,number:10},{id:8,number:10},{id:9,number:10},{id:10,number:10},
    {id:11,number:10},{id:12,number:10},{id:13,number:10},{id:14,number:10},{id:15,number:10},{id:16,number:10},{id:17,number:10},
    {id:18,number:10},{id:19,number:10},{id:20,number:10},{id:21,number:10},{id:22,number:10},{id:23,number:10},
    {id:24,number:10},{id:25,number:10},{id:26,number:10},{id:27,number:10},{id:28,number:10},{id:29,number:10},
    {id:30,number:10},{id:31,number:10},{id:32,number:10},{id:33,number:10},{id:34,number:10},{id:35,number:10},
    {id:36,number:10},{id:37,number:10},{id:38,number:10},{id:39,number:10},{id:40,number:10},{id:41,number:10},
    {id:42,number:10},{id:43,number:10},{id:44,number:10},{id:45,number:10},{id:46,number:10}
  ]);
  const [value, setValue] = useState("");
  const [bets, setBet] = useState({ bets: "none" });
  const [ticketCheck, setTicketCheck] = useState(false);
  const [payTable, setPayTable] = useState(false);
  const [shopAdmin, setshopAdmin] = useState(false);
  const [shopAdminKuno, setshopAdminKuno] = useState(false);
  const [stackValue, setstackValue] = useState(false);
  const [ticketID, setTicketID] = useState(null);
  const [total, setTotal] = useState(0);
const [scanstatus,setscanStatus]=useState(false)
  const [maxWin, setMaxWin] = useState(50000);
  const [status, setStatus] = useState(false);
  const [kunoActive, setKunoActive] = useState(false);
  const [gameTypeKuno, setGameTypeKuno] = useState("allIn");
  const [ticketStatus, setticketStatus] = useState("");

  //stake function

  const setStakeValue = (value) => {
    setStake(value);
  };
  const getStake = () => {
    return stake;
  };
  //bets function

  const getBets = () => {
    return bets;
  };
  const setBets = (bet) => {
    setBet(bet);
  };
  //getCashierBalance
  getCashierBalance();
  //game types
  getGameTypes();
  return (
    <>
      <Router>
        <TicketCheck
          trigger={ticketCheck}
          setTrigger={(value) => setTicketCheck(value)}
          ticketID={ticketID}
          setTicketID={(value) => setTicketID(value)}
          setStatus={(value) => setStatus(value)}
        />
          <ModalTicketCheck
          trigger={ticketCheck}
          setTrigger={(value) => setTicketCheck(value)}
          ticketID={ticketID}
          setTicketID={(value) => setTicketID(value)}
          setStatus={(value) => setStatus(value)}
          ticketStatus={ticketStatus}
        />
        <StakeModal
        
        setvalue={(value)=> setValue(value)}
        setvalu ={(value)=>setvalu(value)}
        values={values}
        />
        <PayTable
          payTable={payTable}
          setPayTable={(value) => setPayTable(value)}
        />
        <Status
          status={status}
          setStatus={(value) => setStatus(value)}
          ticketID={ticketID}
          ticketStatus={ticketStatus}
          
        />
         <ScanStatus
          scanstatus={scanstatus}
          setscanStatus={(value) => setscanStatus(value)}
         
          
        />

        <AdminShop
          shopAdmin={shopAdmin}
          setshopAdmin={(value) => setshopAdmin(value)}
        />

        <AdminShopKuno
          shopAdminKuno={shopAdminKuno}
          setshopAdminKuno={(value) => setshopAdminKuno(value)}
        />

        <Routes>
          <Route
            path='/'
            element={
              <Home
              setStakeValue ={(value)=>setStakeValue(value)}
              stakeValue={stakeValue}
              totalbet={totalbet}
              selectStack={(value)=>selectStack(value)}
              selectedStack={selectedStack}
              setBetvalue = {(value)=>setBetvalue(value)}
              betvalue={betvalue}
              setBack = {(value)=>setBack(value)}
              Back={back}
              setgetvalueall={(value)=>setgetvalueall(value)}
              setConstant={(value)=> setConstant(value)}
              constant = {constant}
              getvalueall ={getvalueall}
              setvalue0={(value)=>setvalue0(value)}
              getvalue0={getvalue0}
                shopAdminKuno={shopAdminKuno}
                setstack = {(value)=>setstackValue(value)}
                stakeval ={(value)=>setStakes(value)}
                stack = {stackValue}
                value ={values}
                stakevalue={value}
                setshopAdminKuno={(value) => setshopAdminKuno(value)}
                kunoActive={kunoActive}
                setKunoActive={(value) => setKunoActive(value)}
                setValue={(values) => setStakeValue(value)}
                getValue={() => getStake()}
                getstakes={stakes}
                setBet={(value) => setBets(value)}
                getBet={() => getBets()}
                trigger={ticketCheck}
                ticketStatuss={(value)=>  setticketStatus(value)}
                setTrigger={(value) => setTicketCheck(value)}
                setValues={(value) => setValue(value)}
                 setStake ={(value)=>setvalu(value)}
                payTable={payTable}
                setPayTable={(value) => setPayTable(value)}
                shopAdmin={shopAdmin}
                setshopAdmin={(value) => setshopAdmin(value)}
                ticketID={ticketID}
                setTicketID={(value) => setTicketID(value)}
                setTotal={(value) => setTotal(value)}
                total={total}
                maxWin={maxWin}
                setStatus={(value) => setStatus(value)}
              />
            }
          />
           <Route
            path='/st/:eventid'
            
            element={
              <ScanHome
                shopAdminKuno={shopAdminKuno}
                setshopAdminKuno={(value) => setshopAdminKuno(value)}
                kunoActive={kunoActive}
                setKunoActive={(value) => setKunoActive(value)}
                setValue={(value) => setStakeValue(value)}
                getValue={() => getStake()}
                setBet={(value) => setBets(value)}
                getBet={() => getBets()}
                trigger={ticketCheck}
                ticketStatuss={(value)=>  setticketStatus(value)}
                setTrigger={(value) => setTicketCheck(value)}
                 
                payTable={payTable}
                setPayTable={(value) => setPayTable(value)}
                shopAdmin={shopAdmin}
                setshopAdmin={(value) => setshopAdmin(value)}
                ticketID={ticketID}
                setTicketID={(value) => setTicketID(value)}
                setTotal={(value) => setTotal(value)}
                total={total}
                maxWin={maxWin}
                setStatus={(value) => setStatus(value)}
                setscanStatus={(value) => setscanStatus(value)}
              />
            }
          />
          <Route
            path='/kuno'
            element={
              <Kuno
                gameTypeKuno={gameTypeKuno}
                setGameTypeKuno={(value) => setGameTypeKuno(value)}
                shopAdminKuno={shopAdminKuno}
                setshopAdminKuno={(value) => setshopAdminKuno(value)}
                kunoActive={kunoActive}
                setKunoActive={(value) => setKunoActive(value)}
                setValue={(value) => setStakeValue(value)}
                getValue={() => getStake()}
                setBet={(value) => setBets(value)}
                getBet={() => getBets()}
                trigger={ticketCheck}
                setTrigger={(value) => setTicketCheck(value)}
                payTable={payTable}
                setPayTable={(value) => setPayTable(value)}
                shopAdmin={shopAdmin}
                setshopAdmin={(value) => setshopAdmin(value)}
                ticketID={ticketID}
                setTicketID={(value) => setTicketID(value)}
                setTotal={(value) => setTotal(value)}
                total={total}
                maxWin={maxWin}
                setStatus={(value) => setStatus(value)}
              />
            }
          />
          <Route
            path='/cards'
            element={
              <Cards
                gameTypeKuno={gameTypeKuno}
                setGameTypeKuno={(value) => setGameTypeKuno(value)}
                shopAdminKuno={shopAdminKuno}
                setshopAdminKuno={(value) => setshopAdminKuno(value)}
                kunoActive={kunoActive}
                setKunoActive={(value) => setKunoActive(value)}
                setValue={(value) => setStakeValue(value)}
                getValue={() => getStake()}
                setBet={(value) => setBets(value)}
                getBet={() => getBets()}
                trigger={ticketCheck}
                setTrigger={(value) => setTicketCheck(value)}
                payTable={payTable}
                setPayTable={(value) => setPayTable(value)}
                shopAdmin={shopAdmin}
                setshopAdmin={(value) => setshopAdmin(value)}
                ticketID={ticketID}
                setTicketID={(value) => setTicketID(value)}
                setTotal={(value) => setTotal(value)}
                total={total}
                maxWin={maxWin}
              />
            }
          />
          <Route
            path='/:id'
            exact
            element={
              <Home
                setValue={(value) => setStakeValue(value)}
                getValue={() => getStake()}
                setBet={(value) => setBets(value)}
                getBet={() => getBets()}
                trigger={ticketCheck}
                setTrigger={(value) => setTicketCheck(value)}
                payTable={payTable}
                setPayTable={(value) => setPayTable(value)}
                shopAdmin={shopAdmin}
                setshopAdmin={(value) => setshopAdmin(value)}
                ticketID={ticketID}
                setTicketID={(value) => setTicketID(value)}
                setTotal={(value) => setTotal(value)}
                total={total}
                maxWin={maxWin}
                setStatus={(value) => setStatus(value)}
                kunoActive={kunoActive}
                setKunoActive={(value) => setKunoActive(value)}
              />
            }
          />
          <Route path='/login' exact element={<LogIn />} />
          <Route path='/terminal' exact element={<TerminalCheck />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
