import React, {useEffect, useState} from "react";
import CustomRadarChart from "../../../CustomRadarChart/CustomRadarChart";

const MainPageActivityChart = () => {

    const [allSiteActivity, setAllSiteActivity] = useState([])
    const [chartData, setChartData] = useState(
        [
            {
                page: 'cover',
                pageLoads: 0,
            },
            {
                page: 'problem',
                pageLoads: 0,
            },
            {
                page: 'solution',
                pageLoads: 0,
            },
            {
                page: 'newWorld',
                pageLoads: 0,
            },
            {
                page: 'whatToDo',
                pageLoads: 0,
            },
        ])

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
        const solution = {
            page: 'solution',
            pageLoads: 0
        }
        const newWorld = {
            page: 'newWorld',
            pageLoads: 0
        }
        const whatToDo = {
            page: 'whatToDo',
            pageLoads: 0
        }
        data.forEach(day => {
            cover.pageLoads += day.cover
            problem.pageLoads += day.problem
            solution.pageLoads += day.solution
            newWorld.pageLoads += day.newWorld
            whatToDo.pageLoads += day.whatToDo
        })
        setChartData([cover, problem, solution, newWorld, whatToDo])
    }
    return (
        <>
            <CustomRadarChart
                name="Main Page Activity"
                data={chartData}
                dataKey="pageLoads"
                labelKey="page"
            />
        </>
    )
}

export default MainPageActivityChart