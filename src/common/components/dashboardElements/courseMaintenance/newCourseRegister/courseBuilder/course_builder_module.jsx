import { Dialog, Transition } from '@headlessui/react'
import { Fragment } from 'react'
import { useState } from 'react'
import { BsFillPlusCircleFill } from 'react-icons/bs'
import { reusableStyles } from '../../../../../../styles/styles'
import Course_module_item from './course_module_item'

export default function Course_builder_module({ update, register, fields, append, remove, setValue }) {
  //estados para el modal y para el nombre del modulo
  let [isOpen, setIsOpen] = useState(false)
  const [disableState, setDisableState] = useState(false)
  const [moduleName, setModuleName] = useState('')
  const [moduleDescription, setModuleDescription] = useState('')

  const closeModal = () => {
    setIsOpen(false)
    setModuleName('')
    setModuleDescription('')
  }

  const openModal = () => {
    setDisableState(false)
    setIsOpen(true)
    setModuleName('')
    setModuleDescription('')
  }

  //utilizamos el metodo append para agregar al arreglo un nuevo modulo que recibe un nombre y lo registra con nombre jeje
  const createNewModule = () => {
    setIsOpen(false)
    append({ moduleName, moduleDescription, lessons: [] })
    setModuleName('')
    setModuleDescription('')
    setDisableState(true)
  }

  return (
    <div className="flex flex-col gap-5 p-5 bg-white ">
      <>
        {/*componentizar esto */}
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
                      Registro de modulo
                    </Dialog.Title>
                    <div className="mt-2">
                      <div className="grid gap-3">
                        <div className="grid gap-2">
                          <p>Título del modulo</p>
                          <input
                            type="text"
                            value={moduleName}
                            onChange={(e) => setModuleName(e.target.value)}
                            className={reusableStyles.inputFormForCourseMaintenance}
                          />
                        </div>
                        <div>
                          <p>Descripción del modulo</p>
                          <textarea
                            type="text"
                            rows={6}
                            value={moduleDescription}
                            onChange={(e) => setModuleDescription(e.target.value)}
                            className={reusableStyles.inputFormForCourseMaintenance}
                          />
                        </div>
                      </div>
                    </div>

                    <div className="mt-4">
                      <button
                        type="button"
                        disabled={disableState}
                        className={reusableStyles.button}
                        onClick={createNewModule}
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
      <div>
        <div
          className="flex items-center w-56 gap-3 px-5 py-3 bg-yellow-400 rounded-lg outline-none cursor-pointer"
          onClick={openModal}
        >
          <BsFillPlusCircleFill />
          Agregar nuevo modulo
        </div>
      </div>
      <div className="grid gap-3">
        {fields.map((item, index) => {
          return (
            <Course_module_item
              key={item.id}
              register={register}
              item={item}
              ModuleIndex={index}
              removeModule={remove}
              moduleName={item.moduleName}
              append={append}
              fields={fields}
              update={update}
            />
          )
        })}
      </div>
    </div>
  )
}
