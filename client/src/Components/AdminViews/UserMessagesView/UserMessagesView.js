import React, {useEffect, useState} from "react";
import {Accordion} from "react-bootstrap";

const UserMessagesView = (props) => {
    const [unreadMessages, setUnreadMessages] = useState([])
    const [readMessages, setReadMessages] = useState([])
    const [repliedMessages, setRepliedMessages] = useState([])
    const [archivedMessages, setArchivedMessages] = useState([])

    useEffect(() => {
        const url = 'http://localhost:3001/messages'
        const requestOptions = {
            method: 'GET',
            headers: {'Content-Type': 'application/json'}
        }
        fetch(url, requestOptions)
            .then(response => response.json())
            .then(data => {
                setUnreadMessages(data.filter(message => message.seenByAdmin === 0))
                setReadMessages(data.filter(message => message.seenByAdmin === 1 && message.replySent === 0 && message.toDelete === 0))
                setRepliedMessages(data.filter(message => message.replySent === 1))
                setArchivedMessages(data.filter(message => message.toDelete === 1))
            })
            .catch(error => error)
    }, [])

    return (
        <Accordion className={props.activeView === 'messages' ? '' : 'd-none'}>
            <Accordion.Item eventKey={0}>
                <Accordion.Header>Unread Messages</Accordion.Header>
                <Accordion.Body >
                    <Accordion>
                        {unreadMessages.map(message =>
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
                        {readMessages.map(message =>
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
                        {repliedMessages.map(message =>
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
                        {archivedMessages.map(message =>
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