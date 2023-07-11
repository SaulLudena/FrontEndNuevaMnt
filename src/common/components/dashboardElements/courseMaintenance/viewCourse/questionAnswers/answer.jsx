import React from 'react'

export default function Answer() {
  return (
    <div className="flex items-start gap-5 px-3 py-3 text-black border border-white rounded-lg hover:border-gray-200 hover:bg-gray-50">
      <div className="w-10 h-10 ">
        <img
          src="https://images.genius.com/e7bc4bc0ad72f28752e27630299d2442.700x700x1.jpg"
          className="w-full h-full rounded-full"
          alt=""
        />
      </div>
      <div>
        <span className="flex items-end gap-3">
          <h1 className="text-lg font-bold">Freddy Ramirez</h1>
          <p className="text-[#a9a9a9] text-sm">22/01/2023</p>
        </span>
        <p className="font-light">Esta es mi respuesta</p>
      </div>
    </div>
  )
}
