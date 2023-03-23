import React from 'react'
import { BsFillPencilFill, BsTrash } from 'react-icons/bs'
import { MdPlayLesson } from 'react-icons/md'

export default function Course_lesson_item() {
  return (
    <div className="px-5 py-2">
      <div className="flex justify-between py-2 bg-gray-50">
        <button className="px-4 py-2 bg-yellow-400 rounded-lg">Nueva leccion</button>
      </div>
      <div>
        <div className="grid gap-2">
          {/*esto es una leccion */}
          <div className="flex justify-between p-3 bg-gray-50">
            <div className="flex items-center gap-3">
              <MdPlayLesson />
              <p className="">Leccion 1: Video introductorio</p>
            </div>
            <div className="flex gap-3 ">
              <div className="p-1 hover:bg-red-200">
                <BsFillPencilFill />
              </div>
              <div className="p-1 hover:bg-red-200">
                <BsTrash />
              </div>
            </div>
          </div>
          {/*esto es una leccion */}
          <div className="flex justify-between p-3 bg-gray-50">
            <div className="flex items-center gap-3 ">
              <MdPlayLesson />
              <p className="">Leccion 1: Video introductorio</p>
            </div>
            <div className="flex gap-3 ">
              <div className="p-1 hover:bg-red-200">
                <BsFillPencilFill />
              </div>
              <div className="p-1 hover:bg-red-200">
                <BsTrash />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
