import React, {useEffect} from "react";
import {useHistory} from "react-router-dom";

const AdminDashboardPage = () => {

    const history = useHistory()

    useEffect(() => {
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
    })

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
        </>
    )
}

export default AdminDashboardPage