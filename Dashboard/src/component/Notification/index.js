import { useState } from "react"
const menu = ["General","Payment","KYC","Account","Transaction","Cards"]
function Notification(){
    const [notificationIndex0,setnotificationIndex0] = useState(true)
    const [notificationIndex1,setnotificationIndex1] = useState(false)
    const [notificationIndex2,setnotificationIndex2] = useState(false)
    const [notificationIndex3,setnotificationIndex3] = useState(false)
    const [notificationIndex4,setnotificationIndex4] = useState(false)
    const [notificationIndex5,setnotificationIndex5] = useState(false)
    const [tophead,setTopHead] = useState(0)
 
    return(
        <div className="mt-5 bg-primary p-[1rem] rounded-2xl flex flex-col gap-4 mr-2">
            <div className="flex mt-4">
                <div className="flex flex-col gap-1 border-r-2 border-r-[#DFE0E2] pt-10  pr-6">
                    {
                        notificationIndex0 ?
                        <div className="primary-linear-gr-bg-up p-[1.5px] rounded-xl shadow-red-200 shadow-2xl">
                            <button className="flex justify-between items-center bg-black-primary rounded-xl py-[6px] px-3 poppins-medium text-sm w-44" onClick={()=>setnotificationIndex0(false)}>
                               General
                            </button>
                        </div>
                        :
                        <button className="text-[#B6B8BA] text-sm py-[6px] px-3 text-start" onClick={()=>{
                            setnotificationIndex0(true)
                            setTopHead(0)
                            }}>
                            General
                        </button>

                    }
                    {
                        notificationIndex1 ?
                        <div className="primary-linear-gr-bg-up p-[1.5px] rounded-xl shadow-2xl">
                            <button className="flex justify-between items-center bg-black-primary rounded-xl py-[6px] px-3 poppins-medium text-sm w-44" onClick={()=>{
                                setnotificationIndex1(false)
                                }}>
                                Payment
                            </button>
                        </div>
                        :
                        <button className="text-[#B6B8BA] text-sm py-[6px] px-3 text-start" onClick={()=>{setnotificationIndex1(true)
                            setTopHead(1)
                        }}>
                            Payment
                        </button>

                    }
                    {
                        notificationIndex2 ?
                        <div className="primary-linear-gr-bg-up p-[1.5px] rounded-xl shadow-2xl">
                            <button className="flex justify-between items-center bg-black-primary rounded-xl py-[6px] w-44 px-3 poppins-medium text-sm" onClick={()=>{setnotificationIndex2(false)
                            }}>
                                KYC
                            </button>
                        </div>
                        :
                        <button className="text-[#B6B8BA] text-sm py-[6px] px-3 text-start" onClick={()=>{setnotificationIndex2(true)
                            setTopHead(2)
                        }}>
                            KYC
                        </button>

                    }
                    {
                        notificationIndex3 ?
                        <div className="primary-linear-gr-bg-up p-[1.5px] rounded-xl shadow-2xl">
                            <button className="flex justify-between items-center bg-black-primary rounded-xl py-[6px] w-44 px-3 poppins-medium text-sm" onClick={()=>setnotificationIndex3(false)}>
                                Account
                            </button>
                        </div>
                        :
                        <button className="text-[#B6B8BA] text-sm py-[6px] px-3 text-start" onClick={()=>{setnotificationIndex3(true)
                            setTopHead(3)
                        }}>
                           Account
                        </button>

                    }
                    {
                        notificationIndex4 ?
                        <div className="primary-linear-gr-bg-up p-[1.5px] rounded-xl shadow-2xl">
                            <button className="flex justify-between items-center bg-black-primary rounded-xl py-[6px] w-44 px-3 poppins-medium text-sm" onClick={()=>setnotificationIndex4(false)}>
                                Transaction
                            </button>
                        </div>
                        :
                        <button className="text-[#B6B8BA] text-sm py-[6px] px-3 text-start" onClick={()=>{setnotificationIndex4(true)
                            setTopHead(4)
                        }}>
                            Transaction
                        </button>

                    }
                    {
                        notificationIndex5 ?
                        <div className="primary-linear-gr-bg-up p-[1.5px] rounded-xl shadow-2xl">
                            <button className="flex justify-between items-center bg-black-primary rounded-xl py-[6px] w-44 px-3 poppins-medium text-sm" onClick={()=>setnotificationIndex5(false)}>
                                Cards
                            </button>
                        </div>
                        :
                        <button className="text-[#B6B8BA] text-sm py-[6px] px-3 text-start" onClick={()=>{setnotificationIndex5(true)
                            setTopHead(5)
                        }}>
                            Cards
                        </button>

                    }
                </div>  
                <div className=" px-[2rem]">
                    <div className="poppins-semibold text-lg mb-4">{menu[tophead]}<span className="poppins-light text-gray-400 text-xs mx-1">(121)</span></div>  
                    <div className="flex flex-col gap-2 divide-y divide-slate-200 ">
                    
                    {[...Array(6)].map((val,i)=>{
                        return(
                            <div className={`flex flex-col  gap-2  py-2`}>
                            <div className="flex justify-between poppins-semibold text-base">
                                <div>Message Title</div>
                                <div className="text-sm">12 April 2024 11:00</div>
                            </div>
                            <div className="flex poppins-regular text-[#787D81] gap-2 text-[14px]">
                                <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur tempus urna at turpis condimentum lobortis.  Curabitur tempus urna at turpis condimentum lobortis. Curabitur tempus urna at turpis condimentum lobortis.</div>
                            </div>
                            
                        </div>
                        )
                    })} 
                        
                    </div>
                </div> 
            </div>
        </div>
    )
}

export default Notification;