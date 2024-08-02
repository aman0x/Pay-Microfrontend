import ReportDownloadButtons from "../ReportFooter"

function ReportTop({reportIndex,setReportIndex}){
    const currentDisplayDate = reportIndex===0?'2024':'August 2024'
    return(
        <div className="">
            <div className="flex w-full mt-4 bg-[#FFFF] py-[8px] rounded-xl justify-evenly px-2 ">
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
                Yearly
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
                Monthly
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
                Custom
                </button>
            </div>
            <div className="flex justify-between mt-7">
                <div className="flex flex-col gap-2">
                    <div className="poppins-semibold text-[18px]">Set
                       { reportIndex===0 ? ' Year' :' Month'}
                    </div>
                    {
                    reportIndex === 2 ?
                    <div className="poppins-light text-[#B6B8BA]">
                        Or set date in Calendar : 
                    </div>
                    :
                    <div className="flex justify-between w-40 text-[12px] poppins-semibold items-center">
                        <div>
                            <button className="secondary-btn rounded-xl bg-[#DFE0E2] p-1">
                            <svg width="5" height="6" viewBox="0 0 5 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M4 1L2 3L4 5" stroke="#4E5459" strokeWidth="1.5" strokeLinecap="round"/>
                            </svg>
                            </button>
                        </div>
                        <div>{currentDisplayDate}</div>
                        <div>
                            <button className="secondary-btn rounded-xl bg-[#DFE0E2] p-1">
                            <svg width="5" height="6" viewBox="0 0 5 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1 1L3 3L1 5" stroke="#4E5459" strokeWidth="1.5" strokeLinecap="round"/>
                            </svg>
                            </button>
                        </div>
                    </div>
                    }
                </div>
              { reportIndex===2?null:<ReportDownloadButtons/>}
            </div>
            
        </div>
       
    )
}
export default ReportTop