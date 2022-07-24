import React, { useContext, useState, useEffect,useRef } from "react";
import  { useNavigate } from "react-router-dom";
import { SocketContext } from '../context/socket';
const Timer = ({ finishTimer }) => {
  // const [time, settime] = useState(delay);
  const [time, settime] = useState({round:0,second:0,minute:0,pause:false,result:null,kenoResult:null})
  // const ENDPOINT = "https://app.bet-shop.net/";
  const [res, setResult] = useState({result:0})
  // const [st, setSt] = useState(0)
  const st = useRef(0) 
  const history=  useNavigate() ;
  const [errorMessage, setErrorMessage] = useState('');
  // let st = 0 
  
const socket = useContext(SocketContext); 
  useEffect(() => {
 
   
    socket.on("FromAPI", data => {
      settime({round:data.round,second:data.second,minute:data.minute,pause:data.pause,result:data.result,kenoResult:data.keno_result})
    
   
    });
    // socket.on("FromAPI", data => {
    //   setResult({result:data.result})
   
    // });
    // return () => {
    //   socket.disconnect();
    // }
  }, [])



  useEffect(() => {
    if (time.minute ===0 ,time.second ===0,time.pause===true ) {
     
    if(st.current === 0){
      
    finishTimer();
      // setSt(prev => st+ prev)
      st.current +=1
    }

    }else{
      // setSt(prev => 0)
      st.current = 0
    }
    // console.log(time.kenoResult);
    // console.log(time.result,time.second,time.round)
  }, []);

  return (
    <div
      className={` ${
        time.second === 0  
      }`}
    >
      {time.minute === 0 && time.second === 0 ? (
        <p style={{fontSize:20,fontWeight:'bolder'}}>
          {`Closed`}
        </p>
      ) :
      
      (
        <div className="timer-lowering">
        <p className="text-2xl font-bold" >{`${time.minute
          .toString()
          .padStart(2, "0")}:${time.second
          .toString()
          .padStart(2, "0")}`}</p>
          </div>
      )}
      {/* <p>{time.result}</p> */}

      {/* {time.minute === 0 && time.second === 0 && !showTimer ? (
        <button
          onClick={() => {
            if (showTimer) return;
            settime(() => {
              setShowTimer(true);
              return { minute: 0, second: 30 };
            });
          }}
        >
          Again
        </button>
      ) : null} */}
    </div>
  );
};

export default Timer;

// Todo
// count down the timer given
// when its compelete run function
//

// needed to update the timer componenet
// delay has set from parent
// when counter is finished excute finish
// if parent has set showTimer is off clean

















// import React, { useState, useEffect } from "react";

// const Timer = ({ delay, finishTimer }) => {
//   const [countDown, setCountDown] = useState(delay);


//   useEffect(() => {
//     setCountDown(delay);
//   }, [delay]);

//   useEffect(() => {
//     // if (!showTimer) return;
//     const interval = setInterval(() => {
//       setCountDown((prevTime) => timeCounter(prevTime, interval));
//     }, 1000);
//     return () => clearInterval(interval);
//   }, [delay]);

//   // useEffect(() => {
//   //   if (countDown.minute === 0 && countDown.second === 0) {
//   //     console.log("finishTimer");
//   //     finishTimer();
//   //   }
//   // }, [countDown]);

//   const timeCounter = (prevTime, interval) => {
//     const { minute, second } = prevTime;
//     // in every second count down second and
//     // when if it reach to 60 count down min
//     // when both are 0 finish the count down
//     if (second === 0 && minute === 0) {
//       // stop showTimer
//       // setIsFinished(true);
//       // setShowTimer(false);
//       clearInterval(interval);
//       finishTimer();

//       return { minute: 0, second: 0 };
//     } else if (second === 0) {
//       //countdown the minute
//       return { ...prevTime, minute: minute - 1, second: 59 };
//     } else {
//       // countdown the second
//       return { ...prevTime, second: second - 1 };
//     }
//   };

//   return (
//     <div
//       className={`fixed m-2 p-2 bg-slate-200 top-4 left-3 ${
//         countDown.second === 0 ? "bg-orange-300" : ""
//       }`}
//     >
//       {countDown.minute === 0 && countDown.second === 0 ? (
//         <p className="text-3xl font-semibold">
//           {`${"--".padStart(2, "0")}:${"--".padStart(2, "0")}`}
//         </p>
//       ) : (
//         <p className="text-3xl font-semibold">{`${countDown.minute
//           .toString()
//           .padStart(2, "0")}:${countDown.second
//           .toString()
//           .padStart(2, "0")}`}</p>
//       )}

//       {/* {countDown.minute === 0 && countDown.second === 0 && !showTimer ? (
//         <button
//           onClick={() => {
//             if (showTimer) return;
//             setCountDown(() => {
//               setShowTimer(true);
//               return { minute: 0, second: 30 };
//             });
//           }}
//         >
//           Again
//         </button>
//       ) : null} */}
//     </div>
//   );
// };

// export default Timer;

// // Todo
// // count down the timer given
// // when its compelete run function
// //

// // needed to update the timer componenet
// // delay has set from parent
// // when counter is finished excute finish
// // if parent has set showTimer is off clean
