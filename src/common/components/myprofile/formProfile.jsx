import { reusableStyles } from '../../../styles/styles'
export default function FormProfile() {
  return (
    <form className=" bg-white rounded-xl ">
      <div>
        <div className="bg-gradient-to-br from-white via-white to-gray-300">
          <img
            src="https://i.natgeofe.com/n/548467d8-c5f1-4551-9f58-6817a8d2c45e/NationalGeographic_2572187_square.jpg"
            alt="portada"
            className="w-full h-60 object-cover rounded-xl opacity-20 shadow-2xl"
          />
        </div>
        <div className="flex justify-between ">
          <div className="flex gap-5  -translate-y-10 px-10">
            <div>
              <img
                src="https://i.natgeofe.com/n/548467d8-c5f1-4551-9f58-6817a8d2c45e/NationalGeographic_2572187_square.jpg"
                alt="portada"
                className="w-40 object-cover rounded-full border-[7px] border-[#F7F7F7]"
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
      <div className=" px-10">
        <h1 className="text-2xl font-medium ">Actualiza tu informacion</h1>
      </div>
      <div className=" grid gap-10 grid-cols-2 bg-white p-10 rounded-xl">
        <div className="grid gap-3">
          <p>Nombre</p>
          <input type="text" className={reusableStyles.inputFormForCourseMaintenance} value="Jeff Blas" />
        </div>
        <div className=" grid gap-3">
          <p>Apellido</p>
          <input type="text" className={reusableStyles.inputFormForCourseMaintenance} value="Ascencios" />
        </div>
        <div className=" grid gap-3">
          <p>Nombre de usuario</p>
          <input type="text" className={reusableStyles.inputFormForCourseMaintenance} value="Jeffo" />
        </div>
        <div className=" grid gap-3">
          <p>Numero de telefono</p>
          <input type="text" className={reusableStyles.inputFormForCourseMaintenance} value="94524621" />
        </div>
        <div className=" grid gap-3">
          <p>Habilidad / ocupacion</p>
          <input type="text" className={reusableStyles.inputFormForCourseMaintenance} value="Emprendedor" />
        </div>
        <div className=" grid gap-3">
          <p>Biografia</p>
          <input type="text" className={reusableStyles.inputFormForCourseMaintenance} value="Lorem ipsum" />
        </div>
      </div>
    </form>
  )
}
