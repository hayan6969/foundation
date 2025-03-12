import React from 'react'
import Header from '../components/Header'

function Page() {
  return (
    <>
    <Header/>
    <section className='w-screen flex flex-col  items-center gap-8 px-20 max-md:px-10 max-sm:px-4 overflow-hidden text-black py-20 text-center'>
    <h1 className='text-[4vw] max-md:text-[9vw] font-semibold text-[#9E0C39] leading-snug'>Welcome to the WARRIOR Project</h1>
    <p className='mx-24 max-lg:mx-0'>The WARRIOR Project (Wellness and Assistance through Riding and Recovery for Our Veterans) is dedicated to empowering veterans through the transformative experience of equine-assisted therapy. Our mission is to provide a safe and supportive environment where veterans can reconnect with themselves and others while engaging in meaningful interactions with horses.</p>
    <button className='px-4 py-1 border border-[#9E0C39]  rounded-sm cursor-pointer bg-[#9E0C39] text-white duration-150'>Join Now</button>
    </section>
    <section className='w-screen flex flex-col gap-8 px-20 max-md:px-10 max-sm:px-4 overflow-hidden text-black py-10'>
    <h1 className='text-[4vw] max-md:text-[9vw] font-semibold text-[#9E0C39] leading-snug'>Why Warrior ?</h1>
    <p>We understand the unique challenges faced by veterans as they transition to civilian life. The WARRIOR Project offers a holistic approach to healing, focusing on mental wellness, emotional resilience, and community building. Through our carefully designed sessions, participants will have the opportunity to engage in mounted and unmounted activities that promote personal growth, self-discovery, and camaraderie.</p>
    </section>
    <section className='w-screen flex flex-col gap-8 px-20 max-md:px-10 max-sm:px-4 overflow-hidden text-black py-10'>
    <h1 className='text-[4vw] max-md:text-[9vw] font-semibold text-[#9E0C39] leading-snug'>What We Offer:</h1>
    <div className='flex flex-col gap-4'>
    <p><b className='text-[#011C2A]'>Equine-Assisted Therapy with American Mustangs:</b> Experience the therapeutic benefits of working with American Mustang horses in a nurturing setting, guided by trained professionals. These resilient horses reflect the strength and spirit of our veterans, fostering empowerment and connection.</p>
    <p><b className='text-[#011C2A]'>Group Workshops:</b> Participate in group workshops that cover topics like stress management, mindfulness, and coping strategies, fostering a sense of community and shared experience.</p>
    <p><b className='text-[#011C2A]'>Adventure Retreats:</b> Join our seasonal retreats that combine outdoor activities, team-building exercises, and equine learning experiences, designed to promote bonding and healing.</p>
    <p><b className='text-[#011C2A]'>Family Support Programs:</b> Engage in family-focused sessions that help strengthen relationships and improve communication among veterans and their loved ones</p>
    <p><b className='text-[#011C2A]'>Community Outreach Events:</b> Attend events aimed at raising awareness about veteran issues and promoting community involvement, providing opportunities for networking and support.</p>
    <p><b className='text-[#011C2A]'>Volunteer Opportunities:</b> Get involved as a volunteer, helping facilitate sessions, assist with horses, or support administrative tasks while making a meaningful contribution to the veteran community.</p>
    </div>
    </section>
    <section className='w-screen flex flex-col gap-8 px-20 max-md:px-10 max-sm:px-4 overflow-hidden text-black py-10'>
    <h1 className='text-[4vw] max-md:text-[9vw] font-semibold text-[#9E0C39] leading-snug'>Get Involved:</h1>
    <p>Whether you are a veteran seeking support, a family member wanting to learn more, or a community member interested in partnering with us, we invite you to explore the WARRIOR Project. Together, we can honor the sacrifices of those who have served and promote healing through the power of equine companionship.</p>
    </section>
    </>
  )
}

export default Page
