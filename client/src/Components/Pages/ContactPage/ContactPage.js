import React, {useEffect, useState} from "react";
import {Form} from "react-bootstrap";
import FirstAndLastNameInput from "../../Inputs/FirstAndLastNameInput/FirstAndLastNameInput";
import TextAreaInput from "../../Inputs/TextAreaInput/TextAreaInput";
import EmailAddressInput from "../../Inputs/EmailAddressInput/EmailAddressInput";
import ReportSignUpModal from "../../Modals/ReportSignUpModal/ReportSignUpModal";

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

    const showModal = () => {
        setModalOpen(true)
    }
    const hideModal = () => {
        setModalOpen(false)
    }

     const handleSubmit = (evt) => {
         let formValid = true;
         if (firstNameValid !== ' is-valid'){
             setFirstNameValid(' is-invalid')
             formValid = false
         }
         if (secondNameValid !== ' is-valid'){
             setSecondNameValid(' is-invalid')
             formValid = false
         }
         if (email !== '' && emailValid !== ' is-valid'){
             setEmailValid(' is-invalid')
             formValid = false
         }
         if (messageValid !== ' is-valid'){
             setMessageValid(' is-invalid')
             formValid = false
         }
         if (formValid){
             const url = 'http://localhost:3001/contact'
             const requestOptions = {
                 method: 'POST',
                 headers: {'Content-Type': 'application/json'},
                 body: JSON.stringify({
                     firstName: firstName,
                     lastName: lastName,
                     email: email,
                     message: message,
                 })
             }
             fetch(url, requestOptions)
                 .then(response => {
                     if (response.status === 422){
                         setModalText('Trying something dodgy eh? We see you ^_^')
                     } else if (response.status === 500){
                         setModalText('An unexpected database error occurred, please try submitting again.')
                     } else if (response.status === 200){
                         setModalText('Thanks ' + firstName + ', you message has been received.')
                     }
                     showModal()
                 })
                 .catch(error => error)
         }
     }

    useEffect(() => {
        const url = 'http://localhost:3001/log-page-load'
        const requestOptions = {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                page: 'contact'
            })
        }
        fetch(url, requestOptions)
            .then(response => response)
            .catch(error => error)

    }, [])

    const nameProps = {firstName: firstName, setFirstName: setFirstName, lastName: lastName, setLastName: setLastName,
        firstNameValid: firstNameValid, setFirstNameValid: setFirstNameValid, secondNameValid: secondNameValid,
        setSecondNameValid: setSecondNameValid}

    const emailProps = {email: email, setEmail: setEmail, emailValid: emailValid, setEmailValid: setEmailValid,
        optional: true}

    const messageProps = {textAreaValue: message, setTextAreaValue: setMessage, rows: 7,
        textAreaValid: messageValid, setTextAreaValid: setMessageValid, labelText: 'Message', maxLength: 500}

    const reportSignUpModalProps = {firstName: firstName, email: email, modalText: modalText, modalOpen: modalOpen,
        setModalOpen: setModalOpen, hideModal: hideModal}

    return (
        <section className="full-page d-flex flex-column flex-nowrap justify-content-center align-items-center bg-dark" id="contact">
            <Form className="col-12 col-lg-8">
                <h3 className="card-title text-light text-muted text-center mb-3">Get in touch</h3>
                <FirstAndLastNameInput {...nameProps}/>
                <EmailAddressInput {...emailProps}/>
                <TextAreaInput {...messageProps}/>
            </Form>
            <button className="btn btn-light mx-auto" onClick={handleSubmit}>Send Message</button>
            <ReportSignUpModal {...reportSignUpModalProps} />
        </section>
    )
}

export default ContactPage