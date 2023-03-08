import Link from 'next/link'
import { BsFillPlusCircleFill } from 'react-icons/bs'
export default function CreateButton() {
  return (
    <Link
      href="zonaDeMentores/nuevoRegistroDeCurso"
      className=" bg-white py-5 px-10 rounded-xl hover:shadow-lg transition duration-200"
    >
      <div className="flex items-center gap-5">
        <BsFillPlusCircleFill size={50} />
        <p>Crear nuevo curso</p>
      </div>
    </Link>
  )
}
