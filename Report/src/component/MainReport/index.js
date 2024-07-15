import ReportTop from "../Report Top";
import ReportFooter from "../ReportFooter";
import ReportTable from "../ReportTable";
import { useEffect, useState } from "react";
import {useSearchParams} from "react-router-dom"
import {useReport} from "#hooks/index.js"
function MainReport(){
    const [searchParams] = useSearchParams()
    const idx = parseInt(searchParams.get("report"))||0
    const [reportIndex,setReportIndex] = useState(idx)
    const [tableData,setTableData] = useState([])
    const {handleReportData} = useReport()
    useEffect(()=>{
        const fetchReport =async()=>{
           const data = await  handleReportData()
           setTableData(data)
        }
        fetchReport()

    },[idx])

    return(
        <div className="flex w-full">
            <div className="mt-5 w-full bg-primary p-[2rem] rounded-2xl  flex flex-col gap-2">
            <ReportTop reportIndex={reportIndex} setReportIndex={setReportIndex}/>
            <div>
            <ReportTable reportIndex={reportIndex} data={tableData} />
            </div>
           
           
        </div>
        </div>
        
    )
}
export default MainReport;