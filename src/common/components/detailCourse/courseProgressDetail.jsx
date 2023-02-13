import Link from 'next/link'
import React from 'react'

export default function courseProgressDetail() {
  return (
    <div className=" 2xl:row-span-2 lg:row-span-1 p-5 bg-white rounded-xl">
      <div className="h-full flex gap-6 flex-col justify-around text-center ">
        <div className="flex flex-col gap-4">
          <h1 className="text-gray-500">Curso</h1>
          <h1 className="text-2xl font-bold break-words">Marketing para Networkers</h1>
        </div>
        <div className="justify-center flex flex-col text-center lg:gap-3">
          <div className="flex text-center m-auto justify-center w-40 h-40 rounded-full border-[30px] border-[#4BFF9E]"></div>
          <div className="flex flex-col">
            <span className="-translate-y-[105px] font-bold">55%</span>
            <span className="-translate-y-5 text-gray-500">de progreso actual</span>
          </div>
        </div>
        <div>
          <p className="p-4 flex justify-center font-bold">Continua aprendiendo</p>
        </div>
      </div>
    </div>
  )
}
