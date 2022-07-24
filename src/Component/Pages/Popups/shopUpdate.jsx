import React, { Fragment, useEffect, useState } from "react";
import Box from "@mui/material/Box";
import "../../../Style/main.css";

import { useAlert } from "react-alert";
import { TextField } from "@mui/material";
import axios from "axios";
import { BASEURL } from "../../../Constants/url";
import "./shopUpdate.css"
import { Button, MenuItem, Select, InputLabel } from "@mui/material";
import { Email } from "@mui/icons-material";
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

export default function ShopUpdate(props) {
  const alert = useAlert();

  const [userID, setUserID] = useState("");
  const [shopName, setShopName] = useState(props.name);
  const [shopAddress, setShopAddress] = useState(props.shop.address);
  const [shopTelephone, setShopTelephone] = useState(props.shop.phone);
  const [email, setEmail] = useState(props.shop.percent);
  const [licenseNo, setLicenseNo] = useState();
  const [users, setUsers] = useState([]);

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
      .get(BASEURL + "account")
      .then((response) => {
        if (response.data.get.data) {
          // console.log(response.data.get.data);
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

  const handleEditShop = () => {
    const param = {
      address:shopAddress,
      phone:shopTelephone,
      percent:email,
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
          alert.success("Shop Updated ");
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

  return (
    <div className="td">
       <table class=" form" style={{width:"28%"}} >
  <thead>

    <tr >
      <td colspan="3" className="hd">Edit Shop</td>
    </tr>
  </thead>
  <tbody>
    
  
  {/* <tr className="r1">    <td className="label"  ><b>User Name</b></td>
         <td colspan="2"> <select className="select"value={userID}
                onChange={(e) => handleIDChange(e)} >
         
        {users.map((shop, key) => (
        <option value={shop.id}>{shop.username}</option>))}
      
    </select></td>
         </tr> */}
         <tr className="r1">    <td className="label"  ><b>Shop Name</b></td>
         <td colspan="2"><input disabled type="text"  value={shopName}
            onChange={(e) => handleNameChange(e)}/></td>
         </tr>
         <tr className="r0">    <td className="label" ><b>Shop Address</b></td>
         <td colspan="2"><input type="text"  value={shopAddress}
            onChange={(e) => handleAddressChange(e)}/></td>
         </tr>
         <tr className="r1">    <td className="label"  ><b>Telephone</b></td>
         <td colspan="2"><input type="text" value={shopTelephone}
            onChange={(e) => handleTelChange(e)}/></td>
         </tr>
         <tr className="r0">    <td className="label"  ><b>Percent</b></td>
         <td colspan="2"><input type="text" value={email}
            onChange={(e) => handleEmailChange(e)}/></td>
         
         </tr>
         
         <tr>
         <td colspan="2">
         <input type="submit" name="submit" id="submit"  onClick={handleEditShop} value="Save"/>
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
  );
}
