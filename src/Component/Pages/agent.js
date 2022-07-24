import React, { useEffect, useState } from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Button, Modal } from "@mui/material";
import "../../Style/main.css";
import "reactjs-popup/dist/index.css";
import "./Navigation/searchPanal.css"
import "./agent.css"
import ShopUpsert from "./Popups/shopUpsert";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useAlert } from "react-alert";
import { BASEURL } from "../../Constants/url";
import Upsert from "./Popups/userUpsert";
import AgentUpsert from "./Popups/agentUpsert";

import {
  FormControl,
  FormHelperText,
  IconButton,
  Input,
  InputAdornment,
  InputLabel,
  MenuItem,
  Select,
  OutlinedInput,
  tableRowClasses,
  TextField,
} from "@mui/material";
import Navbar from "./Navigation/navbar";
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

function createData(TerminalId, username) {
  return { TerminalId, username };
}

export default function Agents(props) {
  const [open, setOpen] = useState(false);
  const history = useNavigate();
  const alert = useAlert();
  const [users, setUsers] = useState([]);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  

  const [shops, setShops] = React.useState([]);
  const [shop, setShop] = React.useState([]);
  const [username, setUsername] = React.useState();
  const [name, setName] = React.useState();
  const [email, setEmail] = React.useState([]);
  const [tel, setTel] = React.useState();
  const [password, setPassword] = React.useState([]);
  const [confirm, setConfirm] = React.useState(false);
  const [confirmed, setConfirmed] = React.useState(false);

  const handleChangeShop = (event) => {
    setShop(event.target.value);
  };
  const handleChangeName = (event) => {
    setName(event.target.value);
  };
  const handleChangeUsername = (event) => {
    setUsername(event.target.value);
  };
  const handleChangePassword = (event) => {
    setPassword(event.target.value);
  };
  const handleChangeConfirmPassword = (event) => {
    setConfirm(event.target.value);
  };

  const handleChangeTel = (event) => {
    setTel(event.target.value);
  };
  const handleChangeEmail = (event) => {
    setEmail(event.target.value);
  };

  const handleAllShops = () => {
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
      .get(BASEURL + "shop/")
      .then((response) => {
        if (response.data.get.data) {
          var shops = response.data.get.data;
          setShops(shops);
        } else {
          // // alert.show("Some Error ")
        }
      })
      .catch((err) => {
        // // alert.show("Some Error ")
      });
  };
  const handleRegisterAgent = () => {
    const param = {
      username: username,
      password: password,
      phone: tel,
      shop: shop,
      role: "agent",
      name:name
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
      .post(BASEURL + "account/register/", param)
      .then((response) => {
        if (response.data.status) {
          handleAllusers()
          // alert.success("Registered Successfully ");

          setUsername("")
          setName("")
          setEmail("")
          setPassword("")
          setTel("")
          setShop("")
        } else {
          // // alert.show("Some Error ");
        }
      })
      .catch((err) => {
        // // alert.show("Some Error ");
      });
  };
  React.useEffect(() => {
    if (localStorage.getItem("AdminToken") === "false") {
    }
    handleAllShops();
  }, []);
  const handleAllusers = () => {
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
      .get(BASEURL + "account")
      .then((response) => {
        if (response.data.get.data) {
          var users = response.data.get.data;
          setUsers(users);
         
        } else {
          // alert.show("Error fetching users ");
        }
      })
      .catch((err) => {
        // alert.show(" Error ");
      });
  };

  const deleteAgent = (username) => {
    const param = {
      username: username,
     
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
      .delete(  `${BASEURL}account/${username}` )
      .then((response) => {
        if (response.data.status === "success") {
          // alert.success("Deleted Successfully ");
          handleAllusers();
        } else {
          // alert.show("Some Error Occured");
        }
      })
      .catch((err) => {
        // alert.show("Some Error Occured");
      });
  };
  useEffect(() => {
    if (localStorage.getItem("AdminToken") === "false") {
      history("/login");
    }
    handleAllusers();
  }, []);
  return (
    <>
    <Navbar/>
    <div component={Paper} className="main">
      <div className="content-title"> 
      Agents
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
      </Button> */}
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby='modal-modal-title'
        aria-describedby='modal-modal-description'
      >
        <AgentUpsert />
      </Modal>
      <table class="table table-bordered table-striped"  style={{width:"70%",marginLeft:"2%",fontSize:"70%"}}>
  <thead style={{color:"white",background:"#0177c1",height:"1px"}}>

    <tr className="agent">
      <th scope="col" style={{font: "inherit"}}>Name</th>
      <th scope="col" style={{font: "inherit"}}>Username</th>
      <th scope="col" style={{font: "inherit"}}>password</th>
     
      <th scope="col" style={{font: "inherit"}}>Phone</th>
      <th scope="col" style={{font: "inherit"}}>Email</th>
  
    
      <th scope="col" style={{font: "inherit"}}>Action</th>
    </tr>
  </thead>
  <tbody>
    
    {users.map((row) =>
    <tr className="agent">
           <th scope="row"><b>{row.name}</b></th>
           <td><b>{row.username}</b></td>
           <td></td>
        
           <td><b>{row.phone}</b></td>
           <td><b>{row.email}</b></td>  
         
           
           
           <td> <span variant='text' color='secondary' style={{color:"#3091ff",cursor:"pointer"}}
            onClick={(e) => {
              
              history("/agentDetail");
              props.setAgent(row)
            }}>
                   <b> Shops</b>
                  </span>
                  &nbsp;
                  &nbsp;
                  <span
                    variant='text'
                    color='red'
                    style={{color:"#3091ff",cursor:"pointer"}}
                    onClick={(e) => {
                      deleteAgent(row.username);
                    }}
                  >
                   <b> Delete</b>
                  </span></td>
         
           </tr>
            )}
     <tr>
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

      
      <th style={{color:"#3091ff",cursor:"pointer"}} onClick={handleRegisterAgent} >Add Agent  </th>
     </tr>
   
    
               
    
  </tbody>
</table>
      {/* <Table sx={{ width: "90%", mx: 2 }} aria-label='customized table'>
        <TableHead>
          <TableRow>
            <StyledTableCell align='left'>Name</StyledTableCell>
            <StyledTableCell align='left'>Username</StyledTableCell>
            <StyledTableCell align='left'>Address</StyledTableCell>
            <StyledTableCell align='left'>Phone</StyledTableCell>
            <StyledTableCell align='left'>Email</StyledTableCell>
            <StyledTableCell align='left'>Active</StyledTableCell>
            <StyledTableCell align='left'>Action</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {users.map((row) =>
            row.role === "agent" ? (
              <StyledTableRow key={row.id}>
                <StyledTableCell component='th' scope='row'>
                  {row.name}
                </StyledTableCell>
                <StyledTableCell align='left'>{row.username}</StyledTableCell>
                <StyledTableCell align='left'>{row.address}</StyledTableCell>
                <StyledTableCell align='left'>{row.phone}</StyledTableCell>
                <StyledTableCell align='left'>{row.email}</StyledTableCell>
                <StyledTableCell align='left'>
                  {row.active + ""}
                </StyledTableCell>
                <StyledTableCell align='left'>
                  <Button variant='text' color='secondary'>
                    Edit
                  </Button>
                  <Button
                    variant='text'
                    color='red'
                    onClick={(e) => {
                      deleteAgent(row.username);
                    }}
                  >
                    Delete
                  </Button>
                </StyledTableCell>
              </StyledTableRow>
            ) : (
              ""
            )
          )}
        </TableBody>
      </Table> */}
    </div>
    </>
  );
}
