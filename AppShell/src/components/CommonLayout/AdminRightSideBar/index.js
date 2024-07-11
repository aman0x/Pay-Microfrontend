import { useState } from "react"
import CalenderStats from "./calendar"
import { useNavigate } from "react-router-dom"

function AdminRightSideBar(){
    const [calenderIndex,setcalenderIndex] = useState(0)
    return(
        <div className="p-[0.8rem] mt-5 flex flex-col gap-4 " >
        <div>
            <div className="poppins-semibold text-base">Show Data</div>
            <div className="poppins-light text-xs">Set Option to show last:</div>
        </div>
        
        <div className="flex w-72  bg-[#F0F1F2] py-[8px] rounded-xl justify-evenly px-2 ">
            <button
            className='px-2 py-2 rounded-xl poppins-light text-sm'
            style={{
            backgroundColor:calenderIndex===0?"#F0F1F2":null,
            width:"45%",
            color:calenderIndex===0?"black":"gray",
            fontWeight:calenderIndex===0?"bold":"normal",
            boxShadow:calenderIndex===0?"rgba(100, 100, 111, 0.2) 0px 7px 29px 0px":null
            }}
            onClick={()=>setcalenderIndex(0)}
            >
            Day
            </button>
            <button 
            className='px-2 py-2 rounded-xl poppins-light text-sm'
            style={{
            backgroundColor:calenderIndex===1?"#F0F1F2":null,
            color:calenderIndex===1?"black":"gray",
            width:"45%",
            fontWeight:calenderIndex===1?"bold":"normal",
            boxShadow:calenderIndex===1?"rgba(100, 100, 111, 0.2) 0px 7px 29px 0px":null
            }}
            onClick={()=>setcalenderIndex(1)}
            >
            Week
            </button>
            <button 
            className='px-2 py-2 rounded-xl poppins-light text-sm'
            style={{
            backgroundColor:calenderIndex===2?"#F0F1F2":null,
            width:"45%",
            color:calenderIndex===2?"black":"gray",
            fontWeight:calenderIndex===2?"bold":"normal",
            boxShadow:calenderIndex===2?"rgba(100, 100, 111, 0.2) 0px 7px 29px 0px":null
            }}
            onClick={()=>setcalenderIndex(2)}
            >
            Month
            </button>
            <button 
            className='px-2 py-2 rounded-xl poppins-light text-sm'
            style={{
            backgroundColor:calenderIndex===3?"#F0F1F2":null,
            width:"45%",
            color:calenderIndex===3?"black":"gray",
            fontWeight:calenderIndex===3?"bold":"normal",
            boxShadow:calenderIndex===3?"rgba(100, 100, 111, 0.2) 0px 7px 29px 0px":null
            }}
            onClick={()=>setcalenderIndex(3)}
            >
            Year
            </button>
        </div>
        <div className="text-[#B6B8BA] text-xs poppins-light">Or Set Date in Calendar:</div>
        <CalenderStats/>
       
        <GeneralReport/>
         </div>
    )
}



function GeneralReport(){
    const navigate = useNavigate()
    return(
        <div>
        <div className="poppins-semibold">General Report</div>
        <div className="poppins-light text-xs">Set Option to Get Report</div>
        <div className="flex flex-col gap-2 p-1 mt-2">
            <button 
            onClick={()=>{navigate('/report?report=0')}}
            className="poppins-medium text-sm flex items-center bg p-[1rem] bg-black-primary rounded-xl min-h-[3.5rem] w-72 gap-4 primary-btn ">
               <div>
                    <svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M4.83687 3.7H11.0964C11.4094 3.7 11.6654 3.46 11.6654 3.16667V2.1C11.6654 1.22 10.8972 0.5 9.9583 0.5H5.97496C5.03604 0.5 4.26782 1.22 4.26782 2.1V3.16667C4.26782 3.46 4.52389 3.7 4.83687 3.7Z" fill="#4E5459"/>
                    <path d="M14.2262 1.83325H13.6571C13.4864 1.83325 13.3726 1.93992 13.3726 2.09992V3.16659C13.3726 4.33992 12.3483 5.29992 11.0964 5.29992H4.83691C3.585 5.29992 2.56071 4.33992 2.56071 3.16659V2.09992C2.56071 1.93992 2.4469 1.83325 2.27619 1.83325H1.70714C0.768214 1.83325 0 2.55325 0 3.43325V14.8999C0 15.7799 0.768214 16.4999 1.70714 16.4999H14.2262C15.1651 16.4999 15.9333 15.7799 15.9333 14.8999V3.43325C15.9333 2.55325 15.1651 1.83325 14.2262 1.83325ZM5.975 12.7666C5.975 13.0599 5.71893 13.2999 5.40595 13.2999H4.83691C4.52393 13.2999 4.26786 13.0599 4.26786 12.7666V10.0999C4.26786 9.80659 4.52393 9.56659 4.83691 9.56659H5.40595C5.71893 9.56659 5.975 9.80659 5.975 10.0999V12.7666ZM8.82024 12.7666C8.82024 13.0599 8.56417 13.2999 8.25119 13.2999H7.68214C7.36917 13.2999 7.1131 13.0599 7.1131 12.7666V7.69992C7.1131 7.40659 7.36917 7.16659 7.68214 7.16659H8.25119C8.56417 7.16659 8.82024 7.40659 8.82024 7.69992V12.7666ZM11.6655 12.7666C11.6655 13.0599 11.4094 13.2999 11.0964 13.2999H10.5274C10.2144 13.2999 9.95833 13.0599 9.95833 12.7666V8.76659C9.95833 8.47325 10.2144 8.23325 10.5274 8.23325H11.0964C11.4094 8.23325 11.6655 8.47325 11.6655 8.76659V12.7666Z" fill="#4E5459"/>
                    </svg>
               </div>
                <div>Get Monthly Report</div>
            </button>
            <button
             onClick={()=>{navigate('/report?report=1')}}
             className="poppins-medium text-sm flex items-center bg p-[1rem] bg-black-primary rounded-xl w-72 min-h-[3.5rem] gap-4 primary-btn">
                <div>
                    <svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M4.83687 3.7H11.0964C11.4094 3.7 11.6654 3.46 11.6654 3.16667V2.1C11.6654 1.22 10.8972 0.5 9.9583 0.5H5.97496C5.03604 0.5 4.26782 1.22 4.26782 2.1V3.16667C4.26782 3.46 4.52389 3.7 4.83687 3.7Z" fill="#4E5459"/>
                    <path d="M14.2262 1.83325H13.6571C13.4864 1.83325 13.3726 1.93992 13.3726 2.09992V3.16659C13.3726 4.33992 12.3483 5.29992 11.0964 5.29992H4.83691C3.585 5.29992 2.56071 4.33992 2.56071 3.16659V2.09992C2.56071 1.93992 2.4469 1.83325 2.27619 1.83325H1.70714C0.768214 1.83325 0 2.55325 0 3.43325V14.8999C0 15.7799 0.768214 16.4999 1.70714 16.4999H14.2262C15.1651 16.4999 15.9333 15.7799 15.9333 14.8999V3.43325C15.9333 2.55325 15.1651 1.83325 14.2262 1.83325ZM5.975 12.7666C5.975 13.0599 5.71893 13.2999 5.40595 13.2999H4.83691C4.52393 13.2999 4.26786 13.0599 4.26786 12.7666V10.0999C4.26786 9.80659 4.52393 9.56659 4.83691 9.56659H5.40595C5.71893 9.56659 5.975 9.80659 5.975 10.0999V12.7666ZM8.82024 12.7666C8.82024 13.0599 8.56417 13.2999 8.25119 13.2999H7.68214C7.36917 13.2999 7.1131 13.0599 7.1131 12.7666V7.69992C7.1131 7.40659 7.36917 7.16659 7.68214 7.16659H8.25119C8.56417 7.16659 8.82024 7.40659 8.82024 7.69992V12.7666ZM11.6655 12.7666C11.6655 13.0599 11.4094 13.2999 11.0964 13.2999H10.5274C10.2144 13.2999 9.95833 13.0599 9.95833 12.7666V8.76659C9.95833 8.47325 10.2144 8.23325 10.5274 8.23325H11.0964C11.4094 8.23325 11.6655 8.47325 11.6655 8.76659V12.7666Z" fill="#4E5459"/>
                    </svg>
               </div>
                <div>Get Yearly Report</div>
            </button>
            <button
             onClick={()=>{navigate('/report?report=2')}}
             className="poppins-medium text-sm flex items-center bg p-[1rem] bg-black-primary rounded-xl w-72 min-h-[3.5rem] gap-4 primary-btn">
                <div>
                    <svg width="18" height="19" viewBox="0 0 18 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" clipRule="evenodd" d="M6 14C6 13.7239 5.7417 13.5 5.42308 13.5H1.57692C1.2583 13.5 1 13.7239 1 14C1 14.2761 1.2583 14.5 1.57692 14.5H5.42308C5.7417 14.5 6 14.2761 6 14Z" fill="#4E5459"/>
                    <path fillRule="evenodd" clipRule="evenodd" d="M12 5C12 4.72386 12.2583 4.5 12.5769 4.5H16.4231C16.7417 4.5 17 4.72386 17 5C17 5.27614 16.7417 5.5 16.4231 5.5H12.5769C12.2583 5.5 12 5.27614 12 5Z" fill="#4E5459"/>
                    <path fillRule="evenodd" clipRule="evenodd" d="M17 14C17 13.7239 16.7442 13.5 16.4286 13.5H9.57143C9.25585 13.5 9 13.7239 9 14C9 14.2761 9.25585 14.5 9.57143 14.5H16.4286C16.7442 14.5 17 14.2761 17 14Z" fill="#4E5459"/>
                    <path fillRule="evenodd" clipRule="evenodd" d="M1 5C1 4.72386 1.25584 4.5 1.57143 4.5H8.42857C8.74415 4.5 9 4.72386 9 5C9 5.27614 8.74415 5.5 8.42857 5.5H1.57143C1.25584 5.5 1 5.27614 1 5Z" fill="#4E5459"/>
                    <path fillRule="evenodd" clipRule="evenodd" d="M11 14C11 12.067 9.43303 10.5 7.5 10.5C5.567 10.5 4 12.067 4 14C4 15.933 5.567 17.5 7.5 17.5C9.43303 17.5 11 15.933 11 14Z" fill="#4E5459"/>
                    <path fillRule="evenodd" clipRule="evenodd" d="M7 5C7 3.067 8.56697 1.5 10.5 1.5C12.433 1.5 14 3.067 14 5C14 6.933 12.433 8.5 10.5 8.5C8.56697 8.5 7 6.933 7 5Z" fill="#4E5459"/>
                    </svg>
                </div>
                <div>Get Custom Report</div>
            </button>
            
        </div>
    </div>      
    )
}

export default AdminRightSideBar