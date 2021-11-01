import React, {useEffect, useState} from "react";
import CustomRadarChart from "../../CustomRadarChart/CustomRadarChart";

const MainPageActivityRadar = (props) => {

    const [chartData, setChartData] = useState([
        {page: 'Cover', pageLoads: 0,},
        {page: 'Problem', pageLoads: 0,},
        {page: 'Solution', pageLoads: 0,},
        {page: 'New World', pageLoads: 0,},
        {page: 'What To Do', pageLoads: 0,},
    ])

    useEffect(() => {
        const cover = {
            page: 'Cover',
            pageLoads: 0
        }
        const problem = {
            page: 'Problem',
            pageLoads: 0
        }
        const solution = {
            page: 'Solution',
            pageLoads: 0
        }
        const newWorld = {
            page: 'New World',
            pageLoads: 0
        }
        const whatToDo = {
            page: 'What To Do',
            pageLoads: 0
        }
        // const limit = new Date('22/10/2021')
        // const otherDate = new Date('23/10/2021')
        // console.log(new Date('22/10/2021').valueOf() < new Date('23/10/2021').valueOf())
        // props.allSiteActivity.map(day => console.log(day.date))
        // console.log(props.allSiteActivity)
        const data = props.allSiteActivity
        data.forEach(day => {
            cover.pageLoads += day.cover
            problem.pageLoads += day.problem
            solution.pageLoads += day.solution
            newWorld.pageLoads += day.newWorld
            whatToDo.pageLoads += day.whatToDo
        })
        setChartData([cover, problem, solution, newWorld, whatToDo])
    }, [props.allSiteActivity])

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

export default MainPageActivityRadar