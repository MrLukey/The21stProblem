import React from "react";
import {FormGroup} from "react-bootstrap";

const ReasonForJoiningInput = props => {

    const handleReasonForJoiningInput = evt => {
        if (evt.target.value.length <= 500){
            props.setReasonForJoining(evt.target.value)
        }
    }

    return (
        <FormGroup className="form-floating mx-1 mb-2" >
                    <textarea className="form-control h-auto"  rows={5} id="comment" value={props.reasonForJoining}
                              onChange={handleReasonForJoiningInput} maxLength={500} />
            <label htmlFor="comment">Reason for joining</label>
        </FormGroup>
    )
}

export default ReasonForJoiningInput