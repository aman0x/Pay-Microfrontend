import { FaSearch } from "react-icons/fa";
import { useState } from "react"
import "./style.css"
function FAQ(){
    const [faqIndex0,setFaqIndex0] = useState(true)
    const [faqIndex1,setFaqIndex1] = useState(false)
    const [faqIndex2,setFaqIndex2] = useState(false)
    const [faqIndex3,setFaqIndex3] = useState(false)
    const [faqIndex4,setFaqIndex4] = useState(false)
    const [faqIndex5,setFaqIndex5] = useState(false)
    const [faqQuesIndex,setfaqQuesIndex] = useState(-1)

    return(
        <div className="flex flex-col gap-2 mt-5">
            <div className="poppins-bold">
                F.A.Q.
            </div>
            <div className="flex justify-between">
                <div className="text-[#A3A6A9] text-sm">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc <br/> vulputate libero et velit interdum, ac aliquet odio mattis.
                </div>
                <div>
                <div className="w-96">
                    <div class="relative w-full">
                        <input type="text" id="voice-search" class="bg-[#DFE0E2] border border-gray-300 text-gray-900 text-sm rounded-2xl block w-full  p-2.5" placeholder="Have Any Questions ?" required />
                        <button type="button" class="absolute inset-y-0 end-0 flex items-center pe-3">
                        <FaSearch color="gray"/>
                        </button>
                    </div>
                </div>
                </div>
            </div>
            <div className="flex mt-4">
                <div className="flex flex-col gap-1 border-r-2 border-r-[#DFE0E2]  pr-6">
                    {
                        faqIndex0 ?
                        <div className="primary-linear-gr-bg-up p-[1.5px] rounded-xl shadow-red-200 shadow-2xl">
                            <button className="flex justify-between items-center bg-black-primary rounded-xl py-[6px] px-3 poppins-medium text-sm w-36" onClick={()=>setFaqIndex0(false)}>
                               General
                            </button>
                        </div>
                        :
                        <button className="text-[#B6B8BA] text-sm py-[6px] px-3 text-start" onClick={()=>setFaqIndex0(true)}>
                            General
                        </button>

                    }
                    {
                        faqIndex1 ?
                        <div className="primary-linear-gr-bg-up p-[1.5px] rounded-xl shadow-2xl">
                            <button className="flex justify-between items-center bg-black-primary rounded-xl py-[6px] px-3 poppins-medium text-sm w-36" onClick={()=>setFaqIndex1(false)}>
                                Payment
                            </button>
                        </div>
                        :
                        <button className="text-[#B6B8BA] text-sm py-[6px] px-3 text-start" onClick={()=>setFaqIndex1(true)}>
                            Payment
                        </button>

                    }
                    {
                        faqIndex2 ?
                        <div className="primary-linear-gr-bg-up p-[1.5px] rounded-xl shadow-2xl">
                            <button className="flex justify-between items-center bg-black-primary rounded-xl py-[6px] w-36 px-3 poppins-medium text-sm" onClick={()=>setFaqIndex2(false)}>
                                KYC
                            </button>
                        </div>
                        :
                        <button className="text-[#B6B8BA] text-sm py-[6px] px-3 text-start" onClick={()=>setFaqIndex2(true)}>
                            KYC
                        </button>

                    }
                    {
                        faqIndex3 ?
                        <div className="primary-linear-gr-bg-up p-[1.5px] rounded-xl shadow-2xl">
                            <button className="flex justify-between items-center bg-black-primary rounded-xl py-[6px] w-36 px-3 poppins-medium text-sm" onClick={()=>setFaqIndex3(false)}>
                                Account
                            </button>
                        </div>
                        :
                        <button className="text-[#B6B8BA] text-sm py-[6px] px-3 text-start" onClick={()=>setFaqIndex3(true)}>
                           Account
                        </button>

                    }
                    {
                        faqIndex4 ?
                        <div className="primary-linear-gr-bg-up p-[1.5px] rounded-xl shadow-2xl">
                            <button className="flex justify-between items-center bg-black-primary rounded-xl py-[6px] w-36 px-3 poppins-medium text-sm" onClick={()=>setFaqIndex4(false)}>
                                Transaction
                            </button>
                        </div>
                        :
                        <button className="text-[#B6B8BA] text-sm py-[6px] px-3 text-start" onClick={()=>setFaqIndex4(true)}>
                            Transaction
                        </button>

                    }
                    {
                        faqIndex5 ?
                        <div className="primary-linear-gr-bg-up p-[1.5px] rounded-xl shadow-2xl">
                            <button className="flex justify-between items-center bg-black-primary rounded-xl py-[6px] w-36 px-3 poppins-medium text-sm" onClick={()=>setFaqIndex5(false)}>
                                Cards
                            </button>
                        </div>
                        :
                        <button className="text-[#B6B8BA] text-sm py-[6px] px-3 text-start" onClick={()=>setFaqIndex5(true)}>
                            Cards
                        </button>

                    }
                </div>     
                <div className="flex flex-col gap-2 divide-y divide-slate-200 mx-2">
                   {[...Array(6)].map((val,i)=>{
                    return(
                        <div className={`grid grid-cols-2 px-[2rem] gap-20 overflow-hidden faq  transition-all ease-in-out duration-1000 py-8  ${faqQuesIndex === i ? "":"h-20"}`}>
                        <div className="flex gap-8 poppins-semibold">
                            <div className="color-linear">0{i+1}</div>
                            <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit  ?</div>
                        </div>
                        <div className="flex poppins-regular text-[#787D81] gap-2 text-[16px]">
                            <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur tempus urna at turpis condimentum lobortis.  Curabitur tempus urna at turpis condimentum lobortis. Curabitur tempus urna at turpis condimentum lobortis.</div>
                            <div>

                            {
                                faqQuesIndex===i?
                                <button onClick={()=>setfaqQuesIndex(-1)}>
                                    <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <g id="Frame 17">
                                    <rect x="0.5" y="0.5" width="29" height="29" rx="14.5" stroke="url(#paint0_linear_855_15414)"/>
                                    <g id="Group 3">
                                    <path id="Vector 5" d="M18.9997 15H11.9997" stroke="#232B31" stroke-width="1.5" stroke-linecap="round"/>
                                    </g>
                                    </g>
                                    <defs>
                                    <linearGradient id="paint0_linear_855_15414" x1="-4.78281" y1="17.6667" x2="34.9987" y2="8.56355" gradientUnits="userSpaceOnUse">
                                    <stop stop-color="#F6DEC6"/>
                                    <stop offset="0.47" stop-color="#E872D4"/>
                                    <stop offset="0.656667" stop-color="#C190D9"/>
                                    <stop offset="0.881578" stop-color="#A2DCFE"/>
                                    </linearGradient>
                                    </defs>
                                    </svg>
                                </button>
                                :
                                <button onClick={()=>setfaqQuesIndex(i)}>
                                    <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <rect x="0.5" y="0.5" width="29" height="29" rx="14.5" stroke="#B6B8BA"/>
                                    <path d="M15.0004 12V18" stroke="#B6B8BA" stroke-width="1.5" stroke-linecap="round"/>
                                    <path d="M18.0004 15L12.0004 15" stroke="#B6B8BA" stroke-width="1.5" stroke-linecap="round"/>
                                    </svg>


                                </button>
                            }
                            </div>
                        </div>
                        
                    </div>
                    )
                   })} 
                    
                </div>
            </div>
            <ContactUs/>
        </div>
    )
}

function ContactUs(){
    return(
        <div className="contact-us-card h-[300px] flex flex-col justify-center items-center gap-2 mt-2">
            <div className="poppins-bold">
            Still Have A Questions ?
            </div>
            <div className="w-96 poppins-light text-xs">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.
            </div>
            <div>
                <button>Contact Us</button>
            </div>
        </div>
    )
}
export default FAQ;