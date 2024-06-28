import { IoDocumentText } from "react-icons/io5";
import { FaCreditCard } from "react-icons/fa6";
import Stats from "../Stats";
import { useLocation,useNavigate } from "react-router-dom";
function RightSideBar(){
    const location = useLocation()
    console.log("location",location.pathname)
    return(
        
        (location.pathname)!=="/dashboard/support" &&
        (location.pathname)!=="/dashboard/notification" && 
        (location.pathname)!=="/invoice/new-invoice" &&
        (location.pathname)!=="/invoice/invoice-detail" &&
        (location.pathname)!=="/invoice/new-invoice/invoice-detail"
         ?
        <div className="p-[0.8rem] mt-5 flex flex-col gap-4 ">
        <QuickAction/>
        <Stats/>
        </div>
        :
        <></>
    )
}

function QuickAction(){
    const navigate = useNavigate()
    return(
    <div>
        <div className="poppins-semibold">Quick Actions</div>
        <div className="flex flex-col gap-2 p-1 mt-2">
            <button className="poppins-medium text-sm flex items-center bg p-[1rem] bg-black-primary rounded-xl min-h-[3.5rem] w-72 gap-4 primary-btn ">
                <FaCreditCard color="gray"/>
                <div>Make a Payment</div>
            </button>
            <button 
            onClick={()=> navigate('/invoice/new-invoice')}
            className="poppins-medium text-sm flex items-center bg p-[1rem] bg-black-primary rounded-xl min-h-[3.5rem] gap-4 primary-btn">
                <IoDocumentText color="gray"/>
                <div>Sent an Invoice</div>
            </button>
        </div>
    </div>                
    )
}


export default RightSideBar