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

export default function BetSlip() {
  const alert = useAlert();

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [reports, setReports] = useState([]);
  const [date, setDate] = React.useState("");
  // const [cashier, setCashier] = React.useState("");
  const [cashiers, setCashiers] = React.useState([]);
  const [shops, setShops] = React.useState([]);
  const [gameType, setGameType] = React.useState();
  // const [shop, setShop] = React.useState("");
  // const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(30);
  const [processing, setProcessing] = useState(false);
  // const [selectedStartDate, setStartDate] = useState(new Date());
  const [selectedShowStartDate, setShowStartDate] = useState(new Date());
  const [selectedShowEndDate, setShowEndDate] = useState(new Date());
const [total,setTotal] = useState("");
const [selectedBets, selectBet] = useState([]);
  // const [selectedEndDate, setEndDate] = useState(new Date());
  const history = useNavigate();
  const [searchForm, setForm] = React.useState({
    shop: "",
  page:"",
  selectedStartDate: "",
  selectedEndDate: "",
  cashier:""
  });
  
  const { shop,  page, selectedStartDate,selectedEndDate,cashier } =
  searchForm;
 
  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...searchForm, [name]: value });
  };
  // Avoid a layout jump when reaching the last page with empty rows.
  const emptyRows =
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - reports.length) : 0;


 

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
  const checkStatus = (data) => {
    if (data === null) {
      return "OPEN";
    } else if (data) {
      return "WIN";
    } else {
      return "LOST";
    }
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
      .get(BASEURL + "bet")
      .then((response) => {
        console.log("report",response.data.get.data)
        if (response.data.get.data) {
          var report = response.data.get.data;
          setReports(response.data.get.data);
         
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
   
   
 
  }, []);

  
  


 
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
      Betslip
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
      
      <table class="table table-bordered table-striped" style={{width:"70%",marginLeft:"2%",fontSize:"70%"}}>
  <thead style={{color:"white",background:"#0177c1",height:"1px",}}>
  
    <tr className="agent">
      <th scope="col" style={{font: "inherit"}}>TicketID</th>
      <th scope="col" style={{font: "inherit"}}>Date</th>
      <th scope="col" style={{font: "inherit"}}>Game</th>
    
      {/* <th scope="col" style={{font: "inherit"}}>Round</th> */}
      <th scope="col" style={{font: "inherit"}}>Stake</th>
      <th scope="col" style={{font: "inherit"}}>Currency</th>
      <th scope="col" style={{font: "inherit"}}>win</th>
      <th scope="col" style={{font: "inherit"}}>Status</th>
  
     
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
    <tr className="agent">
     
           <td style={{width:"50%"}} ><b>{row.TicketId}</b></td>
           <td><b> <small>
                         {moment(row.createdAt).format("YYYY-MM-DD HH-MM")}
                       </small></b></td>
           <td><b><small>Spin to win</small></b></td>
           {/* <td><b>{row.round}</b></td> */}
        
           <td><b>{row.stake}</b></td>
           <td ><b>ETH</b></td> 
           <td><b>{row.win}</b></td> 
           <td><b> {checkStatus(row.winStatus)}</b></td>
           
        
         
           </tr>
            )}
     
   
    
               
    
  </tbody>
</table>
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
