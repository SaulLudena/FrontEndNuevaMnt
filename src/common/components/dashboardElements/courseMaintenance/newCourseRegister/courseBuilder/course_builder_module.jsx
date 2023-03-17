import { Disclosure, Transition } from '@headlessui/react'
import React from 'react'
import { BsChevronUp, BsFillPencilFill, BsTrash } from 'react-icons/bs'
import { MdPlayLesson, MdViewModule } from 'react-icons/md'
import { reusableStyles } from '../../../../../../styles/styles'

export default function Course_builder_module({ titulo, removeModule }) {
  /*una funcion para abrir y cerrar modal */
  const addLesson = () => {}
  const removeLesson = (key) => {
    console.log(key)
  }
  /*una funcion para mandar datos a la api */
  return (
    <div className="">
      <Disclosure>
        {({ open }) => (
          <>
            <Disclosure.Button className={reusableStyles.courseModuleStyleCard}>
              <div className="flex items-center justify-between w-full gap-2">
                <div className="flex items-center gap-2">
                  <MdViewModule />
                  <span>{titulo}</span>
                </div>
                <div className="relative flex gap-3 pr-4">
                  <div className="p-2 hover:bg-red-200">
                    <BsFillPencilFill />
                  </div>
                  <div className="p-2 hover:bg-red-200 " onClick={removeModule}>
                    <BsTrash />
                  </div>
                </div>
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
              <Disclosure.Panel className="text-sm ">
                <div className="px-5 py-2">
                  <div className="flex justify-between py-2 bg-gray-50">
                    <button className="px-4 py-2 bg-yellow-400 rounded-lg">Nueva leccion</button>
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
