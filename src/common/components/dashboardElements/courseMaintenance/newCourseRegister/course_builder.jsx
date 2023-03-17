import { Dialog, Disclosure, Transition } from '@headlessui/react'
import { reusableStyles } from '../../../../../styles/styles'
import { VscSymbolStructure } from 'react-icons/vsc'
import { BsChevronUp, BsFillPlusCircleFill } from 'react-icons/bs'
import { Fragment, useState } from 'react'
import Course_builder_module from './courseBuilder/course_builder_module'

export default function Course_builder({ register }) {
  /*estados */
  const [modulos, setModulos] = useState([])
  const [modulesInfo, setModulesInfo] = useState([])
  const [lecciones, setLecciones] = useState([])
  const [leccionesInfo, setLeccionesInfo] = useState([])
  const [buttondisabled, setButtonDisabled] = useState(false)
  const [isOpen, setIsOpen] = useState(false)

  const removeModule = (index) => {
    console.log('has seleccionado el componenete con id ' + index)
  }
  /*funciones para los modulos*/
  const addNewModule = () => {
    setModulos([...modulos, <Course_builder_module />])
    setButtonDisabled(true)
    setIsOpen(false)
  }

  /*funciones para el modal */
  const openModal = () => {
    setButtonDisabled(false)
    setIsOpen(true)
  }
  const closeModal = () => {
    setIsOpen(false)
  }
  return (
    <Disclosure>
      {({ open }) => (
        <>
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
                          Agregando un nuevo modulo
                        </Dialog.Title>
                        <div className="flex flex-col gap-5 mt-5 bg-white ">
                          <div className="grid gap-3">
                            <p className="font-medium">Nombre del modulo</p>
                            <input
                              type="text"
                              className={reusableStyles.inputFormForCourseMaintenance}
                              {...register('nombre_modulo')}
                            />
                          </div>
                          <div className="grid gap-3">
                            <p className="font-medium">Resumen del modulo</p>
                            <textarea
                              type="text"
                              className={reusableStyles.inputFormForCourseMaintenance}
                              {...register('resumen_modulo')}
                              rows={5}
                            />
                          </div>
                        </div>

                        <div className="flex justify-between mt-10">
                          <div>
                            <button
                              type="button"
                              disabled={buttondisabled}
                              className={reusableStyles.button}
                              onClick={addNewModule}
                            >
                              Agregar tema
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
          <Disclosure.Button className={reusableStyles.disclosureItem}>
            <div className="flex items-center gap-3">
              <VscSymbolStructure />
              <span>Maquetador de cursos</span>
            </div>
            <BsChevronUp className={`${open ? 'rotate-180 transform' : ''} h-5 w-5 `} />
          </Disclosure.Button>
          <Transition
            enter="transition duration-400 ease-in-out"
            enterFrom="transform scale-95 opacity-0"
            enterTo="transform scale-100 opacity-100"
            leave="transition duration-40 ease-in-out"
            leaveFrom="transform scale-100 opacity-100"
            leaveTo="transform scale-95 opacity-0"
          >
            <Disclosure.Panel className="px-10 text-sm ">
              <div className="flex flex-col gap-5 p-5 bg-white ">
                <div className="grid gap-3">
                  {/*Aqui se imprimen los n modulos con sus respectivas lecciones */}
                  {modulos.map((componente, index) => {
                    return <div key={index}>{componente}</div>
                  })}
                </div>
                <div>
                  <button className="flex items-center gap-3 px-5 py-3 bg-yellow-400 rounded-lg" onClick={openModal}>
                    <BsFillPlusCircleFill />
                    Agregar un nuevo modulo
                  </button>
                </div>
              </div>
            </Disclosure.Panel>
          </Transition>
        </>
      )}
    </Disclosure>
  )
}
