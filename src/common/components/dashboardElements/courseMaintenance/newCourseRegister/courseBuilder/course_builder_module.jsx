import { BsFillPlusCircleFill } from 'react-icons/bs'
import Course_module_item from './course_module_item'
export default function Course_builder_module({ register }) {
  return (
    <div className="bg-white p-5 flex flex-col gap-5 ">
      <div className="grid gap-3">
        <Course_module_item />
      </div>
      <div>
        <div className="cursor-pointer flex w-56 items-center gap-3 px-5 py-3 bg-yellow-400 rounded-lg outline-none">
          <BsFillPlusCircleFill />
          Agregar nuevo modulo
        </div>
      </div>
    </div>
  )
}
