import Link from 'next/link'
import React from 'react'
import { AiOutlineArrowUp } from 'react-icons/ai'

export default function courseReview() {
  return (
    <Link
      href={``}
      className="p-5 bg-white rounded-xl 2xl:col-span-1 lg:col-span-2 hover:shadow-xl transition duration-200 "
    >
      <div className="flex flex-col justify-between h-full">
        <div className="flex justify-between ">
          <p className="font-bold text-xl">Reseñas del curso</p>
          <div>
            <div className=" rotate-45 w-10 h-10 flex items-center justify-center rounded-full bg-yellow-400">
              <AiOutlineArrowUp className="text-black" />
            </div>
          </div>
        </div>
        <div>
          <span className="flex items-end">
            <h1 className="mr-2 font-bold text-5xl">5</h1> <p>preguntas en total</p>
          </span>
        </div>
      </div>
    </Link>
  )
}
