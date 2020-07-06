import React from 'react';

import Throwing from './Components/ThrowingComponent/Throwing.js'
import NavugationBar from './Components/NavigationBar/NavigationBar.js'

import HomePage from './Components/Pages/HomePage.js'
import PicturePage from './Components/Pages/PicturePage.js'

import {BrowserRouter, Route, Switch } from 'react-router-dom';
import NavigationBar from './Components/NavigationBar/NavigationBar.js';



class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      throwing: true,
      partydate: "EXAMPLE DATE MM/DD/YYYY"
    }
  }


  renderScreen() {
      return (
        <div className = "App-throwing">
          <p style={{fontSize: '100px', margin: 0}}> YES </p>
          <p style={{fontSize: '30px'}}> {this.state.date} </p>
          <p style={{fontSize: '20px'}}> Merch drop coming soon! </p>

          <div style ={{flex: 1, alignItems: 'horizontal', margin: 'auto'}}>
            <img src = {shirt}/>

          </div>




        </div>
      );
    } else {
      return (
        <div className = "App-notThrowing">
          <p style={{fontSize: '80px', margin: 0}}> No. </p>
          <p style={{fontSize: '15px'}}> {this.state.date} </p>

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
