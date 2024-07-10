import React from 'react'
import StatsCards from './StatsCards/index.js'
import StatsChart from './StatsChart/index.js'

function Admin() {
  return (
    <div className="mt-5 bg-primary p-[2rem] rounded-2xl w-full flex flex-col gap-8">
        <StatsCards reportIndex={2}/>
        <StatsChart/>
    </div>
  )
}

export default Admin