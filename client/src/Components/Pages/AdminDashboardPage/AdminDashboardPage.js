import React, {useEffect, useState} from "react";
import {useHistory} from "react-router-dom";
import SideBarNav from "../../Navs/SideBarNav/SideBarNav";
import ActivityView from "../../AdminViews/ActivityView/ActivityView";
import UserMessagesView from "../../AdminViews/UserMessagesView/UserMessagesView";
import SignUpView from "../../AdminViews/SignUpView/SignUpView";
import PageLogger from "../../PageLogger/PageLogger";
import ActionsView from "../../AdminViews/ActionsView/ActionsView";

const AdminDashboardPage = (props) => {

    const history = useHistory()
    const [adminValid, setAdminValid] = useState(false)
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
                if (response.status === 200){
                    setAdminValid(true)
                } else {
                    history.push('./admin-login')
                }
            })
            .catch(error => error)
    }, [setNavDisplay, history, adminValid])

    const adminProps = {adminValid: adminValid, setAdminValid: setAdminValid, activeView: activeView}

    return (
        <section className="d-flex flex-row flex-nowrap">
            <PageLogger page="admin_dashboard" />
            <SideBarNav activeView={activeView} setActiveView={setActiveView} />
            <div className="bg-light w-100">
                <ActivityView {...adminProps} />
                <UserMessagesView {...adminProps} />
                <SignUpView {...adminProps} />
                <ActionsView {...adminProps} />
            </div>
        </section>
    )
}

export default AdminDashboardPage