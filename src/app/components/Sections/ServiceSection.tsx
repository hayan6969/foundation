import React from "react";

function ServiceSection() {
  return (
    <section className="w-screen flex flex-col  items-center max-md:items-start gap-8 px-20 max-md:px-10 max-sm:px-4 overflow-hidden text-black py-20 text-center">
      <h1 className="text-[4vw] font-semibold text-[#9E0C39] leading-snug w-full text-center">
        Services
      </h1>
      <div className="flex flex-col gap-6">
        <div className="flex gap-2 items-center">
        <svg width="90" height="90" viewBox="0 0 108 108" fill="none" xmlns="http://www.w3.org/2000/svg" className="max-md:hidden block">
<circle cx="54" cy="54" r="54" fill="#FFBFBF"/>
<path d="M65.8704 34.625C61.3565 34.625 57.4588 37.2684 55.5 41.1241C53.5412 37.2684 49.6435 34.625 45.1297 34.625C38.6593 34.625 33.4167 40.0509 33.4167 46.7289C33.4167 53.4069 37.4292 59.5284 42.6144 64.5568C47.7996 69.5851 55.5 74.375 55.5 74.375C55.5 74.375 62.9509 69.6646 68.3856 64.5568C74.1825 59.111 77.5834 53.4267 77.5834 46.7289C77.5834 40.031 72.3408 34.625 65.8704 34.625Z" fill="black" fill-opacity="0.16"/>
<path d="M65.8704 34.625C61.3565 34.625 57.4588 37.2684 55.5 41.1241C53.5412 37.2684 49.6435 34.625 45.1297 34.625C38.6593 34.625 33.4167 40.0509 33.4167 46.7289C33.4167 53.4069 37.4292 59.5284 42.6144 64.5568C47.7996 69.5851 55.5 74.375 55.5 74.375C55.5 74.375 62.9509 69.6646 68.3856 64.5568C74.1825 59.111 77.5834 53.4267 77.5834 46.7289C77.5834 40.031 72.3408 34.625 65.8704 34.625Z" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
        <svg width="50" height="50" viewBox="0 0 108 108" fill="none" xmlns="http://www.w3.org/2000/svg" className="block md:hidden">
<circle cx="54" cy="54" r="54" fill="#FFBFBF"/>
<path d="M65.8704 34.625C61.3565 34.625 57.4588 37.2684 55.5 41.1241C53.5412 37.2684 49.6435 34.625 45.1297 34.625C38.6593 34.625 33.4167 40.0509 33.4167 46.7289C33.4167 53.4069 37.4292 59.5284 42.6144 64.5568C47.7996 69.5851 55.5 74.375 55.5 74.375C55.5 74.375 62.9509 69.6646 68.3856 64.5568C74.1825 59.111 77.5834 53.4267 77.5834 46.7289C77.5834 40.031 72.3408 34.625 65.8704 34.625Z" fill="black" fill-opacity="0.16"/>
<path d="M65.8704 34.625C61.3565 34.625 57.4588 37.2684 55.5 41.1241C53.5412 37.2684 49.6435 34.625 45.1297 34.625C38.6593 34.625 33.4167 40.0509 33.4167 46.7289C33.4167 53.4069 37.4292 59.5284 42.6144 64.5568C47.7996 69.5851 55.5 74.375 55.5 74.375C55.5 74.375 62.9509 69.6646 68.3856 64.5568C74.1825 59.111 77.5834 53.4267 77.5834 46.7289C77.5834 40.031 72.3408 34.625 65.8704 34.625Z" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

          <span className="text-lg font-semibold">Adoption</span>: Connecting
          rescued animals with loving forever homes.
        </div>
        <div className="flex gap-2 items-center pl-20 max-lg:pl-10 max-md:pl-0">
        <svg width="90" height="90" viewBox="0 0 108 108" fill="none" xmlns="http://www.w3.org/2000/svg" className="max-md:hidden block">
<circle cx="54" cy="54" r="54" fill="#FFCFDE"/>
<path d="M37.7044 72.0833V48.6938L29.727 54.6458L28.1667 52.5998L54 33.3333L65.2272 41.6594V35.9166H70.0968V45.3174L79.8824 52.5998L78.3247 54.6458L70.3448 48.6938V72.0833H57.1801V58.5725H50.8199V72.0833H37.7044ZM40.2877 69.5H48.2392V55.9891H59.766V69.5H67.764V46.7925L54 36.578L40.2877 46.7925V69.5ZM49.3294 48.8488H58.6707C58.6707 47.6364 58.204 46.6383 57.2705 45.8547C56.3354 45.0711 55.2452 44.6793 54 44.6793C52.7549 44.6793 51.6655 45.0694 50.7321 45.8496C49.7987 46.6297 49.3311 47.6312 49.3294 48.8488ZM48.2392 69.5V55.9891H59.766H48.2366L48.2392 69.5Z" fill="black"/>
</svg>
        <svg width="50" height="50" viewBox="0 0 108 108" fill="none" xmlns="http://www.w3.org/2000/svg" className="block md:hidden">
<circle cx="54" cy="54" r="54" fill="#FFCFDE"/>
<path d="M37.7044 72.0833V48.6938L29.727 54.6458L28.1667 52.5998L54 33.3333L65.2272 41.6594V35.9166H70.0968V45.3174L79.8824 52.5998L78.3247 54.6458L70.3448 48.6938V72.0833H57.1801V58.5725H50.8199V72.0833H37.7044ZM40.2877 69.5H48.2392V55.9891H59.766V69.5H67.764V46.7925L54 36.578L40.2877 46.7925V69.5ZM49.3294 48.8488H58.6707C58.6707 47.6364 58.204 46.6383 57.2705 45.8547C56.3354 45.0711 55.2452 44.6793 54 44.6793C52.7549 44.6793 51.6655 45.0694 50.7321 45.8496C49.7987 46.6297 49.3311 47.6312 49.3294 48.8488ZM48.2392 69.5V55.9891H59.766H48.2366L48.2392 69.5Z" fill="black"/>
</svg>

          <span className="text-lg font-semibold">Fostering</span>: Temporary
          homes for animals in transition.
        </div>
        <div className="flex gap-2 items-center pl-40 max-lg:pl-20 max-md:pl-0">
        <svg width="90" height="90" viewBox="0 0 108 108" fill="none" xmlns="http://www.w3.org/2000/svg" className="max-md:hidden block">
<circle cx="54" cy="54" r="54" fill="#D5F0FF"/>
<path d="M54.5 75.5834C49.384 74.2952 45.1602 71.3596 41.8286 66.7765C38.4969 62.1935 36.8318 57.1055 36.8333 51.5125V38.0417L54.5 31.4167L72.1666 38.0417V51.5125C72.1666 57.107 70.5016 62.1957 67.1714 66.7787C63.8412 71.3618 59.6174 74.2966 54.5 75.5834ZM54.5 70.9459C58.3278 69.7313 61.493 67.3021 63.9958 63.6584C66.4986 60.0146 67.75 55.966 67.75 51.5125V41.0781L54.5 36.1094L41.25 41.0781V51.5125C41.25 55.966 42.5014 60.0146 45.0041 63.6584C47.5069 67.3021 50.6722 69.7313 54.5 70.9459Z" fill="black"/>
</svg>
        <svg width="50" height="50" viewBox="0 0 108 108" fill="none" xmlns="http://www.w3.org/2000/svg" className="block md:hidden">
<circle cx="54" cy="54" r="54" fill="#D5F0FF"/>
<path d="M54.5 75.5834C49.384 74.2952 45.1602 71.3596 41.8286 66.7765C38.4969 62.1935 36.8318 57.1055 36.8333 51.5125V38.0417L54.5 31.4167L72.1666 38.0417V51.5125C72.1666 57.107 70.5016 62.1957 67.1714 66.7787C63.8412 71.3618 59.6174 74.2966 54.5 75.5834ZM54.5 70.9459C58.3278 69.7313 61.493 67.3021 63.9958 63.6584C66.4986 60.0146 67.75 55.966 67.75 51.5125V41.0781L54.5 36.1094L41.25 41.0781V51.5125C41.25 55.966 42.5014 60.0146 45.0041 63.6584C47.5069 67.3021 50.6722 69.7313 54.5 70.9459Z" fill="black"/>
</svg>

          <span className="text-lg font-semibold">Rescue Operations</span>:
          Emergency rescue for animals in distress.
        </div>
        <div className="flex gap-2 items-center pl-60 max-lg:pl-32 max-md:pl-0">
        <svg width="90" height="90" viewBox="0 0 108 108" fill="none" xmlns="http://www.w3.org/2000/svg" className="max-md:hidden block">
<circle cx="54" cy="54" r="54" fill="#E3C0FF"/>
<path d="M63.25 31.5H46.75V45.75H32.5V62.25H46.75V76.5H63.25V62.25H77.5V45.75H63.25V31.5ZM74.5 48.75V59.25H60.25V73.5H49.75V59.25H35.5V48.75H49.75V34.5H60.25V48.75H74.5Z" fill="black"/>
</svg>
        <svg width="50" height="50" viewBox="0 0 108 108" fill="none" xmlns="http://www.w3.org/2000/svg" className="block md:hidden">
<circle cx="54" cy="54" r="54" fill="#E3C0FF"/>
<path d="M63.25 31.5H46.75V45.75H32.5V62.25H46.75V76.5H63.25V62.25H77.5V45.75H63.25V31.5ZM74.5 48.75V59.25H60.25V73.5H49.75V59.25H35.5V48.75H49.75V34.5H60.25V48.75H74.5Z" fill="black"/>
</svg>

          <span className="text-lg font-semibold">Medical Care</span>:
          Vaccinations, spaying/neutering, and rehanilitaion.
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
                  <p className="text-sm text-slate-500">Jerry's Adopter</p>
                </div>
            </div>
            <p className="text-start">Lorem ipsum dolor sit amet consectetur. Id tellus purus sapien amet donec. Ut vulputate hendrerit porttitor dictum sed montes varius nisl. Aenean a tristique tempor malesuada nulla. Euismod eget feugiat habitant dui. Lorem ipsum dolor sit amet consectetur. Id tellus purus sapien amet donec. Ut vulputate hendrerit porttitor dictum sed montes varius nisl. Aenean a tristique tempor malesuada nulla. Euismod eget feugiat habitant dui.</p>
        </div>
      </div>
      </div>
    </section>
  );
}

export default ServiceSection;
