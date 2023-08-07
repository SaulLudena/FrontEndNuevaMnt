import { useEffect, useState } from 'react'
import TopNav from '../topnav/topNav'
import { AiFillStar, AiFillCheckCircle, AiOutlineShoppingCart } from 'react-icons/ai'
import Link from 'next/link'
export default function moreCourses({ coursesToBuy }) {
  const [selectedItems, setSelectedItems] = useState([])

  const handleAddToCart = (item) => {
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
        <div className="grid gap-10 ">
          <div className="grid w-full gap-2 text-3xl font-bold">
            <h1>Adquiere los mejores cursos</h1>
          </div>
          <div className="grid gap-10 2xl:grid-cols-1">
            {coursesToBuy.map((courseToBuy) => {
              const text = courseToBuy.nombre_curso.split(' ')
              const firstText = text[0]
              const restText = text.slice(1).join(' ')
              const disabled = selectedItems.find((item) => item.id_curso === courseToBuy.id_curso)?.disabled

              return (
                <div key={courseToBuy.id_curso} className="p-5 rounded-xl   bg-[#ffda093d] opacity-90 shadow-md">
                  <div className="flex gap-14">
                    <div className="flex justify-between w-[35rem] h-[15rem]">
                      {courseToBuy.url_imagen_principal_curso.length <= 0 ? (
                        <div className="w-full bg-white rounded-md">
                          <div className="relative flex items-center justify-center w-full h-full text-center">
                            <div className="flex w-full h-full">
                              <div className="w-40 h-40 rounded-br-full bg-slate-100"></div>
                              <div className="flex flex-col">
                                <div className="bottom-0 w-20 h-20 rounded-full bg-slate-100"></div>
                                <div className="bottom-0 w-20 h-20 rounded-full bg-slate-100"></div>
                                <div className="bottom-0 w-20 h-20 rounded-full bg-slate-100"></div>
                              </div>
                            </div>

                            <div className="absolute grid gap-1 text-4xl font-bold break-normal select-none">
                              <h1 className="text-yellow-400">{firstText ? firstText : 'Sin titulo'}</h1>
                              <h1>{restText}</h1>
                            </div>
                          </div>
                        </div>
                      ) : (
                        <img
                          src={courseToBuy.url_imagen_principal_curso}
                          alt="Course image"
                          className="  rounded-lg object-cover w-[35rem] h-[15rem]"
                        />
                      )}
                    </div>
                    <div className="flex flex-col justify-around w-full">
                      <h1 className="text-2xl font-bold ">
                        {courseToBuy.nombre_curso.length <= 0 || courseToBuy.nombre_curso === ''
                          ? 'Sin titulo'
                          : courseToBuy.nombre_curso}
                      </h1>
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
                        <Link
                          href={'/masCursos/' + courseToBuy.id_curso}
                          className={`bg-black px-5 py-2 rounded-full text-white`}
                        >
                          Ver más
                        </Link>
                        <button
                          onClick={() => {
                            handleAddToCart(courseToBuy)
                          }}
                          className={`${disabled ? 'bg-white ' : 'bg-white'} rounded-full shadow-lg`}
                          disabled={disabled}
                        >
                          {disabled ? (
                            <Link
                              href="/shoppingCart"
                              className="flex items-center gap-2 px-5 py-2 duration-300 animation "
                            >
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
                            <p className="px-16 py-3 text-yellow-400 bg-white border-2 border-yellow-400 shadow-lg">
                              Gratis
                            </p>
                          ) : (
                            <div className="flex flex-col gap-2 text-right">
                              <span className="w-32 text-2xl font-bold">S/. {courseToBuy.precio_descuento_curso}</span>

                              <span className="font-light line-through text-zinc-600">
                                S/. ${courseToBuy.precio_regular_curso}
                              </span>
                            </div>
                          )}
                        </div>
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
