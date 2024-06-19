import { useState }  from "react"
import { CircularProgressbar,CircularProgressbarWithChildren,buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import GradientSVG from "./gradientSvg.js";
function InvoiceTop(){
  const idCSS = "hello";
    const [isInvoiceSend,setIsInvoiceSend] = useState(true)
    const percentage1 = 67;
    const percentage2 = 10;
    const percentage3 = 6;
    const percentage4 = 7;
    return(
        <div>
            <div className="flex justify-between">
                <div>
                    <div className="poppins-bold text-lg">
                        All Invoices
                    </div>
                    <div className="poppins-light text-gray-600">
                        1200
                    </div>
                </div>
                <div>
                <div className="flex w-96 mt-4 bg-[#E6E8EA] py-[6px] rounded-xl justify-evenly ">
                <button
                className='px-9 py-1 rounded-lg poppins-light text-sm'
                style={{
                  backgroundColor:isInvoiceSend?"#FFFFFF":null,
                  width:"45%",
                  fontWeight:isInvoiceSend?"bold":"normal"
                }}
                onClick={()=>setIsInvoiceSend(true)}
                >
                  Invoices Sent
                </button>
                <button 
                className='px-2 py-1 rounded-lg poppins-light text-sm'
                style={{
                  backgroundColor:!isInvoiceSend?"#FFFFFF":null,
                  width:"45%",
                  fontWeight:!isInvoiceSend?"bold":"normal"
                }}
                onClick={()=>setIsInvoiceSend(false)}
                >
                  Invoices Received
                </button>
              </div>
                </div>
            </div>
            <div className="grid grid-cols-4 gap-6 mt-10">
              <div className="flex bg-white  py-6 px-4 rounded-3xl justify-between items-center border">
                  <div className="flex flex-col gap-1">
                    <div className="poppins-light text-sm text-gray-600">Successfull</div>
                    <div className="poppins-bold text-sm">12</div>
                    <div className="flex items-center gap-1 text-green-600"><span className="poppins-bold">4</span><span className="poppins-light text-sm">Today</span> </div>
                  </div>
                  <div className="w-20">
                    <GradientSVG />
                    <CircularProgressbarWithChildren 
                    strokeWidth={6}
                    styles={{
                      path: { stroke: `url(#${idCSS})` },
                    }}
                    className="h-14  relative" 
                    value={percentage1}>


                    <div className="primary-linear-gr-bg-light rounded-[50%]  h-11 w-11  flex justify-center items-center  absolute top-[29.2px]  ">
                      <div className="color-linear poppins-semibold text-sm" >{percentage1}%</div>
                    </div>

                    
                    </CircularProgressbarWithChildren>
                  </div>
              </div>
              <div className="flex bg-white  py-6 px-4 rounded-3xl justify-between items-center border">
                  <div className="flex flex-col gap-1">
                    <div className="poppins-light text-sm text-gray-600">In Progress</div>
                    <div className="poppins-bold text-sm">122</div>
                    <div className="flex items-center gap-1 text-[#FFB442]"><span className="poppins-bold">1</span><span className="poppins-light text-sm">Today</span> </div>
                  </div>
                  <div className="w-20">
                    <GradientSVG />
                    <CircularProgressbarWithChildren 
                    strokeWidth={6}
                    styles={{
                      path: { stroke: `url(#${idCSS})` },
                    }}
                    className="h-14  relative" 
                    value={percentage2}>


                    <div className="primary-linear-gr-bg-light rounded-[50%]  h-11 w-11  flex justify-center items-center  absolute top-[29.2px]  ">
                      <div className="color-linear poppins-semibold text-sm" >{percentage2}%</div>
                    </div>

                    
                    </CircularProgressbarWithChildren>
                  </div>
                
              </div>
              <div className="flex bg-white  py-6 px-4 rounded-3xl justify-between items-center border">
                  <div className="flex flex-col gap-1">
                    <div className="poppins-light text-sm text-gray-600">Failed</div>
                    <div className="poppins-bold text-sm">16</div>
                    <div className="flex items-center gap-1 text-[#E45757]"><span className="poppins-bold">3</span><span className="poppins-light text-sm">Today</span> </div>
                  </div>
                  <div className="w-20">
                    <GradientSVG />
                    <CircularProgressbarWithChildren 
                    strokeWidth={6}
                    styles={{
                      path: { stroke: `url(#${idCSS})` },
                    }}
                    className="h-14  relative" 
                    value={percentage3}>


                    <div className="primary-linear-gr-bg-light rounded-[50%]  h-11 w-11  flex justify-center items-center  absolute top-[29.2px]  ">
                      <div className="color-linear poppins-semibold text-sm" >{percentage3}%</div>
                    </div>

                    
                    </CircularProgressbarWithChildren>
                  </div>
                
              </div>
              <div className="flex bg-white  py-6 px-4 rounded-3xl justify-between items-center border">
                  <div className="flex flex-col gap-1">
                    <div className="poppins-light text-sm text-gray-600">Refunded</div>
                    <div className="poppins-bold text-sm">123</div>
                    <div className="flex items-center gap-1 text-[#964EC2]"><span className="poppins-bold">0</span><span className="poppins-light text-sm">Today</span> </div>
                  </div>
                  <div className="w-20">
                    <GradientSVG />
                    <CircularProgressbarWithChildren 
                    strokeWidth={6}
                    styles={{
                      path: { stroke: `url(#${idCSS})` },
                    }}
                    className="h-14  relative" 
                    value={percentage4}>


                    <div className="primary-linear-gr-bg-light rounded-[50%]  h-11 w-11  flex justify-center items-center  absolute top-[29.2px]  ">
                      <div className="color-linear poppins-semibold text-sm" >{percentage4}%</div>
                    </div>

                    
                    </CircularProgressbarWithChildren>
                  </div>
              </div>
            </div>
            {/* <div className="flex">
              <div>
                Show:
              </div>
              <div className="flex gap-1">
              <div className={`${filterIndex===4?"poppins-bold":""}`}>Refunded</div>
                <div className={`max-w-fit  rounded-sm p-[0.8px] ${filterIndex===4?"primary-linear-gr-bg-up":"bg-gray-300"}`}>
                    <FaSquare  color={`${filterIndex===4?"black":"white"}`} className=" rounded-sm"  onClick={()=>setFilterIndex(4)}/>
                </div> 
              </div>
            </div> */}
        </div>
    )
}

export default InvoiceTop;