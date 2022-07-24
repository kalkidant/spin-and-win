import React, { Fragment, useEffect, useState } from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import MomentUtils from "@date-io/moment";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import moment from "moment";
import FirstPageIcon from "@mui/icons-material/FirstPage";
import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";
import LastPageIcon from "@mui/icons-material/LastPage";
import {
  Button,
  ButtonGroup,
  FormControl,
  IconButton,
  InputLabel,
  MenuItem,
  Modal,
  Select,
  TableFooter,
  TablePagination,
} from "@mui/material";
import {
  DatePicker,
  TimePicker,
  DateTimePicker,
  MuiPickersUtilsProvider,
} from "@material-ui/pickers";

import "../../Style/main.css";
import "reactjs-popup/dist/index.css";
import Upsert from "./Popups/userUpsert";
import Coin from "react-cssfx-loading/lib/CircularProgress";
import "../../Style/main.css";
import "reactjs-popup/dist/index.css";
import "./Navigation/searchPanal.css"
import "./agent.css"
import axios from "axios";
import { BASEURL } from "../../Constants/url";
import { useAlert } from "react-alert";
import Navbar from "./Navigation/navbar";
import ReactPaginate from "react-paginate";
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
function TablePaginationActions(props) {
  const theme = useTheme();
  const { count, page, rowsPerPage, onPageChange } = props;

  const handleFirstPageButtonClick = (event) => {
    onPageChange(event, 0);
  };

  const handleBackButtonClick = (event) => {
    onPageChange(event, page - 1);
  };

  const handleNextButtonClick = (event) => {
    onPageChange(event, page + 1);
  };

  const handleLastPageButtonClick = (event) => {
    onPageChange(event, Math.max(0, Math.ceil(count / rowsPerPage) - 1));
  };

  return (
    <Box sx={{ flexShrink: 0, ml: 2.5 }}>
      <IconButton
        onClick={handleFirstPageButtonClick}
        disabled={page === 0}
        aria-label='first page'
      >
        {theme.direction === "rtl" ? <LastPageIcon /> : <FirstPageIcon />}
      </IconButton>
      <IconButton
        onClick={handleBackButtonClick}
        disabled={page === 0}
        aria-label='previous page'
      >
        {theme.direction === "rtl" ? (
          <KeyboardArrowRight />
        ) : (
          <KeyboardArrowLeft />
        )}
      </IconButton>
      <IconButton
        onClick={handleNextButtonClick}
        disabled={page >= Math.ceil(count / rowsPerPage) - 1}
        aria-label='next page'
      >
        {theme.direction === "rtl" ? (
          <KeyboardArrowLeft />
        ) : (
          <KeyboardArrowRight />
        )}
      </IconButton>
      <IconButton
        onClick={handleLastPageButtonClick}
        disabled={page >= Math.ceil(count / rowsPerPage) - 1}
        aria-label='last page'
      >
        {theme.direction === "rtl" ? <FirstPageIcon /> : <LastPageIcon />}
      </IconButton>
    </Box>
  );
}

TablePaginationActions.propTypes = {
  count: PropTypes.number.isRequired,
  onPageChange: PropTypes.func.isRequired,
  page: PropTypes.number.isRequired,
  rowsPerPage: PropTypes.number.isRequired,
};

export default function Report() {
  const alert = useAlert();

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [reports, setReports] = useState([]);
  const [date, setDate] = React.useState("");
  // const [cashier, setCashier] = React.useState("");
  const [cashiers, setCashiers] = React.useState([]);
  const [shops, setShops] = React.useState([]);
  // const [gameType, setGameType] = React.useState();
  // const [shop, setShop] = React.useState("");
  // const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(30);
  const [shoplist,setShoplist ]= useState([])
  const [processing, setProcessing] = useState(false);
  // const [selectedStartDate, setStartDate] = useState(new Date());
  const [selectedShowStartDate, setShowStartDate] = useState(new Date());
  const [selectedShowEndDate, setShowEndDate] = useState(new Date());
const [total,setTotal] = useState("");
const [selectedBets, selectBet] = useState([]);
const [admin,setAdmin] = useState([])
const[allreport,setAllReport]= useState("")
const [agentid, setagentId] = useState("")
  // const [selectedEndDate, setEndDate] = useState(new Date());
  const history = useNavigate();
  const role =localStorage.Role
  const [items, setItems] = useState([]);

  const [pageCount, setpageCount] = useState(0);

  let limit = 30;
  const handlePageClick = async (data) => {
    console.log("data")
    console.log(data.selected);

    let currentPage = data.selected + 1;

    const commentsFormServer = handleSelectedFilter(currentPage);

    setItems(commentsFormServer);
    // scroll to the top
    //window.scrollTo(0, 0)
  };
  const [searchForm, setForm] = React.useState({
    shop: "",
  page:"",
  gameType:"",
  selectedStartDate: "",
  selectedEndDate: "",
  cashier:"",
  admins:"",
  adminshops:""
  });
  
  const { shop,gameType,  page,adminshops, selectedStartDate,selectedEndDate,cashier,admins } =
  searchForm;
 
  const handleChange1 = (e) => {
    const { name, value } = e.target;
    setForm({ ...searchForm, [name]: value });
   
    handleAllAdminShop(value)
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...searchForm, [name]: value });
    
  };
  
  // Avoid a layout jump when reaching the last page with empty rows.
  const emptyRows =
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - reports.length) : 0;


  const handleSelectedFilter = (currentPage) => {

    if(admins){

  
   
    const param={
    page:currentPage,
    limit:limit,
    // shopname:shop,
    shopname:adminshops,
    CashierId:cashier,
    GameTypeId:"89b14e80-c402-11ec-a9d1-65b049643e90",
    startDate:selectedStartDate,
    endDate:selectedEndDate
    }
    
    // setProcessing(true);

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
      .post(BASEURL + "report/adminreport", param)
      .then((response) => {
        if (response.data.report.data) {
          setAllReport(response.data.report)
          var report = response.data.report.data;
          setReports(report);
          setItems(report)
          setProcessing(false);
          report.forEach((r) => {
       
          });
        } else {
          setProcessing(false);
        }
      })
      .catch((err) => {
        setProcessing(false);
      });
    }else{
      console.log("currentPage")
      console.log(currentPage)
   
    const param={
      page:currentPage,
      limit:limit,
      shopname:shop,
      // shopname:adminshops,
      CashierId:cashier,
      GameTypeId:"89b14e80-c402-11ec-a9d1-65b049643e90",
      startDate:selectedStartDate,
      endDate:selectedEndDate
      }
      
      // setProcessing(true);
  
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
        .post(BASEURL + "report/adminreport", param)
        .then((response) => {
          if (response.data.report.data) {
            var report = response.data.report.data;
           
            
            setAllReport(response.data.report)
            setReports(report);
            setProcessing(false);
            report.forEach((r) => {
         
            });
          } else {
            setProcessing(false);
          }
        })
        .catch((err) => {
          setProcessing(false);
        });
    }
  };
 
  const handleAllCashiers = () => {
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
      .get(BASEURL + "cashier/")
      .then((response) => {
        if (response.data.get.data) {
          var cashiers = response.data.get.data;
          setCashiers(cashiers);
        } else {
          // alert.show("Error Fetching Cashiers ");
        }
      })
      .catch((err) => {
        // alert.show("Error try again ");
      });
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
          // alert.show("Error Fetching Shops ");
        }
      })
      .catch((err) => {
        // alert.show("Error try again ");
      });
  };
  const handleAllAdmin = () => {
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
      .get(BASEURL + "adminAgentShop/getAllAdminAgents")
      .then((response) => {
   
        if (response.data.agentAdmins) {
        
          

        
  
          var admin = response.data.agentAdmins;
          setAdmin(response.data.agentAdmins);
        } else {
          // alert.show("Error Fetching Shops ");
        }
      })
      .catch((err) => {
        // alert.show("Error try again ");
      });
  };
 
  const handleAllAdminShop = (value) => {
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
      .get(`${BASEURL}adminAgentShop/getAllShopsUnderMe/${value}`)
      .then((response) => {
     
        if (response.data.shops) {
 
          setShoplist(response.data.shops);
        } else {
          // alert.show("Error Fetching Shops ");
        }
      })
      .catch((err) => {
        // alert.show("Error try again ");
      });
  };
  const handleAllReport = () => {
    // setProcessing(true);

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
      .post(BASEURL + "report/adminreport")
      .then((response) => {
        if (response.data.report.data) {
          var report = response.data.report.data;
          setAllReport(response.data.report)
          
          setReports(report);
          setProcessing(false);
          // alert.success("Response ");
          report.forEach((r) => {
      
          });
        } else {
          setProcessing(false);
          // // alert.show("Some Error ");
        }
      })
      .catch((err) => {
        setProcessing(false);
      });
  };
  useEffect(() => {
    if (localStorage.getItem("AdminToken") === "false") {
      history("/login");
    }
    handleAllReport();
    handleAllCashiers();
    handleAllShops();
    handleAllAdmin();
   
   
    
  }, []);
  console.log("allreport",allreport)

  const sold =(reports.reduce((total,currentItem) =>  total = total + currentItem.sold , 0 ));
  const won =(reports.reduce((total,currentItem) =>  total = total + currentItem.won , 0 ));
  const cancled =(reports.reduce((total,currentItem) =>  total = total + currentItem.cancled , 0 ));
  const stake =(reports.reduce((total,currentItem) =>  total = total + currentItem.stake , 0 ));
  const paid =(reports.reduce((total,currentItem) =>  total = total + currentItem.paid , 0 ));
  const unpaid =(reports.reduce((total,currentItem) =>  total = total + currentItem.unpaid , 0 ));
  const cash =(reports.reduce((total,currentItem) =>  total = total + currentItem.cash , 0 ));
  const payout =(reports.reduce((total,currentItem) =>  total = total + currentItem.payout , 0 ));
  const winPercent =(reports.reduce((total,currentItem) =>  total = total + currentItem.winPercent , 0 ));
  const jackpot =(reports.reduce((total,currentItem) =>  total = total + currentItem.jackpot , 0 ));
  const gross =(reports.reduce((total,currentItem) =>  total = total + currentItem.gross , 0 ));
  const payoutPercent =(reports.reduce((total,currentItem) =>  total = total + currentItem.payoutPercent , 0 ));
 console.log("totals",sold)
  return processing ? (
    
    <Coin
      color='#0066ff'
      width='50px'
      height='50px'
      duration='2s'
      marginWidth={"100"}
    />
  ) : (
    <>
    <Navbar/>
    <div component={Paper} className="main">
      <div className="content-title"> 
      Report
      </div>
      <form className="formstyle forms">
  <div class="form-row align-items-center">
  <div className="col-auto " >
  
    </div>
    &nbsp;
  { (role === "superadmin") ?(
  <div class="col-sm-1 ">
    <select   id="inputState" className="textfild2" 
             value={admins}
            label='Shop'
            name="admins"
            onChange={handleChange1}>
        <option selected>Choose Admin</option>
        {admin.map((admin, key) => (
        <option   value={admin.User.id}>{admin.User.username}</option>))}
      </select>
    </div>):(
      ""
    )}
    
   
                 
    &nbsp;
 {(role === "superadmin")?(
  <>
  {(admins) ? (<div class="col-sm-1 ">
    <select   id="inputState" className="textfild2"  style={{width:"12em"}}
             value={adminshops}
            label='Shop'
            name="adminshops"
            onChange={handleChange}>
        <option selected>Choose Admin shop</option>
        {shoplist.map((shop, key) => (
        <option  value={shop.shopname}>{shop.shopname}</option>))}
      </select>
    </div>):(<div class="col-sm-1 ">
    <select   id="inputState" className="textfild2" 
             value={shop}
            label='Shop'
            name="shop"
            onChange={handleChange}>
        <option selected>Choose shop</option>
        {shops.map((shop, key) => (
        <option value={shop.shopname}>{shop.shopname}</option>))}
      </select>
    </div>)}</>):(
    "")}

    
    &nbsp;
    &nbsp;           
 

    
   
                 
    &nbsp;

    
    <div class="col-sm-1">
    <select   value={cashier}    name="cashier" onChange={handleChange} id="inputState" className="textfild2">
        <option selected>Choose Cashier</option>
        {cashiers.map((shop, key) => (
        <option value={shop.id}>{shop.username}</option>))}
      </select>
      
    </div>
    &nbsp;
   
    {/* <div class="col-sm-1 ">
    <select  value={gameType}  onChange={(e) => handleGameTypeChange(e)} id="inputState" className="textfild2">
        <option selected>Choose shop</option>
        {shops.map((shop, key) => (
        <option value={"89b14e80-c402-11ec-a9d1-65b049643e90"}>  Spin</option>))}
      </select>
    </div>
    &nbsp; */}
   
    <div class="col-sm-1 ">
    <select name="gameType"  value={gameType}  onChange={handleChange} id="inputState" className="textfild2">
        <option selected>Choose Game Type</option>
      
        <option value={"89b14e80-c402-11ec-a9d1-65b049643e90"}>Spin</option>
      </select>
    </div>
    &nbsp;
   

   
    
   
 
   

    <div class="col-sm-1 ">
    <label
            
     class="sr-only" for="inlineFormInputGroupUsername">Username</label>
      <input   value={selectedStartDate}
              name="selectedStartDate" 
              onChange={handleChange} type="date" className="textfild2" id="inlineFormInputGroupUsername" />
    </div>
    
    <div class="auto " >
  to
  
    </div>
    <div class="col-sm-1 ">
    <label
              
     class="sr-only" for="inlineFormInputGroupUsername">Username</label>
      <input value={selectedEndDate}
              name="selectedEndDate" 
              onChange={handleChange} type="date" className="textfild2" id="inlineFormInputGroupUsername" />
    </div>
    
   
  
 
    &nbsp;
    <div className="col-auto search1" onClick={()=>handleSelectedFilter()} >
    Search
    </div>
    
  </div>
</form>
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
      
      <table class="table table-bordered table-striped" style={{width:"53%",marginLeft:"2%",fontSize:"70%"}}>
  <thead style={{color:"white",background:"#0177c1",height:"1px",}}>
  
    <tr className="agent">
      <th scope="col" style={{font: "inherit"}}>Date</th>
      <th scope="col" style={{font: "inherit"}}>Sold</th>
      <th scope="col" style={{font: "inherit"}}>Won</th>
     
      <th scope="col" style={{font: "inherit"}}>Cancelled</th>
      <th scope="col" style={{font: "inherit"}}>Stakes</th>
      <th scope="col" style={{font: "inherit"}}>Payout</th>
      <th scope="col" style={{font: "inherit"}}>Jackpot</th>
      <th scope="col" style={{font: "inherit"}}>Gross</th>
      <th scope="col" style={{font: "inherit"}}>Paid</th>
      <th scope="col" style={{font: "inherit"}}>Unpaid</th>
      <th scope="col" style={{font: "inherit"}}>Cash</th>
     
      {/* <th scope="col" style={{font: "inherit"}}>Sold</th>
     
     
      <th scope="col" style={{font: "inherit"}}>Payout</th>
     
      
      */}
      <th scope="col" style={{font: "inherit"}}>win%</th>
    </tr>
  </thead>
  <tbody>
    
    {(rowsPerPage > 0
                ? reports.slice(
                    page * rowsPerPage,
                    page * rowsPerPage + rowsPerPage
                  )
                : reports
              ).map((row) =>
           <>  
    <tr className="agent">
     
           <td style={{width:"50%"}} ><b>{row.date}</b></td>
           <td><b>{row.sold}</b></td>
           <td><b>{row.won}</b></td>
           <td><b>{row.cancled}</b></td>
        
           <td><b>{row.stake}</b></td>
          <td><b>{row.payout}</b></td>
       
        
        <td> <b>{row.jackpot}</b></td>
        <td> <b>{row.gross}</b></td>
           <td ><b>{row.paid}</b></td>  
           <td><b> {row.unpaid}</b></td>
           
           <td><b>{row.cash}</b></td>
        
        {/* <td><b>{row.payout}</b></td>
       
         */}
          <td><b>{row.winPercent}</b></td>  
        {/* <td> <b>{row.payoutPercent}</b></td> */}
      
         
         
           </tr>
          
           </> 
            )}
     
     <tr>
            <th>  Total</th>
            <th>{sold}</th>
            <th>{won}</th>
            <th>{cancled}</th>
            <th>{stake}</th>
            <th>{payout}</th>
            <th>{jackpot}</th>
            <th>{gross}</th>
            <th>{paid}</th>
            <th>{unpaid}</th>
            <th>{cash}</th>
            
            <th>{winPercent}</th>
           
            {/* <th>{payoutPercent}</th> */}
           </tr>
    
               
    
  </tbody>
</table>
<ReactPaginate
style={{width:"2%"}}
        previousLabel={"<<"}
        nextLabel={">>"}
        breakLabel={"..."}
        pageCount={allreport.pages}
        marginPagesDisplayed={2}
        pageRangeDisplayed={2}
        onPageChange={handlePageClick}
        containerClassName={"pagination justify-content-center"}
        pageClassName={"page-item"}
        pageLinkClassName={"page-link"}
        previousClassName={"page-item"}
        previousLinkClassName={"page-link"}
        nextClassName={"page-item"}
        nextLinkClassName={"page-link"}
        breakClassName={"page-item"}
        breakLinkClassName={"page-link"}
        activeClassName={"active"}
      />
    </div>
    </>
    // <div sx={{ m: 3 }}>
    //   <ButtonGroup
    //     aria-label='outlined  button group'
    //     color='secondary'
    //     sx={{ width: 700, mt: 2 }}
    //   >
    //     <FormControl fullWidth variant='standard' sx={{ mr: 2 }}>
    //       <InputLabel id='demo-simple-select-label'>Shop</InputLabel>
    //       <Select
    //         labelId='demo-simple-select-label'
    //         id='demo-simple-select'
    //         value={shop}
    //         label='Shop'
    //         onChange={(e) => handleShopChange(e)}
    //       >
    //         {shops.map((shop, key) => (
    //           <MenuItem value={shop.TerminalId}>{shop.shopname}</MenuItem>
    //         ))}
    //       </Select>
    //     </FormControl>
    //     <FormControl fullWidth variant='standard' sx={{ mr: 2 }}>
    //       <InputLabel id='demo-simple-select-label'>Cashier</InputLabel>
    //       <Select
    //         labelId='demo-simple-select-label'
    //         id='demo-simple-select'
    //         value={cashier}
    //         label='Cashier'
    //         onChange={(e) => handleCashierChange(e)}
    //       >
    //         {cashiers.map((cashier, key) => (
    //           <MenuItem value={cashier.id}>{cashier.username}</MenuItem>
    //         ))}
    //       </Select>
    //     </FormControl>
    //     <FormControl fullWidth variant='standard' sx={{ mr: 2 }}>
    //       <InputLabel id='demo-simple-select-label'>Game Type</InputLabel>
    //       <Select
    //         labelId='demo-simple-select-label'
    //         id='demo-simple-select'
    //         value={gameType}
    //         label='GameType'
    //         onChange={(e) => handleGameTypeChange(e)}
    //       >
    //         <MenuItem value={"89b14e80-c402-11ec-a9d1-65b049643e90"}>
    //           Spin
    //         </MenuItem>
    //       </Select>
    //     </FormControl>
    //     <FormControl fullWidth variant='standard'>
    //       <MuiPickersUtilsProvider utils={MomentUtils}>
    //         <DatePicker
    //           label='Start Date'
    //           format='YYYY/MM/DD'
    //           value={selectedShowStartDate}
    //           onChange={(e) => handleStartDateChange(e)}
    //         />
    //       </MuiPickersUtilsProvider>
    //     </FormControl>
    //     <FormControl fullWidth variant='standard'>
    //       <MuiPickersUtilsProvider utils={MomentUtils}>
    //         <DatePicker
    //           label='End Date'
    //           value={selectedShowEndDate}
    //           format='YYYY/MM/DD'
    //           onChange={(e) => handleEndDateChange(e)}
    //         />
    //       </MuiPickersUtilsProvider>
    //     </FormControl>
    //   </ButtonGroup>

    //   <Box
    //     fullwidth
    //     alignItems='center'
    //     sx={{
    //       width: "100%",
    //       height: 300,
    //       p: 2,
    //     }}
    //   >
    //     <TableContainer component={Paper} sx={{ ml: 4, mt: 2, pb: 3 }}>
    //       <Table sx={{ width: "90%" }} aria-label='customized table'>
    //         <TableHead>
    //           <TableRow>
    //             <StyledTableCell align='left'>Date</StyledTableCell>
    //             <StyledTableCell align='right'>Sold</StyledTableCell>
    //             <StyledTableCell align='right'>Won</StyledTableCell>
    //             <StyledTableCell align='right'>Cancelled</StyledTableCell>
    //             <StyledTableCell align='right'>Stakes</StyledTableCell>
    //             <StyledTableCell align='right'>Paid</StyledTableCell>
    //             <StyledTableCell align='right'>Unpaid</StyledTableCell>
    //             <StyledTableCell align='right'>Cash</StyledTableCell>
    //             <StyledTableCell align='right'>Payout</StyledTableCell>
    //             <StyledTableCell align='right'>Win %</StyledTableCell>
    //             <StyledTableCell align='right'>Payout %</StyledTableCell>
    //           </TableRow>
    //         </TableHead>
    //         <TableBody>
    //           {(rowsPerPage > 0
    //             ? reports.slice(
    //                 page * rowsPerPage,
    //                 page * rowsPerPage + rowsPerPage
    //               )
    //             : reports
    //           ).map((row, key) => (
    //             <StyledTableRow key={key}>
    //               <StyledTableCell component='th' scope='row'>
    //                 {row.date}
    //               </StyledTableCell>
    //               <StyledTableCell align='right'>{row.sold}</StyledTableCell>
    //               <StyledTableCell align='right'>{row.won}</StyledTableCell>
    //               <StyledTableCell align='right'>{row.cancled}</StyledTableCell>
    //               <StyledTableCell align='right'>{row.stake}</StyledTableCell>
    //               <StyledTableCell align='right'>{row.paid}</StyledTableCell>
    //               <StyledTableCell align='right'>{row.unpaid}</StyledTableCell>
    //               <StyledTableCell align='right'>{row.cash}</StyledTableCell>
    //               <StyledTableCell align='right'>{row.payout}</StyledTableCell>

    //               <StyledTableCell align='right'>
    //                 {row.winPercent}
    //               </StyledTableCell>
    //               <StyledTableCell align='right'>
    //                 {row.payoutPercent}
    //               </StyledTableCell>
    //             </StyledTableRow>
    //           ))}
    //         </TableBody>
    //       </Table>
    //       <TableFooter>
    //         <TableRow>
    //           <TablePagination
    //             rowsPerPageOptions={[30, { label: "All", value: -10 }]}
    //             colSpan={3}
    //             count={reports.length}
    //             rowsPerPage={rowsPerPage}
    //             page={page}
    //             SelectProps={{
    //               inputProps: {
    //                 "aria-label": "rows per page",
    //               },
    //               native: true,
    //             }}
    //             onPageChange={handleChangePage}
    //             onRowsPerPageChange={handleChangeRowsPerPage}
    //             ActionsComponent={TablePaginationActions}
    //           />
    //         </TableRow>
    //       </TableFooter>
    //     </TableContainer>
    //   </Box>
    // </div>
  );
}
