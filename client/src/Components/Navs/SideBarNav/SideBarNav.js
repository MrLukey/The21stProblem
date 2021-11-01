import React from "react";
import {Nav, Navbar} from "react-bootstrap";

const SideBarNav = (props) => {

    function setView(view) {
        props.setActiveView(view)
    }

    return (
       <Navbar className="d-flex flex-column flex-nowrap align-items-start vh-100 px-3" bg="dark" variant="dark">
           <Navbar.Brand>Admin Page</Navbar.Brand>
           <Nav className="d-flex flex-column flex-nowrap align-items-start">
               <button className="btn nav-item nav-link" onClick={() => setView('')}>Site Activity</button>
               <button className="btn nav-item nav-link" onClick={() => setView('messages')}>Messages</button>
               <button className="btn nav-item nav-link" onClick={() => setView('')}>Sign Ups</button>
               <button className="btn nav-item nav-link" onClick={() => setView('')}>Actions</button>
               <button className="btn nav-item nav-link" onClick={() => setView('')}>Else</button>
           </Nav>
       </Navbar>
    )
}

export default SideBarNav
