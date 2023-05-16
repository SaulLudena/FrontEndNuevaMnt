import Link from 'next/link'
import { AiFillEye } from 'react-icons/ai'
import { BsFillPencilFill, BsFillTrashFill } from 'react-icons/bs'
export default function CourseInstructorItem({ registeredCourse }) {
  return (
    <div className="p-5 bg-white rounded-xl">
      <div className="grid items-center gap-10 ">
        <div className="translate-y-3">
          <h1 className="font-bold text-center">
            {registeredCourse.nombre_curso.length <= 0 ? (
              <span className="select-none text-gray-400">Sin titulo</span>
            ) : (
              registeredCourse.nombre_curso
            )}
          </h1>
        </div>
        <div className="flex justify-center">
          <div className="flex gap-5">
            <Link
              href={{
                pathname: `/dashboard/zonaDeMentores/vistaCurso/${registeredCourse.id_curso}`,
              }}
              className=" p-4 bg-[#4BFFD4] rounded-xl "
            >
              <AiFillEye />
            </Link>

            <Link href="#" className="p-4 bg-yellow-300 rounded-xl">
              <BsFillPencilFill />
            </Link>

            <Link href="#" className="p-4 bg-rose-400 rounded-xl">
              <BsFillTrashFill />
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
