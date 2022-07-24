import React, { Fragment, useState, useEffect } from "react";

import * as RiIcons from "react-icons/ri";
import * as BiIcons from "react-icons/bi";

import "./Css/navBar.css";
import { IconContext } from "react-icons";
import axios from "axios";
import { BASEURL } from "../Functions/apiUrl";

function NavBar(props) {
  const [round, setRound] = useState(1234);

  useEffect(() => {
    axios.interceptors.request.use(
      (config) => {
        config.headers.authorization = `${localStorage.getItem("token")}`;
        return config;
      },
      (error) => {
        return Promise.reject(error);
      }
    );
    try {
      axios.get(BASEURL + "round/last").then((response) => {
        setRound(response.data.round);
      });
    } catch (e) {
      alert("Some error occured...try again");
    }
  }, []);
  return (
    <Fragment>
      <IconContext.Provider value={{ color: "" }}>
        <div className='navBar py-1 sticky-top'>
          <div className='d-flex justify-content-between'>
            <div className='p-2'>
              <h3 className='text-white'> {props.timer} Spin 2 Win Royale</h3>
            </div>

            <div className='ml-auto p-2 '>
              <div className='p-2 d-inline'>
                <div className='d-inline menu-bars'>
                  {" "}
                  <RiIcons.RiMoneyDollarCircleFill
                    color='white'
                    className='m-1'
                    size={30}
                    onClick={() => {
                      props.setPayTable(true);
                    }}
                  />
                  <BiIcons.BiNotepad
                    color='white'
                    className='m-1'
                    size={30}
                    onClick={() => {
                      if (props.kunoActive) {
                        props.setshopAdminKuno(true);
                      } else {
                        props.setshopAdmin(true);
                      }
                    }}
                  />
                  <button type='button' class='btn button1 btn-sm m-1'>
                    #{round}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </IconContext.Provider>
    </Fragment>
  );
}

export default NavBar;
