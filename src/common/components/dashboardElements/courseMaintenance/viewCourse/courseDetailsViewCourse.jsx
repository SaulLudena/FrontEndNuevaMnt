import React from 'react'
import { AiOutlineArrowUp } from 'react-icons/ai'

export default function courseDetailsViewCourse() {
  return (
    <div href={``} className=" bg-white rounded-xl">
      <div className="flex flex-col justify-between h-full p-5 bg-white rounded-xl">
        <div className="flex justify-between ">
          <p className="font-bold text-xl">Informacion del curso</p>
          <div>
            <div className=" rotate-45 w-10 h-10 flex items-center justify-center rounded-full bg-yellow-400">
              <AiOutlineArrowUp className="text-black" />
            </div>
          </div>
        </div>
        <div className="flex flex-col">
          <span className="flex items-end">
            <h1 className="">icon</h1>
            <p>0 total de inscritos</p>
          </span>
          <span className="flex items-end">
            <h1 className="">icon</h1>
            <p>Junio 13, 2023 Ultima actualizacion</p>
          </span>
        </div>
      </div>
    </div>
  )
}
