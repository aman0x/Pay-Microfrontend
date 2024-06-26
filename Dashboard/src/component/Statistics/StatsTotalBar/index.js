function StatsTotalBar(){
    return(
        <div className="flex flex-col gap-2">
            <div className="text-gray-600 poppins-light text-sm">12 March 2024 - 25 March 2024 (14 Days)</div>
            <div className="poppins-semibold text-lg">Total :</div>
            <div className="grid grid-cols-3 gap-4">
                <div className="rounded-xl bg-white p-3">
                    <div className="text-gray-600 poppins-light text-sm">Successful Invoices</div>
                    <div className="poppins-bold">500</div>
                </div>
                <div className="rounded-xl bg-white p-3">
                    <div className="text-gray-600 poppins-light text-sm">Received in INR</div>
                    <div className="poppins-bold">₹ 24,000.24</div>
                </div>
                <div className="rounded-xl bg-white p-3">
                    <div className="text-gray-600 poppins-light text-sm">Paid TAX</div>
                    <div className="poppins-bold">₹ 24,000.24</div>
                </div>
            </div>
        </div>
    )
}
export default StatsTotalBar;