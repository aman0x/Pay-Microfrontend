import StatsChart from "./StatsChart";
import StatsTop from "./StatsTop";

function Statistic(){

    return(
        <div className="max-w-[75%] w-[82%] mt-5 bg-primary p-[2rem] rounded-2xl flex flex-col gap-2">
            <StatsTop/>
            <StatsChart/>
        </div>
    )
}

export default Statistic;