import React from 'react'
import { BsFillPencilFill, BsTrash } from 'react-icons/bs'
import { MdPlayLesson } from 'react-icons/md'

export default function Course_lesson_item() {
  return (
    <div className="flex justify-between p-3 bg-gray-100 rounded-lg hover:bg-gray-200">
      <div className="flex items-center gap-3">
        <MdPlayLesson />
        <p className="">Leccion 1: Video introductorio</p>
      </div>
      <div className="flex gap-3 ">
        <div className="p-3 rounded-full hover:bg-red-200">
          <BsFillPencilFill />
        </div>
        <div className="p-3 rounded-full hover:bg-red-200">
          <BsTrash />
        </div>
      </div>
    </div>
  )
}
