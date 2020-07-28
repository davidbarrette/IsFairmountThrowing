import React from 'react';

import './NavigationBar.css'

import HomePage from '../Pages/HomePage/HomePage.js'
import PicturePage from '../Pages/PicturePage/PicturePage.js'
import AboutPage from '../Pages/AboutPage/AboutPage.js'
import RedDoor from '../Pages/RedDoor/RedDoor.js';
import RedRoom from '../Pages/RedRoom/RedRoom.js';

import { NavLink } from 'react-router-dom'
import { Navbar, Nav } from 'react-bootstrap'
import { Route, Switch } from 'react-router-dom';

function NavigationBar( { redRoomPassword, setThrowing, setPartyDate, setNotThrowingText, redRoomPasswordMet, setRedRoomPasswordMet } ) {
    
    // const pages = [
    //     {
    //       route: "/",
    //       name: "Home",
    //       Component: HomePage,
    //       cssClass: "NavBarItem NavItemHome"
    //     },
    //     {
    //       route: "/PicturePage",
    //       name: "Pictures",
    //       Component: PicturePage,
    //       cssClass: "NavBarItem NavItemPictures"
    //     },
    //     {
    //       route: "/RedDoor",
    //       name: " ",
    //       Component: RedDoor,
    //       cssClass: "NavBarItem NavItemRedDoor"
    //     },
    //   ]


    return(
        <>
            <Navbar className = "Navigation-bar">
                <Nav>
                    <NavLink className="NavBar-Item NavItemHome" to="/">Home</NavLink>
                    <NavLink className="NavBar-Item NavItemPictures" to="/PicturePage">Pictures</NavLink>
                    <NavLink className="NavBar-Item NavItemAbout" to="/About">About</NavLink>
                    <NavLink className="NavBar-Item NavItemRedDoor" to="/RedDoor"></NavLink>
                </Nav>
            </Navbar>
            {/* <Navbar className = "Navigation-bar">    this is the better way to do it, more dynamic
                <Nav>
                    {pages.map((page) => {
                        return (<NavLink
                                className={ page.cssClass }
                                to={ page.route }> {page.name} </NavLink>)
                    })}
                </Nav>
            </Navbar> */}

            <Switch>
                <Route path='/' component = {HomePage} exact/>
                <Route path='/PicturePage' component = {PicturePage} exact/>
                <Route path='/About' component = {AboutPage} exact/>

                <Route path='/RedDoor' render={() => (
                        <RedDoor 
                        redRoomPassword = { redRoomPassword }
                        setRedRoomPasswordMet = { setRedRoomPasswordMet }/>
                    )} exact/>

                <Route path='/RedRoom' render={() => (
                        <RedRoom 
                            setThrowing = { setThrowing }
                            setPartyDate = { setPartyDate }
                            setNotThrowingText = { setNotThrowingText }
                            redRoomPasswordMet = { redRoomPasswordMet }
                            setRedRoomPasswordMet = { setRedRoomPasswordMet} />
                    )} exact/>
                
            </Switch>
        </>
    )
}

export default NavigationBar