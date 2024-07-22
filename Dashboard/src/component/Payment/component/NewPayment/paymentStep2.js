import { useState } from "react"
import "./style.css"
import {FaSquare} from "react-icons/fa6"
const cards = ['**** **** **** 1001','**** **** **** 1001','**** **** **** 1001','**** **** **** 1001']
function PaymentStep2({setStepIndex,data,bankDetail}){
    const [paymentIndex,setPaymentIndex] = useState(0)
    const [isConvenienceBearerMe,setWithMe] = useState(true)
    const [isCardMenuOpen,setCardMenuOpen]= useState(false)
    return(
        <div className="bg-primary mt-1 rounded-2xl flex flex-col gap-3 w-full ">
        <div className="flex flex-col gap-4">
            <div className="text-center poppins-semibold text-sm text-[#232B31]">Payment Details</div>
            <div className="grid grid-cols-2 gap-3">
                <div className="bg-[#FFFFFF] p-6 rounded-3xl flex flex-col gap-2">
                    <div className="poppins-semibold text-base text-[#232B31] ">Payment Option</div>
                    <div className="flex flex-col gap-2">
                        <div className="poppins-semibold text-[10px] text-[#4E5459]">
                            Select Card:
                        </div>
                        <div className="flex justify-between border-2 border-[#DFE0E2] p-2 rounded-xl">
                            <div className="flex gap-1 items-center">
                                <div>
                                <svg width="33" height="10" viewBox="0 0 33 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M23.9869 0.408642C23.4558 0.212983 22.6225 0 21.5913 0C18.9544 0 17.0909 1.31662 17.0796 3.20086C17.0579 4.58575 18.4006 5.36635 19.4153 5.83308C20.4579 6.31102 20.8065 6.60858 20.8013 7.03251C20.7962 7.68572 19.9681 7.97717 19.206 7.97717C18.1469 7.97717 17.5725 7.83451 16.6867 7.46765L16.3577 7.31377L15.9823 9.49047C16.6268 9.75033 17.7818 9.9786 18.974 10C21.7831 10 23.6146 8.69459 23.6352 6.68195C23.6569 5.57831 22.9381 4.74065 21.4067 4.04973C20.4827 3.6044 19.9042 3.30072 19.9042 2.84419C19.9042 2.44064 20.3981 2.01671 21.4294 2.01671C22.3152 2.00041 22.9391 2.19199 23.4269 2.38255L23.6796 2.49363L24.0498 0.397432L23.9869 0.408642ZM30.8416 0.180373H28.7791C28.1346 0.180373 27.6561 0.350555 27.3714 0.98237L23.4073 9.86141H26.2113L26.7764 8.40722L30.1971 8.41231C30.2827 8.75166 30.524 9.86039 30.524 9.86039H33L30.8416 0.180373ZM13.2825 0.100887H15.9524L14.2818 9.786H11.6119L13.2825 0.0957912V0.100887ZM6.49378 5.43463L6.76706 6.78284L9.38231 0.180373H12.2131L8.00147 9.8451H5.18306L2.87306 1.66106C2.82459 1.51839 2.76581 1.42158 2.62041 1.33802C1.84181 0.934474 0.966281 0.605319 0 0.377051L0.0319688 0.174259H4.3395C4.92009 0.195659 5.39241 0.377051 5.55328 0.992561L6.49378 5.43972V5.43463ZM27.5375 6.42719L28.6069 3.71548C28.5904 3.74096 28.8265 3.15806 28.9606 2.7912L29.1431 3.62376L29.7619 6.42108H27.5375V6.42719Z" fill="#B6B8BA"/>
                                </svg>
                                </div>
                                <div>**** **** **** 1001</div>
                            </div>
                            <button onClick={()=>setCardMenuOpen(!isCardMenuOpen)}>
                                <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <rect x="18" width="18" height="18" rx="9" transform="rotate(90 18 0)" fill="#DFE0E2"/>
                                <path d="M11 8L9 10L7 8" stroke="#4E5459" strokeWidth="1.5" strokeLinecap="round"/>
                                </svg>
                            </button>
                        
                        </div>
                        <div className="relative">
                            {isCardMenuOpen && <CardsMenu/>}
                        </div>
                    </div>
                    <div className="flex flex-col gap-2">
                        <div  className={` ${paymentIndex===0?'p-[2px] rounded-2xl primary-linear-gr-bg shadow-lg shadow-red-200':''} `}>
                            <div className={`flex justify-between ${paymentIndex===0?'isactive':'bg-[#F0F1F2]'} rounded-2xl w-full items-center p-4`}>
                                <div className="flex flex-col">
                                    <div className="color-linear text-sm poppins-bold">3.00 % GST</div>
                                    <div className="poppins-semibold text-base">Quick Pay</div>
                                    <div className="mt-1">
                                        <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M6 0C4.81331 0 3.65328 0.351894 2.66658 1.01118C1.67989 1.67047 0.910851 2.60754 0.456725 3.7039C0.00259972 4.80026 -0.11622 6.00665 0.115291 7.17054C0.346802 8.33443 0.918247 9.40352 1.75736 10.2426C2.59648 11.0818 3.66557 11.6532 4.82946 11.8847C5.99335 12.1162 7.19975 11.9974 8.2961 11.5433C9.39246 11.0891 10.3295 10.3201 10.9888 9.33342C11.6481 8.34673 12 7.18669 12 6C11.9983 4.40923 11.3656 2.8841 10.2407 1.75926C9.1159 0.634414 7.59077 0.00172054 6 0V0ZM6 10C5.90111 10 5.80444 9.97067 5.72222 9.91573C5.63999 9.86079 5.57591 9.7827 5.53806 9.69134C5.50022 9.59998 5.49032 9.49944 5.50961 9.40245C5.5289 9.30546 5.57652 9.21637 5.64645 9.14644C5.71637 9.07652 5.80547 9.0289 5.90246 9.00961C5.99945 8.99031 6.09998 9.00021 6.19134 9.03806C6.28271 9.0759 6.3608 9.13999 6.41574 9.22221C6.47068 9.30444 6.5 9.40111 6.5 9.5C6.5 9.63261 6.44732 9.75978 6.35355 9.85355C6.25979 9.94732 6.13261 10 6 10ZM6.965 6.253C6.81745 6.34525 6.69679 6.47474 6.61516 6.62843C6.53353 6.78211 6.49382 6.95459 6.5 7.1285V7.5C6.5 7.63261 6.44732 7.75978 6.35355 7.85355C6.25979 7.94732 6.13261 8 6 8C5.86739 8 5.74022 7.94732 5.64645 7.85355C5.55268 7.75978 5.5 7.63261 5.5 7.5V7.1285C5.49261 6.77571 5.57979 6.42737 5.75246 6.11965C5.92514 5.81192 6.17704 5.55602 6.482 5.3785C6.66674 5.27675 6.81458 5.1192 6.90438 4.92837C6.99418 4.73754 7.02135 4.5232 6.982 4.316C6.94304 4.1186 6.84612 3.9373 6.70363 3.79524C6.56113 3.65319 6.37952 3.55684 6.182 3.5185C6.03786 3.49182 5.88962 3.49716 5.74777 3.53413C5.60592 3.5711 5.47394 3.63881 5.36116 3.73246C5.24838 3.8261 5.15758 3.9434 5.09516 4.07604C5.03275 4.20867 5.00027 4.35341 5 4.5C5 4.63261 4.94732 4.75978 4.85356 4.85355C4.75979 4.94732 4.63261 5 4.5 5C4.36739 5 4.24022 4.94732 4.14645 4.85355C4.05268 4.75978 4 4.63261 4 4.5C4.00013 4.14725 4.09354 3.80081 4.27078 3.49582C4.44801 3.19084 4.70276 2.93815 5.00918 2.76339C5.31559 2.58864 5.66278 2.49803 6.01551 2.50077C6.36825 2.5035 6.71399 2.59948 7.01765 2.77897C7.32132 2.95846 7.57212 3.21507 7.7446 3.52277C7.91708 3.83047 8.00512 4.17832 7.99977 4.53102C7.99442 4.88373 7.89589 5.22875 7.71416 5.53108C7.53243 5.83341 7.27397 6.0823 6.965 6.2525V6.253Z" fill="#B6B8BA"/>
                                        </svg>
                                    </div>
                                </div>
                                {
                                    paymentIndex===0?
                                <div className="rounded-[50%] p-4   bg-[#f190af69] ">
                                   <svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path fillRule="evenodd" clipRule="evenodd" d="M16 8.5C16 12.9182 12.4182 16.5 8 16.5C3.58172 16.5 0 12.9182 0 8.5C0 4.08172 3.58172 0.5 8 0.5C12.4182 0.5 16 4.08172 16 8.5ZM11.2242 6.07574C11.4586 6.31005 11.4586 6.68995 11.2242 6.92424L7.22424 10.9242C6.98992 11.1586 6.61008 11.1586 6.37574 10.9242L4.77574 9.32424C4.54142 9.08992 4.54142 8.71008 4.77574 8.47576C5.01005 8.24144 5.38995 8.24144 5.62426 8.47576L6.8 9.65144L8.58784 7.8636L10.3758 6.07574C10.6101 5.84142 10.9899 5.84142 11.2242 6.07574Z" fill="url(#paint0_linear_1279_5575)"/>
                                    <defs>
                                    <linearGradient id="paint0_linear_1279_5575" x1="-2.55083" y1="9.92222" x2="18.666" y2="5.06723" gradientUnits="userSpaceOnUse">
                                    <stop stopColor="#F6DEC6"/>
                                    <stop offset="0.47" stopColor="#E872D4"/>
                                    <stop offset="0.656667" stopColor="#C190D9"/>
                                    <stop offset="0.881578" stopColor="#A2DCFE"/>
                                    </linearGradient>
                                    </defs>
                                    </svg> 
                                </div>
                                :
                                <div className="rounded-[50%] p-4 bg-[#DFE0E2]">
                                     <svg width="18" height="19" viewBox="0 0 18 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path fillRule="evenodd" clipRule="evenodd" d="M17 9.5C17 13.9182 13.4182 17.5 9 17.5C4.58172 17.5 1 13.9182 1 9.5C1 5.08172 4.58172 1.5 9 1.5C13.4182 1.5 17 5.08172 17 9.5ZM12.2242 7.07574C12.4586 7.31005 12.4586 7.68995 12.2242 7.92424L8.22424 11.9242C7.98992 12.1586 7.61008 12.1586 7.37574 11.9242L5.77574 10.3242C5.54142 10.0899 5.54142 9.71008 5.77574 9.47576C6.01005 9.24144 6.38995 9.24144 6.62426 9.47576L7.8 10.6514L9.58784 8.8636L11.3758 7.07574C11.6101 6.84142 11.9899 6.84142 12.2242 7.07574Z" fill="#B6B8BA"/>
                                    </svg>
                                </div>

                                }
                                
                            </div>
                        </div>
                        <div  className={` ${paymentIndex===1?'p-[2px] rounded-2xl primary-linear-gr-bg shadow-lg shadow-red-200':''} `}>
                            <div className={`flex justify-between ${paymentIndex===1?'isactive':'bg-[#F0F1F2]'} rounded-2xl w-full items-center p-4`}>
                                <div className="flex flex-col">
                                    <div className="color-linear text-sm poppins-bold">3.00 % GST</div>
                                    <div className="poppins-semibold text-base">Quick Pay</div>
                                    <div className="mt-1">
                                        <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M6 0C4.81331 0 3.65328 0.351894 2.66658 1.01118C1.67989 1.67047 0.910851 2.60754 0.456725 3.7039C0.00259972 4.80026 -0.11622 6.00665 0.115291 7.17054C0.346802 8.33443 0.918247 9.40352 1.75736 10.2426C2.59648 11.0818 3.66557 11.6532 4.82946 11.8847C5.99335 12.1162 7.19975 11.9974 8.2961 11.5433C9.39246 11.0891 10.3295 10.3201 10.9888 9.33342C11.6481 8.34673 12 7.18669 12 6C11.9983 4.40923 11.3656 2.8841 10.2407 1.75926C9.1159 0.634414 7.59077 0.00172054 6 0V0ZM6 10C5.90111 10 5.80444 9.97067 5.72222 9.91573C5.63999 9.86079 5.57591 9.7827 5.53806 9.69134C5.50022 9.59998 5.49032 9.49944 5.50961 9.40245C5.5289 9.30546 5.57652 9.21637 5.64645 9.14644C5.71637 9.07652 5.80547 9.0289 5.90246 9.00961C5.99945 8.99031 6.09998 9.00021 6.19134 9.03806C6.28271 9.0759 6.3608 9.13999 6.41574 9.22221C6.47068 9.30444 6.5 9.40111 6.5 9.5C6.5 9.63261 6.44732 9.75978 6.35355 9.85355C6.25979 9.94732 6.13261 10 6 10ZM6.965 6.253C6.81745 6.34525 6.69679 6.47474 6.61516 6.62843C6.53353 6.78211 6.49382 6.95459 6.5 7.1285V7.5C6.5 7.63261 6.44732 7.75978 6.35355 7.85355C6.25979 7.94732 6.13261 8 6 8C5.86739 8 5.74022 7.94732 5.64645 7.85355C5.55268 7.75978 5.5 7.63261 5.5 7.5V7.1285C5.49261 6.77571 5.57979 6.42737 5.75246 6.11965C5.92514 5.81192 6.17704 5.55602 6.482 5.3785C6.66674 5.27675 6.81458 5.1192 6.90438 4.92837C6.99418 4.73754 7.02135 4.5232 6.982 4.316C6.94304 4.1186 6.84612 3.9373 6.70363 3.79524C6.56113 3.65319 6.37952 3.55684 6.182 3.5185C6.03786 3.49182 5.88962 3.49716 5.74777 3.53413C5.60592 3.5711 5.47394 3.63881 5.36116 3.73246C5.24838 3.8261 5.15758 3.9434 5.09516 4.07604C5.03275 4.20867 5.00027 4.35341 5 4.5C5 4.63261 4.94732 4.75978 4.85356 4.85355C4.75979 4.94732 4.63261 5 4.5 5C4.36739 5 4.24022 4.94732 4.14645 4.85355C4.05268 4.75978 4 4.63261 4 4.5C4.00013 4.14725 4.09354 3.80081 4.27078 3.49582C4.44801 3.19084 4.70276 2.93815 5.00918 2.76339C5.31559 2.58864 5.66278 2.49803 6.01551 2.50077C6.36825 2.5035 6.71399 2.59948 7.01765 2.77897C7.32132 2.95846 7.57212 3.21507 7.7446 3.52277C7.91708 3.83047 8.00512 4.17832 7.99977 4.53102C7.99442 4.88373 7.89589 5.22875 7.71416 5.53108C7.53243 5.83341 7.27397 6.0823 6.965 6.2525V6.253Z" fill="#B6B8BA"/>
                                        </svg>
                                    </div>
                                </div>
                                {
                                    paymentIndex===1?
                                <div className="rounded-[50%] p-4   bg-[#f190af69] ">
                                   <svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path fillRule="evenodd" clipRule="evenodd" d="M16 8.5C16 12.9182 12.4182 16.5 8 16.5C3.58172 16.5 0 12.9182 0 8.5C0 4.08172 3.58172 0.5 8 0.5C12.4182 0.5 16 4.08172 16 8.5ZM11.2242 6.07574C11.4586 6.31005 11.4586 6.68995 11.2242 6.92424L7.22424 10.9242C6.98992 11.1586 6.61008 11.1586 6.37574 10.9242L4.77574 9.32424C4.54142 9.08992 4.54142 8.71008 4.77574 8.47576C5.01005 8.24144 5.38995 8.24144 5.62426 8.47576L6.8 9.65144L8.58784 7.8636L10.3758 6.07574C10.6101 5.84142 10.9899 5.84142 11.2242 6.07574Z" fill="url(#paint0_linear_1279_5575)"/>
                                    <defs>
                                    <linearGradient id="paint0_linear_1279_5575" x1="-2.55083" y1="9.92222" x2="18.666" y2="5.06723" gradientUnits="userSpaceOnUse">
                                    <stop stopColor="#F6DEC6"/>
                                    <stop offset="0.47" stopColor="#E872D4"/>
                                    <stop offset="0.656667" stopColor="#C190D9"/>
                                    <stop offset="0.881578" stopColor="#A2DCFE"/>
                                    </linearGradient>
                                    </defs>
                                    </svg> 
                                </div>
                                :
                                <div className="rounded-[50%] p-4 bg-[#DFE0E2]">
                                     <svg width="18" height="19" viewBox="0 0 18 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path fillRule="evenodd" clipRule="evenodd" d="M17 9.5C17 13.9182 13.4182 17.5 9 17.5C4.58172 17.5 1 13.9182 1 9.5C1 5.08172 4.58172 1.5 9 1.5C13.4182 1.5 17 5.08172 17 9.5ZM12.2242 7.07574C12.4586 7.31005 12.4586 7.68995 12.2242 7.92424L8.22424 11.9242C7.98992 12.1586 7.61008 12.1586 7.37574 11.9242L5.77574 10.3242C5.54142 10.0899 5.54142 9.71008 5.77574 9.47576C6.01005 9.24144 6.38995 9.24144 6.62426 9.47576L7.8 10.6514L9.58784 8.8636L11.3758 7.07574C11.6101 6.84142 11.9899 6.84142 12.2242 7.07574Z" fill="#B6B8BA"/>
                                    </svg>
                                </div>

                                }
                                
                            </div>
                        </div>
                        <div  className={` ${paymentIndex===2?'p-[2px] rounded-2xl primary-linear-gr-bg shadow-lg shadow-red-200':''} `}>
                            <div className={`flex justify-between ${paymentIndex===2?'isactive':'bg-[#F0F1F2]'} rounded-2xl w-full items-center p-4`}>
                                <div className="flex flex-col">
                                    <div className="color-linear text-sm poppins-bold">3.00 % GST</div>
                                    <div className="poppins-semibold text-base">Quick Pay</div>
                                    <div className="mt-1">
                                        <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M6 0C4.81331 0 3.65328 0.351894 2.66658 1.01118C1.67989 1.67047 0.910851 2.60754 0.456725 3.7039C0.00259972 4.80026 -0.11622 6.00665 0.115291 7.17054C0.346802 8.33443 0.918247 9.40352 1.75736 10.2426C2.59648 11.0818 3.66557 11.6532 4.82946 11.8847C5.99335 12.1162 7.19975 11.9974 8.2961 11.5433C9.39246 11.0891 10.3295 10.3201 10.9888 9.33342C11.6481 8.34673 12 7.18669 12 6C11.9983 4.40923 11.3656 2.8841 10.2407 1.75926C9.1159 0.634414 7.59077 0.00172054 6 0V0ZM6 10C5.90111 10 5.80444 9.97067 5.72222 9.91573C5.63999 9.86079 5.57591 9.7827 5.53806 9.69134C5.50022 9.59998 5.49032 9.49944 5.50961 9.40245C5.5289 9.30546 5.57652 9.21637 5.64645 9.14644C5.71637 9.07652 5.80547 9.0289 5.90246 9.00961C5.99945 8.99031 6.09998 9.00021 6.19134 9.03806C6.28271 9.0759 6.3608 9.13999 6.41574 9.22221C6.47068 9.30444 6.5 9.40111 6.5 9.5C6.5 9.63261 6.44732 9.75978 6.35355 9.85355C6.25979 9.94732 6.13261 10 6 10ZM6.965 6.253C6.81745 6.34525 6.69679 6.47474 6.61516 6.62843C6.53353 6.78211 6.49382 6.95459 6.5 7.1285V7.5C6.5 7.63261 6.44732 7.75978 6.35355 7.85355C6.25979 7.94732 6.13261 8 6 8C5.86739 8 5.74022 7.94732 5.64645 7.85355C5.55268 7.75978 5.5 7.63261 5.5 7.5V7.1285C5.49261 6.77571 5.57979 6.42737 5.75246 6.11965C5.92514 5.81192 6.17704 5.55602 6.482 5.3785C6.66674 5.27675 6.81458 5.1192 6.90438 4.92837C6.99418 4.73754 7.02135 4.5232 6.982 4.316C6.94304 4.1186 6.84612 3.9373 6.70363 3.79524C6.56113 3.65319 6.37952 3.55684 6.182 3.5185C6.03786 3.49182 5.88962 3.49716 5.74777 3.53413C5.60592 3.5711 5.47394 3.63881 5.36116 3.73246C5.24838 3.8261 5.15758 3.9434 5.09516 4.07604C5.03275 4.20867 5.00027 4.35341 5 4.5C5 4.63261 4.94732 4.75978 4.85356 4.85355C4.75979 4.94732 4.63261 5 4.5 5C4.36739 5 4.24022 4.94732 4.14645 4.85355C4.05268 4.75978 4 4.63261 4 4.5C4.00013 4.14725 4.09354 3.80081 4.27078 3.49582C4.44801 3.19084 4.70276 2.93815 5.00918 2.76339C5.31559 2.58864 5.66278 2.49803 6.01551 2.50077C6.36825 2.5035 6.71399 2.59948 7.01765 2.77897C7.32132 2.95846 7.57212 3.21507 7.7446 3.52277C7.91708 3.83047 8.00512 4.17832 7.99977 4.53102C7.99442 4.88373 7.89589 5.22875 7.71416 5.53108C7.53243 5.83341 7.27397 6.0823 6.965 6.2525V6.253Z" fill="#B6B8BA"/>
                                        </svg>
                                    </div>
                                </div>
                                {
                                    paymentIndex===2?
                                <div className="rounded-[50%] p-4   bg-[#f190af69] ">
                                   <svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path fillRule="evenodd" clipRule="evenodd" d="M16 8.5C16 12.9182 12.4182 16.5 8 16.5C3.58172 16.5 0 12.9182 0 8.5C0 4.08172 3.58172 0.5 8 0.5C12.4182 0.5 16 4.08172 16 8.5ZM11.2242 6.07574C11.4586 6.31005 11.4586 6.68995 11.2242 6.92424L7.22424 10.9242C6.98992 11.1586 6.61008 11.1586 6.37574 10.9242L4.77574 9.32424C4.54142 9.08992 4.54142 8.71008 4.77574 8.47576C5.01005 8.24144 5.38995 8.24144 5.62426 8.47576L6.8 9.65144L8.58784 7.8636L10.3758 6.07574C10.6101 5.84142 10.9899 5.84142 11.2242 6.07574Z" fill="url(#paint0_linear_1279_5575)"/>
                                    <defs>
                                    <linearGradient id="paint0_linear_1279_5575" x1="-2.55083" y1="9.92222" x2="18.666" y2="5.06723" gradientUnits="userSpaceOnUse">
                                    <stop stopColor="#F6DEC6"/>
                                    <stop offset="0.47" stopColor="#E872D4"/>
                                    <stop offset="0.656667" stopColor="#C190D9"/>
                                    <stop offset="0.881578" stopColor="#A2DCFE"/>
                                    </linearGradient>
                                    </defs>
                                    </svg> 
                                </div>
                                :
                                <div className="rounded-[50%] p-4 bg-[#DFE0E2]">
                                     <svg width="18" height="19" viewBox="0 0 18 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path fillRule="evenodd" clipRule="evenodd" d="M17 9.5C17 13.9182 13.4182 17.5 9 17.5C4.58172 17.5 1 13.9182 1 9.5C1 5.08172 4.58172 1.5 9 1.5C13.4182 1.5 17 5.08172 17 9.5ZM12.2242 7.07574C12.4586 7.31005 12.4586 7.68995 12.2242 7.92424L8.22424 11.9242C7.98992 12.1586 7.61008 12.1586 7.37574 11.9242L5.77574 10.3242C5.54142 10.0899 5.54142 9.71008 5.77574 9.47576C6.01005 9.24144 6.38995 9.24144 6.62426 9.47576L7.8 10.6514L9.58784 8.8636L11.3758 7.07574C11.6101 6.84142 11.9899 6.84142 12.2242 7.07574Z" fill="#B6B8BA"/>
                                    </svg>
                                </div>

                                }
                                
                            </div>
                        </div>

                    </div>

                </div>
                <div className="flex flex-col gap-2">
                    <div className="flex flex-col gap-2 bg-white rounded-2xl p-6 ">
                        <div className="poppins-semibold text-base text-[#232B31]">
                            Receiver
                        </div>
                        <div className="text-[#4E5459] text-xs poppins-semibold">
                           Name:
                        </div>
                        <div className="poppins-semibold text-xs text-[#232B31]">
                           {bankDetail.account_name}
                        </div>
                        <div className="text-[#4E5459] text-sm poppins-semibold">Contact Details:</div>
                        <div>
                           <div className="flex gap-2 items-center">
                                <div className="text-[#A3A6A9] text-xs">Phone</div>
                                <hr className="my-2 w-full border-t-2 border-dashed border-[#CDCED1]"/>
                                <div className="poppins-semibold text-xs">+919573749630</div>
                           </div>
                           <div className="flex gap-2 items-center">
                                <div className="text-[#A3A6A9] text-xs">Mail</div>
                                <hr className="my-2 w-full border-t-2 border-dashed border-[#CDCED1]"/>
                                <div className="poppins-semibold text-xs">contact@mail.com</div>
                           </div>
                        </div>
                        <div className="text-[#4E5459] text-sm poppins-semibold">Bank Details:</div>
                        <div>
                            <div className="flex gap-2 items-center">
                                <div className="text-[#A3A6A9] text-xs min-w-fit">A/C No</div>
                                <hr className="my-2 w-full border-t-2 border-dashed border-[#CDCED1]"/>
                                <div className="poppins-semibold text-xs">{bankDetail.account_number}</div>
                           </div>
                           <div className="flex gap-2 items-center">
                                <div className="text-[#A3A6A9] text-xs">Bank</div>
                                <hr className="my-2 w-full border-t-2 border-dashed border-[#CDCED1]"/>
                                <div className="poppins-semibold text-xs min-w-fit">{bankDetail.bank_name}</div>
                           </div>
                           <div className="flex gap-2 items-center">
                                <div className="text-[#A3A6A9] text-xs min-w-fit">IFS Code</div>
                                <hr className="my-2 w-full border-t-2 border-dashed border-[#CDCED1]"/>
                                <div className="poppins-semibold text-xs">HDFC0003242</div>
                           </div>
                           
                        </div>
                       
                    </div>
                    <div  className="flex flex-col gap-3 bg-white rounded-2xl p-6 ">
                        <div className="poppins-semibold text-base">
                            Supplier Payment
                        </div>
                        <div className="text-[#4E5459] text-xs poppins-semibold">
                            Who is bearing the Convenience Fee?
                        </div>
                        <div className="flex w-full bg-gray-100 text-xs py-1 px-2 rounded-2xl justify-between">
                            <button
                            className='py-1 px-9 text-sm rounded-xl'
                            style={{
                            backgroundColor:isConvenienceBearerMe?"#FFFFFF":null,
                            width:"45%",
                            fontWeight:isConvenienceBearerMe?"bold":"normal"
                            }}
                            onClick={()=>setWithMe(true)}
                            >
                            Me
                            </button>
                            <button 
                            className='py-1 px-9 text-sm rounded-xl'
                            style={{
                            backgroundColor:!isConvenienceBearerMe?"#FFFFFF":null,
                            width:"45%",
                            fontWeight:!isConvenienceBearerMe?"bold":"normal"
                            }}
                            onClick={()=>setWithMe(false)}
                            >
                           Receiver
                            </button>
                        </div>
                        <div className="flex flex-col gap-1">
                            <div className="flex gap-2 items-center  min-w-fit">
                                <div className="text-[#A3A6A9] text-xs min-w-fit">Receiver will recieve</div>
                                <hr className="my-2 w-full border-t-2 border-dashed border-[#CDCED1]"/>
                                <div className="poppins-semibold text-xs min-w-fit">₹ {data.amount}</div>
                           </div>
                           <div className="flex gap-2 items-center">
                                <div className="text-[#A3A6A9] text-xs min-w-fit">Convenience Fees 1.99%</div>
                                <hr className="my-2 w-full border-t-2 border-dashed border-[#CDCED1]"/>
                                <div className="poppins-semibold text-xs min-w-fit">₹ {data.amount*0.02}</div>
                           </div>
                           <div className="flex gap-2 items-center">
                                <div className="text-[#A3A6A9] text-xs min-w-fit">TAX</div>
                                <hr className="my-2 w-full border-t-2 border-dashed border-[#CDCED1]"/>
                                <div className="poppins-semibold text-xs min-w-fit">₹ {data.amount*0.18}</div>
                           </div>
                           
                        </div>
                        <div className="flex justify-between color-linear poppins-semibold text-sm">
                            <div>
                                Checkout Amount:
                            </div>
                            <div>
                                ₹ {data.amount*0.80}
                            </div>
                        </div>
                    </div>
                </div>

            </div>
           
            <div className='flex  gap-3'>
              
                <button type="submit"
                    onClick={() => {
                        setStepIndex(0)
                    //navigate('/accounts/type')
                    // withEmail ? handleUserLoginWithEmail():handleLoginWithPhone()
                    }}
                    className="flex items-center gap-1 w-full justify-center rounded-xl bg-gray-950 px-3 p-4 text-sm font-semibold leading-7 text-white shadow-sm primary-btn ">
                        <span>
                            <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M8.75 0.5C4.33166 0.5 0.75 4.08166 0.75 8.5C0.75 12.9183 4.33166 16.5 8.75 16.5C13.1683 16.5 16.75 12.9183 16.75 8.5C16.75 4.08166 13.1683 0.5 8.75 0.5ZM11.9498 9.42062H8.26862L9.82256 10.8992C10.1908 11.249 10.2054 11.8324 9.85481 12.2006C9.50425 12.5693 8.92159 12.5839 8.55316 12.2329L4.74091 8.60612C4.71194 8.57837 4.69553 8.54009 4.69553 8.5C4.69553 8.45994 4.71191 8.42162 4.74091 8.39391L8.55319 4.76687C8.92163 4.41606 9.50428 4.43044 9.85484 4.79913C10.2054 5.16756 10.1908 5.75075 9.82259 6.10078L8.26866 7.57912H11.9499C12.4587 7.57912 12.8707 7.99116 12.8707 8.49997C12.8707 9.00878 12.4587 9.42062 11.9498 9.42062Z" fill="#4E5459"/>
                            </svg>
                        </span>
                        <div>{"Prev Step"}</div>
                
                </button>
                <button type="submit"
                    onClick={() => {
                        setStepIndex(2)
                    //navigate('/accounts/type')
                    // withEmail ? handleUserLoginWithEmail():handleLoginWithPhone()
                    }}
                    className="flex primary-btn items-center w-full gap-1 justify-center rounded-xl bg-gray-950 px-3 p-4 text-sm font-semibold leading-7 text-white shadow-sm ">
                        <span>
                            <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" clipRule="evenodd" d="M16.25 8.5C16.25 12.9182 12.6682 16.5 8.25 16.5C3.83172 16.5 0.25 12.9182 0.25 8.5C0.25 4.08172 3.83172 0.5 8.25 0.5C12.6682 0.5 16.25 4.08172 16.25 8.5ZM11.4742 6.07574C11.7086 6.31005 11.7086 6.68995 11.4742 6.92424L7.47424 10.9242C7.23992 11.1586 6.86008 11.1586 6.62574 10.9242L5.02574 9.32424C4.79142 9.08992 4.79142 8.71008 5.02574 8.47576C5.26005 8.24144 5.63995 8.24144 5.87426 8.47576L7.05 9.65144L8.83784 7.8636L10.6258 6.07574C10.8601 5.84142 11.2399 5.84142 11.4742 6.07574Z" fill="#4E5459"/>
                            </svg>
                        </span>
                        <div>{"Checkout"}</div>
                
                </button>
            </div>
            
        </div>
        </div>
    )
}
function CardsMenu(){
    const [cardIndex,setCardIndex] = useState(0)
    return(
        <div className="absolute w-[100%] bg-white rounded-2xl shadow-lg  py-[1rem] px-[1.2rem] gap-4">
            <div className="text-sm poppins-semibold my-2 flex gap-1 items-center">
                <span>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clipPath="url(#clip0_380_21893)">
                <path d="M12 24C14.3734 24 16.6935 23.2962 18.6668 21.9776C20.6402 20.6591 22.1783 18.7849 23.0866 16.5922C23.9948 14.3995 24.2324 11.9867 23.7694 9.65892C23.3064 7.33115 22.1635 5.19295 20.4853 3.51472C18.8071 1.83649 16.6689 0.693605 14.3411 0.230582C12.0133 -0.232441 9.60051 0.00519943 7.4078 0.913451C5.21509 1.8217 3.34094 3.35977 2.02236 5.33316C0.703788 7.30655 0 9.62663 0 12C0.00344108 15.1815 1.26883 18.2318 3.51852 20.4815C5.76821 22.7312 8.81846 23.9966 12 24ZM12 5.00001C12.2967 5.00001 12.5867 5.08798 12.8334 5.2528C13.08 5.41762 13.2723 5.65189 13.3858 5.92598C13.4994 6.20007 13.5291 6.50167 13.4712 6.79264C13.4133 7.08361 13.2704 7.35089 13.0607 7.56067C12.8509 7.77044 12.5836 7.91331 12.2926 7.97118C12.0017 8.02906 11.7001 7.99936 11.426 7.88582C11.1519 7.77229 10.9176 7.58003 10.7528 7.33336C10.588 7.08669 10.5 6.79668 10.5 6.50001C10.5 6.10218 10.658 5.72065 10.9393 5.43934C11.2206 5.15804 11.6022 5.00001 12 5.00001ZM11 10H12C12.5304 10 13.0391 10.2107 13.4142 10.5858C13.7893 10.9609 14 11.4696 14 12V18C14 18.2652 13.8946 18.5196 13.7071 18.7071C13.5196 18.8946 13.2652 19 13 19C12.7348 19 12.4804 18.8946 12.2929 18.7071C12.1054 18.5196 12 18.2652 12 18V12H11C10.7348 12 10.4804 11.8946 10.2929 11.7071C10.1054 11.5196 10 11.2652 10 11C10 10.7348 10.1054 10.4804 10.2929 10.2929C10.4804 10.1054 10.7348 10 11 10Z" fill="#374957"/>
                </g>
                <defs>
                <clipPath id="clip0_380_21893">
                <rect width="24" height="24" fill="white"/>
                </clipPath>
                </defs>
                </svg>
                </span>
                <div className="text-[10px] text-[#A3A6A9] poppins-regular ">Select the card from the list (only one)</div>
            </div>
            <div className="flex flex-col gap-2 mt-4 ">
            {cards.map((card,i)=>{
                return(
                    <div className="flex gap-4 justify-between items-center " key={i}>
                    <div className={`${cardIndex === i ? "poppins-bold text-[#232B31]" : "text-[#787D81]"} flex gap-1 items-center poppins-semibold text-xs `} >
                        <div className="">
                            <svg width="33" height="10" viewBox="0 0 33 10" fill={cardIndex === i ? "#232B31" : "#787D81"}  xmlns="http://www.w3.org/2000/svg">
                                <path d="M23.9869 0.408642C23.4558 0.212983 22.6225 0 21.5913 0C18.9544 0 17.0909 1.31662 17.0796 3.20086C17.0579 4.58575 18.4006 5.36635 19.4153 5.83308C20.4579 6.31102 20.8065 6.60858 20.8013 7.03251C20.7962 7.68572 19.9681 7.97717 19.206 7.97717C18.1469 7.97717 17.5725 7.83451 16.6867 7.46765L16.3577 7.31377L15.9823 9.49047C16.6268 9.75033 17.7818 9.9786 18.974 10C21.7831 10 23.6146 8.69459 23.6352 6.68195C23.6569 5.57831 22.9381 4.74065 21.4067 4.04973C20.4827 3.6044 19.9042 3.30072 19.9042 2.84419C19.9042 2.44064 20.3981 2.01671 21.4294 2.01671C22.3152 2.00041 22.9391 2.19199 23.4269 2.38255L23.6796 2.49363L24.0498 0.397432L23.9869 0.408642ZM30.8416 0.180373H28.7791C28.1346 0.180373 27.6561 0.350555 27.3714 0.98237L23.4073 9.86141H26.2113L26.7764 8.40722L30.1971 8.41231C30.2827 8.75166 30.524 9.86039 30.524 9.86039H33L30.8416 0.180373ZM13.2825 0.100887H15.9524L14.2818 9.786H11.6119L13.2825 0.0957912V0.100887ZM6.49378 5.43463L6.76706 6.78284L9.38231 0.180373H12.2131L8.00147 9.8451H5.18306L2.87306 1.66106C2.82459 1.51839 2.76581 1.42158 2.62041 1.33802C1.84181 0.934474 0.966281 0.605319 0 0.377051L0.0319688 0.174259H4.3395C4.92009 0.195659 5.39241 0.377051 5.55328 0.992561L6.49378 5.43972V5.43463ZM27.5375 6.42719L28.6069 3.71548C28.5904 3.74096 28.8265 3.15806 28.9606 2.7912L29.1431 3.62376L29.7619 6.42108H27.5375V6.42719Z"  />
                            </svg>
                        </div>
                        {card}
                    </div>
                    <div className={`max-w-[15px]  max-h-[15px] rounded-sm   ${cardIndex === i ? "primary-linear-gr-bg" : "bg-gray-300"}`}>
                        <FaSquare color={`${cardIndex === i ? "black" : "white"}`} className="rounded-sm p-[1px]" onClick={() => setCardIndex(i)} />
                    </div>
                </div>
                )
            })}
        </div>
       
        </div>
    )
}

export default PaymentStep2