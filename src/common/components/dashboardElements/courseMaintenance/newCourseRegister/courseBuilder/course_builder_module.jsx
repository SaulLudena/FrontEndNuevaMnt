import { Dialog, Disclosure, Transition } from '@headlessui/react'
import React, { Fragment, useState } from 'react'
import { BsChevronUp, BsFillPencilFill, BsTrash } from 'react-icons/bs'
import { MdPlayLesson, MdViewModule } from 'react-icons/md'
import { reusableStyles } from '../../../../../../styles/styles'

export default function Course_builder_module({ nombre_modulo, register }) {
  const [isOpen, setIsOpen] = useState(false)

  /*una funcion para abrir y cerrar modal */
  const openModal = () => {
    setIsOpen(true)
  }
  const closeModal = () => {
    setIsOpen(false)
  }

  const removeLesson = () => {
    console.log('za warudo')
  }
  const addLesson = () => {}
  const editModuleData = () => {}
  return (
    <div className="">
      <>
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
              <div className="fixed inset-0 bg-black bg-opacity-50" />
            </Transition.Child>

            <div className="fixed inset-0 overflow-y-auto">
              <div className="flex items-center justify-center min-h-full p-4 text-center">
                <Transition.Child
                  as={Fragment}
                  enter="ease-out duration-50"
                  enterFrom="opacity-0 scale-95"
                  enterTo="opacity-100 scale-100"
                  leave="ease-in duration-100"
                  leaveFrom="opacity-100 scale-100"
                  leaveTo="opacity-0 scale-95"
                >
                  <Dialog.Panel className="w-full max-w-md p-5 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-xl">
                    <Dialog.Title as="h3" className="text-lg font-medium leading-6 text-gray-900">
                      Agregando una nueva leccion
                    </Dialog.Title>
                    <div className="flex flex-col gap-5 mt-5 bg-white ">
                      <div className="grid gap-3">
                        <p className="font-medium">Nombre de la leccion</p>
                        <input
                          type="text"
                          className={reusableStyles.inputFormForCourseMaintenance}
                          {...register('nombre_leccion')}
                        />
                      </div>
                      <div className="grid gap-3">
                        <p className="font-medium">Descripcion de la leccion</p>
                        <textarea
                          type="text"
                          className={reusableStyles.inputFormForCourseMaintenance}
                          {...register('descripcion_leccion')}
                          rows={5}
                        />
                      </div>
                      <div className="grid gap-3">
                        <p className="font-medium">Imagen destacada</p>
                        <input
                          type="file"
                          className={reusableStyles.inputFormForCourseMaintenance}
                          {...register('imagen_descatacada_leccion')}
                        />
                      </div>
                      <div className="grid gap-3">
                        <p className="font-medium">Video de introduccion al curso (Vimeo)</p>
                        <input
                          type="text"
                          className={reusableStyles.inputFormForCourseMaintenance}
                          placeholder="Pega una URL de video de vimeo"
                          {...register('url_video_leccion')}
                        />
                      </div>
                      <div className="grid gap-3">
                        <p className="font-medium">Duracion de la leccion</p>
                        <div className="flex gap-3">
                          <div>
                            <input
                              type="text"
                              className={reusableStyles.inputFormForCourseMaintenance}
                              placeholder="00"
                              {...register('duracion_hora_leccion')}
                            />
                            <p>Hora</p>
                          </div>
                          <div>
                            <input
                              type="text"
                              className={reusableStyles.inputFormForCourseMaintenance}
                              placeholder="00"
                              {...register('duracion_minuto_leccion')}
                            />
                            <p>Minuto</p>
                          </div>
                          <div>
                            <input
                              type="text"
                              className={reusableStyles.inputFormForCourseMaintenance}
                              placeholder="00"
                              {...register('duracion_segundo_leccion')}
                            />
                            <p>Segundo</p>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="flex justify-between mt-10">
                      <div>
                        <button type="button" className={reusableStyles.button}>
                          Agregar leccion
                        </button>
                      </div>
                      <div>
                        <button type="button" className={reusableStyles.button} onClick={closeModal}>
                          Cancelar
                        </button>
                      </div>
                    </div>
                  </Dialog.Panel>
                </Transition.Child>
              </div>
            </div>
          </Dialog>
        </Transition>
      </>
      <Disclosure>
        {({ open }) => (
          <>
            <div className={reusableStyles.courseModuleStyleCard}>
              <div className="flex items-center justify-between w-full gap-2">
                <div className="flex items-center gap-2">
                  <MdViewModule />
                  <span>{nombre_modulo}</span>
                </div>
                <div className="relative flex gap-1 pr-1 items-center">
                  <div className="p-3 hover:bg-gray-200 rounded-full hover:cursor-pointer">
                    <BsFillPencilFill />
                  </div>
                  <div className="p-3 hover:bg-gray-200 rounded-full hover:cursor-pointer" onClick={removeLesson}>
                    <BsTrash />
                  </div>
                  <Disclosure.Button className="p-3 hover:bg-gray-200 rounded-full ">
                    <BsChevronUp className={`${open ? 'rotate-180 transform' : ''} h-4 w-4 `} />
                  </Disclosure.Button>
                </div>
              </div>
            </div>

            <Transition
              enter="transition duration-400 ease-in-out"
              enterFrom="transform scale-95 opacity-0"
              enterTo="transform scale-100 opacity-100"
              leave="transition duration-40 ease-in-out"
              leaveFrom="transform scale-100 opacity-100"
              leaveTo="transform scale-95 opacity-0"
            >
              <Disclosure.Panel className="text-sm ">
                <div className="px-5 py-2">
                  <div className="flex justify-between py-2 bg-gray-50">
                    <button className="px-4 py-2 bg-yellow-400 rounded-lg" onClick={openModal}>
                      Nueva leccion
                    </button>
                  </div>
                  <div>
                    <div className="grid gap-2">
                      {/*esto es una leccion */}
                      <div className="flex justify-between p-3 bg-gray-50">
                        <div className="flex items-center gap-3">
                          <MdPlayLesson />
                          <p className="">Leccion 1: Video introductorio</p>
                        </div>
                        <div className="flex gap-3 ">
                          <div className="p-1  hover:bg-red-200">
                            <BsFillPencilFill />
                          </div>
                          <div className="p-1 hover:bg-red-200">
                            <BsTrash />
                          </div>
                        </div>
                      </div>
                      {/*esto es una leccion */}
                      <div className="flex justify-between p-3 bg-gray-50">
                        <div className="flex items-center gap-3 ">
                          <MdPlayLesson />
                          <p className="">Leccion 1: Video introductorio</p>
                        </div>
                        <div className="flex gap-3 ">
                          <div className="p-1  hover:bg-red-200">
                            <BsFillPencilFill />
                          </div>
                          <div className="p-1 hover:bg-red-200">
                            <BsTrash />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Disclosure.Panel>
            </Transition>
          </>
        )}
      </Disclosure>
    </div>
  )
}
