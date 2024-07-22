import { useAccounts } from "#hooks/index"
import { FaCircleArrowRight } from "react-icons/fa6"
function AddBeneficiaryStep2({data}){
        const {handleAddBeneficiaryBank} = useAccounts()

    return(
        <div className="flx flex-col">
            <div className="text-center poppins-semibold">Confirm Details</div>
            <div className="flex flex-col gap-4 bg-white rounded-2xl p-6 my-10">
            <div className="text-[#4E5459] text-sm poppins-semibold">Account Details:</div>
            <div className="flex flex-col gap-1">
            <div className="flex gap-2 items-center">
                    <div className="text-[#A3A6A9] text-sm">Name</div>
                    <hr className="my-2 w-full border-t-2 border-dashed border-[#CDCED1]"/>
                    <div className="poppins-semibold min-w-fit text-sm">{data.account_name}</div>
            </div>
            <div className="flex gap-2 items-center">
                    <div className="text-[#A3A6A9] text-sm">Verification</div>
                    <hr className="my-2 w-full border-t-2 border-dashed border-[#CDCED1]"/>
                    <div className="poppins-semibold text-sm">
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" clipRule="evenodd" d="M16 8C16 12.4182 12.4182 16 8 16C3.58172 16 0 12.4182 0 8C0 3.58172 3.58172 0 8 0C12.4182 0 16 3.58172 16 8ZM11.2242 5.57574C11.4586 5.81005 11.4586 6.18995 11.2242 6.42424L7.22424 10.4242C6.98992 10.6586 6.61008 10.6586 6.37574 10.4242L4.77574 8.82424C4.54142 8.58992 4.54142 8.21008 4.77574 7.97576C5.01005 7.74144 5.38995 7.74144 5.62426 7.97576L6.8 9.15144L8.58784 7.3636L10.3758 5.57574C10.6101 5.34142 10.9899 5.34142 11.2242 5.57574Z" fill="#27A963"/>
                        </svg>

                    </div>
            </div>
            <div className="flex gap-2 items-center">
                    <div className="text-[#A3A6A9] text-sm">No</div>
                    <hr className="my-2 w-full border-t-2 border-dashed border-[#CDCED1]"/>
                    <div className="poppins-semibold text-sm">{data.phone_number}</div>
            </div>
            </div>
            <div className="text-[#4E5459] text-sm poppins-semibold">Bank Details:</div>
            <div className="flex flex-col gap-1">
                <div className="flex gap-2 items-center">
                    <div className="text-[#A3A6A9] text-sm min-w-fit">A/C No</div>
                    <hr className="my-2 w-full border-t-2 border-dashed border-[#CDCED1]"/>
                    <div className="poppins-semibold text-sm">{data.account_number}</div>
            </div>
            <div className="flex gap-2 items-center">
                    <div className="text-[#A3A6A9] text-sm">Bank</div>
                    <hr className="my-2 w-full border-t-2 border-dashed border-[#CDCED1]"/>
                    <div className="poppins-semibold text-sm">{data.bank_name}</div>
            </div>
            <div className="flex gap-2 items-center">
                    <div className="text-[#A3A6A9] text-sm min-w-fit">IFS Code</div>
                    <hr className="my-2 w-full border-t-2 border-dashed border-[#CDCED1]"/>
                    <div className="poppins-semibold text-sm">{data.ifsc_code}</div>
            </div>
            <div className="flex gap-2 items-center">
                    <div className="text-[#A3A6A9] text-sm min-w-fit">Bank Account Type</div>
                    <hr className="my-2 w-full border-t-2 border-dashed border-[#CDCED1]"/>
                    <div className="poppins-semibold text-sm">{data.account_type_2}</div>
            </div>
            <div className="flex gap-2 items-center">
                    <div className="text-[#A3A6A9] text-sm min-w-fit">PAN</div>
                    <hr className="my-2 w-full border-t-2 border-dashed border-[#CDCED1]"/>
                    <div className="poppins-semibold text-sm">{data.pan_no}</div>
            </div>
            <div className="flex gap-2 items-center">
                    <div className="text-[#A3A6A9] text-sm min-w-fit">GSTIN</div>
                    <hr className="my-2 w-full border-t-2 border-dashed border-[#CDCED1]"/>
                    <div className="poppins-semibold text-sm">{data.gstin_no}</div>
            </div>
            
            </div>
       
            </div>
            <div className='w-[50%] mx-auto'>
                    <button type="submit"
                        onClick={() => {
                            handleAddBeneficiaryBank(data,data.id)
                        }}
                        className="flex primary-btn items-center w-full justify-center rounded-xl bg-gray-950 px-3 p-4 text-sm font-semibold leading-7 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"><div>{"Confirm And Add"}</div>
                    <span className='py-1.5 pl-2 size-6'><FaCircleArrowRight style={{color:'white'}} /></span></button>
            </div>
        </div>
        
    )
}
export default AddBeneficiaryStep2