import Link from 'next/link'
import { AiFillEye } from 'react-icons/ai'
import { BsFillPencilFill, BsFillTrashFill } from 'react-icons/bs'
export default function CourseInstructorItem({ nombreCurso }) {
  return (
    <div className="bg-white rounded-xl p-5">
      <div className=" grid items-center gap-10 ">
        <div className="translate-y-3">
          <h1 className="text-center font-bold">{nombreCurso}</h1>
        </div>
        <div className="flex justify-center">
          <div className="flex gap-5">
            <Link href="#" className=" p-4 bg-[#4BFFD4] rounded-xl ">
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
