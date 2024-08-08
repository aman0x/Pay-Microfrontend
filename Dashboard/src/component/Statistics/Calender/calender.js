import Calender from "react-calendar"
import { useState } from "react";
import "./style.css"
import { FaSquare } from "react-icons/fa6";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";
const months = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
];
const years = [2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021, 2022, 2023, 2024,2025];
function CalenderComponent(){
    const [value, onChange] = useState(new Date());
    const [isCalenderSheetOpen,setCalenderSheet] = useState(false)
    return(
        <div className="absolute right-4 top-8 z-50">
        <div className="flex justify-between  relative">
        <Calender
        onChange={onChange}
        value={value}
        selectRange={true}
        view={"month"}
        tileContent={<div className="poppins-senmibold text-red-50"></div>}
        prevLabel={<MdChevronLeft size="16px" className="calendar-btn rounded-[50%]"/>}
        nextLabel={<MdChevronRight size="16px" className="calendar-btn rounded-[50%]"/>}
        prev2Label={null}
        next2Label={null}
        />
        {isCalenderSheetOpen && <YearMonthSheet/>}
        {isCalenderSheetOpen?
        <div className="absolute right-3 top-[18px] rounded-[50%] p-1 bg-primary calendar-btn" onClick={()=>setCalenderSheet(false)}>
        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M18 5.99997C17.8125 5.8125 17.5582 5.70718 17.293 5.70718C17.0278 5.70718 16.7735 5.8125 16.586 5.99997L12 10.586L7.414 5.99997C7.22647 5.8125 6.97217 5.70718 6.707 5.70718C6.44184 5.70718 6.18753 5.8125 6 5.99997C5.81253 6.1875 5.70721 6.44181 5.70721 6.70697C5.70721 6.97213 5.81253 7.22644 6 7.41397L10.586 12L6 16.586C5.81253 16.7735 5.70721 17.0278 5.70721 17.293C5.70721 17.5581 5.81253 17.8124 6 18C6.18753 18.1874 6.44184 18.2928 6.707 18.2928C6.97217 18.2928 7.22647 18.1874 7.414 18L12 13.414L16.586 18C16.7735 18.1874 17.0278 18.2928 17.293 18.2928C17.5582 18.2928 17.8125 18.1874 18 18C18.1875 17.8124 18.2928 17.5581 18.2928 17.293C18.2928 17.0278 18.1875 16.7735 18 16.586L13.414 12L18 7.41397C18.1875 7.22644 18.2928 6.97213 18.2928 6.70697C18.2928 6.44181 18.1875 6.1875 18 5.99997Z" fill="#374957"/>
        </svg>
        </div>
        :
        <div className="absolute right-3 top-[18px] rounded-[50%] p-1 bg-primary calendar-btn" onClick={()=>setCalenderSheet(true)}>
        <svg width="10" height="10" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 4.00003C13.1046 4.00003 14 3.10459 14 2.00002C14 0.895438 13.1046 0 12 0C10.8954 0 10 0.895438 10 2.00002C10 3.10459 10.8954 4.00003 12 4.00003Z" fill="#374957"/>
        <path d="M12 14C13.1046 14 14 13.1046 14 12C14 10.8954 13.1046 10 12 10C10.8954 10 10 10.8954 10 12C10 13.1046 10.8954 14 12 14Z" fill="#374957"/>
        <path d="M12 24C13.1046 24 14 23.1046 14 22C14 20.8954 13.1046 19.9999 12 19.9999C10.8954 19.9999 10 20.8954 10 22C10 23.1046 10.8954 24 12 24Z" fill="#374957"/>
        </svg>
        </div>
       
        }
     </div>
     </div>
    )
   
}
function YearMonthSheet(){
    const [monthIndex,setMonthIndex] = useState(0)
    const [yearIndex,setYearIndex] = useState(10)
    return(
        <div className="p-[2rem]  absolute bg-white text-[12px] poppins-light month-sheet right-0 text-gray-600 ">
        <div className="grid grid-cols-5 gap-5">
            <div className="flex flex-col gap-2 col-span-3">
                <div  className="text-center">Months</div>
                <div className="flex flex-col gap-2 ">
                {months.map((month,i)=>{
                    return(
                        <div className="flex gap-4 justify-between items-center" key={i}>
                            <div className={`${monthIndex===i?"poppins-bold":""}`} >{month}</div>
                            <div className={`max-w-[15px]  max-h-[15px] rounded-sm   ${monthIndex===i?"primary-linear-gr-bg":"bg-gray-300"}`}>
                            <FaSquare  color={`${monthIndex===i?"black":"white"}`} className="rounded-sm p-[1px]"  onClick={()=>setMonthIndex(i)}/>
                            </div> 
                        </div>
                    )
                })}
                </div>
            </div>
            <div className="flex flex-col gap-2 col-span-2">
                <div className="text-center">Years</div>
                <div className="flex flex-col gap-2 ">
                {years.map((year,i)=>{
                    return(
                        <div className="flex gap-2 justify-between items-center" key={i}>
                            <div className={`${yearIndex===i?"poppins-bold":""}`} >{year}</div>
                            <div className={`max-w-[15px]  max-h-[15px]  rounded-sm  ${yearIndex===i?"primary-linear-gr-bg-up":"bg-gray-300"}`}>
                            <FaSquare  color={`${yearIndex===i?"black":"white"}`} className=" rounded-sm p-[1px]"  onClick={()=>setYearIndex(i)}/>
                            </div> 
                        </div>
                    )
                })}
                </div>
            </div>
        </div>
        <div className="text-center underline mt-4 text-gray-600">Confirm</div>
        </div>
    )
}
export default CalenderComponent;