import { useState }from "react"

function StatsTop(){
    const [reportIndex,setReportIndex] = useState(0)
    return(
        <div className="flex flex-col gap-2">
            <div className="flex w-full  bg-[#FFFF] py-[8px] rounded-xl justify-evenly px-2 ">
                <button
                className='px-9 py-2 rounded-xl poppins-light text-sm'
                style={{
                backgroundColor:reportIndex===0?"#FFFF":null,
                width:"45%",
                color:reportIndex===0?"black":"gray",
                fontWeight:reportIndex===0?"bold":"normal",
                boxShadow:reportIndex===0?"rgba(100, 100, 111, 0.2) 0px 7px 29px 0px":null
                }}
                onClick={()=>setReportIndex(0)}
                >
                Transaction
                </button>
                <button 
                className='px-2 py-2 rounded-xl poppins-light text-sm'
                style={{
                backgroundColor:reportIndex===1?"#FFFFFF":null,
                color:reportIndex===1?"black":"gray",
                width:"45%",
                fontWeight:reportIndex===1?"bold":"normal",
                boxShadow:reportIndex===1?"rgba(100, 100, 111, 0.2) 0px 7px 29px 0px":null
                }}
                onClick={()=>setReportIndex(1)}
                >
                Invoice Sent
                </button>
                <button 
                className='px-2 py-2 rounded-xl poppins-light text-sm'
                style={{
                backgroundColor:reportIndex===2?"#FFFFFF":null,
                width:"45%",
                color:reportIndex===2?"black":"gray",
                fontWeight:reportIndex===2?"bold":"normal",
                boxShadow:reportIndex===2?"rgba(100, 100, 111, 0.2) 0px 7px 29px 0px":null
                }}
                onClick={()=>setReportIndex(2)}
                >
                Invoice Sent
                </button>
            </div>
            <div className="flex poppins-light text-xs text-[#A3A6A9] gap-8 justify-center">
                <div className="text-xs">12 March 2024 - 25 March 2024 (14 days)
                </div>
                <div className="flex items-center text-xs gap-1">
                    <div>
                        <svg width="34" height="10" viewBox="0 0 34 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M24.4869 0.408642C23.9558 0.212983 23.1225 0 22.0913 0C19.4544 0 17.5909 1.31662 17.5796 3.20086C17.5579 4.58575 18.9006 5.36635 19.9153 5.83308C20.9579 6.31102 21.3065 6.60858 21.3013 7.03251C21.2962 7.68572 20.4681 7.97717 19.706 7.97717C18.6469 7.97717 18.0725 7.83451 17.1867 7.46765L16.8577 7.31377L16.4823 9.49047C17.1268 9.75033 18.2818 9.9786 19.474 10C22.2831 10 24.1146 8.69459 24.1352 6.68195C24.1569 5.57831 23.4381 4.74065 21.9067 4.04973C20.9827 3.6044 20.4042 3.30072 20.4042 2.84419C20.4042 2.44064 20.8981 2.01671 21.9294 2.01671C22.8152 2.00041 23.4391 2.19199 23.9269 2.38255L24.1796 2.49363L24.5498 0.397432L24.4869 0.408642ZM31.3416 0.180373H29.2791C28.6346 0.180373 28.1561 0.350555 27.8714 0.98237L23.9073 9.86141H26.7113L27.2764 8.40722L30.6971 8.41231C30.7827 8.75166 31.024 9.86039 31.024 9.86039H33.5L31.3416 0.180373ZM13.7825 0.100887H16.4524L14.7818 9.786H12.1119L13.7825 0.0957912V0.100887ZM6.99378 5.43463L7.26706 6.78284L9.88231 0.180373H12.7131L8.50147 9.8451H5.68306L3.37306 1.66106C3.32459 1.51839 3.26581 1.42158 3.12041 1.33802C2.34181 0.934474 1.46628 0.605319 0.5 0.377051L0.531969 0.174259H4.8395C5.42009 0.195659 5.89241 0.377051 6.05328 0.992561L6.99378 5.43972V5.43463ZM28.0375 6.42719L29.1069 3.71548C29.0904 3.74096 29.3265 3.15806 29.4606 2.7912L29.6431 3.62376L30.2619 6.42108H28.0375V6.42719Z" fill="#B6B8BA"/>
                        </svg>
                    </div>
                    <div>
                        **** **** **** 1001
                    </div>
                </div>
            </div>
        </div>  
    )
}
export default StatsTop