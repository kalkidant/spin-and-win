import React, { useState, useEffect } from "react";
import socketIOClient from "socket.io-client";
const select = () => Math.floor(Math.random() * (36 - 0 + 1)) + 0;
const Api = () => {

 // const [time, settime] = useState(delay);
//  const [time, settime] = useState({second:0,minute:0,pause:false,result:null})
//  const ENDPOINT = "https://api.bet-shop.net/";
//  const [res, setResult] = useState({result:0})
//  useEffect(() => {
 
//   const socket = socketIOClient(ENDPOINT);
//   socket.on("FromAPI", data => {
//     settime({second:data.second,minute:data.minute,pause:data.pause,result:data.result})
 
//   });
//   // socket.on("FromAPI", data => {
//   //   setResult({result:data.result})
 
//   // });

//   return () => {
    
//   }
// }, [])

// const time = {second:0,minute:0,pause:false,result:null}

// const socket = socketIOClient(ENDPOINT);
// socket.on("FromAPI", data => {
//   time.result = data.result
// });

 // useEffect(() => {

 //   // settime(delay);
 // }, [delay]);

 // useEffect(() => {
 //   // if (!showTimer) return;
 //   const interval = setInterval(() => {
 //     settime((prevTime) => timeCounter(prevTime, interval));
 //   }, 1000);
 //   return () => clearInterval(interval);
 // }, [delay]);




  
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({
        win: {
          // number: "1",
          number: select(),
          color: "black",
          dozen: "1-12",
          odd: "even",
        },
      });
    }, 4000);
  });




}


// const Api =() => {
//  // const [time, settime] = useState(delay);
//  const [time, settime] = useState({second:0,minute:0,pause:false,result:null})
//  const ENDPOINT = "https://api.bet-shop.net/";
//  const [res, setResult] = useState({result:0})
//  useEffect(() => {

//    const socket = socketIOClient(ENDPOINT);
//    socket.on("FromAPI", data => {
//      settime({second:data.second,minute:data.minute,pause:data.pause,result:data.result})
  
//    });
//    // socket.on("FromAPI", data => {
//    //   setResult({result:data.result})
  
//    // });

//    return () => {
     
//    }
//  }, [])

//  // useEffect(() => {

//  //   // settime(delay);
//  // }, [delay]);

//  // useEffect(() => {
//  //   // if (!showTimer) return;
//  //   const interval = setInterval(() => {
//  //     settime((prevTime) => timeCounter(prevTime, interval));
//  //   }, 1000);
//  //   return () => clearInterval(interval);
//  // }, [delay]);






//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve({
//         win: {
//           // number: "1",
//           number: time.result,
//           color: "black",
//           dozen: "1-12",
//           odd: "even",
//         },
//       });
//     }, 4000);
//   });
// };

export default Api;