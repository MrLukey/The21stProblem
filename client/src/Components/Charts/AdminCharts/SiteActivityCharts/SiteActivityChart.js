import React, {useEffect, useState} from "react";
import CustomRadarChart from "../../CustomRadarChart/CustomRadarChart";

const SiteActivityChart = () => {

    const [allSiteActivity, setAllSiteActivity] = useState([])
    const [chartData, setChartData] = useState([])

    useEffect(() => {
        const url = 'http://localhost:3001/site-activity'
        const requestOptions = {
            method: 'GET',
            headers: {'Content-Type': 'application/json'}
        }
        fetch(url, requestOptions)
            .then(response => response.json())
            .then(data => {
                console.log(data)
                populateGraph(data)
                setAllSiteActivity(data)
            })
            .catch(error => error)
    }, [])

    const populateGraph = (data) => {
        const cover = {
            page: 'cover',
            pageLoads: 0
        }
        const problem = {
            page: 'problem',
            pageLoads: 0
        }
        const problemData = {
            page: 'problemData',
            pageLoads: 0
        }
        const solution = {
            page: 'solution',
            pageLoads: 0
        }
        const solutionData = {
            page: 'solutionData',
            pageLoads: 0
        }
        const newWorld = {
            page: 'newWorld',
            pageLoads: 0
        }
        const newWorldData = {
            page: 'newWorldData',
            pageLoads: 0
        }
        const whatToDo = {
            page: 'whatToDo',
            pageLoads: 0
        }
        const signUp = {
            page: 'signUp',
            pageLoads: 0
        }
        const refs = {
            page: 'refs',
            pageLoads: 0
        }
        const pdfDownload = {
            page: 'pdfDownload',
            pageLoads: 0
        }
        const adminLogin = {
            page: 'adminLogin',
            pageLoads: 0
        }
        const adminDashboard = {
            page: 'adminDashboard',
            pageLoads: 0
        }
        data.forEach(day => {
            cover.pageLoads += day.cover
            problem.pageLoads += day.problem
            problemData.pageLoads += day.problemData
            solution.pageLoads += day.solution
            solutionData.pageLoads += day.solutionData
            newWorld.pageLoads += day.newWorld
            newWorldData.pageLoads += day.newWorldData
            whatToDo.pageLoads += day.whatToDo
            signUp.pageLoads += day.signUp
            refs.pageLoads += day.refs
            pdfDownload.pageLoads += day.pdfDownload
            adminLogin.pageLoads += day.adminLogins
            adminDashboard.pageLoads += day.adminDashboard
        })
        setChartData([cover, problem, problemData, solution, solutionData, newWorld, newWorldData, whatToDo,
            signUp, refs, pdfDownload, adminLogin, adminDashboard])
    }
    return (
        <>
            <CustomRadarChart
                name="Site Activity"
                data={chartData}
                dataKey="pageLoads"
                labelKey="page"
            />
        </>
    )
}

export default SiteActivityChart