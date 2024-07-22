import { IoAddCircleSharp } from "react-icons/io5";
import { BsBank2 } from "react-icons/bs";
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { useNavigate } from 'react-router-dom';
const DUMMY_BANKS = [
    {
        bank_name: " HDFC Bank",
        bank_branch_name: "KODAK",
        ifsc_code: " HDFC000162",
        account_holder_name: "ANANTHARAPU ARUNA THEJASWINI"
    },
    {
        bank_name: " HDFC Bank",
        bank_branch_name: "KODAK",
        ifsc_code: " HDFC000162",
        account_holder_name: "ANANTHARAPU ARUNA THEJASWINI"
    }
]


function Templates({ userId = null, handleTemplateData }) {
    const [templates, setTemplates] = useState(DUMMY_BANKS)
    const navigate = useNavigate()
    useEffect(() => {
        const fetchTemplates = async () => {
            const data = await handleTemplateData()
            console.log(data)
            setTemplates(data)
        }
        fetchTemplates();

    }, [userId])

    return (
        <div className="w-full ">
            <div className="flex justify-between mb-4">
                <p className="poppins-semibold text-[#232B31] text-base">My Templates</p>
                <div 
                onClick={()=>{
                    navigate('/dashboard/accounts/add-new')
                }}
                className="flex text-xs gap-1 items-center cursor-pointer">
                    <IoAddCircleSharp size="18px" />
                    <p className="poppins-regular text-[#787D81] text-xs">Create</p>
                </div>
            </div>
            <div className="flex flex-col gap-3">
                {
                    templates.slice(templates.length-2,templates.length).map((bank, i) => {
                        return (
                            <div key={i} className="flex flex-col bg-white p-[1.2rem] rounded-2xl min-h-[5.6rem] justify-between">
                                <div className="flex justify-between leading-[20px] poppins-regular text-[10px] text-[#4E5459]">
                                    <div className="flex gap-2">
                                        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M5 7H3V14H5V7Z" fill="#B6B8BA" />
                                            <path d="M8.3335 7H6.3335V14H8.3335V7Z" fill="#B6B8BA" />
                                            <path d="M11.6665 7H9.6665V14H11.6665V7Z" fill="#B6B8BA" />
                                            <path d="M15 7H13V14H15V7Z" fill="#B6B8BA" />
                                            <path d="M17.4255 16H0.574468C0.260426 16 0 15.5467 0 15C0 14.4533 0.260426 14 0.574468 14H17.4255C17.7396 14 18 14.4533 18 15C18 15.5467 17.7396 16 17.4255 16Z" fill="#B6B8BA" />
                                            <path d="M16.0275 3.31238L9.2775 0.612383C9.1275 0.552383 8.8725 0.552383 8.7225 0.612383L1.9725 3.31238C1.71 3.41738 1.5 3.72488 1.5 4.00988V6.49988C1.5 6.91235 1.8375 7.24985 2.25 7.24985H15.75C16.1625 7.24985 16.5 6.91235 16.5 6.49988V4.00988C16.5 3.72488 16.29 3.41738 16.0275 3.31238ZM9 5.37488C8.3775 5.37488 7.875 4.87238 7.875 4.24988C7.875 3.62738 8.3775 3.12488 9 3.12488C9.6225 3.12488 10.125 3.62738 10.125 4.24988C10.125 4.87238 9.6225 5.37488 9 5.37488Z" fill="#B6B8BA" />
                                        </svg>

                                        <div>{bank.bank_name||"HDFC Bank"}</div>
                                    </div>
                                    <div>
                                        {bank.ifsc_code}
                                    </div>
                                </div>
                                <div className="flex justify-between">
                                    <div className="poppins-semibold text-[10px] text-[#232B31]">
                                        {bank.account_name}
                                    </div>
                                    <Link to={`/dashboard/payment/new-payment?bankId=${bank.id}`} className="underline text-[#787D81] poppins-light text-xs">
                                        Make Payment
                                    </Link>

                                </div>

                            </div>
                        )
                    })
                }
            </div>
            <div 
            onClick={()=>{
                navigate('/dashboard/accounts')
            }}
            className="text-right mt-2 cursor-pointer">
                <p className="poppins-regular text-[#787D81] text-xs underline">All Templates</p>
            </div>

        </div>
    )
}

export default Templates;