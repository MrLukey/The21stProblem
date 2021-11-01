import React, {useEffect, useState} from "react";
import {useHistory} from "react-router-dom";
import SideBarNav from "../../Navs/SideBarNav/SideBarNav";
import ActivityView from "../../AdminViews/ActivityView/ActivityView";
import UserMessagesView from "../../AdminViews/UserMessagesView/UserMessagesView";

const AdminDashboardPage = (props) => {

    const history = useHistory()
    const [activeView, setActiveView] = useState('')


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
    }, [setNavDisplay,history])

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
        <section className="d-flex flex-row flex-nowrap">
            <SideBarNav activeView={activeView} setActiveView={setActiveView} />
            <div className="bg-light d-flex flex-column flex-nowrap w-100">
                <UserMessagesView activeView={activeView} />
            </div>
        </section>
    )
}

export default AdminDashboardPage