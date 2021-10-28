import React, {useState} from "react";
import {FormGroup} from "react-bootstrap";

const FirstAndLastNameInput = (props) => {

    const [firstNameValid, setFirstNameValid] = useState('')
    const [secondNameValid, setSecondNameValid] = useState('')

    const handleFirstNameInput = evt => {
        const regex = new RegExp(/[^\p{L}'’` ]+/ug)
        const name = evt.target.value.replaceAll(regex, '')
        if (name.length <= 35) {
            props.setFirstName(name.charAt(0).toUpperCase() + name.slice(1))
        }
        if (name.length > 0 && name.length <= 35) {
            setFirstNameValid(' is-valid')
        } else {
            setFirstNameValid('')
        }
    }

    const handleSecondNameInput = evt => {
        const regex = new RegExp(/[^\p{L}'’` ]+/ug)
        const name = evt.target.value.replaceAll(regex, '')
        if (name.length <= 35) {
            props.setLastName(name.charAt(0).toUpperCase() + name.slice(1))
        }
        if (name.length > 0 && name.length <= 35) {
            setSecondNameValid(' is-valid')
        } else {
            setSecondNameValid('')
        }
    }

    return (
        <div className="d-flex flex-row flex-nowrap mb-2">
            <FormGroup className="form-floating flex-grow-1 mx-1">
                <input className={"form-control" + firstNameValid} type="text" id="firstName" value={props.firstName} onChange={handleFirstNameInput} maxLength={35} />
                <label htmlFor="firstName">First name</label>
            </FormGroup>
            <FormGroup className="form-floating flex-grow-1 mx-1">
                <input className={"form-control" + secondNameValid} type="text" id="lastName" value={props.lastName} onChange={handleSecondNameInput} maxLength={35} />
                <label htmlFor="lastName">Last name</label>
            </FormGroup>
        </div>
    )
}

export default FirstAndLastNameInput