import React from 'react';

import './NavigationBar.css'

import {NavLink} from 'react-router-dom'
import {Navbar, Nav} from 'react-bootstrap'

export default class NavigationBar extends React.Component{
    render(){
        return(
            <Navbar className = "Navigation-bar">
                <Nav>
                    <NavLink className="NavBar-Item" to="/">Home</NavLink>
                    <NavLink className="NavBar-Item" to="/PicturePage">Pictures</NavLink>
                    <NavLink className="NavBar-Item" to="/RedDoor"></NavLink>
                </Nav>
            </Navbar>
        )
    }
}