import React from "react";
import {Accordion} from "react-bootstrap";

const SignUpAccordion = (props) => {

    let emails = ''
    props.signUps.forEach(signUp => {
        emails += signUp.email + ', '
    })

    const handleAccordionButtonClick = (evt) => {
        evt.preventDefault()
        navigator.clipboard.writeText(emails).catch()
    }

    return (
        <Accordion.Item eventKey={props.eventKey}>
            <Accordion.Header>{props.signUpGroup} ({props.signUps.filter(signUp => signUp).length})</Accordion.Header>
            <Accordion.Body >
                <button className="btn btn-sm btn-dark w-100" onClick={handleAccordionButtonClick}>Copy All Emails</button>
                <Accordion>
                    {props.signUps.map(signUp =>
                        <Accordion.Item key={signUp.id} eventKey={signUp.id}>
                            <Accordion.Header>{signUp.firstName} {signUp.lastName} - {signUp.profession} from {signUp.residence}</Accordion.Header>
                            <Accordion.Body>
                                <p>{signUp.reasonForJoining}</p>
                                <button className="btn btn-primary" onClick={() => props.editSignUpState(signUp.id, props.stateToChange, props.newState)}>{props.editSignUpButton}</button>
                            </Accordion.Body>
                        </Accordion.Item>
                    )}
                </Accordion>
            </Accordion.Body>
        </Accordion.Item>
    )
}

export default SignUpAccordion