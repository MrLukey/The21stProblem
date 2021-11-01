import React, {useState} from "react";
import {Nav, Navbar} from "react-bootstrap";

const AdminDataTimeframeNav = (props) => {

    const [rangeSelected, setRangeSelected] = useState('today')
    const [customDatesEnabled, setCustomDatesEnabled] = useState(false)

    const setToAll = () => {
        setRangeSelected('all')
        setCustomDatesEnabled(false)
        const today = new Date()
        const beforeProjectLive = new Date('01/11/2021')
        props.setStartDate(beforeProjectLive.toLocaleDateString('en-GB'))
        props.setEndDate(today.toLocaleDateString('en-GB'))
    }

    const setToLastYear = () => {
        setRangeSelected('lastYear')
        setCustomDatesEnabled(false)
        const today = new Date()
        const lastYear = new Date()
        lastYear.setFullYear(today.getFullYear() - 1);
        props.setStartDate(lastYear.toLocaleDateString('en-GB'))
        props.setEndDate(today.toLocaleDateString('en-GB'))
    }

    const setToLastQuarter = () => {
        setRangeSelected('lastQuarter')
        setCustomDatesEnabled(false)
        const today = new Date()
        const threeMonthsAgo = new Date()
        threeMonthsAgo.setMonth(today.getMonth() - 3);
        props.setStartDate(threeMonthsAgo.toLocaleDateString('en-GB'))
        props.setEndDate(today.toLocaleDateString('en-GB'))
    }

    const setToLastMonth = () => {
        setRangeSelected('lastMonth')
        setCustomDatesEnabled(false)
        const today = new Date()
        const oneMonthAgo = new Date()
        oneMonthAgo.setMonth(today.getMonth() - 1);
        props.setStartDate(oneMonthAgo.toLocaleDateString('en-GB'))
        props.setEndDate(today.toLocaleDateString('en-GB'))
    }

    const setToLastWeek = () => {
        setRangeSelected('lastWeek')
        setCustomDatesEnabled(false)
        const today = new Date()
        const oneWeekAgo = new Date()
        oneWeekAgo.setDate(today.getDate() - 7);
        props.setStartDate(oneWeekAgo.toLocaleDateString('en-GB'))
        props.setEndDate(today.toLocaleDateString('en-GB'))
    }

    const setToToday = () => {
        setRangeSelected('today')
        setCustomDatesEnabled(false)
        const today = new Date().toLocaleDateString('en-GB')
        props.setStartDate(today)
        props.setEndDate(today)
    }

    const enableCustomDates = () => {
        setRangeSelected('custom')
        setCustomDatesEnabled(true)
    }

    const updateStartDate = (evt) => {
        const date = new Date(evt.target.value)
        props.setStartDate(date.toLocaleDateString('en-GB'))
    }

    const updateEndDate = (evt) => {
        const date = new Date(evt.target.value)
        props.setEndDate(date.toLocaleDateString('en-GB'))
    }

    return (
        <Navbar className="d-flex flex-row flex-nowrap justify-content-center" bg="dark" variant="dark">
            <Nav>
                <button className={"btn nav-item nav-link" + (rangeSelected === 'all' ? ' active' : '')} onClick={setToAll}>All</button>
                <button className={"btn nav-item nav-link" + (rangeSelected === 'lastYear' ? ' active' : '')} onClick={setToLastYear}>Last Year</button>
                <button className={"btn nav-item nav-link" + (rangeSelected === 'lastQuarter' ? ' active' : '')} onClick={setToLastQuarter}>Last Quarter</button>
                <button className={"btn nav-item nav-link" + (rangeSelected === 'lastMonth' ? ' active' : '')} onClick={setToLastMonth}>Last Month</button>
                <button className={"btn nav-item nav-link" + (rangeSelected === 'lastWeek' ? ' active' : '')} onClick={setToLastWeek}>Last Week</button>
                <button className={"btn nav-item nav-link" + (rangeSelected === 'today' ? ' active' : '')} onClick={setToToday}>Today</button>
                <button className={"btn nav-item nav-link" + (rangeSelected === 'custom' ? ' active' : '')} onClick={enableCustomDates}>Custom</button>
                <Nav className={customDatesEnabled ? '' : 'd-none'}>
                    <input className="form-control-sm nav-item" type="date" onChange={updateStartDate} />
                    <input className="form-control-sm nav-item" type="date" onChange={updateEndDate} />
                </Nav>
            </Nav>
        </Navbar>
    )
}

export default AdminDataTimeframeNav