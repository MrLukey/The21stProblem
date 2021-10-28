import React, {useState} from "react";
import {FormGroup} from "react-bootstrap";

const ProfessionInput = (props) => {

    const [professionValid, setProfessionValid] = useState('')

    const handleProfessionSelectInput = (evt) => {
        const selected = evt.target.value
        if (selected === 'Other'){
            props.setProfessionDetailsDisabled(false)
            props.setProfessionDetailsText('Please Specify')
            props.setProfession('')
        } else {
            props.setProfession(selected)
            props.setProfessionDetailsDisabled(true)
            props.setProfessionDetailsText('')
            props.setProfessionDetails('')
        }
        if (selected !== 'Other' && selected !== ''){
            setProfessionValid(' is-valid')
        } else {
            setProfessionValid('')
        }
    }
    return (
        <FormGroup className="form-floating flex-grow-1 mx-1" value={props.profession} onChange={handleProfessionSelectInput}>
            <select className={"form-control" + professionValid} id="profession">
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