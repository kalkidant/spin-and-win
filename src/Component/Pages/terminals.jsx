import React, { useState } from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Button } from "@mui/material";
import "../../Style/main.css";
import "reactjs-popup/dist/index.css";

import UpsertTerminal from "./Popups/terminalUpsert";
import { useNavigate } from "react-router-dom";
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import {CopyToClipboard} from 'react-copy-to-clipboard';
import AgentUpsert from "./Popups/agentUpsert";
import axios from "axios";
import { BASEURL } from "../../Constants/url";
import Navbar from "./Navigation/navbar";
import { useAlert } from "react-alert";
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import Modal from "react-modal";

import Snackbar from '@mui/material/Snackbar';

Modal.setAppElement("#root");
const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}



export default function Terminals(props) {
  const [open, setOpen] = useState(false);
  // const [rows, setrows] = useState(props.shop);
  const alert = useAlert();
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const history = useNavigate();
  const [reissue,setReissue] = useState("")
  const [Activate, setActivate] = useState("")
  const [isOpen, setIsOpen] = useState(false);
  const [isOpenreissue, setreissue] = useState(false);
const[copied,setCopied] = useState(false)
const [state, setState] = React.useState({
  opens: false,
  vertical: 'top',
  horizontal: 'center',
});

const { vertical, horizontal, opens } = state;
const handleClick = (newState) => () => {

  setState({ opens: true, ...newState });
};
// console.log(opens)
  function toggleReissueModal() {
    setreissue(!isOpenreissue);
  }
  const handleCloses = () => {
    setState({ ...state, open: false });
  };

  function toggleModal() {
    setIsOpen(!isOpen);
  }

  if (localStorage.getItem("AdminToken") === "false") {
  }
  const Reissue =(data)=>{
    const param = {
      id: data,
     
      
    };
    axios.interceptors.request.use(
      (config) => {
        config.headers.authorization = `${localStorage.getItem("AdminToken")}`;
        return config;
      },
      (error) => {
        return Promise.reject(error);
      }
    );
    axios
      .post(BASEURL + "terminal/regenerate/", param)
      .then((response) => {
        console.log(response.data);
        if (response.data.put.data) {
          setReissue(response.data.put.data)
          
          // alert.success("Successfully Regenerated ");
          setreissue(false);
          // setReopen(true)
        } else {
        
          // alert.show("Error ....Try again ");
        }
      })
      .catch((err) => {
        // alert.show("Error ....Try again ");
      });
  }
  const handleEditShop = () => {
    const param = {
      id: props.shop.Terminal.id,
      active:false
      
    };
    axios.interceptors.request.use(
      (config) => {
        config.headers.authorization = `${localStorage.getItem("AdminToken")}`;
        return config;
      },
      (error) => {
        return Promise.reject(error);
      }
    );
    axios
      .put(BASEURL + "terminal/", param)
      .then((response) => {
      
        if (response.data.put.data) {
          setActivate(response.data.put.data)
          // alert.success("Updated ");
          setIsOpen(false);
        } else {
          // alert.show("Error ....Try again ");
        }
      })
      .catch((err) => {
        // alert.show("Error ....Try again ");
      });
  };
 
  const handleEditShopActive = () => {
    const param = {
      active:true,
      id: props.shop.Terminal.id,
    };
    axios.interceptors.request.use(
      (config) => {
        config.headers.authorization = `${localStorage.getItem("AdminToken")}`;
        return config;
      },
      (error) => {
        return Promise.reject(error);
      }
    );
    axios
      .put(BASEURL + "terminal/", param)
      .then((response) => {
        console.log(response);
        if (response.data.put.data) {
          setActivate(response.data.put.data)
         
          // alert.success("Updated ");
          setIsOpen(false);
        } else {
          // // alert.show("Error ....Try again ");
        }
      })
      .catch((err) => {
        // // alert.show("Error ....Try again ");
      });
  };

  return (
    <>
    
    <div component={Paper} className="main1">
      <div className="content-title" style={{marginLeft:"1.5%"}}> 
      Terminal
      </div>
      {/* <Button
        variant='contained'
        color='secondary'
        sx={{
          float: "right",
          m: 2,
        }}
        onClick={handleOpen}
      >
        Add new Agent
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby='modal-modal-title'
        aria-describedby='modal-modal-description'
      >
        <AgentUpsert />
      </Modal> */}
      <table class="table table-bordered table-striped"  style={{width:"70%",marginLeft:"3%",fontSize:"70%"}}>
  <thead style={{color:"white",background:"#0177c1",height:"1px"}}>

    <tr className="agent">
   
     
      <th scope="col" style={{font: "inherit"}}>Terminal </th>
      <th scope="col" style={{font: "inherit"}}>Copy </th>
      <th scope="col" style={{font: "inherit"}}>Status</th>
      <th scope="col" style={{font: "inherit"}}>Action</th>
    </tr>
  </thead>
  <tbody>
  <tr className="agent">
      
    <th scope="row">{reissue?(<b>{reissue.terminal}</b>):(<b>{props.shop.Terminal?.terminal}</b>)}</th>
    <th >   <CopyToClipboard text={props.shop.Terminal?.terminal}
          onCopy={() =>setCopied(true)}>
         <ContentCopyIcon style={{fontSize:"100%"}} onClick={handleClick({
          vertical: 'top',
          horizontal: 'right',
        })}/>
         
        </CopyToClipboard ></th>
      
     {Activate?( <td>{Activate.active?(<b>Active</b>):(<b>InActive</b>)}</td>):( <td>{props.shop.Terminal?.active?(<b>Active</b>):(<b>InActive</b>)}</td>)}
      
      
      
      <td> 
        <span onClick={toggleReissueModal}  variant='text' color='secondary' style={{color:"#3091ff",cursor:"pointer"}}>
              <b > Reissue </b>
             </span>
             &nbsp;
             &nbsp;
             {/* {Activate?(<>
              {Activate.active?(  <span
               variant='text'
               color='red'
               style={{color:"red",cursor:"pointer"}}
               onClick={toggleModal}
              //  onClick={handleEditShop}
             >
              <b>Lock </b>
             </span>):(  <span
               variant='text'
               color='red'
               style={{color:"green",cursor:"pointer"}}
               onClick={toggleModal}
              //  onClick={handleEditShopActive}
             >
              <b> Activate</b>
             </span>)}
             </>):(<>
              {props.shop.Terminal?.active?(  <span
               variant='text'
               color='red'
               style={{color:"red",cursor:"pointer"}}
               onClick={toggleModal}
              //  onClick={handleEditShop}
             >
              <b>Lock </b>
             </span>):(  <span
               variant='text'
               color='red'
               style={{color:"green",cursor:"pointer"}}
              //  onClick={handleEditShopActive}
              onClick={toggleModal}
             >
              <b> Activate</b>
             </span>)}</>)}
             */}
           
             </td>
    
      </tr>
 
     {/* <tr>
      <th>  <input type="text" value={name}
            onChange={(e) => handleChangeName(e)} className=" textfild2"  /></th>
      <th>  <input type="text" className=" textfild2"   value={username}
            onChange={(e) => handleChangeUsername(e)}  /></th>
             <th>  <input type="text" className=" textfild2"    value={password}
            onChange={(e) => handleChangePassword(e)}  /></th>
    
      <th>  <input  value={tel}
            onChange={(e) => handleChangeTel(e)} type="text" className=" textfild2" /></th>
      <th>  <input  value={email}
            onChange={(e) => handleChangeEmail(e)} type="text" className=" textfild2" /></th>

      <th>
      <select  value={shop} id="inputState" className="textfild2">
        <option selected>Choose shop</option>
        {shops.map((shop, key) => (
        <option value={shop.shopname}>{shop.shopname}</option>))}
      </select>
         </th>
      <th style={{color:"#3091ff",cursor:"pointer"}} onClick={handleRegisterAgent} >Add Agent  </th>
     </tr> */}
  </tbody>
</table>
<Snackbar
        anchorOrigin={{ vertical, horizontal }}
        open={opens}
        onClose={handleCloses}
        message="successfully copied."
        key={vertical + horizontal}
        closeTimeoutMS={500}
      />
<Modal
        isOpen={isOpenreissue}
        onRequestClose={toggleReissueModal}
        contentLabel="My dialog"
        className="mymodal"
        overlayClassName="myoverlay"
        closeTimeoutMS={500}
      >
        <div><b>Conformation</b></div>
        <div><h6>You want to Regenerate Terminal ?</h6></div>
        <hr/>
        <span  style={{cursor:"pointer",marginLeft:"60%",color:"rgb(48, 145, 255)"}}   onClick={()=>Reissue(props.shop.Terminal?.id)}>Regenerate</span>
      </Modal>
<Modal
        isOpen={isOpen}
        onRequestClose={toggleModal}
        contentLabel="My dialog"
        className="mymodal"
        overlayClassName="myoverlay"
        closeTimeoutMS={500}
      >
        <div><b>Conformation</b></div>
        <div><h6>You want to chenge Terminal status ?</h6></div>
        <hr/>
        
        
        {Activate?(<>
              {Activate.active?(  <span
               variant='text'
               color='red'
               style={{color:"red",cursor:"pointer",marginLeft:"60%"}}
             
               onClick={handleEditShop}
             >
               
              Lock
             </span>):(  <span
               variant='text'
               color='red'
               style={{color:"green",cursor:"pointer",marginLeft:"60%"}}
             
               onClick={handleEditShopActive}
             >
              <b> Activate</b>
             </span>)}
             </>):(<>
              {props.shop.Terminal?.active?(  <span
               variant='text'
               color='red'
               style={{color:"red",cursor:"pointer",marginLeft:"60%"}}
              
               onClick={handleEditShop}
             >
              <b>Lock </b>
             </span>):(  <span
               variant='text'
               color='red'
               style={{color:"green",cursor:"pointer",marginLeft:"60%"}}
               onClick={handleEditShopActive}
         
             >
              <b> Activate</b>
             </span>)}</>)}
      
      </Modal>
    </div>
    </>
    // <TableContainer component={Paper} sx={{ m: 4, pb: 3 }}>
    //   <Button
    //     variant='contained'
    //     color='secondary'
    //     sx={{
    //       float: "right",
    //       mb: 1,
    //     }}
    //     onClick={handleOpen}
    //   >
    //     Add new terminal
    //   </Button>
    //   <Modal
    //     open={open}
    //     onClose={handleClose}
    //     aria-labelledby='modal-modal-title'
    //     aria-describedby='modal-modal-description'
    //   >
    //     <UpsertTerminal />
    //   </Modal>

    //   <Table sx={{ width: "100%" }} aria-label='customized table'>
    //     <TableHead>
    //       <TableRow>
    //         <StyledTableCell align='left'>ID</StyledTableCell>
    //         <StyledTableCell align='left'>Terminal Name</StyledTableCell>
    //         <StyledTableCell align='left'>Secure ID</StyledTableCell>
    //         <StyledTableCell align='left'>Sale Terminal</StyledTableCell>
    //         <StyledTableCell align='left'>Options</StyledTableCell>
    //         <StyledTableCell align='left'>Description</StyledTableCell>
    //         <StyledTableCell align='left'>Notes</StyledTableCell>
    //         <StyledTableCell align='left'>Status</StyledTableCell>
    //         <StyledTableCell align='left'>Actions</StyledTableCell>
    //       </TableRow>
    //     </TableHead>
    //     <TableBody>
    //       {rows.map((row) => (
    //         <StyledTableRow key={row.name}>
    //           <StyledTableCell component='th' scope='row'>
    //             {row.name}
    //           </StyledTableCell>
    //           <StyledTableCell align='left'>{row.calories}</StyledTableCell>
    //           <StyledTableCell align='left'>{row.fat}</StyledTableCell>
    //           <StyledTableCell align='left'>{row.carbs}</StyledTableCell>
    //           <StyledTableCell align='left'>{row.protein}</StyledTableCell>
    //           <StyledTableCell align='left'>{row.calories}</StyledTableCell>
    //           <StyledTableCell align='left'>{row.fat}</StyledTableCell>
    //           <StyledTableCell align='left'>{row.protein}</StyledTableCell>
    //           <StyledTableCell align='left'>
    //             <Button variant='text' color='secondary'>
    //               Edit
    //             </Button>
    //             <Button variant='text' color='red'>
    //               Delete
    //             </Button>
    //             <Button variant='text' color='colorDanger'>
    //               Lock
    //             </Button>
    //           </StyledTableCell>
    //         </StyledTableRow>
    //       ))}
    //     </TableBody>
    //   </Table>
    // </TableContainer>
  );
}
