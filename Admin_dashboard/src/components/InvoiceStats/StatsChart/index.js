import ChartComp from "../Chart/index.js";
import { useState } from "react"
function StatsChart({reportIndex}){
    const [transactionIndex,settransactionIndex] = useState(0)
    return(
        <div className="w-full h-[22rem] bg-white rounded-2xl p-[2rem]">
            <div className="flex justify-between">
            <div className="flex flex-col">
                <span className="poppins-bold">Number Of Transaction</span>
                <span className="text-xs poppins-light text-gray-400">per day</span>
            </div>
            <div>
                <div className="flex gap-4 bg-[#F0F1F2] py-[8px] rounded-xl justify-evenly px-2 ">
                    <button
                    className='px-4 py-2 rounded-xl poppins-light text-sm'
                    style={{
                    backgroundColor:transactionIndex===0?"#F0F1F2":null,
                    width:"45%",
                    color:transactionIndex===0?"black":"gray",
                    fontWeight:transactionIndex===0?"bold":"normal",
                    boxShadow:transactionIndex===0?"rgba(100, 100, 111, 0.2) 0px 7px 29px 0px":null
                    }}
                    onClick={()=>settransactionIndex(0)}
                    >
                    All
                    </button>
                    <button 
                    className='px-4 py-2 rounded-xl poppins-light text-sm'
                    style={{
                    backgroundColor:transactionIndex===1?"#F0F1F2":null,
                    color:transactionIndex===1?"black":"gray",
                    width:"45%",
                    fontWeight:transactionIndex===1?"bold":"normal",
                    boxShadow:transactionIndex===1?"rgba(100, 100, 111, 0.2) 0px 7px 29px 0px":null
                    }}
                    onClick={()=>settransactionIndex(1)}
                    >
                    Successful
                    </button>
                    <button 
                    className='px-4 py-2 rounded-xl poppins-light text-sm'
                    style={{
                    backgroundColor:transactionIndex===2?"#F0F1F2":null,
                    width:"45%",
                    color:transactionIndex===2?"black":"gray",
                    fontWeight:transactionIndex===2?"bold":"normal",
                    boxShadow:transactionIndex===2?"rgba(100, 100, 111, 0.2) 0px 7px 29px 0px":null
                    }}
                    onClick={()=>settransactionIndex(2)}
                    >
                    InProgress
                    </button>
                    <button 
                    className='px-4 py-2 rounded-xl poppins-light text-sm'
                    style={{
                    backgroundColor:transactionIndex===3?"#F0F1F2":null,
                    width:"45%",
                    color:transactionIndex===3?"black":"gray",
                    fontWeight:transactionIndex===3?"bold":"normal",
                    boxShadow:transactionIndex===3?"rgba(100, 100, 111, 0.2) 0px 7px 29px 0px":null
                    }}
                    onClick={()=>settransactionIndex(3)}
                    >
                    Failed
                    </button>
                    <button 
                    className='px-4 py-2 rounded-xl poppins-light text-sm'
                    style={{
                    backgroundColor:transactionIndex===4?"#F0F1F2":null,
                    width:"45%",
                    color:transactionIndex===4?"black":"gray",
                    fontWeight:transactionIndex===4?"bold":"normal",
                    boxShadow:transactionIndex===4?"rgba(100, 100, 111, 0.2) 0px 7px 29px 0px":null
                    }}
                    onClick={()=>settransactionIndex(4)}
                    >
                    Refund
                    </button>
                </div>
            </div>
            </div>
            <div className="h-48 my-4">
            <ChartComp index={2}/>
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

export default StatsChart;