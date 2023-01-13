import React from 'react'
import Link from 'next/link'
export default function coursePogress() {
  return (
    <div className="col-span-1 row-span-2 w-full bg-white rounded-xl p-5">
      <div className="h-full flex flex-col justify-around text-center">
        <div>
          <h1 className="text-gray-500">Curso</h1>
          <h1 className="text-2xl font-bold break-words">Marketing orientado al MLM</h1>
        </div>
        <div className="justify-center flex flex-col text-center">
          <div className="flex text-center m-auto justify-center w-40 h-40 rounded-full border-[30px] border-[#FFF409]"></div>
          <div className="flex flex-col">
            <span className="-translate-y-[90px] font-bold">55%</span>
            <span className="-translate-y-5 text-gray-500">de progreso actual</span>
          </div>
        </div>
        <div>
          <Link href="/miAprendizaje/algunCurso" className="p-4 flex justify-center rounded-2xl bg-[#FFF409]">
            Continuar curso
          </Link>
        </div>
      </div>
    </div>
  )
}
