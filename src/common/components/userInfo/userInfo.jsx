import axios from 'axios'
import Cookies from 'js-cookie'
import { useEffect, useState } from 'react'
import { BiUser } from 'react-icons/bi'
export default function userInfo() {
  const [user, setUser] = useState(null)
  useEffect(() => {
    const getUserData = async () => {
      try {
        const data = {
          nuevamentetoken: Cookies.get('nuevamenteToken'),
        }
        const response = await axios.post('http://localhost:3003/user/getUserData', data)
        const myInfo = response.data.userInfo
        setUser(myInfo)
        setUserImage(myInfo.url_foto_perfil_usuario)
      } catch (error) {
        console.log(error)
      }
    }
    getUserData()
  }, [])
  console.log(user)
  /*corregir los undefined y manejar los context, aplicar el primer principio solid */
  return (
    <div className="flex justify-between gap-5 b">
      <div className=" flex items-center justify-center ">
        <div className="rounded-full ">
          <img src={userImage} className="w-[4rem] h-[4rem] rounded-full " alt="Imagen usuario" />
        </div>
      </div>
      <div className="flex items-center">
        {user ? (
          <div>
            <p className="text-xl font-bold">{user.nombre_usuario}</p>
            <p className="text-gray-500 font-light">{user.rol_usuario}</p>
          </div>
        ) : (
          <div role="status" className="max-w-sm animate-pulse animation duration-300">
            <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-28 mb-4"></div>
            <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 w-28 mb-2.5"></div>
          </div>
        )}
      </div>
    </div>
  )
}
