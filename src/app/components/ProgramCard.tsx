import { CARD_DATA } from '@/Content'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

function ProgramCard() {
  
  return (
    <>
    {
        CARD_DATA.map((card,index)=>
    <div className='w-[12rem] 2xl:w-[20rem] flex flex-col p-4 gap-4 text-black items-center justify-between h-[18rem] ' key={index} >
      <div className='h-[7rem] 2xl:h-[12rem] w-full rounded-md bg-gray-400 overflow-hidden'> <Image width={200} height={200} src={card.src}  alt='' className='h-full w-full' /> </div>
      <h5 className='text-xl font-medium w-full text-center'>{card.title}</h5>
      <div><Link href={card.path} className='px-4 py-1 border border-[#9E0C39] text-[#9E0C39] rounded-sm hover:bg-[#9E0C39] hover:text-white duration-200 cursor-pointer'>Learn More</Link></div>
    </div>
    )
}
    </>
  )
}

export default ProgramCard
