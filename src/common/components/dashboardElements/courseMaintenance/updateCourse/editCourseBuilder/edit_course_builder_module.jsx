import { Dialog, Transition } from '@headlessui/react'
import React, { Fragment, useState } from 'react'
import { GrClose } from 'react-icons/gr'
import { reusableStyles } from '../../../../../../styles/styles'
import { BsFillPlusCircleFill } from 'react-icons/bs'
import Edit_course_module_item from './edit_course_module_item'
import { useEffect } from 'react'
import axios from 'axios'

export default function Edit_course_builder_module({
  courseDetailForModules,
  remove,
  append,
  reset,
  getValues,
  update,
  setValue,
  register,
  fields,
}) {
  let [isOpen, setIsOpen] = useState(false)
  const [disableState, setDisableState] = useState(false)
  const [moduleName, setModuleName] = useState('')
  const [moduleDescription, setModuleDescription] = useState('')
  // Estado para almacenar la lista de módulos
  const [modulesList, setModulesList] = useState([])
  const closeModal = () => {
    setIsOpen(false)
  }
  const openModal = () => {
    setDisableState(false)
    setIsOpen(true)
  }

  useEffect(() => {
    // Estableciendo los valores iniciales de los campos
    const moduleListFromDB = courseDetailForModules.tb_modulo?.map((modulo) => {
      const moduleLessons = modulo.tb_leccion?.map((leccion) => ({
        leccion_titulo: leccion.nombre_leccion,
        leccion_descripcion: leccion.descripcion_leccion,
        leccion_modo_visualizacion: leccion.tipo_visualizacion_leccion,
        leccion_imagen: leccion.imagen_destacada_leccion,
        leccion_enlace: leccion.url_video_leccion,
        leccion_duracion_horas: leccion.duracion_hora_leccion,
        leccion_duracion_minutos: leccion.duracion_minuto_leccion,
        leccion_duracion_segundos: leccion.duracion_segundo_leccion,
      }))

      return {
        moduleName: modulo.nombre_modulo,
        moduleDescription: modulo.resumen_modulo,
        lessons: moduleLessons,
      }
    })

    // Actualizar el estado con la lista de módulos
    setModulesList(moduleListFromDB)
  }, [courseDetailForModules])

  const addNewModuleToLast = async () => {
    try {
      setDisableState(false)
      register('modulos_curso')
      append({ moduleName, moduleDescription, lessons: [] })
      // Crear un objeto con el último módulo registrado
      const lastModule = {
        moduleName,
        moduleDescription,
        course_id: courseDetailForModules.id_curso,
      }
      // Realizar la petición POST para enviar el último módulo
      await axios.post('http://localhost:3003/course/addModuleByIdCourse', { lastModule })

      // Restablecer los valores de los estados y habilitar el estado nuevamente
      setModuleName('')
      setModuleDescription('')
      setDisableState(true)
      closeModal()

      // Actualizar la lista de módulos en el estado para que refleje el cambio
      setModulesList((prevModules) => [...prevModules, lastModule])
    } catch (error) {
      console.error('Error al agregar el nuevo módulo:', error)
      setDisableState(false)
    }
  }

  return (
    <div className="flex flex-col gap-5 p-5 bg-white ">
      <>
        {/*nodal para agregar un curso */}
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
                    <Dialog.Title
                      as="h3"
                      className="flex items-center justify-between text-lg font-medium leading-6 text-gray-900"
                    >
                      Registro de modulo
                      <div
                        className="p-3 rounded-full cursor-pointer hover:bg-gray-200"
                        onClick={() => {
                          closeModal()
                        }}
                      >
                        <GrClose />
                      </div>
                    </Dialog.Title>

                    <div className="mt-2">
                      <div className="grid gap-3">
                        <div className="grid gap-2">
                          <p>Título del modulo</p>
                          <input
                            type="text"
                            onChange={(e) => setModuleName(e.target.value)}
                            className={reusableStyles.inputFormForCourseMaintenance}
                          />
                        </div>
                        <div className="grid gap-2">
                          <p>Descripción del modulo</p>
                          <textarea
                            type="text"
                            rows={6}
                            onChange={(e) => setModuleDescription(e.target.value)}
                            className={reusableStyles.inputFormForCourseMaintenance}
                          />
                        </div>
                      </div>
                    </div>

                    <div className="flex justify-between mt-4">
                      <button
                        type="submit"
                        disabled={disableState}
                        className={reusableStyles.greenButton}
                        onClick={addNewModuleToLast}
                      >
                        Guardar
                      </button>
                      <button
                        type="submit"
                        disabled={disableState}
                        className={reusableStyles.button}
                        onClick={closeModal}
                      >
                        Cancelar
                      </button>
                    </div>
                  </Dialog.Panel>
                </Transition.Child>
              </div>
            </div>
          </Dialog>
        </Transition>
      </>
      <div>
        <div
          className="flex items-center w-56 gap-3 px-5 py-3 bg-[#4BFF9E] rounded-lg outline-none cursor-pointer"
          onClick={openModal}
        >
          <BsFillPlusCircleFill />
          Agregar nuevo modulo
        </div>
      </div>
      <div className="grid gap-3">
        {fields.map((module, indexModule) => {
          return (
            <Edit_course_module_item
              key={indexModule}
              ModuleIndex={indexModule}
              moduleItem={module}
              removeModule={remove}
              append={append}
              fields={fields}
              update={update}
              setValue={setValue}
              courseDetails={courseDetailForModules}
            />
          )
        })}
      </div>
    </div>
  )
}
