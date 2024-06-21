import ReportTop from "../Report Top";
import ReportFooter from "../ReportFooter";
import ReportTable from "../ReportTable";
import { useState } from "react";
import { SideNavBar } from "../SideNavBar";
function MainReport(){
    const [reportIndex,setReportIndex] = useState(0)
    return(
        <div className="flex">
            <SideNavBar/>
            <div className="mt-5 w-[90%]  bg-primary p-[1.5rem] rounded-2xl  flex flex-col gap-2">
            <ReportTop reportIndex={reportIndex} setReportIndex={setReportIndex}/>
            <ReportTable reportIndex={reportIndex}/>
           
        </div>
        </div>
        
    )
}
export default MainReport;