import React from 'react';

import './PicturePage.css'

export default class PicturePage extends React.Component{
    render(){
      // const pictures = [
      //   {src = ""},
      //   {}
      // ]
      return(
        <>
          <h3 className="WelcomeText-Pictures">Check out the view of Fairmount!</h3>
          {/* CSS is in Homepage */}
          <div className='ImageContainer-Pictures'>
            
            <img
              className = "FoggyClubLights"
              alt = "Foggy club lights"
              src={require('../../../assets/BrightLights.jpg')}/>
          
            <img
              className = "HammsAndStreetSigns"
              alt = "Hamms and street signs"
              src={require('../../../assets/HammsAndTruckHauling.jpg')}/>

            <img 
              className= "Lollipop"
              alt = "Lollipop"
              src={require('../../../assets/Lollipop.gif')}/>

            <img 
              className= "MagicWind"
              alt = "Magic Wind"
              src={require('../../../assets/MagicWind.gif')}/> 


          </div>
        </>
      )
    }
}