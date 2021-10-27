import React from "react";
import {FormGroup} from "react-bootstrap";

const ProfessionDetailsInput = props => {

    const handleProfessionTextInput = evt => {
        if (evt.target.value.length <= 30){
            props.setProfessionDetails(evt.target.value)
            props.setProfession(evt.target.value)
        }
    }

    return (
        <FormGroup className="form-floating flex-grow-1 mx-1">
            <input className="form-control" type="text" id="professionDetails" disabled={props.professionDetailsDisabled}
                   value={props.professionDetails} onChange={handleProfessionTextInput} maxLength={30}/>
            <label htmlFor="professionDetails">{props.professionDetailsText}</label>
        </FormGroup>
    )
}

export default ProfessionDetailsInput