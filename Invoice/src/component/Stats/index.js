import { SlCalender } from "react-icons/sl";
import { FaGreaterThan } from "react-icons/fa6";
import { useState } from "react";
import CalenderComponent from "./Calender/calender";
import SpendData from "./SpendData";
function Stats(){
    const [isCalenderOpen,setCalenderView] = useState(false)
    return(
    <div className="relative" >
        <div className="flex justify-between">
            <div className="poppins-semibold">Stats</div>
            <div className="flex items-center gap-1" onClick={()=>
            setCalenderView(!isCalenderOpen)
            }>
              <button className="rounded-[50%] p-1 bg-black-primary primary-btn "><SlCalender size="10px" color="white" /></button>
                <p className="poppins-light text-xs text-gray-600" >Calender</p>
            </div>
        </div>
        {isCalenderOpen && <CalenderComponent/>}
        <div className="flex flex-col mt-2 gap-2">
            <div className="flex items-center justify-between  bg-white py-3 px-5 rounded-2xl">
                <div className="flex flex-col gap-1">
                    <p className="text-gray-600 poppins-light">Total Payments</p>
                    <p className="poppins-bold">24,0000.70</p>
                </div>
                <div className="flex gap-4 items-center">
                    <div className="primary-linear-gr-bg-light p-3 rounded-[50%]">
                    <svg width="18" height="16" viewBox="0 0 16 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M13.6673 0H11.5767C10.6736 0 10.1331 0.564456 10.1331 1.50769V3.69125C10.1331 4.63448 10.6736 5.19894 11.5767 5.19894H13.6673C14.5704 5.19894 15.1109 4.63448 15.1109 3.69125V1.50769C15.1109 0.564456 14.5704 0 13.6673 0ZM13.8238 2.45836C13.7384 2.54748 13.6247 2.59204 13.5109 2.59204C13.3971 2.59204 13.2833 2.54748 13.198 2.45836L13.07 2.32467V3.98833C13.07 4.24828 12.8709 4.45623 12.622 4.45623C12.3731 4.45623 12.174 4.24828 12.174 3.98833V2.32467L12.046 2.45836C11.8753 2.6366 11.5909 2.6366 11.4202 2.45836C11.2496 2.28011 11.2496 1.98302 11.4202 1.80477L12.3091 0.876393C12.3447 0.839257 12.3944 0.809549 12.4442 0.787268C12.4584 0.779841 12.4727 0.779841 12.4869 0.772414C12.5224 0.75756 12.558 0.750133 12.6007 0.750133C12.6149 0.750133 12.6291 0.750133 12.6433 0.750133C12.6931 0.750133 12.7358 0.75756 12.7856 0.779841C12.7927 0.779841 12.7927 0.779841 12.7998 0.779841C12.8496 0.802122 12.8922 0.83183 12.9278 0.868966C12.9349 0.876393 12.9349 0.876393 12.942 0.876393L13.8309 1.80477C14.0016 1.98302 14.0016 2.28011 13.8238 2.45836Z" fill="url(#paint0_linear_86_261)"/>
                    <path d="M0.888672 7.21167V10.9252C0.888672 12.626 2.20423 14 3.83267 14H12.1598C13.7882 14 15.1109 12.6186 15.1109 10.9178V7.21167C15.1109 6.71406 14.7269 6.313 14.2504 6.313H1.74912C1.27267 6.313 0.888672 6.71406 0.888672 7.21167ZM5.15534 11.5119H3.73312C3.44156 11.5119 3.19978 11.2594 3.19978 10.9549C3.19978 10.6504 3.44156 10.3979 3.73312 10.3979H5.15534C5.44689 10.3979 5.68867 10.6504 5.68867 10.9549C5.68867 11.2594 5.44689 11.5119 5.15534 11.5119ZM9.77756 11.5119H6.93312C6.64156 11.5119 6.39978 11.2594 6.39978 10.9549C6.39978 10.6504 6.64156 10.3979 6.93312 10.3979H9.77756C10.0691 10.3979 10.3109 10.6504 10.3109 10.9549C10.3109 11.2594 10.0691 11.5119 9.77756 11.5119Z" fill="url(#paint1_linear_86_261)"/>
                    <path d="M9.06645 2.12298V4.29911C9.06645 4.79672 8.68245 5.19778 8.206 5.19778H1.74912C1.26556 5.19778 0.888672 4.78187 0.888672 4.28425C0.895783 3.445 1.21578 2.68001 1.74912 2.12298C2.28245 1.56595 3.02201 1.22431 3.83267 1.22431H8.206C8.68245 1.22431 9.06645 1.62537 9.06645 2.12298Z" fill="url(#paint2_linear_86_261)"/>
                    <defs>
                    <linearGradient id="paint0_linear_86_261" x1="-1.37873" y1="8.24444" x2="17.4507" y2="3.86736" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#F6DEC6"/>
                    <stop offset="0.47" stopColor="#E872D4"/>
                    <stop offset="0.656667" stopColor="#C190D9"/>
                    <stop offset="0.881578" stopColor="#A2DCFE"/>
                    </linearGradient>
                    <linearGradient id="paint1_linear_86_261" x1="-1.37873" y1="8.24444" x2="17.4507" y2="3.86736" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#F6DEC6"/>
                    <stop offset="0.47" stopColor="#E872D4"/>
                    <stop offset="0.656667" stopColor="#C190D9"/>
                    <stop offset="0.881578" stopColor="#A2DCFE"/>
                    </linearGradient>
                    <linearGradient id="paint2_linear_86_261" x1="-1.37873" y1="8.24444" x2="17.4507" y2="3.86736" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#F6DEC6"/>
                    <stop offset="0.47" stopColor="#E872D4"/>
                    <stop offset="0.656667" stopColor="#C190D9"/>
                    <stop offset="0.881578" stopColor="#A2DCFE"/>
                    </linearGradient>
                    </defs>
                    </svg>

                    </div>
                    <div>
                    <svg width="8" height="13" viewBox="0 0 8 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1 1.5L6 6.5L1 11.5" stroke="#CDCED1" strokeWidth="1.5" strokeLinecap="round"/>
                    </svg>
                    </div>
                </div>
            </div>
            <div className="flex items-center justify-between  bg-white py-3 px-5 rounded-2xl gap-1">
                <div className="flex flex-col gap-1">
                    <p className="text-gray-600 poppins-light">Invoice Sended</p>
                    <p className="poppins-bold">12</p>
                </div>
                <div className="flex gap-4 items-center">
                    <div className="primary-linear-gr-bg-light p-3 rounded-[50%]">
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" clipRule="evenodd" d="M2.04717 0.97747C2.78778 0.352584 3.79191 0.00105856 4.83929 0H11.1603C12.2077 0.00105856 13.2118 0.352584 13.9524 0.97747C14.693 1.60236 15.1096 2.44958 15.1109 3.3333V15.3332C15.1105 15.4543 15.0711 15.573 14.9968 15.6766C14.9225 15.7802 14.8162 15.8648 14.6892 15.9213C14.5623 15.9777 14.4195 16.004 14.2762 15.9971C14.1329 15.9903 13.9945 15.9507 13.8759 15.8825L12.2167 14.9245L10.5574 15.8832C10.4259 15.9593 10.2701 16 10.1106 16C9.9511 16 9.79533 15.9593 9.66378 15.8832L8.00452 14.9238L6.34526 15.8832C6.2138 15.9591 6.05818 15.9998 5.89884 15.9998C5.73951 15.9998 5.58389 15.9591 5.45242 15.8832L3.78842 14.9238L2.12442 15.8832C2.00575 15.9516 1.86722 15.9913 1.72374 15.9982C1.58026 16.0051 1.43727 15.9789 1.31015 15.9223C1.18304 15.8657 1.07662 15.781 1.00236 15.6772C0.928088 15.5734 0.888783 15.4544 0.888672 15.3332V3.3333C0.889926 2.44958 1.30655 1.60236 2.04717 0.97747ZM7.99978 11.5556C10.4544 11.5556 12.4442 9.56571 12.4442 7.11111C12.4442 4.65651 10.4544 2.66667 7.99978 2.66667C5.54518 2.66667 3.55534 4.65651 3.55534 7.11111C3.55534 9.56571 5.54518 11.5556 7.99978 11.5556Z" fill="url(#paint0_linear_86_418)"/>
                    <defs>
                    <linearGradient id="paint0_linear_86_418" x1="-1.37873" y1="9.42222" x2="17.6797" y2="5.5457" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#F6DEC6"/>
                    <stop offset="0.47" stopColor="#E872D4"/>
                    <stop offset="0.656667" stopColor="#C190D9"/>
                    <stop offset="0.881578" stopColor="#A2DCFE"/>
                    </linearGradient>
                    </defs>
                    </svg>
                    </div>
                    <div>
                    <svg width="8" height="13" viewBox="0 0 8 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1 1.5L6 6.5L1 11.5" stroke="#CDCED1" strokeWidth="1.5" strokeLinecap="round"/>
                    </svg>
                    </div>
                </div>
            </div>
            <div className="flex items-center justify-between  bg-white py-3 px-5 rounded-2xl">
                <div className="flex flex-col gap-1">
                    <p className="text-gray-600 poppins-light">Invoice Received</p>
                    <p className="poppins-bold">2</p>
                </div>
                <div className="flex gap-4 items-center">
                    <div className="primary-linear-gr-bg-light p-3 rounded-[50%]">
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" clipRule="evenodd" d="M2.04717 0.97747C2.78778 0.352584 3.79191 0.00105856 4.83929 0H11.1603C12.2077 0.00105856 13.2118 0.352584 13.9524 0.97747C14.693 1.60236 15.1096 2.44958 15.1109 3.3333V15.3332C15.1105 15.4543 15.0711 15.573 14.9968 15.6766C14.9225 15.7802 14.8162 15.8648 14.6892 15.9213C14.5623 15.9777 14.4195 16.004 14.2762 15.9971C14.1329 15.9903 13.9945 15.9507 13.8759 15.8825L12.2167 14.9245L10.5574 15.8832C10.4259 15.9593 10.2701 16 10.1106 16C9.9511 16 9.79533 15.9593 9.66378 15.8832L8.00452 14.9238L6.34526 15.8832C6.2138 15.9591 6.05818 15.9998 5.89884 15.9998C5.73951 15.9998 5.58389 15.9591 5.45242 15.8832L3.78842 14.9238L2.12442 15.8832C2.00575 15.9516 1.86722 15.9913 1.72374 15.9982C1.58026 16.0051 1.43727 15.9789 1.31015 15.9223C1.18304 15.8657 1.07662 15.781 1.00236 15.6772C0.928088 15.5734 0.888783 15.4544 0.888672 15.3332V3.3333C0.889926 2.44958 1.30655 1.60236 2.04717 0.97747ZM7.99978 11.5556C10.4544 11.5556 12.4442 9.56571 12.4442 7.11111C12.4442 4.65651 10.4544 2.66667 7.99978 2.66667C5.54518 2.66667 3.55534 4.65651 3.55534 7.11111C3.55534 9.56571 5.54518 11.5556 7.99978 11.5556Z" fill="url(#paint0_linear_86_1982)"/>
                    <path d="M7.99984 4.44434L7.99984 9.77767M7.99984 9.77767L10.6665 7.111M7.99984 9.77767L5.33317 7.111" stroke="url(#paint1_linear_86_1982)" strokeWidth="0.833333" strokeLinecap="round"/>
                    <defs>
                    <linearGradient id="paint0_linear_86_1982" x1="-1.37873" y1="9.42222" x2="17.6797" y2="5.5457" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#F6DEC6"/>
                    <stop offset="0.47" stopColor="#E872D4"/>
                    <stop offset="0.656667" stopColor="#C190D9"/>
                    <stop offset="0.881578" stopColor="#A2DCFE"/>
                    </linearGradient>
                    <linearGradient id="paint1_linear_86_1982" x1="7.52576" y1="3.59406" x2="9.14409" y2="10.6663" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#F6DEC6"/>
                    <stop offset="0.47" stopColor="#E872D4"/>
                    <stop offset="0.656667" stopColor="#C190D9"/>
                    <stop offset="0.881578" stopColor="#A2DCFE"/>
                    </linearGradient>
                    </defs>
                    </svg>
                    </div>
                    <div>
                    <svg width="8" height="13" viewBox="0 0 8 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1 1.5L6 6.5L1 11.5" stroke="#CDCED1" strokeWidth="1.5" strokeLinecap="round"/>
                    </svg>
                    </div>
                </div>
            </div>
        </div>
        <SpendData/>
    </div>
    )
   
}
export default Stats