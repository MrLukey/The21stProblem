import React from "react";
import {Navbar, Container, Nav, NavDropdown} from 'react-bootstrap'

const SiteNav = () => {
    return (
        <Navbar bg="dark" variant="dark" expand="lg">
            <Container>
                <Navbar.Brand href="#home">The 21st Problem</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="#home">Summary</Nav.Link>
                        <Nav.Link href="#link">References</Nav.Link>
                        <NavDropdown title="Key Concepts" id="basic-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Existential Threat</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">Opportunities</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Something Else</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default SiteNav