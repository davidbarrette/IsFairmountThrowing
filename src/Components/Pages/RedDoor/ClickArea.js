import React from "react"
import { useHistory } from 'react-router-dom';

function ClickArea( { redRoomPassword, setRedRoomPasswordMet }){
    let history = useHistory();
    
    function passwordPrompt() {
        const userPassword = prompt("What is the password?")
        while(userPassword == null){}  /* Should be a better way */

        if(userPassword === redRoomPassword){
            alert("Welcome")
            setRedRoomPasswordMet(true)
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