/*Importando elementos de next */
import Link from 'next/link'
import { AiFillEye, AiFillEyeInvisible } from 'react-icons/ai'
import { reusableStyles } from '../../../styles/styles'
import { useState } from 'react'
import Logo from '../reusable/logo'
import axios from 'axios'
import Cookies from 'js-cookie'
import LoginError from '../reusable/loginError'
import { useForm } from 'react-hook-form'

export default function LeftSide() {
  /*Desestructuramos el objeto useForm para usar sus funciones */
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ mode: 'onChange' })
  /*Estados que sirven para gestionar los errores,mensajes y switcheo de contrasenia a texto */
  const [apiError, setApiError] = useState(false),
    [apiMessage, setApiMessage] = useState(''),
    [showPassword, setShowPassword] = useState(false)

  //metodo que para hacer el fetch
  const onSubmit = async (data) => {
    try {
      const response = await axios.post('http://localhost:3003/login/login', data)
      const { token, message } = response.data

      if (message !== 'Credenciales correctas') {
        setApiError(true)
        setApiMessage(message)
      } else {
        Cookies.set('nuevamenteToken', token)
        if (process.browser) {
          window.location.href = '/dashboard'
          localStorage.setItem('selectedItems', JSON.stringify([]))
        }
      }
    } catch (error) {
      console.log(error)
    }
  }
  /*Metodo que sirve para alternar el estado de showPassword(mostrar contrasenia)*/
  const togglePassword = () => {
    setShowPassword(!showPassword)
  }

  return (
    <>
      <LoginError statusError={apiError} apiMessage={apiMessage} />
      <div className="bg-[#F6F6F6]">
        <div className="flex flex-col w-3/5 h-full m-auto ">
          <div className="flex items-center h-32 ">
            <Logo />
          </div>
          <div className="flex items-center w-full h-full m-auto">
            <form method="post" className="grid items-center w-full -translate-y-14" onSubmit={handleSubmit(onSubmit)}>
              <div className="mb-8">
                <p className="mb-3 text-3xl font-bold text-slate-900">Hola, bienvenido de nuevo !</p>
                <p className="text-sm text-zinc-500">Para acceder, primero debes logearte con tu email y contraseña</p>
              </div>
              <div className="flex flex-col gap-5 mb-10">
                <div className="grid gap-2 grid-col-1">
                  <input
                    type="text"
                    placeholder="Ingrese su email"
                    className={reusableStyles.inputForm}
                    {...register('email', { required: true })}
                  />
                  {errors?.email?.type === 'required' && (
                    <div className="">
                      <span className={reusableStyles.formAlerts}>Campo requerido</span>
                    </div>
                  )}
                </div>
                <div className="grid gap-2 grid-col-1">
                  <div className="flex justify-between">
                    <span></span>
                    <Link href="/recoverPassword" className="bg-[#FFF409] text-xs px-3 py-1 rounded-full">
                      Olvidé mi contraseña
                    </Link>
                  </div>
                  <div className="relative gap-2">
                    <input
                      type={showPassword ? 'text' : 'password'}
                      placeholder="Ingrese su contraseña"
                      className={reusableStyles.passwordInputForm}
                      {...register('password', { required: true })}
                    />

                    <div
                      className="absolute right-0 p-3 -translate-x-2 rounded-full cursor-pointer select-none -translate-y-11 hover:bg-gray-100 "
                      onClick={togglePassword}
                    >
                      {showPassword ? <AiFillEyeInvisible /> : <AiFillEye className="" />}
                    </div>
                    {errors?.password?.type === 'required' && (
                      <div className="mt-2">
                        <span className={reusableStyles.formAlerts}>Campo requerido</span>
                      </div>
                    )}
                  </div>
                </div>
              </div>
              <button className="text-center text-sm bg-[#FFF409] p-4 rounded-lg text-gray-700 font-bold hover:shadow-md transition">
                Iniciar ahora ?
              </button>

              <span className="flex items-center gap-1 mt-5 text-sm text-left">
                <p>¿No tienes una cuenta?</p>
                <Link href="/registrar" className="px-3 py-1 font-bold rounded-full hover:bg-black hover:text-white ">
                  Registrate
                </Link>
              </span>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}
;``
