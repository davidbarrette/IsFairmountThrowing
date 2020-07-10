import React from 'react';

export default class HomePage extends React.Component{
    render(){
      return(
        <>
          <h3 className="WelcomeText">We have some wonderful pictures of what Fairmount is like!</h3>
          {/* CSS is in Homepage */}
          <div className='ImageContainer'>
            <img height='200px'
            src={require('../../../assets/BrightLights.jpg')}/>

            <img height='200px'
            src={require('../../../assets/HammsAndTruckHauling.jpg')}/>
          </div>
        </>
      )
    }
}