import { reusableStyles } from '../../../styles/styles'
import { GrUpdate } from 'react-icons/gr'
export default function FormProfile() {
  return (
    <form className="bg-white rounded-xl">
      <div>
        <div className="relative">
          <div className="absolute w-full p-5 ">
            <button href="#" className="flex float-right p-4 bg-white rounded-full shadow-xl outline-none">
              <GrUpdate />
            </button>
          </div>
          <img
            src="https://coworkingfy.com/wp-content/uploads/2021/05/networking-1024x612.jpg"
            alt="portada"
            className="object-cover w-full shadow-2xl opacity-100 h-60 rounded-xl"
          />
        </div>
        <div className="flex justify-between ">
          <div className="flex gap-5 px-10 -translate-y-10">
            <div className="w-40 h-40 ">
              <img
                src="data:image/jpeg;base64,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"
                alt="portada"
                className="w-40 h-40 object-cover rounded-full border-[7px] border-[#F7F7F7]"
              />
            </div>
            <div className="grid items-center">
              <div>
                <h1 className="text-3xl font-bold text-gray-900">Jeff Blas</h1>
                <h1 className="text-lg">Mr Jeff</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="px-10 ">
        <h1 className="text-2xl font-medium ">Actualiza tu informacion</h1>
      </div>
      <div className="grid grid-cols-2 gap-10 p-10 bg-white rounded-xl">
        <div className="grid gap-3">
          <p className="font-medium">Nombre</p>
          <input type="text" className={reusableStyles.inputFormForCourseMaintenance} value="Jeff Blas" />
        </div>
        <div className="grid gap-3 ">
          <p className="font-medium">Apellido</p>
          <input type="text" className={reusableStyles.inputFormForCourseMaintenance} value="Ascencios" />
        </div>
        <div className="grid gap-3 ">
          <p className="font-medium">Nombre de usuario</p>
          <input type="text" className={reusableStyles.inputFormForCourseMaintenance} value="Jeffo" />
        </div>
        <div className="grid gap-3 ">
          <p className="font-medium">Numero de telefono</p>
          <input type="text" className={reusableStyles.inputFormForCourseMaintenance} value="94524621" />
        </div>
        <div className="grid gap-3 ">
          <p className="font-medium">Habilidad / ocupacion</p>
          <input type="text" className={reusableStyles.inputFormForCourseMaintenance} value="Emprendedor" />
        </div>
        <div className="grid gap-3 ">
          <p className="font-medium">Biografia</p>
          <input type="text" className={reusableStyles.inputFormForCourseMaintenance} value="Lorem ipsum" />
        </div>
      </div>
    </form>
  )
}