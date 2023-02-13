import Link from 'next/link'
import { useEffect, useState } from 'react'
import { AiOutlineArrowUp } from 'react-icons/ai'
export default function CardCourseItem({ courseObject }) {
  const [progressBar, setProgressBar] = useState(0)
  useEffect(() => {
    setProgressBar(courseObject.progressBar)
  })
  return (
    <Link
      href={`/miAprendizaje/detalleCurso/${courseObject.courseId}`}
      className="p-5 bg-white rounded-xl group-hover:shadow-xl"
    >
      <div className="flex flex-col gap-10 ">
        <div className="flex justify-between ">
          <p className="font-bold text-xl">{courseObject.courseName}</p>
          <div className=" rotate-45 w-10 h-10 flex items-center justify-center rounded-full bg-yellow-400">
            <AiOutlineArrowUp className="text-black" />
          </div>
        </div>
        <div>
          <span className="flex items-end">
            <h1 className="mr-2 font-bold text-5xl">{courseObject.courseProgress}</h1>{' '}
            <p className="mr-1">lecciones de</p> <strong className="mr-1">{courseObject.courseTotalLessons}</strong>{' '}
            completadas
          </span>
        </div>
        <div className=" bg-gray-100 w-full h-4 rounded-3xl">
          <div className={`bg-yellow-400 w-[${4}%] h-full rounded-3xl`}></div>
        </div>
      </div>
    </Link>
  )
}
