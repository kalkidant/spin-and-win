import { useState } from "react";
import * as AiIcons from "react-icons/ai";
import "./Css/popup.css";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import OpenTickets from "./openTickets";
import Tickets from "./tickets";
import Turnover from "./turnover";
import Results from "./Results";
export default function AdminShop(props) {
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

  return props.shopAdmin ? (
    <div className='popup p-3'>
      <div className='popupInnerWider px-2'>
        <div className={"row p-1"}>
          <div className='col-lg-11'>
            <Box sx={{ width: "100%" }}>
              <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
                <Tabs
                  value={value}
                  onChange={handleChange}
                  aria-label='basic tabs example'
                >
                  <Tab label='OPEN TICKETS' {...a11yProps(0)} />
                  <Tab label='TICKETS' {...a11yProps(1)} />
                  <Tab label='TURNOVER' {...a11yProps(2)} />
                  <Tab label='RESULTS' {...a11yProps(3)} />
                </Tabs>
              </Box>
              <TabPanel value={value} index={0}>
                <OpenTickets />
              </TabPanel>
              <TabPanel value={value} index={1}>
                <Tickets />
              </TabPanel>
              <TabPanel value={value} index={2}>
                <Turnover />
              </TabPanel>
              <TabPanel value={value} index={3}>
                <Results />
              </TabPanel>
            </Box>
          </div>
          <div className='col-lg-1 p-3'>
            <AiIcons.AiOutlineClose
              color='black'
              size={25}
              onClick={() => props.setshopAdmin(false)}
            />
          </div>
        </div>
        <div className='row'></div>
      </div>
    </div>
  ) : (
    ""
  );
}
