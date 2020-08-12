import React from 'react';

import "./RedRoom.css"

import { changePartyDate,
          changeNotThrowingText, 
          changeRedRoomPasswordChecked,
          appToInitialState } from '../../../actions/actions';
import { connect } from 'react-redux';
import { selectRedRoomData } from '../../../selectors/selectors'

import axios from 'axios'
import config from '../../../config.json'

import { getUpdatedAppState } from '../../../utils.js'



var miscText = ""
var day = ""
var month = ""

var notThrowingText = ""

class RedRoom extends React.Component {
  constructor(props) {
    super(props)
    this.store = props
    this.state = props.redRoomData

    this.throwingStatus = this.state.throwing
    this.redRoomPasswordChecked = this.state.redRoomPasswordChecked
  }

  //When the component is added to the DOM tree, this is run
  //This dispatch could also be run in the 'else' in the render below------------------------------------
  componentDidMount(){ 
    this.store.dispatch(changeRedRoomPasswordChecked( false ))
  }

  //Change throwing statues ----------------------------------------------------------------------------
  async changeThrowing( str ) {
    if(str === 'true') { //converts string to boolean
      const params = {
        dataName: config.databaseNames.THROWING_STATUS,
        updatedInfo: true
      }
      try {
        await axios.put(`${config.api.invokeURL}/RedRoom`, params)
      } catch (err) {
        console.log(`Error in changeThrowingState: ${err}`)
      }
    }
    else {
      const params = {
        dataName: config.databaseNames.THROWING_STATUS,
        updatedInfo: false
      }
      try {
        await axios.put(`${config.api.invokeURL}/RedRoom`, params)
      } catch (err) {
        console.log(`Error in reaching the database to change the throwing status : ${err}`)
      }
    }
    getUpdatedAppState(this.store)
  }

  //Change the party date -----------------------------------------------------------------------------------
  async updatePartyDate( event ) {
    event.preventDefault(); //stops rerender
    var newPartyDate = "MM/DD"

    //Build the new party date string
    if(miscText !== "" && month === "" && day === ""){
      newPartyDate = miscText
    }
    else if (miscText !== ""){
      newPartyDate = miscText + " - " + month + "/" + day
    }
    else{
      newPartyDate = month + "/" + day
    }

    //Set the database partyDate
    const params = {
      dataName: config.databaseNames.PARTY_DATE,
      updatedInfo: newPartyDate
    }
    try {
      console.log(params)
      await axios.put(`${config.api.invokeURL}/RedRoom`, params)
      getUpdatedAppState(this.store)
    } catch (err) {
      console.log(`Error in reaching the database to change the party date: ${err}`)
    }
  }

  //Change not throwing text -----------------------------------------------------------------------------
  async inputNewNotThrowingText( event ) {
    event.preventDefault()
    
    //Set the database notThrowingText
    const params = {
      dataName: config.databaseNames.NOT_THROWING_TEXT,
      updatedInfo: notThrowingText
    }
    try {
      console.log(params)
      await axios.put(`${config.api.invokeURL}/RedRoom`, params)
      getUpdatedAppState(this.store)
    } catch (err) {
      console.log(`Error in reaching the database to change the not throwing text: ${err}`)
    }
  }

  //Reset the App to default (for hard coded state changes, this should be changed)-------------------------------
  async resetAppToInitialState ( event ) {
    event.preventDefault()

    config.databaseNamesArray.map(async (dataName) => {
      const params = {
        dataName: dataName,
        updatedInfo: config.appInitialState[dataName]
      }
      console.log(params)
      try {
        console.log(params)
        await axios.put(`${config.api.invokeURL}/RedRoom`, params)
        getUpdatedAppState(this.store)
      } catch (err) {
        console.log(`Error in reaching the database to change the not throwing text: ${err}`)
      }
    })

    document.getElementById("redRoomForm").reset()

  }

  render(){
      //If not allowed in-------------------------------------------------------------------------------------
    if(!this.redRoomPasswordChecked){
      return(
        <p>Turn back, you shouldn't be here</p>
      )
    }
    else{
      return(
        <>
          <h1 id="redRoomWelcomeText">Welcome to the Red Room</h1>
          <p id="redRoomWelcomeText">Do not reload the page, you will have to re-enter the password</p>
          <p id="redRoomWelcomeText">TroubleShooting Known issues: If you enter text and the submit button doesn't change it, remove a character, re-add it, then submit</p>
          {/*
            Some known bugs that can use fixing, the submit buttons collecting the values from the 
            the text inputs get weird after text was written and the "isthrowing" radio buttons
            are pressed, due to the rerendering of the page
            You can make one submit button to take all the data and rerender after that, but it's cool
            to see the page reload after clicking the buttons
            Also, on the initialState load button, the values in the text fields should be reset to nothing
          */}
          <br/>
          <form className="InputContainer" id = "redRoomForm">

          <p>Are we throwing?</p>
            <input type ="radio" 
              id="throwingTrueButton" 
              name="changeThrowingStatus" 
              value= "true"
              onClick = {event => this.changeThrowing(event.target.value)} />
            <label htmlFor="throwingTrueButton">Yes</label>
            <input type ="radio" 
              id="throwingFalseButton" 
              name="changeThrowingStatus" 
              value="false"
              onClick = {event => this.changeThrowing(event.target.value) }/>
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

            <button onClick ={(event) => { this.updatePartyDate(event) }}> Submit </button>

            <br/>
            <br/>

            <p>What should we tell people when we're not throwing?</p>
            <input 
              id = "notThrowingTextInput" 
              type="text"
              placeholder = {this.notThrowingText}
              onChange = {(event) => {notThrowingText = event.target.value}} />

            <button onClick ={(event) => { this.inputNewNotThrowingText(event) }}> Submit </button>

            <br/>
            <br/>
            <br/>

            <div className="appToInitialStateContainer">
              <button onClick ={(event) => { this.resetAppToInitialState(event) }}> Initial State </button>
              <p>Clicking this button (necessary for password change) will take the state of the app to:</p>
                <ol>
                  <li>throwing: "false"</li>
                  <li>partyDate: "MM/DD"</li>
                  <li>notThrowingText: "Due to Covid-19, open gatherings are indefinitely postponed</li>
                  <li>redRoomPassword: "Turck417"</li>
                  <li>redRoomPasswordChecked: "false"" (Needed for RedRoom security)</li>
                </ol>
                <p><b>^ If you're coding and if you change the initial state, change the hard code here ^</b></p>
            </div>

          </form>
        </>
      )
    }
  }
}

const mapStateToProps = state => ({
  redRoomData: selectRedRoomData(state)
})

export default connect(mapStateToProps)(RedRoom)