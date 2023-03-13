import Link from 'next/link'
import { BsFillPlusCircleFill } from 'react-icons/bs'
import { reusableStyles } from '../../../../../styles/styles'
export default function AddModules() {
  return (
    <div className="mt-10">
      <form action="" className="grid gap-10">
        <div className="grid grid-cols-1 gap-10 2xl:grid-cols-3 lg:grid-cols-3">
          <div className="grid gap-2 ">
            <h1>Seleccione el curso donde desea agregar los modulos</h1>
            <select name="" id="" className={reusableStyles.inputForm}>
              <option value="">Marketing para networkers</option>
              <option value="">Fotografía para principiantes</option>
              <option value="">Programacion 2</option>
            </select>
          </div>
          <div className="grid col-span-2 gap-2 ">
            <h1>
              Mostrando modulos del curso <strong>Marketing para networkers</strong>
            </h1>
            <div className="grid grid-cols-1 gap-10 2xl:grid-cols-3 lg:grid-cols-3">
              <div className="border-2 border-black"> modulo 1</div>
              <div className="border-2 border-black"> modulo 1</div>
              <div className="border-2 border-black"> modulo 1</div>
              <div className="border-2 border-black"> modulo 1</div>
              <div className="border-2 border-black"> modulo 1</div>
              <div className="flex items-center p-3 border-2 border-black bg-amber-400">
                <BsFillPlusCircleFill />
                <button>Agregar nuevo modulo</button>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  )
}
