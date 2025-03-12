import React from 'react'
import Header from '../components/Header'

function page() {
  return (
    <>
      <Header/>
      <section className='w-screen flex flex-col  items-center gap-8 px-20 max-md:px-10 max-sm:px-4 overflow-hidden text-black py-20 text-center'>
    <h1 className='text-[4vw] max-md:text-[9vw] font-semibold text-[#9E0C39] leading-snug'>Support for veterans in their transition back to civilian life.</h1>
    <p className='mx-24 max-lg:mx-0'>Animals provide companionship and emotional support, easing veterans transition to civilian life. Adoption programs connect veterans with loving pets, fostering healing, reducing stress, and building strong, lasting bonds for mutual well-being.</p>
    <button className='px-4 py-1 border border-[#9E0C39]  rounded-sm cursor-pointer bg-[#9E0C39] text-white duration-150 hover:shadow-[2px 2px 5px #9E0C39]'>Join Now</button>
    </section>
    <div className='flex gap-4 justify-between items-center w-screen px-20 max-md:px-10 max-sm:px-4 overflow-hidden max-md:hidden '>
      <div className='h-60 w-44  bg-slate-300 rounded-sm'></div>
      <div className='h-60 w-44  bg-slate-300 rounded-sm mt-20 max-md:mt-0'></div>
      <div className='h-60 w-44  bg-slate-300 rounded-sm'></div>
      <div className='h-60 w-44  bg-slate-300 rounded-sm mt-20 max-md:mt-0'></div>
    </div>
    <div className='flex flex-col gap-6 items-center md:hidden'>
      <div className='flex gap-6 items-center max-sm:flex-col'>
      <div className='h-60 w-44  bg-slate-300 rounded-sm'></div>
      <div className='h-60 w-44  bg-slate-300 rounded-sm'></div>
      </div>
      <div className='flex gap-6 items-center max-sm:flex-col'>
      <div className='h-60 w-44  bg-slate-300 rounded-sm'></div>
      <div className='h-60 w-44  bg-slate-300 rounded-sm'></div>
      </div>
    </div>
    <section className="w-screen flex flex-col  items-center max-md:items-start gap-8 px-20 max-md:px-10 max-sm:px-4 py-10 overflow-hidden text-black  text-center">
      <h1 className="text-[4vw] max-md:text-[9vw] font-semibold text-[#9E0C39] leading-snug w-full text-center">
        Services
      </h1>
      <div className="flex flex-col max-sm:items-center w-full gap-6">
        <div className="flex max-sm:flex-col max-sm:items-center gap-2 max-md:items-start max-md:text-start items-center">
          <svg
            width="90"
            height="90"
            viewBox="0 0 108 108"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="max-md:hidden block"
          >
            <circle cx="54" cy="54" r="54" fill="#FFBFBF" />
            <path
              d="M65.8704 34.625C61.3565 34.625 57.4588 37.2684 55.5 41.1241C53.5412 37.2684 49.6435 34.625 45.1297 34.625C38.6593 34.625 33.4167 40.0509 33.4167 46.7289C33.4167 53.4069 37.4292 59.5284 42.6144 64.5568C47.7996 69.5851 55.5 74.375 55.5 74.375C55.5 74.375 62.9509 69.6646 68.3856 64.5568C74.1825 59.111 77.5834 53.4267 77.5834 46.7289C77.5834 40.031 72.3408 34.625 65.8704 34.625Z"
              fill="black"
              fill-opacity="0.16"
            />
            <path
              d="M65.8704 34.625C61.3565 34.625 57.4588 37.2684 55.5 41.1241C53.5412 37.2684 49.6435 34.625 45.1297 34.625C38.6593 34.625 33.4167 40.0509 33.4167 46.7289C33.4167 53.4069 37.4292 59.5284 42.6144 64.5568C47.7996 69.5851 55.5 74.375 55.5 74.375C55.5 74.375 62.9509 69.6646 68.3856 64.5568C74.1825 59.111 77.5834 53.4267 77.5834 46.7289C77.5834 40.031 72.3408 34.625 65.8704 34.625Z"
              stroke="black"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
          <svg
            width="50"
            height="50"
            viewBox="0 0 108 108"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="block md:hidden max-sm:-translate-y-2"
          >
            <circle cx="54" cy="54" r="54" fill="#FFBFBF" />
            <path
              d="M65.8704 34.625C61.3565 34.625 57.4588 37.2684 55.5 41.1241C53.5412 37.2684 49.6435 34.625 45.1297 34.625C38.6593 34.625 33.4167 40.0509 33.4167 46.7289C33.4167 53.4069 37.4292 59.5284 42.6144 64.5568C47.7996 69.5851 55.5 74.375 55.5 74.375C55.5 74.375 62.9509 69.6646 68.3856 64.5568C74.1825 59.111 77.5834 53.4267 77.5834 46.7289C77.5834 40.031 72.3408 34.625 65.8704 34.625Z"
              fill="black"
              fill-opacity="0.16"
            />
            <path
              d="M65.8704 34.625C61.3565 34.625 57.4588 37.2684 55.5 41.1241C53.5412 37.2684 49.6435 34.625 45.1297 34.625C38.6593 34.625 33.4167 40.0509 33.4167 46.7289C33.4167 53.4069 37.4292 59.5284 42.6144 64.5568C47.7996 69.5851 55.5 74.375 55.5 74.375C55.5 74.375 62.9509 69.6646 68.3856 64.5568C74.1825 59.111 77.5834 53.4267 77.5834 46.7289C77.5834 40.031 72.3408 34.625 65.8704 34.625Z"
              stroke="black"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
          <span className="text-lg font-semibold">Equibe Therapy :</span> Details about equine therapy sessions and their benefits.
        </div>
        <div className="flex max-sm:flex-col max-sm:items-center max-sm:text-center gap-2 items-center max-md:items-start max-md:text-start pl-20 max-lg:pl-10 max-md:pl-0">
          <svg
            width="90"
            height="90"
            viewBox="0 0 108 108"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="max-md:hidden block"
          >
            <circle cx="54" cy="54" r="54" fill="#FFCFDE" />
            <path
              d="M37.7044 72.0833V48.6938L29.727 54.6458L28.1667 52.5998L54 33.3333L65.2272 41.6594V35.9166H70.0968V45.3174L79.8824 52.5998L78.3247 54.6458L70.3448 48.6938V72.0833H57.1801V58.5725H50.8199V72.0833H37.7044ZM40.2877 69.5H48.2392V55.9891H59.766V69.5H67.764V46.7925L54 36.578L40.2877 46.7925V69.5ZM49.3294 48.8488H58.6707C58.6707 47.6364 58.204 46.6383 57.2705 45.8547C56.3354 45.0711 55.2452 44.6793 54 44.6793C52.7549 44.6793 51.6655 45.0694 50.7321 45.8496C49.7987 46.6297 49.3311 47.6312 49.3294 48.8488ZM48.2392 69.5V55.9891H59.766H48.2366L48.2392 69.5Z"
              fill="black"
            />
          </svg>
          <svg
            width="50"
            height="50"
            viewBox="0 0 108 108"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="block md:hidden max-sm:-translate-y-2"
          >
            <circle cx="54" cy="54" r="54" fill="#FFCFDE" />
            <path
              d="M37.7044 72.0833V48.6938L29.727 54.6458L28.1667 52.5998L54 33.3333L65.2272 41.6594V35.9166H70.0968V45.3174L79.8824 52.5998L78.3247 54.6458L70.3448 48.6938V72.0833H57.1801V58.5725H50.8199V72.0833H37.7044ZM40.2877 69.5H48.2392V55.9891H59.766V69.5H67.764V46.7925L54 36.578L40.2877 46.7925V69.5ZM49.3294 48.8488H58.6707C58.6707 47.6364 58.204 46.6383 57.2705 45.8547C56.3354 45.0711 55.2452 44.6793 54 44.6793C52.7549 44.6793 51.6655 45.0694 50.7321 45.8496C49.7987 46.6297 49.3311 47.6312 49.3294 48.8488ZM48.2392 69.5V55.9891H59.766H48.2366L48.2392 69.5Z"
              fill="black"
            />
          </svg>
          <span className="text-lg font-semibold">Job Traning :</span> Information on career support and job readiness programs.
        </div>
      </div>
      <div className="flex flex-col gap-4 justify-between items-center text-black">
        <h1 className="text-[4vw] max-md:text-[9vw] font-semibold text-[#9E0C39] leading-snug py-20 max-md:py-10">
          Success Stories
        </h1>
        <div className="flex gap-4 max-md:flex-col">
          <div className="w-[40vw] h-60 bg-slate-300 max-md:w-full"></div>
          <div className="w-full flex flex-col gap-6">
            <div className="flex gap-2 items-center">
              <div className="w-10 h-10 rounded-full bg-slate-300"></div>
              <div className="">
                <h3 className="text-lg font-semibold">Helen Cory</h3>
                <p className="text-sm text-slate-500">Jerry&apos;s Adopter</p>
              </div>
            </div>
            <p className="text-start">
              Lorem ipsum dolor sit amet consectetur. Id tellus purus sapien
              amet donec. Ut vulputate hendrerit porttitor dictum sed montes
              varius nisl. Aenean a tristique tempor malesuada nulla. Euismod
              eget feugiat habitant dui. Lorem ipsum dolor sit amet consectetur.
              Id tellus purus sapien amet donec. Ut vulputate hendrerit
              porttitor dictum sed montes varius nisl. Aenean a tristique tempor
              malesuada nulla. Euismod eget feugiat habitant dui.
            </p>
          </div>
        </div>
      </div>
    </section>
    </>
  )
}

export default page
