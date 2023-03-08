import React from 'react'
import TopNav from '../../topnav/topNav'
export default function courseMaintenanceCreate() {
  return (
    <div className="flex flex-1 w-full pt-5 pb-5 pr-5 overflow-hidden">
      <div className="bg-[#F7F7F7]  rounded-xl h-full p-9 flex flex-col gap-10 overflow-y-scroll scroller w-full ">
        <TopNav />
        <div className="">
          <form className="grid 2xl:grid-cols-3 lg:grid-cols-2 grid-cols-1 gap-10">
            <div>
              <input
                type="text"
                placeholder="Nombre del curso"
                className="py-4 px-5 w-full outline-none focus:border-2 focus:border-black border-2 border-white"
              />
            </div>
            <div>
              <input
                type="text"
                placeholder="Nombre del curso"
                className="py-4 px-5 w-full outline-none focus:border-2 focus:border-black border-2 border-white"
              />
            </div>
            <div>
              <input
                type="text"
                placeholder="Nombre del curso"
                className="py-4 px-5 w-full outline-none focus:border-2 focus:border-black border-2 border-white"
              />
            </div>
            <div>
              <input
                type="text"
                placeholder="Nombre del curso"
                className="py-4 px-5 w-full outline-none focus:border-2 focus:border-black border-2 border-white"
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}
