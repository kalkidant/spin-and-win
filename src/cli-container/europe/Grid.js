import React from 'react'
import "./spinandwin.css"
export default function Grid (props) {
  console.log("datasss",props.arrOfObj)
  const cells = props.arrOfObj.map(obj => 
   
    <div 
    className="item" ><b style={{backgroundColor:"rgba(0, 0, 0, 0.5)"}}>{obj.ticket}</b></div>)

  return (

    <div className="container">
     {cells}
    </div>
  )
}