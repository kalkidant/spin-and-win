// import React, { useState, useEffect } from "react";
// import socketIOClient from "socket.io-client";
// function result (){

//   const [res, setResult] = useState({result:0})
//   const ENDPOINT = "https://api.bet-shop.net/";
//   useEffect(() => {
 
//     const socket = socketIOClient(ENDPOINT);
//     socket.on("FromAPI", data => {
//       setResult({result:data.result})
   
//     });

//     return () => {
      
//     }
//   }, [])
//     return(

//         <div>

//         </div>
//     )
// }