const { default: CircularChart } = require("./CircularChart");

function AdminStats(){
    return(
        <div className="flex flex-col gap-4">
            <div className="p-[1rem] bg-white rounded-xl flex flex-col gap-2">
                <div className="flex flex-col gap-1">
                    <div className="text-[#787D81] poppins-semibold">Expenses</div>
                    <div className="text-[#787D81] poppins-light text-sm">Lorem ipsuum dolor sit.</div>
                </div>
                <div className="relative px-[3rem] py-[1rem]">
                <CircularChart/>
                <div className="absolute top-[34%] left-[40%] flex flex-col items-center ">
                    <div className="poppins-light text-xs">Total</div>
                    <div className="poppins-bold ">₹ 4K+</div>
                    <div className="poppins-light text-xs">45 %</div>
                </div>
                </div>
                <div className="flex flex-col gap-1">
                    <div className="flex justify-between">
                        <div className="flex gap-2 items-center">
                            <div className=" rounded-full size-2 bg-[#EAE7F8]"></div>
                            <div className="text-[#787D81] text-sm">Incomes</div>
                        </div>
                        <div className="text-black poppins-bold">
                        ₹ 24,000.70
                        </div>
                    </div>
                    <div className="flex justify-between">
                        <div className="flex gap-2 items-center">
                            <div className=" rounded-full size-2 bg-[#964EC2]"></div>
                            <div className="text-[#787D81] text-sm">GST (10%)</div>
                        </div>
                        <div className="text-red-400 text-sm">
                        - ₹ 2400.7
                        </div>
                    </div>
                    <div className="flex justify-between">
                        <div className="flex gap-2 items-center">
                            <div className=" rounded-full size-2 bg-[#D562BE]"></div>
                            <div className="text-[#D562BE] text-sm">Refunds</div>
                        </div>
                        <div className="text-red-400 text-sm">
                        - ₹ 2400.7
                        </div>
                    </div>
                </div>
                <hr/>
                <div>
                    <div className="flex justify-between">
                        <div className="poppins-light">TOTAL</div>
                        <div className="text-red-400 poppins-bold">-  ₹ 4,800.14</div>
                    </div>
                    <div className="flex justify-between">
                        <div className="poppins-light">Net Profit</div>
                        <div className="text-[#B6B8BA] text-sm">+ ₹ 19,200.56</div>
                    </div>
                </div>
                
            </div>
            <div className="p-[1rem] bg-white rounded-xl flex flex-col gap-2">
                <div className="flex flex-col gap-1">
                    <div className="text-[#787D81] poppins-semibold">All Users</div>
                    <div className="text-[#787D81] poppins-light text-sm">Lorem ipsuum dolor sit.</div>
                </div>
                <div className="relative px-[3rem] py-[1rem]">
                <CircularChart index={1}/>
                <div className="absolute top-[34%] left-[38%] flex flex-col items-center ">
                    <div className="poppins-light text-xs">Total</div>
                    <div className="poppins-bold ">120,000</div>
                    <div className="poppins-light text-xs">Users</div>
                </div>
                </div>
                <div className="flex flex-col gap-1">
                    <div className="flex justify-between">
                        <div className="flex gap-2 items-center">
                            <div className=" rounded-full size-2 bg-[#964EC2]"></div>
                            <div className="text-[#787D81] text-sm">Active Users(83.4%)</div>
                        </div>
                        <div className="text-[#964EC2] text-sm">
                        100,00
                        </div>
                    </div>
                    <div className="flex justify-between">
                        <div className="flex gap-2 items-center">
                            <div className=" rounded-full size-2 bg-[#D562BE]"></div>
                            <div className="text-[#D562BE] text-sm">No Active Users(16.6%)</div>
                        </div>
                        <div className="text-[#D562BE] text-sm">
                        200
                        </div>
                    </div>
                </div>
                <hr/>
                <div>
                    <div className="flex justify-between">
                        <div className="poppins-light text-base">TOTAL Paid %</div>
                        <div className="text-green-500 poppins-bold"> ₹ 124,800.14</div>
                    </div>
                </div>
                
            </div>
        </div>
    )
}
export default AdminStats