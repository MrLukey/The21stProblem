import React, {useEffect, useState} from "react";
import AdminDataTimeframeNav from "../../Navs/AdminDataTimeframeNav/AdminDataTimeframeNav";
import ActivitySummary from "../../Charts/AdminCharts/ActivitySummary/ActivitySummary";

const ActivityView = (props) => {

    const [allSiteActivity, setAllSiteActivity] = useState([])
    const today = new Date().toLocaleDateString('en-GB')
    const [startDate, setStartDate] = useState(today)
    const [endDate, setEndDate] = useState(today)

    useEffect(() => {
        const url = 'http://localhost:3001/site-activity'
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
                setAllSiteActivity(data)
            })
            .catch(error => error)
    }, [startDate, endDate, setAllSiteActivity])

    const dataTimeframeProps = {startDate: startDate, setStartDate: setStartDate, endDate: endDate, setEndDate: setEndDate}
    return (
        <section className={props.activeView === 'activity' ? '' : 'd-none'}>
            <AdminDataTimeframeNav {...dataTimeframeProps} />
            <ActivitySummary activtyData={allSiteActivity} />
        </section>
    )
}

export default ActivityView