import { MdDashboard,MdOutlineHelp } from "react-icons/md";
import { CgNotes } from "react-icons/cg";
import { RiPieChart2Fill } from "react-icons/ri";
import { CiLogout } from "react-icons/ci";
import { RiNotification4Fill } from "react-icons/ri";
import { FaCreditCard,FaGreaterThan,FaLessThan } from "react-icons/fa6";
import {useState} from "react"
import  { useNavigate } from "react-router-dom"
import "./style.css"
export  function SideNavBar(){
    const navigate = useNavigate()
    const [isNavOpen,setNavOpen] = useState(true)
    const [navIndex,setNavIndex] = useState(0)
    
    return(
        <div className={`bg-primary ${isNavOpen?'min-w-[13.5rem]':"nav-close"} flex flex-col h-[85vh]  text-sm justify-between border-gray-400  py-[1.5rem] pr-[1rem] rounded-3xl mx-[1rem] my-[1rem] w-fit transition-all duration-150 shadow-2xl  `}
        >
            <div className="flex gap-1 items-center pl-4" onClick={()=>setNavOpen(!isNavOpen)}>
            <img
                src="/dashboard/paymorz-logo.png"
                alt="paymorz-logo"
                width={isNavOpen?"25px":"40px"}
                style={{
                    marginInline:isNavOpen?'0px':"14px"
                }}
            />
            <span style={{display:isNavOpen?"none":"flex"}} >
                <FaGreaterThan color="gray" fontSize="14px"/>
            </span>
            <p className="italic pl-1 font-extrabold from-neutral-900 text-base">Paymorz<span 
            className="pl-1 text-xl font-extrabold size-8 color-linear">.</span></p>
            <span className="ml-9"><FaLessThan color="gray" fontSize="10px"/></span>
            </div>
            <div className="flex flex-col gap-1 ">
                <button className="flex gap-4 items-center" 
                onClick={()=>{
                    setNavIndex(0)
                    navigate('/')
                }}
                style={{
                color:"grey",
                // lineHeight:"0px"
            }}>
                {navIndex===0?
                <div className="primary-linear-gr-bg-up h-6 active-bar"> </div>
                :
                <div className="h-[40px] w-[2.5px]"></div>
                }
                    <span className={`${isNavOpen?"":"nav-element"}`}><MdDashboard /></span>
                    <p>Dashboard</p>
                    <div className="relative primary-linear-gr-bg  p-[1.5px] rounded-2xl">
                    <div className="bg-black-primary rounded-xl py-0.5 px-2 text-xs">1 New</div>
                    </div>
                </button>
                <button className="flex gap-4 items-center" style={{
                color:"grey"}}
                onClick={()=>{
                   setNavIndex(1)
                   navigate('/payment')
                }}> 
            {navIndex===1?
                <div className="primary-linear-gr-bg-up h-6 active-bar"> </div>
                :
                <div className="h-[40px] w-[2.5px]"></div>
                }
                <span className={`${isNavOpen?"":"nav-element"}`}><FaCreditCard /></span>
                    <p className="mr-2">Payments</p>
                    <div className="relative primary-linear-gr-bg  p-[1.5px] rounded-2xl">
                    <div className="bg-black-primary rounded-xl py-0.5 px-2 text-xs">1 New</div>
                    </div>
                </button>
                <button className="flex gap-4 items-center" style={{
                color:"grey"
                }}
                onClick={()=>{

                    setNavIndex(2)
                    //window.location.href = "/invoice"
                    navigate('/invoice')
                    
                }}>
                {navIndex===2?
                <div className="primary-linear-gr-bg-up h-6 active-bar"> </div>
                :
                <div className="h-[40px] w-[2.5px]"></div>
                }
                <span className={`${isNavOpen?"":"nav-element"}`}><CgNotes  /></span>
                    <p className="mr-5">Invoices</p>
                    <div className="relative primary-linear-gr-bg  p-[1.5px] rounded-2xl">
                    <div className="bg-black-primary rounded-xl py-0.5 px-2 text-xs">1 New</div>
                    </div>
                </button>
                <button className="flex gap-4 items-center" style={{
                color:"grey"
                }}
                onClick={()=>{
                    setNavIndex(3)
                }}>
                {navIndex===3?
                <div className="primary-linear-gr-bg-up h-6 active-bar"> </div>
                :
                <div className="h-[40px] w-[2.5px]"></div>
                }
                <span className={`${isNavOpen?"":"nav-element"}`} ><RiPieChart2Fill  /></span>
                    <p className="mr-[1.40rem]" >Statistic</p>
                    <div className="relative primary-linear-gr-bg  p-[1.5px] rounded-2xl">
                    <div className="bg-black-primary rounded-xl py-0.5 px-2 text-xs">1 New</div>
                    </div>
                </button>
               
                <button className="flex gap-4 items-center" style={{
                color:"grey"
                }}
                onClick={()=>{
                    setNavIndex(4)
                    navigate('/notification')
                }}>
                {navIndex===4?
                <div className="primary-linear-gr-bg-up h-6 active-bar"> </div>
                :
                <div className="h-[40px] w-[2.5px]"></div>
                }
                <span className={`${isNavOpen?"":"nav-element"}`}><RiNotification4Fill /></span>
                    <p>Notification</p>
                    <div className="relative primary-linear-gr-bg  p-[1.5px] rounded-2xl">
                    <div className="bg-black-primary rounded-xl py-0.5 px-2 text-xs">1 New</div>
                    </div>
                </button>
                <button className="flex gap-4 items-center" style={{
                color:"grey"
                }}
                onClick={()=>{
                    navigate('/support')
                    setNavIndex(5)
                }}>
                {navIndex===5?
                <div className="primary-linear-gr-bg-up h-6 active-bar"> </div>
                :
                <div className="h-[40px] w-[2.5px]"></div>
                }
                <span className={`${isNavOpen?"":"nav-element"}`}><MdOutlineHelp /></span>
                    <p className="mr-6">Support</p>
                    <div className="relative primary-linear-gr-bg  p-[1.5px] rounded-2xl">
                    <div className="bg-black-primary rounded-xl py-0.5 px-2 text-xs">1 New</div>
                    </div>
                </button>
            </div>
            <button className="flex gap-4 items-center pl-4" style={{
                color:"grey"
            }}>
            <span className={`${isNavOpen?"":"nav-element"}`}><CiLogout /></span>
                <p>Logout</p>
            </button>
        </div>
    )
}