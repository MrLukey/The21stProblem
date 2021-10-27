import React from "react";
import {FormGroup} from "react-bootstrap";

const EmailAddressInput = (props) => {

    const handleEmailInput = evt => {
        if (evt.target.value.length <= 120) {
            props.setEmail(evt.target.value)
        }
    }

    return (
        <FormGroup className="form-floating mx-1 mb-2">
            <input className="form-control" type="email" id="email" value={props.email} onChange={handleEmailInput} maxLength={120}/>
            <label htmlFor="email">Email address</label>
        </FormGroup>
    )
}

export default EmailAddressInput