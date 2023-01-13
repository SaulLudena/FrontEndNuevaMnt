import Link from 'next/link'
import HeadlessComboItem from './headlessComboItem'
import { useForm } from 'react-hook-form'
import { reusableStyles } from '../../../styles/styles'
export default function registerForm() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm()
  const onSubmit = (data) => console.log(data)

  console.log(watch('example'))
  return (
    <div className="bg-[#F6F6F6]">
      <div className=" w-3/5 m-auto flex flex-col h-full">
        <div className=" h-32 flex items-center  ">
          <h1 className="text-xl text-slate-900">Logo</h1>
        </div>
        <div className="w-full flex items-center h-full m-auto">
          <form method="post" className="w-full grid items-center -translate-y-14" onSubmit={handleSubmit(onSubmit)}>
            <div className="mb-8">
              <h1 className="font-bold text-3xl text-slate-900">Registrate ingresando tus datos</h1>
            </div>
            <div className="flex flex-col gap-5 mb-10">
              <div className="grid grid-col-1 gap-2 w-full">
                <div className="flex gap-5 w-full">
                  <div className="flex flex-col w-full gap-1">
                    <input
                      type="text"
                      id="nombre"
                      name="nombre"
                      placeholder="Nombre"
                      className={reusableStyles.inputForm}
                      {...register('nombre', { required: true, pattern: /^[A-Za-z]+$/i })}
                    />
                    {errors?.nombre?.type === 'pattern' && (
                      <span className={reusableStyles.formAlerts}>*Nombre no válido</span>
                    )}
                    {errors.nombre && <span className={reusableStyles.formAlerts}>*Campo requerido</span>}
                  </div>
                  <div className="flex flex-col w-full gap-1">
                    <input
                      type="text"
                      id="apellidos"
                      name="apellidos"
                      placeholder="Apellidos"
                      className={reusableStyles.inputForm}
                      {...register('apellidos', { required: true })}
                    />
                    {errors.apellidos && <span className={reusableStyles.formAlerts}>*Este campo es requerido</span>}
                  </div>
                </div>
              </div>
              <div className="grid grid-col-1 gap-1">
                <input
                  type="text"
                  id="nickname"
                  name="nickname"
                  placeholder="Nickname"
                  className={reusableStyles.inputForm}
                  {...register('nickname', { required: true })}
                />
                {errors.nickname && <span className={reusableStyles.formAlerts}>*Este campo es requerido</span>}
              </div>

              <div className="grid grid-col-1 gap-1">
                <input
                  type="email"
                  id="email"
                  name="text"
                  placeholder="Correo electrónico"
                  className={reusableStyles.inputForm}
                  {...register('email', { required: true, pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i })}
                />
                {errors?.email?.type === 'pattern' && (
                  <span className={reusableStyles.formAlerts}>*Correo electrónico no válido</span>
                )}
                {errors.email && <span className={reusableStyles.formAlerts}>*Este campo es requerido</span>}
              </div>

              <div className="grid grid-col-1 gap-1">
                <input
                  type="password"
                  id="password"
                  name="password"
                  placeholder="Contraseña"
                  className={reusableStyles.inputForm}
                  {...register('contraseña', {
                    required: true,
                    minLength: 8,
                    maxLength: 50,
                    pattern: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/,
                  })}
                />

                {errors.contraseña && (
                  <span className={reusableStyles.formAlerts}>
                    *La contraseña debe tener debe tener de <strong>8</strong> a <strong>50</strong> dígitos, una{' '}
                    <strong>mayúscula</strong>, una <strong>minúscula</strong> y un <strong>número</strong>
                  </span>
                )}
              </div>

              <div className="grid grid-col-1 gap-3">
                <span className="text-gray-800">Fecha de nacimiento</span>
                <div className="sm:flex  gap-5">
                  <div>
                    <input
                      type="text"
                      name="dia_nacimiento"
                      id="dia_nacimiento"
                      placeholder="Día"
                      maxLength="2"
                      className={reusableStyles.inputForm}
                      {...register('dia_nacimiento', {
                        required: true,
                        maxLength: 2,
                      })}
                    />
                    {errors.dia_nacimiento && errors.dia_nacimiento.type === 'required' && (
                      <span className={reusableStyles.formAlerts}>*Campo requerido</span>
                    )}
                  </div>

                  <HeadlessComboItem style={reusableStyles.inputForm} />

                  <div className="grid">
                    <input
                      type="text"
                      name="anio_nacimiento"
                      id="anio_nacimiento"
                      placeholder="Año"
                      maxLength="4"
                      className={reusableStyles.inputForm}
                      {...register('año_nacimiento', {
                        required: true,
                        maxLength: 4,
                      })}
                    />
                    {errors.año_nacimiento && errors.año_nacimiento.type === 'required' && (
                      <span role="alert" className={reusableStyles.formAlerts}>
                        *Campo requerido
                      </span>
                    )}
                    {errors.año_nacimiento && errors.año_nacimiento.type === 'maxLength' && (
                      <span role="alert" className={reusableStyles.formAlerts}>
                        *Año inválido
                      </span>
                    )}
                  </div>
                </div>
              </div>
            </div>
            <button
              onSubmit={() => {
                alert('has accedido al sis')
              }}
              className="text-center  bg-[#FFF409] p-4 rounded-lg text-gray-700 font-bold hover:shadow-md transition"
            >
              Registrarme
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
  )
}
