import React from "react";
import {FormGroup} from "react-bootstrap";

const PasswordInput = (props) => {

    const handlePasswordInput = (evt) => {
        props.setPassword(evt.target.value)
    }

    return (
        <FormGroup className="form-floating mx-1 mb-2">
            <input className="form-control" type="password" id="password" value={props.password}
                   onChange={handlePasswordInput} maxLength={255}/>
            <label htmlFor="password">Password</label>
        </FormGroup>
    )
}

export default PasswordInput