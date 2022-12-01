import React from 'react'

export default function completedCourses() {
  return (
    <div className="w-full bg-white rounded-xl p-5">
      <div className="flex flex-col gap-8">
        <h1 className="font-semibold text-gray-800 break-words">Cursos completados</h1>
        <h1 className="text-3xl font-bold text-center">3</h1>
        <div className=" bg-gray-100 w-full h-4 rounded-3xl">
          <div className="bg-[#00FF94] w-14 h-full rounded-3xl"></div>
        </div>
      </div>
    </div>
  )
}
