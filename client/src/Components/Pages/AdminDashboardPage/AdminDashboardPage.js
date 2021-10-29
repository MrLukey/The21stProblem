import React, {useEffect} from "react";
import {useHistory} from "react-router-dom";

const AdminDashboardPage = (props) => {

    const history = useHistory()
    const setNavDisplay = props.setNavDisplay

    useEffect(() => {
        setNavDisplay('d-none')
        const url = 'http://localhost:3001/verify-admin'
        const requestOptions = {
            method: 'GET',
            headers: {'Content-Type': 'application/json'}
        }
        fetch(url, requestOptions)
            .then(response => {
                if (response.status !== 200){
                    history.push('admin-login')
                }
            })
            .catch(error => error)
    }, [setNavDisplay, history])

    useEffect(() => {
        const url = 'http://localhost:3001/log-page-load'
        const requestOptions = {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                page: 'admin_dashboard'
            })
        }
        fetch(url, requestOptions)
            .then(response => response)
            .catch(error => error)
    }, [])

    return (
        <>
            <h1>TESYsdfsdgsdgg</h1>
        </>
    )
}

export default AdminDashboardPage