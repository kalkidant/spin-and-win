import React, { Fragment, useEffect, useState } from "react";
import Box from "@mui/material/Box";
import "../../Style/main.css";
import "../../Style/main.css";
import "reactjs-popup/dist/index.css";
import "./Navigation/searchPanal.css";
import "./agent.css";
import { useAlert } from "react-alert";
import { TextField } from "@mui/material";
import axios from "axios";
import { BASEURL } from "../../Constants/url";
import "./Popups/shopUpdate.css"
import { Button, MenuItem, Select, InputLabel } from "@mui/material";
import Navbar from "./Navigation/navbar";
const style = {
  position: "absolute",
  top: "60%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 500,
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
  borderRadius: "10px",
};

export default function AgentDetail(props) {
  const alert = useAlert();

  const [userID, setUserID] = useState("");
  const [shopName, setShopName] = useState(props.name);
  const [shopAddress, setShopAddress] = useState();
  const [shopTelephone, setShopTelephone] = useState();
  const [email, setEmail] = useState();
  const [licenseNo, setLicenseNo] = useState();
  const [users, setUsers] = useState([]);
  const [selectedShop, selectShop] = useState([]);
  const handleIDChange = (event) => {
    setUserID(event.target.value);
  };
  const handleNameChange = (event) => {
    setShopName(event.target.value);
  };
  const handleAddressChange = (event) => {
    setShopAddress(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };
  const handleLicenseNoChange = (event) => {
    setLicenseNo(event.target.value);
  };
  const handleTelChange = (event) => {
    setShopTelephone(event.target.value);
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
      .get(   `${BASEURL}adminAgentShop/getAllOtherShops/${props.agent.id}`)
      .then((response) => {
     
        if (response.data.shops) {
          
         
          setUsers(response.data.shops);
        } else {
          // alert.show("Error Fetching users ");
        }
      })
      .catch((err) => {
        // alert.show("Error try again ");
      });
  };

  const handleEditShop = () => {
    const param = {
      UserId: userID,
      shopname: props.name,
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
      .put(BASEURL + "shop/", param)
      .then((response) => {
        console.log(response);
        if (response.data.put.data) {
          // alert.success("Shop Updated ");
        } else {
          // alert.show("Error ....Try again ");
        }
      })
      .catch((err) => {
        // alert.show("Error ....Try again ");
      });
  };
  const handleSubmitBet= async()=> {
    var bets = [];
    
    props.select.forEach((bet) => {
      bets.push({
       bet
       
      });
    });
    try {
   await 
  
   axios
   .post(`${BASEURL}adminAgentShop/assignShops/${props.agent.id}`, {
    shopNames: props.select,
  })
       
        .then((response) => {
          
          if (response.data) {
            // setplacebate(response.data.bets[0])

            // setShow(true)
            // props.setTicketID(
            //   response.data.bets[0].eventId ? response.data.bets[0].eventId : ""
            // );
            
            // alert.success("Successful");
           
            // props.selectBets([])
            
          
           
          } else {
            // alert.show("Some error...try again");
          }
        })
       
    } catch (e) {
      // alert.show("Some error occured...try again");
    }
  }
  useEffect(() => {
    handleAllUsers();
  }, []);


console.log('------------------')

console.log(props.select)
  return (
    <>
    <Navbar/>
    <div className=" main">
        <div className="content1"> 
        Shops
      </div>
       <table   >
  <thead>

  </thead>
  <tbody>
    
  {users.map((row) =>
  <>
  
         <tr>  
          {props.select.includes(row.shopname)?(
            <td     className="label" ><input type="checkbox" checked name="shops[1]"   onClick={() => {
              let currentBet;
                   if (props.select.includes(row.shopname)) {
                     currentBet = props.select.filter(function (
                       e
                     ) {
                       return e !== row.shopname;
                     });

                     props.setSelect(currentBet);
                    
                 
                   } else {
                     
                     currentBet = props.select;
                     currentBet.push(row.shopname);
                    
                     props.setSelect(currentBet);
                   }
                 }} /></td>
          ):(
            <td    className="label" ><input type="checkbox" name="shops[1]"   onClick={() => {
              let currentBet;
                   if (props.select.includes(row.shopname)) {
                     currentBet = props.select.filter(function (
                       e
                     ) {
                       return e !== row.shopname;
                     });

                     props.setSelect(currentBet);
                    
                 
                   } else {
                     
                     currentBet = props.select;
                     currentBet.push(row.shopname);
                    
                     props.setSelect(currentBet);
                   }
                 }} /></td>
          )}
            
        
         <td colspan="2" style={{textAlign:"left"}}>{row.shopname}</td>
         </tr>
       
         </>
          )}
            <tr>
         <td colspan="2">
         <input type="submit" name="submit" id="submit"  onClick={handleSubmitBet} value="Save"/>
         </td>
         </tr>
         
        
   
    
               
    
  </tbody>
</table>
      {/* <Box
        sx={style}
        component='form'
        alignItems='center'
        justifyContent='center'
      >
        <div>
          <Select
            sx={{ m: 1, width: 200 }}
            labelId='demo-simple-select-label'
            id='demo-simple-select'
            value={userID}
                onChange={(e) => handleIDChange(e)}
            label='Users'
            color='primary'
        
          >
            {users.map((user, key) => (
              <MenuItem value={user.id}>{user.name}</MenuItem>
            ))}
          </Select>

          <TextField
            id='name'
            label='Shop Name'
            type='search'
            value={shopName}
            onChange={(e) => handleNameChange(e)}
            sx={{ m: 1, width: 200 }}
          />

          <TextField
            id='address'
            label='Shop Address'
            type='search'
            value={shopAddress}
            onChange={(e) => handleAddressChange(e)}
            sx={{ m: 1, width: 200 }}
          />

          <TextField
            id='tel'
            label='Tel'
            type='tel'
            value={shopTelephone}
            onChange={(e) => handleTelChange(e)}
            sx={{ m: 1, width: 200 }}
          />

          <TextField
            id='email'
            label='Shop Email'
            type='email'
            value={email}
            onChange={(e) => handleEmailChange(e)}
            sx={{ m: 1, width: 200 }}
          />
          <TextField
            id='license'
            label='Shop License'
            type='search'
            value={licenseNo}
            onChange={(e) => handleLicenseNoChange(e)}
            sx={{ m: 1, width: 200 }}
          />

          <Button
            variant='contained'
            color='secondary'
            onClick={handleEditShop}
            sx={{ m: 1, width: 200 }}
          >
            Add Shop
          </Button>
        </div>
      </Box> */}
    </div>
    </>
  );
}
