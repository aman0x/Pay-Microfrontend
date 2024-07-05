import { MdVerified } from "react-icons/md";
import { RiDeleteBin5Fill } from "react-icons/ri";
import { BiSolidShow } from "react-icons/bi";
import { IoAddCircleSharp } from "react-icons/io5";
import "./style.css"
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export  function PaymentCard(){
    const navigate  = useNavigate()
    return(
        <div  className="flex flex-col gap-3">
            <div className="flex justify-between ">
                <div className="poppins-semibold">
                    My Cards
                </div>
                <div 
                onClick={()=>navigate('/dashboard/card/add-card')}
                className="flex items-center gap-1 cursor-pointer">
                    <IoAddCircleSharp/>
                    <p className="poppins-light text-gray-600 text-sm">New Card</p>
                </div>
            </div>
            <FlipCard/>
            <div className="flex gap-1 justify-center items-center">
                <div className="h-2 w-2 rounded-full primary-linear-gr-bg"></div>
                <div className="h-1 w-1 rounded-full bg-black"></div>
                <div className="h-1 w-1 rounded-full bg-black"></div>
                <div className="h-1 w-1 rounded-full bg-black"></div>
            </div>
        
        </div>    
    )
}

export function FlipCard({cardColorbg="#232B31",isArrowShown=true,width="380px",height="240px"}){

    const navigate  = useNavigate()
    const [isCardClicked,setCardClicked] = useState(false)
    const [cardColor,setCardColor] = useState(cardColorbg)
    return(
        <div className={`flip-card relative shadow-xl rounded-3xl h-[240px] w-[380px] `}>
            {
                isArrowShown ?
                <div 
                    onClick={()=>setCardClicked(!isCardClicked)}
                    className="rounded-[50%] p-[6px] bg-black absolute right-2 translate-x-[100%] top-[42%] primary-arrow z-50">
                    <svg width="9" height="8" viewBox="0 0 9 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1 4H7M7 4L4 1M7 4L4 7" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
                    </svg>
                </div>
                :
                null
            }       
            <div 
            onClick={()=>setCardClicked(!isCardClicked)}
            className={`flip-card-inner ${isCardClicked?"flip-card-transform":""}`}>
                <div className={`flip-card-front flex flex-col px-[2rem] pt-[1.5rem] justify-between rounded-3xl h-full`}
                style={{
                    backgroundColor:cardColor
                }}
                >
                    <div className="flex flex-row justify-between">
                        <div className="flex flex-col gap-2">
                        <div className="flex items-center gap-0.5 text-xs">
                            <p className="poppins-thin text-xs mr-4">{"Card Name"}</p>
                            <MdVerified color="#27A963" display="flex"/>
                            <div className="text-green-500 poppins">Verified</div>
                        </div>
                        <div className="poppin-bold">Holder Name</div>
                        </div>
                        <div >
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
                            <p className="poppins-thin text-xs ">Exp. Date</p>
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
                        <div 
                        onClick={()=>navigate('/dashboard/card/card-detail')}
                        className="mt-6 underline poppins-thin text-xs hover:text-rose-300 ">
                        <a href="#" className="" >Details</a>
                        </div>
                    </div>
                <div>
                </div>
                </div>
                <div className={`flip-card-back rounded-3xl`}
                style={{
                    backgroundColor:cardColor
                }}
                >
                <div className="flex flex-col  px-[2rem] py-[1.5rem] justify-between  h-full">
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
                            <img
                            onClick={()=>setCardColor('#232B31')} 
                             src="/dashboard/color1.png"/>
                            <img 
                             onClick={()=>setCardColor('#E872D4')} 
                            src="/dashboard/color2.png"/>
                            <img
                             onClick={()=>setCardColor('#964EC2')}  
                            src="/dashboard/color3.png"/>
                            <img 
                            onClick={()=>setCardColor('#F6DEC6')} 
                            src="/dashboard/color4.png"/>
                            
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
    )
}