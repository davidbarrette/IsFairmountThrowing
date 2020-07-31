import React from 'react';

import { connect } from 'react-redux';


import "./RedDoor.css"
import { selectRedDoorData } from '../../../selectors/selectors';

import { changeRedRoomPasswordChecked } from '../../../actions/actions'


class RedDoor extends React.Component{  //Needs to be a class component to get store, and therefore dispatch, please try to figure out how not to have this
  constructor(props){
    super(props)
    this.store = this.props
    this.redRoomPassword = this.store.redDoorData.redRoomPassword

    //Any event handler functions (passed into the components rendered) needs this bind
    //https://www.freecodecamp.org/news/this-is-why-we-need-to-bind-event-handlers-in-class-components-in-react-f7ea1a6f93eb/#:~:text=When%20we%20bind%20the%20this,scope%20they%20are%20defined%20in.
    this.passwordPrompt = this.passwordPrompt.bind(this)
  }


  passwordPrompt() {
      const userPassword = prompt("What is the password?")
      
      if(userPassword === this.redRoomPassword){
          alert("Welcome")
          this.store.dispatch(changeRedRoomPasswordChecked(true))
          this.store.history.push('./RedRoom')
      }
      else if (userPassword !== null) {
          alert("Wrong")
      }
  }

  render(){
    return(
      <>
        <div className = "RedDoorContainer">
            <img 
            className ="redDoorImage"
            src={require("../../../assets/reddoor.jpg")} 
            alt="reddoor" 
            height="70%"
            onClick = { this.passwordPrompt }
            />
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
  
}

const mapStateToProps = state => ({
  redDoorData: selectRedDoorData(state)
})

export default connect(mapStateToProps)(RedDoor);