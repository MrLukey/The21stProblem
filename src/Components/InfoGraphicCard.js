import React from "react";
import Card from "react-bootstrap/Card";

const InfoGraphicCard = (props) => {
    return (
        <Card>
            <Card.Img variant={props.variant} src={props.image} alt={props.alt}/>
            <Card.Body>
                <Card.Text>{props.text}</Card.Text>
            </Card.Body>
        </Card>
    )
}

export default InfoGraphicCard