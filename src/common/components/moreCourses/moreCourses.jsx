import React, { useEffect, useState } from 'react'
import TopNav from '../topnav/topNav'
import { AiFillStar, AiFillCheckCircle, AiOutlineShoppingCart } from 'react-icons/ai'
export default function moreCourses() {
  const [selectedItems, setSelectedItems] = useState([])
  const [courses, setCourse] = useState([
    {
      course_id: 1,
      course_title: 'Marketing para networkers',
      enrrolled_people: 14,
      course_description:
        'lorem ipsum more nato vim sere lorem ipsum more nato vim serevlorem ipsum more nato vim sere',
      course_teacher: 'Jeff Blas',
      course_rathe: 24,
      course_price: 1200,
      course_url_image:
        'https://i.natgeofe.com/n/548467d8-c5f1-4551-9f58-6817a8d2c45e/NationalGeographic_2572187_square.jpg',
    },
    {
      course_id: 2,
      course_title: 'Fotografia para principantes',
      enrrolled_people: 20,
      course_description:
        'lorem ipsum more nato vim sere lorem ipsum more nato vim serevlorem ipsum more nato vim sere',
      course_teacher: 'Jesus Branco',
      course_rathe: 24,
      course_price: 1100,
      course_url_image:
        'https://i.natgeofe.com/n/548467d8-c5f1-4551-9f58-6817a8d2c45e/NationalGeographic_2572187_square.jpg',
    },
  ])

  const handleAddToCart = (item, index) => {
    const newSelectedItems = [...selectedItems]
    newSelectedItems[index] = { ...item, disabled: true }
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
              const disabled = selectedItems.find((item) => item.course_id === course.course_id)?.disabled
              return (
                <div
                  key={course.course_id}
                  className="p-10 rounded-xl  bg-gradient-to-r from-[#FFF409] via-white to-white opacity-90"
                >
                  <div className="flex gap-14">
                    <div className="flex justify-between">
                      <img
                        src={course.course_url_image}
                        alt="Course image"
                        className="  rounded-lg object-cover w-[20rem]"
                      />
                    </div>
                    <div className="w-full flex flex-col justify-around">
                      <h1 className="text-2xl font-bold ">{course.course_title}</h1>
                      <p className="font-medium">
                        <strong>Personas inscritas :</strong> {course.enrrolled_people}
                      </p>
                      <p>Descripcion: {course.course_description}</p>
                      <span className="flex gap-1">
                        <p>Dictado por:</p>
                        <p className="font-bold">{course.course_teacher}</p>
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
                          className={`${disabled ? 'bg-white ' : 'bg-white'}  px-5 py-2 rounded-full shadow-lg`}
                          disabled={disabled}
                        >
                          {disabled ? (
                            <span className="flex items-center gap-2 animation duration-300">
                              <AiFillCheckCircle className="text-emerald-500" />
                              <p>Agregado</p>
                            </span>
                          ) : (
                            <span className="flex items-center gap-2 animation duration-300">
                              <AiOutlineShoppingCart className="text-emerald-500" />
                              <p>Agregar al carrito</p>
                            </span>
                          )}
                        </button>
                      </div>
                    </div>
                    <div className="flex flex-col-reverse  justify-start w-60 ">
                      <div className="flex justify-end h-full">
                        <p className="text-xl font-medium">S/. {course.course_price}</p>
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
