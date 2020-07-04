import React from 'react';
import {NavLink} from 'react-router-dom'
import {Navbar, Nav} from 'react-bootstrap'

export default class NavigationBar extends React.Component{
    render(){
        return(
            <Navbar className = "Navigation-bar" bg="dark" expand="lg">
                <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                <Navbar.Collapse id="basic-navbar-nav"/>
                <Nav>
                    <NavLink className="d-inline p-2 bg-dark text-white"
                    to="/">Home</NavLink>
                    <NavLink className="d-inline p-2 bg-dark text-white"
                    to="/PicturePage">Pictures</NavLink>
                </Nav>
            </Navbar>
        )
    }
}