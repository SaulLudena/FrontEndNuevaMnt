import React from 'react'
import Logo from '../reusable/logo'
export default function courseStart() {
  return (
    <div className=" 2xl:col-span-2 lg:col-span-1 h-96">
      <div className="rounded-xl border-2 flex   h-full bg-gradient-to-t from-[#FFF409] via-stone-900 to-black opacity-90">
        <div className=" w-full flex flex-col items-center justify-center gap-5">
          <div>
            <Logo />
          </div>

          <p className="text-xl font-bold ">
            <span className="text-[#FFF409]"> Marketing</span> <span className="text-white">para networkers</span>
          </p>
          <div>
            <p className="p-5 bg-[#FFF409] rounded-xl text-center cursor-pointer">Empezar curso</p>
          </div>
        </div>
      </div>
    </div>
  )
}
