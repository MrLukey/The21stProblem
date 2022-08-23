import React from "react";
import {Accordion} from "react-bootstrap";

const SignUpAccordion = (props) => {

    const signUpGroup = props.signUpGroup

    const handleCopyAllEmails = (evt) => {
        evt.preventDefault()
        let emails = ''
        props.signUps.forEach(signUp => {
            emails += signUp.email + ', '
        })
        navigator.clipboard.writeText(emails).catch()
    }

    const handleCopyEmail = (email) => {
        navigator.clipboard.writeText(email).catch()
    }

    const editSignUpState = (signUpID, stateToChange, newState) => {
        const url = 'http://localhost:3001/edit-sign-up-state'
        const requestOptions = {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                signUpID: signUpID,
                stateToChange: stateToChange,
                newState: newState
            })
        }
        fetch(url, requestOptions)
            .then(response => {
                if (response.status === 200){
                    props.getSignUps()
                }
            })
            .catch(error => error)
    }

    const signUps =  props.signUps.filter(signUp => signUp)

    return (
        <Accordion.Item eventKey={props.eventKey}>
            <Accordion.Header>{props.signUpGroup} ({signUps.length})</Accordion.Header>
            <Accordion.Body>
                {signUpGroup === 'New' || signUps.length < 2 ? '' : <button className="btn btn-dark w-100" onClick={handleCopyAllEmails}>Copy All Emails</button>}
                <Accordion>
                    {signUps.map(signUp =>
                        <Accordion.Item key={signUp.id} eventKey={signUp.id}>
                            <Accordion.Header>{signUp.firstName} {signUp.lastName}</Accordion.Header>
                            <Accordion.Body>
                                {signUpGroup !== 'New' ? '' : <p>Reason for joining: {signUp.reasonForJoining}</p>}
                                <div className="d-flex flex-row flex-nowrap justify-content-between align-items-baseline">
                                    <p className="text-muted">{signUp.profession} from {signUp.residence}</p>
                                    <p className="text-muted">Joined {signUp.dateJoined}</p>
                                    <div className="btn-group">
                                        {signUpGroup !== 'New' ? '' : <button className="btn btn-sm btn-primary" onClick={() => editSignUpState(signUp.id, 'seen_by_admin', 1)}>Mark Seen</button>}
                                        {signUpGroup === 'New' ? '' : <button className="btn btn-sm btn-dark" onClick={() => handleCopyEmail(signUp.email)}>Copy Email</button>}
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

export default SignUpAccordion