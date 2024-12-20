import { useInvoice } from "#hooks/index"
import moment from "moment"
import { useEffect, useState } from "react"
import { FaCreditCard,FaSearch }from "react-icons/fa"
import { useNavigate } from "react-router-dom"
function NewInvoice(){
    const navigate = useNavigate()
    const[invoices,setInvoices] = useState([
        {
            "invoice_title": "",
            "date": "2024-06-21T10:21:17.116232Z",
            "invoice_id": "TD1711364044252",
            "name": "ANANTHARAPU ARUNA THEJASWINI",
            "bank": "HDFC Bank",
            "bank_branch": "KODAD",
            "ifsc_code": "HDFC0001642",
            "total_amount": 24000.24
        }
    ])
    const {handleNewInvoiceData}= useInvoice()
    useEffect(()=>{
        const fetchInvoice = async()=>{
            const data = await handleNewInvoiceData()
            setInvoices(data)
        }
        fetchInvoice()
    })
    return(
        <div className="mt-5 bg-primary p-[1.5rem] rounded-2xl flex flex-col gap-3 w-[1300px] ">
            <div className="flex justify-between items-center">
                <div className="flex poppins-bold">
                New Invoices ({invoices.length})
                </div>
                <div className="lg:w-96">
                    <div className="relative w-full">
                        <input type="text" id="voice-search" className="bg-[#DFE0E2] focus:outline-none focus:ring-1 focus:ring-gray-300 border border-gray-300 text-gray-900 text-sm rounded-2xl block w-full  py-[0.7rem] px-5" placeholder="Search..." required />
                        <button type="button" className="absolute inset-y-0 end-0 flex items-center pe-3">
                        <FaSearch color="gray"/>
                        </button>
                    </div>
                </div>  
            </div>
            <div className="flex flex-col gap-4 mt-2">
                {invoices.map((invoice,i)=>{
                    return(
                        <div className="flex flex-col gap-4 rounded-2xl bg-white p-[1.5rem] w-full">
                    <div className="flex justify-between">
                        <div className="flex flex-col gap-1">
                            <div className="poppins-semibold">{invoice.invoice_title}</div>
                            <div className="flex gap-2 items-center">
                                <div className="text-sm text-[#4E5459]">Invoice ID:</div>
                                <div className="text-xs">{invoice.invoice_id}</div>
                            </div>
                            <div className="flex gap-2 items-center">
                                <div className="text-sm text-[#4E5459]">Date:</div>
                                <div className="text-xs">{moment(invoice.date).format('DD MM YYYY HH:mm') }</div>
                            </div> 
                        </div>
                        <div className="rounded-xl shadow-md py-[1px] h-14 px-2 w-40 flex flex-col justify-center">
                            <div className="poppins-semibold text-sm">
                                Payment :
                            </div>
                            <div className="color-linear poppins-semibold">
                                ₹ {invoice.total_amount}
                            </div>
                        </div>
                    </div>
                    <div className="flex justify-between items-end">
                            <div className="flex flex-col gap-1 text-sm mt-2">
                                <div className="text-[#4E5459] poppins-light">From:</div>
                                <div className="poppins-semibold">{invoice.name}</div>
                                <div className="flex gap-1 items-center">
                                    <div>
                                        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M5 7H3V14H5V7Z" fill="#B6B8BA"/>
                                        <path d="M8.33337 7H6.33337V14H8.33337V7Z" fill="#B6B8BA"/>
                                        <path d="M11.6666 7H9.66663V14H11.6666V7Z" fill="#B6B8BA"/>
                                        <path d="M15 7H13V14H15V7Z" fill="#B6B8BA"/>
                                        <path d="M17.4255 16H0.574468C0.260426 16 0 15.5467 0 15C0 14.4533 0.260426 14 0.574468 14H17.4255C17.7396 14 18 14.4533 18 15C18 15.5467 17.7396 16 17.4255 16Z" fill="#B6B8BA"/>
                                        <path d="M16.0275 3.31238L9.2775 0.612383C9.1275 0.552383 8.8725 0.552383 8.7225 0.612383L1.9725 3.31238C1.71 3.41738 1.5 3.72488 1.5 4.00988V6.49988C1.5 6.91235 1.8375 7.24985 2.25 7.24985H15.75C16.1625 7.24985 16.5 6.91235 16.5 6.49988V4.00988C16.5 3.72488 16.29 3.41738 16.0275 3.31238ZM9 5.37488C8.3775 5.37488 7.875 4.87238 7.875 4.24988C7.875 3.62738 8.3775 3.12488 9 3.12488C9.6225 3.12488 10.125 3.62738 10.125 4.24988C10.125 4.87238 9.6225 5.37488 9 5.37488Z" fill="#B6B8BA"/>
                                        </svg>
                                    </div>
                                    <div className="text-[#4E5459] poppins-light">
                                       {invoice.bank}, {invoice.bank_branch}, {invoice.ifsc_code}
                                    </div>
                                
                                </div>
                            </div>
                            <div className="flex gap-2 items-center">
                                <div
                                onClick={()=>navigate('/invoice/new-invoice/invoice-detail')}
                                 className="poppins-light underline text-sm text-[#4E5459] cursor-pointer">
                                    Details
                                </div>
                                <div>
                                    <button
                                     onClick={()=>navigate('/dashboard/payment/new-payment')}
                                    className="poppins-medium text-sm flex items-center bg p-[0.8rem] bg-black-primary rounded-xl  gap-4 primary-btn ">
                                    <FaCreditCard color="gray"/>
                                    <div>Send Payment</div>
                                    </button>
                                </div>
                            </div>

                    </div>
                    

                         </div>
                    )
                })}
            </div>
                        

        </div>
    
    )
}
export default NewInvoice;
                   