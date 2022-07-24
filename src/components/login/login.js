import React ,{useEffect,useState}from "react";
import  { useNavigate } from "react-router-dom";
import EuropeanRoulette from "../../europeanRouletteApp";


import "./login.css"
const Login = () => {

	


	const [errorMessage, setErrorMessage] = useState('');

	const [terminal,setTerminal]=useState("");
	// const [shopname,setShopName]=useState("");
	const history=  useNavigate() ;






//    const myLocalStorage = {
// 		getItem(key) {
// 		  return localStorage.getItem(key)
// 		},
// 		setItem(key, value, expiry) {
// 		  // if the expiry time is 0, it means there is no need to add the item
// 		  if (expiry === 0) return
// 		  localStorage.setItem(key, value)
// 		  let timer;
// 		  if(expiry) {
// 			timer = setTimeout(()=> {
// 			  this.removeItem(key);
// 			  timer && clearTimeout(timer)
// 			}, expiry)
// 		  }
// 		},
// 		removeItem(key) {
// 		  localStorage.removeItem(key)
// 		},
// 		clear() {
// 		  localStorage.clear()
// 		}
// 	  }




	async function login(){
		// let key=(terminal);
        let result = await fetch(`${process.env.REACT_APP_MAIN_END_POINT_lOGIN}`,{

		method:'POST',
		headers:{
			"Content-Type":"application/json",
			"Accept":"application/json",
	
			
		   
		},
		body:JSON.stringify({terminal})
		})
		// .catch(err=>{

		// })
     
        
		result= await result.json();
		console.log(result);

		// console.log(result.get.Shop)
		setErrorMessage(result.message);
//   console.log(result.get.data.terminal);
		if(result.get.data.terminal===terminal&&result.get.data.active===true){
	    // myLocalStorage.setItem('terminal-info', JSON.stringify(key), 1*60*1000);
		localStorage.setItem("shop-info",JSON.stringify(result.get.Shop.shopname))
		localStorage.setItem("terminal-info",JSON.stringify(terminal))

		// localStorage.setItem("status",result.get.data.active)0
      
		history("/home")
	  }



	   
	}



	useEffect(()=>{

		if (localStorage.getItem('terminal-info')){
			
                  history('/home');
		}
	
   

		
	})





		   

	
	  


    return(
<div id="cont">
 

<div id="container">

 
 
 	<div className="header">
 		<label>Terminal</label>
 	</div>
 	<div className="main">
 	
 			
 		
 				<input id="size" type="text" placeholder="Id" onChange={(e)=>setTerminal(e.target.value)} />
 			<br/>
 		
 		
 				<button id="login-btn"  onClick={login}>Login</button>


				 {errorMessage && (
                     <p style={{color:"white",fontWeight:"bolder"}} className="error"> {errorMessage} </p>
                   )}

 	
 	</div>
 </div>
</div>

);
};

export default Login;