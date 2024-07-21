import { BsBank2 } from "react-icons/bs";
import moment from "moment"
function ActionCards({data}){
    console.log("cards",data)
    return(
        <div className="flex flex-col gap-3">
            {
                data.map((card,i)=>{
                    return(
                        <div key={i} className="flex flex-col justify-between bg-white rounded-2xl p-5 gap-3">
                        <div className="justify-between sm:flex text-[#A3A6A9] text-sm poppins-regular">
                            <p>{card.payment_type}</p>
                            <p>{moment(card.payment_datetime).format('DD MMMM YYYY HH:mm')}</p>
                            <p>{card.transaction_id}</p>
                        </div>
                        <div className="flex justify-between poppins-semibold text-[#232B31]">
                            <div>
                                <p>{card.account_holder_name}</p>
                                <p className="flex items-center text-[#4E5459] text-sm poppins-regular gap-2"><span>
                                <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M5 7H3V14H5V7Z" fill="#B6B8BA"/>
<path d="M8.3335 7H6.3335V14H8.3335V7Z" fill="#B6B8BA"/>
<path d="M11.6665 7H9.6665V14H11.6665V7Z" fill="#B6B8BA"/>
<path d="M15 7H13V14H15V7Z" fill="#B6B8BA"/>
<path d="M17.4255 16H0.574468C0.260426 16 0 15.5467 0 15C0 14.4533 0.260426 14 0.574468 14H17.4255C17.7396 14 18 14.4533 18 15C18 15.5467 17.7396 16 17.4255 16Z" fill="#B6B8BA"/>
<path d="M16.0275 3.31238L9.2775 0.612383C9.1275 0.552383 8.8725 0.552383 8.7225 0.612383L1.9725 3.31238C1.71 3.41738 1.5 3.72488 1.5 4.00988V6.49988C1.5 6.91235 1.8375 7.24985 2.25 7.24985H15.75C16.1625 7.24985 16.5 6.91235 16.5 6.49988V4.00988C16.5 3.72488 16.29 3.41738 16.0275 3.31238ZM9 5.37488C8.3775 5.37488 7.875 4.87238 7.875 4.24988C7.875 3.62738 8.3775 3.12488 9 3.12488C9.6225 3.12488 10.125 3.62738 10.125 4.24988C10.125 4.87238 9.6225 5.37488 9 5.37488Z" fill="#B6B8BA"/>
</svg>

                                    </span>{card.bank_name}, {card.bank_branch_name}, {card.ifsc_code}</p>
                            </div>
                            <div>
                            - ₹ {card.transaction_amount}
                            </div>
                        </div>
                        <div className="flex justify-between">
                            <div className="flex items-center poppins-regular text-sm  gap-2">
                                <span><svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <rect width="18" height="18" rx="9" fill="#FFAC2F" fillOpacity="0.15"/>
                                        <circle cx="9" cy="9" r="4" fill="#FFB442"/>
                                        </svg>
                                </span>
                                <p className="text-[#FFB442]" > Transaction {card.transaction_status}</p>
                            </div>
                            <div>
                                <a href="#" className="underline text-[#787D81] text-sm poppins-medium">Details</a>
                            </div>
                        </div>                        
                        </div>
                    )
                })
            }
                    {data.length>3 &&<div className="flex justify-center">
                        <div className="primary-linear-gr-bg p-[2px] rounded-xl">
                        <button className="flex items-center gap-2 bg-primary rounded-xl px-3 py-1 poppins-semibold">
                            <span>
                            <svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g clipPath="url(#clip0_855_4519)">
                            <path fillRule="evenodd" clipRule="evenodd" d="M9.05 12.8C9.93366 12.8 10.65 13.5163 10.65 14.4C10.65 15.2837 9.93366 16 9.05 16C8.16634 16 7.45 15.2837 7.45 14.4C7.45 13.5163 8.16634 12.8 9.05 12.8ZM4.04299 10.4C5.14756 10.4 6.04299 11.2954 6.04299 12.4C6.04299 13.5046 5.14756 14.4 4.04299 14.4C2.93842 14.4 2.04299 13.5046 2.04299 12.4C2.04299 11.2954 2.93842 10.4 4.04299 10.4ZM13.3055 10.8C14.1891 10.8 14.9055 11.5163 14.9055 12.4C14.9055 13.2837 14.1891 14 13.3055 14C12.4218 14 11.7055 13.2837 11.7055 12.4C11.7055 11.5163 12.4218 10.8 13.3055 10.8ZM15.05 7.45483C15.7127 7.45483 16.25 7.99209 16.25 8.65483C16.25 9.31757 15.7127 9.85483 15.05 9.85483C14.3873 9.85483 13.85 9.31757 13.85 8.65483C13.85 7.99209 14.3873 7.45483 15.05 7.45483ZM2.25 4.8C3.35457 4.8 4.25 5.69543 4.25 6.8C4.25 7.90457 3.35457 8.8 2.25 8.8C1.14543 8.8 0.25 7.90457 0.25 6.8C0.25 5.69543 1.14543 4.8 2.25 4.8ZM14.4786 4.1658C14.9205 4.1658 15.2786 4.52397 15.2786 4.9658C15.2786 5.40763 14.9205 5.7658 14.4786 5.7658C14.0368 5.7658 13.6786 5.40763 13.6786 4.9658C13.6786 4.52397 14.0368 4.1658 14.4786 4.1658ZM6.65 0C7.97548 0 9.05 1.07452 9.05 2.4C9.05 3.72548 7.97548 4.8 6.65 4.8C5.32452 4.8 4.25 3.72548 4.25 2.4C4.25 1.07452 5.32452 0 6.65 0ZM12.65 2.4C12.8709 2.4 13.05 2.57909 13.05 2.8C13.05 3.02091 12.8709 3.2 12.65 3.2C12.4291 3.2 12.25 3.02091 12.25 2.8C12.25 2.57909 12.4291 2.4 12.65 2.4Z" fill="#232B31"/>
                            </g>
                            <defs>
                            <clipPath id="clip0_855_4519">
                            <rect width="16" height="16" fill="white" transform="translate(0.25)"/>
                            </clipPath>
                            </defs>
                            </svg>

                            </span>
                            Load More
                            </button>
                        </div>
                        
                    </div>}
              
                </div>
    )
}
export default ActionCards