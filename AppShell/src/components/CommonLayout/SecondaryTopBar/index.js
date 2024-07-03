import { useNavigate } from "react-router-dom";

function SecondaryTopBar({TopHead = "Payment",btn1="",btn2=""}){
    const navigate = useNavigate()
    return(
        <div className="flex justify-between w-full p-2"> 
            <div className="flex gap-2 items-center">
                <div 
                onClick={()=>navigate('/dashboard')}
                className="p-2 bg-primary rounded-full">
                    <svg width="5" height="6" viewBox="0 0 5 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M4 1L2 3L4 5" stroke="#4E5459" strokeWidth="1.5" strokeLinecap="round"/>
                    </svg>

                </div>
                <div className="poppins-medium">{TopHead}</div>
            </div>
            <div className="flex gap-4 items-center text-base">
                <button className="underline underline-offset-1 poppins-light text-[#787D81]">
                   Need a Help?
                </button>
                <button className="underline text-[#E45757] poppins-light">
                   Cancel
                </button>
            </div>
           
            
           
        </div>
    )
}
export default SecondaryTopBar;