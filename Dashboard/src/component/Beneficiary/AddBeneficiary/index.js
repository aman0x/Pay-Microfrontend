import { FaCircleArrowRight,FaSquare } from "react-icons/fa6"
import { useState } from "react"
import "./style.css"
import AddBeneficiaryStep2 from "./AddBeneficiarytStep2"


function AddNewBeneficiary({isRepeatPayment=false}){

    const [stepIndex,setStepIndex] = useState(0)
    const [isValid,setIsValid] = useState({
        accountName:true,
        accountNumber:true,
        ifscCode:true,
        allValid:false
    })
    const [accountName,setAccountName] = useState('')
    const [accountNumber,setAccountNumber] = useState('')
    const [ifscCode,setIfscCode] = useState('')

    return(
        <div className="mt-5 bg-primary p-[2rem] rounded-2xl flex flex-col gap-3 w-full ">
            <div className="flex justify-around gap-2">
                <hr className={`my-2 max-w-[20%] ${stepIndex>0? "hr-gradient":"w-full border-t-2 border-gray-200"}`}/>
                <div  className="flex flex-col items-center gap-1"> 
                    {
                        stepIndex<=0?
                        <div className="p-2">
                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" clipRule="evenodd" d="M16 8C16 12.4182 12.4182 16 8 16C3.58172 16 0 12.4182 0 8C0 3.58172 3.58172 0 8 0C12.4182 0 16 3.58172 16 8ZM11.2242 5.57574C11.4586 5.81005 11.4586 6.18995 11.2242 6.42424L7.22424 10.4242C6.98992 10.6586 6.61008 10.6586 6.37574 10.4242L4.77574 8.82424C4.54142 8.58992 4.54142 8.21008 4.77574 7.97576C5.01005 7.74144 5.38995 7.74144 5.62426 7.97576L6.8 9.15144L8.58784 7.3636L10.3758 5.57574C10.6101 5.34142 10.9899 5.34142 11.2242 5.57574Z" fill={stepIndex===0?"#232B31":"#B6B8BA"} />
                            </svg>
                        </div>
                        :
                        <div>
                            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" clipRule="evenodd" d="M17 9C17 13.4182 13.4182 17 9 17C4.58172 17 1 13.4182 1 9C1 4.58172 4.58172 1 9 1C13.4182 1 17 4.58172 17 9ZM12.2242 6.57574C12.4586 6.81005 12.4586 7.18995 12.2242 7.42424L8.22424 11.4242C7.98992 11.6586 7.61008 11.6586 7.37574 11.4242L5.77574 9.82424C5.54142 9.58992 5.54142 9.21008 5.77574 8.97576C6.01005 8.74144 6.38995 8.74144 6.62426 8.97576L7.8 10.1514L9.58784 8.3636L11.3758 6.57574C11.6101 6.34142 11.9899 6.34142 12.2242 6.57574Z" fill="url(#paint0_linear_1298_2821)"/>
                            <defs>
                            <linearGradient id="paint0_linear_1298_2821" x1="-1.55083" y1="10.4222" x2="19.666" y2="5.56723" gradientUnits="userSpaceOnUse">
                            <stop stopColor="#F6DEC6"/>
                            <stop offset="0.47" stopColor="#E872D4"/>
                            <stop offset="0.656667" stopColor="#C190D9"/>
                            <stop offset="0.881578" stopColor="#A2DCFE"/>
                            </linearGradient>
                            </defs>
                            </svg>
                        </div>

                    }
                    <div className="poppins-regular text-xs flex gap-1">
                        Step <div>1</div>
                    </div>
                </div>
                <hr className={`my-2 ${stepIndex>0? "hr-gradient":"w-full border-t-2 border-gray-200"}`}/>
                <div className="flex flex-col items-center gap-1">
                    {
                        stepIndex<=1?
                        <div className="p-2">
                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" clipRule="evenodd" d="M16 8C16 12.4182 12.4182 16 8 16C3.58172 16 0 12.4182 0 8C0 3.58172 3.58172 0 8 0C12.4182 0 16 3.58172 16 8ZM11.2242 5.57574C11.4586 5.81005 11.4586 6.18995 11.2242 6.42424L7.22424 10.4242C6.98992 10.6586 6.61008 10.6586 6.37574 10.4242L4.77574 8.82424C4.54142 8.58992 4.54142 8.21008 4.77574 7.97576C5.01005 7.74144 5.38995 7.74144 5.62426 7.97576L6.8 9.15144L8.58784 7.3636L10.3758 5.57574C10.6101 5.34142 10.9899 5.34142 11.2242 5.57574Z" fill={stepIndex===0?"#232B31":"#B6B8BA"} />
                            </svg>
                        </div>
                        :
                        <div>
                            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" clipRule="evenodd" d="M17 9C17 13.4182 13.4182 17 9 17C4.58172 17 1 13.4182 1 9C1 4.58172 4.58172 1 9 1C13.4182 1 17 4.58172 17 9ZM12.2242 6.57574C12.4586 6.81005 12.4586 7.18995 12.2242 7.42424L8.22424 11.4242C7.98992 11.6586 7.61008 11.6586 7.37574 11.4242L5.77574 9.82424C5.54142 9.58992 5.54142 9.21008 5.77574 8.97576C6.01005 8.74144 6.38995 8.74144 6.62426 8.97576L7.8 10.1514L9.58784 8.3636L11.3758 6.57574C11.6101 6.34142 11.9899 6.34142 12.2242 6.57574Z" fill="url(#paint0_linear_1298_2821)"/>
                            <defs>
                            <linearGradient id="paint0_linear_1298_2821" x1="-1.55083" y1="10.4222" x2="19.666" y2="5.56723" gradientUnits="userSpaceOnUse">
                            <stop stopColor="#F6DEC6"/>
                            <stop offset="0.47" stopColor="#E872D4"/>
                            <stop offset="0.656667" stopColor="#C190D9"/>
                            <stop offset="0.881578" stopColor="#A2DCFE"/>
                            </linearGradient>
                            </defs>
                            </svg>
                        </div>

                    }
                    <div className="poppins-regular text-xs  flex gap-1">
                        Step <div>2</div>
                    </div>
                </div>
                <hr className={`my-2 max-w-[20%] ${stepIndex>1? "hr-gradient":"w-full border-t-2 border-gray-200"}`}/>
            </div>
            {
                stepIndex===0 &&
                <div className="mx-auto w-[50%] flex flex-col gap-8 mt-4">
                <div className="text-center poppins-semibold">Enter Data</div>
                <div className="flex flex-col gap-2">
                    <div className="relative">
                        <input type="text" value={accountName} onChange={(e)=>setAccountName(e.target.value)}  className=" bg-white border border-gray-300 text-gray-900 text-sm rounded-2xl w-full ps-14 p-3.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Enter Account Name"/>
                        {
                           !isValid.accountName? 
                            <div className="absolute inset-y-0 end-1 flex items-center pe-3">
                            <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" clipRule="evenodd" d="M11.8332 6.00008C11.8332 9.22171 9.22147 11.8334 5.99984 11.8334C2.77817 11.8334 0.166504 9.22171 0.166504 6.00008C0.166504 2.77842 2.77817 0.166748 5.99984 0.166748C9.22147 0.166748 11.8332 2.77842 11.8332 6.00008ZM5.99984 9.35425C6.24145 9.35425 6.43734 9.15837 6.43734 8.91675V5.41675C6.43734 5.17513 6.24145 4.97925 5.99984 4.97925C5.75822 4.97925 5.56234 5.17513 5.56234 5.41675V8.91675C5.56234 9.15837 5.75822 9.35425 5.99984 9.35425ZM5.99984 3.08342C6.32201 3.08342 6.58317 3.34458 6.58317 3.66675C6.58317 3.98891 6.32201 4.25008 5.99984 4.25008C5.67766 4.25008 5.4165 3.98891 5.4165 3.66675C5.4165 3.34458 5.67766 3.08342 5.99984 3.08342Z" fill="#E45757"/>
                            </svg>
                            </div>
                            :null
                        }
                    </div>
                    <div className="relative">
                        <input type="number" value={accountNumber} onChange={(e)=>setAccountNumber(e.target.value)}   className=" bg-white border border-gray-300 text-gray-900 text-sm rounded-2xl w-full ps-14 p-3.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Enter Account Number"/>
                        {
                           !isValid.accountNumber? 
                            <div className="absolute inset-y-0 end-1 flex items-center pe-3">
                            <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" clipRule="evenodd" d="M11.8332 6.00008C11.8332 9.22171 9.22147 11.8334 5.99984 11.8334C2.77817 11.8334 0.166504 9.22171 0.166504 6.00008C0.166504 2.77842 2.77817 0.166748 5.99984 0.166748C9.22147 0.166748 11.8332 2.77842 11.8332 6.00008ZM5.99984 9.35425C6.24145 9.35425 6.43734 9.15837 6.43734 8.91675V5.41675C6.43734 5.17513 6.24145 4.97925 5.99984 4.97925C5.75822 4.97925 5.56234 5.17513 5.56234 5.41675V8.91675C5.56234 9.15837 5.75822 9.35425 5.99984 9.35425ZM5.99984 3.08342C6.32201 3.08342 6.58317 3.34458 6.58317 3.66675C6.58317 3.98891 6.32201 4.25008 5.99984 4.25008C5.67766 4.25008 5.4165 3.98891 5.4165 3.66675C5.4165 3.34458 5.67766 3.08342 5.99984 3.08342Z" fill="#E45757"/>
                            </svg>
                            </div>
                            :null
                        }
                    </div>
                    <div className="relative">
                        <input type="text" value={ifscCode} onChange={(e)=>setIfscCode(e.target.value)}   className=" bg-white border border-gray-300 text-gray-900 text-sm rounded-2xl w-full ps-14 p-3.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="IFSC Code"/>
                        {
                           !isValid.ifscCode? 
                            <div className="absolute inset-y-0 end-1 flex items-center pe-3">
                            <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" clipRule="evenodd" d="M11.8332 6.00008C11.8332 9.22171 9.22147 11.8334 5.99984 11.8334C2.77817 11.8334 0.166504 9.22171 0.166504 6.00008C0.166504 2.77842 2.77817 0.166748 5.99984 0.166748C9.22147 0.166748 11.8332 2.77842 11.8332 6.00008ZM5.99984 9.35425C6.24145 9.35425 6.43734 9.15837 6.43734 8.91675V5.41675C6.43734 5.17513 6.24145 4.97925 5.99984 4.97925C5.75822 4.97925 5.56234 5.17513 5.56234 5.41675V8.91675C5.56234 9.15837 5.75822 9.35425 5.99984 9.35425ZM5.99984 3.08342C6.32201 3.08342 6.58317 3.34458 6.58317 3.66675C6.58317 3.98891 6.32201 4.25008 5.99984 4.25008C5.67766 4.25008 5.4165 3.98891 5.4165 3.66675C5.4165 3.34458 5.67766 3.08342 5.99984 3.08342Z" fill="#E45757"/>
                            </svg>
                            </div>
                            :null
                        }
                    </div>
                    { !isValid.allValid &&
                    <div className="flex gap-3 justify-center">
                        <div>
                            <svg width="15" height="16" viewBox="0 0 15 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" clipRule="evenodd" d="M15 8C15 12.1421 11.6421 15.5 7.5 15.5C3.35786 15.5 0 12.1421 0 8C0 3.85786 3.35786 0.5 7.5 0.5C11.6421 0.5 15 3.85786 15 8ZM7.5 12.3125C7.81065 12.3125 8.0625 12.0606 8.0625 11.75V7.25C8.0625 6.93935 7.81065 6.6875 7.5 6.6875C7.18935 6.6875 6.9375 6.93935 6.9375 7.25V11.75C6.9375 12.0606 7.18935 12.3125 7.5 12.3125ZM7.5 4.25C7.91423 4.25 8.25 4.58579 8.25 5C8.25 5.41421 7.91423 5.75 7.5 5.75C7.08577 5.75 6.75 5.41421 6.75 5C6.75 4.58579 7.08577 4.25 7.5 4.25Z" fill="#E45757"/>
                            </svg>
                        </div>
                        <div className="text-xs text-[#E45757]">Mandatory for Filling</div> 
                    </div>}
                </div>
                <div className=''>
                    <button type="submit"
                        onClick={() => {
                            if(accountName.length<4){
                                setIsValid({
                                    ...isValid,
                                    accountName:false
                                })
                            }
                            else if(accountNumber.length<11){
                                setIsValid({
                                    ...isValid,
                                    accountNumber:false
                                })
                            }
                            else if(ifscCode.length<4){
                                setIsValid({
                                    ...isValid,
                                    ifscCode:false
                                })
                            }
                            else{
                                setIsValid({
                                    ...isValid,
                                   allValid:true
                                })
                                setStepIndex(1)
                            }
                        }}
                        className="flex primary-btn items-center w-full justify-center rounded-xl bg-gray-950 px-3 p-4 text-sm font-semibold leading-7 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"><div>{"Next Step"}</div>
                    <span className='py-1.5 pl-2 size-6'><FaCircleArrowRight style={{color:'white'}} /></span></button>
                </div>
                
                </div>
            }

            {
                stepIndex===1 &&
                <AddBeneficiaryStep2 data={{
                    account_name:accountName,
                    account_number:accountNumber,
                    ifsc_code:ifscCode,
                    user:2
                }}/> 
            }
                
           
        </div>
    )
}


export default AddNewBeneficiary;