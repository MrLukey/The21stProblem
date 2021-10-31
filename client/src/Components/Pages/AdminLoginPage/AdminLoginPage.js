import React, {useEffect, useState} from "react";
import {useHistory} from "react-router-dom";
import {Form} from "react-bootstrap";
import EmailAddressInput from "../../Inputs/EmailAddressInput/EmailAddressInput";
import PasswordInput from "../../Inputs/PasswordInput/PasswordInput";

const AdminLoginPage = (props) => {

    const history = useHistory()

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const [emailValid, setEmailValid] = useState('')

    const emailProps = {email: email, setEmail: setEmail, emailValid: emailValid, setEmailValid: setEmailValid}
    const passwordProps = {password: password, setPassword: setPassword}

    const handleLogin = (evt) => {
        let formValid = true
        if (emailValid !== ' is-valid'){
            setEmailValid(' is-invalid')
            formValid = false
        }
        if (formValid){
            const url = 'http://localhost:3001/admin-login'
            const requestOptions = {
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify({
                    email: email,
                    password: password
                })
            }
            fetch(url, requestOptions)
                .then(response => {
                    if (response.status === 200){
                        history.push('admin-dashboard')
                    }
                })
                .catch(error => console.log(error))
        }
    }

    const setNavDisplay = props.setNavDisplay
    useEffect(() => {
        const url = 'http://localhost:3001/log-page-load'
        const requestOptions = {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                page: 'admin_login'
            })
        }
        fetch(url, requestOptions).catch()
        setNavDisplay('d-none')
    }, [setNavDisplay])

    return (
        <section className="d-flex flex-column flex-nowrap justify-content-center align-items-center bg-dark vh-100" id="signUp">
            <Form className="col-12 col-lg-8">
                <h3 className="card-title text-light text-muted text-center mb-3">Admin login</h3>
                <EmailAddressInput {...emailProps} />
                <PasswordInput {...passwordProps} />
            </Form>
            <button className="btn btn-light mx-auto" onClick={handleLogin}>Login</button>
        </section>
    )
}

export default AdminLoginPage