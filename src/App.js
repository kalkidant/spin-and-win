import "./App.css";
import { createTheme, ThemeProvider, styled } from "@mui/material/styles";
import Navbar from "./Component/Pages/Navigation/navbar";
import { grey, orange, red } from "@mui/material/colors";
import Home from "./Component/Pages/home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Terminal from "./Component/Pages/terminal";
import Login from "./Component/Pages/login";
import Reports from "./Component/Pages/reports";
import Shops from "./Component/Pages/shop";
import Agents from "./Component/Pages/agent";
import ShopDetail from "./Component/Pages/shopDetail";
import { useState } from "react";
import Cashier from "./Component/Pages/cashier";
import AgentDetail from "./Component/Pages/agentDetail";
import ShopUpsert from "./Component/Pages/Popups/shopUpsert";
import ShopUpdate from "./Component/Pages/Popups/shopUpdate";
import Terminals from "./Component/Pages/terminals";
import Cashiers from "./Component/Pages/cashiers";
import BetSlip from "./Component/Pages/betslip";

const theme = createTheme({
  palette: {
    primary: {
      main: grey[300],
    },
    secondary: {
      main: "#3091ff",
    },
    white: {
      main: "#ffffff",
    },
    blue: {
      main: "",
    },
    colorDanger: {
      main: orange[500],
    },
    red: {
      main: red[500],
    },
    black: {
      main: grey[600],
    },
  },
});
function App() {
  const [shopID, setShopID] = useState(null);
  const [shop, setShop] = useState("");
  const [agent,setAgent] = useState("")
const [select,setSelect]=useState([])
console.log("select",select)
  return (
    <ThemeProvider theme={theme}>
      <div className='App'>
        <BrowserRouter>
          

          <Routes>
          <Route
              path='/shopinsert'
              element={<ShopUpdate shopID={shopID} />}
            />
             <Route path='/cashiers' element={<Cashiers  />}/>
             <Route
              path='/terminals'
              element={<Terminals shop={shop} />}
            />
            <Route path='/home' element={<Home />}></Route>
            <Route path='/terminal' element={<Terminal shop={shop} />} />
            <Route path='/report' element={<Reports />} />
            <Route path='/betslip' element={<BetSlip />} />
            <Route path='/agentDetail'  element={<AgentDetail agent={agent} select={select} setSelect={(value) => setSelect(value)}/>}/>} />
            <Route
              path='/shops'
              element={<Shops setShopID={(value) => setShopID(value)} setShop={(value) => setShop(value)} />}
            />
            <Route path='/agents'  element={<Agents  select={select}  setAgent={(value) => setAgent(value)}/>}  />
            <Route path='/' element={<Login />} />
            <Route path='/cashier' element={<Cashier shopID={shopID} shop={shop} />} />

            <Route
              path='/shopDetail'
              element={<ShopDetail shopID={shopID} shop={shop} />}
            />
          </Routes>
        </BrowserRouter>
      </div>
    </ThemeProvider>
  );
}

export default App;
