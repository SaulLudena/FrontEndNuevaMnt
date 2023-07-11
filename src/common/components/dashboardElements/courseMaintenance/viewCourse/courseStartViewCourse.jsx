import Reacts, { useState } from 'react'
import Logo from '../../../reusable/logo'

import Image from 'next/image'
import WatchModules from './watchModulesViewCourse'
import { Dialog, Transition } from '@headlessui/react'
import { Fragment } from 'react'
import { GrClose } from 'react-icons/gr'
import { reusableStyles } from '../../../../../styles/styles'
import { AiFillCloseCircle } from 'react-icons/ai'

export default function courseStartViewCourse({ courseDetail }) {
  let [isOpen, setIsOpen] = useState(false)
  const closeModal = () => {
    setIsOpen(false)
  }

  const openModal = () => {
    setIsOpen(true)
  }
  return (
    <>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10 " onClose={openModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-[99%]" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto ">
            <div className="flex items-center justify-center h-[100%]  p-2 text-center ">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full h-full p-6 text-left align-middle transition-all transform shadow-xl rounded-2xl">
                  <Dialog.Title
                    as="h3"
                    className="flex items-center justify-between text-lg font-medium leading-6 text-white"
                  >
                    <div></div>
                    <div
                      className="flex items-center h-full gap-3 p-3 rounded-full cursor-pointer "
                      onClick={() => {
                        closeModal()
                      }}
                    >
                      <p> Minimizar</p>
                      <AiFillCloseCircle />
                    </div>
                  </Dialog.Title>

                  <div className="z-40 mt-2">
                    <WatchModules courseDetail={courseDetail} />
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
      <div className=" 2xl:col-span-2 lg:col-span-2 h-96">
        <div className="rounded-xl border-2 flex   h-full bg-gradient-to-t from-[#FFF409] via-stone-900 to-black opacity-90">
          <div className="flex flex-col items-center justify-center w-full gap-5 ">
            <div>
              <Logo />
            </div>

            <p className="text-xl font-bold ">
              <span className="text-[#FFF409]"> Marketing</span> <span className="text-white">para networkers</span>
            </p>
            <div>
              <button
                onClick={() => {
                  openModal()
                }}
                className="p-5 bg-[#FFF409] rounded-xl text-center cursor-pointer"
              >
                Empezar curso
              </button>
            </div>
          </div>
        </div>
      </div>
      {/*

	  */}
    </>
  )
}
