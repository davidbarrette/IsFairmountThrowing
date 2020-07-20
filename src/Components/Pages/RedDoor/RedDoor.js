import React from 'react';



import "./RedDoor.css"
import ClickArea from './ClickArea';


function RedDoor( { redRoomPassword, redRoomPasswordMet, setRedRoomPasswordMet } ) {
  console.log("RedDoor " +redRoomPassword)
  return(
    <div className = "RedDoorContainer">
        <img 
        className ="redDoorImage"
        src={require("../../../assets/reddoor.jpg")} 
        alt="reddoor" 
        height="70%"
        />
      <ClickArea 
        redRoomPassword= { redRoomPassword }
        redRoomPasswordMet = { redRoomPasswordMet }
        setRedRoomPasswordMet = { setRedRoomPasswordMet }/>

    </div>
  )
}

export default RedDoor;