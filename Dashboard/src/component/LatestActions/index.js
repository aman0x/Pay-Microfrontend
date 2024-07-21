import ActionCards from "./ActionCards";
import { FaCreditCard } from "react-icons/fa6";
import { FaArrowRight } from "react-icons/fa";
import FilterComponent from "./Filter";
import {useState,useEffect} from "react"
function LatestActions({handleLatestActionData}){
    const [latestActions,setLatestActions] = useState([])
    useEffect(()=>{
        
        const fetchLatestAction = async() =>{
            const data = await handleLatestActionData()
            setLatestActions(data)
        }
        fetchLatestAction()
  
    },[])
    return(
        <div className="mb-[2rem]">
            <div className="flex justify-between     mb-4 items-center gap-6">
                <div className="poppins-semibold text-base text-[#232B31]">Latest Actions</div>
                <hr className="w-4/5 poppins-bold text-gray-950"/>
            </div>
            <div className="sm:grid grid-cols-4 gap-4">
                <div className="sm:pr-[1rem] flex flex-col">
                    <div className="poppins-semibold text-gray-600 mb-2 text-sm">Show Actions :</div>
                    <div className="primary-linear-gr-bg-up p-[1.5px] rounded-xl shadow-2xl">
                    <div className="flex justify-between items-center bg-black-primary rounded-xl py-2 px-3">
                        <div className="flex gap-2 items-center ">
                        <FaCreditCard color="gray"/>
                        <div className="poppins-medium text-[12px]">Payments</div>
                        </div>
                        
                        <div><FaArrowRight color="white" size="10px" /></div>
                    </div>
                    </div>
                   <FilterComponent/>
                   <div className="my-4">
                    <a className="underline text-[#787D81] poppins-regular text-[12px]">Go to All Payments</a>
                   </div>
                   <div className="flex flex-col gap-2 text-[#B6B8BA]">
                        <div className="flex items-center bg-white rounded-xl py-[8px] px-[12px] gap-2  text-xs">
                            <span>
                                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g clipPath="url(#clip0_855_4415)">
                                <path fillRule="evenodd" clipRule="evenodd" d="M2.04717 0.97747C2.78778 0.352584 3.79191 0.00105856 4.83929 0H11.1603C12.2077 0.00105856 13.2118 0.352584 13.9524 0.97747C14.693 1.60236 15.1096 2.44958 15.1109 3.3333V15.3332C15.1105 15.4543 15.0711 15.573 14.9968 15.6766C14.9225 15.7802 14.8162 15.8648 14.6892 15.9213C14.5623 15.9777 14.4195 16.004 14.2762 15.9971C14.1329 15.9903 13.9945 15.9507 13.8759 15.8825L12.2167 14.9245L10.5574 15.8832C10.4259 15.9593 10.2701 16 10.1106 16C9.9511 16 9.79533 15.9593 9.66378 15.8832L8.00452 14.9238L6.34526 15.8832C6.2138 15.9591 6.05818 15.9998 5.89884 15.9998C5.73951 15.9998 5.58389 15.9591 5.45242 15.8832L3.78842 14.9238L2.12442 15.8832C2.00575 15.9516 1.86722 15.9913 1.72374 15.9982C1.58026 16.0051 1.43727 15.9789 1.31015 15.9223C1.18304 15.8657 1.07662 15.781 1.00236 15.6772C0.928088 15.5734 0.888783 15.4544 0.888672 15.3332V3.3333C0.889926 2.44958 1.30655 1.60236 2.04717 0.97747ZM7.99978 11.5556C10.4544 11.5556 12.4442 9.56571 12.4442 7.11111C12.4442 4.65651 10.4544 2.66667 7.99978 2.66667C5.54518 2.66667 3.55534 4.65651 3.55534 7.11111C3.55534 9.56571 5.54518 11.5556 7.99978 11.5556Z" fill="#B6B8BA"/>
                                <path d="M7.99984 9.77783L7.99984 4.4445M7.99984 4.4445L10.6665 7.11117M7.99984 4.4445L5.33317 7.11117" stroke="#B6B8BA" strokeWidth="0.833333" strokeLinecap="round"/>
                                </g>
                                <defs>
                                <clipPath id="clip0_855_4415">
                                <rect width="16" height="16" fill="white"/>
                                </clipPath>
                                </defs>
                                </svg>
                            </span>
                            <p>Invoices Send</p>
                        </div>
                        <div className="flex items-center bg-white rounded-xl py-[8px] px-[12px] gap-2  text-xs font-normal">
                            <span>
                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" clipRule="evenodd" d="M2.04717 0.97747C2.78778 0.352584 3.79191 0.00105856 4.83929 0H11.1603C12.2077 0.00105856 13.2118 0.352584 13.9524 0.97747C14.693 1.60236 15.1096 2.44958 15.1109 3.3333V15.3332C15.1105 15.4543 15.0711 15.573 14.9968 15.6766C14.9225 15.7802 14.8162 15.8648 14.6892 15.9213C14.5623 15.9777 14.4195 16.004 14.2762 15.9971C14.1329 15.9903 13.9945 15.9507 13.8759 15.8825L12.2167 14.9245L10.5574 15.8832C10.4259 15.9593 10.2701 16 10.1106 16C9.9511 16 9.79533 15.9593 9.66378 15.8832L8.00452 14.9238L6.34526 15.8832C6.2138 15.9591 6.05818 15.9998 5.89884 15.9998C5.73951 15.9998 5.58389 15.9591 5.45242 15.8832L3.78842 14.9238L2.12442 15.8832C2.00575 15.9516 1.86722 15.9913 1.72374 15.9982C1.58026 16.0051 1.43727 15.9789 1.31015 15.9223C1.18304 15.8657 1.07662 15.781 1.00236 15.6772C0.928088 15.5734 0.888783 15.4544 0.888672 15.3332V3.3333C0.889926 2.44958 1.30655 1.60236 2.04717 0.97747ZM7.99978 11.5556C10.4544 11.5556 12.4442 9.56571 12.4442 7.11111C12.4442 4.65651 10.4544 2.66667 7.99978 2.66667C5.54518 2.66667 3.55534 4.65651 3.55534 7.11111C3.55534 9.56571 5.54518 11.5556 7.99978 11.5556Z" fill="#B6B8BA"/>
                            <path d="M7.99984 4.44434L7.99984 9.77767M7.99984 9.77767L10.6665 7.111M7.99984 9.77767L5.33317 7.111" stroke="#B6B8BA" strokeWidth="0.833333" strokeLinecap="round"/>
                            </svg>
                            </span>
                            <p>Invoices Received</p>
                        </div>
                   </div>
                </div>
                <div className="mt-2 sm:mt-0 col-span-3 ">
                <ActionCards data={latestActions}/>
                </div>
               
            </div>
        </div>
    )
}

export default LatestActions;