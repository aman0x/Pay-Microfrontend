import Calender from "react-calendar"
import { useState } from "react";
import "./style.css"
import { MdChevronLeft, MdChevronRight } from "react-icons/md";
function CalenderComponent(){
    const [value, onChange] = useState(new Date());
    return(
        <div className="flex justify-between">
        <Calender
        onChange={onChange}
        value={value}
        selectRange={true}
        view={"month"}
        tileContent={<div className="poppins-senmibold text-red-50"></div>}
        prevLabel={<MdChevronLeft/>}
        nextLabel={<MdChevronRight/>}
        prev2Label={null}
        next2Label={null}
        />
        </div>
    )
   
}

function PrevIcon(){}
export default CalenderComponent;