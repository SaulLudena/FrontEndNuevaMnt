import { Disclosure, Transition } from '@headlessui/react'
import React from 'react'
import { BsChevronUp, BsFillPencilFill, BsFillTrashFill, BsPencilFill, BsTrash } from 'react-icons/bs'
import { VscSymbolStructure } from 'react-icons/vsc'
import { MdPlayLesson } from 'react-icons/md'
import { reusableStyles } from '../../../../../styles/styles'
import { AiFillEye } from 'react-icons/ai'
export default function View_course_course_modules_lessons({ getCourseById }) {
  return (
    <Disclosure defaultOpen={true}>
      {({ open }) => (
        <>
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
                  <p className="font-medium">Lista de modulos y lecciones</p>
                  <div className="grid gap-3">
                    {getCourseById.tb_modulo &&
                      getCourseById.tb_modulo.map((modulo, index) => {
                        return (
                          <Disclosure defaultOpen={true} key={modulo.id_modulo}>
                            {({ open }) => (
                              <>
                                <div className={reusableStyles.courseModuleStyleCard}>
                                  <div className="flex items-center gap-3">
                                    <VscSymbolStructure />
                                    <span></span>
                                    <p>{modulo.nombre_modulo}</p>
                                  </div>
                                  <div className="flex items-center gap-1 ">
                                    <div className="p-3 rounded-full cursor-pointer hover:bg-gray-100">
                                      <AiFillEye />
                                    </div>
                                    <Disclosure.Button className="p-3 rounded-full hover:bg-gray-100">
                                      <BsChevronUp
                                        className={`${open ? 'rotate-180 transform' : ''} transition duration-200 `}
                                      />
                                    </Disclosure.Button>
                                  </div>
                                </div>

                                {/*Recorrido de lecciones*/}
                                {modulo.tb_leccion.map((leccion, index) => {
                                  return (
                                    <Transition
                                      enter="transition duration-400 ease-in-out"
                                      enterFrom="transform scale-95 opacity-0"
                                      enterTo="transform scale-100 opacity-100"
                                      leave="transition duration-40 ease-in-out"
                                      leaveFrom="transform scale-100 opacity-100"
                                      leaveTo="transform scale-95 opacity-0"
                                      key={leccion.id_leccion}
                                    >
                                      <Disclosure.Panel className="px-5 text-sm ">
                                        <div className="flex flex-col gap-2 mt-3 ">
                                          <div className="flex justify-between p-3 rounded-lg bg-gray-50 hover:bg-gray-100">
                                            <div className="flex items-center gap-3">
                                              <MdPlayLesson />
                                              <p className="">{leccion.nombre_leccion}</p>
                                            </div>
                                            <div className="flex gap-1 ">
                                              <div className="p-3 rounded-full cursor-pointer hover:bg-gray-300">
                                                <AiFillEye />
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                      </Disclosure.Panel>
                                    </Transition>
                                  )
                                })}
                              </>
                            )}
                          </Disclosure>
                        )
                      })}
                  </div>
                </div>
              </div>
            </Disclosure.Panel>
          </Transition>
        </>
      )}
    </Disclosure>
  )
}
