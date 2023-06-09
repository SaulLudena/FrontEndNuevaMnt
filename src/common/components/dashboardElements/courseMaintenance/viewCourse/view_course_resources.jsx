import { Disclosure, Transition } from '@headlessui/react'
import React from 'react'
import { reusableStyles } from '../../../../../styles/styles'
import { GrAttachment } from 'react-icons/gr'
import { BsChevronUp } from 'react-icons/bs'

export default function View_course_resources({ getCourseById }) {
  return (
    <Disclosure defaultOpen={true}>
      {({ open }) => (
        <>
          <Disclosure.Button className={reusableStyles.disclosureItem}>
            <div className="flex items-center gap-3">
              <GrAttachment />
              <span>Recursos del curso</span>
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
                <div className="grid gap-2">
                  {getCourseById.tb_recursos &&
                    getCourseById.tb_recursos.map((file, index) => {
                      return (
                        <div
                          key={index}
                          className="flex items-center justify-between gap-3 p-5 text-black rounded-lg bg-gray-50 "
                        >
                          <div className="flex gap-2">
                            <GrAttachment size={20} />
                            <p className="ml-3">
                              {file.nombre_recurso.substr(0, 20)}
                              {file.nombre_recurso.length > 20 ? '...' : ''}
                            </p>
                          </div>
                        </div>
                      )
                    })}
                </div>
              </div>
            </Disclosure.Panel>
          </Transition>
        </>
      )}
    </Disclosure>
  )
}
