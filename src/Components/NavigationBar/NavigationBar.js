import React from 'react';

import './NavigationBar.css'

import HomePage from '../Pages/HomePage/HomePage.js'
import PicturePage from '../Pages/PicturePage/PicturePage.js'
import AboutPage from '../Pages/AboutPage/AboutPage.js'
import RedDoor from '../Pages/RedDoor/RedDoor';
import RedRoom from '../Pages/RedRoom/RedRoom';


import { NavLink } from 'react-router-dom'
import { Navbar, Nav } from 'react-bootstrap'
import { Route, Switch } from 'react-router-dom';


function NavigationBar() {
    
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
    // const renderPages = pages.map((page)  => {
    //     return (<NavLink
    //         className={ page.cssClass }
    //         to={ page.route }> {page.name} </NavLink>)
    // })

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
                    { renderPages }
                </Nav>
            </Navbar> */}

            <Switch>
                <Route path='/' component = {HomePage} exact/>
                <Route path='/PicturePage' component = {PicturePage} exact/>
                <Route path='/About' component = {AboutPage} exact/>
                <Route path='/RedDoor' component = {RedDoor} exact/>
                <Route path='/RedRoom' component = {RedRoom} exact/>  {/* Should load this when URL changes, in RedDoor component in password check*/}
                
            </Switch>
        </>
    )
}

export default NavigationBar