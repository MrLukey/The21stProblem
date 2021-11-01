import React, {useEffect, useState} from "react";
import MainPageActivityRadar from "../../Charts/AdminCharts/MainPageActivityRadar/MainPageActivityRadar";
import DataPageActivityRadar from "../../Charts/AdminCharts/DataPageActivityRadar/DataPageActivityRadar";
import CustomBarChart from "../../Charts/CustomBarChart/CustomBarChart";
import AdminDataTimeframeNav from "../../Navs/AdminDataTimeframeNav/AdminDataTimeframeNav";

const ActivityView = (props) => {

    const [allSiteActivity, setAllSiteActivity] = useState([])
    const [timeFrame, setTimeFrame] = useState('all')

    const today = new Date().toLocaleDateString('en-GB')
    const [startDate, setStartDate] = useState(today)
    const [endDate, setEndDate] = useState(today)

    const getSiteActivity = () => {
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
                console.log(data)
                setAllSiteActivity(data)
            })
            .catch(error => error)
    }
    useEffect(() => {
        getSiteActivity()
    }, [startDate, endDate])

    const dataTimeframeProps = {startDate: startDate, setStartDate: setStartDate, endDate: endDate, setEndDate: setEndDate}
    return (
        <section className={props.activeView === 'activity' ? '' : 'd-none'}>
            <AdminDataTimeframeNav {...dataTimeframeProps} />
        </section>
        // <div className="w-100">
        //     <div className="w-50 h-100 m-5">
        //         {/*<MainPageActivityRadar allSiteActivity={allSiteActivity} timeFrame={timeFrame} />*/}
        //         {/*<DataPageActivityRadar allSiteActivity={allSiteActivity} timeFrame={timeFrame} />*/}
        //     </div>
        //     <div className="w-50 h-100">
        //         {/*<CustomBarChart />*/}
        //     </div>
        // </div>
    )
}

export default ActivityView