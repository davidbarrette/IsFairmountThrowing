// App created by David Barrette and Colin Kirby (Macalester 2021)
// For questions on how things work contact David, he is more than happy to help teach

import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import Throwing from './Components/Throwing/Throwing.js'
import NavigationBar from './Components/NavigationBar/NavigationBar.js';

/**
 * in order to know whats going on with the state of the app, and you have little experience with Redux (store, actions, reducers, selectors, etc.)
 * contact David Barrette, he will help to explain the process, as stated above
 */

class App extends React.Component {

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
export default (App)
