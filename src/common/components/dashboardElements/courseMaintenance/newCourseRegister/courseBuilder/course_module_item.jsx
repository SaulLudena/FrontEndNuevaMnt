import { Disclosure, Transition } from '@headlessui/react'
import React from 'react'
import { BsChevronUp, BsFillTrashFill, BsPencilFill } from 'react-icons/bs'
import { VscSymbolStructure } from 'react-icons/vsc'
import { reusableStyles } from '../../../../../../styles/styles'

import Course_builder_lesson from './course_builder_lesson'
export default function course_module_item({ removeModule, index, moduleName }) {
  return (
    <div>
      <Disclosure>
        {({ open }) => (
          <>
            <div className={reusableStyles.courseModuleStyleCard}>
              <div className="flex items-center gap-3">
                <VscSymbolStructure />
                <span></span>
                <p>{moduleName}</p>
              </div>
              <div className="flex items-center gap-1 ">
                <div className="p-3 rounded-full cursor-pointer hover:bg-gray-100">
                  <BsPencilFill />
                </div>
                <div
                  className="p-3 rounded-full cursor-pointer hover:bg-gray-100"
                  onClick={() => {
                    removeModule(index)
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
                <div className="flex flex-col gap-2 mt-3 ">
                  <Course_builder_lesson />
                </div>
              </Disclosure.Panel>
            </Transition>
          </>
        )}
      </Disclosure>
    </div>
  )
}
