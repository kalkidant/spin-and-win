import { useState } from "react";
import * as AiIcons from "react-icons/ai";
import "./Css/popup.css";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Results from "./Results";
import NumberBets from "./numberBets";
import AllIn from "./allIn";
import ExtraMarket from "./extraMarket";

export default function AdminShopKuno(props) {
  const [ticketStatus, setTicketStatus] = useState("primary");
  const [value, setValue] = useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
      <div
        role='tabpanel'
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box sx={{ p: 3 }}>
            <Typography>{children}</Typography>
          </Box>
        )}
      </div>
    );
  }

  TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
  };

  function a11yProps(index) {
    return {
      id: `simple-tab-${index}`,
      "aria-controls": `simple-tabpanel-${index}`,
    };
  }

  return props.shopAdminKuno ? (
    <div className='popup p-3'>
      <div className='popupInnerKuno px-2'>
        <div className={"row p-1 bg-primary"}>
          <div className='col-lg-11 '>
            <div className='row m-2 text-white'>
              <div className='col-lg-12'>Spin 2 Win Royale</div>
              <div className='col-lg-12'>
                <h5>
                  <b>PAYTABLE</b>{" "}
                </h5>
              </div>
            </div>
          </div>
          <div className='col-lg-1 p-3'>
            <AiIcons.AiOutlineClose
              color='white'
              size={25}
              onClick={() => props.setshopAdminKuno(false)}
            />
          </div>
        </div>
        <div className={"row p-1"}>
          <div className='col-lg-11'>
            <Box sx={{ width: "100%" }}>
              <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
                <Tabs
                  value={value}
                  onChange={handleChange}
                  aria-label='basic tabs example'
                >
                  <Tab label='NUMBER BETS' {...a11yProps(0)} />
                  <Tab label='ALL-IN/ NO-DRAW' {...a11yProps(1)} />
                  <Tab label='EXTRA MARKETS' {...a11yProps(2)} />
                </Tabs>
              </Box>
              <TabPanel value={value} index={0}>
                <NumberBets />
              </TabPanel>
              <TabPanel value={value} index={1}>
                <AllIn />
              </TabPanel>
              <TabPanel value={value} index={2}>
                <ExtraMarket />
              </TabPanel>
            </Box>
          </div>
        </div>
        <div className='row closeBtn mt-4 fixed-bottom'>
          <button
            type='button'
            className='btn bg-primary closeBtn'
            onClick={() => props.setshopAdminKuno(false)}
          >
            CLOSE{" "}
          </button>
        </div>
      </div>
    </div>
  ) : (
    ""
  );
}
