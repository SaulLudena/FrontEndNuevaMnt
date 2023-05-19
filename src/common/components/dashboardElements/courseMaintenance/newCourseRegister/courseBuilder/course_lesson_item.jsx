import { Dialog, Transition } from '@headlessui/react'
import React, { Fragment, useState, useEffect } from 'react'
import { BsFillPencilFill, BsImageAlt, BsPencilFill, BsTrash } from 'react-icons/bs'
import { MdPlayLesson } from 'react-icons/md'
import { reusableStyles } from '../../../../../../styles/styles'

export default function Course_lesson_item({ lessonItem, lessonIndex, setValue, ModuleIndex }) {
  let [isOpen, setIsOpen] = useState(false)
  let [isOpenEdit, setIsOpenEdit] = useState(false)
  const [disableState, setDisableState] = useState(false)
  const [newLesson, setNewLesson] = useState({
    new_leccion_titulo: lessonItem.leccion_titulo,
    new_leccion_descripcion: lessonItem.leccion_descripcion,
    new_leccion_imagen: lessonItem.leccion_imagen,
    new_leccion_enlace: lessonItem.leccion_enlace,
    new_leccion_duracion_horas: lessonItem.leccion_duracion_horas,
    new_leccion_duracion_minutos: lessonItem.leccion_duracion_minutos,
    new_leccion_duracion_segundos: lessonItem.leccion_duracion_segundos,
  })

  useEffect(() => {
    setNewLesson(lessonItem.lecccion_titulo),
      setNewLesson(lessonItem.leccion_descripcion),
      setNewLesson(lessonItem.leccion_imagen),
      setNewLesson(lessonItem.leccion_enlace),
      setNewLesson(lessonItem.leccion_duracion_horas),
      setNewLesson(lessonItem.leccion_duracion_minutos),
      setNewLesson(lessonItem.leccion_duracion_segundos)
  }, [newLesson])

  const confirmDelete = () => {
    setIsOpen(false)
  }

  const confirmEdit = () => {
    setValue(`modulos_curso.${ModuleIndex}.lessons.${lessonIndex}.leccion_titulo`, newLesson.new_leccion_titulo)
    setValue(
      `modulos_curso.${ModuleIndex}.lessons.${lessonIndex}.leccion_descripcion`,
      newLesson.new_leccion_descripcion,
    )
    setValue(`modulos_curso.${ModuleIndex}.lessons.${lessonIndex}.leccion_imagen`, newLesson.new_leccion_imagen)
    setValue(`modulos_curso.${ModuleIndex}.lessons.${lessonIndex}.leccion_enlace`, newLesson.new_leccion_enlace)
    setValue(
      `modulos_curso.${ModuleIndex}.lessons.${lessonIndex}.leccion_duracion_horas`,
      newLesson.new_leccion_duracion_horas,
    )
    setValue(
      `modulos_curso.${ModuleIndex}.lessons.${lessonIndex}.leccion_duracion_minutos`,
      newLesson.new_leccion_duracion_minutos,
    )
    setValue(
      `modulos_curso.${ModuleIndex}.lessons.${lessonIndex}.leccion_duracion_segundos`,
      newLesson.new_leccion_duracion_segundos,
    )
    setIsOpenEdit(false)
  }

  const closeModalDelete = () => {
    setIsOpen(false)
  }

  const openModalDelete = () => {
    setIsOpen(true)
  }

  const closeModalEdit = () => {
    setIsOpenEdit(false)
  }
  const openModalEdit = () => {
    setDisableState(false)
    setIsOpenEdit(true)
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
                      ¿Deseas eliminar la leccion '{lessonItem.leccion_titulo}'?
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
                          /*Colocar el metodo de eliminacion de leccion*/
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
                      Editando el modulo
                    </Dialog.Title>
                    <div className="mt-2">
                      <div className="grid gap-3">
                        <div className="grid gap-2">
                          <p>Título de la leccion</p>
                          <input
                            type="text"
                            defaultValue={lessonItem.leccion_titulo}
                            className={reusableStyles.inputFormForCourseMaintenance}
                            onChange={(e) => setNewLesson({ new_leccion_titulo: e.target.value })}
                          />
                        </div>
                        <div className="grid gap-2">
                          <p>Descripción de la leccion</p>
                          <textarea
                            type="text"
                            rows={6}
                            defaultValue={lessonItem.leccion_descripcion}
                            className={reusableStyles.inputFormForCourseMaintenance}
                            onChange={(e) => setNewLesson({ new_leccion_descripcion: e.target.value })}
                          />
                        </div>
                        <div className="grid gap-2">
                          <p>Imagen destacada</p>
                          <div className="relative grid gap-3 border-2 border-gray-200 rounded-lg ">
                            <div className="flex items-center p-5 text-yellow-900 bg-yellow-100 border-2 border-yellow-400 rounded-lg ">
                              <BsImageAlt size={20} />
                              <p className="ml-3">Seleccionar imagen</p>
                            </div>
                            <input
                              type="file"
                              className="absolute w-full h-full border-2 border-red-600 opacity-0 cursor-pointer"
                              accept="image/png, image/gif, image/jpeg"
                              onChange={(e) => setNewLesson({ new_leccion_imagen: e.target.value })}
                            />
                          </div>
                        </div>
                        <div className="grid gap-2">
                          <p>Enlace del video (vimeo)</p>
                          <input
                            type="text"
                            className={reusableStyles.inputFormForCourseMaintenance}
                            defaultValue={lessonItem.leccion_enlace}
                            onChange={(e) => setNewLesson({ new_leccion_enlace: e.target.value })}
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
                                defaultValue={lessonItem.leccion_duracion_horas}
                                onChange={(e) => setNewLesson({ new_leccion_duracion_horas: e.target.value })}
                              />
                              <p>Horas</p>
                            </div>
                            <div>
                              <input
                                type="number"
                                min={0}
                                className={reusableStyles.inputFormForCourseMaintenance}
                                defaultValue={lessonItem.leccion_duracion_minutos}
                                onChange={(e) => setNewLesson({ new_leccion_duracion_minutos: e.target.value })}
                              />
                              <p>Minutos</p>
                            </div>
                            <div>
                              <input
                                type="number"
                                min={0}
                                className={reusableStyles.inputFormForCourseMaintenance}
                                defaultValue={lessonItem.leccion_duracion_segundos}
                                onChange={(e) => setNewLesson({ new_leccion_duracion_segundos: e.target.value })}
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
                        onClick={confirmEdit}
                      >
                        Guardar
                      </button>
                    </div>
                  </Dialog.Panel>
                </Transition.Child>
              </div>
            </div>
          </Dialog>
        </Transition>
      </>
      <div className="flex justify-between p-3 rounded-lg bg-gray-50 hover:bg-gray-100">
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
