import { useState } from 'react'
import Link from 'next/link'
import { useForm } from 'react-hook-form'
import { reusableStyles } from '../../../styles/styles'
import Logo from '../reusable/logo'
import axios from 'axios'
import SignUpError from '../reusable/signUpError'
import { AiFillEye, AiFillEyeInvisible } from 'react-icons/ai'
/*Modularizar los arreglos */
const days = [
  { name: 1 },
  { name: 2 },
  { name: 3 },
  { name: 4 },
  { name: 5 },
  { name: 6 },
  { name: 7 },
  { name: 8 },
  { name: 9 },
  { name: 10 },
  { name: 11 },
  { name: 12 },
  { name: 13 },
  { name: 14 },
  { name: 15 },
  { name: 16 },
  { name: 17 },
  { name: 18 },
  { name: 19 },
  { name: 20 },
  { name: 21 },
  { name: 22 },
  { name: 23 },
  { name: 24 },
  { name: 25 },
  { name: 26 },
  { name: 27 },
  { name: 28 },
  { name: 29 },
  { name: 30 },
  { name: 31 },
]
const months = [
  { name: 'Enero' },
  { name: 'Febrero' },
  { name: 'Marzo' },
  { name: 'Abril' },
  { name: 'Mayo' },
  { name: 'Junio' },
  { name: 'Julio' },
  { name: 'Agosto' },
  { name: 'Septiembre' },
  { name: 'Octubre' },
  { name: 'Noviembre' },
  { name: 'Diciembre' },
]
export default function registerForm() {
  let currentYear = new Date().getFullYear()
  const {
    register,
    watch,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: 'onChange',
  })
  const [apiError, setApiError] = useState(false),
    [apiMessage, setApiMessage] = useState(''),
    [showFirstPassword, setShowFirstPassword] = useState(false),
    [showSecondPassword, SetShowSecondPassword] = useState(false)

  const toggleFirstPassword = () => {
    setShowFirstPassword(!showFirstPassword)
  }
  const toggleSecondPassword = () => {
    SetShowSecondPassword(!showSecondPassword)
  }
  const onSubmit = async (data) => {
    const object = {
      apellido_usuario: data.apellido_usuario,
      nombre_usuario: data.nombre_usuario,
      nickname_usuario: data.nickname_usuario,
      contra_usuario: data.contra_usuario,
      contra_usuario_original: data.contra_usuario_original,
      fecha_nacimiento_usuario: `${data.año_nacimiento}-${data.mes_nacimiento}-${data.dia_nacimiento}`,
      email_usuario: data.email_usuario.replace(/\s/g, ''),
    }
    try {
      const response = await axios.post('http://localhost:3003/user/registerUser', object)
      const { message } = response.data
      if (
        message === 'Email no disponible, ingrese otro' ||
        message === 'Nombre de usuario no disponible, ingrese otro'
      ) {
        setApiError(true)
        setApiMessage(message)
      } else if (message === 'Usuario agregado correctamente') {
        setApiError(false)
        setApiMessage(message)
        if (process.browser) {
          window.location.href = '/'
        }
      }
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <>
      <SignUpError statusError={apiError} apiMessage={apiMessage} />
      <div className="bg-[#F6F6F6]">
        <div className=" w-3/5 m-auto flex flex-col h-full">
          <div className=" h-32 flex items-center  ">
            <h1 className="text-xl text-slate-900">
              <Logo />
            </h1>
          </div>
          <div className="w-full flex items-center h-full m-auto">
            <form method="post" className="w-full grid items-center" onSubmit={handleSubmit(onSubmit)}>
              <div className="mb-8">
                <h1 className="font-bold text-3xl text-slate-900">Registrate ingresando tus datos</h1>
              </div>
              <div className="flex flex-col gap-5 mb-10">
                <div className="grid grid-col-1 gap-2 w-full">
                  <div className="md:flex grid 2xl:flex-row  sm:flex-col gap-5 w-full">
                    <div className="flex flex-col w-full gap-2  ">
                      <input
                        type="text"
                        id="nombre"
                        name="nombre"
                        placeholder="Nombre"
                        className={reusableStyles.inputForm}
                        {...register('nombre_usuario', { required: true, pattern: /^[A-Za-zÀ-ÿ\s]*$/i })}
                      />
                      {errors?.nombre_usuario?.type === 'pattern' && (
                        <div>
                          <span className={reusableStyles.formAlerts}>Nombre invalido</span>
                        </div>
                      )}
                      {errors?.nombre_usuario?.type === 'required' && (
                        <div className="">
                          <span className={reusableStyles.formAlerts}>Campo requerido</span>
                        </div>
                      )}
                    </div>
                    <div className="flex flex-col w-full gap-2">
                      <input
                        type="text"
                        id="apellido_usuario"
                        name="apellido_usuario"
                        placeholder="Apellidos"
                        className={reusableStyles.inputForm}
                        {...register('apellido_usuario', { required: true, pattern: /^[A-Za-zÀ-ÿ\s]*$/i })}
                      />
                      {errors?.apellido_usuario?.type === 'pattern' && (
                        <div>
                          <span className={reusableStyles.formAlerts}>Apellido invalido</span>
                        </div>
                      )}
                      {errors.apellido_usuario && (
                        <div className="">
                          <span className={reusableStyles.formAlerts}>Campo requerido</span>
                        </div>
                      )}
                    </div>
                  </div>
                </div>

                <div className="grid grid-col-1 gap-2">
                  <input
                    type="text"
                    id="nickname_usuario"
                    name="nickname_usuario"
                    placeholder="Nombre de usuario"
                    className={reusableStyles.inputForm}
                    {...register('nickname_usuario', { required: true })}
                  />
                  {errors.nickname_usuario && (
                    <div>
                      <span className={reusableStyles.formAlerts}>Campo requerido</span>
                    </div>
                  )}
                </div>

                <div className="grid grid-col-1 gap-2">
                  <input
                    type="email"
                    id="email_usuario"
                    name="email_usuario"
                    placeholder="Correo electrónico"
                    className={reusableStyles.inputForm}
                    {...register('email_usuario', {
                      required: true,
                      pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    })}
                  />
                  {errors?.email_usuario?.type === 'pattern' && (
                    <div>
                      <span className={reusableStyles.formAlerts}>Correo electrónico inválido</span>
                    </div>
                  )}
                  {errors.email_usuario?.type === 'required' && (
                    <div>
                      <span className={reusableStyles.formAlerts}>Campo requerido</span>
                    </div>
                  )}
                </div>

                <div className="grid grid-col-1 gap-2">
                  <div className="relative">
                    <input
                      type={showFirstPassword ? 'text' : 'password'}
                      id="password"
                      name="password"
                      placeholder="Contraseña"
                      className={reusableStyles.passwordInputForm}
                      {...register('contra_usuario', {
                        required: true,
                        minLength: 8,
                        pattern: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/,
                      })}
                    />
                    <div
                      className="p-3 absolute right-0 -translate-y-11 -translate-x-2 cursor-pointer select-none rounded-full hover:bg-gray-100 "
                      onClick={toggleFirstPassword}
                    >
                      {showFirstPassword ? <AiFillEyeInvisible /> : <AiFillEye className="" />}
                    </div>
                  </div>
                  {errors.contra_usuario && (
                    <div>
                      <span className={reusableStyles.formAlerts}>
                        Tu contraseña debe tener minimo <strong>8</strong> dígitos, una <strong>mayúscula</strong>,{' '}
                        <strong>minúscula</strong> y un <strong>número</strong>
                      </span>
                    </div>
                  )}
                </div>
                <div className="grid grid-col-1 gap-2">
                  <div className="relative">
                    <input
                      type={showSecondPassword ? 'text' : 'password'}
                      placeholder="Repita su contraseña"
                      className={reusableStyles.passwordInputForm}
                      {...register('contra_usuario_original', {
                        required: true,
                        validate: (val) => {
                          if (watch('contra_usuario') != val) {
                            return 'La contrasenia no coincide'
                          }
                        },
                      })}
                    />
                    <div
                      className="p-3 absolute right-0 -translate-y-11 -translate-x-2 cursor-pointer select-none rounded-full hover:bg-gray-100 "
                      onClick={toggleSecondPassword}
                    >
                      {showSecondPassword ? <AiFillEyeInvisible /> : <AiFillEye className="" />}
                    </div>
                  </div>
                  {errors.contra_usuario_original && (
                    <div>
                      <span className={reusableStyles.formAlerts}>La contraseña no coincide</span>
                    </div>
                  )}
                </div>

                <div className="grid grid-col-1 gap-3  ">
                  <span className="text-gray-800">Fecha de nacimiento</span>
                  <div className=" flex 2xl:flex-row  flex-col  justify-between gap-5 ">
                    <div className="2xl:w-2/5 ">
                      <select className={reusableStyles.inputForm} {...register('dia_nacimiento')}>
                        {days.map((day, index) => {
                          return (
                            <option value={('0' + (index + 1)).slice(-2)} key={day.name}>
                              {day.name}
                            </option>
                          )
                        })}
                      </select>
                    </div>
                    <div className="2xl:w-2/5">
                      <select className={reusableStyles.inputForm} {...register('mes_nacimiento')}>
                        {months.map((month, index) => {
                          return (
                            <option value={('0' + (index + 1)).slice(-2)} key={month.name}>
                              {month.name}
                            </option>
                          )
                        })}
                      </select>
                    </div>
                    <div className="grid gap-2">
                      <input
                        type="number"
                        name="anio_nacimiento"
                        id="anio_nacimiento"
                        placeholder="YYYY"
                        maxLength={4}
                        min={0}
                        className={reusableStyles.inputForm}
                        {...register('año_nacimiento', {
                          required: true,
                          min: currentYear - 100,
                          max: currentYear,
                          maxLength: 4,
                          minLength: 4,
                          type: 'number',
                        })}
                      />
                      {/*validacion para el campo requerido */}
                      {errors.año_nacimiento && (
                        <div>
                          <span className={reusableStyles.formAlerts}> Año invalido</span>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
              <button className="text-center  bg-[#FFF409] p-4 rounded-lg text-gray-700 font-bold hover:shadow-md transition">
                Registrarme
              </button>

              <span className="text-left mt-5 text-sm flex gap-1 items-center">
                <p>¿Ya tienes una cuenta?</p>
                <Link href="/" className="font-bold hover:bg-black hover:text-white px-3 py-1 rounded-full ">
                  Inicia sesion
                </Link>
              </span>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}
