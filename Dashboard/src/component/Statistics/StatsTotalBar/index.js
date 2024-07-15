function StatsTotalBar({stats,reportIndex=0}){
    return(
        <div className="flex flex-col gap-2">
            <div className="text-gray-600 poppins-light text-sm">12 March 2024 - 25 March 2024 (14 Days)</div>
            <div className="poppins-semibold text-lg">Total :</div>
            <div className="grid grid-cols-3 gap-4">
                <div className="rounded-xl bg-white p-3">
                    <div className="text-gray-600 poppins-light text-sm">Successful Invoices</div>
                    <div className="poppins-bold">{stats.total_successful_invoices}</div>
                </div>
                <div className="rounded-xl bg-white p-3">
                    <div className="text-gray-600 poppins-light text-sm">{reportIndex===2?"Paid In INR":"Received in INR"}</div>
                    <div className="poppins-bold">₹ {stats.total_recieved_amount||stats.total_paid_amount}</div>
                </div>
                <div className="rounded-xl bg-white p-3">
                    <div className="text-gray-600 poppins-light text-sm">Paid TAX</div>
                    <div className="poppins-bold">₹ {stats.total_paid_tax}</div>
                </div>
            </div>
        </div>
    )
}
export default StatsTotalBar;