import React from "react";
import Card from "react-bootstrap/Card";

const ReferenceCard = (props) => {
    return (
        <Card className="mb-1">
            <Card.Body className="d-flex">
                <a className="text-decoration-none text-dark" href={props.link}>[{props.id}] {props.citation}</a>
            </Card.Body>
        </Card>
    )
}

export default ReferenceCard