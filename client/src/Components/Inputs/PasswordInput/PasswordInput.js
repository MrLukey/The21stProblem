import React from "react";
import {FormGroup} from "react-bootstrap";

const PasswordInput = (props) => {

    const handlePasswordInput = (evt) => {
        props.setPassword(evt.target.value)
        if (evt.target.value.length >= 8){
            props.setPasswordValid(' is-valid')
        }
    }

    return (
        <FormGroup className="form-floating mx-1 mb-2">
            <input className={"form-control" + props.passwordValid} type="password" id="password" value={props.password}
                   onChange={handlePasswordInput} minLength={8} maxLength={255}/>
            <label htmlFor="password">Password</label>
        </FormGroup>
    )
}

export default PasswordInput