import React, {useEffect, useState} from "react";
import {Form, FormGroup} from "react-bootstrap";
import './SignUpPage.css'

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
        const url = 'http://localhost:3001/get-all-countries'
        const requestOptions = {
            method: 'GET',
            headers: {'Content-Type': 'application/json'}
        }
        fetch(url, requestOptions)
            .then(response => response.json())
            .then(data => setAllCountries(data))
            .catch(error => console.log(error))

    }, [])

    useEffect(() => {
        if (firstName !== '' && lastName !== '' && email !== ''){
            setSignUpButtonDisabled(false)
        } else {
            setSignUpButtonDisabled(true)
        }
        console.log(profession)

    }, [firstName, lastName, email, profession])

    const handleFirstNameInput = evt => {
        if (evt.target.value.length <= 30){
            setFirstName(evt.target.value)
        }
    }

    const handleSecondNameInput = evt => {
        if (evt.target.value.length <= 30){
            setLastName(evt.target.value)
        }
    }

    const handleEmailInput = evt => {
        if (evt.target.value.length <= 120) {
            setEmail(evt.target.value)
        }
    }

    const handleProfessionSelectInput = evt => {
        const selected = evt.target.value
        if (selected === 'Other'){
            setProfessionDetailsDisabled(false)
            setProfessionDetailsText('Please Specify')
        } else {
            setProfession(selected)
            setProfessionDetailsDisabled(true)
            setProfessionDetailsText('')
            setProfessionDetails('')
        }
    }

    const handleProfessionTextInput = evt => {
        if (evt.target.value.length <= 30){
            setProfessionDetails(evt.target.value)
            setProfession(evt.target.value)
        }
    }

    const handleReasonForJoiningInput = evt => {
        if (evt.target.value.length <= 500){
            setReasonForJoining(evt.target.value)
        }
    }

    const handleSubmit = evt => {
        const url = 'http://localhost:3001/sign-up'
        const requestOptions = {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                firstName: firstName,
                lastName: lastName,
                email: email,
                profession: professionDetails === '' ? profession : professionDetails,
                reasonForJoining: reasonForJoining
            })
        }
        fetch(url, requestOptions)
            .then(response => response)
            .catch(error => console.log(error))
    }

    return (
        <section className="d-flex flex-column flex-nowrap justify-content-center align-items-center bg-dark" id="signUp">
            <Form className="col-12 col-lg-8">
                <h3 className="card-title text-light text-muted text-center mb-3">Sign up for more information</h3>
                <div className="d-flex flex-row flex-nowrap mb-2">
                    <FormGroup className="form-floating flex-grow-1 mx-1">
                        <input className="form-control" type="text" id="firstName" value={firstName} onChange={handleFirstNameInput} maxLength={30}/>
                        <label htmlFor="firstName">First name</label>
                    </FormGroup>
                    <FormGroup className="form-floating flex-grow-1 mx-1">
                        <input className="form-control" type="text" id="lastName" value={lastName} onChange={handleSecondNameInput} maxLength={30}/>
                        <label htmlFor="lastName">Last name</label>
                    </FormGroup>
                </div>
                <FormGroup className="form-floating mx-1 mb-2">
                    <input className="form-control" type="email" id="email" value={email} onChange={handleEmailInput} maxLength={120}/>
                    <label htmlFor="email">Email address</label>
                </FormGroup>
                <div className="d-flex flex-row flex-nowrap mb-2">
                    <FormGroup className="form-floating flex-grow-1 mx-1">
                        <input className="form-control" type="text" list="countryOfResidence" />
                        <datalist id="countryOfResidence">
                            {allCountries.map(country =>
                                <option key={country.id}>{country.name}</option>
                            )}
                        </datalist>
                        <label htmlFor="countryOfResidence">Residence</label>
                    </FormGroup>
                    <FormGroup className="form-floating flex-grow-1 mx-1" value={profession} onChange={handleProfessionSelectInput}>
                        <select className="form-control" id="profession">
                            <option key={0} value={0}> </option>
                            <option key={1}>Scientist</option>
                            <option key={2}>Engineer</option>
                            <option key={3}>Politician</option>
                            <option key={4}>Influencer</option>
                            <option key={5}>Other</option>
                        </select>
                        <label htmlFor="profession">Profession</label>
                    </FormGroup>
                    <FormGroup className="form-floating flex-grow-1 mx-1">
                        <input className="form-control" type="text" id="professionDetails" disabled={professionDetailsDisabled}
                            value={professionDetails} onChange={handleProfessionTextInput} maxLength={30}/>
                        <label htmlFor="professionDetails">{professionDetailsText}</label>
                    </FormGroup>
                </div>
                <FormGroup className="form-floating mx-1 mb-2" >
                    <textarea className="form-control h-auto"  rows={5} id="comment" value={reasonForJoining}
                              onChange={handleReasonForJoiningInput} maxLength={500} />
                    <label htmlFor="comment">Reason for joining</label>
                </FormGroup>
            </Form>
            <button className="btn btn-light mx-auto" onClick={handleSubmit} disabled={signUpButtonDisabled}>Sign Up</button>
        </section>
    )
}

export default SignUpPage