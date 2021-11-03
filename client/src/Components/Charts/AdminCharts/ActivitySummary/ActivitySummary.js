import React, {useEffect, useState} from "react";

const ActivitySummary = (props) => {

    const [activitySummary, setActivitySummary] = useState({})

    const activityData = props.activtyData
    useEffect(() => {
        const summaryData = {total: 0}
        activityData.forEach(record => {
            for (const [key, value] of Object.entries(record)) {
                if (key !== 'date'){
                    summaryData[key] = summaryData[key] ? summaryData[key] + value : value
                    summaryData.total += value
                }
            }
        })
        setActivitySummary(summaryData)
    }, [activityData])

    return (
        <section className="d-flex flex-column flex-nowrap text-center my-auto">
            <div>
                <div className="d-flex flex-row flex-nowrap justify-content-around">
                    <div className="m-1 p-2">
                        <h3 className="card-title">{activitySummary.cover}</h3>
                        <p className="text-muted">Cover</p>
                    </div>
                    <div className="m-1 p-2">
                        <h3 className="card-title">{activitySummary.problem}</h3>
                        <p className="text-muted">Problem</p>
                    </div>
                    <div className="m-1 p-2">
                        <h3 className="card-title">{activitySummary.solution}</h3>
                        <p className="text-muted">Solution</p>
                    </div>
                    <div className="m-1 p-2">
                        <h3 className="card-title">{activitySummary.newWorld}</h3>
                        <p className="text-muted">A New World</p>
                    </div>
                    <div className="m-1 p-2">
                        <h3 className="card-title">{activitySummary.whatToDo}</h3>
                        <p className="text-muted">What To Do</p>
                    </div>
                </div>
                <div className="d-flex flex-row flex-nowrap justify-content-around">
                    <div className="m-1 p-2">
                        <h3 className="card-title">{activitySummary.about}</h3>
                        <p className="text-muted">About</p>
                    </div>
                    <div className="m-1 p-2">
                        <h3 className="card-title">{activitySummary.problemData}</h3>
                        <p className="text-muted">Problem Data</p>
                    </div>
                    <div className="m-1 p-2">
                        <h3 className="card-title">{activitySummary.solutionData}</h3>
                        <p className="text-muted">Solution Data</p>
                    </div>
                    <div className="m-1 p-2">
                        <h3 className="card-title">{activitySummary.newWorldData}</h3>
                        <p className="text-muted">New World Data</p>
                    </div>
                    <div className="m-1 p-2">
                        <h3 className="card-title">{activitySummary.refs}</h3>
                        <p className="text-muted">References</p>
                    </div>
                </div>
                <div className="d-flex flex-row flex-nowrap justify-content-around">
                    <div className="m-1 p-2">
                        <h3 className="card-title">{activitySummary.contact}</h3>
                        <p className="text-muted">Contact</p>
                    </div>
                    <div className="m-1 p-2">
                        <h3 className="card-title">{activitySummary.signUp}</h3>
                        <p className="text-muted">Sign Up</p>
                    </div>
                    <div className="m-1 p-2">
                        <h3 className="card-title">{activitySummary.pdfDownload}</h3>
                        <p className="text-muted">PDF Downloads</p>
                    </div>
                </div>
                <div className="d-flex flex-row flex-nowrap justify-content-around">
                    <div className="m-1 p-2">
                        <h3 className="card-title">{activitySummary.adminLogins}</h3>
                        <p className="text-muted">Admin Login</p>
                    </div>
                    <div className="m-1 p-2">
                        <h3 className="card-title">{activitySummary.adminDashboard}</h3>
                        <p className="text-muted">Admin Dashboard</p>
                    </div>
                </div>
                <div className="d-flex flex-row flex-nowrap justify-content-around">
                    <div className="m-1 p-2">
                        <h3 className="card-title">{activitySummary.total}</h3>
                        <p className="text-muted">Total</p>
                    </div>
                </div>
                <h1>Page Loads</h1>
            </div>
        </section>
    )
}

export default ActivitySummary