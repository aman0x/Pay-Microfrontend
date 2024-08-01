import { Checkbox } from '@mui/material';
import { useState } from 'react';
import { FaSquare } from "react-icons/fa6";

function FilterComponent({filterState,toggleFilter}){
    const [filterIndex,setFilterIndex] = useState(0)
    return(
        <div className='flex flex-col gap-2 mt-2'>
        <p className="poppins-regular text-[#B6B8BA] text-[10px] my-1">Filter Status:</p>
        <div className='flex flex-col gap-2 poppins-regular text-[#B6B8BA] text-[12px]'>
            <div className="flex justify-between text-[#4E5459] items-center">
                <div className={`${filterIndex===0?"poppins-bold":""}`}>
                    All
                </div>
                <div className={`${filterIndex===0?"primary-linear-gr-bg-up":"bg-gray-300"} max-w-fit p-[0.8px] rounded-sm`}>
                    <FaSquare  color={`${filterIndex===0?"black":"white"}`} className="rounded-sm" onClick={()=>setFilterIndex(0)}/>
                </div> 
            </div>
            <div className="flex justify-between items-center">
                <div className={`${filterIndex===1?"poppins-bold":""}`}>Succussed</div>
                <div className={`max-w-fit  rounded-sm p-[0.8px] ${filterIndex===1?"primary-linear-gr-bg-up":"bg-gray-300"}`}>
                    <FaSquare color={`${filterIndex===1?"black":"white"}`} className=" rounded-sm"  onClick={()=>setFilterIndex(1)}/>
                </div> 
            </div>
            <div className="flex justify-between  items-center">
                <div className={`${filterIndex===2?"poppins-bold":""}`}>InProgress</div>
                <div className={`max-w-fit  rounded-sm p-[0.8px] ${filterIndex===2?"primary-linear-gr-bg-up":"bg-gray-300"}`}>
                    <FaSquare  color={`${filterIndex===2?"black":"white"}`} className=" rounded-sm"  onClick={()=>setFilterIndex(2)}/>
                </div> 
            </div>
            <div className="flex justify-between  items-center">
                <div className={`${filterIndex===3?"poppins-bold":""}`}>Failed</div>
                <div className={`max-w-fit  rounded-sm p-[0.8px] ${filterIndex===3?"primary-linear-gr-bg-up":"bg-gray-300"}`}>
                    <FaSquare  color={`${filterIndex===3?"black":"white"}`} className=" rounded-sm"  onClick={()=>setFilterIndex(3)}/>
                </div> 
            </div>
            <div className="flex justify-between  items-center">
                <div className={`${filterIndex===4?"poppins-bold":""}`}>Refunded</div>
                <div className={`max-w-fit  rounded-sm p-[0.8px] ${filterIndex===4?"primary-linear-gr-bg-up":"bg-gray-300"}`}>
                    <FaSquare  color={`${filterIndex===4?"black":"white"}`} className=" rounded-sm"  onClick={()=>setFilterIndex(4)}/>
                </div> 
            </div>
        </div>
    </div>
    )
}
export default FilterComponent