import { IoAddCircleSharp } from "react-icons/io5";
import { BsBank2 } from "react-icons/bs";
const DUMMY_BANKS = [
    {
        bankName:" HDFC Bank, KODAK",
        IFSC_CODE:" HDFC000162",
        userName:"ANANTHARAPU ARUNA THEJASWINI"
    },
    {
        bankName:" HDFC Bank, KODAK",
        IFSC_CODE:" HDFC000162",
        userName:"RAJIV MEHTA"
    }
]

function Templates(){
    return(
        <div className="w-[30rem]  ">
            <div className="flex justify-between mb-4">
                <p className="poppins-semibold">My Templates</p>
                <div className="flex text-xs gap-1 items-center">
                <IoAddCircleSharp size="14px" />
                <p className="poppins-light text-gray-500">Create</p>
                </div>
            </div>
            <div className="flex flex-col gap-3">
            {
                DUMMY_BANKS.map((bank)=>{
                    return(
                        <div className="flex flex-col bg-white p-[1.2rem] rounded-xl min-h-[5.6rem] justify-between">
                            <div className="flex justify-between poppins-regular text-xs text-gray-600">
                                <div className="flex gap-2">
                                <BsBank2 color="gray" />
                                {bank.bankName}
                                </div>
                                <div>
                                   {bank.IFSC_CODE}
                                </div>
                            </div>
                            <div className="flex justify-between">
                                <div className="poppins-semibold text-sm">
                                {bank.userName}
                                </div>
                                <a href="#" className="underline text-gray-500 poppins-light text-sm">
                                    Make Payment
                                </a>
                                
                            </div>

                        </div>
                    )
                })
            }
            </div>
            
        </div>
    )
}

export default Templates;