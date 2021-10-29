import React, {useEffect, useState} from "react";
import {Form} from "react-bootstrap";
import './SignUpPage.css'
import FirstAndLastNameInput from "../../Inputs/FirstAndLastNameInput/FirstAndLastNameInput";
import EmailAddressInput from "../../Inputs/EmailAddressInput/EmailAddressInput";
import ResidenceInput from "../../Inputs/ResidenceInput/ResidenceInput";
import ProfessionInput from "../../Inputs/ProfessionInput/ProfessionInput";
import ProfessionDetailsInput from "../../Inputs/ProfessionDetailsInput/ProfessionDetailsInput";
import TextAreaInput from "../../Inputs/TextAreaInput/TextAreaInput";
import ReportSignUpModal from "../../Modals/ReportSignUpModal/ReportSignUpModal";

const SignUpPage = () => {
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const [allCountries, setAllCountries] = useState([])
    const [placeOfResidence, setPlaceOfResidence] = useState('')
    const [profession, setProfession] = useState('')
    const [professionDetailsDisabled, setProfessionDetailsDisabled] = useState(true)
    const [professionDetailsText, setProfessionDetailsText] = useState('')
    const [professionDetails, setProfessionDetails] = useState('')
    const [reasonForJoining, setReasonForJoining] = useState('')

    const [firstNameValid, setFirstNameValid] = useState('')
    const [secondNameValid, setSecondNameValid] = useState('')
    const [emailValid, setEmailValid] = useState('')
    const [residenceValid, setResidenceValid] = useState('')
    const [professionValid, setProfessionValid] = useState('')
    const [professionDetailsValid, setProfessionalDetailsValid] = useState('')
    const [reasonValid, setReasonValid] = useState('')

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
        if (emailValid !== ' is-valid'){
            setEmailValid(' is-invalid')
            formValid = false
        }
        if (residenceValid !== ' is-valid'){
            setResidenceValid(' is-invalid')
            formValid = false
        }
        if (profession !== 'Other' && professionValid !== ' is-valid'){
            setProfessionValid(' is-invalid')
            formValid = false
        }
        if (profession === 'Other' && professionDetailsValid !== ' is-valid'){
            setProfessionalDetailsValid(' is-invalid')
            formValid = false
        }
        if (reasonValid !== ' is-valid'){
            setReasonValid(' is-invalid')
            formValid = false
        }
        if (formValid){
            const url = 'http://localhost:3001/sign-up'
            const requestOptions = {
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify({
                    firstName: firstName,
                    lastName: lastName,
                    email: email,
                    placeOfResidence: placeOfResidence,
                    profession: professionDetails === '' ? profession : professionDetails,
                    reasonForJoining: reasonForJoining
                })
            }
            fetch(url, requestOptions)
                .then(response => {
                    if (response.status === 403){
                        setModalText('We appreciate the enthusiasm, but you\'re already signed up!')
                    } else if (response.status === 422){
                        setModalText('Trying something dodgy eh? We see you ^_^')
                    } else if (response.status === 500){
                        setModalText('An unexpected database error occurred, please try submitting again.')
                    } else if (response.status === 200){
                        setModalText('Welcome ' + firstName + ', information about collective action will be sent' +
                            ' to ' + email + ' soon.')
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
                page: 'sign_up'
            })
        }
        fetch(url, requestOptions)
            .then(response => response)
            .catch(error => error)

    }, [])

    const nameProps = {firstName: firstName, setFirstName: setFirstName, lastName: lastName, setLastName: setLastName,
        firstNameValid: firstNameValid, setFirstNameValid: setFirstNameValid, secondNameValid: secondNameValid,
        setSecondNameValid: setSecondNameValid}

    const emailProps = {email: email, setEmail: setEmail, emailValid: emailValid, setEmailValid: setEmailValid}

    const residenceProps = {placeOfResidence: placeOfResidence, setPlaceOfResidence: setPlaceOfResidence,
        residenceValid: residenceValid, setResidenceValid: setResidenceValid, allCountries: allCountries,
        setAllCountries: setAllCountries}

    const professionProps = {profession: profession, setProfession: setProfession, professionValid: professionValid,
        setProfessionValid: setProfessionValid, setProfessionDetails: setProfessionDetails,
        setProfessionDetailsDisabled: setProfessionDetailsDisabled, setProfessionDetailsText: setProfessionDetailsText,
        setProfessionalDetailsValid: setProfessionalDetailsValid}

    const professionDetailsProps = {professionDetails: professionDetails, setProfessionDetails: setProfessionDetails,
        professionDetailsValid: professionDetailsValid, setProfessionalDetailsValid: setProfessionalDetailsValid,
       setProfession: setProfession, professionDetailsDisabled: professionDetailsDisabled, professionDetailsText: professionDetailsText}

    const reasonForJoiningProps = {textAreaValue: reasonForJoining, setTextAreaValue: setReasonForJoining, rows: 5,
        textAreaValid: reasonValid, setTextAreaValid: setReasonValid, labelText: 'Reason for joining', maxLength: 500}


    const reportSignUpModalProps = {firstName: firstName, email: email, modalText: modalText, modalOpen: modalOpen,
        setModalOpen: setModalOpen, hideModal: hideModal}

    return (
        <section className="d-flex flex-column flex-nowrap justify-content-center align-items-center bg-dark" id="signUp">
            <Form className="col-12 col-lg-8">
                <h3 className="card-title text-light text-muted text-center mb-3">Sign up for more information</h3>
                <FirstAndLastNameInput {...nameProps} />
                <EmailAddressInput {...emailProps} />
                <div className="d-flex flex-row flex-nowrap mb-2">
                    <ResidenceInput {...residenceProps} />
                    <ProfessionInput {...professionProps} />
                    <ProfessionDetailsInput {...professionDetailsProps} />
                </div>
                <TextAreaInput {...reasonForJoiningProps} />
            </Form>
            <button className="btn btn-light mx-auto" onClick={handleSubmit}>Sign Up</button>
            <ReportSignUpModal {...reportSignUpModalProps} />
        </section>
    )
}

export default SignUpPage