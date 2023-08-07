import { Dialog, Transition } from '@headlessui/react'
import { AiFillLock } from 'react-icons/ai'
import { BiWorld } from 'react-icons/bi'

import React, { Fragment, useState, useEffect } from 'react'
import { BsImageAlt, BsPencilFill, BsTrash } from 'react-icons/bs'
import { MdPlayLesson } from 'react-icons/md'
import { reusableStyles } from '../../../../../../styles/styles'
export default function Edit_course_lesson_item({ lessonItem, lessonIndex, moduleItem, ModuleIndex, setValue }) {
  let [isOpen, setIsOpen] = useState(false)
  let [isOpenEdit, setIsOpenEdit] = useState(false)
  const [disableState, setDisableState] = useState(false)

  const [newLessonImagepreview, setNewLessonImagePreview] = useState(lessonItem.leccion_imagen)

  const [newLeccionTitulo, setNewLeccionTitulo] = useState(lessonItem.leccion_titulo)
  const [newLeccionDescripcion, setNewLeccionDescripcion] = useState(lessonItem.leccion_descripcion)
  const [newLeccionImagen, setNewLeccionImagen] = useState(lessonItem.leccion_imagen)
  const [newLeccionEnlace, setNewLeccionEnlace] = useState(lessonItem.leccion_enlace)
  const [newLeccionDuracionHoras, setNewLeccionDuracionHoras] = useState(lessonItem.leccion_duracion_horas)
  const [newLeccionDuracionMinutos, setNewLeccionDuracionMinutos] = useState(lessonItem.leccion_duracion_minutos)
  const [newLeccionDuracionSegundos, setNewLeccionDuracionSegundos] = useState(lessonItem.leccion_duracion_segundos)
  const [newLeccionModoVisualizacion, setNewLeccionModoVisualizacion] = useState(lessonItem.leccion_modo_visualizacion)

  const handleNewLessonImagePreview = (e) => {
    if (e.target.files && e.target.files.length > 0) {
      setNewLessonImagePreview(e.target.files[0])
    }
  }

  const closeModalDelete = () => {
    setIsOpen(false)
  }

  const openModalDelete = () => {
    setIsOpen(true)
  }
  const openModalEdit = () => {
    setDisableState(false)
    setIsOpenEdit(true)
  }
  const closeModalEdit = () => {
    setIsOpenEdit(false)
  }

  const confirmEdit = () => {
    setIsOpenEdit(false)
    setValue(`modulos_curso.${ModuleIndex}.lessons.${lessonIndex}.leccion_titulo`, newLeccionTitulo)
    setValue(`modulos_curso.${ModuleIndex}.lessons.${lessonIndex}.leccion_descripcion`, newLeccionDescripcion)
    setValue(`modulos_curso.${ModuleIndex}.lessons.${lessonIndex}.leccion_imagen`, newLeccionImagen)
    setValue(`modulos_curso.${ModuleIndex}.lessons.${lessonIndex}.leccion_enlace`, newLeccionEnlace)
    setValue(`modulos_curso.${ModuleIndex}.lessons.${lessonIndex}.leccion_duracion_horas`, newLeccionDuracionHoras)
    setValue(`modulos_curso.${ModuleIndex}.lessons.${lessonIndex}.leccion_duracion_minutos`, newLeccionDuracionHoras)
    setValue(
      `modulos_curso.${ModuleIndex}.lessons.${lessonIndex}.leccion_duracion_segundos`,
      newLeccionDuracionSegundos,
    )
    setValue(
      `modulos_curso.${ModuleIndex}.lessons.${lessonIndex}.leccion_modo_visualizacion`,
      newLeccionModoVisualizacion,
    )
  }

  const confirmDelete = () => {
    setIsOpen(false)
    const updatedModuleItem = { ...moduleItem }
    updatedModuleItem.lessons.splice(lessonIndex, 1)
    setValue(`modulos_curso.${ModuleIndex}`, updatedModuleItem)
  }

  return (
    <div>
      <>
        {/*componentizar esto, modal para eliminar */}
        <Transition appear show={isOpen} as={Fragment}>
          <Dialog as="div" className="relative z-10" onClose={closeModalDelete}>
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
                  <Dialog.Panel className="w-full max-w-md p-6 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl">
                    <Dialog.Title as="h3" className="text-lg font-medium leading-6 text-gray-900">
                      ¿Deseas eliminar la leccion ''?
                    </Dialog.Title>
                    <div className="flex justify-between mt-10">
                      <button
                        type="button"
                        className={reusableStyles.button}
                        onClick={() => {
                          closeModalDelete()
                        }}
                      >
                        Cancelar
                      </button>
                      <button
                        type="button"
                        className={reusableStyles.redButton}
                        onClick={() => {
                          confirmDelete()
                        }}
                      >
                        Eliminar
                      </button>
                    </div>
                  </Dialog.Panel>
                </Transition.Child>
              </div>
            </div>
          </Dialog>
        </Transition>
        {/*componentizar esto, modal para editar */}
        <Transition appear show={isOpenEdit} as={Fragment}>
          <Dialog as="div" className="relative z-10" onClose={closeModalEdit}>
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
                  <Dialog.Panel className="w-full max-w-md p-6 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl">
                    <Dialog.Title as="h3" className="text-lg font-medium leading-6 text-gray-900">
                      Editando la leccion
                    </Dialog.Title>
                    <div className="mt-2">
                      <div className="grid gap-3">
                        <div className="grid gap-2">
                          <p>Título de la leccion</p>
                          <input
                            type="text"
                            defaultValue={newLeccionTitulo}
                            className={reusableStyles.inputFormForCourseMaintenance}
                            onChange={(e) => setNewLeccionTitulo(e.target.value)}
                          />
                        </div>
                        <div className="grid gap-2">
                          <p>Descripción de la leccion</p>
                          <textarea
                            type="text"
                            rows={6}
                            defaultValue={newLeccionDescripcion}
                            className={reusableStyles.inputFormForCourseMaintenance}
                            onChange={(e) => setNewLeccionDescripcion(e.target.value)}
                          />
                        </div>
                        <div className="grid gap-2">
                          <p>Modo de visualizacion</p>
                          <div className="grid grid-cols-2">
                            <label className="flex flex-col col-span-1 text-center border-2 border-emerald-300 rounded-tl-xl rounded-bl-xl bg-emerald-50">
                              <span className="flex items-center justify-center gap-2 p-2 border-2 border-b-0 rounded-tl-lg bg-emerald-300 border-emerald-300">
                                Solo para alumnos <AiFillLock />
                              </span>
                              <input
                                type="radio"
                                name="tipo_visualizacion"
                                checked={newLeccionModoVisualizacion == 1}
                                className="w-[100%] h-[2em] my-4"
                                value={1}
                                onChange={(e) => {
                                  setNewLeccionModoVisualizacion(e.target.value)
                                }}
                              />
                            </label>
                            <label className="flex flex-col col-span-1 text-center border-2 border-cyan-300 rounded-tr-xl rounded-br-xl bg-cyan-50">
                              <span className="flex items-center justify-center gap-2 p-2 border-2 border-b-0 rounded-tr-lg bg-cyan-300 border-cyan-300">
                                Publica <BiWorld />
                              </span>
                              <input
                                type="radio"
                                name="tipo_visualizacion"
                                className="w-[100%] h-[2em] my-4"
                                value={0}
                                checked={newLeccionModoVisualizacion == 0}
                                onChange={(e) => {
                                  setNewLeccionModoVisualizacion(e.target.value)
                                }}
                              />
                            </label>
                          </div>
                        </div>
                        <div className="grid gap-2">
                          <p>Imagen destacada</p>
                          <div className="relative grid gap-3 rounded-lg ">
                            <div className="flex items-center p-5 text-yellow-900 bg-yellow-100 border-2 border-yellow-400 rounded-lg ">
                              <BsImageAlt size={20} />
                              <p className="ml-3">Seleccionar imagen</p>
                            </div>
                            <input
                              type="file"
                              className="absolute w-full h-full border-2 border-red-600 opacity-0 cursor-pointer"
                              accept="image/png, image/gif, image/jpeg"
                              onChange={(e) => {
                                handleNewLessonImagePreview(e)
                                setNewLeccionImagen(e.target.files[0])
                              }}
                            />
                          </div>
                          {/*validar que haya una imagen seleccionada 
                            newLessonImagepreview.length !== 0 ? (
                              <img
                     
                                src={URL.createObjectURL(newLessonImagepreview)}
                                alt="thumbnail course"
                                className="object-cover w-full border-2 border-yellow-400 rounded-lg h-36"
                              />
                            ) : (
                              <></>
                            )
							*/}
                        </div>
                        <div className="grid gap-2">
                          <p>Enlace del video (vimeo)</p>
                          <input
                            type="text"
                            className={reusableStyles.inputFormForCourseMaintenance}
                            defaultValue={newLeccionEnlace}
                            onChange={(e) => setNewLeccionEnlace(e.target.value)}
                          />
                        </div>
                        <div className="grid gap-2">
                          <p>Tiempo de duración del video</p>
                          <div className="grid grid-cols-3 gap-3">
                            <div>
                              <input
                                type="number"
                                min={0}
                                className={reusableStyles.inputFormForCourseMaintenance}
                                defaultValue={newLeccionDuracionHoras}
                                onChange={(e) => setNewLeccionDuracionHoras(e.target.value)}
                              />
                              <p>Horas</p>
                            </div>
                            <div>
                              <input
                                type="number"
                                min={0}
                                className={reusableStyles.inputFormForCourseMaintenance}
                                defaultValue={newLeccionDuracionMinutos}
                                onChange={(e) => setNewLeccionDuracionMinutos(e.target.value)}
                              />
                              <p>Minutos</p>
                            </div>
                            <div>
                              <input
                                type="number"
                                min={0}
                                className={reusableStyles.inputFormForCourseMaintenance}
                                defaultValue={newLeccionDuracionSegundos}
                                onChange={(e) => setNewLeccionDuracionSegundos(e.target.value)}
                              />

                              <p>Segundos</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="mt-4">
                      <button
                        type="button"
                        disabled={disableState}
                        className={reusableStyles.button}
                        onClick={() => {
                          confirmEdit()
                        }}
                      >
                        Editar
                      </button>
                    </div>
                  </Dialog.Panel>
                </Transition.Child>
              </div>
            </div>
          </Dialog>
        </Transition>
      </>
      <div className="flex justify-between p-3 bg-gray-100 rounded-lg hover:bg-gray-200">
        <div className="flex items-center gap-3">
          <MdPlayLesson />
          <p className="">{lessonItem.leccion_titulo}</p>
        </div>
        <div className="flex gap-1 ">
          <div
            className="p-3 rounded-full cursor-pointer hover:bg-gray-300"
            onClick={() => {
              openModalEdit()
            }}
          >
            <BsPencilFill />
          </div>
          <div
            className="p-3 rounded-full cursor-pointer hover:bg-gray-300"
            onClick={() => {
              openModalDelete()
            }}
          >
            <BsTrash />
          </div>
        </div>
      </div>
    </div>
  )
}
