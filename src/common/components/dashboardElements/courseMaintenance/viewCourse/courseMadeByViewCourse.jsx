import Link from 'next/link'
import React from 'react'
import { AiOutlineArrowUp } from 'react-icons/ai'

export default function CourseMadeByViewCourse({ courseDetail }) {
  return (
    <div className="bg-white ">
      <div className="relative flex flex-col justify-between h-full bg-white rounded-xl ">
        <div className="bg-[#000000] rounded-3xl">
          <img
            src={
              courseDetail.tb_usuario?.url_foto_perfil_usuario === undefined ||
              courseDetail.tb_usuario?.url_foto_perfil_usuario.length === 0 ||
              courseDetail.tb_usuario?.url_foto_perfil_usuario === null
                ? 'https://www.thermaxglobal.com/wp-content/uploads/2020/05/image-not-found.jpg'
                : courseDetail.tb_usuario?.url_foto_perfil_usuario
            }
            className="w-full max-h-56 object-cover opacity-[5%] rounded-xl"
          />
          <div className="absolute top-0 flex items-center w-full h-full rounded-xl">
            <div className="grid gap-3 max-w-[100%] w-full m-auto text-center ">
              <p className="text-white ">Un curso de</p>
              <p className="text-3xl font-bold text-white ">Jeff Blass</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
