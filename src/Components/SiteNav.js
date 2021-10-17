import React from "react";
import {Container, Navbar, Nav, NavDropdown} from 'react-bootstrap'

const SiteNav = () => {
    return (
        <Navbar bg="dark" variant="dark" expand="lg">
            <Container>
                <Navbar.Brand href="/">The 21st Problem</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="problem">The Problem</Nav.Link>
                        <Nav.Link href="solution">The Solution</Nav.Link>
                        <Nav.Link href="new-world">A New World</Nav.Link>
                        <NavDropdown title="More Info" id="basic-nav-dropdown">
                            <NavDropdown.Item href="problem-data">Problem Data</NavDropdown.Item>
                            <NavDropdown.Item href="solution-data">Solution Data</NavDropdown.Item>
                            <NavDropdown.Item href="#">New World Data</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="references">References</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default SiteNav