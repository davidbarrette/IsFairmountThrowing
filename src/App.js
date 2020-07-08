import React from 'react';

import Throwing from './Components/ThrowingComponent/Throwing.js'
import NavugationBar from './Components/NavigationBar/NavigationBar.js'

import HomePage from './Components/Pages/HomePage.js'
import PicturePage from './Components/Pages/PicturePage.js'
import RedDoor from './Components/Pages/RedDoor/RedDoor.js';

import NavigationBar from './Components/NavigationBar/NavigationBar.js';

import {BrowserRouter, Route, Switch } from 'react-router-dom';




class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      throwing: false,
      partydate: "EXAMPLE DATE MM/DD/YYYY"
    }
  }


  renderScreen() {
      return (
        <div className = "App">
          <Throwing
            throwing = {this.state.throwing} 
            partydate= {this.state.partydate}/>

          <BrowserRouter>
          <NavigationBar/>
          <img src="./assets/download.jpg"/>
            <Switch>
            <img src="./assets/MacalesterCollegeAndHamms.jpg"/>


              <Route path='/' component ={HomePage} exact/>
              <Route path='/PicturePage' component ={PicturePage} exact/>
              <Route path='/RedDoor' component ={RedDoor} exact/>
            </Switch>
          </BrowserRouter>
          

        </div>
      );
  }

  render() {
    return (
      <> {this.renderScreen()} </>
    );
  }
}

export default App;
