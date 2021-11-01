import React, {useEffect, useState} from "react";
import {Accordion} from "react-bootstrap";

const UserMessagesView = (props) => {

    const [allMessages, setAllMessage] = useState([])

    useEffect(() => {
        const url = 'http://localhost:3001/messages'
        const requestOptions = {
            method: 'GET',
            headers: {'Content-Type': 'application/json'}
        }
        fetch(url, requestOptions)
            .then(response => response.json())
            .then(data => {
                setAllMessage(data)
            })
            .catch(error => error)
    }, [])

    return (
        <Accordion className={props.activeView === 'messages' ? '' : 'd-none'}>
            <Accordion.Item eventKey={0}>
                <Accordion.Header>Unread Messages</Accordion.Header>
                <Accordion.Body >
                    <Accordion>
                        {allMessages.map(message =>
                            <Accordion.Item key={message.id} eventKey={message.id}>
                                <Accordion.Header>{message.firstName} {message.lastName}</Accordion.Header>
                                <Accordion.Body>
                                    <p>{message.message}</p>
                                    <div className="btn-group">
                                        <button className="btn btn-sm btn-primary">Mark Read</button>
                                        <button className="btn btn-sm btn-danger">Delete</button>
                                    </div>
                                </Accordion.Body>
                            </Accordion.Item>
                        )}
                    </Accordion>
                </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey={-1}>
                <Accordion.Header>Read Messages</Accordion.Header>
                <Accordion.Body >
                    <Accordion>
                        {allMessages.map(message =>
                            <Accordion.Item key={message.id} eventKey={message.id}>
                                <Accordion.Header>{message.firstName} {message.lastName}</Accordion.Header>
                                <Accordion.Body>
                                    <p>{message.message}</p>
                                    <div className="btn-group">
                                        <button className="btn btn-sm btn-primary">Mark Read</button>
                                        <button className="btn btn-sm btn-danger">Delete</button>
                                    </div>
                                </Accordion.Body>
                            </Accordion.Item>
                        )}
                    </Accordion>
                </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey={-2}>
                <Accordion.Header>Replied Messages</Accordion.Header>
                <Accordion.Body >
                    <Accordion>
                        {allMessages.map(message =>
                            <Accordion.Item key={message.id} eventKey={message.id}>
                                <Accordion.Header>{message.firstName} {message.lastName}</Accordion.Header>
                                <Accordion.Body>
                                    <p>{message.message}</p>
                                    <div className="btn-group">
                                        <button className="btn btn-sm btn-primary">Mark Read</button>
                                        <button className="btn btn-sm btn-danger">Delete</button>
                                    </div>
                                </Accordion.Body>
                            </Accordion.Item>
                        )}
                    </Accordion>
                </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey={-3}>
                <Accordion.Header>Archived Messages</Accordion.Header>
                <Accordion.Body >
                    <Accordion>
                        {allMessages.map(message =>
                            <Accordion.Item key={message.id} eventKey={message.id}>
                                <Accordion.Header>{message.firstName} {message.lastName}</Accordion.Header>
                                <Accordion.Body>
                                    <p>{message.message}</p>
                                    <div className="btn-group">
                                        <button className="btn btn-sm btn-primary">Mark Read</button>
                                        <button className="btn btn-sm btn-danger">Delete</button>
                                    </div>
                                </Accordion.Body>
                            </Accordion.Item>
                        )}
                    </Accordion>
                </Accordion.Body>
            </Accordion.Item>
        </Accordion>
    )
}

export default UserMessagesView