import React, {useState} from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import {useLocation} from "react-router-dom";

function NavigationBar({menuItems}) {
    const location = useLocation();
    return (
        <Navbar bg="primary" expand="lg" variant="dark">
            <Navbar.Brand href="/"><span style={{marginLeft: '5px'}}>Hacker News</span></Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav activeKey={location.pathname} className="mr-auto">
                    {
                        menuItems.map((item) => (
                            <Nav.Link href={item.route} >{item.label}</Nav.Link>
                        ))
                    }
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
}

export default NavigationBar;