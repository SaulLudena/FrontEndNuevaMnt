import { Disclosure, Transition } from '@headlessui/react'
import React from 'react'
import { BsChevronUp } from 'react-icons/bs'
import { AiFillFileAdd } from 'react-icons/ai'
import { GrAttachment } from 'react-icons/gr'
import { reusableStyles } from '../../../../../styles/styles'

export default function Course_resources() {
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
                <div className="relative grid gap-3 border-2 border-gray-200 rounded-lg ">
                  <div className="flex items-center p-5 text-yellow-900 bg-yellow-100 border-2 border-yellow-400 rounded-lg ">
                    <AiFillFileAdd size={20} />
                    <p className="ml-3">Seleccione recursos del curso</p>
                  </div>
                  <input
                    type="file"
                    className="absolute w-full h-full border-2 border-red-600 opacity-0 cursor-pointer"
                    accept="image/png, image/gif, image/jpeg"
                    onChange={(e) => setLesson({ ...lesson, leccion_imagen: e.target.value })}
                  />
                </div>
              </div>
            </Disclosure.Panel>
          </Transition>
        </>
      )}
    </Disclosure>
  )
}
