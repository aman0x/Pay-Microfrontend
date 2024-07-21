import { useState,useEffect } from "react"
const menu = ["General","Payment","KYC","Account","Transaction","Cards"]
import { useNotfication } from "#hooks/index"
import moment from "moment"
function Notification(){
    const [notificationIndex0,setnotificationIndex0] = useState(true)
    const [notificationIndex1,setnotificationIndex1] = useState(false)
    const [notificationIndex2,setnotificationIndex2] = useState(false)
    const [notificationIndex3,setnotificationIndex3] = useState(false)
    const [notificationIndex4,setnotificationIndex4] = useState(false)
    const [notificationIndex5,setnotificationIndex5] = useState(false)
    const [tophead,setTopHead] = useState(0)
    const [notificationData,setNotificationData] = useState([{
        "date": "2024-06-21T10:21:17.116232Z",
        "message_title": "title2",
        "type": "General",
        "message": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur tempus urna at turpis condimentum lobortis.  Curabitur tempus urna at turpis condimentum lobortis. Curabitur tempus urna at turpis condimentum lobortis."
    }])
    const {handleGetNotification} = useNotfication()

    useEffect(()=>{

      const fetchNotificationData = async ()=>{

      const data =  await handleGetNotification()
      console.log("nI",data)
      setNotificationData(data)
      }

      fetchNotificationData()
      
    },[])
 
    return(
        <div className="mt-5 bg-primary p-[1rem] rounded-3xl flex flex-col gap-4 mr-2 min-h-[80vh] mb-4 w-full">
            <div className="flex mt-4 h-full">
                <div className="flex flex-col gap-1 border-r-2 border-r-[#DFE0E2] pt-10  pr-6 h-full">
                    {
                        notificationIndex0 ?
                        <div className="primary-linear-gr-bg-up p-[1.5px] rounded-xl shadow-red-200 shadow-2xl">
                            <button className="flex justify-between items-center bg-black-primary rounded-xl py-[6px] px-3 poppins-medium text-xs w-44" onClick={()=>setnotificationIndex0(false)}>
                               General
                            </button>
                        </div>
                        :
                        <button className="text-[#B6B8BA] text-xs py-[6px] px-3 text-start" onClick={()=>{
                            setnotificationIndex0(true)
                            setTopHead(0)
                            }}>
                            General
                        </button>

                    }
                    {
                        notificationIndex1 ?
                        <div className="primary-linear-gr-bg-up p-[1.5px] rounded-xl shadow-2xl">
                            <button className="flex justify-between items-center bg-black-primary rounded-xl py-[6px] px-3 poppins-medium text-xs w-44" onClick={()=>{
                                setnotificationIndex1(false)
                                }}>
                                Payment
                            </button>
                        </div>
                        :
                        <button className="text-[#B6B8BA] text-xs py-[6px] px-3 text-start" onClick={()=>{setnotificationIndex1(true)
                            setTopHead(1)
                        }}>
                            Payment
                        </button>

                    }
                    {
                        notificationIndex2 ?
                        <div className="primary-linear-gr-bg-up p-[1.5px] rounded-xl shadow-2xl">
                            <button className="flex justify-between items-center bg-black-primary rounded-xl py-[6px] w-44 px-3 poppins-medium text-xs" onClick={()=>{setnotificationIndex2(false)
                            }}>
                                KYC
                            </button>
                        </div>
                        :
                        <button className="text-[#B6B8BA] text-xs py-[6px] px-3 text-start" onClick={()=>{setnotificationIndex2(true)
                            setTopHead(2)
                        }}>
                            KYC
                        </button>

                    }
                    {
                        notificationIndex3 ?
                        <div className="primary-linear-gr-bg-up p-[1.5px] rounded-xl shadow-2xl">
                            <button className="flex justify-between items-center bg-black-primary rounded-xl py-[6px] w-44 px-3 poppins-medium text-xs" onClick={()=>setnotificationIndex3(false)}>
                                Account
                            </button>
                        </div>
                        :
                        <button className="text-[#B6B8BA] text-xs py-[6px] px-3 text-start" onClick={()=>{setnotificationIndex3(true)
                            setTopHead(3)
                        }}>
                           Account
                        </button>

                    }
                    {
                        notificationIndex4 ?
                        <div className="primary-linear-gr-bg-up p-[1.5px] rounded-xl shadow-2xl">
                            <button className="flex justify-between items-center bg-black-primary rounded-xl py-[6px] w-44 px-3 poppins-medium text-xs" onClick={()=>setnotificationIndex4(false)}>
                                Transaction
                            </button>
                        </div>
                        :
                        <button className="text-[#B6B8BA] text-xs py-[6px] px-3 text-start" onClick={()=>{setnotificationIndex4(true)
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
                <div className=" px-[2rem] w-full">
                    <div className="poppins-semibold text-lg mb-4">{menu[tophead]}<span className="poppins-light text-gray-400 text-xs mx-1">(1)</span></div>  
                    <div className="flex flex-col gap-2 divide-y divide-slate-200 ">
                    
                    {notificationData.map((val,i)=>{
                        return(
                            <div className={`flex flex-col  gap-2  py-2`}>
                            <div className="flex justify-between poppins-semibold text-base">
                                <div className="text-sm">{val.title}</div>
                                <div className="text-xs">{moment(val.created_at).locale('en').format('DD MMMM YYYY HH:mm')}</div>
                            </div>
                            <div className="flex poppins-regular text-[#787D81] gap-2 text-[14px]">
                                <div>{val.description}</div>
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