import React from 'react';
import './Throwing.css';

export default class IsThrowing extends React.Component{
    render(){
      
      var notThrowingText = "Due to Covid-19, open gatherings are indefinitely postponed";
      
      if(this.props.throwing){
        return (
          <div className = "header-container">
            <div className = "App-throwing">
                <p style={{fontSize: '100px', margin: 0}}> Yes! </p>
                <p style={{fontSize: '30px'}}> {this.props.partydate} </p>
            </div>
          </div>
          );
        }
      else {
        return (
          <div className = "header-container">
            <div className = "App-notThrowing">
              <p style={{fontSize: '80px', margin: 0}}> No </p>
              <p style={{fontSize: '15px'}}> {notThrowingText} </p>
    
              <div style ={{flex: 1, alignItems: 'horizontal', margin: 'auto'}}>
    
              </div>
            </div>
          </div>
        );
      }
    }
}