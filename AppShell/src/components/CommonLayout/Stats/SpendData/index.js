import { useState } from "react"
import { FaSquare } from "react-icons/fa6"
import ChartComp from "../../Chart/index.js"
import {useNavigate} from "react-router-dom"

const cards = ['**** **** **** 1001','**** **** **** 1001','**** **** **** 1001','**** **** **** 1001']
function SpendData({monthStats}){
    const navigate = useNavigate()
    const [isCardMenuOpen,setCardMenuOpen] = useState(false)
    return(
        
        <div className="flex flex-col mt-4 gap-2 poppins-light text-sm text-gray-600 ">
            <div className="poppins-semibold text-base text-gray-600">Total Month Spendings</div>
            <div className="text-xs mt-2">Select Card : </div>
            <div className="flex justify-between">
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
            <hr className="w-[100%]"/>
            <div className="relative">
            {isCardMenuOpen && <CardsMenu/>}
            </div>
            
            <div className="h-[12rem]">
            <ChartComp />
            </div>
            <div className="flex flex-col gap-1 my-2">
                <div className="flex justify-between items-center">
                    <div className="flex justify-between items-center gap-1">
                        <div className="bg-[#ADA1E6] w-2 h-2 rounded-full"></div>
                        <div>Income</div>
                    </div>
                    <div className="flex justify-between items-center gap-1">
                        <div>Total: </div>
                        <div className="poppins-semibold text-black">₹ {monthStats.incomes}</div>
                    </div>
                </div>
                <div className="flex justify-between">
                    <div className="flex justify-between items-center gap-1">
                        <div className="bg-[#D562BE] w-2 h-2 rounded-full"></div>
                        <div>Expenses</div>
                    </div>
                    <div className="flex justify-between items-center gap-1">
                        <div>Total: </div>
                        <div className="poppins-semibold text-black">₹ {monthStats.expenses}</div>
                    </div>
                </div>
            </div>


            <div className="flex justify-center mt-4">
                <div className="primary-linear-gr-bg-up p-[2px] rounded-xl">
                <button
                onClick={()=>navigate('/dashboard/statistic')}
                className="bg-primary rounded-xl px-3 py-1 poppins-semibold">
                    View All Statistic
                </button>
                </div>
                        
            </div>
        </div>

    )
}

function CardsMenu(){
    const [cardIndex,setCardIndex] = useState(0)
    return(
        <div className="absolute w-[100%] bg-white rounded-2xl   py-[1rem] px-[1.2rem] gap-4">
            <div className="text-sm poppins-semibold my-2 flex gap-1 items-start">
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
                <div>Select the card from the list (only one)</div>
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




export default SpendData;