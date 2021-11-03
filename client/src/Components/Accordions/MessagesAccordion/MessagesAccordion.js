import React from "react";
import {Accordion} from "react-bootstrap";

const MessagesAccordion = (props) => {

    const messageGroup = props.messageGroup

    const editMessageState = (messageID, stateToChange, newState) => {
        const url = 'http://localhost:3001/edit-message-state'
        const requestOptions = {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                messageID: messageID,
                stateToChange: stateToChange,
                newState: newState
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

    const handleEmailCopy = (email) => {
        navigator.clipboard.writeText(email).catch()
    }

    return (
        <Accordion.Item eventKey={props.eventKey}>
            <Accordion.Header>{props.messageGroup} ({props.messages.filter(message => message).length})</Accordion.Header>
            <Accordion.Body >
                <Accordion>
                    {props.messages.map(message =>
                        <Accordion.Item key={message.id} eventKey={message.id}>
                            <Accordion.Header>Subject: {message.subject}</Accordion.Header>
                            <Accordion.Body className="p-0 px-3 pt-3">
                                <p>{message.message}</p>
                                <div className="d-flex flex-row flex-nowrap justify-content-between align-items-baseline">
                                    <p className="text-muted">{message.firstName} {message.lastName} {message.date} {message.time}</p>
                                    {messageGroup !== 'Archived' ? '' : <p className="text-muted">{message.replySent === 1 ? 'Reply Sent' : 'No Reply Sent'}</p>}
                                    <div className={"btn-group" + (messageGroup === 'Archived' ? ' d-none' : '')}>
                                        {messageGroup !== 'New' ? '' : <button className="btn btn-sm btn-primary" onClick={() => editMessageState(message.id, 'reply_sent', 1)}>Mark Replied</button>}
                                        {messageGroup === 'Archived' ? '' : <button className="btn btn-sm btn-dark" onClick={() => handleEmailCopy(message.email)}>Copy Email</button>}
                                        {messageGroup === 'Archived' ? '' : <button className="btn btn-sm btn-warning" onClick={() => editMessageState(message.id, 'to_delete', 1)}>Archive</button>}
                                    </div>
                                </div>
                            </Accordion.Body>
                        </Accordion.Item>
                    )}
                </Accordion>
            </Accordion.Body>
        </Accordion.Item>
    )
}

export default MessagesAccordion