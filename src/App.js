// App created by David Barrette and Colin Kirby (Macalester 2021)
// For questions on how things work contact David, he is more than happy to help teach

import React from 'react';

import Throwing from './Components/Throwing/Throwing.js'
import NavigationBar from './Components/NavigationBar/NavigationBar.js';

import HomePage from './Components/Pages/HomePage/HomePage.js'
import PicturePage from './Components/Pages/PicturePage/PicturePage.js'
import RedDoor from './Components/Pages/RedDoor/RedDoor.js';
import RedRoom from './Components/Pages/RedRoom/RedRoom.js';

import EventHandler from './Components/EventEmitter.js'

import {BrowserRouter, Route, Switch } from 'react-router-dom';


class App extends React.Component {
  constructor(props) {
    super(props);

    const eventHandler = new EventHandler()
    eventHandler.handleEventsToListenFor(eventHandler)
    //eventHandler.logTest("This message should be emitted")

    this.state = {
      throwing: false,
      partydate: "MM/DD/YYYY",
      notThrowingText: "Due to Covid-19, open gatherings are indefinitely postponed"
    }
  }

  render() {
      return (
        <>
          <Throwing
            throwing = {this.state.throwing} 
            partydate= {this.state.partydate}
            notThrowingText= {this.state.notThrowingText}/>
            
          <BrowserRouter>

          <NavigationBar/>

          {/* <Switch>
            {routes.map(({Path, Component}) => (
              <Route
                exactPath={Path}
                
                />
            ))}
          </Switch> */}

            <Switch>
              <Route exact path='/' component ={HomePage} exact/>
              <Route path='/PicturePage' component ={PicturePage} exact/>
              <Route path='/RedDoor' 
                render={(props) => (
                <RedDoor {...props} eventHandler= {this.eventHandler} />
                )}
              />
              <Route path='/RedRoom' component ={RedRoom} exact/>

            </Switch>
          </BrowserRouter>

        </>
      );
  }
}

export default App;