import React from 'react';
// import { useHistory } from "react-router-dom";
// import state from "../../../App.js"

import "./RedRoom.css"


export default class RedRoom extends React.Component{
  constructor(props){
    super(props)

    this.state = {
      Day : "",
      Month: "",
      Year: ""
    }
  }

  handleChange(event){
    console.log(event)
    // this.setState({timeframe: event})
  }

  render(){
      return(
        <>
          <p>Welcome to the Red Room</p>
          <br/>
          <h6>When is the party?</h6>
          <form className="InputContainer">
            <br/>
            <input 
              id = "Day" 
              type="text" 
              name = "Day"
              placeholder = "day"
              onChange ={this.handleChange("Day")}/>
              <label> / </label>
            <input 
              id = "Month" 
              type="text" 
              name = "Month"
              placeholder = "month"
              onChange ={this.handleChange("Month")}/>
              <label> / </label>
            <input 
              id = "Year" 
              type="text" 
              name = "Year"
              placeholder = "year"
              onChange ={this.handleChange("Year")}/>
          </form>
        </>
      )
    }
}