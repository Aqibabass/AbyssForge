import React from 'react'
import { PricingTable } from '@clerk/clerk-react'

const Plan = () => {
  return (
    <div className='max-w-2xl mx-auto z-20 my-20 px-8 md:px-20 lg:px-32 xl:px-40'>
      <div className='text-center'>
        <h2 className='text-slate-700 text-[42px] font-semibold mb-4'>Choose Your Plan</h2>
        <p className='text-gray-500 mb-8'>Select the plan that fits your needs
     and start your journey with us today! </p>
      </div>
    <div className='mt-14 max-sm:mx-8 '>
        <PricingTable />
    </div>
    </div>
  )
}

export default Plan