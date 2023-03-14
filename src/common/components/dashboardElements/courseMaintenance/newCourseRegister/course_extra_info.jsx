import { Disclosure, Transition } from '@headlessui/react'

import { AiOutlineInfoCircle } from 'react-icons/ai'
import { BsChevronUp } from 'react-icons/bs'
import { reusableStyles } from '../../../../../styles/styles'

export default function Course_extra_info() {
  return (
    <Disclosure>
      {({ open }) => (
        <>
          <Disclosure.Button className={reusableStyles.disclosureItem}>
            <div className="flex items-center gap-3">
              <AiOutlineInfoCircle />
              <span>Datos adicionales</span>
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
                  <p className="font-medium">¿Qué aprenderé?</p>
                  <input type="text" className={reusableStyles.inputFormForCourseMaintenance} />
                </div>
                <div className="grid gap-3">
                  <p className="font-medium">Público objetivo</p>
                  <input type="text" className={reusableStyles.inputFormForCourseMaintenance} />
                </div>
                <div className="grid gap-3">
                  <p className="font-medium">Duración total del curso</p>
                  <div className="grid grid-cols-2 gap-5">
                    <div className="col-span-1 grid gap-1">
                      <input type="number" className={reusableStyles.inputFormForCourseMaintenance} />
                      <p className="text-gray-600">Horas</p>
                    </div>
                    <div className="col-span-1 grid gap-1">
                      <input type="number" className={reusableStyles.inputFormForCourseMaintenance} />
                      <p className="text-gray-600">Minutos</p>
                    </div>
                  </div>
                </div>
                <div className="grid gap-3">
                  <p className="font-medium">Materiales Incluidos</p>
                  <input type="text" className={reusableStyles.inputFormForCourseMaintenance} />
                </div>
                <div className="grid gap-3">
                  <p className="font-medium">Requisitos/instrucciones</p>
                  <input type="text" className={reusableStyles.inputFormForCourseMaintenance} />
                </div>
                <div className="grid gap-3">
                  <p className="font-medium">Etiqueta del curso</p>
                  <input type="text" className={reusableStyles.inputFormForCourseMaintenance} />
                </div>
              </div>
            </Disclosure.Panel>
          </Transition>
        </>
      )}
    </Disclosure>
  )
}
