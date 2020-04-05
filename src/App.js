import React from 'react';
import './App.css';
import frog1 from './assets/frog1.png'
import frog2 from './assets/frog2.png'
import frog3 from './assets/frog3.png'
import plague1 from './assets/plague1.png'
import plague2 from './assets/plague2.png'




class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      throwing: true,
      date: "Darty September 7th 2020"
    }
  }



  renderScreen() {
    if(this.state.throwing) {
      return (
        <div className = "App-throwing">
          <p style={{fontSize: '100px', margin: 0}}> YES </p>
          <p style={{fontSize: '30px'}}> {this.state.date} </p>

          <div style ={{flex: 1, alignItems: 'horizontal', margin: 'auto'}}>

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
  }

  render() {
    return (
      <> {this.renderScreen()} </>
    );
  }
}

export default App;
