import React, { useEffect, useState } from 'react'
import TopNav from '../topnav/topNav'
import { AiFillStar, AiFillCheckCircle, AiOutlineShoppingCart } from 'react-icons/ai'
import Link from 'next/link'
export default function moreCourses({ myInfo }) {
  const [selectedItems, setSelectedItems] = useState([])
  const [courses, setCourse] = useState([])

  useEffect(() => {
    setCourse(myInfo)
  })

  const handleAddToCart = (item, index) => {
    console.log(item, index)
    const newSelectedItems = [...selectedItems]
    newSelectedItems.unshift({ ...item, disabled: true })
    setSelectedItems(newSelectedItems)
    localStorage.setItem('selectedItems', JSON.stringify(newSelectedItems))
  }

  useEffect(() => {
    const existingItem = JSON.parse(localStorage.getItem('selectedItems'))
    if (existingItem) {
      setSelectedItems(existingItem)
    }
  }, [])

  return (
    <div className={`flex flex-1 overflow-hidden w-full pt-5 pr-5 pb-5`}>
      <div className="bg-[#F7F7F7] rounded-xl h-full p-9 flex flex-col gap-4 overflow-y-scroll scroller w-full ">
        <TopNav />
        <div className=" grid gap-10">
          <div className="text-3xl font-bold  w-full grid gap-2">
            <h1>Adquiere los mejores cursos</h1>
          </div>
          <div className=" grid 2xl:grid-cols-1 gap-10">
            {courses.map((course, index) => {
              const disabled = selectedItems.find((item) => item.id_curso === course.id_curso)?.disabled
              return (
                <div
                  key={course.id_curso}
                  className="p-5 rounded-xl  bg-gradient-to-r from-[#FFF409] via-white to-white opacity-90"
                >
                  <div className="flex gap-14">
                    <div className="flex justify-between">
                      <img
                        src={course.url_imagen_principal_curso}
                        alt="Course image"
                        className="  rounded-lg object-cover w-[25rem] h-[15rem]"
                      />
                    </div>
                    <div className="w-full flex flex-col justify-around">
                      <h1 className="text-2xl font-bold ">{course.nombre_curso}</h1>
                      <p className="font-medium">
                        <strong>Personas inscritas :</strong> {23}
                      </p>
                      <p>Descripcion: {course.descripcion_curso.substr(0, 100)}</p>
                      <span className="flex gap-1">
                        <p>Dictado por:</p>
                        <p className="font-bold">{course.tb_usuario.nombre_usuario}</p>
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
                            handleAddToCart(course, index)
                          }}
                          className={`${disabled ? 'bg-white ' : 'bg-white'} rounded-full shadow-lg`}
                          disabled={disabled}
                        >
                          {disabled ? (
                            <Link
                              href="/shoppingCart"
                              className="flex items-center gap-2 animation duration-300   px-5 py-2 "
                            >
                              <AiFillCheckCircle className="text-emerald-500" />
                              <p>Ver carrito</p>
                            </Link>
                          ) : (
                            <span className="flex items-center gap-2 animation duration-300  px-5 py-2 ">
                              <AiOutlineShoppingCart className="text-emerald-500" />
                              <p>Agregar al carrito</p>
                            </span>
                          )}
                        </button>
                      </div>
                    </div>
                    <div className="flex flex-col-reverse  justify-start w-60 ">
                      <div className="flex justify-end h-full">
                        <p className="text-xl font-medium">S/. {parseInt(course.precio_curso)}</p>
                      </div>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </div>
  )
}
