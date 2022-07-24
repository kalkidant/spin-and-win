import * as React from "react";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import { Outlet, Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import "../../../Style/main.css";
import "./navmain.css"
export default function NavMain() {
  const history = useNavigate();
 const role = localStorage.Role
 console.log("Role",role)
  return localStorage.getItem("AdminToken") === "false" ? (
    ""
  ) :  (
    <div id="nav">
    <ul class="navigation">
      {(role === "superadmin" || role === "agent")&&(   <li class="list-inline-item"><a id="menu-home">Home</a></li>)}
 {(role === "superadmin")&&(<li class="list-inline-item"><a 
        onClick={() => {
          history("/agents");
        }}
    id="menu-home">Agent</a></li>)}
    {(role==="superadmin")&&(<li class="list-inline-item"><a
         onClick={() => {
          history("/shops");
        }}
      
    id="menu-home">Shop</a></li>)}
    {(role === "superadmin" || role === "agent")&&(  <li class="list-inline-item" onClick={()=>{
        history("/betslip")
      }}><a id="menu-home">BetSlip</a></li>)}
    {(role === "superadmin")&&(<li class="list-inline-item"><a id="menu-home">Accounting</a></li>)}
    {(role === "superadmin" || role === "agent")&&( <li class="list-inline-item"><a
         onClick={() => {
          history("/report");
        }}
    id="menu-home">Report</a></li>)}
   {(role === "superadmin")&&(<li class="list-inline-item"><a id="menu-home">Administration</a></li>)}
    
    
</ul>
</div>
    // <ButtonGroup
    //   variant='contained'
    //   aria-label='outlined  button group'
    //   color='secondary'
    //   fullWidth
    // >
    //   <Button>Home</Button>
    //   <Button
    //     onClick={() => {
    //       history("/agents");
    //     }}
    //   >
    //     Agent
    //   </Button>
    //   <Button
    //     onClick={() => {
    //       history("/shops");
    //     }}
    //   >
    //     Shop
    //   </Button>
    //   <Button>Permission</Button>
    //   <Button>BetSlip</Button>
    //   <Button
    //     onClick={() => {
    //       history("/report");
    //     }}
    //   >
    //     Report
    //   </Button>
    //   <Button>Administration</Button>
    // </ButtonGroup>
  ) 
}
