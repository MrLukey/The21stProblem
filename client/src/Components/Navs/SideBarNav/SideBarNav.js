import React from "react";
import {Nav, Navbar, NavDropdown} from "react-bootstrap";

const SideBarNav = () => {
    return (
       <Navbar className="d-flex flex-column flex-nowrap align-items-start w-25 px-3" bg="dark" variant="dark">
           <Navbar.Brand>Admin Page</Navbar.Brand>
           <Nav className="d-flex flex-column flex-nowrap">
               {/*<Nav.Link href="problem">The Problem</Nav.Link>*/}
               {/*<Nav.Link href="solution">The Solution</Nav.Link>*/}
               {/*<Nav.Link href="new-world">A New World</Nav.Link>*/}
               {/*<Nav.Link href="what-to-do">What To Do Now</Nav.Link>*/}
               {/*<a className="nav-link" href={pdfVersion} download="the-21st-problem.pdf">Download PDF</a>*/}
               {/*<NavDropdown title="More" id="basic-nav-dropdown">*/}
               {/*    <NavDropdown.Item href="problem-data">Problem Data</NavDropdown.Item>*/}
               {/*    <NavDropdown.Item href="solution-data">Solution Data</NavDropdown.Item>*/}
               {/*    <NavDropdown.Item href="#" disabled={true}>New World Data</NavDropdown.Item>*/}
               {/*    <NavDropdown.Item href="references">References</NavDropdown.Item>*/}
               {/*    <NavDropdown.Divider />*/}
               {/*    <NavDropdown.Item href="#" disabled={true}>About</NavDropdown.Item>*/}
               {/*    <NavDropdown.Item href="contact">Contact</NavDropdown.Item>*/}
               {/*    <NavDropdown.Item href="sign-up">Sign Up</NavDropdown.Item>*/}
               {/*</NavDropdown>*/}
           </Nav>
       </Navbar>
    )
}

export default SideBarNav
