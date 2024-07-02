import { FaCircleArrowRight } from "react-icons/fa6"
function AddNewAccountStep2(){
    return(
        <div className="flx flex-col">
            <div className="text-center poppins-semibold">Confirm Details</div>
            <div className="flex flex-col gap-4 bg-white rounded-2xl p-6 my-10">
            <div className="text-[#4E5459] text-sm poppins-semibold">Account Details:</div>
            <div className="flex flex-col gap-1">
            <div className="flex gap-2 items-center">
                    <div className="text-[#A3A6A9] text-sm">Name</div>
                    <hr className="my-2 w-full border-t-2 border-dashed border-[#CDCED1]"/>
                    <div className="poppins-semibold min-w-fit text-sm">ANANTHARAPU ARUNA THEJASWINI</div>
            </div>
            <div className="flex gap-2 items-center">
                    <div className="text-[#A3A6A9] text-sm">Type</div>
                    <hr className="my-2 w-full border-t-2 border-dashed border-[#CDCED1]"/>
                    <div className="poppins-semibold text-sm">Savings</div>
            </div>
            </div>
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
            <div className="flex gap-2 items-center">
                    <div className="text-[#A3A6A9] text-sm min-w-fit">Bank Account Type</div>
                    <hr className="my-2 w-full border-t-2 border-dashed border-[#CDCED1]"/>
                    <div className="poppins-semibold text-sm">HDFC0003242</div>
            </div>
            <div className="flex gap-2 items-center">
                    <div className="text-[#A3A6A9] text-sm min-w-fit">PAN</div>
                    <hr className="my-2 w-full border-t-2 border-dashed border-[#CDCED1]"/>
                    <div className="poppins-semibold text-sm">HDFC0003242</div>
            </div>
            <div className="flex gap-2 items-center">
                    <div className="text-[#A3A6A9] text-sm min-w-fit">GSTIN</div>
                    <hr className="my-2 w-full border-t-2 border-dashed border-[#CDCED1]"/>
                    <div className="poppins-semibold text-sm">HDFC0003242</div>
            </div>
            
            </div>
       
            </div>
            <div className='w-[50%] mx-auto'>
                    <button type="submit"
                        onClick={() => {
                            //setStepIndex(1)
                        //navigate('/accounts/type')
                        // withEmail ? handleUserLoginWithEmail():handleLoginWithPhone()
                        }}
                        className="flex primary-btn items-center w-full justify-center rounded-xl bg-gray-950 px-3 p-4 text-sm font-semibold leading-7 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"><div>{"Confirm And Add"}</div>
                    <span className='py-1.5 pl-2 size-6'><FaCircleArrowRight style={{color:'white'}} /></span></button>
            </div>
        </div>
        
    )
}
export default AddNewAccountStep2