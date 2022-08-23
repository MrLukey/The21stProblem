import React, {useState} from "react";
import {Form} from "react-bootstrap";
import FirstAndLastNameInput from "../../Inputs/FirstAndLastNameInput/FirstAndLastNameInput";
import TextAreaInput from "../../Inputs/TextAreaInput/TextAreaInput";
import EmailAddressInput from "../../Inputs/EmailAddressInput/EmailAddressInput";
import ReportSignUpModal from "../../Modals/ReportSignUpModal/ReportSignUpModal";
import PageLogger from "../../PageLogger/PageLogger";

const ContactPage = () => {

    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const [subject, setSubject] = useState('')
    const [message, setMessage] = useState('')

    const [firstNameValid, setFirstNameValid] = useState('')
    const [lastNameValid, setLastNameValid] = useState('')
    const [emailValid, setEmailValid] = useState('')
    const [subjectValid, setSubjectValid] = useState('')
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
         if (lastNameValid !== ' is-valid'){
             setLastNameValid(' is-invalid')
             formValid = false
         }
         if (email !== '' && emailValid !== ' is-valid'){
             setEmailValid(' is-invalid')
             formValid = false
         }
         if (subjectValid !== ' is-valid'){
             setSubjectValid(' is-invalid')
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
                     subject: subject,
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
                         setFirstName('')
                         setLastName('')
                         setEmail('')
                         setSubject('')
                         setMessage('')
                     }
                     showModal()
                 })
                 .catch(error => error)
         }
     }
    const nameProps = {firstName: firstName, setFirstName: setFirstName, lastName: lastName, setLastName: setLastName,
        firstNameValid: firstNameValid, setFirstNameValid: setFirstNameValid, lastNameValid: lastNameValid,
        setLastNameValid: setLastNameValid}

    const emailProps = {email: email, setEmail: setEmail, emailValid: emailValid, setEmailValid: setEmailValid,
        optional: true}

    const subjectProps = {textAreaValue: subject, setTextAreaValue: setSubject, rows: 1,
        textAreaValid: subjectValid, setTextAreaValid: setSubjectValid, labelText: 'Subject', maxLength: 70}

    const messageProps = {textAreaValue: message, setTextAreaValue: setMessage, rows: 7,
        textAreaValid: messageValid, setTextAreaValid: setMessageValid, labelText: 'Message', maxLength: 500}

    const reportSignUpModalProps = {firstName: firstName, email: email, modalText: modalText, modalOpen: modalOpen,
        setModalOpen: setModalOpen, hideModal: hideModal}

    return (
        <section className="full-page d-flex flex-column flex-nowrap justify-content-center align-items-center bg-dark" id="contact">
            <PageLogger page="contact" />
            <Form className="col-12 col-lg-8">
                <h3 className="card-title text-light text-muted text-center mb-3">Get in touch</h3>
                <FirstAndLastNameInput {...nameProps} />
                <EmailAddressInput {...emailProps} />
                <TextAreaInput {...subjectProps} />
                <TextAreaInput {...messageProps} />
            </Form>
            <button className="btn btn-light mx-auto" onClick={handleSubmit}>Send Message</button>
            <ReportSignUpModal {...reportSignUpModalProps} />
        </section>
    )
}

export default ContactPage