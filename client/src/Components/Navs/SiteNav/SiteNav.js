import React from "react";
import {Container, Navbar, Nav, NavDropdown} from 'react-bootstrap'
import pdfVersion from './the-21st-problem.pdf'

const SiteNav = (props) => {

    const logPDFDownload = () => {
        const url = 'http://localhost:3001/log-page-load'
        const requestOptions = {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                page: 'pdf_download'
            })
        }
        fetch(url, requestOptions)
            .then(response => response)
            .catch(error => error)
    }

    return (
        <Navbar bg="dark" variant="dark" expand="lg" className={props.navDisplay}>
            <Container>
                <Navbar.Brand href="/">The 21st Problem</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="problem" active={props.activePage === 'problem'}>The Problem</Nav.Link>
                        <Nav.Link href="solution" active={props.activePage === 'solution'}>The Solution</Nav.Link>
                        <Nav.Link href="new-world" active={props.activePage === 'newWorld'}>A New World</Nav.Link>
                        <Nav.Link href="what-to-do" active={props.activePage === 'whatToDo'}>What To Do Now</Nav.Link>
                        <a className="nav-link"
                           href={pdfVersion} download="the-21st-problem"
                           onClick={logPDFDownload}>Download PDF</a>
                        <NavDropdown title="More" id="basic-nav-dropdown">
                            <NavDropdown.Item href="problem-data">Problem Data</NavDropdown.Item>
                            <NavDropdown.Item href="solution-data">Solution Data</NavDropdown.Item>
                            <NavDropdown.Item href="references">References</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="about">About</NavDropdown.Item>
                            <NavDropdown.Item href="contact">Contact</NavDropdown.Item>
                            <NavDropdown.Item href="sign-up">Sign Up</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default SiteNav