import React from 'react';

import "./RedDoor.css"

export default class RedDoor extends React.Component{
    render(){
      return(
        <div className = "RedDoorContainer">
          <img src={require("../../../assets/reddoor.jpg")} alt="reddoor" height="100%"/>
        </div>
      )
    }
}