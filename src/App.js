import React from 'react';
import './App.css';




class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      throwing: false,
      date: "party july 2121 (100 year reunion) - theme: what you would wear to your grave"
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
