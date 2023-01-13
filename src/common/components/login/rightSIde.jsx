import React from 'react'
import { AiFillInstagram, AiFillYoutube } from 'react-icons/ai'
import { FaFacebookF } from 'react-icons/fa'
import Image from 'next/image'
import fondoLogin from '../../../../public/assets/fondo_login.png'
import { Popover, Transition } from '@headlessui/react'
export default function RightDesign() {
  return (
    <div className="bg-gradient-to-b from-amber-400 to-amber-600 h-full hidden lg:inline-block">
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
        <Popover className="relative">
          <Popover.Button>Solutions</Popover.Button>
          <Transition
            enter="transition duration-300 ease-out"
            enterFrom="transform scale-95 opacity-0"
            enterTo="transform scale-300 opacity-100"
            leave="transition duration-75 ease-out"
            leaveFrom="transform scale-300 opacity-100"
            leaveTo="transform scale-95 opacity-0"
          >
            <Popover.Panel className="absolute z-10 bg-gray-200 p-5 w-60">
              <div className="grid grid-cols-2 gap-2">
                <a href="/analytics" className="bg-slate-100 p-4 rounded-lg text-black">
                  Analytics
                </a>
                <a href="/analytics" className="bg-slate-100 p-4 rounded-lg">
                  Analytics
                </a>
                <a href="/analytics" className="bg-slate-100 p-4 rounded-lg">
                  Analytics
                </a>
                <a href="/analytics" className="bg-slate-100 p-4 rounded-lg">
                  Analytics
                </a>
              </div>

              <img src="/solutions.jpg" alt="" />
            </Popover.Panel>
          </Transition>
        </Popover>
      </div>
    </div>
  )
}
