import cookie from 'js-cookie'
import { useState, useEffect } from 'react'
import { RiShutDownLine } from 'react-icons/ri'
import { BsLightbulb, BsBell } from 'react-icons/bs'

export default function topNav() {
  const [session, setSession] = useState()

  //use effect que guarda el valor de la session
  useEffect(() => {
    setSession(cookie.get('userName'))
  }, [])
  //funcion de logout que elimina la cookie y redirecciona al login que está en la ruta "/"
  const destroyAllCookies = () => {
    if (process.browser) {
      cookie.remove('userName')
      window.location.href = '/'
    }
  }
  return (
    <div className="flex items-center justify-between ">
      <div>
        <p className="text-sm">
          {session ? `Hola ${session}, esto es una prueba` : 'por favor, inicie sesion para continuar'}
        </p>
      </div>
      <div className="flex gap-3">
        <button onClick={destroyAllCookies} className="group transition-500 flex ">
          <div className="group-hover:text-gray-700 flex justify-between  p-3   rounded-3xl text-gray-400">
            <BsBell className="group-hover:text-gray-700 text-gray-700" />
          </div>
        </button>
        <button onClick={destroyAllCookies} className="group transition-500 flex">
          <div className="group-hover:text-gray-700 flex justify-between  p-3  rounded-3xl text-gray-400">
            <BsLightbulb className="group-hover:text-gray-700 text-gray-700" />
          </div>
        </button>
        <button onClick={destroyAllCookies} className="group transition-500 flex">
          <div className="group-hover:text-gray-700 flex justify-between  p-3  rounded-3xl text-gray-400">
            <RiShutDownLine className="group-hover:text-gray-700 text-gray-700" />
          </div>
        </button>
      </div>
    </div>
  )
}
