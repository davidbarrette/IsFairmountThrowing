import React from 'react';



import "./RedDoor.css"
import ClickArea from './ClickArea';


function RedDoor( { redRoomPassword, redRoomPasswordMet, setRedRoomPasswordMet } ) {
  console.log("RedDoor " +redRoomPassword)
  return(
    <>
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

      <p hidden>
        Well you found the secret.  Behind this door lies the RedRoom.
        It is password protected because it helps those not experienced with
        coding to set the state of the app (Whether or not we're throwing, the date, etc.)
        Anyone with the password can alter the state which is why we can't allow just Anyone
        to have it.  Thanks for taking the time to try this! If you want to learn more contact
        David Barrette, Macalester 2021
      </p>
    </>
  )
}

export default RedDoor;