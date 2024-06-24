import {useState} from "react"
import FAQ from "./FAQ";
function ContactForm(){
    const [wordsCount,setWordsCount] = useState(0)
    return(
        <div className="mt-5 bg-primary p-[2rem] rounded-2xl flex flex-col gap-4 mr-2">
            <div>
                <div className="poppins-semibold">Contacts</div>
                <div className="text-xs poppins-light text-[#A3A6A9]">Use The Form Below to Sent Message to Our Support Center</div>
            </div>
            <div className="flex flex-col gap-2">
                <div className="flex gap-2">
                <input type="text"  className=" bg-white border border-gray-300 text-gray-900 text-sm rounded-xl w-full ps-14 p-[1rem] placeholder:text-[#787D81]" placeholder="Your Name"/>
                <input type="text" className=" bg-white border border-gray-300 text-gray-900 text-sm rounded-xl w-full ps-14 p-[1rem] placeholder:text-[#787D81]" placeholder="Yout Email"/>
                </div>
                <div className="relative">
                    <div className="absolute bottom-2 right-2 italic text-xs text-gray-600">{wordsCount}/600</div>
                    <textarea
                    onChange={e => setWordsCount(e.target.value.length)}
                    className=" bg-white border border-gray-300 text-gray-900 text-sm rounded-xl w-full ps-14 p-3.5 resize-none placeholder:text-[#787D81] h-36"  
                    placeholder="Message" />     
                </div>
            </div>
            <div className="flex flex-col gap-4">
                <div className="text-sm poppins-light text-[#A3A6A9] text-center">
                    or Use : 
                </div>
                <div className="grid grid-cols-2 gap-4">
                    <div className="flex justify-center items-center bg-white rounded-2xl py-[0.8rem] gap-4">
                        <div>
                            <svg width="52" height="50" viewBox="0 0 52 51" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect x="0.75" width="51" height="51" rx="25.5" fill="url(#paint0_linear_855_15379)" fill-opacity="0.15"/>
                            <path d="M31.7951 26.6837C31.4577 26.3627 31.0097 26.1839 30.544 26.1846C30.0784 26.1852 29.6308 26.3652 29.2944 26.6872L28.1808 27.6258C27.2717 27.2496 26.4459 26.6974 25.7508 26.0009C25.0558 25.3045 24.5052 24.4775 24.1306 23.5676L25.0654 22.4572C25.3874 22.1206 25.5673 21.673 25.568 21.2072C25.5686 20.7414 25.3899 20.2933 25.0689 19.9558C25.0689 19.9558 23.9869 18.5503 23.9693 18.5316C23.6357 18.196 23.1836 18.0051 22.7105 18.0001C22.2374 17.9951 21.7813 18.1763 21.4406 18.5047L20.7693 19.0891C16.2587 23.8867 27.8974 35.5337 32.6884 30.953L33.2213 30.3399C33.5599 30.0003 33.75 29.5402 33.75 29.0606C33.75 28.581 33.5599 28.1209 33.2213 27.7813C33.202 27.7661 31.7951 26.6837 31.7951 26.6837Z" fill="url(#paint1_linear_855_15379)"/>
                            <defs>
                            <linearGradient id="paint0_linear_855_15379" x1="-7.38078" y1="30.0333" x2="60.2478" y2="14.558" gradientUnits="userSpaceOnUse">
                            <stop stop-color="#F6DEC6"/>
                            <stop offset="0.47" stop-color="#E872D4"/>
                            <stop offset="0.656667" stop-color="#C190D9"/>
                            <stop offset="0.881578" stop-color="#A2DCFE"/>
                            </linearGradient>
                            <linearGradient id="paint1_linear_855_15379" x1="17.518" y1="26.2444" x2="36.0827" y2="21.9963" gradientUnits="userSpaceOnUse">
                            <stop stop-color="#F6DEC6"/>
                            <stop offset="0.47" stop-color="#E872D4"/>
                            <stop offset="0.656667" stop-color="#C190D9"/>
                            <stop offset="0.881578" stop-color="#A2DCFE"/>
                            </linearGradient>
                            </defs>
                            </svg>
                        </div>
                        <div className="flex flex-col">
                            <div  className="poppins-semibold">(000) 000 00  00</div>
                            <div className="poppins-regular text-xs">Mon- Fri, 09:00 - 18:00</div>
                        </div>
                    </div>
                    <div className="flex justify-center items-center  bg-white rounded-2xl py-[0.8rem] gap-4">
                        <div>
                            <svg width="52" height="51" viewBox="0 0 52 51" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect x="0.25" width="51" height="51" rx="25.5" fill="url(#paint0_linear_855_15386)" fill-opacity="0.15"/>
                            <path d="M34.2193 20.8904L28.6073 26.2473C27.9816 26.8431 27.1338 27.1777 26.25 27.1777C25.3662 27.1777 24.5184 26.8431 23.8927 26.2473L18.2807 20.8904C18.2713 20.9909 18.25 21.0819 18.25 21.1818V28.8182C18.2511 29.6617 18.6026 30.4705 19.2275 31.067C19.8524 31.6634 20.6996 31.999 21.5833 32H30.9167C31.8004 31.999 32.6476 31.6634 33.2725 31.067C33.8974 30.4705 34.2489 29.6617 34.25 28.8182V21.1818C34.25 21.0819 34.2287 20.9909 34.2193 20.8904Z" fill="url(#paint1_linear_855_15386)"/>
                            <path d="M27.6647 25.3475L33.754 19.5343C33.459 19.0674 33.043 18.6809 32.546 18.4122C32.049 18.1435 31.4879 18.0015 30.9167 18H21.5833C21.0122 18.0015 20.451 18.1435 19.954 18.4122C19.457 18.6809 19.041 19.0674 18.746 19.5343L24.8353 25.3475C25.2111 25.7047 25.7197 25.9052 26.25 25.9052C26.7803 25.9052 27.289 25.7047 27.6647 25.3475Z" fill="url(#paint2_linear_855_15386)"/>
                            <defs>
                            <linearGradient id="paint0_linear_855_15386" x1="-7.88078" y1="30.0333" x2="59.7478" y2="14.558" gradientUnits="userSpaceOnUse">
                            <stop stop-color="#F6DEC6"/>
                            <stop offset="0.47" stop-color="#E872D4"/>
                            <stop offset="0.656667" stop-color="#C190D9"/>
                            <stop offset="0.881578" stop-color="#A2DCFE"/>
                            </linearGradient>
                            <linearGradient id="paint1_linear_855_15386" x1="15.6992" y1="26.2444" x2="36.5977" y2="20.7791" gradientUnits="userSpaceOnUse">
                            <stop stop-color="#F6DEC6"/>
                            <stop offset="0.47" stop-color="#E872D4"/>
                            <stop offset="0.656667" stop-color="#C190D9"/>
                            <stop offset="0.881578" stop-color="#A2DCFE"/>
                            </linearGradient>
                            <linearGradient id="paint2_linear_855_15386" x1="15.6992" y1="26.2444" x2="36.5977" y2="20.7791" gradientUnits="userSpaceOnUse">
                            <stop stop-color="#F6DEC6"/>
                            <stop offset="0.47" stop-color="#E872D4"/>
                            <stop offset="0.656667" stop-color="#C190D9"/>
                            <stop offset="0.881578" stop-color="#A2DCFE"/>
                            </linearGradient>
                            </defs>
                            </svg>
                        </div>
                        <div className="flex flex-col">
                            <div className="poppins-semibold">company@mail.com</div>
                            <div className="poppins-regular text-xs ">We respond within 24 hrs.</div>
                        </div>
                    </div>
                </div>
            </div>
            <FAQ/>
        </div>
    )
}
export default ContactForm;