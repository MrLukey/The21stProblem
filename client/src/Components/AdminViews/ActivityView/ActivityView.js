import React, {useEffect, useState} from "react";
import MainPageActivityRadar from "../../Charts/AdminCharts/MainPageActivityRadar/MainPageActivityRadar";
import DataPageActivityRadar from "../../Charts/AdminCharts/DataPageActivityRadar/DataPageActivityRadar";
import CustomBarChart from "../../Charts/CustomBarChart/CustomBarChart";

const ActivityView = () => {

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
        <div className="w-100">
            <div className="w-50 h-100 m-5">
                <MainPageActivityRadar allSiteActivity={allSiteActivity} timeFrame={timeFrame} />
                <DataPageActivityRadar allSiteActivity={allSiteActivity} timeFrame={timeFrame} />
            </div>
            <div className="w-50 h-100">
                <CustomBarChart />
            </div>
        </div>
    )
}

export default ActivityView