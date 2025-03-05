import { CARD_DATA } from '@/Content'
import Image from 'next/image'
import React from 'react'

function ProgramCard() {
  
  return (
    <>
    {
        CARD_DATA.map((card,index)=>
    <div className='w-[12rem] flex flex-col p-4 gap-4 text-black items-center justify-between h-[20rem] ' key={index} >
      <div className='h-[7rem] w-full rounded-md bg-gray-400 overflow-hidden'> <img src={card.src}  alt='' className='h-full w-full' /> </div>
      <h5 className='text-lg font-medium w-full text-center'>{card.title}</h5>
      <div><button className='px-4 py-1 border border-[#9E0C39] text-[#9E0C39] hover:bg-[#9E0C39] hover:text-white duration-200 cursor-pointer'>Learn More</button></div>
    </div>
    )
}
    </>
  )
}

export default ProgramCard
