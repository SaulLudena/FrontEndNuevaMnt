import React from 'react'

export default function ShopItem({ item, removeProduct, index }) {
  return (
    <div>
      <div className=" flex items-center bg-white p-5 rounded-xl gap-10">
        <div className="">
          <img src={item.course_url_image} className="w-40 h-40 rounded-lg" />
        </div>
        <div className="flex items-center w-full justify-between gap-5">
          <div className="grid gap-3 ">
            <h1 className="text-3xl font-bold">{item.course_title}</h1>
            <p>{item.course_description}</p>
          </div>
          <div className="h-full w-52 items-center grid">
            <button
              className="bg-pink-700 px-3 py-2 rounded-full text-white"
              onClick={() => {
                removeProduct(item.course_id)
              }}
            >
              Eliminar
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
