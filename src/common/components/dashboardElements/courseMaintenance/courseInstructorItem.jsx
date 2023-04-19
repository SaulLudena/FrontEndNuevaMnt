import { useState } from 'react'
import Link from 'next/link'
import { AiFillEye } from 'react-icons/ai'
import { BsFillPencilFill, BsFillTrashFill } from 'react-icons/bs'
import { Dialog, Transition, Fragment } from '@headlessui/react'
import { reusableStyles } from '../../../../styles/styles'
export default function CourseInstructorItem({ registeredCourse }) {
  let [isOpen, setIsOpen] = useState(false)
  const [disableState, setDisableState] = useState(false)
  const closeModal = () => {
    setIsOpen(false)
  }

  const openModal = () => {
    setDisableState(false)
    setIsOpen(true)
  }
  return (
    <div className="bg-white rounded-xl p-5">
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex items-center justify-center min-h-full p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-96 max-w-md p-6 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl">
                  <Dialog.Title as="h3" className="text-lg font-medium leading-6 text-gray-900">
                    Detalle del curso
                  </Dialog.Title>
                  <div className="mt-2">
                    <div className="grid gap-3">
                      <div className="flex gap-2">
                        <div className=" flex flex-col items-center">
                          <div className="bg-gray-400 p-1 rounded-full"></div>
                          <div className="bg-gray-400 w-[1px] h-full"></div>
                        </div>
                        <div className="grid gap-2">
                          <p>Nombre del curso</p>
                          <p className={reusableStyles.inputDisabled}>{registeredCourse.nombre_curso}</p>
                        </div>
                      </div>
                      <div className="grid gap-2">
                        <p>Slug el curso</p>
                        <p className={reusableStyles.inputDisabled}>{registeredCourse.slug_curso}</p>
                      </div>
                      <div className="grid gap-2">
                        <p>Descripcion del curso</p>
                        <p className={reusableStyles.inputDisabled}>{registeredCourse.descripcion_curso}</p>
                      </div>
                      <div className="grid gap-2">
                        <p>Categoria del curso</p>
                        <p className={reusableStyles.inputDisabled}>
                          {registeredCourse.tb_categoria_curso.nombre_categoria_curso}
                        </p>
                      </div>
                      <div className="grid gap-2">
                        <p>Tipo de curso</p>
                        <div className={reusableStyles.inputDisabled}>
                          {registeredCourse.tipo_precio_curso === '0' ? (
                            <p>Gratis</p>
                          ) : (
                            <div className="grid gap-2">
                              <p>De pago</p>
                              <div className="flex gap-3">
                                <p className="p-2 border-2 bg-white rounded-lg border-emerald-300">
                                  Precio regular: s/. {registeredCourse.precio_regular_curso}
                                </p>
                                <p className="p-2 border-2 bg-white rounded-lg border-emerald-300">
                                  Precio descuento: s/. {registeredCourse.precio_descuento_curso}
                                </p>
                              </div>
                            </div>
                          )}
                        </div>
                      </div>
                      <div className="grid gap-2">
                        <p>Enlace de video introductorio</p>
                        <p className={reusableStyles.inputDisabled}>
                          {registeredCourse.tb_categoria_curso.nombre_categoria_curso}
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="mt-4">
                    <button type="button" disabled={disableState} className={reusableStyles.button}>
                      Cerrar
                    </button>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
      <div className=" grid items-center gap-10 ">
        <div className="translate-y-3">
          <h1 className="text-center font-bold">{registeredCourse.nombre_curso}</h1>
        </div>
        <div className="flex justify-center">
          <div className="flex gap-5">
            <button onClick={openModal} className=" p-4 bg-[#4BFFD4] rounded-xl ">
              <AiFillEye />
            </button>

            <Link href="#" className="p-4 bg-yellow-300 rounded-xl">
              <BsFillPencilFill />
            </Link>

            <Link href="#" className="p-4 bg-rose-400 rounded-xl">
              <BsFillTrashFill />
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
