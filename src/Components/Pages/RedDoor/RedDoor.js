import React from 'react';



import "./RedDoor.css"
import ClickArea from './ClickArea';


function RedDoor( { redRoomPassword } ) {
  console.log("RedDoor " +redRoomPassword)
  return(
    <div className = "RedDoorContainer">
        <img 
        className ="redDoorImage"
        src={require("../../../assets/reddoor.jpg")} 
        alt="reddoor" 
        height="70%"
        />
      {/* <div hidden>password</div> */}
      <ClickArea redRoomPassword= { redRoomPassword }/>

    </div>
  )
}

export default RedDoor;