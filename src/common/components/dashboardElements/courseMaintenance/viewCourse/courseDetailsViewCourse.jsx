import React from 'react'
import { AiOutlineFieldNumber } from 'react-icons/ai'
import { BsFillCalendarDateFill } from 'react-icons/bs'
export default function courseDetailsViewCourse({ courseDetail }) {
  const dateObj = new Date(courseDetail.fecha_registro_curso)
  const formattedDate = `${dateObj.getDate()}/${dateObj.getMonth() + 1}/${dateObj.getFullYear()}`

  return (
    <div className="h-full bg-white rounded-xl">
      <div className="relative flex flex-col justify-between h-full p-5 bg-white rounded-xl sm:gap-10">
        <div className="flex justify-between ">
          <p className="text-xl font-bold ">Datos del curso</p>
        </div>
        <div className="flex flex-col gap-5 sm:gap-3">
          <span className="flex items-center gap-2">
            <AiOutlineFieldNumber size={25} />
            <span className="flex gap-1">
              <strong>0</strong>
              <p> total de inscritos</p>
            </span>
          </span>
          <span className="flex items-center gap-2">
            <BsFillCalendarDateFill size={25} />
            <span className="flex gap-1">
              <p>Registrado el </p>
              <strong>{formattedDate}</strong>
            </span>
          </span>
        </div>
      </div>
    </div>
  )
}
