/*Importando elementos de next */
import Link from 'next/link'
import { AiFillEye } from 'react-icons/ai'
import validateInputLength from './validateInputLength'
import { reusableStyles } from '../../../styles/styles'
export default function LeftSide() {
  //metodo para obtener los valores del usuario
  const getUserInputs = (event) => {
    event.preventDefault()
    //recuperamos los valores de los inputs y les quitamos los espacios en blanco, aun falta sanear y preveer los SQL Injections
    const emailForm = document.getElementById('email').value.replace(/\s/g, '')
    const passwordForm = document.getElementById('password').value.replace(/\s/g, '')
    validateInputLength(emailForm, passwordForm)
  }

  return (
    <div className="bg-[#F6F6F6] ">
      <div className=" w-3/5 m-auto flex flex-col h-full">
        <div className=" h-32 flex items-center  ">
          <h1 className="text-xl text-slate-900">Logo</h1>
        </div>
        <div className="w-full flex items-center h-full m-auto">
          <form method="post" className="w-full grid items-center -translate-y-14" onSubmit={getUserInputs}>
            <div className="mb-8">
              <h1 className="font-bold text-3xl text-slate-900 mb-3">Hola, bienvenido de nuevo !</h1>
              <p className="text-sm text-zinc-500">Para acceder, primero debes logearte con tu email y contraseña</p>
            </div>
            <div className="flex flex-col gap-5 mb-10">
              <div className="grid grid-col-1 gap-2">
                <input id="email" name="email" placeholder="Ingrese su email" className={reusableStyles.inputForm} />
              </div>
              <div className="grid grid-col-1 gap-2">
                <div className="flex justify-between">
                  <span></span>
                  <Link href="/recoverPassword" className="bg-[#FFF409] text-sm px-3 py-1 rounded-full">
                    Olvidé mi contraseña
                  </Link>
                </div>
                <div className="relative">
                  <input
                    id="password"
                    name="password"
                    type="password"
                    placeholder="Ingrese su contraseña"
                    className={reusableStyles.inputForm}
                  />
                  <AiFillEye className="absolute right-0 -translate-y-8 -translate-x-6 cursor-pointer select-none" />
                </div>
              </div>
            </div>
            <button className="text-center text-sm bg-[#FFF409] p-4 rounded-lg text-gray-700 font-bold hover:shadow-md transition">
              Iniciar ahora ?
            </button>

            <p className="text-left mt-5 text-sm">
              ¿No tienes una cuenta?{' '}
              <Link href="/registrar" className="font-bold">
                Registrate
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  )
}
