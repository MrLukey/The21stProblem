import React, {useEffect, useState} from "react";
import AdminDataTimeframeNav from "../../Navs/AdminDataTimeframeNav/AdminDataTimeframeNav";
import {Accordion} from "react-bootstrap";
import MessagesAccordion from "../../Accordions/MessagesAccordion/MessagesAccordion";

const SignUpView = (props) => {
    const [newSignUps, setNewSignUps] = useState([])
    const [oldUsers, setOldUsers] = useState([])

    const today = new Date().toLocaleDateString('en-GB')
    const [startDate, setStartDate] = useState(today)
    const [endDate, setEndDate] = useState(today)

    const indexSignUpsByID = (signUp) => {
        const indexedSignUps = []
        signUp.forEach(signUp => {
            indexedSignUps[signUp.id] = signUp
        })
        return indexedSignUps
    }

    const getSignUps = () => {
        const url = 'http://localhost:3001/sign-ups'
        const requestOptions = {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                startDate: startDate,
                endDate: endDate
            })
        }
        fetch(url, requestOptions)
            .then(response => response.json())
            .then(data => {
                const indexedSignUps = indexSignUpsByID(data)
                const _newSignUps = []
                const _oldUsers = []
                indexedSignUps.forEach(signUp => {
                    if (signUp.seenByAdmin === 0){
                        _newSignUps[signUp.id] = signUp
                    } else {
                        _oldUsers[signUp.id] = signUp
                    }
                })
                setNewSignUps(_newSignUps)
                setOldUsers(_oldUsers)
            }).catch(error => error)
    }

    useEffect(() => {
        getSignUps()
    }, [startDate, endDate])
//
    const editSignUpState = (signUpID, stateToChange, newState) => {
        const url = 'http://localhost:3001/edit-sign-up-state'
        const requestOptions = {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                messageID: signUpID,
                stateToChange: stateToChange,
                newState: newState
            })
        }
        fetch(url, requestOptions)
            .then(response => {
                if (response.status === 200){
                    getSignUps()
                }
            })
            .catch(error => error)
    }

    const dataTimeframeProps = {startDate: startDate, setStartDate: setStartDate, endDate: endDate, setEndDate: setEndDate}
    return (
        <section className={props.activeView === 'messages' ? '' : 'd-none'}>
            <AdminDataTimeframeNav {...dataTimeframeProps} />
            <Accordion>
                <MessagesAccordion
                    eventKey={0}
                    signUps={newSignUps}
                    signUpGroup="New Sign Ups"
                    editSignUpState={editSignUpState}
                    editSignUpButton="Mark as Seen"
                    stateToChange="seen_by_admin"
                    newState={1} />
                <MessagesAccordion
                    eventKey={0}
                    signUps={oldUsers}
                    signUpGroup="Users"
                    editSignUpState={editSignUpState}
                    editSignUpButton="Send Action Email"
                    stateToChange="action_email_sent"
                    newState={1} />
            </Accordion>
        </section>
    )
}

export default SignUpView