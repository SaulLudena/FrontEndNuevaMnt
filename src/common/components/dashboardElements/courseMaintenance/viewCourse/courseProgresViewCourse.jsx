import React from 'react'

export default function courseProgresViewCourse({ courseDetail }) {
  return (
    <div className="p-5 bg-white 2xl:row-span-2 lg:row-span-1 rounded-xl">
      <div className="flex flex-col justify-around h-full gap-6 text-center ">
        <div className="flex flex-col gap-4">
          <h1 className="text-gray-500">Curso</h1>
          <h1 className="text-2xl font-bold break-words">
            {courseDetail.nombre_curso === undefined ||
            courseDetail.nombre_curso.length === 0 ||
            courseDetail.nombre_curso === null
              ? 'Sin titulo'
              : courseDetail.nombre_curso}
          </h1>
        </div>
        <div className="flex flex-col justify-center text-center lg:gap-3">
          <div className="flex text-center m-auto justify-center w-40 h-40 rounded-full border-[30px] border-[#4BFF9E]"></div>
          <div className="flex flex-col">
            <span className="-translate-y-[105px] lg:-translate-y-[105px] sm:-translate-y-[90px] font-bold">55%</span>
            <span className="text-gray-500 -translate-y-5">de progreso actual</span>
          </div>
        </div>
        <div>
          <p className="flex justify-center p-4 font-bold">Continua aprendiendo</p>
        </div>
      </div>
    </div>
  )
}
