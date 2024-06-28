import ReportTop from "../Report Top";
import ReportFooter from "../ReportFooter";
import ReportTable from "../ReportTable";
import { useState } from "react";
function MainReport(){
    const [reportIndex,setReportIndex] = useState(0)
    return(
        <div className="flex w-full">
            <div className="mt-5 bg-primary p-[2rem] rounded-2xl  flex flex-col gap-2">
            <ReportTop reportIndex={reportIndex} setReportIndex={setReportIndex}/>
            <div>
            <ReportTable reportIndex={reportIndex}/>
            </div>
           
           
        </div>
        </div>
        
    )
}
export default MainReport;