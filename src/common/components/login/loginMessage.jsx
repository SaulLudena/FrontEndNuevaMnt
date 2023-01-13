import React from 'react'
import { AiFillCloseCircle } from 'react-icons/ai'
export default function LoginMessage({ message }) {
  return (
    <div className=" w-full absolute p-5 justify-center flex">
      <div className="shadow-lg text-center w-1/4 px-5 py-5 bg-amber-100 rounded-2xl flex justify-between items-center col-reverse">
        <span className="text-gray-">{message}</span>
        <AiFillCloseCircle />
      </div>
    </div>
  )
}
