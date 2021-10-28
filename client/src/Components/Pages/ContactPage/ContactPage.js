import React, {useState} from "react";
import {Form} from "react-bootstrap";
import FirstAndLastNameInput from "../../Inputs/FirstAndLastNameInput/FirstAndLastNameInput";
import './ContactPage.css'

const ContactPage = () => {

    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')

    const [firstNameValid, setFirstNameValid] = useState('')
    const [secondNameValid, setSecondNameValid] = useState('')
    const [emailValid, setEmailValid] = useState('')
    const [messageValid, setMessageValid] = useState('')

    const [modalOpen, setModalOpen] = useState(false)
    const [modalText, setModalText] = useState('')

    const nameProps = {firstName: firstName, setFirstName: setFirstName, lastName: lastName, setLastName: setLastName,
        firstNameValid: firstNameValid, setFirstNameValid: setFirstNameValid, secondNameValid: secondNameValid,
        setSecondNameValid: setSecondNameValid}

    return (
        <section className="d-flex flex-column flex-nowrap justify-content-center align-items-center bg-dark" id="contact">
            <Form className="col-12 col-lg-8">
                <h3 className="card-title text-light text-muted text-center mb-3">Get in touch</h3>
                <FirstAndLastNameInput {...nameProps}/>
                {/*<div className="d-flex flex-row flex-nowrap mb-2">*/}
                {/*    */}
                {/*</div>*/}
            </Form>
            <button className="btn btn-light mx-auto" >Send Message</button>

        </section>
    )
}

export default ContactPage