import { FaCircleArrowRight,FaSquare } from "react-icons/fa6"
import { useState } from "react"
import "./style.css"
import AddNewAccountStep2 from "./AddAccountStep2"

const cards = ['**** **** **** 1001','**** **** **** 1001','**** **** **** 1001','**** **** **** 1001']
function AddNewAccount({isRepeatPayment=false}){
    const [isPaymentTypeMenu,setPaymentMenuView] = useState(false)
    const [isReceiverMenu,setReceiversMenuView] = useState(false)
    const [stepIndex,setStepIndex] = useState(0)

    return(
        <div className="mt-5 bg-primary p-[2rem] rounded-2xl flex flex-col gap-3 w-full ">
            <div className="flex justify-around gap-2">
                <hr className={`my-2 max-w-[20%] ${stepIndex>0? "hr-gradient":"w-full border-t-2 border-gray-200"}`}/>
                <div  className="flex flex-col items-center gap-1"> 
                    {
                        stepIndex<=0?
                        <div className="p-2">
                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M16 8C16 12.4182 12.4182 16 8 16C3.58172 16 0 12.4182 0 8C0 3.58172 3.58172 0 8 0C12.4182 0 16 3.58172 16 8ZM11.2242 5.57574C11.4586 5.81005 11.4586 6.18995 11.2242 6.42424L7.22424 10.4242C6.98992 10.6586 6.61008 10.6586 6.37574 10.4242L4.77574 8.82424C4.54142 8.58992 4.54142 8.21008 4.77574 7.97576C5.01005 7.74144 5.38995 7.74144 5.62426 7.97576L6.8 9.15144L8.58784 7.3636L10.3758 5.57574C10.6101 5.34142 10.9899 5.34142 11.2242 5.57574Z" fill={stepIndex===0?"#232B31":"#B6B8BA"} />
                            </svg>
                        </div>
                        :
                        <div>
                            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M17 9C17 13.4182 13.4182 17 9 17C4.58172 17 1 13.4182 1 9C1 4.58172 4.58172 1 9 1C13.4182 1 17 4.58172 17 9ZM12.2242 6.57574C12.4586 6.81005 12.4586 7.18995 12.2242 7.42424L8.22424 11.4242C7.98992 11.6586 7.61008 11.6586 7.37574 11.4242L5.77574 9.82424C5.54142 9.58992 5.54142 9.21008 5.77574 8.97576C6.01005 8.74144 6.38995 8.74144 6.62426 8.97576L7.8 10.1514L9.58784 8.3636L11.3758 6.57574C11.6101 6.34142 11.9899 6.34142 12.2242 6.57574Z" fill="url(#paint0_linear_1298_2821)"/>
                            <defs>
                            <linearGradient id="paint0_linear_1298_2821" x1="-1.55083" y1="10.4222" x2="19.666" y2="5.56723" gradientUnits="userSpaceOnUse">
                            <stop stop-color="#F6DEC6"/>
                            <stop offset="0.47" stop-color="#E872D4"/>
                            <stop offset="0.656667" stop-color="#C190D9"/>
                            <stop offset="0.881578" stop-color="#A2DCFE"/>
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
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M16 8C16 12.4182 12.4182 16 8 16C3.58172 16 0 12.4182 0 8C0 3.58172 3.58172 0 8 0C12.4182 0 16 3.58172 16 8ZM11.2242 5.57574C11.4586 5.81005 11.4586 6.18995 11.2242 6.42424L7.22424 10.4242C6.98992 10.6586 6.61008 10.6586 6.37574 10.4242L4.77574 8.82424C4.54142 8.58992 4.54142 8.21008 4.77574 7.97576C5.01005 7.74144 5.38995 7.74144 5.62426 7.97576L6.8 9.15144L8.58784 7.3636L10.3758 5.57574C10.6101 5.34142 10.9899 5.34142 11.2242 5.57574Z" fill={stepIndex===0?"#232B31":"#B6B8BA"} />
                            </svg>
                        </div>
                        :
                        <div>
                            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M17 9C17 13.4182 13.4182 17 9 17C4.58172 17 1 13.4182 1 9C1 4.58172 4.58172 1 9 1C13.4182 1 17 4.58172 17 9ZM12.2242 6.57574C12.4586 6.81005 12.4586 7.18995 12.2242 7.42424L8.22424 11.4242C7.98992 11.6586 7.61008 11.6586 7.37574 11.4242L5.77574 9.82424C5.54142 9.58992 5.54142 9.21008 5.77574 8.97576C6.01005 8.74144 6.38995 8.74144 6.62426 8.97576L7.8 10.1514L9.58784 8.3636L11.3758 6.57574C11.6101 6.34142 11.9899 6.34142 12.2242 6.57574Z" fill="url(#paint0_linear_1298_2821)"/>
                            <defs>
                            <linearGradient id="paint0_linear_1298_2821" x1="-1.55083" y1="10.4222" x2="19.666" y2="5.56723" gradientUnits="userSpaceOnUse">
                            <stop stop-color="#F6DEC6"/>
                            <stop offset="0.47" stop-color="#E872D4"/>
                            <stop offset="0.656667" stop-color="#C190D9"/>
                            <stop offset="0.881578" stop-color="#A2DCFE"/>
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
                        <input type="text" id="input-group-1" className=" bg-white border border-gray-300 text-gray-900 text-sm rounded-2xl w-full ps-14 p-3.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Enter Account Name"/>
                        <div className="absolute inset-y-0 end-1 flex items-center pe-3">
                            <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M11.8332 6.00008C11.8332 9.22171 9.22147 11.8334 5.99984 11.8334C2.77817 11.8334 0.166504 9.22171 0.166504 6.00008C0.166504 2.77842 2.77817 0.166748 5.99984 0.166748C9.22147 0.166748 11.8332 2.77842 11.8332 6.00008ZM5.99984 9.35425C6.24145 9.35425 6.43734 9.15837 6.43734 8.91675V5.41675C6.43734 5.17513 6.24145 4.97925 5.99984 4.97925C5.75822 4.97925 5.56234 5.17513 5.56234 5.41675V8.91675C5.56234 9.15837 5.75822 9.35425 5.99984 9.35425ZM5.99984 3.08342C6.32201 3.08342 6.58317 3.34458 6.58317 3.66675C6.58317 3.98891 6.32201 4.25008 5.99984 4.25008C5.67766 4.25008 5.4165 3.98891 5.4165 3.66675C5.4165 3.34458 5.67766 3.08342 5.99984 3.08342Z" fill="#E45757"/>
                            </svg>
                        </div>
                    </div>
                    <div className="relative">
                        <input type="text" id="input-group-1" className=" bg-white border border-gray-300 text-gray-900 text-sm rounded-2xl w-full ps-14 p-3.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Enter Account Number"/>
                        <div className="absolute inset-y-0 end-1 flex items-center pe-3">
                            <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M11.8332 6.00008C11.8332 9.22171 9.22147 11.8334 5.99984 11.8334C2.77817 11.8334 0.166504 9.22171 0.166504 6.00008C0.166504 2.77842 2.77817 0.166748 5.99984 0.166748C9.22147 0.166748 11.8332 2.77842 11.8332 6.00008ZM5.99984 9.35425C6.24145 9.35425 6.43734 9.15837 6.43734 8.91675V5.41675C6.43734 5.17513 6.24145 4.97925 5.99984 4.97925C5.75822 4.97925 5.56234 5.17513 5.56234 5.41675V8.91675C5.56234 9.15837 5.75822 9.35425 5.99984 9.35425ZM5.99984 3.08342C6.32201 3.08342 6.58317 3.34458 6.58317 3.66675C6.58317 3.98891 6.32201 4.25008 5.99984 4.25008C5.67766 4.25008 5.4165 3.98891 5.4165 3.66675C5.4165 3.34458 5.67766 3.08342 5.99984 3.08342Z" fill="#E45757"/>
                            </svg>
                        </div>
                    </div>
                    <div className="relative">
                        <input type="text" id="input-group-1" className=" bg-white border border-gray-300 text-gray-900 text-sm rounded-2xl w-full ps-14 p-3.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="IFSC Code"/>
                        <div className="absolute inset-y-0 end-1 flex items-center pe-3">
                            <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M11.8332 6.00008C11.8332 9.22171 9.22147 11.8334 5.99984 11.8334C2.77817 11.8334 0.166504 9.22171 0.166504 6.00008C0.166504 2.77842 2.77817 0.166748 5.99984 0.166748C9.22147 0.166748 11.8332 2.77842 11.8332 6.00008ZM5.99984 9.35425C6.24145 9.35425 6.43734 9.15837 6.43734 8.91675V5.41675C6.43734 5.17513 6.24145 4.97925 5.99984 4.97925C5.75822 4.97925 5.56234 5.17513 5.56234 5.41675V8.91675C5.56234 9.15837 5.75822 9.35425 5.99984 9.35425ZM5.99984 3.08342C6.32201 3.08342 6.58317 3.34458 6.58317 3.66675C6.58317 3.98891 6.32201 4.25008 5.99984 4.25008C5.67766 4.25008 5.4165 3.98891 5.4165 3.66675C5.4165 3.34458 5.67766 3.08342 5.99984 3.08342Z" fill="#E45757"/>
                            </svg>
                        </div>
                    </div>
                    <div className="relative">
                        <div className="relative">
                            
                            <input type="text" id="voice-search" className=" bg-white border border-gray-300 text-gray-900 text-sm rounded-2xl w-full ps-14 p-3.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Set Account Type"  />
                            <button type="button" className="absolute inset-y-0 end-0 flex items-center pe-3" onClick={()=>setReceiversMenuView(!isReceiverMenu)}>
                                <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <rect x="18" width="18" height="18" rx="8" transform="rotate(90 18 0)" fill="#DFE0E2"/>
                                <path d="M11 8L9 10L7 8" stroke="#4E5459" stroke-width="1.5" stroke-linecap="round"/>
                                </svg>
                            </button>
                            
                        </div>
                        {isReceiverMenu && <ReceiversMenu/>}
                    </div> 

                    <div className="relative">
                        <div className="relative">
                    
                        <input type="text" id="voice-search" className=" bg-white border border-gray-300 text-gray-900 text-sm rounded-2xl w-full ps-14 p-3.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Set Account Type" required />
                        <button type="button" className="absolute inset-y-0 end-0 flex items-center pe-3" onClick={()=>setPaymentMenuView(!isPaymentTypeMenu)}>
                            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect x="18" width="18" height="18" rx="8" transform="rotate(90 18 0)" fill="#DFE0E2"/>
                            <path d="M11 8L9 10L7 8" stroke="#4E5459" stroke-width="1.5" stroke-linecap="round"/>
                            </svg>
                        </button>
                        
                        </div>
                   
                    {isPaymentTypeMenu && <PaymentTypeMenu/>}
                    </div>
                    <div className="relative">
                        <input type="text" id="input-group-1" className=" bg-white border border-gray-300 text-gray-900 text-sm rounded-2xl w-full ps-14 p-3.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="PAN"/>
                        <div className="absolute inset-y-0 end-1 flex items-center pe-3">
                            <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M11.8332 6.00008C11.8332 9.22171 9.22147 11.8334 5.99984 11.8334C2.77817 11.8334 0.166504 9.22171 0.166504 6.00008C0.166504 2.77842 2.77817 0.166748 5.99984 0.166748C9.22147 0.166748 11.8332 2.77842 11.8332 6.00008ZM5.99984 9.35425C6.24145 9.35425 6.43734 9.15837 6.43734 8.91675V5.41675C6.43734 5.17513 6.24145 4.97925 5.99984 4.97925C5.75822 4.97925 5.56234 5.17513 5.56234 5.41675V8.91675C5.56234 9.15837 5.75822 9.35425 5.99984 9.35425ZM5.99984 3.08342C6.32201 3.08342 6.58317 3.34458 6.58317 3.66675C6.58317 3.98891 6.32201 4.25008 5.99984 4.25008C5.67766 4.25008 5.4165 3.98891 5.4165 3.66675C5.4165 3.34458 5.67766 3.08342 5.99984 3.08342Z" fill="#E45757"/>
                            </svg>
                        </div>
                    </div>
                    <div className="relative">
                        <input type="text" id="input-group-1" className=" bg-white border border-gray-300 text-gray-900 text-sm rounded-2xl w-full ps-14 p-3.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="GSTIN"/>
                        <div className="absolute inset-y-0 end-1 flex items-center pe-3">
                            <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M11.8332 6.00008C11.8332 9.22171 9.22147 11.8334 5.99984 11.8334C2.77817 11.8334 0.166504 9.22171 0.166504 6.00008C0.166504 2.77842 2.77817 0.166748 5.99984 0.166748C9.22147 0.166748 11.8332 2.77842 11.8332 6.00008ZM5.99984 9.35425C6.24145 9.35425 6.43734 9.15837 6.43734 8.91675V5.41675C6.43734 5.17513 6.24145 4.97925 5.99984 4.97925C5.75822 4.97925 5.56234 5.17513 5.56234 5.41675V8.91675C5.56234 9.15837 5.75822 9.35425 5.99984 9.35425ZM5.99984 3.08342C6.32201 3.08342 6.58317 3.34458 6.58317 3.66675C6.58317 3.98891 6.32201 4.25008 5.99984 4.25008C5.67766 4.25008 5.4165 3.98891 5.4165 3.66675C5.4165 3.34458 5.67766 3.08342 5.99984 3.08342Z" fill="#E45757"/>
                            </svg>
                        </div>
                    </div>
                    <div className="flex gap-3 justify-center">
                        <div>
                            <svg width="15" height="16" viewBox="0 0 15 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M15 8C15 12.1421 11.6421 15.5 7.5 15.5C3.35786 15.5 0 12.1421 0 8C0 3.85786 3.35786 0.5 7.5 0.5C11.6421 0.5 15 3.85786 15 8ZM7.5 12.3125C7.81065 12.3125 8.0625 12.0606 8.0625 11.75V7.25C8.0625 6.93935 7.81065 6.6875 7.5 6.6875C7.18935 6.6875 6.9375 6.93935 6.9375 7.25V11.75C6.9375 12.0606 7.18935 12.3125 7.5 12.3125ZM7.5 4.25C7.91423 4.25 8.25 4.58579 8.25 5C8.25 5.41421 7.91423 5.75 7.5 5.75C7.08577 5.75 6.75 5.41421 6.75 5C6.75 4.58579 7.08577 4.25 7.5 4.25Z" fill="#E45757"/>
                            </svg>
                        </div>
                        <div className="text-xs text-[#E45757]">Mandatory for Filling</div> 
                    </div>
                </div>
                
                <div className=''>
                    <button type="submit"
                        onClick={() => {
                            setStepIndex(1)
                        //navigate('/accounts/type')
                        // withEmail ? handleUserLoginWithEmail():handleLoginWithPhone()
                        }}
                        className="flex primary-btn items-center w-full justify-center rounded-xl bg-gray-950 px-3 p-4 text-sm font-semibold leading-7 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"><div>{"Next Step"}</div>
                    <span className='py-1.5 pl-2 size-6'><FaCircleArrowRight style={{color:'white'}} /></span></button>
                </div>
                
                </div>
            }
            {
                stepIndex===1 &&
                <AddNewAccountStep2/>
                
                
            }
                
           
        </div>
    )
}
function PaymentTypeMenu(){
    const [cardIndex,setCardIndex] = useState(0)
    return(
        <div className=" w-[100%] mt-2 bg-white rounded-2xl  py-[1rem] px-[1.2rem] gap-4">
            <div className="text-sm poppins-semibold my-2 flex gap-1 items-start">
                <span>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clip-path="url(#clip0_380_21893)">
                <path d="M12 24C14.3734 24 16.6935 23.2962 18.6668 21.9776C20.6402 20.6591 22.1783 18.7849 23.0866 16.5922C23.9948 14.3995 24.2324 11.9867 23.7694 9.65892C23.3064 7.33115 22.1635 5.19295 20.4853 3.51472C18.8071 1.83649 16.6689 0.693605 14.3411 0.230582C12.0133 -0.232441 9.60051 0.00519943 7.4078 0.913451C5.21509 1.8217 3.34094 3.35977 2.02236 5.33316C0.703788 7.30655 0 9.62663 0 12C0.00344108 15.1815 1.26883 18.2318 3.51852 20.4815C5.76821 22.7312 8.81846 23.9966 12 24ZM12 5.00001C12.2967 5.00001 12.5867 5.08798 12.8334 5.2528C13.08 5.41762 13.2723 5.65189 13.3858 5.92598C13.4994 6.20007 13.5291 6.50167 13.4712 6.79264C13.4133 7.08361 13.2704 7.35089 13.0607 7.56067C12.8509 7.77044 12.5836 7.91331 12.2926 7.97118C12.0017 8.02906 11.7001 7.99936 11.426 7.88582C11.1519 7.77229 10.9176 7.58003 10.7528 7.33336C10.588 7.08669 10.5 6.79668 10.5 6.50001C10.5 6.10218 10.658 5.72065 10.9393 5.43934C11.2206 5.15804 11.6022 5.00001 12 5.00001ZM11 10H12C12.5304 10 13.0391 10.2107 13.4142 10.5858C13.7893 10.9609 14 11.4696 14 12V18C14 18.2652 13.8946 18.5196 13.7071 18.7071C13.5196 18.8946 13.2652 19 13 19C12.7348 19 12.4804 18.8946 12.2929 18.7071C12.1054 18.5196 12 18.2652 12 18V12H11C10.7348 12 10.4804 11.8946 10.2929 11.7071C10.1054 11.5196 10 11.2652 10 11C10 10.7348 10.1054 10.4804 10.2929 10.2929C10.4804 10.1054 10.7348 10 11 10Z" fill="#374957"/>
                </g>
                <defs>
                <clipPath id="clip0_380_21893">
                <rect width="24" height="24" fill="white"/>
                </clipPath>
                </defs>
                </svg>
                </span>
                <div>Select the Payment Type from the list (only one)</div>
            </div>
            <div className="flex flex-col gap-2 mt-4">
            {cards.map((card,i)=>{
                return(
                        <div className="flex gap-4 justify-between items-center " key={i}>
                            <div className={`${cardIndex===i?"poppins-bold":""} flex gap-1 items-center`} >
                            <div className="">
                                <svg width="33" height="10" viewBox="0 0 33 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M23.9869 0.408642C23.4558 0.212983 22.6225 0 21.5913 0C18.9544 0 17.0909 1.31662 17.0796 3.20086C17.0579 4.58575 18.4006 5.36635 19.4153 5.83308C20.4579 6.31102 20.8065 6.60858 20.8013 7.03251C20.7962 7.68572 19.9681 7.97717 19.206 7.97717C18.1469 7.97717 17.5725 7.83451 16.6867 7.46765L16.3577 7.31377L15.9823 9.49047C16.6268 9.75033 17.7818 9.9786 18.974 10C21.7831 10 23.6146 8.69459 23.6352 6.68195C23.6569 5.57831 22.9381 4.74065 21.4067 4.04973C20.4827 3.6044 19.9042 3.30072 19.9042 2.84419C19.9042 2.44064 20.3981 2.01671 21.4294 2.01671C22.3152 2.00041 22.9391 2.19199 23.4269 2.38255L23.6796 2.49363L24.0498 0.397432L23.9869 0.408642ZM30.8416 0.180373H28.7791C28.1346 0.180373 27.6561 0.350555 27.3714 0.98237L23.4073 9.86141H26.2113L26.7764 8.40722L30.1971 8.41231C30.2827 8.75166 30.524 9.86039 30.524 9.86039H33L30.8416 0.180373ZM13.2825 0.100887H15.9524L14.2818 9.786H11.6119L13.2825 0.0957912V0.100887ZM6.49378 5.43463L6.76706 6.78284L9.38231 0.180373H12.2131L8.00147 9.8451H5.18306L2.87306 1.66106C2.82459 1.51839 2.76581 1.42158 2.62041 1.33802C1.84181 0.934474 0.966281 0.605319 0 0.377051L0.0319688 0.174259H4.3395C4.92009 0.195659 5.39241 0.377051 5.55328 0.992561L6.49378 5.43972V5.43463ZM27.5375 6.42719L28.6069 3.71548C28.5904 3.74096 28.8265 3.15806 28.9606 2.7912L29.1431 3.62376L29.7619 6.42108H27.5375V6.42719Z" fill="#B6B8BA"/>
                                </svg>
                            </div>
                                {card}
                            </div>
                            <div className={`max-w-[15px]  max-h-[15px] rounded-sm   ${cardIndex===i?"primary-linear-gr-bg":"bg-gray-300"}`}>
                            <FaSquare  color={`${cardIndex===i?"black":"white"}`} className="rounded-sm p-[1px]"  onClick={()=>setCardIndex(i)}/>
                            </div> 
                        </div>
                )
            })}
        </div>
       
        </div>
    )
}
function ReceiversMenu(){
    const [cardIndex,setCardIndex] = useState(0)
    return(
        <div className="w-[100%] bg-white rounded-2xl mt-2  py-[1rem] px-[1.2rem] gap-4">
            <div className="text-sm poppins-semibold my-2 flex gap-1 items-start">
                <span>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clip-path="url(#clip0_380_21893)">
                <path d="M12 24C14.3734 24 16.6935 23.2962 18.6668 21.9776C20.6402 20.6591 22.1783 18.7849 23.0866 16.5922C23.9948 14.3995 24.2324 11.9867 23.7694 9.65892C23.3064 7.33115 22.1635 5.19295 20.4853 3.51472C18.8071 1.83649 16.6689 0.693605 14.3411 0.230582C12.0133 -0.232441 9.60051 0.00519943 7.4078 0.913451C5.21509 1.8217 3.34094 3.35977 2.02236 5.33316C0.703788 7.30655 0 9.62663 0 12C0.00344108 15.1815 1.26883 18.2318 3.51852 20.4815C5.76821 22.7312 8.81846 23.9966 12 24ZM12 5.00001C12.2967 5.00001 12.5867 5.08798 12.8334 5.2528C13.08 5.41762 13.2723 5.65189 13.3858 5.92598C13.4994 6.20007 13.5291 6.50167 13.4712 6.79264C13.4133 7.08361 13.2704 7.35089 13.0607 7.56067C12.8509 7.77044 12.5836 7.91331 12.2926 7.97118C12.0017 8.02906 11.7001 7.99936 11.426 7.88582C11.1519 7.77229 10.9176 7.58003 10.7528 7.33336C10.588 7.08669 10.5 6.79668 10.5 6.50001C10.5 6.10218 10.658 5.72065 10.9393 5.43934C11.2206 5.15804 11.6022 5.00001 12 5.00001ZM11 10H12C12.5304 10 13.0391 10.2107 13.4142 10.5858C13.7893 10.9609 14 11.4696 14 12V18C14 18.2652 13.8946 18.5196 13.7071 18.7071C13.5196 18.8946 13.2652 19 13 19C12.7348 19 12.4804 18.8946 12.2929 18.7071C12.1054 18.5196 12 18.2652 12 18V12H11C10.7348 12 10.4804 11.8946 10.2929 11.7071C10.1054 11.5196 10 11.2652 10 11C10 10.7348 10.1054 10.4804 10.2929 10.2929C10.4804 10.1054 10.7348 10 11 10Z" fill="#374957"/>
                </g>
                <defs>
                <clipPath id="clip0_380_21893">
                <rect width="24" height="24" fill="white"/>
                </clipPath>
                </defs>
                </svg>
                </span>
                <div>Select the Receiver from the list (only one)</div>
            </div>
            <div className="flex flex-col gap-2 mt-4">
            {cards.map((card,i)=>{
                return(
                        <div className="flex gap-4 justify-between items-center " key={i}>
                            <div className={`${cardIndex===i?"poppins-bold":""} flex gap-1 items-center`} >
                            <div className="">
                                <svg width="33" height="10" viewBox="0 0 33 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M23.9869 0.408642C23.4558 0.212983 22.6225 0 21.5913 0C18.9544 0 17.0909 1.31662 17.0796 3.20086C17.0579 4.58575 18.4006 5.36635 19.4153 5.83308C20.4579 6.31102 20.8065 6.60858 20.8013 7.03251C20.7962 7.68572 19.9681 7.97717 19.206 7.97717C18.1469 7.97717 17.5725 7.83451 16.6867 7.46765L16.3577 7.31377L15.9823 9.49047C16.6268 9.75033 17.7818 9.9786 18.974 10C21.7831 10 23.6146 8.69459 23.6352 6.68195C23.6569 5.57831 22.9381 4.74065 21.4067 4.04973C20.4827 3.6044 19.9042 3.30072 19.9042 2.84419C19.9042 2.44064 20.3981 2.01671 21.4294 2.01671C22.3152 2.00041 22.9391 2.19199 23.4269 2.38255L23.6796 2.49363L24.0498 0.397432L23.9869 0.408642ZM30.8416 0.180373H28.7791C28.1346 0.180373 27.6561 0.350555 27.3714 0.98237L23.4073 9.86141H26.2113L26.7764 8.40722L30.1971 8.41231C30.2827 8.75166 30.524 9.86039 30.524 9.86039H33L30.8416 0.180373ZM13.2825 0.100887H15.9524L14.2818 9.786H11.6119L13.2825 0.0957912V0.100887ZM6.49378 5.43463L6.76706 6.78284L9.38231 0.180373H12.2131L8.00147 9.8451H5.18306L2.87306 1.66106C2.82459 1.51839 2.76581 1.42158 2.62041 1.33802C1.84181 0.934474 0.966281 0.605319 0 0.377051L0.0319688 0.174259H4.3395C4.92009 0.195659 5.39241 0.377051 5.55328 0.992561L6.49378 5.43972V5.43463ZM27.5375 6.42719L28.6069 3.71548C28.5904 3.74096 28.8265 3.15806 28.9606 2.7912L29.1431 3.62376L29.7619 6.42108H27.5375V6.42719Z" fill="#B6B8BA"/>
                                </svg>
                            </div>
                                {card}
                            </div>
                            <div className={`max-w-[15px]  max-h-[15px] rounded-sm   ${cardIndex===i?"primary-linear-gr-bg":"bg-gray-300"}`}>
                            <FaSquare  color={`${cardIndex===i?"black":"white"}`} className="rounded-sm p-[1px]"  onClick={()=>setCardIndex(i)}/>
                            </div> 
                        </div>
                )
            })}
        </div>
       
        </div>
    )
}

export default AddNewAccount;