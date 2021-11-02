import React from "react";
import {FormGroup} from "react-bootstrap";

const FirstAndLastNameInput = (props) => {

    const handleFirstNameInput = (evt) => {
        const regex = new RegExp(/[^\p{L}'’` ]+/ug)
        const name = evt.target.value.replaceAll(regex, '')
        if (name.length <= 35) {
            props.setFirstName(name.charAt(0).toUpperCase() + name.slice(1))
        }
        if (name.length > 0 && name.length <= 35) {
            props.setFirstNameValid(' is-valid')
        } else {
            props.setFirstNameValid('')
        }
    }

    const handleLastNameInput = (evt) => {
        const regex = new RegExp(/[^\p{L}'’` ]+/ug)
        const name = evt.target.value.replaceAll(regex, '')
        if (name.length <= 35) {
            props.setLastName(name.charAt(0).toUpperCase() + name.slice(1))
        }
        if (name.length > 0 && name.length <= 35) {
            props.setLastNameValid(' is-valid')
        } else {
            props.setLastNameValid('')
        }
    }

    return (
        <div className="d-flex flex-row flex-nowrap mb-2">
            <FormGroup className="form-floating flex-grow-1 mx-1">
                <input className={"form-control" + props.firstNameValid} type="text" id="firstName" value={props.firstName} onChange={handleFirstNameInput} maxLength={35} />
                <label htmlFor="firstName">First name</label>
            </FormGroup>
            <FormGroup className="form-floating flex-grow-1 mx-1">
                <input className={"form-control" + props.lastNameValid} type="text" id="lastName" value={props.lastName} onChange={handleLastNameInput} maxLength={35} />
                <label htmlFor="lastName">Last name</label>
            </FormGroup>
        </div>
    )
}

export default FirstAndLastNameInput