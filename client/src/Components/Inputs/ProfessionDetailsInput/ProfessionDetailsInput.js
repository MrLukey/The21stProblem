import React, {useState} from "react";
import {FormGroup} from "react-bootstrap";

const ProfessionDetailsInput = props => {

    const [professionDetailsValid, setProfessionalDetailsValid] = useState('')

    const handleProfessionTextInput = evt => {
        const regex = new RegExp(/[^\p{L}'’` ]+/ug)
        const professionDetails = evt.target.value.replaceAll(regex, '')
        if (professionDetails.length <= 30) {
            props.setProfessionDetails(professionDetails.charAt(0).toUpperCase() + professionDetails.slice(1))
            props.setProfession(professionDetails.charAt(0).toUpperCase() + professionDetails.slice(1))
        }
        if (professionDetails.length > 0 && professionDetails.length <= 30){
            setProfessionalDetailsValid(' is-valid')
        } else {
            setProfessionalDetailsValid('')
        }
    }

    return (
        <FormGroup className="form-floating flex-grow-1 mx-1">
            <input className={"form-control" + professionDetailsValid} type="text" id="professionDetails" disabled={props.professionDetailsDisabled}
                   value={props.professionDetails} onChange={handleProfessionTextInput} maxLength={30}/>
            <label htmlFor="professionDetails">{props.professionDetailsText}</label>
        </FormGroup>
    )
}

export default ProfessionDetailsInput