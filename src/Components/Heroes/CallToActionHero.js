import React from "react";
import {Button} from "react-bootstrap";

const CallToActionHero = (props) => {
    return (
        <div className="container bg-dark text-center col-xxl-8 px-4 py-5">
            <h1 className="display-4 fw-bold text-white">{props.title}</h1>
            <div className="col-lg-6 mx-auto">
                <p className="lead text-white">{props.info}</p>
                <div className="d-grid gap-2 d-sm-flex justify-content-sm-center mb-5">
                    <Button variant={props.buttonOneVariant} href={props.buttonOneHref}>{props.buttonOneText}</Button>
                    <Button variant={props.buttonTwoVariant} href={props.buttonTwoHref}>{props.buttonTwoText}</Button>
                </div>
            </div>
        </div>
    )
}

export default CallToActionHero