import React from "react";
import Card from "react-bootstrap/Card";

const InfoGraphicCard = (props) => {
    return (
        <Card className="text-center p-5 mb-5">
            <Card.Title>{props.title}</Card.Title>
            <Card.Img variant={props.variant} src={props.image} alt={props.alt}/>
            <Card.Body>
                <Card.Text>{props.text}</Card.Text>
                <Card.Link href={props.link} target="_blank">{props.linkText}</Card.Link>
            </Card.Body>
        </Card>
    )
}

export default InfoGraphicCard