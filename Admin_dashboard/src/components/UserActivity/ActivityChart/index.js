import ChartComp from "../../Dashboard/Chart/index.js";
import { useState } from "react"
function ActivityChart({reportIndex}){
   
    return(
        <div className=" h-[22rem] bg-white rounded-2xl p-[2rem]">
            <div className="flex flex-col">
                <span className="poppins-bold">Number Of Users</span>
                <span className="text-xs poppins-light text-gray-400">per day</span>
            </div>
            <div className="h-48 my-4">
            <ChartComp index={0}/>
            </div>
              
                    <div className="flex justify-between">
                    <div className="flex gap-1 items-center">
                        <div className="bg-[#E45757] rounded-[50%] h-2 w-2"></div>
                        <div className="text-xs poppins-light text-[#787D81]">Transaction</div>
                    </div>
                    <div className="flex items-center gap-1">
                        <div className="text-xs poppins-light text-[#787D81] ">Total:</div>
                        <div className="poppins-semibold text-xs">₹ 24,000.70 </div>
                    </div>

                </div>
         
                
           
        </div>
    )
}

export default ActivityChart;