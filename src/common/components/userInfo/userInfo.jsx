import axios from 'axios'
import Cookies from 'js-cookie'
import { useEffect, useState } from 'react'
import { BiUser } from 'react-icons/bi'
import Image from 'next/image'
import pfp from '../../../../public/assets/user.jpg'
export default function userInfo() {
  const [user, setUser] = useState(null)
  useEffect(() => {
    const getId = async () => {
      try {
        const response = await axios.get('http://localhost:3003/login/protected', {
          headers: {
            authorization: Cookies.get('nuevamenteToken'),
          },
        })
        setUser(response.data.decoded)
      } catch (error) {
        console.log(error)
      }
    }
    getId()
  }, [])

  /*corregir los undefined y manejar los context, aplicar el primer principio solid */
  return (
    <div className="flex justify-between gap-5">
      <div className=" flex items-center justify-center">
        <div className="rounded-full ">
          <Image src={pfp} width={60} className="rounded-full" alt={<BiUser />} />
        </div>
      </div>
      <div className="flex items-center">
        <div>
          <p className="text-xl font-bold">{user !== null ? `Saul Cornejo` : 'no tienes acceso'}</p>
          <p className="text-gray-500 font-light">Estudiante</p>
        </div>
      </div>
    </div>
  )
}
