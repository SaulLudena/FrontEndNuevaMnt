import { Dialog, Disclosure, Transition } from '@headlessui/react'
import { reusableStyles } from '../../../../../styles/styles'
import { VscSymbolStructure } from 'react-icons/vsc'
import { BsChevronUp, BsFillPlusCircleFill } from 'react-icons/bs'
import { Fragment, useState } from 'react'
import Course_builder_module from './courseBuilder/course_builder_module'
export default function Course_builder({ register }) {
  const [modulos, setModulos] = useState([])
  const [lecciones, setLecciones] = useState([])

  const deteleDiv = (key) => {
    const nuevaLista = modulos.filter((div) => {
      div.key != key
    })
    setModulos(nuevaLista)
  }

  let [isOpen, setIsOpen] = useState(false)

  function addNewModule() {
    console.log('guardando en la lista principal para luego enviar a la bd')
    setModulos((prevLista) => [...prevLista, <Course_builder_module key={Date.now()} titulo={'xd'} />])

    setIsOpen(false)
  }

  function openModal() {
    setIsOpen(true)
  }
  return (
    <Disclosure>
      {({ open }) => (
        <>
          <>
            <Transition appear show={isOpen} as={Fragment}>
              <Dialog as="div" className="relative z-10" onClose={addNewModule}>
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
                  <div className="flex min-h-full items-center justify-center p-4 text-center">
                    <Transition.Child
                      as={Fragment}
                      enter="ease-out duration-300"
                      enterFrom="opacity-0 scale-95"
                      enterTo="opacity-100 scale-100"
                      leave="ease-in duration-200"
                      leaveFrom="opacity-100 scale-100"
                      leaveTo="opacity-0 scale-95"
                    >
                      <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-xl bg-white p-5 text-left align-middle shadow-xl transition-all">
                        <Dialog.Title as="h3" className="text-lg font-medium leading-6 text-gray-900">
                          Agregando un nuevo modulo
                        </Dialog.Title>
                        <div className=" bg-white mt-5 flex flex-col gap-5">
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

                        <div className="mt-10 flex justify-between">
                          <div>
                            <button type="button" className={reusableStyles.button} onClick={addNewModule}>
                              Agregar tema
                            </button>
                          </div>
                          <div>
                            <button type="button" className={reusableStyles.button} onClick={addNewModule}>
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
            <Disclosure.Panel className=" text-sm px-10">
              <div className=" bg-white p-5 flex flex-col gap-5">
                <div className="grid gap-3">
                  {/*Aqui se imprimen los n modulos con sus respectivas lecciones */}
                  {modulos}
                </div>
                <div>
                  <button className="px-5 py-3 bg-yellow-400 rounded-lg flex items-center gap-3" onClick={openModal}>
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
