import React from "react";
import {Nav, Navbar} from "react-bootstrap";

const SideBarNav = (props) => {

    const viewMessages = () => {
        props.setActiveView('messages')
    }

    const clearView = () => {
        props.setActiveView('')
    }

    return (
       <Navbar className="d-flex flex-column flex-nowrap align-items-start vh-100 w-25 px-3" bg="dark" variant="dark">
           <Navbar.Brand>Admin Page</Navbar.Brand>
           <Nav className="d-flex flex-column flex-nowrap align-items-start">
               <button className="btn nav-item nav-link" onClick={clearView}>Site Activity</button>
               <button className="btn nav-item nav-link" onClick={viewMessages}>Messages</button>
               <button className="btn nav-item nav-link" onClick={clearView}>Sign Ups</button>
               <button className="btn nav-item nav-link" onClick={clearView}>Actions</button>
               <button className="btn nav-item nav-link" onClick={clearView}>Else</button>
           </Nav>
       </Navbar>
    )
}

export default SideBarNav
