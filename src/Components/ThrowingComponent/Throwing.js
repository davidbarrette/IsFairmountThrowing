import React from 'react';
import './Throwing.css';

export default class IsThrowing extends React.Component{
    render(){
      
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
              {/* <img className='Plague1'   */}
                {/* src={require('../../assets/plague1.png')} /> */}
              <p style={{fontSize: '80px', margin: 0}}> No </p>
              <p style={{fontSize: '15px'}}> {this.props.notThrowingText} </p>
    
              <div style ={{flex: 1, alignItems: 'horizontal', margin: 'auto'}}>
    
              </div>
            </div>
          </div>
        );
      }
    }
}