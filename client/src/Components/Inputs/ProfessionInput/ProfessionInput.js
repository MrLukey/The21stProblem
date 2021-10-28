import React from "react";
import {FormGroup} from "react-bootstrap";

const ProfessionInput = (props) => {

    const handleProfessionSelectInput = (evt) => {
        const selected = evt.target.value
        props.setProfession(selected)
        if (selected === 'Other'){
            props.setProfessionDetailsDisabled(false)
            props.setProfessionDetailsText('Please Specify')
        } else {
            props.setProfessionDetailsDisabled(true)
            props.setProfessionDetailsText('')
            props.setProfessionDetails('')
            props.setProfessionalDetailsValid('')
        }
        if (selected !== 'Other' && selected !== ''){
            props.setProfessionValid(' is-valid')
        } else {
            props.setProfessionValid('')
        }
    }
    return (
        <FormGroup className="form-floating flex-grow-1 mx-1" value={props.profession} onChange={handleProfessionSelectInput}>
            <select className={"form-control" + props.professionValid} id="profession">
                <option key={0} value=""> </option>
                <option key={1}>Scientist</option>
                <option key={2}>Engineer</option>
                <option key={3}>Politician</option>
                <option key={4}>Influencer</option>
                <option key={5}>Other</option>
            </select>
            <label htmlFor="profession">Profession</label>
        </FormGroup>
    )
}

export default ProfessionInput