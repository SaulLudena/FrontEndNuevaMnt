import React from 'react'
import { BsFillPencilFill, BsTrash } from 'react-icons/bs'
import { MdPlayLesson } from 'react-icons/md'

export default function Course_lesson_item({ item }) {
  return (
    <div className="flex justify-between p-3 rounded-lg bg-gray-50 hover:bg-gray-100">
      <div className="flex items-center gap-3">
        <MdPlayLesson />
        <p className="">{item.lessonName}</p>
      </div>
      <div className="flex gap-1 ">
        <div className="p-3 rounded-full cursor-pointer hover:bg-gray-300">
          <BsFillPencilFill />
        </div>
        <div className="p-3 rounded-full cursor-pointer hover:bg-gray-300">
          <BsTrash />
        </div>
      </div>
    </div>
  )
}
