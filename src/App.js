import React from 'react';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      throwing: true,
      date: "Party is this Saturday 11:00PM"
    }
  }



  renderScreen() {
    if(this.state.throwing) {
      return (
        <div className = "App-throwing">
          <p style={{fontSize: '80px', margin: 0}}> YES </p>
          <p style={{fontSize: '15px'}}> {this.state.date} </p>
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
