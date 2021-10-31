import React, {useEffect, useState} from "react";
import CustomRadarChart from "../../CustomRadarChart/CustomRadarChart";

const DataPageActivityRadar = (props) => {

    const [chartData, setChartData] = useState([
        {page: 'About', pageLoads: 0},
        {page: 'Problem Data', pageLoads: 0},
        {page: 'Solution Data', pageLoads: 0},
        {page: 'New World Data', pageLoads: 0},
        {page: 'References', pageLoads: 0},
        {page: 'PDF Downloads', pageLoads: 0},
    ])

    useEffect(() => {
        const aboutData = {
            page: 'About',
            pageLoads: 0
        }
        const problemData = {
            page: 'Problem Data',
            pageLoads: 0
        }
        const solutionData = {
            page: 'Solution Data',
            pageLoads: 0
        }
        const newWorldData = {
            page: 'New World Data',
            pageLoads: 0
        }
        const refs = {
            page: 'References',
            pageLoads: 0
        }
        const pdfDownload = {
            page: 'PDF Download',
            pageLoads: 0
        }
        // const limit = new Date('22/10/2021')
        // const otherDate = new Date('23/10/2021')
        // console.log(new Date('22/10/2021').valueOf() < new Date('23/10/2021').valueOf())
        // props.allSiteActivity.map(day => console.log(day.date))
        // console.log(props.allSiteActivity)
        //const data = props.allSiteActivity
        props.allSiteActivity.forEach(day => {
            aboutData.pageLoads += day.about
            problemData.pageLoads += day.problemData
            solutionData.pageLoads += day.solutionData
            newWorldData.pageLoads += day.newWorldData
            refs.pageLoads += day.refs
            pdfDownload.pageLoads += day.pdfDownload
        })
        setChartData([aboutData, problemData, solutionData, newWorldData, refs, pdfDownload])
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

export default DataPageActivityRadar