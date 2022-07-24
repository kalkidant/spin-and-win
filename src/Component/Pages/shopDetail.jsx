import React, { useState, useEffect } from "react";
import Typography from "@mui/material/Typography";
import "../../Style/main.css";
import { Box, Button, ButtonGroup } from "@mui/material";
import Users from "./users";
import { useNavigate } from "react-router-dom";
import ShopUpsert from "./Popups/shopUpsert";
import ShopUpdate from "./Popups/shopUpdate";
import "../../Style/main.css";
import "reactjs-popup/dist/index.css";
import "./Navigation/searchPanal.css"
import "./agent.css"
import Navbar from "./Navigation/navbar";
export default function ShopDetail(props) {
  const history = useNavigate();

  useEffect(() => {
    if (localStorage.getItem("AdminToken") === "false") {
      console.log(localStorage.getItem("AdminToken"));

      history("/login");
    }
  }, []);
  return (
    <>
    <Navbar/>
    <div  className="main">
    <div className="content-title1">
    Shop [ {props.shopID} ] : ONLINE
    </div>
    
    <div id="content">
    <ul class="navbarr">
  <li class="list-inline-item listt1"><span className="aa" >Details</span></li>
  {/* <li class="list-inline-item listt"><span className="aa">Commissions</span></li>
  <li class="list-inline-item listt"><span className="aa">Product Comm</span></li>
  <li class="list-inline-item listt"><span className="aa">Limits</span></li> */}
  <li class="list-inline-item listt"><span className="aa">Permissions</span></li>
  {/* <li class="list-inline-item listt"><span className="aa">Products</span></li> */}
  <li class="list-inline-item listt"><span className="aa"  onClick={() => {
      
              history("/terminal");
            }}>Terminal</span></li>
  {/* <li class="list-inline-item listt"><span className="aa">Displays</span></li> */}
  <li class="list-inline-item listt"><span className="aa"
              onClick={() => {
              history("/cashier");
            }}>Staff</span></li>
  {/* <li class="list-inline-item listt"><span className="aa">Locations</span></li> */}
</ul>
<ShopUpdate name={props.shopID} shop={props.shop} />
</div>
  </div>
  </>
    // <div sx={{ m: 3 }}>
    //   <Box
    //     fullwidthPaper
    //     alignItems='center'
    //     sx={{
    //       width: "95%",
    //       height: 300,
    //       p: 2,
    //     }}
    //   >
    //     {" "}
    //     <Typography
    //       variant='h6'
    //       className='alignLeft'
    //       color='secondary'
    //       sx={{
    //         mb: 1,
    //       }}
    //     >
    //       Shop : {props.shopID}
    //     </Typography>
    //     <ButtonGroup
    //       variant='outlined'
    //       aria-label='outlined  button group'
    //       color='secondary'
    //       sx={{
    //         mb: 1,
    //       }}
    //     >
    //       <Button color='black'>Details</Button>
    //       <Button>Commissions</Button>
    //       <Button>Product Comm.</Button>
    //       <Button>Limits</Button>
    //       <Button>Permissions</Button>
    //       <Button>Products</Button>
    //       <Button
    //         onClick={() => {
    //           history("/terminal");
    //         }}
    //       >
    //         Terminal
    //       </Button>
    //       <Button>Displays</Button>
    //       <Button
    //         onClick={() => {
    //           history("/cashier");
    //         }}
    //       >
    //         Staff
    //       </Button>
    //       <Button>Locations</Button>
    //     </ButtonGroup>
    //     <ShopUpdate />
    //   </Box>
    // </div>
  );
}
