import React from 'react';
import './Throwing.css';

export default class IsThrowing extends React.Component{
    render(){
      
      if(this.props.throwing){
        return (
          <div className = "ThrowingContainer">
            <div className = "App-throwing">
                <p className="Answer" style={{fontSize: '100px', margin: 0}}> Yes! </p>
                <p className="Meta" style={{fontSize: '30px'}}> {this.props.partydate} </p>
            </div>
          </div>
          );
        }
      else {
        return (
          <div className = "ThrowingContainer">
            <div className = "App-notThrowing">
              <div className="plagueContainer">
                <img className='Plague1'  
                  alt = "PlagueyBoi1"
                  src={require('../../assets/plague1.png')} />
                <img className='Plague2'  
                  alt = "PlagueyBoi2"
                  src={require('../../assets/plague1.png')} />
              </div>

              <p className="Answer" style={{fontSize: '80px', margin: 0}}> No </p>
              <p className="Meta" style={{fontSize: '15px'}}> {this.props.notThrowingText} </p>
    
              <div style ={{flex: 1, alignItems: 'horizontal', margin: 'auto'}}>
    
              </div>
            </div>
          </div>
        );
      }
    }
}