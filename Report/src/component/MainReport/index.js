import ReportTop from "../Report Top";
import ReportFooter from "../ReportFooter";
import ReportTable from "../ReportTable";
import { useState } from "react";
import {useSearchParams} from "react-router-dom"
function MainReport(){
    const [searchParams] = useSearchParams()
    const idx = parseInt(searchParams.get("report"))||0
    
    const [reportIndex,setReportIndex] = useState(idx)
    return(
        <div className="flex w-full">
            <div className="mt-5 w-full bg-primary p-[2rem] rounded-2xl  flex flex-col gap-2">
            <ReportTop reportIndex={reportIndex} setReportIndex={setReportIndex}/>
            <div>
            <ReportTable reportIndex={reportIndex}/>
            </div>
           
           
        </div>
        </div>
        
    )
}
export default MainReport;