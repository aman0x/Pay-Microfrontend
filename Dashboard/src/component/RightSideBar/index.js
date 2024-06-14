import { IoDocumentText } from "react-icons/io5";
import { FaCreditCard } from "react-icons/fa6";

import Stats from "../Stats";
function RightSideBar(){
    return(
        <div className="flex flex-col gap-2">
            <QuickAction/>
            <Stats/>
        </div>
    )
}

function QuickAction(){
    return(
    <div>
        <div className="poppins-semibold">Quick Actions</div>
        <div className="flex flex-col gap-2 p-1 mt-2">
            <button className="poppins-medium text-sm flex items-center bg p-[1rem] bg-black-primary rounded-xl min-h-[3.5rem] w-72 gap-4 primary-btn ">
                <FaCreditCard color="gray"/>
                <div>Make a Payment</div>
            </button>
            <button className="poppins-medium text-sm flex items-center bg p-[1rem] bg-black-primary rounded-xl min-h-[3.5rem] gap-4 primary-btn">
                <IoDocumentText color="gray"/>
                <div>Sent an Invoice</div>
            </button>
        </div>
    </div>                
    )
}


export default RightSideBar