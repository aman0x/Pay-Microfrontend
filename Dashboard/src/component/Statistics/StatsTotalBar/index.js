function StatsTotalBar({stats,reportIndex=0}){
    return(
        <div className="flex flex-col gap-2">
            <div className="text-[#A3A6A9] text-xs">12 March 2024 - 25 March 2024 (14 Days)</div>
            <div className="poppins-semibold text-[1.1675rem] mb-2">TOTAL:</div>
            <div className="grid grid-cols-3 gap-4">
                <div className="rounded-xl bg-white px-4 py-3">
                    <div className="text-[#A3A6A9] poppins-light text-xs">Successful Invoices</div>
                    <div className="poppins-semibold pt-1">{stats.total_successful_invoices}</div>
                </div>
                <div className="rounded-xl bg-white px-4 py-3">
                    <div className="text-[#A3A6A9] poppins-light text-xs">{reportIndex===2?"Paid In INR":"Received in INR"}</div>
                    <div className="poppins-semibold pt-1">₹ {stats.total_recieved_amount||stats.total_paid_amount}</div>
                </div>
                <div className="rounded-xl bg-white px-4 py-3">
                    <div className="text-[#A3A6A9] poppins-light text-xs">Paid TAX</div>
                    <div className="poppins-semibold pt-1">₹ {stats.total_paid_tax}</div>
                </div>
            </div>
        </div>
    )
}
export default StatsTotalBar;