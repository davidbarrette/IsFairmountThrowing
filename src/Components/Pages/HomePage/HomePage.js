import React from 'react';

import "./HomePage.css"

export default class HomePage extends React.Component{
    render(){
      return(
        <>
          <h2 className="WelcomeText">Welcome to Is Fairmount Throwing!</h2>
          <p  className="WelcomeText">The go to place to find out the place to be this weekend!</p>
          <div className="ImageContainer">
            <img className = "Fairmount-Picture" 
              height = '500px'
              src={require("../../../assets/MacalesterCollegeAndHamms.jpg")}/>
          </div>

        </>
      )
    }
}