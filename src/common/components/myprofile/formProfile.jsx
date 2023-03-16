import { reusableStyles } from '../../../styles/styles'
export default function FormProfile() {
  return (
    <form className="bg-white rounded-xl">
      <div>
        <div className="">
          <img
            src="https://t1.ea.ltmcdn.com/es/posts/3/8/8/esta_el_ocelote_en_peligro_de_extincion_24883_orig.jpg"
            alt="portada"
            className="object-cover w-full shadow-2xl opacity-100 h-60 rounded-xl"
          />
        </div>
        <div className="flex justify-between ">
          <div className="flex gap-5 px-10 -translate-y-10">
            <div className="w-40 h-40 ">
              <img
                src="https://t1.ea.ltmcdn.com/es/posts/3/8/8/esta_el_ocelote_en_peligro_de_extincion_24883_orig.jpg"
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
