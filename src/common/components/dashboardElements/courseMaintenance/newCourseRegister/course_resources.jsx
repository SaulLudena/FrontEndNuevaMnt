import { Disclosure, Transition } from '@headlessui/react'
import React from 'react'
import { BsChevronUp } from 'react-icons/bs'
import { GrAttachment } from 'react-icons/gr'
import { reusableStyles } from '../../../../../styles/styles'

export default function Course_resources() {
  return (
    <Disclosure>
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
            <Disclosure.Panel className=" text-sm px-10">
              <div className=" bg-white p-5 flex flex-col gap-5">
                <input type="file" />
              </div>
            </Disclosure.Panel>
          </Transition>
        </>
      )}
    </Disclosure>
  )
}
