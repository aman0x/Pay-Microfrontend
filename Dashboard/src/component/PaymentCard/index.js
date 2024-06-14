import { MdVerified } from "react-icons/md";
import { RiDeleteBin5Fill } from "react-icons/ri";
import { BiSolidShow } from "react-icons/bi";
import { IoAddCircleSharp } from "react-icons/io5";
import "./style.css"

export  function PaymentCard(){
    return(
        <div>
            <div className="flex justify-between mb-2">
                <div className="poppins-semibold">
                    My Cards
                </div>
                <div className="flex items-center gap-1">
                    <IoAddCircleSharp/>
                    <p className="poppins-light text-gray-600 text-sm">Add</p>
                </div>
            </div>
        <div className="flip-card ">
            <div className="flip-card-inner">
                <div className="flip-card-front flex flex-col px-[2rem] py-[2rem] justify-between ">
                    <div className="flex flex-row justify-between">
                        <div className="flex flex-col gap-2">
                        <div className="flex items-center gap-0.5 text-xs">
                            <p className="poppins-thin text-xs mr-4">{"Card Name"}</p>
                            <MdVerified color="#27A963" display="flex"/>
                            <div className="text-green-500 poppins">Verified</div>
                        </div>
                        <div className="poppin-bold">Holder Name</div>
                        </div>
                        <div>
                            <img src="/dashboard/visa.png"
                            alt="paymorz-logo"
                            width="60px"
                            
                            />
                        </div>                    
                    </div>
                    
                    <div>
                        <p className="poppins-regular">**** **** **** **** 1001</p>
                    </div>
                    <div className="flex justify-between text-xs">
                        <div>
                            <p className="poppins-thin text-xs mb-2">Exp. Date</p>
                            <p>02 / 28</p>
                        </div>
                        <div>
                        <p className="poppins-thin text-xs mb-2">CVV</p>
                        <p>***</p>
                        </div>
                        <div>
                        <p className="poppins-thin text-xs mb-2">Balance</p>
                        <p>₹ 100,000</p>
                        </div>
                        <div className="mt-6 underline poppins-thin text-xs">
                        <a href="#" >Details</a>
                        </div>
                    </div>
                <div>
                </div>
                </div>
                <div className="flip-card-back">
                <div className="flex flex-col px-[2rem] pt-[2rem] gap-12">
                <div className="flex flex-row justify-between text-xs">
                        <div>
                            <p className="poppins-thin text-xs mb-2">Payments</p>
                            <p className="poppins-bold">12</p>
                        </div>
                        <div>
                        <p className="poppins-thin text-xs mb-2">Status</p>
                        <div className="flex items-center gap-0.5 text-xs">
                            <MdVerified color="#27A963" display="flex"/>
                            <div className="text-green-500 poppins">Verified 12 April 2024</div>
                        </div>
                        </div>
                        <div className="mt-6 ">
                        <a href="#" ><RiDeleteBin5Fill color="red" size="16px"/></a>
                        </div>
                    </div>  
                    <div>
                        <p className="poppins-thin text-xs mb-2">Change Color</p>
                        <div className="flex gap-2">
                            <img src="/dashboard/color1.png"/>
                            <img src="/dashboard/color2.png"/>
                            <img src="/dashboard/color3.png"/>
                            <img src="/dashboard/color4.png"/>
                            
                        </div>
                    </div>
                    <div>
                        <p className="poppins-thin text-xs mb-2">CVV</p>
                        <p className="flex gap-2">***<span><BiSolidShow color="gray" /></span></p>
                    </div> 
                </div>
                </div>
            </div>
        </div>
        </div>    
    )
}