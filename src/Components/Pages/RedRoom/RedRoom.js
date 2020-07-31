import React from 'react';


import "./RedRoom.css"

import { changePartyDate, changeThrowingStatus, changeNotThrowingText, changeRedRoomPasswordChecked } from '../../../actions/actions';
import { connect } from 'react-redux';
import { selectRedRoomData } from '../../../selectors/selectors'


var miscText = ""
var day = ""
var month = ""

var notThrowingText = ""

class RedRoom extends React.Component {
  constructor(props) {
    super(props)
    this.store = props
    this.redRoomPasswordChecked = props.redRoomData.redRoomPasswordChecked
    this.notThrowingText = props.redRoomData.notThrowingText
  }

  //When the component is added to the DOM tree, this is run
  //This dispatch could also be run in the 'else' in the render below------------------------------------
  componentDidMount(){ 
    this.store.dispatch(changeRedRoomPasswordChecked( false ))
  }

  //Change throwing statues ----------------------------------------------------------------------------
  changeThrowing( str ) {
    if(str === 'true') { //converts string to boolean
      this.store.dispatch(changeThrowingStatus( true ))
    }
    else{
      this.store.dispatch(changeThrowingStatus( false ))
    }
  }

  //Change the party date -----------------------------------------------------------------------------------
  updatePartyDate( event ) {
    event.preventDefault(); //stops rerender
    var newPartyDate = "MM/DD"

    if(miscText !== ""){
      newPartyDate = miscText + " - " + month + "/" + day;
    }
    else{
      newPartyDate = month + "/" + day;
    }
    this.store.dispatch(changePartyDate( newPartyDate ))
  }

  //Change not throwing text -----------------------------------------------------------------------------
  inputNewNotThrowingText( event ) {
    event.preventDefault()
    this.store.dispatch(changeNotThrowingText( notThrowingText ))
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
          */}
          <br/>
          <form className="InputContainer">

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