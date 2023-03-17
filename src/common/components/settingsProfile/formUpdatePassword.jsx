import { reusableStyles } from '../../../styles/styles'
export default function formUpdatePassword() {
  return (
    <form className="bg-white rounded-xl">
      <div className="grid grid-cols-12 gap-10 p-10 bg-white rounded-xl">
        <div className="grid col-span-6 gap-10 ">
          <div className="grid gap-3 ">
            <p className="text-3xl font-medium">Actualice sus contraseñas</p>
          </div>
          <div className="grid gap-3 ">
            <p className="font-medium">Ingrese su contraseña actual</p>
            <input type="text" className={reusableStyles.inputFormForCourseMaintenance} value="" />
          </div>
          <div className="grid gap-3 ">
            <p className="font-medium">Ingrese su nueva contraseña</p>
            <input type="text" className={reusableStyles.inputFormForCourseMaintenance} value="" />
          </div>
          <div className="grid gap-3 ">
            <p className="font-medium">Vuelva a escribir su nueva contraseña</p>
            <input type="text" className={reusableStyles.inputFormForCourseMaintenance} value="" />
          </div>
          <div className={reusableStyles.button + 'col-span-1'}>
            <button>Actualizar contraseña</button>
          </div>
        </div>
      </div>
    </form>
  )
}
