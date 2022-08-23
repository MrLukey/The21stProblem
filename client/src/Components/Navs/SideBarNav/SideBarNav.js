import React from "react";
import {Nav, Navbar} from "react-bootstrap";

const SideBarNav = (props) => {

    const setView = (view) => {
        props.setActiveView(view)
    }

    return (
       <Navbar className="d-flex flex-column flex-nowrap align-items-start vh-100 px-3" bg="dark" variant="dark">
           <Navbar.Brand>Admin Page</Navbar.Brand>
           <Nav className="d-flex flex-column flex-nowrap align-items-start">
               <button className={"btn nav-item nav-link" + (props.activeView === 'activity' ? ' active' : '')} onClick={() => setView('activity')}>Site Activity</button>
               <button className={"btn nav-item nav-link" + (props.activeView === 'messages' ? ' active' : '')} onClick={() => setView('messages')}>Messages</button>
               <button className={"btn nav-item nav-link" + (props.activeView === 'signUps' ? ' active' : '')} onClick={() => setView('signUps')}>Sign Ups</button>
               <button className={"btn nav-item nav-link" + (props.activeView === 'actions' ? ' active' : '')} onClick={() => setView('actions')}>Actions</button>
           </Nav>
       </Navbar>
    )
}

export default SideBarNav
