import React from 'react'
import StatsCards from './StatsCards/index.js'
import StatsChart from './StatsChart/index.js'
import StatsTotalBar from './StatsTotalBar/index.js'
import StatsTable from './StatsTable/index.js'

function UserInvoice() {
  return (
    <div className="mt-5 bg-primary p-[2rem] rounded-2xl w-full flex flex-col gap-6">
        <div className='flex justify-between items-end'>
            <div>
                <div className="poppins-semibold">Invoice Statistic</div>
                <div className="text-xs poppins-light text-[#A3A6A9]">Get More of Paymorz everyday</div>
            </div>
            <div className="text-sm poppins-light text-[#A3A6A9]">
              12 March 2024 - 25 March 2024 (14 Days)
            </div>
        </div>
        <StatsCards reportIndex={2}/>
        <StatsChart/>
        <StatsTotalBar/>
        <hr/>
        <StatsTable/>
    </div>
  )
}

export default UserInvoice