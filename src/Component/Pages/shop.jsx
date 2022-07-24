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
import "../../Style/main.css";
import "reactjs-popup/dist/index.css";
import "./Navigation/searchPanal.css"
import "./agent.css"
import ShopUpsert from "./Popups/shopUpsert";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useAlert } from "react-alert";
import { BASEURL } from "../../Constants/url";
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

function createData(TerminalId, shopName) {
  return { TerminalId, shopName };
}

export default function Shops(props) {
  const [open, setOpen] = useState(false);
  const history = useNavigate();
  const alert = useAlert();
  const [shops, setShops] = useState([]);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [isOpen, setIsOpen] = useState(false);
  const [isOpendelete, setIsOpendelete] = useState(false);

  const [userID, setUserID] = useState("");
  const [shopName, setShopName] = useState();
  const [users, setUsers] = useState([]);
  const [deletedata,setdeletedata] = useState("")
const [activate,setActivate] = useState("")
  function toggleModal(data) {
    setIsOpen(!isOpen);
    setActivate(data)
  }
  function toggledeleteModal(data) {
    setIsOpendelete(!isOpendelete);
    setdeletedata(data)
 
  }

  const handleIDChange = (event) => {
    setUserID(event.target.value);
  };
  const handleNameChange = (event) => {
    setShopName(event.target.value);
  };
  const handleAllUsers = () => {
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
          console.log(response.data.get.data);
          var users = response.data.get.data;
          setUsers(users);
        } else {
          // alert.show("Error Fetching users ");
        }
      })
      .catch((err) => {
        // alert.show("Error try again ");
      });
  };
  const handleRegisterShop = () => {
    const param = {
      UserId: userID,
      shopname: shopName,
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
      .post(BASEURL + "shop/register", param)
      .then((response) => {
        console.log(response);
        if (response.data.post.data) {
        
          // alert.success("Shop Created ");
          setShopName("")
          setUserID("")
          handleAllShops();
        } else {
          // alert.show("Error ....Try again ");
        }
      })
      .catch((err) => {
        // alert.show("Error ....Try again ");
      });
  };
  useEffect(() => {
    handleAllUsers();
  }, []);
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

  
  useEffect(() => {
    if (localStorage.getItem("AdminToken") === "false") {
      history("/login");
    }
    handleAllShops();
  }, []);
  const deleteAgent = (data) => {
   
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
    .delete(BASEURL + "shop/"+ data)
      .then((response) => {
      
        if (response.data.delete.data) {
        
          // alert.success("Updated ");
          setIsOpen(false);
          setIsOpendelete(false)
          handleAllShops();
        
          
        } else {
          // alert.show("Error ....Try again ");
        }
      })
      .catch((err) => {
        // alert.show("Error ....Try again ");
      });
  };

  const handleEditShop = (data) => {
    const param = {
      shopname: data.Terminal.id,
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
          handleAllShops();
        } else {
          // alert.show("Error ....Try again ");
        }
      })
      .catch((err) => {
        // alert.show("Error ....Try again ");
      });
  };
 
  const handleEditShopActive = (data) => {
    const param = {
      active:true,
      shopname: data.Terminal.id,
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
          handleAllShops();
        } else {
          // // alert.show("Error ....Try again ");
        }
      })
      .catch((err) => {
        // // alert.show("Error ....Try again ");
      });
  };
console.log("activate.active")
console.log(activate.active)
  return (
    <>
    <Navbar/>
    <div component={Paper} className="main">
      <div className="content-title"> 
      Shops
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
    
      <table class="table table-bordered table-striped"  style={{width:"90%",marginLeft:"2%",fontSize:"70%"}}>
  <thead style={{color:"white",background:"#0177c1",height:"1px"}}>

    <tr className="agent">
  
      <th scope="col" style={{font: "inherit"}}>Terminal ID</th>
      <th scope="col" style={{font: "inherit"}}>Shop Name</th>
      <th scope="col" style={{font: "inherit"}}>Agent</th>
      <th scope="col" style={{font: "inherit"}}>URL</th>
      <th scope="col" style={{font: "inherit"}}>Status</th>
      <th scope="col" style={{font: "inherit"}}>Actions</th>
    
    </tr>
  </thead>
  <tbody>
    
    {shops.map((row) =>
    <tr className="agent">

     
           <th scope="row"><b>{row.TerminalId}</b></th>
           <td><b>{row.shopname}</b></td>
           <td><b>{row.User?.name}</b></td>
           <td><b >https://test.spinandwin.bet-shop.net/{row.id}</b></td>
           <td>{row?.Terminal.active?(<b>Active</b>):(<b>Locked</b>)}</td>
           <td> 
            <span onClick={(e) => {
                    props.setShopID(row.shopname);
                    props.setShop(row);
                    history("/shopDetail");
                  }}
    variant='text' color='secondary' style={{color:"#3091ff", cursor:"pointer"}}>
                   <b> Edit</b>
                  </span>

                  &nbsp;
                  &nbsp;
                  <span
                    variant='text'
                    color='red'
                    style={{color:"#3091ff", cursor:"pointer"}}
                    onClick={()=>toggledeleteModal(row.shopname)}
                    // onClick={(e) => {
                    //   deleteAgent(row.shopname);
                    // }}
                  >
                   <b> Delete</b>
                  </span>
                  &nbsp;
                  &nbsp;
                  <span>
                  {row.Terminal.active?(  <span
               variant='text'
               color='red'
               style={{color:"red",cursor:"pointer"}}
               onClick={()=>toggleModal(row)}
              //  onClick={handleEditShop}
             >
              <b>Lock </b>
             </span>):(  <span
               variant='text'
               color='red'
               style={{color:"green",cursor:"pointer"}}
               onClick={()=>toggleModal(row)}
              //  onClick={handleEditShopActive}
             >
              <b> Activate</b>
             </span>)}
                  </span>
                  </td>
        
           </tr>
           
            )}
     <tr>
      <th></th>
      <th> 
         <input type="text" 
             value={shopName}
             onChange={(e) => handleNameChange(e)} className=" textfild3"  /></th>
    
     
      <th>
      <select  value={userID}
            onChange={(e) => handleIDChange(e)} id="inputState" className="textfild3">
        <option selected>Choose Agent</option>
        {users.map((user, key) => (
        <option value={user.id}>{user.username}</option>))}
      </select>
         </th>
         <th></th>
      <th style={{color:"#3091ff",cursor:"pointer"}}   onClick={handleRegisterShop} >Add Shop  </th>
     </tr>
   
    
               
    
  </tbody>
</table>
<Modal
        isOpen={isOpen}
        onRequestClose={toggleModal}
        contentLabel="My dialog"
        className="mymodal"
        overlayClassName="myoverlay"
        closeTimeoutMS={500}
      >
        <div><b>Conformation</b></div>
        <div><h6>You want to chenge Shop status ?</h6></div>
        <hr/>
        
        {activate.active?( 
           <span
               variant='text'
               color='red'
               style={{color:"red",cursor:"pointer",marginLeft:"60%"}}
             
               onClick={()=>handleEditShop(activate)}
             >
               
              Lock
             </span>):(  <span
               variant='text'
               color='red'
               style={{color:"green",cursor:"pointer",marginLeft:"60%"}}
             
               onClick={()=>handleEditShopActive(activate)}
             >
              <b> Activate</b>
             </span>)}
        {/* {Activate?(<>
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
             </span>)}</>)} */}
      
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
        <div><h6>You want to Delete this Shop? </h6></div>
        <div><p>But, please keep in mind that all cashiers registered under the shop and all tickets voked under each cashier will also be deleted!</p></div>
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
    //     }}ck={handleOpen}
    //   >
    //     Add new shop
    //   </Button>
    //   <Modal
    //     open={open}
    //     onClose={handleClose}
    //     aria-labelledby='modal-modal-title'
    //     aria-describedby='modal-modal-description'
    //   >
    //     <ShopUpsert />
    //   </Modal>

    //   <Table sx={{ width: "90%", mx: 2 }} aria-label='customized table'>
    //     <TableHead>
    //       <TableRow>
    //         <StyledTableCell align='left'>Terminal ID</StyledTableCell>
    //         <StyledTableCell align='left'>Shop Name</StyledTableCell>
    //         <StyledTableCell align='left'>Actions</StyledTableCell>
    //       </TableRow>
    //     </TableHead>
    //     <TableBody>
    //       {shops.map((row) => (
    //         <StyledTableRow key={row.TerminalId}>
    //           <StyledTableCell component='th' scope='row'>
    //             {row.TerminalId}
    //           </StyledTableCell>
    //           <StyledTableCell align='left'>{row.shopname}</StyledTableCell>
    //           <StyledTableCell align='left'>
    //             <Button
    //               variant='text'
    //               color='secondary'
    //               onClick={(e) => {
    //                 props.setShopID(row.shopname);
    //                 history("/shopDetail");
    //               }}
    //             >
    //               Edit
    //             </Button>
    //             <Button
    //               variant='text'
    //               color='red'
    //               onClick={(e) => {
    //                 deleteShop(row.shopname);
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
