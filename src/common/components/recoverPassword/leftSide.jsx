import { useForm } from 'react-hook-form'
import axios from 'axios'
import Link from 'next/link'
import Logo from '../reusable/logo'
import { reusableStyles } from '../../../styles/styles'
import RightDesign from '../login/rightSIde'

export default function LeftSide() {
  const {
    register,
    watch,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: 'onChange',
  })
  const onSubmit = (data) => {
    console.log('correo a ' + data.email)
  }
  return (
    <>
      <div className="bg-[#F6F6F6] ">
        <div className=" w-3/5 m-auto flex flex-col h-full">
          <div className=" h-32 flex items-center  ">
            <Logo />
          </div>
          <div className="w-full flex items-center h-full m-auto">
            <form method="post" className="w-full grid items-center -translate-y-14" onSubmit={handleSubmit(onSubmit)}>
              <div className="mb-8">
                <p className="font-bold text-3xl text-slate-900 mb-3">Recupera tu contraseña</p>
                <p className="text-sm text-zinc-500">Recibiras un correo de confirmacion de cambio de contraseña</p>
              </div>
              <div className="flex flex-col gap-5 mb-10">
                <div className="grid grid-col-1 gap-2">
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
              </div>
              <button className="text-center text-sm bg-[#FFF409] p-4 rounded-lg text-gray-700 font-bold hover:shadow-md transition">
                Enviar email
              </button>
              <p className="text-left mt-5">
                ¿Ya tienes una cuenta?{' '}
                <Link href="/" className="font-bold">
                  Inicia sesión
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}
