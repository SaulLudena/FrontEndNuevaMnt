import React from 'react'

export default function CourseGoalViewCourse({ courseDetail }) {
  return (
    <div className=" 2xl:col-span-2 lg:col-span-1 p-5 bg-white rounded-xl ">
      <div className="flex flex-col h-full justify-between gap-10">
        <div className="grid gap-2">
          <h1 className="font-bold text-xl">Sobre el curso</h1>
          <p className="text-gray-700">
            {courseDetail.descripcion_curso === undefined ? 'Sin descripcion' : courseDetail.descripcion_curso}
          </p>
        </div>
      </div>
    </div>
  )
}
