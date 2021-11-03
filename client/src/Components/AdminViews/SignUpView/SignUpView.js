import React, {useEffect, useState} from "react";
import AdminDataTimeframeNav from "../../Navs/AdminDataTimeframeNav/AdminDataTimeframeNav";
import {Accordion} from "react-bootstrap";
import SignUpAccordion from "../../Accordions/SignUpAccordion/SignUpAccordion";

const SignUpView = (props) => {
    const [newSignUps, setNewSignUps] = useState([])
    const [oldUsers, setOldUsers] = useState([])
    const [scientists, setScientists] = useState([])
    const [engineers, setEngineers] = useState([])
    const [politicians, setPoliticians] = useState([])
    const [influencers, setInfluencers] = useState([])
    const [other, setOther] = useState([])

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
                let _newSignUps = []
                let _oldUsers = []
                let _scientists = []
                let _engineers = []
                let _politicians = []
                let _influencers = []
                let _other = []
                indexedSignUps.forEach(signUp => {
                    if (signUp.seenByAdmin === 1){
                        switch (signUp.profession){
                            case 'Scientist':
                                _scientists[signUp.id] = signUp
                                break
                            case 'Engineer':
                                _engineers[signUp.id] = signUp
                                break
                            case 'Politician':
                                _politicians[signUp.id] = signUp
                                break
                            case 'Influencer':
                                _influencers[signUp.id] = signUp
                                break
                            default:
                                _other[signUp.id] = signUp
                        }
                    }
                    if (signUp.seenByAdmin === 0){
                        _newSignUps[signUp.id] = signUp
                    } else {
                        _oldUsers[signUp.id] = signUp
                    }
                })
                setNewSignUps(_newSignUps)
                setOldUsers(_oldUsers)
                setScientists(_scientists)
                setEngineers(_engineers)
                setPoliticians(_politicians)
                setInfluencers(_influencers)
                setOther(_other)
            }).catch(error => error)
    }

    useEffect(() => {
        getSignUps()
    }, [startDate, endDate])

    const dataTimeframeProps = {startDate: startDate, setStartDate: setStartDate, endDate: endDate, setEndDate: setEndDate}
    return (
        <section className={"overflow-hidden" + (props.activeView === 'signUps' ? '' : ' d-none')}>
            <AdminDataTimeframeNav {...dataTimeframeProps} />
            <Accordion>
                <SignUpAccordion
                    eventKey={0}
                    signUps={newSignUps}
                    signUpGroup="New"
                    getSignUps={getSignUps} />
                <SignUpAccordion
                    eventKey={-1}
                    signUps={oldUsers}
                    signUpGroup="All"
                    getSignUps={getSignUps} />
                <SignUpAccordion
                    eventKey={-2}
                    signUps={scientists}
                    signUpGroup="Scientists"
                    getSignUps={getSignUps} />
                <SignUpAccordion
                    eventKey={-3}
                    signUps={engineers}
                    signUpGroup="Engineers"
                    getSignUps={getSignUps} />
                <SignUpAccordion
                    eventKey={-4}
                    signUps={politicians}
                    signUpGroup="Politicians"
                    getSignUps={getSignUps} />
                <SignUpAccordion
                    eventKey={-5}
                    signUps={influencers}
                    signUpGroup="Influencers"
                    getSignUps={getSignUps} />
                <SignUpAccordion
                    eventKey={-6}
                    signUps={other}
                    signUpGroup="Other"
                    getSignUps={getSignUps} />
            </Accordion>
        </section>
    )
}

export default SignUpView