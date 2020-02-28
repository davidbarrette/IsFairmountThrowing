import React from 'react';
import './App.css';
import frog1 from './assets/frog1.png'
import frog2 from './assets/frog2.png'
import frog3 from './assets/frog3.png'



class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      throwing: false,
      date: "Not until Franklin & Zoraiz pass their econ exams"
    }
  }



  renderScreen() {
    if(this.state.throwing) {
      return (
        <div className = "App-throwing">
          <p style={{fontSize: '80px', margin: 0}}> YES </p>
          <p style={{fontSize: '25px'}}> {this.state.date} </p>
          <p style={{fontSize: '15px'}}> (Also probably post founders day)</p>


        </div>
      );
    } else {
      return (
        <div className = "App-notThrowing">
          <p style={{fontSize: '80px', margin: 0}}> No. </p>
          <p style={{fontSize: '15px'}}> {this.state.date} </p>
          <p style={{fontSize: '15px'}}> (Also probably post founders day)</p>

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
