import React from "react";
import ModalHeader from "react-bootstrap/ModalHeader";
import {Modal, ModalTitle} from "react-bootstrap";

const ReportSignUpModal = (props) => {
    return (
        <Modal show={props.modalOpen} size="lg" aria-labelledby="contained-modal-title-vcenter" centered={true}>
            <ModalHeader>
                <ModalTitle>Sign up confirmation</ModalTitle>
            </ModalHeader>
            <Modal.Body>
                <p>{props.modalText}</p>
            </Modal.Body>
            <Modal.Footer>
                <button className="btn btn-secondary" onClick={props.hideModal}>Back</button>
            </Modal.Footer>
        </Modal>
    )
}

export default ReportSignUpModal