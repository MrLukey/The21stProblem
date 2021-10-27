import React from "react";
import {FormGroup} from "react-bootstrap";

const FirstAndLastNameInput = (props) => {

    const handleFirstNameInput = evt => {
        if (evt.target.value.length <= 30){
            props.setFirstName(evt.target.value)
        }
    }

    const handleSecondNameInput = evt => {
        if (evt.target.value.length <= 30){
            props.setLastName(evt.target.value)
        }
    }

    return (
        <div className="d-flex flex-row flex-nowrap mb-2">
            <FormGroup className="form-floating flex-grow-1 mx-1">
                <input className="form-control" type="text" id="firstName" value={props.firstName} onChange={handleFirstNameInput} maxLength={30}/>
                <label htmlFor="firstName">First name</label>
            </FormGroup>
            <FormGroup className="form-floating flex-grow-1 mx-1">
                <input className="form-control" type="text" id="lastName" value={props.lastName} onChange={handleSecondNameInput} maxLength={30}/>
                <label htmlFor="lastName">Last name</label>
            </FormGroup>
        </div>
    )
}

export default FirstAndLastNameInput