import ChartComp from "../../Chart";

function StatsChart(){
    return(
        <div className="w-full h-96 bg-white rounded-2xl p-[1.5rem]">
            <div className="flex flex-col mb-1">
                <span className="poppins-bold">Income/Expenses</span>
                <span className="text-xs poppins-light text-gray-400">per day</span>
            </div>
            <ChartComp/>
        </div>
    )
}

export default StatsChart;