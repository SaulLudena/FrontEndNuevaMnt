import { Disclosure, Transition } from '@headlessui/react'
import React from 'react'
import { BsChevronUp, BsFillPlusCircleFill } from 'react-icons/bs'
import { VscSymbolStructure } from 'react-icons/vsc'
import { reusableStyles } from '../../../../../../styles/styles'

export default function course_module_item() {
  return (
    <div>
      <Disclosure>
        {({ open }) => (
          <>
            <div className={reusableStyles.courseModuleStyleCard}>
              <div className="flex items-center gap-3">
                <VscSymbolStructure />
                <span>Introduccion</span>
              </div>
              <Disclosure.Button>
                <BsChevronUp className={`${open ? 'rotate-180 transform' : ''} h-5 w-5 `} />
              </Disclosure.Button>
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
                <div className=" flex flex-col gap-2 mt-3 ">
                  <div>
                    <button className="cursor-pointer flex items-center gap-3 px-4 py-2 bg-yellow-400 rounded-lg outline-none">
                      <BsFillPlusCircleFill />
                      Agregar leccion
                    </button>
                  </div>
                  <div className="border-2 border/black bg-gray-100 p-2 rounded-md">
                    <p>Clase 01</p>
                  </div>
                  <div className="border-2 border/black bg-gray-100 p-2 rounded-md">
                    <p>Clase 01</p>
                  </div>
                  <div className="border-2 border/black bg-gray-100 p-2 rounded-md">
                    <p>Clase 01</p>
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
