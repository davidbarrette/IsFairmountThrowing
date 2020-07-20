import React, { Component } from 'react';

import "./RedRoom.css"


function RedRoom( {setThrowing, setPartyDate, setNotThrowingText, redRoomPasswordMet, setRedRoomPasswordMet}) {
  function componentDidMount(){
    setRedRoomPasswordMet(false) /* Runs after this component is loaded, makes it so any reloading requires the user to resubmit password */
  }

  if(!redRoomPasswordMet){
    return(
      <p>Turn back, you shouldn't be here</p>
    )
  }

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
      {/*
        Some known bugs that can use fixing, the submit buttons collecting the values from the 
        the text inputs get weird after text was written and the "isthrowing" radio buttons
        are pressed, due to the rerendering of the page
        You can make one submit button to take all the data and rerender after that, but it's cool
        to see the page reload after clicking the buttons
      */}
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