// App created by David Barrette and Colin Kirby (Macalester 2021)
// For questions on how things work contact David, he is more than happy to help teach

import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import { getUpdatedAppState } from './utils.js'

import Throwing from './Components/Throwing/Throwing.js'
import NavigationBar from './Components/NavigationBar/NavigationBar.js';

// import { changePartyDate, changeThrowingStatus, changeNotThrowingText } from './actions/actions.js';

// import axios from 'axios'
// const config = require("./config.json")

/**
 * in order to know whats going on with the state of the app, and you have little experience with Redux (store, actions, reducers, selectors, etc.)
 * contact David Barrette, he will help to explain the process, as stated above
 * 
 * A security thing: should put redRoomPassword in Database so it can't be found on GitHub, isn't super important
 * b/c this isn't a big app, just best practice
 * 
 * ALSO --> In order to practice with Git, like in regular web development, there should be mutiple branches denoting the state of the codebase, I think
 * for this website keep it simple initially with a development branch for creating new features and a deployment branch, a stable branch that is what a 
 * user sees when they go to the website.  Just merge in development features when they're stable
 * 
 * https://www.tutorialspoint.com/git/git_tutorial.pdf
 */


//This is the data that is housed in DynamoDB (the database holding the state of the app)


class App extends React.Component {
  constructor(props) {
    super(props)
    this.store = props
  }

  componentDidMount(){
    getUpdatedAppState(this.store)
  }

  render(){
    return(
      <>
        <Throwing/>
        <BrowserRouter>
          <NavigationBar/> {/* loads itself and handles the loading of the page component */}
        </BrowserRouter>
      </>
    );
  }
}
const mapStateToProps = state => ({
  state
})
export default connect(mapStateToProps)(App)
