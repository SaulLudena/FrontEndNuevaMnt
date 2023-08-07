import Link from 'next/link'
import { useEffect, useState } from 'react'
import { AiOutlineArrowUp } from 'react-icons/ai'
export default function CardCourseItem({ enrolledCourse }) {
  const [totalLessonsByCourse, setTotalLessonsByCourse] = useState(0)

  useEffect(() => {
    setTotalLessonsByCourse(enrolledCourse.tb_modulo.map((moduleItem) => moduleItem.tb_leccion.length))
  }, [])

  return (
    <Link
      href={{
        pathname: `/miAprendizaje/detalleCurso/${enrolledCourse.id_curso}`,
        query: enrolledCourse,
      }}
      className="p-5 transition duration-150 bg-white rounded-xl hover:shadow-xl"
    >
      <div className="flex flex-col gap-10 ">
        <div className="flex justify-between ">
          <p className="text-xl font-bold">{enrolledCourse.nombre_curso}</p>
          <div className="flex items-center justify-center w-10 h-10 rotate-45 bg-yellow-400 rounded-full ">
            <AiOutlineArrowUp className="text-black" />
          </div>
        </div>
        <div>
          <span className="flex items-end">
            <h1 className="mr-2 text-5xl font-bold">{6}</h1> <p className="mr-1">lecciones de</p>{' '}
            <strong className="mr-1">{totalLessonsByCourse.length >= 0 ? totalLessonsByCourse.length : 0}</strong>
            completadas
          </span>
        </div>
        <div className="w-100% h-4 bg-gray-100 rounded-3xl">
          <div className={`bg-yellow-400 w-[10%] h-full rounded-3xl`}></div>
        </div>
      </div>
    </Link>
  )
}
