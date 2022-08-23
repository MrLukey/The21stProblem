import React from "react";
import {FormGroup} from "react-bootstrap";

// generalised text area input, requires props;
// - textAreaValue
// - setTextAreaValue
// - textAreaValid
// - setTextAreaValid
// - labelText
// - maxLength
// - rows
const TextAreaInput = (props) => {

    const handleTextAreaInput = (evt) => {
        const regex = new RegExp(/[^\p{L}'’` ]+/ug)
        const textAreaValue = evt.target.value.replaceAll(regex, '')
        if (textAreaValue.length <= props.maxLength) {
            props.setTextAreaValue(textAreaValue.charAt(0).toUpperCase() + textAreaValue.slice(1))
        }
        if (textAreaValue.length > 0 && textAreaValue.length <= props.maxLength){
            props.setTextAreaValid(' is-valid')
        } else {
            props.setTextAreaValid('')
        }
    }

    return (
        <FormGroup className="form-floating mx-1 mb-2" >
            <textarea className={"form-control h-auto" + props.textAreaValid}  rows={props.rows} id="comment"
                      value={props.textAreaValue} onChange={handleTextAreaInput} maxLength={props.maxLength} />
            <label htmlFor="comment">{props.labelText}</label>
        </FormGroup>
    )
}

export default TextAreaInput