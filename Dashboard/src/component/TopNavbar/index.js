import { Avatar } from "@mui/material";
import { FaSearch } from "react-icons/fa";

function TopNavbar(){
    return(
        <div className="flex justify-between"> 
            <div>
                <div className="poppins-medium">Dashboard</div>
                <p className="poppins-light text-sm text-gray-600">🤨 Get more out of Paymorz everyday!</p>
            </div>
            <div className="w-96">
            <div class="relative w-full">
                <input type="text" id="voice-search" class="bg-[#DFE0E2] border border-gray-300 text-gray-900 text-sm rounded-2xl block w-full  p-2.5" placeholder="Search..." required />
                <button type="button" class="absolute inset-y-0 end-0 flex items-center pe-3">
                <FaSearch color="gray"/>
                </button>
            </div>
            </div>
            <div className="flex gap-3 text-sm  mr-[3rem] items-center">
                    <div className="primary-linear-gr-bg-up p-1 rounded-[50%]">
                        <Avatar src="#"
                        sx={{
                            fontWeight:"bold",
                            fontSize:"small"
                        }}
                         alt="Aajesh Mah"/>
                    </div>
                <div className="flex flex-col text-sm">
                    <div>
                    Hello!
                   </div>
                   <div className="poppins-semibold">
                    Alex P.
                    </div>
                </div>
                <div className="ml-[2rem]">
                    <button >
                    <svg width="25" height="25" viewBox="0 0 18 18"  xmlns="http://www.w3.org/2000/svg">
                    <path d="M5.45455 1H3.54545C2.13964 1 1 2.13964 1 3.54545V5.45455C1 6.86036 2.13964 8 3.54545 8H5.45455C6.86036 8 8 6.86036 8 5.45455V3.54545C8 2.13964 6.86036 1 5.45455 1Z" fill="#B6B8BA"/>
                    <path d="M14.4545 1H12.5455C11.1396 1 10 2.13964 10 3.54545V5.45455C10 6.86036 11.1396 8 12.5455 8H14.4545C15.8604 8 17 6.86036 17 5.45455V3.54545C17 2.13964 15.8604 1 14.4545 1Z" fill="#B6B8BA"/>
                    <path d="M5.45455 10H3.54545C2.13964 10 1 11.1396 1 12.5455V14.4545C1 15.8604 2.13964 17 3.54545 17H5.45455C6.86036 17 8 15.8604 8 14.4545V12.5455C8 11.1396 6.86036 10 5.45455 10Z" fill="#B6B8BA"/>
                    <path d="M14.4545 10H12.5455C11.1396 10 10 11.1396 10 12.5455V14.4545C10 15.8604 11.1396 17 12.5455 17H14.4545C15.8604 17 17 15.8604 17 14.4545V12.5455C17 11.1396 15.8604 10 14.4545 10Z" fill="#B6B8BA"/>
                    </svg>

                    </button>
                </div>
            
            </div>
           
        </div>
    )
}

export default TopNavbar