import React from 'react';


import "./RedDoor.css"


export default class RedDoor extends React.Component{
  constructor(props){
    super(props)

    this.state = {
      eventHandler: this.props.eventHandler
    }
  }
  passwordPrompt() {
    var password = prompt("What is the password?")
    // if(password != null){

    // }

    // console.log(this.props)
  }
  
  render(){
      return(
        <div className = "RedDoorContainer">
            <img 
            className ="redDoorImage"
            src={require("../../../assets/reddoor.jpg")} 
            alt="reddoor" 
            height="70%"
            />
          <div hidden>password</div>
          <div 
          className = "clickArea"
          onClick={this.passwordPrompt}/>

        </div>
      )
    }
}