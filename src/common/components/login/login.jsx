import Image from 'next/image'
import fondoLogin from '../../../../public/assets/fondo_login.png'
import { AiFillEye, AiFillInstagram, AiFillYoutube } from 'react-icons/ai'
import { FaFacebookF } from 'react-icons/fa'
import cookie from 'js-cookie'
import Link from 'next/link'
export default function Login() {
  //metodo para validar que el usuario ingresado sea igual al registrado en el sistema backend-baseDeDatos. Este metodo recibe 2 parametros, email y password
  const validateUser = async (email, password) => {
    try {
      const BASE_URL = await fetch(`http://localhost:3003/validateUser/${email}/${password}`)
      const result = await BASE_URL.json()
      const userObjectApi = result

      //seteando los valores del estado userObject por los nuevos datos que vienen de la api (reemplazo)
      if (email === userObjectApi.email_usuario && password === userObjectApi.contra_usuario) {
        cookie.set('userName', userObjectApi.nombre_usuario)
        window.location.href = '/dashboard'
      } else alert('Datos incorrectos')

      return userObjectApi
    } catch (error) {
      throw error
    }
  }

  //metodo para obtener los valores del usuario
  const getUserInputs = (event) => {
    //quitamos el comportamiento por defecto del formulario para que no se recarge
    event.preventDefault()

    //recuperamos los valores de los inputs y les quitamos los espacios en blanco, aun falta sanear y preveer los SQL Injections
    const emailForm = document.getElementById('email').value.replace(/\s/g, '')
    const passwordForm = document.getElementById('password').value.replace(/\s/g, '')

    //validamos que la longitud de los inputs sean mayores a 1.
    //si las casillas están vacias entonces mandaremos un alert en la pantalla (se cambiará a un modal mas bonito).
    emailForm.length <= 0 && passwordForm.length <= 0
      ? alert('Ingrese correo y contraseña' + `usted ingresó ${(emailForm, passwordForm)}`)
      : //en caso contrario invocaremos al metodo validateUser.

        validateUser(emailForm, passwordForm)
  }
  return (
    <div className="grid grid-cols-2  h-screen">
      <div className="bg-[#F6F6F6]">
        <div className=" w-3/5 m-auto flex flex-col h-full">
          <div className=" h-32 flex items-center  ">
            <h1 className="text-xl text-slate-900">Logo</h1>
          </div>
          <div className="w-full flex items-center h-full m-auto">
            <form method="post" className="w-full grid items-center   -translate-y-14" onSubmit={getUserInputs}>
              <div className="mb-10">
                <h1 className="font-bold text-3xl text-slate-900 mb-3">Hola, bienvenido de nuevo !</h1>
                <p className="text-sm text-zinc-400">
                  Para acceder, primero debes logearte con tu usuario y contraseña
                </p>
              </div>
              <div className="flex flex-col gap-10 mb-10">
                <div className="grid grid-col-1 gap-2">
                  <label>Ingresa tu usuario</label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="ejem-user01"
                    className="border-2  outline-none  px-6 py-3 rounded-full w-full focus:border-gray-400 transition-all duration-200"
                  />
                </div>
                <div className="grid grid-col-1 gap-2">
                  <div className="flex justify-between">
                    <label>Ingresa tu contraseña</label>
                    <a href="">Olvidé mi contraseña</a>
                  </div>
                  <div className="relative">
                    <input
                      id="password"
                      name="password"
                      type="password"
                      placeholder="ejem-abc123"
                      className="border-2 border-gray-200 outline-none  px-6 py-3 rounded-full w-full focus:border-gray-400 transition-all duration-200"
                    />
                    <AiFillEye className="absolute right-0 -translate-y-8 -translate-x-6 cursor-pointer select-none" />
                  </div>
                </div>
              </div>
              <button className="text-center  bg-amber-400 p-4 rounded-full text-white font-bold hover:shadow-xl transition">
                Iniciar ahora ?
              </button>
              <p className="text-center mt-5">
                No tienes una cuenta? <Link href="/registrar">Registrate</Link>
              </p>
            </form>
          </div>
        </div>
      </div>
      <div className="bg-gradient-to-b from-amber-400 to-amber-600 h-full">
        <div className="flex flex-col items-center justify-center h-full text-gray-100 gap-6">
          <Image src={fondoLogin} alt={fondoLogin} className="w-68 h-68" />
          <h1 className="text-4xl">Bienvenido a nuestro sitio</h1>
          <h1>Encuentra cursos valiosos y muchos más ! </h1>
          <h1>Visita nuestras redes sociales </h1>
          <ul className="flex items-center gap-8">
            <li>
              <FaFacebookF color="white" size={40} />
            </li>
            <li>
              <AiFillInstagram color="white" size={40} />
            </li>
            <li>
              <AiFillYoutube color="white" size={40} />
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}
