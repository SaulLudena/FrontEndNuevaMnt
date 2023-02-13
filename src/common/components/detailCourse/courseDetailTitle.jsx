import Link from 'next/link'
import React from 'react'
import Image from 'next/image'
import LogoSrc from '../../../../public/assets/nuevamente_logo.png'
import { AiFillStar } from 'react-icons/ai'
/*recibir props y utilizarlos */
export default function courseDetailTitle() {
  return (
    <div className=" 2xl:col-span-2 lg:col-span-1  h-full grid">
      <div className="py-5 px-10  bg-stone-800 rounded-xl flex flex-col justify-center gap-3">
        <p className="text-white text-2xl font-bold ">Marketing para Networkers</p>
        <div className="flex gap-1">
          <AiFillStar className="text-[#FFF409]" />
          <AiFillStar className="text-[#FFF409]" />
          <AiFillStar className="text-[#FFF409]" />
          <AiFillStar className="text-white" />
          <AiFillStar className="text-white" />
        </div>
      </div>
    </div>
  )
}
