// App created by David Barrette and Colin Kirby (Macalester 2021)
// For questions on how things work contact David, he is more than happy to help teach

import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import Throwing from './Components/Throwing/Throwing.js'
import NavigationBar from './Components/NavigationBar/NavigationBar.js';

import { changePartyDate, changeThrowingStatus, changeNotThrowingText } from './actions/actions.js';

import axios from 'axios'
const config = require("./config.json")

/**
 * in order to know whats going on with the state of the app, and you have little experience with Redux (store, actions, reducers, selectors, etc.)
 * contact David Barrette, he will help to explain the process, as stated above
 * 
 * A security thing: should put redRoomPassword in Database so it can't be found on GitHub, isn't super important
 * b/c this isn't a big app, just best practice
 */


//This is the data that is housed in DynamoDB (the database holding the state of the app)

class App extends React.Component {
  constructor(props) {
    super(props)
    this.store = props
  }

  fetchStateData = async (dataName) => {
    //TESTsva
    try {
      const response = await axios.get(`${config.api.invokeURL}/${dataName}`)
      //THIS SWITCH SHOULD BE TURNED INTO ONE FUNCTION BY CHANGING ACTIONS b/c in the response we have an 'id' that is the same as the 'dbName_...'s consts 
      switch (dataName){
        case config.databaseName.THROWING_STATUS:
          this.store.dispatch(changeThrowingStatus(response.data.info))
          break

        case config.databaseName.PARTY_DATE:
          this.store.dispatch(changePartyDate(response.data.info))
          break

        case config.databaseName.NOT_THROWING_TEXT:
          this.store.dispatch(changeNotThrowingText(response.data.info))
          break

        default:
          console.log(`Unable to set state of app with response data: ${response.data}`)
      }

    }catch(err){
      console.log(`ERROR: ${err}`)
    }
  }
  componentDidMount(){
    const appDataInDDB = [
      config.databaseName.THROWING_STATUS, 
      config.databaseName.dbName_PARTY_DATE, 
      config.databaseName.dbName_NOT_THROWING_TEXT
    ]
    appDataInDDB.map(dataName => {
      this.fetchStateData(dataName)
    });
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
<<<<<<< HEAD
const mapStateToProps = state => ({
  state
})

export default connect(mapStateToProps)(App)
=======
export default (App)
>>>>>>> refs/remotes/origin/master
