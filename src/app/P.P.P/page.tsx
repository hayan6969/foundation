import React from 'react'
import Header from '../components/Header'
import ServiceSection from '../components/Sections/ServiceSection'
import Image from 'next/image'

function page() {
  return (
    <>
    <Header/>
    <section className='w-screen flex flex-col items-center gap-8 px-20 max-md:px-10 max-sm:px-4 overflow-hidden text-black py-20 text-center'>
    <h1 className='text-[4vw] max-md:text-[9vw] font-semibold text-[#9E0C39] leading-snug'>Welcome to Purple Paw Project {'(P.P.P)'}</h1>
    <p className='mx-24 max-lg:mx-0 text-lg'>At the Purple Paw Project, we are committed to ensuring that individuals escaping domestic violence do not have to sacrifice the safety of their cherished pets. Disturbingly, 40% of those facing domestic abuse feel unable to leave their situation due to concerns for their animals. Furthermore, 25% of survivors return to abusive environments because they worry about their pets' welfare. The Red Orchard Foundation is taking steps to make a difference.
    </p>
    <button className='px-4 py-1 border border-[#9E0C39]  rounded-sm cursor-pointer bg-[#9E0C39] text-white duration-150'>Join Now</button>
    </section>
<section className='w-screen flex flex-col gap-12 py-10 px-20 max-md:px-10 max-sm:px-4 overflow-hidden'>
  <div className='flex max-md:flex-col gap-4 item-center w-full'>
  <div className='flex flex-col text-black w-full gap-4'>
  <h3 className='text-3xl font-semibold text-[#9E0C39]'>Our Vision</h3>
    <p className='text-lg max-lg:text-base'>At the Purple Paw Project, we are committed to ensuring that individuals escaping domestic violence do not have to sacrifice the safety of their cherished pets. Disturbingly, 40% of those facing domestic abuse feel unable to leave their situation due to concerns for their animals. Furthermore, 25% of survivors return to abusive environments because they worry about their pets' welfare. The Red Orchard Foundation is taking steps to make a difference.
    </p>
  </div>
    <div className='w-full rounded-md overflow-hidden'>
      <Image src={'https://images.unsplash.com/photo-1504805572947-34fad45aed93?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fG91ciUyMHZpc2lvbnxlbnwwfHwwfHx8MA%3D%3D'} width={150} height={200} alt='' className='w-full rounded-md'/>
    </div>
  </div>
  <div className='flex max-md:flex-col-reverse gap-4 item-center w-full '>
    <div className='w-full  h-full rounded-md overflow-hidden'>
      <Image src={'https://images.unsplash.com/photo-1673515336391-c63034623475?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGhvdyUyMG91ciUyMHByb2JsZW0lMjBvcGVyYXRlfGVufDB8MHwwfHx8MA%3D%3D'} width={150} height={200} alt='' className='w-full rounded-md'/>
    </div>
  <div className='flex flex-col gap-4 text-black w-full'>
  <h3 className='text-3xl font-semibold text-[#9E0C39] leading-snug'>How Our Program Operates</h3>
    <p className='text-lg max-lg:text-base'>When a survivor reaches out for assistance, our team promptly mobilizes to help. We  figure out what the best option for them is, foster of their animal, finding them a pet friendly shelter, or providing the animals a place at a boarding facility. We contact everyone in our network enabling the survivor to concentrate on rebuilding their life. Foster placements can last up to 120 days, during which we also help survivors prepare for life going forward.
    </p>
  </div>
  </div>
  <div className='flex max-md:flex-col gap-4 item-center w-full '>
  <div className='flex flex-col gap-4 text-black w-full'>
  <h3 className='text-3xl font-semibold text-[#9E0C39] leading-snug'>The Healing Power of Pets</h3>
    <p className='text-lg max-lg:text-base'>The bond between people and their pets is invaluable, providing both emotional support and physical health benefits. For survivors of domestic violence, this relationship can be a vital source of comfort in times of trauma. Studies reveal that nearly 70% of domestic violence victims own pets, with many reporting that their animals have suffered abuse at the hands of their abuser. This stark reality underscores the significance of our program, as approximately 48% of survivors hesitate to leave an abusive situation if they cannot take their pet with them.

    </p>
  </div>
    <div className='w-full h-full rounded-md overflow-hidden'>
      <Image src={'https://plus.unsplash.com/premium_photo-1664543258863-86b1889d8545?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aGVhbGluZyUyMHBvd2VyJTIwb2YlMjBwZXR8ZW58MHwwfDB8fHww'} width={150} height={200} alt='' className='w-full rounded-md'/>
    </div>
  </div>
  <div className='flex max-md:flex-col-reverse gap-4 item-center w-full '>
    <div className='w-full h-full rounded-md overflow-hidden'>
      <Image src={'https://images.unsplash.com/photo-1540299265498-c41433d9a1c3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGVuZGluZyUyMG9mJTIwY3ljbGUlMjBvZiUyMGNvbnRyb2x8ZW58MHwwfDB8fHww'} width={150} height={200} alt='' className='w-full rounded-md'/>
    </div>
  <div className='flex flex-col gap-4 text-black w-full'>
  <h3 className='text-3xl font-semibold text-[#9E0C39] leading-snug'>Ending the Cycle of Control</h3>
    <p className='text-lg max-lg:text-base'>Abusive partners often manipulate the bond between victims and their pets as a tactic for control and isolation. The Purple Paw Project aims to dismantle this cycle by providing a safe haven for pets, enabling survivors to escape without the additional burden of worrying about their animal's safety. With only 15% of domestic violence shelters in the United States accommodating pets, our initiative is at the forefront of driving necessary change.
    </p>
  </div>
  </div>
 
<div className='flex flex-col gap-4 py-8 '>
<h3 className='text-3xl font-semibold text-[#9E0C39] leading-snug w-full text-center'>Join Us In Our Mission</h3>
    <p className=' text-lg text-center'>Join us in our mission to keep survivors of domestic violence and their pets united. Together, we can safeguard these important bonds and ensure that no one has to confront abuse alone. If you or someone you know needs assistance, please reach out to us. Together, we can make a meaningful impact.
    </p>
</div>
</section>
    {/* <ServiceSection/> */}
    </>
  )
}

export default page
