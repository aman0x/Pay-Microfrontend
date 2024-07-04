import { useNavigate,useLocation } from "react-router-dom";

function SecondaryTopBar({btn1="",btn2=""}){
    const navigate = useNavigate()
    const location  = useLocation()
    const TopHead = getTopName(location.pathname)
    return(
        <div className="flex justify-between w-full pt-4 px-2"> 
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
           
            
           
        </div>
    )
}
function getTopName(pathname="/payment"){
    if(pathname.startsWith('/invoice/')){
        return "Invoice"
    }
    else if(pathname.startsWith('/dashboard/profile')){
        return "Account Settings"
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