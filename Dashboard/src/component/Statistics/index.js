import StatsChart from "./StatsChart";
import StatsTable from "./StatsTable";
import StatsTop from "./StatsTop";
import StatsCards from "./StatsCards"
import StatsTotalBar from "./StatsTotalBar";
import { useState }from "react"
function Statistic(){
    const [reportIndex,setReportIndex] = useState(0)
    return(
        <div className="w-full mt-5 bg-primary py-[3rem] px-[2rem] rounded-2xl flex flex-col gap-4">
            <StatsTop reportIndex={reportIndex} setReportIndex={setReportIndex}/>
            <StatsChart reportIndex={reportIndex}/>
            <StatsCards reportIndex={reportIndex}/>
            <StatsTotalBar/>
            <StatsTable/>
        </div>
    )
}

export default Statistic;