import React, { useState } from 'react'
import { AiFillStar, AiFillCheckCircle, AiOutlineShoppingCart } from 'react-icons/ai'
import Link from 'next/link'

export default function CourseToBuyItem(courseToBuy, disabled) {
  return (
    <div
      key={courseToBuy.id_curso}
      className="p-5 rounded-xl  bg-gradient-to-r from-[#FFF409] via-white to-white opacity-90"
    >
      <div className="flex gap-14">
        <div className="flex justify-between">
          <img
            src={courseToBuy.url_imagen_principal_curso}
            alt="Course image"
            className="  rounded-lg object-cover w-[25rem] h-[15rem]"
          />
        </div>
        <div className="flex flex-col justify-around w-full">
          <h1 className="text-2xl font-bold ">{courseToBuy.nombre_curso}</h1>
          <p className="font-medium">
            <strong>Personas inscritas :</strong> {23}
          </p>
          <p>
            <strong>Descripcion:</strong> {courseToBuy.descripcion_curso.substr(0, 100)}
          </p>
          <span className="flex gap-1">
            <p>Dictado por:</p>
            <p className="font-bold">{courseToBuy.tb_usuario.nombre_usuario}</p>
          </span>
          <div className="flex gap-1">
            <AiFillStar className="text-[#FFF409]" />
            <AiFillStar className="text-[#FFF409]" />
            <AiFillStar className="text-[#FFF409]" />
            <AiFillStar className="text-gray-400" />
            <AiFillStar className="text-black" />
          </div>
          <div className="flex gap-2">
            <button className={`bg-black px-5 py-2 rounded-full text-white`}>Comprar</button>
            <button
              onClick={() => {
                handleAddToCart(courseToBuy)
              }}
              className={`${disabled ? 'bg-white ' : 'bg-white'} rounded-full shadow-lg`}
              disabled={disabled}
            >
              {disabled ? (
                <Link href="/shoppingCart" className="flex items-center gap-2 px-5 py-2 duration-300 animation ">
                  <AiFillCheckCircle className="text-emerald-500" />
                  <p>Ver carrito</p>
                </Link>
              ) : (
                <span className="flex items-center gap-2 px-5 py-2 duration-300 animation ">
                  <AiOutlineShoppingCart className="text-emerald-500" />
                  <p>Agregar al carrito</p>
                </span>
              )}
            </button>
          </div>
        </div>
        <div className="flex flex-col-reverse justify-start w-60 ">
          <div className="flex justify-end h-full">
            <div className="text-xl font-medium">
              {courseToBuy.precio_descuento_curso <= 0 ? (
                <p className=" py-3 px-16 bg-emerald-400 rounded-full">Gratis</p>
              ) : (
                `S/. ${courseToBuy.precio_descuento_curso}`
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
