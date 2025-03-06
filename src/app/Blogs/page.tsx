'use client'
import React, { useState } from 'react'
import Header from '../components/Header'

function page() {
  const BLOGS=[
    {title:"Healing Through Horses: The Benefits of Equine Therapy for Veterans",date:"4 Mins Ago. 24 August 2025"},
    {title:"Mental Health & PTSD: How Rescue Animals Help Veterans Cope",date:"4 Mins Ago. 24 August 2025"},
    {title:"Healing Through Horses: The Benefits of Equine Therapy for Veterans",date:"4 Mins Ago. 24 August 2025"},
    {title:"Mental Health & PTSD: How Rescue Animals Help Veterans Cope",date:"4 Mins Ago. 24 August 2025"},
    {title:"Healing Through Horses: The Benefits of Equine Therapy for Veterans",date:"4 Mins Ago. 24 August 2025"},
    {title:"Mental Health & PTSD: How Rescue Animals Help Veterans Cope",date:"4 Mins Ago. 24 August 2025"},
    {title:"Healing Through Horses: The Benefits of Equine Therapy for Veterans",date:"4 Mins Ago. 24 August 2025"},
  ]
  const [visible,isVisible]=useState(3)
  return (
    <>
    <Header/>
    <section className='w-screen  px-20 max-md:px-10 max-sm:px-4 flex flex-col gap-8 items-center py-4 bg-white  top-0 text-black pt-24'>
    <h1 className="text-[4vw] font-semibold text-[#9E0C39] leading-snug">
        Blogs
      </h1>
      <p className='mb-6'>Get the latest updates and experience from Foundation</p>
   
      <div className='w-full flex flex-col gap-4'>
      <div className='w-full h-80 bg-slate-300'></div>
      <div className='flex flex-col gap-2'>
        <p className='text-lg'>From Stray to Stay: Heartwarming Animal Rescue Stories</p>
        <p className='text-sm text-gray-500'>4 Mins Ago, 24 August 2025</p>
      </div>
      </div>
      <div className='flex flex-col gap-6 w-full'>
        {
        BLOGS.slice(0,visible).map((blog,index)=>
        <div className='flex gap-4' key={index}>
          <div className='w-40 h-32 bg-gray-300 rounded-sm'></div>
          <div className='flex flex-col gap-2'>
            <div className='text-2xl font-medium'>{blog.title}</div>
        <p className='text-sm text-gray-500'>{blog.date}</p>
          </div>
        </div>
        )}
      </div>
      <button className='text-[#9E0C39] hover:bg-[#9E0C39] border hover:text-white duration-200 border-[#9E0C39] cursor-pointer px-4 py-1 rounded-sm' onClick={()=>isVisible(prev=>prev+3)}>Load More</button>
    </section>
    
    </>
  )
}

export default page
