import { Checkbox } from '@mui/material';
import { useState } from 'react';
import { FaSquare } from "react-icons/fa6";

function FilterComponent({filterState,toggleFilter}){
    return(
        <div className='flex flex-col gap-2 mt-2'>
        <p className="poppins-regular text-[#B6B8BA] text-[10px] my-1">Filter Status:</p>
        <div className="flex flex-col gap-3 mb-4 w-full">
          
          <div className="flex gap-2 items-center">
            <div
              className={`max-w-[16px] max-h-[16px] rounded-[0.225rem] p-[1px]  ${
                filterState.succeeded ? "primary-linear-gr-bg" : "bg-gray-300"
              }`}
            >
              <div className="cursor-pointer bg-white rounded-[0.225rem]">
                <FaSquare
                  color={filterState.succeeded ? "black" : "white"}
                  className="rounded-[0.235rem] p-[1px]"
                  onClick={() => toggleFilter("succeeded")}
                />
              </div>
            </div>
            <div
              className={`cursor-default text-xs ${
                filterState.succeeded ? "text-[#232B31]" : "text-[#A3A6A9]"
              }`}
            >
              Succeeded
            </div>
          </div>
          <div className="flex gap-2 items-center">
            <div
              className={`max-w-[16px] max-h-[16px] rounded-[0.225rem] p-[1px]  ${
                filterState.inProgress ? "primary-linear-gr-bg" : "bg-gray-300"
              }`}
            >
              <div className="cursor-pointer bg-white rounded-[0.225rem]">
                <FaSquare
                  color={filterState.inProgress ? "black" : "white"}
                  className="rounded-[0.235rem] p-[1px]"
                  onClick={() => toggleFilter("inProgress")}
                />
              </div>
            </div>
            <div
              className={`cursor-default text-xs ${
                filterState.inProgress ? "text-[#232B31]" : "text-[#A3A6A9]"
              }`}
            >
              In Progress
            </div>
          </div>
          <div className="flex gap-2 items-center">
            <div
              className={`max-w-[16px] max-h-[16px] rounded-[0.225rem] p-[1px]  ${
                filterState.failed ? "primary-linear-gr-bg" : "bg-gray-300"
              }`}
            >
              <div className="cursor-pointer bg-white rounded-[0.225rem]">
                <FaSquare
                  color={filterState.failed ? "black" : "white"}
                  className="rounded-[0.235rem] p-[1px]"
                  onClick={() => toggleFilter("failed")}
                />
              </div>
            </div>
            <div
              className={`cursor-default text-xs ${
                filterState.failed ? "text-[#232B31]" : "text-[#A3A6A9]"
              }`}
            >
              Failed
            </div>
          </div>
          <div className="flex gap-2 items-center">
            <div
              className={`max-w-[16px] max-h-[16px] rounded-[0.225rem] p-[1px]  ${
                filterState.refunded ? "primary-linear-gr-bg" : "bg-gray-300"
              }`}
            >
              <div className="cursor-pointer bg-white rounded-[0.225rem]">
                <FaSquare
                  color={filterState.refunded ? "black" : "white"}
                  className="rounded-[0.235rem] p-[1px]"
                  onClick={() => toggleFilter("refunded")}
                />
              </div>
            </div>
            <div
              className={`cursor-default text-xs ${
                filterState.refunded ? "text-[#232B31]" : "text-[#A3A6A9]"
              }`}
            >
              Refunded
            </div>
          </div>
        </div>
    </div>
    )
}
export default FilterComponent