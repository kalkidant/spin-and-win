import { React, useState } from "react";
import "./Css/login.css";
import Messaging from "react-cssfx-loading/lib/Messaging";
import { useAlert } from "react-alert";
// import { authenticat, validateTerminal } from "../Functions/Credentials";
import axios from "axios";
import { BASEURL } from "../Functions/apiUrl";

export default function LogIn() {
  const [login, setLogin] = useState({ username: "", password: "" });
  const [processing, setProcessing] = useState(false);
  const alert = useAlert();
  const [isActive, setIsActive] = useState("");
const [attempt,sertattempt] = useState(3)
  const handleOnChange = (e) => {
    setLogin((prevState) => {
      return {
        ...prevState,
        [e.target.name]: e.target.value,
      };
    });
  };
const terminals = ()=>{
 
  localStorage.removeItem("terminal")

  window.location.pathname = "/terminal"
}
  const handleSubmit = (e) => {
    e.preventDefault();
   
    if (login.username === "" || login.password === "") {
      alert.show("Empty username or password");
    } else {
      setProcessing(true);

      var credential = {
        username: login.username,
        password: login.password,
        terminal: localStorage.getItem("terminal"),
      };
      if (localStorage.getItem("token")) {
        setProcessing(false);
        // window.location.pathname = "/";
      }
      axios
        .post(BASEURL + "auth/cashier/login/", credential)
        .then((response) => {
          if (response.data.status === "success" ) {
           
            localStorage.setItem("token", response.data.data.token);
            localStorage.setItem("user", response.data.data.username);
            
            
            setProcessing(false);
            
            window.location.pathname = "/";
            
          }  else if(response.data.status === "error" && attempt == 0){
            sertattempt(attempt-1) 
            
            localStorage.removeItem("terminal")} 
          else {
            sertattempt(attempt-1) 
            
            setProcessing(false);
            alert.show("Incorrect Credential ");
            if( attempt == 0)
            {
              localStorage.removeItem("terminal")
            }
          }
        })
        .catch((err) => {
          setProcessing(false);
console.log(err)
          alert.show("Incorrect Credential ");
          sertattempt(attempt-1) 
            
          setProcessing(false);
          
          if( attempt === 0)
          {
            localStorage.removeItem("terminal")
          }
   
        });
    }
  };

  if (!localStorage.getItem("terminal")) {
    window.location.pathname = "/terminal";
  } else {
    return (
      <div className='mainDiv center'>
        <form className='form-inline'>
          <div className='row'>
            <div className='form-group-sm mb-2 col-12 '>
           
              <input
                type='text'
                className='form-control '
                name='username'
                placeholder='Username'
                onChange={(e) => handleOnChange(e)}
              />
            </div>
            <div className='form-group mb-2 col'>
              <input
                type='password'
                className='form-control'
                name='password'
                placeholder='Password'
                onChange={(e) => handleOnChange(e)}
              />
            </div>
            <div className='row'>
              <div className=''></div>
              <div className='col-lg-2 center mt-3'>
                {processing ? (
                  <Messaging
                    color='#ff5b00'
                    width='10px'
                    height='10px'
                    duration='1s'
                  />
                ) : (
                  <>
                  &nbsp;&nbsp;
                  <button
                    type='submit'
                    className='btn btn-warning mb-2'
                    onClick={handleSubmit}
                  >
                    Login{" "}
                  </button>
                  &nbsp;
                  &nbsp;
                  {/* <button
                type='button'
                  className='btn btn-danger mb-2'
                  onClick={terminals}
                
                
                >
                  Back
                </button> */}
                </>
                )}
               
              </div>
            </div>
          </div>
        </form>
      </div>
    );
  }
}
