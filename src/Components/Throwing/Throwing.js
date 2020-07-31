import React from 'react';
import { connect } from 'react-redux';

import './Throwing.css';
import { selectThrowingData } from '../../selectors/selectors';

const isThrowing = ({ throwingData: {throwing, partyDate, notThrowingText}  }) => {
  if(throwing){
    return (
      <div className = "ThrowingContainer">
        <div className = "App-throwing">
            <p className="Answer" style={{fontSize: '100px', margin: 0}}> Yes! </p>
            <p className="Meta" style={{fontSize: '30px'}}> {partyDate} </p>
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

          <p className="Answer" style={{fontSize: '100px', margin: 0}}> No </p>
          <p className="Meta" style={{fontSize: '15px'}}> {notThrowingText} </p>

          <div style ={{flex: 1, alignItems: 'horizontal', margin: 'auto'}}>

          </div>
        </div>
      </div>
    );
  }
}


//Takes the state of the app (from Redux's connect function) and reloads whenever the inputs to 'mapStateToProps' change, 
//I hope it doesn't reload when another state this changes
const mapStateToProps = state => ({
  throwingData: selectThrowingData(state)
})

export default connect(mapStateToProps)(isThrowing);