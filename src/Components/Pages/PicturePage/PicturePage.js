import React from 'react';


import './PicturePage.css'

function PicturePage() {
  const pictures = [
    {
      key: 1,
      className: "FoggyClubLights",
      alt: "Foggy club lights",
      src: require('../../../assets/BrightLights.jpg')
    },
    {
      key: 2,
      className: "HammsAndStreetSigns",
      alt: "Hamms and street signs",
      src: require('../../../assets/HammsAndTruckHauling.jpg')
    },
    {
      key: 3,
      className: "Lollipop",
      alt: "Lollipop",
      src: require('../../../assets/Lollipop.gif')
    },
    {
      key: 4,
      className: "MagicWind",
      alt: "MagicWind",
      src: require('../../../assets/MagicWind.gif')
    },
  ]


      return(
        <>
          <h3 className="WelcomeText-Pictures">Check out the view of Fairmount!</h3>
          <div className='ImageContainer-Pictures'>
            
            {
              pictures.map((picture) => {
                return (
                  <img
                    key = { picture.key }
                    className = {picture.className}
                    alt = { picture.alt }
                    src={ picture.src }/>
                )
              })
            } 
          </div>
        </>
      )
}

export default PicturePage