import { Dialog, Disclosure, Transition } from '@headlessui/react'
import React, { Fragment, useState } from 'react'
import { BsChevronUp, BsFillTrashFill, BsPencilFill } from 'react-icons/bs'
import { VscSymbolStructure } from 'react-icons/vsc'
import { reusableStyles } from '../../../../../../styles/styles'
import Course_builder_lesson from './course_builder_lesson'

export default function course_module_item({
  update,
  register,
  removeModule,
  ModuleIndex,
  moduleName,
  append,
  fields,
  item,
  setValue,
}) {
  let [isOpen, setIsOpen] = useState(false)
  let [isOpenEdit, setIsOpenEdit] = useState(false)
  const [newModuleName, setNewModuleName] = useState('')
  const [newModuleDescription, setNewModuleDescription] = useState('')
  const confirmDelete = () => {
    setIsOpen(false)
    removeModule(ModuleIndex)
  }
  const confirmEdit = () => {
    setIsOpenEdit(false)
    setValue(`modulos_curso.${ModuleIndex}.moduleName`, newModuleName)
    setValue(`modulos_curso.${ModuleIndex}.moduleDescription`, newModuleDescription)
    /*actualiza el nombre del modulo y su descripcion usando update */
  }

  const closeModal = () => {
    setIsOpen(false)
  }

  const openModal = () => {
    setIsOpen(true)
  }

  const closeModalEdit = () => {
    setIsOpenEdit(false)
  }
  const openModalEdit = () => {
    setIsOpenEdit(true)
  }
  return (
    <div>
      <>
        {/*componentizar esto, modal para eliminar */}
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
                      ¿Deseas eliminar este modulo?
                    </Dialog.Title>
                    <div className="flex justify-between mt-10">
                      <button
                        type="button"
                        className={reusableStyles.button}
                        onClick={() => {
                          closeModal()
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
        {/*componentizar esto, modal para eliminar */}
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
                          <p>Título del modulo</p>
                          <input
                            type="text"
                            className={reusableStyles.inputFormForCourseMaintenance}
                            defaultValue={item.moduleName}
                            onChange={(e) => {
                              setNewModuleName(e.target.value)
                            }}
                          />
                        </div>
                        <div>
                          <p>Descripción del modulo</p>
                          <textarea
                            type="text"
                            rows={6}
                            className={reusableStyles.inputFormForCourseMaintenance}
                            defaultValue={item.moduleDescription}
                            onChange={(e) => {
                              setNewModuleDescription(e.target.value)
                            }}
                          />
                        </div>
                      </div>
                    </div>

                    <div className="flex flex-row-reverse justify-between mt-4">
                      <button
                        type="button"
                        className={reusableStyles.button}
                        onClick={() => {
                          confirmEdit()
                        }}
                      >
                        Editar
                      </button>
                      <button
                        type="button"
                        className={reusableStyles.button}
                        onClick={() => {
                          closeModalEdit()
                        }}
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
      <Disclosure defaultOpen={true}>
        {({ open }) => (
          <>
            <div className={reusableStyles.courseModuleStyleCard}>
              <div className="flex items-center gap-3">
                <VscSymbolStructure />
                <span></span>
                <p>{moduleName}</p>
              </div>
              <div className="flex items-center gap-1 ">
                <div
                  className="p-3 rounded-full cursor-pointer hover:bg-gray-100"
                  onClick={() => {
                    openModalEdit()
                  }}
                >
                  <BsPencilFill />
                </div>
                <div
                  className="p-3 rounded-full cursor-pointer hover:bg-gray-100"
                  onClick={() => {
                    openModal()
                  }}
                >
                  <BsFillTrashFill />
                </div>
                <Disclosure.Button className="p-3 rounded-full hover:bg-gray-100">
                  <BsChevronUp className={`${open ? 'rotate-180 transform' : ''} transition duration-200 `} />
                </Disclosure.Button>
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
              <Disclosure.Panel className="px-5 text-sm ">
                <div className="flex flex-col gap-2 py-5 mt-3 rounded-md shadow-md">
                  <Course_builder_lesson
                    append={append}
                    fields={fields}
                    ModuleIndex={ModuleIndex}
                    register={register}
                    update={update}
                  />
                </div>
              </Disclosure.Panel>
            </Transition>
          </>
        )}
      </Disclosure>
    </div>
  )
}
