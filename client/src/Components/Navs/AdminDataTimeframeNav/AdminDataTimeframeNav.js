import React, {useState} from "react";
import {Nav, Navbar} from "react-bootstrap";

const AdminDataTimeframeNav = (props) => {

    const [customDatesEnabled, setCustomDatesEnabled] = useState(false)

    const setToLastYear = () => {
        setCustomDatesEnabled(false)
        const today = new Date()
        const lastYear = new Date()
        lastYear.setFullYear(today.getFullYear() - 1);
        props.setStartDate(lastYear.toLocaleDateString('en-GB'))
        props.setEndDate(today.toLocaleDateString('en-GB'))
    }

    const setToLastQuarter = () => {
        setCustomDatesEnabled(false)
        const today = new Date()
        const threeMonthsAgo = new Date()
        threeMonthsAgo.setMonth(today.getMonth() - 3);
        props.setStartDate(threeMonthsAgo.toLocaleDateString('en-GB'))
        props.setEndDate(today.toLocaleDateString('en-GB'))
    }

    const setToLastMonth = () => {
        setCustomDatesEnabled(false)
        const today = new Date()
        const oneMonthAgo = new Date()
        oneMonthAgo.setMonth(today.getMonth() - 1);
        props.setStartDate(oneMonthAgo.toLocaleDateString('en-GB'))
        props.setEndDate(today.toLocaleDateString('en-GB'))
    }

    const setToLastWeek = () => {
        setCustomDatesEnabled(false)
        const today = new Date()
        const oneWeekAgo = new Date()
        oneWeekAgo.setDate(today.getDate() - 7);
        props.setStartDate(oneWeekAgo.toLocaleDateString('en-GB'))
        props.setEndDate(today.toLocaleDateString('en-GB'))
        console.log(oneWeekAgo.toLocaleDateString('en-GB'))
    }

    const setToToday = () => {
        setCustomDatesEnabled(false)
        const today = new Date().toLocaleDateString('en-GB')
        props.setStartDate(today)
        props.setEndDate(today)
    }

    const updateStartDate = (evt) => {
        const date = new Date(evt.target.value)
        props.setStartDate(date.toLocaleDateString('en-GB'))
    }

    const updateEndDate = (evt) => {
        const date = new Date(evt.target.value)
        props.setEndDate(date.toLocaleDateString('en-GB'))
    }

    const enableCustomDates = () => {
        setCustomDatesEnabled(true)
    }

    return (
        <Navbar className="d-flex flex-row flex-nowrap justify-content-center" bg="dark" variant="dark">
            <Nav>
                <button className="btn nav-item nav-link" onClick={setToLastYear}>Last Year</button>
                <button className="btn nav-item nav-link" onClick={setToLastQuarter}>Last Quarter</button>
                <button className="btn nav-item nav-link" onClick={setToLastMonth}>Last Month</button>
                <button className="btn nav-item nav-link" onClick={setToLastWeek}>Last Week</button>
                <button className="btn nav-item nav-link" onClick={setToToday}>Today</button>
                <button className="btn nav-item nav-link" onClick={enableCustomDates}>Custom</button>
                <Nav className={customDatesEnabled ? '' : 'd-none'}>
                    <input className="form-control-sm nav-item" type="date" onChange={updateStartDate} />
                    <input className="form-control-sm nav-item" type="date" onChange={updateEndDate} />
                </Nav>
            </Nav>
        </Navbar>
    )
}

export default AdminDataTimeframeNav