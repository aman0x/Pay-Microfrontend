import { SlCalender } from "react-icons/sl";
import { FaGreaterThan } from "react-icons/fa6";
function Stats(){
    return(
    <div >
        <div className="flex justify-between">
            <div className="poppins-semibold">Stats</div>
            <div className="flex items-center gap-1">
              <button className="rounded-[50%] p-1 bg-black-primary primary-btn "><SlCalender size="12px" color="white" /></button>
                <p className="poppins-light text-sm text-gray-600" >Calender</p>
            </div>
        </div>
        <div className="flex flex-col mt-2 gap-2">
            <div className="flex items-center justify-between">
                <div>
                    <p>Total Payments</p>
                    <p>24,0000.70</p>
                </div>
                <div className="flex">
                    <div>
                        $
                    </div>
                    <div>
                        <FaGreaterThan/>
                    </div>
                </div>
            </div>
            <div className="flex items-center justify-between">
                <div>
                    <p>Invoice Sended</p>
                    <p>12</p>
                </div>
                <div className="flex">
                    <div>
                        $
                    </div>
                    <div>
                    <FaGreaterThan/>
                    </div>
                </div>
            </div>
            <div className="flex items-center justify-between">
                <div>
                    <p>Invoice Received</p>
                    <p>2</p>
                </div>
                <div className="flex">
                    <div>
                        $
                    </div>
                    <div>
                    <FaGreaterThan/>
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
   
}
export default Stats