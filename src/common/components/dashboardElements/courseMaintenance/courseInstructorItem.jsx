import { Dialog, Transition } from '@headlessui/react'
import Link from 'next/link'
import { Fragment, useEffect, useState } from 'react'
import { AiFillEye } from 'react-icons/ai'
import { reusableStyles } from '../../../../styles/styles'
import { BsFillPencilFill, BsFillTrashFill } from 'react-icons/bs'
import axios from 'axios'
import Cookies from 'js-cookie'
import { GrClose } from 'react-icons/gr'
export default function CourseInstructorItem({ registeredCourse }) {
  let [isOpen, setIsOpen] = useState(false)
  let [isOpenEdit, setIsOpenEdit] = useState(false)
  const [apiResult, setApiResult] = useState({})
  const [disabledButton, setDisabledButton] = useState(true)
  const closeModalDelete = () => {
    setDisabledButton(true)
    setIsOpen(false)
  }
  const openModalDelete = () => {
    setDisabledButton(true)
    setIsOpen(true)
  }

  const handleDeleteCourseInput = (e) => {
    if (e.target.value.length > 0 && e.target.value === registeredCourse.tb_usuario.email_usuario) {
      setDisabledButton(false)
    } else {
      setDisabledButton(true)
    }
  }

  const confirmDelete = async () => {
    try {
      const url = `http://localhost:3003/course/deleteCourseById?id_curso=${
        registeredCourse.id_curso
      }&nuevamntToken=${Cookies.get('nuevamenteToken')}`
      const response = await axios.delete(url)
      const response_result = response.data
      setApiResult(response_result)
      if (response_result.status === 200 && response_result.message === 'Curso eliminado correctamente') {
        window.location.reload()
      } else {
        alert('Error al eliminar el curso')
      }
      console.log(response_result)
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <>
      {/*componentizar esto, modal para eliminar */}
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModalDelete}>
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
                <Dialog.Panel className="w-full max-w-md p-6 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl border-2">
                  <Dialog.Title
                    as="h3"
                    className="text-lg font-medium leading-6 text-gray-900 flex justify-between items-center"
                  >
                    <p>
                      ¿Deseas eliminar el curso '
                      {registeredCourse.nombre_curso.length <= 0 ? (
                        <span className="select-none text-gray-400">Sin titulo</span>
                      ) : (
                        registeredCourse.nombre_curso
                      )}
                      '?
                    </p>
                    <div
                      className="p-3 hover:bg-gray-200 rounded-full cursor-pointer"
                      onClick={() => {
                        closeModalDelete()
                      }}
                    >
                      <GrClose className="" />
                    </div>
                  </Dialog.Title>
                  <div className="flex justify-between flex-col ">
                    <div className="my-5 grid gap-2">
                      <p className="text-sm">Digite su correo electronico para confirmar</p>
                      <input
                        type="text"
                        defaultValue=""
                        className={reusableStyles.inputFormForCourseMaintenance}
                        onChange={handleDeleteCourseInput}
                      />
                    </div>
                    <div className="flex justify-between">
                      <button
                        type="button"
                        className={reusableStyles.button}
                        onClick={() => {
                          closeModalDelete()
                        }}
                      >
                        Cancelar
                      </button>

                      <button
                        type="button"
                        disabled={disabledButton}
                        className={disabledButton ? reusableStyles.buttonDisabled : reusableStyles.redButton}
                        onClick={() => {
                          confirmDelete()
                        }}
                      >
                        Eliminar curso
                      </button>
                    </div>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
      <div className="p-5 bg-white rounded-xl">
        <div className="grid items-center gap-10 ">
          <div className="translate-y-3">
            <h1 className="font-bold text-center">
              {registeredCourse.nombre_curso.length <= 0 ? (
                <span className="select-none text-gray-400">Sin titulo</span>
              ) : (
                registeredCourse.nombre_curso
              )}
            </h1>
          </div>
          <div className="flex justify-center">
            <div className="flex gap-5">
              <Link
                href={{
                  pathname: `/dashboard/zonaDeMentores/vistaCurso/${registeredCourse.id_curso}`,
                }}
                className=" p-4 bg-[#4BFFD4] rounded-xl "
              >
                <AiFillEye />
              </Link>

              <Link href="#" className="p-4 bg-yellow-300 rounded-xl">
                <BsFillPencilFill />
              </Link>

              <Link href="#" className="p-4 bg-rose-400 rounded-xl" onClick={openModalDelete}>
                <BsFillTrashFill />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
