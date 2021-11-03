import React from "react";
import {Accordion} from "react-bootstrap";

const MessagesAccordion = (props) => {

    const editMessageState = (messageID) => {
        const url = 'http://localhost:3001/edit-message-state'
        const requestOptions = {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                messageID: messageID,
                stateToChange: props.stateToChange,
                newState: props.newState
            })
        }
        fetch(url, requestOptions)
            .then(response => {
                if (response.status === 200){
                    props.getMessages()
                }
            })
            .catch(error => error)
    }

    return (
        <Accordion.Item eventKey={props.eventKey}>
            <Accordion.Header>{props.messageGroup} ({props.messages.filter(message => message).length})</Accordion.Header>
            <Accordion.Body >
                <Accordion>
                    {props.messages.map(message =>
                        <Accordion.Item key={message.id} eventKey={message.id}>
                            <Accordion.Header>Subject: {message.subject}</Accordion.Header>
                            <Accordion.Body>
                                <p>{message.message}</p>
                                <p className="text-muted">from {message.firstName} {message.lastName}, sent {message.date} at {message.time}</p>
                                <button className="btn btn-primary" onClick={() => editMessageState(message.id)}>{props.editMessageButton}</button>
                            </Accordion.Body>
                        </Accordion.Item>
                    )}
                </Accordion>
            </Accordion.Body>
        </Accordion.Item>
    )
}

export default MessagesAccordion