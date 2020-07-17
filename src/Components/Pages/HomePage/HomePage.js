import React from 'react';

import "./HomePage.css"

export default class HomePage extends React.Component{
    render(){
      return(
        <>
          <div className="WelcomeTextConatiner-Home">
            <h1 className="Header">Welcome to Is Fairmount Throwing!</h1>
            <i className="Bullshit"><u>The place to be sometime soon!</u></i>
          </div>

          <div className="ImageContainer-Welcome">
            <img className = "Fairmount-Picture" 
              height = '500px'
              alt = "Mac flag and Hamms"
              src={require("../../../assets/MacalesterCollegeAndHamms.jpg")}/>
          </div>

        </>
      )
    }
}