function StatsTotalBar(){
    return(
        <div className="flex justify-between">
            <div className="flex flex-col gap-2">
            <div className="text-gray-600 poppins-light text-sm">12 March 2024 - 25 March 2024 (14 Days)</div>
            <div className="poppins-semibold text-lg">Total :</div>
            </div>
            <div className="grid grid-cols-2 gap-4">
                <div className="rounded-xl bg-white p-3">
                    <div className="text-gray-600 poppins-light text-sm">Successful Invoice</div>
                    <div className="poppins-bold">500</div>
                </div>
                <div className="rounded-xl bg-white p-3">
                    <div className="text-gray-600 poppins-light text-sm">Amount In INR</div>
                    <div className="poppins-bold">₹ 24,000.24</div>
                </div>
            </div>
        </div>
    )
}
export default StatsTotalBar;