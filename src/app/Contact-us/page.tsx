'use client'
import React from 'react'
import Header from '../components/Header'
import { FaPhoneVolume,FaEnvelope,FaLocationDot,FaTwitter,FaDiscord } from "react-icons/fa6";
import { CiInstagram } from "react-icons/ci";
import { useForm, SubmitHandler } from "react-hook-form"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
type Inputs = {
    example: string
    exampleRequired: string
    firstName: string
    lastName: string
    email: string
    phoneNumber: number
    message: string
  }
function page() {
    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm<Inputs>()
      const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data) 
    return(
<>
<Header/>
<section className='w-screen  px-20 max-md:px-10 max-sm:px-4 flex flex-col gap-6 items-center py-4 bg-white  top-0 text-black pt-24'>
    <div className='flex flex-col gap-4 items-center w-full text-center'>
<h1 className="text-[4vw] font-semibold text-[#9E0C39] leading-snug">
        Contact Us
      </h1>
      <p className='text-gray-500 text-lg'>Any question or remarks? Just write us a message!</p>
    </div>
    <div className='flex gap-8 w-full justify-between max-md:flex-col max-sm:items-center'>
      <div className=''>
        <div className='w-[25rem] xl:w-[25rem] h-[500px] max-md:w-full bg-[#011C2A] rounded-md text-white p-8 flex flex-col justify-between overflow-hidden relative'>
            <span className='absolute w-24 h-24 rounded-full bg-white opacity-20 right-12 bottom-12'></span>
            <span className='absolute w-60 h-60 bg-white opacity-20 -bottom-28 -right-28 rounded-full'></span>
            <div className='flex flex-col gap-2'>
            <h5 className='text-2xl font-semibold'>Contact Information</h5>
            <p>Say something to start a live chat!</p>
            </div>
            <div className='flex flex-col gap-4'>
                <div className='flex gap-2 items-center'>
                <FaPhoneVolume />
                <span>+1012 3456 789</span>
                </div>
                <div className='flex gap-2 items-center'>
                <FaEnvelope />
                <span>demo@gamil.com</span>
                </div>
                <div className='flex gap-2'>
                <FaLocationDot className='mt-1' />
                <span>123 Dartmouth Street Baston, Massachusetts 02165 Unites States</span>
                </div>
            </div>
            <div className='flex gap-3 items-center'>
                <div className=' bg-[#9E0C39] text-center content-center rounded-full w-8 h-8 flex items-center justify-center cursor-pointer'><FaTwitter /></div>
                <div className=' bg-white text-[#011C2A] text-center content-center rounded-full w-8 h-8 flex items-center justify-center cursor-pointer'><CiInstagram  /></div>
                <div className=' bg-[#9E0C39] text-center content-center rounded-full w-8 h-8 flex items-center justify-center cursor-pointer'><FaDiscord  /></div>
            </div>
            </div>
      </div>

        <div className='w-2/3 max-md:w-full flex flex-col gap-8 p-4 items-center'>
           <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col gap-8 max-md:gap-4 item-center'>
            <div className='flex gap-4 items-center max-lg:flex-col'>
           <input type="text" placeholder="First Name" className="px-0 py-2 text-sm border-b border-slate-400 w-60 max-md:w-full outline-none focus:border-[#9E0C39]" {...register("firstName")} />
           <input type="text" placeholder="Last Name" className="px-0 py-2 text-sm border-b border-slate-400 w-60 outline-none max-md:w-full focus:border-[#9E0C39]" {...register("lastName")} />
            </div>
            <div className='flex gap-4 items-center max-lg:flex-col'>
           <input type="email" placeholder="Email" className="px-0 py-2 text-sm border-b border-slate-400 w-60 outline-none max-md:w-full focus:border-[#9E0C39]" {...register("email")} />
           <input type="number" placeholder="Phone number" className="px-0 py-2 text-sm border-b border-slate-400 w-60 outline-none max-md:w-full focus:border-[#9E0C39]" {...register("phoneNumber")} />
            </div>

           <div className='flex flex-col gap-2 w-full text-[#011C2A]'>
            <h5 className='font-semibold text-[#011C2A]'>Select Subject?</h5>
            <RadioGroup defaultValue="1" className='flex gap-4 font-light text-lg flex-wrap'>
      <div className="flex items-center gap-1">
        <RadioGroupItem value="1" id="r1" />
        <Label htmlFor="r1" className='cursor-pointer font-normal'>General Inquiry</Label>
      </div>
      <div className="flex items-center gap-1">
        <RadioGroupItem value="2" id="r2" />
        <Label htmlFor="r2" className='cursor-pointer font-normal'>General Inquiry</Label>
      </div>
      <div className="flex items-center gap-1">
        <RadioGroupItem value="3" id="r3" />
        <Label htmlFor="r3" className='cursor-pointer font-normal'>General Inquiry</Label>
      </div>
      <div className="flex items-center gap-1">
        <Label htmlFor="r4" className='cursor-pointer font-normal'>General Inquiry</Label>
      </div>
    </RadioGroup>
           </div>
           <input type="text" placeholder="Write your message." className="px-0 py-2 w-full text-sm border-b border-slate-400 mt-10 outline-none focus:border-[#9E0C39]" {...register("message")} />
           <div className='w-full flex items-center justify-end'>
           <input type="submit" value='Send Message' className="px-6 py-1 border border-[#9E0C39]  rounded-sm cursor-pointer bg-[#9E0C39] text-white duration-150 text-center my-4" />
           </div>
           </form>
        </div>
    </div>
</section>
</>
    )}
export default page