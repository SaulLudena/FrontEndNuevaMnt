import { Dialog, Transition } from '@headlessui/react'
import { Fragment, useState } from 'react'
import { BsFillPlusCircleFill, BsImageAlt } from 'react-icons/bs'
import { reusableStyles } from '../../../../../../styles/styles'
import Course_lesson_item from './course_lesson_item'

export default function course_builder_lesson({ fields, update, ModuleIndex, moduleItem, setValue }) {
  //estados para el modal y para el nombre del modulo
  let [isOpen, setIsOpen] = useState(false)
  const [lessonImagePreview, setLessonImagePreview] = useState('')
  const [disableState, setDisableState] = useState(false)
  const [lesson, setLesson] = useState({
    leccion_titulo: '',
    leccion_descripcion: '',
    leccion_imagen: [],
    leccion_enlace: '',
    leccion_duracion_horas: '',
    leccion_duracion_minutos: '',
    leccion_duracion_segundos: '',
  })

  const closeModal = () => {
    setIsOpen(false)
  }

  const openModal = () => {
    setDisableState(false)
    setIsOpen(true)
  }

  const createNewLesson = () => {
    //recuperamos todos el objeto del modulo que se va a actualizar
    const moduleToUpdate = fields[ModuleIndex]
    //creamos el objeto leccion
    const updatedModule = {
      ...moduleToUpdate,
      lessons: [...moduleToUpdate.lessons, lesson],
    }
    update(ModuleIndex, updatedModule)
    setDisableState(true)
    setIsOpen(false)
  }

  const handleLessonImagePreview = (e) => {
    if (e.target.files && e.target.files.length > 0) {
      setLessonImagePreview(e.target.files[0])
    }
  }
  return (
    <div className="grid gap-3 px-5 ">
      <>
        {/*componentizar esto, registro de leccion */}
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
                  <Dialog.Panel className="w-full max-w-md p-6 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl">
                    <Dialog.Title as="h3" className="text-lg font-medium leading-6 text-gray-900">
                      Registro de leccion
                    </Dialog.Title>
                    <div className="mt-2">
                      <div className="grid gap-3">
                        <div className="grid gap-2">
                          <p>Título de la leccion</p>
                          <input
                            type="text"
                            className={reusableStyles.inputFormForCourseMaintenance}
                            onChange={(e) => {
                              setLesson({ ...lesson, leccion_titulo: e.target.value })
                            }}
                            required
                          />
                        </div>
                        <div className="grid gap-2">
                          <p>Descripción de la leccion</p>
                          <textarea
                            type="text"
                            rows={6}
                            className={reusableStyles.inputFormForCourseMaintenance}
                            value={lesson.leccion_descripcion}
                            onChange={(e) => setLesson({ ...lesson, leccion_descripcion: e.target.value })}
                          />
                        </div>
                        <div className="grid gap-2">
                          <p>Imagen destacada</p>
                          <div className="relative grid gap-3 rounded-lg cursor-pointer">
                            <div className="flex items-center p-5 text-yellow-900 bg-yellow-100 border-2 border-yellow-400 rounded-lg ">
                              <BsImageAlt size={20} />
                              <p className="ml-3">Seleccionar imagen</p>
                            </div>
                            <input
                              type="file"
                              className="absolute w-full h-full border-2 border-red-600 opacity-0 cursor-pointer"
                              accept="image/png, image/gif, image/jpeg"
                              onChange={(e) => {
                                handleLessonImagePreview(e), setLesson({ ...lesson, leccion_imagen: e.target.files[0] })
                              }}
                            />
                          </div>
                          {lessonImagePreview && (
                            <img
                              /*en el source mediante el objeto URL construimos un enlace con la informacion del input file */
                              src={URL.createObjectURL(lessonImagePreview)}
                              alt="thumbnail course"
                              className="object-cover w-full border-2 border-yellow-400 rounded-lg h-36"
                            />
                          )}
                        </div>
                        <div className="grid gap-2">
                          <p>Enlace del video (vimeo)</p>
                          <input
                            type="text"
                            className={reusableStyles.inputFormForCourseMaintenance}
                            value={lesson.leccion_enlace}
                            onChange={(e) => setLesson({ ...lesson, leccion_enlace: e.target.value })}
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
                                value={lesson.leccion_duracion_horas}
                                onChange={(e) => setLesson({ ...lesson, leccion_duracion_horas: e.target.value })}
                              />
                              <p>Horas</p>
                            </div>
                            <div>
                              <input
                                type="number"
                                min={0}
                                className={reusableStyles.inputFormForCourseMaintenance}
                                value={lesson.leccion_duracion_minutos}
                                onChange={(e) => setLesson({ ...lesson, leccion_duracion_minutos: e.target.value })}
                              />
                              <p>Minutos</p>
                            </div>
                            <div>
                              <input
                                type="number"
                                min={0}
                                className={reusableStyles.inputFormForCourseMaintenance}
                                value={lesson.leccion_duracion_segundos}
                                onChange={(e) => setLesson({ ...lesson, leccion_duracion_segundos: e.target.value })}
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
                        onClick={createNewLesson}
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
      <div className="flex justify-between ">
        <div
          className="flex items-center gap-3 px-4 py-2 bg-[#4BFF9E] rounded-lg outline-none cursor-pointer"
          onClick={openModal}
        >
          <BsFillPlusCircleFill />
          Agregar leccion
        </div>
      </div>
      <div>
        <div className="grid gap-2">
          {/*esto es una leccion , aqui tambien hacer el map*/}
          {fields[ModuleIndex].lessons.map((lessonItem, index) => {
            return (
              <Course_lesson_item
                key={index + 1}
                lessonItem={lessonItem}
                lessonIndex={index}
                moduleItem={moduleItem}
                ModuleIndex={ModuleIndex}
                setValue={setValue}
              />
            )
          })}
        </div>
      </div>
    </div>
  )
}
