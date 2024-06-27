import {FaSquare} from "react-icons/fa"
import CalenderComponent from "../../Stats/Calender/calender"
import { QuickAction } from "../../RightSideBar"
import { useState } from "react"
import CalenderStats from "./calendar"
import { useNavigate } from "react-router-dom"
const cards = ['**** **** **** 1001','**** **** **** 1001','**** **** **** 1001','**** **** **** 1001']
function RightSideStatsBar(){
    const [isCardMenuOpen,setCardMenuOpen] = useState(false)
    const [calenderIndex,setcalenderIndex] = useState(0)
   

    return(
        <div className="p-[0.8rem] mt-5 flex flex-col gap-4 " >
            <div>
                <div className="poppins-semibold text-base">Show Data</div>
                <div className="poppins-light text-xs">Set Option to show last:</div>
            </div>
            <div className="flex flex-col  gap-2 poppins-light text-sm text-gray-600 ">
                <div className="text-xs mt-2">Select Card : </div>
                <div className="flex justify-between">
                    <div className="flex gap-1 items-center">
                        <div>
                        <svg width="33" height="10" viewBox="0 0 33 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M23.9869 0.408642C23.4558 0.212983 22.6225 0 21.5913 0C18.9544 0 17.0909 1.31662 17.0796 3.20086C17.0579 4.58575 18.4006 5.36635 19.4153 5.83308C20.4579 6.31102 20.8065 6.60858 20.8013 7.03251C20.7962 7.68572 19.9681 7.97717 19.206 7.97717C18.1469 7.97717 17.5725 7.83451 16.6867 7.46765L16.3577 7.31377L15.9823 9.49047C16.6268 9.75033 17.7818 9.9786 18.974 10C21.7831 10 23.6146 8.69459 23.6352 6.68195C23.6569 5.57831 22.9381 4.74065 21.4067 4.04973C20.4827 3.6044 19.9042 3.30072 19.9042 2.84419C19.9042 2.44064 20.3981 2.01671 21.4294 2.01671C22.3152 2.00041 22.9391 2.19199 23.4269 2.38255L23.6796 2.49363L24.0498 0.397432L23.9869 0.408642ZM30.8416 0.180373H28.7791C28.1346 0.180373 27.6561 0.350555 27.3714 0.98237L23.4073 9.86141H26.2113L26.7764 8.40722L30.1971 8.41231C30.2827 8.75166 30.524 9.86039 30.524 9.86039H33L30.8416 0.180373ZM13.2825 0.100887H15.9524L14.2818 9.786H11.6119L13.2825 0.0957912V0.100887ZM6.49378 5.43463L6.76706 6.78284L9.38231 0.180373H12.2131L8.00147 9.8451H5.18306L2.87306 1.66106C2.82459 1.51839 2.76581 1.42158 2.62041 1.33802C1.84181 0.934474 0.966281 0.605319 0 0.377051L0.0319688 0.174259H4.3395C4.92009 0.195659 5.39241 0.377051 5.55328 0.992561L6.49378 5.43972V5.43463ZM27.5375 6.42719L28.6069 3.71548C28.5904 3.74096 28.8265 3.15806 28.9606 2.7912L29.1431 3.62376L29.7619 6.42108H27.5375V6.42719Z" fill="#B6B8BA"/>
                        </svg>
                        </div>
                        <div>**** **** **** 1001</div>
                    </div>
                    <div onClick={()=>{setCardMenuOpen(!isCardMenuOpen)}}>
                        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect x="18" width="18" height="18" rx="9" transform="rotate(90 18 0)" fill="#DFE0E2"/>
                        <path d="M11 8L9 10L7 8" stroke="#4E5459" stroke-width="1.5" stroke-linecap="round"/>
                        </svg>
                    </div>
                    
                </div>
                <hr className="w-[100%]"/>
                <div className="">
                {isCardMenuOpen && <CardsMenu/>}
                </div>
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
            <CalenderStats/>
            <QuickAction/>
            <GeneralReport/>
        </div>
    )
}

function CardsMenu(){
    const [cardIndex,setCardIndex] = useState(0)
    return(
        <div className="w-[100%] bg-white rounded-2xl  py-[1rem] px-[1.2rem] gap-4">
            <div className="text-sm poppins-semibold my-2 flex gap-1 items-start">
                <span>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clip-path="url(#clip0_380_21893)">
                <path d="M12 24C14.3734 24 16.6935 23.2962 18.6668 21.9776C20.6402 20.6591 22.1783 18.7849 23.0866 16.5922C23.9948 14.3995 24.2324 11.9867 23.7694 9.65892C23.3064 7.33115 22.1635 5.19295 20.4853 3.51472C18.8071 1.83649 16.6689 0.693605 14.3411 0.230582C12.0133 -0.232441 9.60051 0.00519943 7.4078 0.913451C5.21509 1.8217 3.34094 3.35977 2.02236 5.33316C0.703788 7.30655 0 9.62663 0 12C0.00344108 15.1815 1.26883 18.2318 3.51852 20.4815C5.76821 22.7312 8.81846 23.9966 12 24ZM12 5.00001C12.2967 5.00001 12.5867 5.08798 12.8334 5.2528C13.08 5.41762 13.2723 5.65189 13.3858 5.92598C13.4994 6.20007 13.5291 6.50167 13.4712 6.79264C13.4133 7.08361 13.2704 7.35089 13.0607 7.56067C12.8509 7.77044 12.5836 7.91331 12.2926 7.97118C12.0017 8.02906 11.7001 7.99936 11.426 7.88582C11.1519 7.77229 10.9176 7.58003 10.7528 7.33336C10.588 7.08669 10.5 6.79668 10.5 6.50001C10.5 6.10218 10.658 5.72065 10.9393 5.43934C11.2206 5.15804 11.6022 5.00001 12 5.00001ZM11 10H12C12.5304 10 13.0391 10.2107 13.4142 10.5858C13.7893 10.9609 14 11.4696 14 12V18C14 18.2652 13.8946 18.5196 13.7071 18.7071C13.5196 18.8946 13.2652 19 13 19C12.7348 19 12.4804 18.8946 12.2929 18.7071C12.1054 18.5196 12 18.2652 12 18V12H11C10.7348 12 10.4804 11.8946 10.2929 11.7071C10.1054 11.5196 10 11.2652 10 11C10 10.7348 10.1054 10.4804 10.2929 10.2929C10.4804 10.1054 10.7348 10 11 10Z" fill="#374957"/>
                </g>
                <defs>
                <clipPath id="clip0_380_21893">
                <rect width="24" height="24" fill="white"/>
                </clipPath>
                </defs>
                </svg>
                </span>
                <div>Select the card from the list (only one)</div>
            </div>
            <div className="flex flex-col gap-2 mt-4">
            {cards.map((card,i)=>{
                return(
                        <div className="flex gap-4 justify-between items-center " key={i}>
                            <div className={`${cardIndex===i?"poppins-bold":""} flex gap-1 items-center`} >
                            <div className="">
                                <svg width="33" height="10" viewBox="0 0 33 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M23.9869 0.408642C23.4558 0.212983 22.6225 0 21.5913 0C18.9544 0 17.0909 1.31662 17.0796 3.20086C17.0579 4.58575 18.4006 5.36635 19.4153 5.83308C20.4579 6.31102 20.8065 6.60858 20.8013 7.03251C20.7962 7.68572 19.9681 7.97717 19.206 7.97717C18.1469 7.97717 17.5725 7.83451 16.6867 7.46765L16.3577 7.31377L15.9823 9.49047C16.6268 9.75033 17.7818 9.9786 18.974 10C21.7831 10 23.6146 8.69459 23.6352 6.68195C23.6569 5.57831 22.9381 4.74065 21.4067 4.04973C20.4827 3.6044 19.9042 3.30072 19.9042 2.84419C19.9042 2.44064 20.3981 2.01671 21.4294 2.01671C22.3152 2.00041 22.9391 2.19199 23.4269 2.38255L23.6796 2.49363L24.0498 0.397432L23.9869 0.408642ZM30.8416 0.180373H28.7791C28.1346 0.180373 27.6561 0.350555 27.3714 0.98237L23.4073 9.86141H26.2113L26.7764 8.40722L30.1971 8.41231C30.2827 8.75166 30.524 9.86039 30.524 9.86039H33L30.8416 0.180373ZM13.2825 0.100887H15.9524L14.2818 9.786H11.6119L13.2825 0.0957912V0.100887ZM6.49378 5.43463L6.76706 6.78284L9.38231 0.180373H12.2131L8.00147 9.8451H5.18306L2.87306 1.66106C2.82459 1.51839 2.76581 1.42158 2.62041 1.33802C1.84181 0.934474 0.966281 0.605319 0 0.377051L0.0319688 0.174259H4.3395C4.92009 0.195659 5.39241 0.377051 5.55328 0.992561L6.49378 5.43972V5.43463ZM27.5375 6.42719L28.6069 3.71548C28.5904 3.74096 28.8265 3.15806 28.9606 2.7912L29.1431 3.62376L29.7619 6.42108H27.5375V6.42719Z" fill="#B6B8BA"/>
                                </svg>
                            </div>
                                {card}
                            </div>
                            <div className={`max-w-[15px]  max-h-[15px] rounded-sm   ${cardIndex===i?"primary-linear-gr-bg":"bg-gray-300"}`}>
                            <FaSquare  color={`${cardIndex===i?"black":"white"}`} className="rounded-sm p-[1px]"  onClick={()=>setCardIndex(i)}/>
                            </div> 
                        </div>
                )
            })}
        </div>
       
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
            onClick={()=>{navigate('/report')}}
            className="poppins-medium text-sm flex items-center bg p-[1rem] bg-black-primary rounded-xl min-h-[3.5rem] w-72 gap-4 primary-btn ">
               <div>
                    <svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M4.83687 3.7H11.0964C11.4094 3.7 11.6654 3.46 11.6654 3.16667V2.1C11.6654 1.22 10.8972 0.5 9.9583 0.5H5.97496C5.03604 0.5 4.26782 1.22 4.26782 2.1V3.16667C4.26782 3.46 4.52389 3.7 4.83687 3.7Z" fill="#4E5459"/>
                    <path d="M14.2262 1.83325H13.6571C13.4864 1.83325 13.3726 1.93992 13.3726 2.09992V3.16659C13.3726 4.33992 12.3483 5.29992 11.0964 5.29992H4.83691C3.585 5.29992 2.56071 4.33992 2.56071 3.16659V2.09992C2.56071 1.93992 2.4469 1.83325 2.27619 1.83325H1.70714C0.768214 1.83325 0 2.55325 0 3.43325V14.8999C0 15.7799 0.768214 16.4999 1.70714 16.4999H14.2262C15.1651 16.4999 15.9333 15.7799 15.9333 14.8999V3.43325C15.9333 2.55325 15.1651 1.83325 14.2262 1.83325ZM5.975 12.7666C5.975 13.0599 5.71893 13.2999 5.40595 13.2999H4.83691C4.52393 13.2999 4.26786 13.0599 4.26786 12.7666V10.0999C4.26786 9.80659 4.52393 9.56659 4.83691 9.56659H5.40595C5.71893 9.56659 5.975 9.80659 5.975 10.0999V12.7666ZM8.82024 12.7666C8.82024 13.0599 8.56417 13.2999 8.25119 13.2999H7.68214C7.36917 13.2999 7.1131 13.0599 7.1131 12.7666V7.69992C7.1131 7.40659 7.36917 7.16659 7.68214 7.16659H8.25119C8.56417 7.16659 8.82024 7.40659 8.82024 7.69992V12.7666ZM11.6655 12.7666C11.6655 13.0599 11.4094 13.2999 11.0964 13.2999H10.5274C10.2144 13.2999 9.95833 13.0599 9.95833 12.7666V8.76659C9.95833 8.47325 10.2144 8.23325 10.5274 8.23325H11.0964C11.4094 8.23325 11.6655 8.47325 11.6655 8.76659V12.7666Z" fill="#4E5459"/>
                    </svg>
               </div>
                <div>Get Monthly Report</div>
            </button>
            <button className="poppins-medium text-sm flex items-center bg p-[1rem] bg-black-primary rounded-xl w-72 min-h-[3.5rem] gap-4 primary-btn">
                <div>
                    <svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M4.83687 3.7H11.0964C11.4094 3.7 11.6654 3.46 11.6654 3.16667V2.1C11.6654 1.22 10.8972 0.5 9.9583 0.5H5.97496C5.03604 0.5 4.26782 1.22 4.26782 2.1V3.16667C4.26782 3.46 4.52389 3.7 4.83687 3.7Z" fill="#4E5459"/>
                    <path d="M14.2262 1.83325H13.6571C13.4864 1.83325 13.3726 1.93992 13.3726 2.09992V3.16659C13.3726 4.33992 12.3483 5.29992 11.0964 5.29992H4.83691C3.585 5.29992 2.56071 4.33992 2.56071 3.16659V2.09992C2.56071 1.93992 2.4469 1.83325 2.27619 1.83325H1.70714C0.768214 1.83325 0 2.55325 0 3.43325V14.8999C0 15.7799 0.768214 16.4999 1.70714 16.4999H14.2262C15.1651 16.4999 15.9333 15.7799 15.9333 14.8999V3.43325C15.9333 2.55325 15.1651 1.83325 14.2262 1.83325ZM5.975 12.7666C5.975 13.0599 5.71893 13.2999 5.40595 13.2999H4.83691C4.52393 13.2999 4.26786 13.0599 4.26786 12.7666V10.0999C4.26786 9.80659 4.52393 9.56659 4.83691 9.56659H5.40595C5.71893 9.56659 5.975 9.80659 5.975 10.0999V12.7666ZM8.82024 12.7666C8.82024 13.0599 8.56417 13.2999 8.25119 13.2999H7.68214C7.36917 13.2999 7.1131 13.0599 7.1131 12.7666V7.69992C7.1131 7.40659 7.36917 7.16659 7.68214 7.16659H8.25119C8.56417 7.16659 8.82024 7.40659 8.82024 7.69992V12.7666ZM11.6655 12.7666C11.6655 13.0599 11.4094 13.2999 11.0964 13.2999H10.5274C10.2144 13.2999 9.95833 13.0599 9.95833 12.7666V8.76659C9.95833 8.47325 10.2144 8.23325 10.5274 8.23325H11.0964C11.4094 8.23325 11.6655 8.47325 11.6655 8.76659V12.7666Z" fill="#4E5459"/>
                    </svg>
               </div>
                <div>Get Yearly Report</div>
            </button>
            <button className="poppins-medium text-sm flex items-center bg p-[1rem] bg-black-primary rounded-xl w-72 min-h-[3.5rem] gap-4 primary-btn">
                <div>
                    <svg width="18" height="19" viewBox="0 0 18 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M6 14C6 13.7239 5.7417 13.5 5.42308 13.5H1.57692C1.2583 13.5 1 13.7239 1 14C1 14.2761 1.2583 14.5 1.57692 14.5H5.42308C5.7417 14.5 6 14.2761 6 14Z" fill="#4E5459"/>
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M12 5C12 4.72386 12.2583 4.5 12.5769 4.5H16.4231C16.7417 4.5 17 4.72386 17 5C17 5.27614 16.7417 5.5 16.4231 5.5H12.5769C12.2583 5.5 12 5.27614 12 5Z" fill="#4E5459"/>
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M17 14C17 13.7239 16.7442 13.5 16.4286 13.5H9.57143C9.25585 13.5 9 13.7239 9 14C9 14.2761 9.25585 14.5 9.57143 14.5H16.4286C16.7442 14.5 17 14.2761 17 14Z" fill="#4E5459"/>
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M1 5C1 4.72386 1.25584 4.5 1.57143 4.5H8.42857C8.74415 4.5 9 4.72386 9 5C9 5.27614 8.74415 5.5 8.42857 5.5H1.57143C1.25584 5.5 1 5.27614 1 5Z" fill="#4E5459"/>
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M11 14C11 12.067 9.43303 10.5 7.5 10.5C5.567 10.5 4 12.067 4 14C4 15.933 5.567 17.5 7.5 17.5C9.43303 17.5 11 15.933 11 14Z" fill="#4E5459"/>
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M7 5C7 3.067 8.56697 1.5 10.5 1.5C12.433 1.5 14 3.067 14 5C14 6.933 12.433 8.5 10.5 8.5C8.56697 8.5 7 6.933 7 5Z" fill="#4E5459"/>
                    </svg>
                </div>
                <div>Get Custom Report</div>
            </button>
            
        </div>
    </div>      
    )
}

export default RightSideStatsBar;