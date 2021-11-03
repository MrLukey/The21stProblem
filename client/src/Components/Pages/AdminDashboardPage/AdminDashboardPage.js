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
    const [activeView, setActiveView] = useState('')


    const setNavDisplay = props.setNavDisplay
    useEffect(() => {
        setNavDisplay('d-none')
        // const url = 'http://localhost:3001/verify-admin'
        // const requestOptions = {
        //     method: 'GET',
        //     headers: {'Content-Type': 'application/json'}
        // }
        // fetch(url, requestOptions)
        //     .then(response => {
        //         if (response.status !== 200){
        //             history.push('admin-login')
        //         }
        //     })
        //     .catch(error => error)
    }, [setNavDisplay,history])

    return (
        <section className="d-flex flex-row flex-nowrap">
            <PageLogger page="admin_dashboard" />
            <SideBarNav activeView={activeView} setActiveView={setActiveView} />
            <div className="bg-light d-flex flex-column flex-nowrap w-100">
                <ActivityView activeView={activeView} />
                <UserMessagesView activeView={activeView} />
                <SignUpView activeView={activeView} />
                <ActionsView activeView={activeView} />
            </div>
        </section>
    )
}

export default AdminDashboardPage