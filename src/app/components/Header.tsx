'use client'
import { NAV_LINKS } from '@/Content'
import Link from 'next/link'
import React, { useState } from 'react'
import { IoIosArrowDown } from "react-icons/io";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [openSidebar, setOpenSidebar] = useState(false);
  return (
    <>
    <nav className='w-screen px-20 max-md:px-10 max-sm:px-4 flex justify-between items-center py-4 bg-white fixed top-0 z-50 shadow-md text-black max-md:hidden'>
      <div className='flex gap-8'>
        <Link href='/' className='hover:text-[#9E0C39]'>Home</Link>
        <DropdownMenu>
  <DropdownMenuTrigger className='cursor-pointer hover:text-[#9E0C39] flex gap-1 items-center'>Programs<IoIosArrowDown className='mt-1.5 font-light' /></DropdownMenuTrigger>
  <DropdownMenuContent>
    <DropdownMenuLabel>Programs</DropdownMenuLabel>
    <DropdownMenuSeparator />
    <Link href='/Roar' className='cursor-pointer hover:text-[#9E0C39]'>
    <DropdownMenuItem className='cursor-pointer hover:text-[#9E0C39]'>Roar</DropdownMenuItem>
    </Link>
    <Link href='/Blogs' className='cursor-pointer hover:text-[#9E0C39]'>
    <DropdownMenuItem className='cursor-pointer hover:text-[#9E0C39]'>Blogs</DropdownMenuItem>
    </Link>
    <Link href='/Events' className='cursor-pointer hover:text-[#9E0C39]'>
    <DropdownMenuItem className='cursor-pointer hover:text-[#9E0C39]'>Events</DropdownMenuItem>
    </Link>
  </DropdownMenuContent>
</DropdownMenu>

        <Link href='/About-us' className='hover:text-[#9E0C39]'>About Us</Link>
        <Link href='/Contact-us' className='hover:text-[#9E0C39]'>Contact Us</Link>
      </div>
      <div className='flex gap-6'>
         <button className='px-4 py-1 border border-[#9E0C39] text-[#9E0C39] rounded-sm cursor-pointer hover:bg-[#9E0C39] hover:text-white duration-150'>Contact Us</button>
         <button className='px-4 py-1 border border-[#9E0C39] text-[#9E0C39] rounded-sm cursor-pointer hover:bg-[#9E0C39] hover:text-white duration-150'>Donate</button>
      </div>
      
    </nav>
    <nav>
    <button
      id="nav-icon1"
      className={`${isOpen ? "open" : ""} md:hidden z-50 w-8 fixed right-5 top-2 cursor-pointer`}
      onClick={() => (setIsOpen(!isOpen),setOpenSidebar(!openSidebar))}
      >
      <span></span>
      <span></span>
      <span></span>
    </button>
    <div
        className={`${
          openSidebar ? "translate-x-0" : "-translate-x-full"
          } md:hidden z-[20] fixed top-0 left-0 h-screen overflow-y-scroll w-3/4 bg-[#9E0C39] text-white px-6 py-4 transition-transform duration-300 ease-in-out pt-12`}
          >
            <div className='flex flex-col gap-8'>
        <Link href='/' className='hover:text-[#9E0C39]'>Home</Link>
        <DropdownMenu>
  <DropdownMenuTrigger className='cursor-pointer hover:text-[#9E0C39] flex gap-1 items-center'>Programs<IoIosArrowDown className='mt-1.5 font-light' /></DropdownMenuTrigger>
  <DropdownMenuContent>
    <DropdownMenuLabel>Programs</DropdownMenuLabel>
    <DropdownMenuSeparator />
    <Link href='/Roar' className='cursor-pointer hover:text-[#9E0C39]'>
    <DropdownMenuItem className='cursor-pointer hover:text-[#9E0C39]'>Roar</DropdownMenuItem>
    </Link>
    <Link href='/Blogs' className='cursor-pointer hover:text-[#9E0C39]'>
    <DropdownMenuItem className='cursor-pointer hover:text-[#9E0C39]'>Blogs</DropdownMenuItem>
    </Link>
    <Link href='/Events' className='cursor-pointer hover:text-[#9E0C39]'>
    <DropdownMenuItem className='cursor-pointer hover:text-[#9E0C39]'>Events</DropdownMenuItem>
    </Link>
  </DropdownMenuContent>
</DropdownMenu>

        <Link href='/About-us' className='hover:text-[#9E0C39]'>About Us</Link>
        <Link href='/Contact-us' className='hover:text-[#9E0C39]'>Contact Us</Link>
      </div>
      <div className='flex flex-col gap-6 mt-8'>
        <div>
         <button className='w-28 text-center py-1 border  rounded-sm cursor-pointer duration-150'>Contact Us</button>
        </div>
        <div>
         <button className='w-28 text-center py-1 border rounded-sm cursor-pointer  duration-150'>Donate</button>
        </div>
      </div>
          </div>
          </nav>
    </>
  )
}

export default Header
