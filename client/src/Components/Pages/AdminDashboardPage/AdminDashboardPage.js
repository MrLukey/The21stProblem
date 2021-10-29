import React, {useEffect} from "react";

const AdminDashboardPage = () => {

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