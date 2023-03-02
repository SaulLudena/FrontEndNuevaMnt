import React from 'react'

export default function ShopItem({ item, removeProduct, index }) {
  return (
    <div>
      <div className="flex items-center gap-10 p-5 bg-white rounded-xl">
        <div className="">
          <img src={item.course_url_image} className="w-40 h-40 rounded-lg" />
        </div>
        <div className="flex items-center justify-between w-full gap-5">
          <div className="grid gap-3 ">
            <h1 className="text-3xl font-bold">{item.course_title}</h1>
            <p>{item.course_description}</p>
          </div>
          <div className="grid items-center h-full w-52">
            <button
              className="px-3 py-2 text-white bg-pink-700 rounded-full"
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
