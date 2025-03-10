import React from "react";
import ProgramCard from "../ProgramCard";
import Image from "next/image";
import Link from "next/link";

function ProgramSection() {
  return (
    <section className="w-screen min-h-screen flex flex-col items-center gap-8 pt-10 px-20 max-md:px-10 max-sm:px-4">
      <h2 className="text-4xl font-semibold text-[#9E0C39]">Programs</h2>
      <div className="w-full flex gap-4 max-md:flex-col justify-between items-center max-md:hidden">
        <ProgramCard/>
      </div>
      <div className="w-full flex gap-4 max-md:flex-col justify-between items-center md:hidden">
        <div className="flex gap-4 justify-between items-center max-md:justify-center max-sm:flex-col">
          <div className="w-[12rem] flex flex-col p-4 gap-4 text-black items-center justify-between h-[20rem] ">
            <div className="h-[7rem] w-full rounded-md textc bg-gray-400 overflow-hidden">
              {" "}
              <Image
                src="https://picsum.photos/200"
                width={200}
                height={200}
                alt=""
                className="h-full w-full"
              />
            </div>
            <h5 className="text-lg font-medium w-full text-center">
              Red Orchard Animal Rescue {"(ROAR)"}{" "}
            </h5>
            <div>
              <Link href='/Roar' className="px-4 py-1 border border-[#9E0C39] text-[#9E0C39] hover:bg-[#9E0C39] hover:text-white duration-200 cursor-pointer">
                Learn More
              </Link>
            </div>
          </div>
          <div className="w-[12rem] flex flex-col p-4 gap-4 text-black items-center justify-between h-[20rem] ">
            <div className="h-[7rem] w-full rounded-md textc bg-gray-400 overflow-hidden">
              {" "}
              <Image
                src="https://picsum.photos/200"
                width={200}
                height={200}
                alt=""
                className="h-full w-full"
              />
            </div>
            <h5 className="text-xl font-medium w-full text-center">
            {/* EACH - Ref Orchard Empowering All Combact Heroes */}
            The Warrior Project
            </h5>
            <div>
              <Link href='/Warrior-Project' className="px-4 py-1 border border-[#9E0C39] text-[#9E0C39] hover:bg-[#9E0C39] hover:text-white duration-200 cursor-pointer">
                Learn More
              </Link>
            </div>
          </div>
        </div>
        <div className="flex gap-4 justify-between items-center max-md:justify-center max-sm:flex-col">
          <div className="w-[12rem] flex flex-col p-4 gap-4 text-black items-center justify-between h-[20rem] ">
            <div className="h-[7rem] w-full rounded-md textc bg-gray-400 overflow-hidden">
              {" "}
              <Image
                src="https://picsum.photos/200"
                width={200}
                height={200}
                alt=""
                className="h-full w-full"
              />
            </div>
            <h5 className="text-lg font-medium w-full text-center">
            P.P.P - Purple Paw Project
            </h5>
            <div>
              <Link href='/P.P.P' className="px-4 py-1 border border-[#9E0C39] text-[#9E0C39] hover:bg-[#9E0C39] hover:text-white duration-200 cursor-pointer">
                Learn More
              </Link>
            </div>
          </div>
          <div className="w-[12rem] flex flex-col p-4 gap-4 text-black items-center justify-between h-[20rem] ">
            <div className="h-[7rem] w-full rounded-md textc bg-gray-400 overflow-hidden">
              {" "}
              <Image
                src="https://picsum.photos/200"
                width={200}
                height={200}
                alt=""
                className="h-full w-full"
              />
            </div>
            <h5 className="text-lg font-medium w-full text-center">
            HEAL - Helping Everyone After Loss
            </h5>
            <div>
              <Link href='/HEAL' className="px-4 py-1 border border-[#9E0C39] text-[#9E0C39] hover:bg-[#9E0C39] hover:text-white duration-200 cursor-pointer">
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ProgramSection;
