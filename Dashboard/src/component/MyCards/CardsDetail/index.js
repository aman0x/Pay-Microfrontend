import { useEffect, useState } from "react";
import { FaCreditCard } from "react-icons/fa";
import { useSearchParams } from "react-router-dom";
import moment from "moment";
import {useDashboard} from "#hooks/index.js"

function CardsDetail(){
    const [cardDetail, setCardDetail] = useState({
        card_holder_name:"Test",
        card_no:"12341234",
        created_at:"2024-07-16T07:14:26.223056Z",
        cvv_no:"123",
        expiry_date : "12/28",
        id :1,
        modified_at:"2024-07-16T07:14:26.223073Z",
        status:true,
        user : 2
    })
    const [isCvvShown,setCVVShown] = useState()
    const [isCardShown,setCardShown] = useState()
    const {handlePaymentCardDetail} = useDashboard()
    const [searchParams] = useSearchParams()
    const cardId = searchParams.get('id')
    useEffect(()=>{
        const fetchCardDetail = async ()=>{
            const data = await handlePaymentCardDetail(cardId)
            setCardDetail(data)
            console.log("Card-data",data)
        }
        fetchCardDetail()
    },[cardId])
    return(
        <div className="mt-5 mb-5 bg-primary p-[2rem] rounded-2xl flex flex-col gap-3 w-full">
                <div className="flex flex-col gap-4 rounded-2xl bg-white p-[1.5rem] w-full">
                    <div className="flex justify-between">
                        <div className="flex flex-col gap-1">
                            <div className="poppins-semibold">Card Name</div>
                            <div className="flex gap-2 items-center">
                                <div className="text-xs text-[#4E5459]">Status:</div>
                                <div className="text-xs text-[#E45757]">Not verified</div>
                                <div className="text-xs underline cursor-pointer">Verify</div>
                            </div>
                            <div className="flex gap-2 items-center">
                                <div className="text-xs text-[#4E5459]">Card No:</div>
                                <div onClick={()=>setCardShown(!isCardShown)} className="text-xs underline cursor-pointer">{isCardShown?"Hide":"Show full"}</div>
                                <div 
                                className="text-xs ">{isCardShown?cardDetail.card_no:cardDetail.card_no.slice(-4)}</div>
                            </div>
                            <div className="flex gap-2 items-center">
                                <div className="text-xs text-[#4E5459]">Card Holder:</div>
                                <div className="text-xs">{cardDetail.card_holder_name}</div>
                                
                            </div>
                            <div className="flex gap-2 items-center">
                                <div className="text-xs text-[#4E5459]">Exp Date:</div>
                                <div className="text-xs">{cardDetail.expiry_date}</div>
                                
                            </div>
                            <div className="flex gap-2 items-center">
                                <div className="text-xs text-[#4E5459]">CVV:</div>
                                <div onClick={()=>{
                                    setCVVShown(!isCvvShown)
                                }}
                                 className="text-xs underline cursor-pointer">{isCvvShown?cardDetail.cvv_no:"Show"}</div>
                                
                            </div>
                            
                        </div>
                        <div className="rounded-xl shadow-md py-[1px] h-14 px-2 w-40 flex flex-col justify-center">
                            <div className="poppins-semibold text-sm">
                                Balance :
                            </div>
                            <div className="color-linear poppins-semibold">
                                ₹ {cardDetail.balance||0}
                            </div>
                        </div>
                    </div>
                    <div className="bg-primary p-[1rem] rounded-xl flex flex-col gap-4 my-2">
                        <div className="text-[#4E5459] text-sm poppins-semibold">Bank Details:</div>
                        <div className="flex flex-col gap-1">
                            <div className="flex gap-2 items-center">
                                <div className="text-[#A3A6A9] text-sm min-w-fit">A/C No</div>
                                <hr className="my-2 w-full border-t-2 border-dashed border-[#CDCED1]"/>
                                <div className="poppins-semibold text-sm">59321881239525092591</div>
                        </div>
                        <div className="flex gap-2 items-center">
                                <div className="text-[#A3A6A9] text-sm">Bank</div>
                                <hr className="my-2 w-full border-t-2 border-dashed border-[#CDCED1]"/>
                                <div className="poppins-semibold text-sm">HDFC&nbsp;BANK,KODAK</div>
                        </div>
                        <div className="flex gap-2 items-center">
                                <div className="text-[#A3A6A9] text-sm min-w-fit">IFS Code</div>
                                <hr className="my-2 w-full border-t-2 border-dashed border-[#CDCED1]"/>
                                <div className="poppins-semibold text-sm">HDFC0003242</div>
                        </div>
                        
                        </div> 
                    </div>
                    <div className="flex flex-col gap-1 mb-2">
                        <div className="flex gap-1"><span className="poppins-semibold text-base">Transactions</span><span className="text-gray-600 poppins-light">(2)</span></div>
                        <div  className="poppins-light text-sm text-gray-600">Click to Row For Details</div>
                    </div>
                    <div className="w-full">
                        <table className="w-full  rounded-2xl overflow-hidden text-sm poppins-regular">
                            <tr className="poppins-light text-xs text-white bg-black-primary items-center">
                                <td className="ml-2">Particular</td>
                                <td>Type</td>
                                <td>Price Per Quantity</td>
                                <td>Sent To/Received from</td>
                                <td>GST %</td>
                                <td>Status</td>
                            </tr>
                            {/* <tr className="">
                                <td>Vendor Payment</td>
                                <td>Send</td>
                                <td className="text-[#E45757]">-₹ 24,000.24</td>
                                <td>Full Name</td>
                                <td>20 %</td>
                                <td>
                                    <div className="flex gap-2 items-center td-element">
                                    <div>  
                                        <svg width="9" height="9" viewBox="0 0 9 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <circle cx="4.5" cy="4.5" r="4.5" fill={'#FFB442'}/>
                                        </svg>
                                    </div>
                                    <div>{"InProgress"}</div>  
                            </div>
                                </td>
                            </tr>
                            <tr>
                                <td>Vendor Payment</td>
                                <td>Received</td>
                                <td className="text-[#27A963]">+₹ 24,000.24</td>
                                <td>Full Name</td>
                                <td>20 %</td>
                                <td>
                                    <div className="flex gap-2 items-center td-element">
                                    <div>  
                                    <svg width="9" height="9" viewBox="0 0 9 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <circle cx="4.5" cy="4.5" r="4.5" fill={'#27A963'}/>
                                    </svg>
                                    </div>
                                    <div>Succeeded</div>  
                                    </div>
                                </td>
                            </tr> */}
                        </table>
                    </div>
                </div>  
        </div>
    )
}

export default CardsDetail