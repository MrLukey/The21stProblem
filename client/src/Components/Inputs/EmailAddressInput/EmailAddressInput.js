import React, {useState} from "react";
import {FormGroup} from "react-bootstrap";

const EmailAddressInput = (props) => {

    const [emailValid, setEmailValid] = useState('')

    const handleEmailInput = (evt) => {
        if (evt.target.value.length <= 255) {
            props.setEmail(evt.target.value)
        }
        if (validateEmail(evt.target.value)){
            setEmailValid(' is-valid')
        } else {
            setEmailValid('')
        }
    }

    const validateEmail = (email) => {
        const regex = /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]{1,64}(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:+)])/
        const emailMatch = email.match(regex)
        return emailMatch !== null && emailMatch[0] === email;
    }

    return (
        <FormGroup className="form-floating mx-1 mb-2">
            <input className={"form-control" + emailValid} type="email" id="email" value={props.email} onChange={handleEmailInput} maxLength={255}/>
            <label htmlFor="email">Email address</label>
        </FormGroup>
    )
}

export default EmailAddressInput