function ActivityTotalBar(){
    return(
        <div className="flex justify-between">
            <div className="flex flex-col gap-2">
            <div className="text-gray-600 poppins-light text-sm">12 March 2024 - 25 March 2024 (14 Days)</div>
            <div className="poppins-semibold text-lg">Total :</div>
            </div>
            <div className="grid grid-cols-2 gap-4 xl:min-w-96">
                <div className="rounded-xl bg-white p-3">
                    <div className="text-gray-600 poppins-light text-sm">Active Users</div>
                    <div className="poppins-bold">500</div>
                </div>
                <div className="rounded-xl bg-white p-3">
                    <div className="text-gray-600 poppins-light text-sm">% Paid</div>
                    <div className="poppins-bold">53%</div>
                </div>
            </div>
        </div>
    )
}
export default ActivityTotalBar;