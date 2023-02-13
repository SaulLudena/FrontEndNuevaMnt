import React from 'react'
import { AiFillInstagram, AiFillYoutube } from 'react-icons/ai'
import { FaFacebookF } from 'react-icons/fa'
import Image from 'next/image'
import fondoLogin from '../../../../public/assets/fondo_login.png'
export default function RightDesign() {
  return (
    <div className="bg-[#FFF409] h-full hidden lg:inline-block">
      <div className="flex flex-col items-center justify-center h-full text-black gap-5">
        <Image src={fondoLogin} alt={fondoLogin} className="w-68 h-68" />
        <h1 className="text-4xl font-medium">Bienvenido a nuestro sitio</h1>
        <h1>Encuentra cursos valiosos y muchos más ! </h1>
        <h1>Visita nuestras redes sociales </h1>
        <ul className="flex items-center gap-8">
          <li>
            <FaFacebookF size={40} />
          </li>
          <li>
            <AiFillInstagram size={40} />
          </li>
          <li>
            <AiFillYoutube size={40} />
          </li>
        </ul>
      </div>
    </div>
  )
}
