import React from 'react'
import Header from '../components/Header'

function page() {
  return (
    <>
    <Header/>
      <section className='w-screen h-[90vh] p-20 max-md:p-10 max-sm:px-4 pt-24 relative eventbackground flex flex-col items-center text-white'>
        <div className='text-4xl font-semibold flex flex-col gap-4 text-center mt-12'>
          <h1>Pet Adoption Fair</h1>
          <p className='text-xl'>From 22 July</p>
        </div>
        <div className='w-2/3 bg-white rounded-md flex gap-8 max-lg:gap-6 items-center justify-center h-20 absolute -bottom-10 shadow-md max-md:w-3/4 max-md:gap-4 max-sm:gap-2 max-sm:w-full'>
        <div className='flex flex-col gap-1 items-center'>
          <span className='text-2xl max-md:text-xl font-medium text-black'>60</span>
          <span className='text-base font-medium max-md:text-sm text-slate-500'>Days</span>
        </div>
        <div className='flex flex-col gap-1 items-center'>
          <span className='text-2xl max-md:text-xl font-medium text-black'>17</span>
          <span className='text-base max-md:text-sm font-medium text-slate-500'>Hours</span>
        </div>
        <div className='flex flex-col gap-1 items-center'>
          <span className='text-2xl max-md:text-xl font-medium text-black'>23</span>
          <span className='text-base max-md:text-sm font-medium text-slate-500'>Minutes</span>
        </div>
        <div className='text-slate-500'>{"(July.22.2025 - July.28.2025)"}</div>
        <button className='px-4 max-sm:px-1 max-sm:py-0.5 py-1 border border-[#9E0C39] text-[#9E0C39] rounded-sm cursor-pointer hover:bg-[#9E0C39] hover:text-white duration-150'>Book Now</button>
        </div>
      </section>
      <section className='w-screen overflow-hidden px-20 max-md:px-10 max-sm:px-4 flex flex-col gap-8 items-center py-4 bg-white  top-0 text-black pt-24'>
      <h1 className="text-[4vw] font-semibold text-[#9E0C39] leading-snug">
        Other Events
      </h1>
      <div className='grid grid-cols-3 max-md:grid-cols-2 max-sm:grid-cols-1 gap-6 w-full justify-center items-center'>
        <div className='bg-gradient-to-b from-gray-700 to-gray-300 w-full h-52'></div>
        <div className='bg-gradient-to-b from-gray-700 to-gray-300 w-full h-52'></div>
        <div className='bg-gradient-to-b from-gray-700 to-gray-300 w-full h-52'></div>
        <div className='bg-gradient-to-b from-gray-700 to-gray-300 w-full h-52'></div>
        <div className='bg-gradient-to-b from-gray-700 to-gray-300 w-full h-52'></div>
        <div className='bg-gradient-to-b from-gray-700 to-gray-300 w-full h-52'></div>
        <div className='bg-gradient-to-b from-gray-700 to-gray-300 w-full h-52'></div>
        <div className='bg-gradient-to-b from-gray-700 to-gray-300 w-full h-52'></div>
        <div className='bg-gradient-to-b from-gray-700 to-gray-300 w-full h-52'></div>
      </div>
      </section>
    </>
  )
}

export default page
