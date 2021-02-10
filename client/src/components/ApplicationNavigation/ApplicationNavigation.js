// Importing React
import React from 'react';

// Importing components from React-Bootstrap
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'

// Importing reacter router dom
import { Link } from 'react-router-dom'

// the Navigation function, aka, the Navigation Bar component
const ApplicationNavigation = () => {
    return (
        <div>
            <Navbar bg="light" expand="lg">
                <Navbar.Brand as={Link} to="/">Hexagon Spelling</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link as={Link} to="/">Home</Nav.Link>
                        <Nav.Link as={Link} to="/rules">Rules</Nav.Link>
                        <Nav.Link as={Link} to="/about">About</Nav.Link>
                        <Nav.Link as={Link} to="/contact">Contact</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </div>
    );
}

// Exporting the Navigation Bar
export default ApplicationNavigation;
