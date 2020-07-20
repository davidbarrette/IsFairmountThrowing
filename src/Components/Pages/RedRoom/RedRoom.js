import React from 'react';
// import { useHistory } from "react-router-dom";
// import state from "../../../App.js"

import "./RedRoom.css"


function RedRoom( {setThrowing, setPartyDate, setNotThrowingText}) {

  var miscText = ""
  var day = ""
  var month = ""
  var year = ""
  function updatePartyDate( event ) {
    event.preventDefault();
    var newPartyDate = "MM/DD"

    if(miscText !== ""){
      newPartyDate = miscText + " - " + month + "/" + day;
    }
    else{
      newPartyDate = month + "/" + day;
    }
    setPartyDate(newPartyDate)
  }

  function changeThrowing( str ) {
    if(str === 'true') {
      setThrowing( true )
    }
    else{
      setThrowing(false)
    }
  }

  var notThrowingText = ""
  function changeNotThrowingText( event ) {
    event.preventDefault()
    setNotThrowingText(notThrowingText)
  }

  return(
    <>
      <h1 id="redRoomWelcomeText">Welcome to the Red Room</h1>
      <br/>
      <form className="InputContainer">

      <p>Are we throwing?</p>
        <input type ="radio" 
          id="throwingTrueButton" 
          name="changeThrowingStatus" 
          value= "true"
          onClick = {event => changeThrowing(event.target.value)} />
        <label htmlFor="throwingTrueButton">Yes</label>
        <input type ="radio" 
          id="throwingFalseButton" 
          name="changeThrowingStatus" 
          value="false"
          onClick = {event => changeThrowing(event.target.value) }/>
        <label htmlFor="throwingFalseButton">No</label>


        <br/>
        <br/>

        <p>When is the party?</p>
        <input 
          id = "miscText" 
          type="text" 
          name = "miscText"
          placeholder = "This Saturday"
          onChange = {(event) => {miscText = event.target.value}} />
        <label> - </label>

        <input 
          id = "Month" 
          type="text" 
          name = "Month"
          placeholder = "MM"
          onChange = {(event) => {month = event.target.value}} />

          <label> / </label>
      
          <input 
          id = "Day" 
          type="text" 
          name = "Day"
          placeholder = "DD"
          onChange = {(event) => {day = event.target.value}} />

        <button onClick ={(event) => { updatePartyDate(event) }}> Submit </button>

        <br/>
        <br/>

        <p>What should we tell people when we're not throwing?</p>
        <input 
          id = "notThrowingTextInput" 
          type="text"
          onChange = {(event) => {notThrowingText = event.target.value}} />

        <button onClick ={(event) => { changeNotThrowingText(event) }}> Submit </button>
      </form>
    </>
  )
}

export default RedRoom;