import React, {useState} from "react";
import {FormGroup} from "react-bootstrap";

const ReasonForJoiningInput = (props) => {

    const [reasonValid, setReasonValid] = useState('')

    const handleReasonForJoiningInput = (evt) => {
        const regex = new RegExp(/[^\p{L}'’` ]+/ug)
        const reasonForJoining = evt.target.value.replaceAll(regex, '')
        if (reasonForJoining.length <= 500) {
            props.setReasonForJoining(reasonForJoining.charAt(0).toUpperCase() + reasonForJoining.slice(1))
        }
        if (reasonForJoining.length > 0 && reasonForJoining.length <= 500){
            setReasonValid(' is-valid')
        } else {
            setReasonValid('')
        }
    }

    return (
        <FormGroup className="form-floating mx-1 mb-2" >
                    <textarea className={"form-control h-auto" + reasonValid}  rows={5} id="comment" value={props.reasonForJoining}
                              onChange={handleReasonForJoiningInput} maxLength={500} />
            <label htmlFor="comment">Reason for joining</label>
        </FormGroup>
    )
}

export default ReasonForJoiningInput