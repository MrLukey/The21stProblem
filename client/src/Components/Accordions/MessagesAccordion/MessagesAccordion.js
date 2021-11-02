import React from "react";
import {Accordion} from "react-bootstrap";

const MessagesAccordion = (props) => {

    return (
        <Accordion.Item eventKey={props.eventKey}>
            <Accordion.Header>{props.messageGroup} ({props.messages.filter(message => message).length})</Accordion.Header>
            <Accordion.Body >
                <Accordion>
                    {props.messages.map(message =>
                        <Accordion.Item key={message.id} eventKey={message.id}>
                            <Accordion.Header>{message.firstName} {message.lastName}</Accordion.Header>
                            <Accordion.Body>
                                <p>{message.message}</p>
                                <button className="btn btn-primary" onClick={() => props.editMessageState(message.id, props.stateToChange, props.newState)}>{props.editMessageButton}</button>
                                <a href = "mailto: abc@example.com">Send Email</a>
                            </Accordion.Body>
                        </Accordion.Item>
                    )}
                </Accordion>
            </Accordion.Body>
        </Accordion.Item>
    )
}

export default MessagesAccordion