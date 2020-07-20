import React from 'react';

import './NavigationBar.css'

import HomePage from '../Pages/HomePage/HomePage.js'
import PicturePage from '../Pages/PicturePage/PicturePage.js'
import RedDoor from '../Pages/RedDoor/RedDoor.js';
import RedRoom from '../Pages/RedRoom/RedRoom.js';

import {NavLink} from 'react-router-dom'
import {Navbar, Nav} from 'react-bootstrap'
import { Route, Switch } from 'react-router-dom';

function NavigationBar( { redRoomPassword, setThrowing, setPartyDate, setNotThrowingText } ) {
    return(
        <>
            <Navbar className = "Navigation-bar">
                <Nav>
                    <NavLink className="NavBar-Item NavItemHome" to="/">Home</NavLink>
                    <NavLink className="NavBar-Item NavItemPictures" to="/PicturePage">Pictures</NavLink>
                    <NavLink className="NavBar-Item NavItemRedDoor" to="/RedDoor"></NavLink>
                </Nav>
            </Navbar>


            <Switch>
                <Route path='/' component = {HomePage} exact/>
                <Route path='/PicturePage' component = {PicturePage} exact/>

                <Route path='/RedDoor' render={() => (
                        <RedDoor redRoomPassword = { redRoomPassword } />
                    )} exact/>

                <Route path='/RedRoom' render={() => (
                        <RedRoom 
                            setThrowing = { setThrowing }
                            setPartyDate = { setPartyDate }
                            setNotThrowingText = { setNotThrowingText } />
                    )} exact/>
                
            </Switch>
        </>
    )
}

export default NavigationBar