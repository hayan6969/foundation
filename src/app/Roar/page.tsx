import React from 'react'
import Header from '../components/Header'
import ServiceSection from '../components/Sections/ServiceSection'

function page() {
  return (
    <>
    <Header/>
    <section className='w-screen flex flex-col  items-center gap-8 px-20 max-md:px-10 max-sm:px-4s overflow-hidden text-black py-20 text-center'>
    <h1 className='text-[4vw] font-semibold text-[#9E0C39] leading-snug'>Red Orchard Animal Rescue {'(ROAR)'}</h1>
    <p className='mx-24'>Red Orchard Animal Rescue (ROAR) is dedicated to rescuing, rehabilitating, and rehoming animals in need. We provide shelter, medical care, and love to abandoned, abused, and neglected animals while promoting responsible pet ownership and adoption.</p>
    <button className='px-4 py-1 border border-[#9E0C39]  rounded-sm cursor-pointer bg-[#9E0C39] text-white duration-150'>Join Now</button>
    </section>
    <div className='flex gap-4 justify-between items-center w-screen px-20 max-md:px-10 max-sm:px-4s overflow-hidden '>
      <div className='h-60 w-44  bg-slate-300 rounded-sm'></div>
      <div className='h-60 w-44  bg-slate-300 rounded-sm mt-20'></div>
      <div className='h-60 w-44  bg-slate-300 rounded-sm'></div>
      <div className='h-60 w-44  bg-slate-300 rounded-sm mt-20'></div>
    </div>
    <ServiceSection/>
    </>
  )
}

export default page
