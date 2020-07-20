import React from "react"
import { useHistory } from 'react-router-dom';

function ClickArea( { redRoomPassword }){
    let history = useHistory();

    console.log(redRoomPassword)
    
    function passwordPrompt() {
        const userPassword = prompt("What is the password?")
        while(userPassword == null){}  /* Should be a better way */

        if(userPassword === redRoomPassword){
            alert("Welcome")
            history.push("./RedRoom");
        }
        else{
            alert("Wrong")
        }
    }

    return (
        <div 
        className = "clickArea"
        onClick={passwordPrompt}/>
    )
}


export default ClickArea;