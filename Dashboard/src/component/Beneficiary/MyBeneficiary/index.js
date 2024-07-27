import BeneficiaryTable from "./BeneficiaryTable.js";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { useAccounts } from "#hooks/index.js";
function MyBeneficiary(){
    const navigate = useNavigate()
    const [beneficiary,setBeneficiary] = useState([
        {
            "id": 1,
            "account_name": "ANANTHARAPU ARUNA THEJASWINI",
            "account_number": "23647586473424574",
            "bank_name": "SBI BANK",
            "ifsc_code": "SBIN02400",
            "bank_account_type": "CURRENT",
            "pan_no": "GGR20493295930",
            "gstin_no": "",
            "created_at": "2024-07-16T12:17:35.140065Z",
            "modified_at": "2024-07-16T12:17:35.140082Z",
            "is_verified": true,
            "user": 2
        }
    ])
    const {handleGetBeneficiary} = useAccounts()
    useEffect(()=>{
        const fetchBeneficiary = async()=>{
            const data = await handleGetBeneficiary()
            setBeneficiary(data)
        }
        fetchBeneficiary()
    },[])
    return(
        <div className="mt-5 bg-primary p-[2rem] rounded-2xl flex flex-col gap-3 w-full">
            <div className="flex justify-between">
                <div className="flex gap-1 items-center">
                    <div className="poppins-semibold">
                       All Beneficiary
                    </div>
                    <div className="text-xs poppins-light text-[#787D81] ">
                        (7)
                    </div>
                </div>
                <div 
                onClick={()=>navigate('/dashboard/beneficiary/add-new')}
                className="flex gap-1 items-center"
                >
                    <div>
                        <svg width="16" height="16" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M9 0C7.21997 0 5.47991 0.527841 3.99987 1.51677C2.51983 2.50571 1.36628 3.91131 0.685088 5.55585C0.00389957 7.20038 -0.17433 9.00998 0.172937 10.7558C0.520204 12.5016 1.37737 14.1053 2.63604 15.364C3.89472 16.6226 5.49836 17.4798 7.24419 17.8271C8.99002 18.1743 10.7996 17.9961 12.4442 17.3149C14.0887 16.6337 15.4943 15.4802 16.4832 14.0001C17.4722 12.5201 18 10.78 18 9C17.9974 6.61384 17.0484 4.32616 15.3611 2.63889C13.6738 0.951621 11.3862 0.00258081 9 0V0ZM12 9.75H9.75V12C9.75 12.1989 9.67099 12.3897 9.53033 12.5303C9.38968 12.671 9.19892 12.75 9 12.75C8.80109 12.75 8.61033 12.671 8.46967 12.5303C8.32902 12.3897 8.25 12.1989 8.25 12V9.75H6C5.80109 9.75 5.61033 9.67098 5.46967 9.53033C5.32902 9.38968 5.25 9.19891 5.25 9C5.25 8.80109 5.32902 8.61032 5.46967 8.46967C5.61033 8.32902 5.80109 8.25 6 8.25H8.25V6C8.25 5.80109 8.32902 5.61032 8.46967 5.46967C8.61033 5.32902 8.80109 5.25 9 5.25C9.19892 5.25 9.38968 5.32902 9.53033 5.46967C9.67099 5.61032 9.75 5.80109 9.75 6V8.25H12C12.1989 8.25 12.3897 8.32902 12.5303 8.46967C12.671 8.61032 12.75 8.80109 12.75 9C12.75 9.19891 12.671 9.38968 12.5303 9.53033C12.3897 9.67098 12.1989 9.75 12 9.75Z" fill="#232B31"/>
                        </svg>
                    </div>
                    <div className="text-xs text-[#787D81] poppins-lights cursor-pointer">
                        Add New Beneficiary
                    </div>
                </div>                
            </div>
           <BeneficiaryTable beneficiary={beneficiary}/> 
           <div className="flex justify-center mt-4 mb-20 md:mb-0">
                <div className="primary-linear-gr-bg p-[2px] rounded-xl">
                <button 
                onClick={()=>navigate('/dashboard/beneficiary/add-new')}
                className="flex items-center gap-2 bg-primary rounded-xl px-3 py-2 poppins-semibold text-sm"
                >
                    <span>
                        <svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" clipRule="evenodd" d="M14.1569 13.6568C11.0327 16.781 5.96731 16.781 2.84315 13.6568C-0.28105 10.5326 -0.281022 5.4673 2.84315 2.34313C5.96734 -0.781062 11.0327 -0.781062 14.1569 2.34313C17.281 5.4673 17.281 10.5326 14.1569 13.6568ZM8.49999 4.57153C8.83136 4.57153 9.09998 4.84015 9.09999 5.17153L9.10002 7.39996L11.3284 7.39995C11.6598 7.39995 11.9284 7.6686 11.9284 7.99997C11.9284 8.33134 11.6598 8.59998 11.3284 8.59995H9.09997L9.10002 10.8284C9.10002 11.1597 8.83138 11.4284 8.5 11.4284C8.16862 11.4284 7.89998 11.1597 7.89998 10.8284V8.60001L5.67157 8.59995C5.34021 8.59996 5.07157 8.33133 5.07158 7.99996C5.07158 7.66859 5.34023 7.39994 5.67154 7.39999L7.89998 7.39996L7.89999 5.17152C7.89998 4.84015 8.16862 4.57152 8.49999 4.57153Z" fill="#232B31"/>
                        </svg>
                    </span>
                        Add New Beneficiary
                    </button>
                </div>
                        
            </div>

        </div>
    )
}
export default MyBeneficiary;