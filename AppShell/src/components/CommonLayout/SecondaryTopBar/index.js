import { useNavigate,useLocation } from "react-router-dom";
import { DropMenu } from "../TopNavbar";
import { Avatar } from "@mui/material";
import { useState } from "react";
import { useSelector } from "react-redux"

function SecondaryTopBar({btn1="",btn2=""}){
    const location  = useLocation()
    const navigate  = useNavigate() 
    const [isDropMenuOpen,setDropMenu] = useState(false)
    const TopHead = getTopName(location.pathname)
    const current_user = useSelector(state=>state.auth.user)
    return(
        <div className="flex justify-between w-full pt-4 px-2 my-1"> 
            <div className="flex gap-2 items-center">
                <div 
                onClick={()=>navigate(-1)}
                className="p-2 bg-primary rounded-full">
                    <svg width="5" height="6" viewBox="0 0 5 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M4 1L2 3L4 5" stroke="#4E5459" strokeWidth="1.5" strokeLinecap="round"/>
                    </svg>

                </div>
                <div className="poppins-medium">{TopHead}</div>
            </div>
            {
                (location.pathname === "/dashboard/profile") ||
                (location.pathname === "/dashboard/card/card-detail")?             
                 <div className="flex gap-3 text-sm  mr-[1.25rem] items-center">
                    <div className="primary-linear-gr-bg-up p-1 rounded-[50%] shadow-2xl shadow-black" 
                    onClick={()=>navigate('/dashboard/profile')}
                    >
                        <Avatar src="#"
                        sx={{
                            fontWeight:"bold",
                            fontSize:"small"
                        }}
                         alt={current_user.first_name+current_user.last_name}/>
                    </div>
                <div className="flex flex-col text-sm">
                    <div>
                    Hello!
                   </div>
                   <div className="poppins-semibold">
                    {current_user.first_name}
                    </div>
                </div>
                <div className=" relative ml-[2rem]">
                    <button onClick={()=>setDropMenu(true)}>
                    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" clipRule="evenodd" d="M0 1.5C0 0.671573 0.671573 0 1.5 0H3C3.82843 0 4.5 0.671573 4.5 1.5V3C4.5 3.82843 3.82843 4.5 3 4.5H1.5C0.671573 4.5 0 3.82843 0 3V1.5ZM0 8.25C0 7.42157 0.671573 6.75 1.5 6.75H3C3.82843 6.75 4.5 7.42157 4.5 8.25V9.75C4.5 10.5784 3.82843 11.25 3 11.25H1.5C0.671573 11.25 0 10.5784 0 9.75V8.25ZM0 15C0 14.1716 0.671573 13.5 1.5 13.5H3C3.82843 13.5 4.5 14.1716 4.5 15V16.5C4.5 17.3284 3.82843 18 3 18H1.5C0.671573 18 0 17.3284 0 16.5V15ZM6.75 1.5C6.75 0.671573 7.42157 0 8.25 0H9.75C10.5784 0 11.25 0.671573 11.25 1.5V3C11.25 3.82843 10.5784 4.5 9.75 4.5H8.25C7.42157 4.5 6.75 3.82843 6.75 3V1.5ZM6.75 8.25C6.75 7.42157 7.42157 6.75 8.25 6.75H9.75C10.5784 6.75 11.25 7.42157 11.25 8.25V9.75C11.25 10.5784 10.5784 11.25 9.75 11.25H8.25C7.42157 11.25 6.75 10.5784 6.75 9.75V8.25ZM6.75 15C6.75 14.1716 7.42157 13.5 8.25 13.5H9.75C10.5784 13.5 11.25 14.1716 11.25 15V16.5C11.25 17.3284 10.5784 18 9.75 18H8.25C7.42157 18 6.75 17.3284 6.75 16.5V15ZM13.5 1.5C13.5 0.671573 14.1716 0 15 0H16.5C17.3284 0 18 0.671573 18 1.5V3C18 3.82843 17.3284 4.5 16.5 4.5H15C14.1716 4.5 13.5 3.82843 13.5 3V1.5ZM13.5 8.25C13.5 7.42157 14.1716 6.75 15 6.75H16.5C17.3284 6.75 18 7.42157 18 8.25V9.75C18 10.5784 17.3284 11.25 16.5 11.25H15C14.1716 11.25 13.5 10.5784 13.5 9.75V8.25ZM13.5 15C13.5 14.1716 14.1716 13.5 15 13.5H16.5C17.3284 13.5 18 14.1716 18 15V16.5C18 17.3284 17.3284 18 16.5 18H15C14.1716 18 13.5 17.3284 13.5 16.5V15Z" fill="#232B31"/>
                    </svg>
                    </button>
                    {isDropMenuOpen && <DropMenu setDropMenu={setDropMenu} navigate={navigate}/>}
                </div>
            
                </div>
                :
                <div className="flex gap-4 items-center text-base">
                <button 
                onClick={()=>navigate('/dashboard/support')}
                className="underline underline-offset-1 poppins-light text-[#787D81]">
                Need a Help?
                </button>
                <button
                onClick={()=>navigate(-1)}
                className="underline text-[#E45757] poppins-light">
                Cancel
                </button>
             </div>

            }
        </div>
    )
}
function getTopName(pathname="/payment"){
    if(pathname.startsWith('/invoice/')){
        return "Invoices"
    }
    else if(pathname.startsWith('/dashboard/profile')){
        return "Account Settings"
    }
    else if(pathname==="/dashboard/card/card-detail"){
        return "My Card Detail"
    }
    else if(pathname.startsWith('/dashboard/card')){
        return "My Cards"
    }
    else if(pathname.startsWith('/dashboard/accounts')){
        return "My Bank Accounts"
    }
    else{
        return "Payment"
    }
}
export default SecondaryTopBar;