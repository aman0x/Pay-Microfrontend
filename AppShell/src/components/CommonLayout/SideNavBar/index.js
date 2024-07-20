import { MdDashboard,MdOutlineHelp } from "react-icons/md";
import { CgNotes } from "react-icons/cg";
import { RiPieChart2Fill } from "react-icons/ri";
import { CiLogout } from "react-icons/ci";
import { RiNotification4Fill } from "react-icons/ri";
import { FaCreditCard,FaGreaterThan,FaLessThan } from "react-icons/fa6";
import {useState} from "react"
import  { useNavigate } from "react-router-dom"
import "./style.css"
import { useDispatch } from "react-redux";
import {authActions} from "Auth/authReducer"
export  function SideNavBar(){
    const navigate = useNavigate()
    const [isNavOpen,setNavOpen] = useState(true)
    const [navIndex,setNavIndex] = useState(0)
    const [notificationIndex,setnotificationIndex] = useState(0)
    const dispatch  = useDispatch()
    return(
        <div className={` hidden bg-primary cursor-pointer ${isNavOpen?'min-w-[13.5rem]':"nav-close"} sm:flex flex-col h-[85vh] max-h-[800px]  text-sm justify-between border-gray-400  py-[1.5rem] pr-[1rem] rounded-3xl mx-[0.5rem] my-[0.5rem]  transition-all duration-150 shadow-2xl overflow-y-hidden`}
        >
            <div className="flex gap-1 items-center pl-4" onClick={()=>setNavOpen(!isNavOpen)}>
            <img
                src="/dashboard/paymorz-logo.png"
                alt="paymorz-logo"
                width={isNavOpen?"25px":"34px"}
                style={{
                    marginInline:isNavOpen?'0px':"14px"
                }}
            />
            <span
            className="cursor-pointer"
            style={{ display: isNavOpen ? "none" : "flex" }}
        >
         <svg width="7" height="12" viewBox="0 0 8 13" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M1 1.49951L6 6.49951L1 11.4995" stroke="#B6B8BA" stroke-width="1.5" stroke-linecap="round"/>
</svg>

        </span>
            <p className="italic pl-2 font-extrabold from-neutral-900 text-base">Paymorz<span 
            className="pl-1 text-xl font-extrabold size-8 color-linear">.</span></p>
            <span className="ml-9 cursor-pointer">   <svg width="7" height="12" viewBox="0 0 8 13" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M1 1.49951L6 6.49951L1 11.4995" stroke="#B6B8BA" stroke-width="1.5" stroke-linecap="round"/>
</svg></span>
            </div>
            <div className="flex flex-col gap-1  ">
                <button className="flex gap-4 items-center " 
                onClick={()=>{
                    setNavIndex(0)
                    navigate('/dashboard')
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
                    <span className={`${isNavOpen?"":"nav-element"}`}>{navIndex===0 ? <img src="/images/union_selected.svg" alt="Dashboard logo"/> : <img src="/images/union.svg" alt="Dashboard logo"/>} </span>
                    <p className={`${navIndex===0 ? "font-semibold text-black" : ""} hover:text-black hover:font-semibold text-sm`}>Dashboard</p>
                    {
                        notificationIndex === 1?
                        <div className="relative primary-linear-gr-bg  p-[1.5px] rounded-2xl">
                        <div className="bg-black-primary rounded-xl py-0.5 px-2 text-xs">1 New</div>
                        </div>
                        :
                        null
                    }
                    
                </button>
                <button className="flex gap-4 items-center" style={{
                color:"grey"}}
                onClick={()=>{
                   setNavIndex(1)
                   navigate('/dashboard/payment')
                }}> 
            {navIndex===1?
                <div className="primary-linear-gr-bg-up h-6 active-bar"> </div>
                :
                <div className="h-[40px] w-[2.5px]"></div>
                }
                <span className={`${isNavOpen?"":"nav-element"}`}>{navIndex===1 ? <img src="/images/credit_selected.svg" alt="Credit logo"/> : <img src="/images/credit.svg" alt="Credit logo"/>}</span>
                    <p className={`${navIndex===1 ? "font-semibold text-black" : ""} hover:text-black hover:font-semibold mr-2`}>Payments</p>
                    {
                         notificationIndex === 2?
                        <div className="relative primary-linear-gr-bg  p-[1.5px] rounded-2xl">
                        <div className="bg-black-primary rounded-xl py-0.5 px-2 text-xs">1 New</div>
                        </div>
                        :
                        null
                    }
                   
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
                <span className={`${isNavOpen?"":"nav-element"}`}>{navIndex===2 ? <img src="/images/invoice_selected.svg" alt="Invoice logo"/> : <img src="/images/invoice.svg" alt="Invoice logo"/>}</span>
                    <p className={`${navIndex===2 ? "font-semibold text-black" : ""}  hover:text-black hover:font-semibold mr-5`}>Invoices</p>
                    {
                         notificationIndex === 3?
                        <div className="relative primary-linear-gr-bg  p-[1.5px] rounded-2xl">
                        <div className="bg-black-primary rounded-xl py-0.5 px-2 text-xs">1 New</div>
                        </div>
                        :
                        null
                    }
                </button>
                <button className="flex gap-4 items-center" style={{
                color:"grey"
                }}
                onClick={()=>{
                    setNavIndex(3)
                    navigate("/dashboard/statistic")
                }}>
                {navIndex===3?
                <div className="primary-linear-gr-bg-up h-6 active-bar"> </div>
                :
                <div className="h-[40px] w-[2.5px]"></div>
                }
                <span className={`${isNavOpen?"":"nav-element"}`} >{navIndex===3 ? <img src="/images/statistics_selected.png" alt="Statistics logo"/> : <img src="/images/statistics.svg" alt="Statistics logo"/>}</span>
                    <p className={`${navIndex===3 ? "font-semibold text-black" : ""}  hover:text-black hover:font-semibold mr-[1.40rem]`} >Statistic</p>
                    {
                         notificationIndex === 4?
                        <div className="relative primary-linear-gr-bg  p-[1.5px] rounded-2xl">
                        <div className="bg-black-primary rounded-xl py-0.5 px-2 text-xs">1 New</div>
                        </div>
                        :
                        null
                    }
                </button>
               
                <button className="flex gap-4 items-center" style={{
                color:"grey"
                }}
                onClick={()=>{
                    setNavIndex(4)
                    navigate('/dashboard/notification')
                }}>
                {navIndex===4?
                <div className="primary-linear-gr-bg-up h-6 active-bar"> </div>
                :
                <div className="h-[40px] w-[2.5px]"></div>
                }
                <span className={`${isNavOpen?"":"nav-element"}`}>{navIndex===4 ? <img src="/images/notification_selected.svg" alt="Notification logo"/> : <img src="/images/notification.svg" alt="Notification logo"/>}</span>
                    <p className={`${navIndex===4 ? "font-semibold text-black" : ""} hover:text-black hover:font-semibold`}>Notification</p>
                    {
                         notificationIndex === 5?
                        <div className="relative primary-linear-gr-bg  p-[1.5px] rounded-2xl">
                        <div className="bg-black-primary rounded-xl py-0.5 px-2 text-xs">1 New</div>
                        </div>
                        :
                        null
                    }
                </button>
                <button className="flex gap-4 items-center" style={{
                color:"grey"
                }}
                onClick={()=>{
                    navigate('/dashboard/support')
                    setNavIndex(5)
                }}>
                {navIndex===5?
                <div className="primary-linear-gr-bg-up h-6 active-bar"> </div>
                :
                <div className="h-[40px] w-[2.5px]"></div>
                }
                <span className={`${isNavOpen?"":"nav-element"}`}>{navIndex===5 ? <img src="/images/support_selected.svg" alt="Support logo"/> : <img src="/images/support.svg" alt="Support logo"/>}</span>
                    <p className={`${navIndex===5 ? "font-semibold text-black" : ""} hover:text-black hover:font-semibold mr-6`}>Support</p>
                    {
                         notificationIndex === 6?
                        <div className="relative primary-linear-gr-bg  p-[1.5px] rounded-2xl">
                        <div className="bg-black-primary rounded-xl py-0.5 px-2 text-xs">1 New</div>
                        </div>
                        :
                        null
                    }
                    
                </button>
            </div>
            <button className="flex gap-4 items-center pl-4"
            onClick={()=>{
                dispatch(authActions.logout())
                localStorage.clear()
                navigate('/')
            }}
             style={{
                color:"grey"
            }}>
            <span className={`${isNavOpen?"":"nav-element"}`}><CiLogout /></span>
                <p className="hover:text-black hover:font-semibold">Logout</p>
            </button>
        </div>
    )
}