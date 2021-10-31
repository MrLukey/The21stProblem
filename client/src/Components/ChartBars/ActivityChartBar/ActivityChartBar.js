import React, {useEffect, useState} from "react";
import MainPageActivityChart from "../../Charts/AdminCharts/MainPageActivityChart/MainPageActivityChart";

const ActivityChartBar = () => {

    const [allSiteActivity, setAllSiteActivity] = useState([])
    const [timeFrame, setTimeFrame] = useState('all')


    useEffect(() => {
        const url = 'http://localhost:3001/site-activity'
        const requestOptions = {
            method: 'GET',
            headers: {'Content-Type': 'application/json'}
        }
        fetch(url, requestOptions)
            .then(response => response.json())
            .then(data => {
                setAllSiteActivity(data)
            })
            .catch(error => error)
    }, [])

    return (
       <MainPageActivityChart allSiteActivity={allSiteActivity} timeFrame={timeFrame}/>
    )
}

export default ActivityChartBar