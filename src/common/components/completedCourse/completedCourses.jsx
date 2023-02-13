import React from 'react'

export default function CompletedCourses() {
  return (
    <div className="2xl:col-span-1 lg:col-span-2 row-span-1">
      <div className="w-full h-full bg-white rounded-xl p-5">
        <div className="flex flex-col gap-11">
          <h1 className="font-semibold text-gray-800 break-words">Cursos completados</h1>
          <h1 className="text-3xl font-bold text-center">3</h1>
          <div className=" bg-gray-100 w-full h-4 rounded-3xl">
            <div className="bg-[#00FF94] w-14 h-full rounded-3xl"></div>
          </div>
        </div>
      </div>
    </div>
  )
}
