import React, { useEffect, useState } from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Modal from "react-modal";
import "../../Style/main.css";
import "reactjs-popup/dist/index.css";

import "./Popups//shopUpdate.css"
import ShopUpsert from "./Popups/shopUpsert";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useAlert } from "react-alert";
import { BASEURL } from "../../Constants/url";
import CashierUpsert from "./Popups/cashierUpsert";
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

export default function Cashiers(props) {
  const [open, setOpen] = useState(false);
  const history = useNavigate();
  const alert = useAlert();
  const [cashiers, setCashiers] = useState([]);
  const [row,setRow] = useState("")
  const handleOpen = (data) => {
    setRow(data)
    setOpen(true);
  }
  const handleClose = () => {
    setOpen(false)
  handleAllCashiers()};
 

  const [shops, setShops] = React.useState([]);
  const [shop, setShop] = React.useState([]);
  const [shopName, setshopName] = React.useState(props.shop.shopname)
  
  const [confirm, setConfirm] = React.useState(false);
  const [confirmed, setConfirmed] = React.useState(false);
  const [isOpendelete, setIsOpendelete] = useState(false);
  const [deletedata,setdeletedata] = useState("")
  
  const [userForm, setForm] = React.useState({
    username: "",
    name: "",
    email: "",
    tel: "",
    password: "",
  
    repeatPassword: "",
   
  });
  const {
    username,
    name,
    email,
    tel,
    password,
    repeatPassword,

  } = userForm;
  const [error, setError]= React.useState({
  
    password: '',
    repeatPassword: ''
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...userForm, [name]: value });
  };
  function toggledeleteModal(data) {
    setIsOpendelete(!isOpendelete);
    setdeletedata(data)
 
  }

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
          // // alert.show("Some Error ");
        }
      })
      .catch((err) => {
        // // alert.show("Some Error ");
      });
  };
 

  const validateInput = e => {
    let { name, value } = e.target;
    setError(prev => {
      const stateObj = { ...prev, [name]: "" };
 
      switch (name) {
      
        case "password":
          if (!value) {
            stateObj[name] = "Please enter Password.";
          } else if (repeatPassword && value !== repeatPassword) {
            stateObj["repeatPassword"] = "Password and Confirm Password does not match.";
          } else {
            stateObj["repeatPassword"] = repeatPassword ? "" : error.repeatPassword;
          }
          break;
 
        case "repeatPassword":
          if (!value) {
            stateObj[name] = "Please enter Confirm Password.";
          } else if (password && value !== repeatPassword) {
            stateObj[name] = "Password and Confirm Password does not match.";
          }
          break;
 
        default:
          break;
      }
 
      return stateObj;
    });
  }
  const deleteAgent = (deletedata) => {
   
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
      .delete(  `${BASEURL}cashier/${deletedata}` )
      .then((response) => {
        if (response.data.status === "success") {
          // alert.success("Deleted Successfully ");
          handleAllCashiers();
          setIsOpendelete(false);
        } else {
          // alert.show("Some Error Occured");
        }
      })
      .catch((err) => {
        // alert.show("Some Error Occured");
      });
  };
  const handleRegisterAgent = () => {
    const param = {
      username: username,
      password: password,
      phone: tel,
      shopname: props.shop.shopname,
      role: "cashier",
      email:email,
      name:name
    };
    console.log(param);
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
      .post(BASEURL + "cashier/register/", param)
      .then((response) => {
        if (response.data.status) {
          handleAllCashiers();
          // alert.success("Registered Successfully ");
         setForm("")
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
  const handleAllCashiers = () => {
   let dataa =props.shop.shopname
  
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
    
      .get(BASEURL + "cashier/getByShopName/"+props.shop.shopname )
      .then((response) => {
       
        if (response.data.data) {
          console.log("sucess")
        console.log("dataaaa")

          setCashiers(response.data.data);
        } else {
          // // alert.show("Some Error ");
        }
      })
      .catch((err) => {
        // // alert.show("Some Error ");
      });
  };

  const editCashier = (cashiername) => {
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
      .delete(BASEURL + "cashier/" + cashiername)
      .then((response) => {
        console.log(response);
        if (response.data.status === "success") {
          // alert.success("Deleted Successfully ");
          handleAllCashiers();
        } else {
          // alert.show("Some Error Occured");
        }
      })
      .catch((err) => {
        // alert.show("Some Error Occured");
      });
  };
  const deleteCashier = (cashiername) => {
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
      .delete(BASEURL + "cashier/" + cashiername)
      .then((response) => {
        console.log(response);
        if (response.data.status === "success") {
          // alert.success("Deleted Successfully ");
          handleAllCashiers();
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
    handleAllCashiers();
  }, []);
  return (
    <>
   
    <div className="td">
        <table class="table table-bordered table-striped"  style={{width:"70%",marginLeft:"2%",fontSize:"70%"}}>
  <thead style={{color:"white",background:"#0177c1",height:"1px"}}>

    <tr className="agent">

      <th scope="col" style={{font: "inherit"}}>Username</th>
      <th scope="col" style={{font: "inherit"}}>Name</th>
      <th scope="col" style={{font: "inherit"}}>Active</th>
     
      <th scope="col" style={{font: "inherit"}}>Actions</th>
  
    </tr>
  </thead>
  <tbody>
    
    {cashiers.map((row) =>
    <tr className="agent">
   
           <th scope="row"><b>{row.username}</b></th>
           <td><b>{row.name}</b></td>
           <td><b>{row.active + ""}</b></td>
          
        
         
           
           
           <td> <span  onClick={()=>handleOpen(row)} variant='text' color='secondary' style={{color:"#3091ff",cursor:"pointer"}}>
                   <b> Edit</b>
                  </span>
         
                  &nbsp;
                  &nbsp;
                  <span
                    variant='text'
                    color='red'
                    style={{color:"#3091ff",cursor:"pointer"}}
                    onClick={()=>toggledeleteModal(row.username)}
                    // onClick={() => {
                    //   deleteAgent(row.username);
                    // }}
                  >
                   <b> Delete</b>
                  </span>
                  </td>
         
           </tr>
            )}
    
   
    
               
    
  </tbody>
</table>
    <table class=" form" style={{width:"28%"}} >
<thead>

 <tr >
   <td colspan="3" className="hd">

Add New Shop User</td>
 </tr>
</thead>
<tbody>
 

<tr className="r1">    <td className="label"  ><b>Shop Name</b></td>
         <td colspan="2"><input disabled type="text"  value={shopName}
            /></td>
         </tr>
      <tr className="r1">    
      <td className="label"  ><b>Name</b></td>
      <td colspan="2"><input type="text" name="name"   value={name}
            onChange={(e) => handleChange(e)}/></td>
      </tr>
      <tr className="r0">   
       <td className="label" ><b>User Name</b></td>
      <td colspan="2"><input type="text" name="username"   value={username}
            onChange={(e) => handleChange(e)}/></td>
      </tr>
      <tr className="r1">    
      <td className="label"  ><b>Email</b></td>
      <td colspan="2"><input type="text" name="email"  value={email}
         
            onChange={(e) => handleChange(e)}/></td>
      </tr>
     
      <tr className="r0">  
      <td className="label" ><b>Tel</b></td>
      <td colspan="2"><input type="text" name="tel" value={tel}
           
            onChange={(e) => handleChange(e)} /></td>
      </tr>
      <tr className="r1">  
      <td className="label" ><b>Password</b></td>
      <td colspan="2">
        <input type="text" name="password" value={password}
            onChange={(e) => handleChange(e)} 
            onBlur={validateInput}
            />
            </td>
            
      </tr>
      <tr>
        <td colspan="2">
        {error.password && <span className='err'><small style={{fontSize:"50%",color:"red"}}>{error.password}</small></span>}
        </td>
      </tr>
      <tr className="r0">  
      <td className="label" ><b> Repeat Password</b></td>
      <td colspan="2"><input type="text" required  name="repeatPassword" value={repeatPassword}
            onChange={(e) => handleChange(e) }   onBlur={validateInput}
           />
          
          </td>
         
      </tr>
      <tr className="r1">
        <td colspan="2">
      {error.repeatPassword && <span  className='err'><small  style={{fontSize:"50%",color:"red"}}>{error.repeatPassword}</small></span>}
      </td>
      </tr>
      <tr>
      <td colspan="2">
      <input disabled={(repeatPassword!==password)}  type="submit" name="submit" id="submit"  onClick={handleRegisterAgent} value="Save"/>
      </td>
      </tr>
       
      
     

 
            
 
</tbody>
</table>
<Modal
        isOpen={open}
        onRequestClose={handleOpen}
        contentLabel="My dialog"
        className="mymodal1"
        overlayClassName="myoverlay"
        closeTimeoutMS={500}
      >
       <CashierUpsert   onClose={handleClose} shop={row} shopID={props.shopID} />
      
      
      </Modal>
<Modal
        isOpen={isOpendelete}
        onRequestClose={toggledeleteModal}
        contentLabel="My dialog"
        className="mymodal"
        overlayClassName="myoverlay"
        closeTimeoutMS={500}
      >
        <div><b>Conformation</b></div>
        <div><h6>You want to Delete this Cashier? </h6></div>
      
        <hr/>
        
        <span
               variant='text'
               color='red'
               style={{color:"red",cursor:"pointer",marginLeft:"60%"}}
             
               onClick={()=>deleteAgent(deletedata)}
             >
               
               Delete
             </span>
      
      
      </Modal>
 </div>
 </>
    // <TableContainer component={Paper}>
    //   <Button
    //     variant='contained'
    //     color='secondary'
    //     sx={{
    //       float: "right",
    //       m: 2,
    //     }}
    //     onClick={handleOpen}
    //   >
    //     Add new Cashier
    //   </Button>
    //   <Modal
    //     open={open}
    //     onClose={handleClose}
    //     aria-labelledby='modal-modal-title'
    //     aria-describedby='modal-modal-description'
    //   >
    //     <CashierUpsert shopID={props.shopID} />
    //   </Modal>

    //   <Table sx={{ width: "90%", mx: 2 }} aria-label='customized table'>
    //     <TableHead>
    //       <TableRow>
    //         <StyledTableCell align='left'>Username</StyledTableCell>
    //         <StyledTableCell align='left'>Name</StyledTableCell>

    //         <StyledTableCell align='left'>Active</StyledTableCell>

    //         <StyledTableCell align='left'>Actions</StyledTableCell>
    //       </TableRow>
    //     </TableHead>
    //     <TableBody>
    //       {cashiers.map((row) => (
    //         <StyledTableRow key={row.id}>
    //           <StyledTableCell component='th' scope='row'>
    //             {row.username}
    //           </StyledTableCell>
    //           <StyledTableCell align='left'>{row.name}</StyledTableCell>
    //           <StyledTableCell align='left'>{row.active + ""}</StyledTableCell>

    //           <StyledTableCell align='left'>
    //             <Button
    //               variant='text'
    //               color='secondary'
    //               onClick={(e) => {
    //                 editCashier(row.username);
    //               }}
    //             >
    //               Edit
    //             </Button>
    //             <Button
    //               variant='text'
    //               color='red'
    //               onClick={(e) => {
    //                 deleteCashier(row.username);
    //               }}
    //             >
    //               Delete
    //             </Button>
    //             {/* <Button variant='text' color='colorDanger'>
    //               Lock
    //             </Button> */}
    //           </StyledTableCell>
    //         </StyledTableRow>
    //       ))}
    //     </TableBody>
    //   </Table>
    // </TableContainer>
  );
}
