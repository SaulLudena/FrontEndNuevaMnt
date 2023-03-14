import { Disclosure, Transition } from '@headlessui/react'
import React from 'react'
import { reusableStyles } from '../../../../../styles/styles'
import { BsChevronUp, BsFillCameraVideoFill } from 'react-icons/bs'
export default function Course_video_preview({ register }) {
  return (
    <Disclosure>
      {({ open }) => (
        <>
          <Disclosure.Button className={reusableStyles.disclosureItem}>
            <div className="flex items-center gap-3">
              <BsFillCameraVideoFill />
              <span>Video</span>
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
                  <p className="font-medium">Video de introduccion al curso (Vimeo)</p>
                  <input
                    type="text"
                    className={reusableStyles.inputFormForCourseMaintenance}
                    placeholder="Pega una URL de video de vimeo"
                    {...register('url_preview_curso')}
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