import React, {useEffect, useState} from "react";
import {Form} from "react-bootstrap";
import './SignUpPage.css'
import FirstAndLastNameInput from "../../Inputs/FirstAndLastNameInput/FirstAndLastNameInput";
import EmailAddressInput from "../../Inputs/EmailAddressInput/EmailAddressInput";
import ResidenceInput from "../../Inputs/ResidenceInput/ResidenceInput";
import ProfessionInput from "../../Inputs/ProfessionInput/ProfessionInput";
import ProfessionDetailsInput from "../../Inputs/ProfessionDetailsInput/ProfessionDetailsInput";
import ReasonForJoiningInput from "../../Inputs/ReasonForJoiningInput/ReasonForJoiningInput";

const SignUpPage = () => {
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const [placeOfResidence, setPlaceOfResidence] = useState('')
    const [profession, setProfession] = useState('')
    const [professionDetailsDisabled, setProfessionDetailsDisabled] = useState(true)
    const [professionDetailsText, setProfessionDetailsText] = useState('')
    const [professionDetails, setProfessionDetails] = useState('')
    const [reasonForJoining, setReasonForJoining] = useState('')
    const [signUpButtonDisabled, setSignUpButtonDisabled] = useState(true)

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
            .catch(error => console.log(error))

    }, [])

    useEffect(() => {
        if (firstName !== '' && lastName !== '' && email !== '' && placeOfResidence !== '' && profession !== '' && reasonForJoining !== ''){
            setSignUpButtonDisabled(false)
        } else {
            setSignUpButtonDisabled(true)
        }
    }, [firstName, lastName, email, placeOfResidence, profession, reasonForJoining])


    const handleSubmit = evt => {
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
        console.log(requestOptions)
        fetch(url, requestOptions)
            .then(response => console.log(response))
            .catch(error => console.log(error))
    }

    const nameProps = {firstName: firstName, setFirstName: setFirstName, lastName: lastName, setLastName: setLastName}
    const emailProps = {email: email, setEmail: setEmail}
    const residenceProps = {placeOfResidence: placeOfResidence, setPlaceOfResidence: setPlaceOfResidence}
    const professionProps = {profession: profession, setProfession: setProfession, setProfessionDetails: setProfessionDetails,
        setProfessionDetailsDisabled: setProfessionDetailsDisabled, setProfessionDetailsText: setProfessionDetailsText}
    const professionDetailsProps = {professionDetails: professionDetails, setProfessionDetails: setProfessionDetails,
       setProfession: setProfession, professionDetailsDisabled: professionDetailsDisabled, professionDetailsText: professionDetailsText}
    const reasonForJoiningProps = {reasonForJoining: reasonForJoining, setReasonForJoining: setReasonForJoining}
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
                <ReasonForJoiningInput {...reasonForJoiningProps} />
            </Form>
            <button className="btn btn-light mx-auto" onClick={handleSubmit} disabled={signUpButtonDisabled}>Sign Up</button>
        </section>
    )
}

export default SignUpPage