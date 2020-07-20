// App created by David Barrette and Colin Kirby (Macalester 2021)
// For questions on how things work contact David, he is more than happy to help teach

import React, { useState } from 'react';

import Throwing from './Components/Throwing/Throwing.js'
import NavigationBar from './Components/NavigationBar/NavigationBar.js';

// import EventHandler from './Components/EventEmitter.js'

import {BrowserRouter } from 'react-router-dom';


// const routes = [
//   {
//     Path: "/",
//     Component: HomePage
//   },
    //    Do the rest
// ]


//CREATE AN ABOUT PAGE SO WE CAN GET MORE PEOPLE WORKING ON THE WEBSITE maybe




function App() {
  const [throwing, setThrowing] = useState(true)
  const [partyDate, setPartyDate] = useState("MM/DD/YYY")
  const [notThrowingText, setNotThrowingText] = useState("Due to Covid-19, open gatherings are indefinitely postponed")
  const [redRoomPassword, setRedRoomPassword] = useState("a")
  // const eventHandler = new EventHandler()
  // const [eventHandler, setEventHander] = useState(eventHandler)  Not used yet, but event handlers are fun
  // eventHandler.handleEventsToListenFor(eventHandler)
  // eventHandler.logTest("This message should be emitted")
  return(
    <>
      <Throwing
        throwing = { throwing } 
        partydate= { partyDate }
        notThrowingText= { notThrowingText }/>
        
      <BrowserRouter>
        <NavigationBar 
          redRoomPassword= { redRoomPassword }
          setThrowing = { setThrowing }
          setPartyDate = { setPartyDate }
          setNotThrowingText = { setNotThrowingText } /> {/* handles the loading of the page components */}
      </BrowserRouter>

    </>
  );
}

export default App;