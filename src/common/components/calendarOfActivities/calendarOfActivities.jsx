import React from 'react'
import Link from 'next/link'
import { BsFillCalendarDateFill } from 'react-icons/bs'
export default function calendarOfActivities() {
  return (
    <div className="col-span-1 row-span-1 w-full bg-white rounded-xl p-5">
      <div className="h-full">
        <div className="h-full justify-center flex flex-col items-center gap-6">
          <div className="flex items-center gap-5 text-gray-600">
            <BsFillCalendarDateFill size={20} />
            <p className="font-bold">
              Calendario de <br /> actividades
            </p>
          </div>
          <div className=" w-full">
            <Link href="/actividades" className="p-4 flex justify-center rounded-2xl bg-[#FFF409]">
              Ver actividades
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
