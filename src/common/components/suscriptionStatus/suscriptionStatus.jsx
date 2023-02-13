import React from 'react'
import { HiOutlineEmojiHappy } from 'react-icons/hi'
export default function SuscriptionStatus() {
  return (
    <div className="md:col-span-1 lg:col-span-2 2xl:col-span-1 row-span-1 w-full bg-white rounded-xl p-5 ">
      <div className="flex items-center justify-center flex-col  h-full  w-full gap-5 text-gray-600">
        <HiOutlineEmojiHappy size={40} />
        <p className="font-bold">Suscripcion al dia</p>
      </div>
    </div>
  )
}
