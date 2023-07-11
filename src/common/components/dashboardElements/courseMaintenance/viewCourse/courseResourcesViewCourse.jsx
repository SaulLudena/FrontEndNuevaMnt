import { AiFillFolderOpen, AiOutlineCloudDownload } from 'react-icons/ai'
import { Dialog, Transition } from '@headlessui/react'
import { Fragment, useState } from 'react'
import { GrAttachment, GrClose } from 'react-icons/gr'
import { reusableStyles } from '../../../../../styles/styles'

export default function CourseResourcesViewCourse({ courseDetail }) {
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
                  <Dialog.Title
                    as="h3"
                    className="flex items-center justify-between text-lg font-medium leading-6 text-gray-900"
                  >
                    Descarga los recursos
                    <div
                      className="p-3 rounded-full cursor-pointer hover:bg-gray-200"
                      onClick={() => {
                        closeModal()
                      }}
                    >
                      <GrClose />
                    </div>
                  </Dialog.Title>

                  <div className="mt-2">
                    <div className="overflow-x-auto h-96">
                      <div className="grid gap-2">
                        {courseDetail.tb_recursos &&
                          courseDetail.tb_recursos.map((recurso, indexRecurso) => {
                            return (
                              <div
                                className="flex items-center justify-between gap-3 px-5 py-3 text-black rounded-lg bg-gray-50"
                                key={recurso.id_recurso}
                              >
                                <div className="flex gap-2">
                                  <GrAttachment size={20} />
                                  <p className="ml-3">{recurso.nombre_recurso}</p>
                                </div>
                                <button type="button" className="p-3 rounded-full cursor-pointer hover:bg-gray-200">
                                  <AiOutlineCloudDownload size={20} />
                                </button>
                              </div>
                            )
                          })}
                      </div>
                    </div>
                  </div>

                  <div className="flex justify-between mt-4">
                    <button className={reusableStyles.button} onClick={closeModal}>
                      Cancelar
                    </button>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
      <div
        className="h-full p-5 transition duration-200 bg-white cursor-pointer rounded-xl hover:shadow-xl"
        onClick={openModal}
      >
        <div className="flex flex-col justify-between h-full gap-7">
          <div className="flex justify-between ">
            <p className="text-xl font-bold">Recursos del curso</p>
            <div>
              <div className="flex items-center justify-center w-10 h-10 bg-yellow-400 rounded-full ">
                <AiFillFolderOpen className="text-black" />
              </div>
            </div>
          </div>
          <div>
            <span className="flex items-end">
              <h1 className="mr-2 text-5xl font-bold">5</h1> <p>recursos en total</p>
            </span>
          </div>
        </div>
      </div>
    </>
  )
}
