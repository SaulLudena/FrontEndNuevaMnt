import { Disclosure, Transition } from '@headlessui/react'

import { AiOutlineInfoCircle } from 'react-icons/ai'
import { BsChevronUp } from 'react-icons/bs'
import { reusableStyles } from '../../../../../styles/styles'

export default function Course_extra_info({ register }) {
  return (
    <Disclosure defaultOpen={true}>
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
            <Disclosure.Panel className="px-10 text-sm ">
              <div className="flex flex-col gap-5 p-5 bg-white ">
                <div className="grid gap-3">
                  <p className="font-medium">¿Qué aprenderé?</p>
                  <input
                    type="text"
                    className={reusableStyles.inputFormForCourseMaintenance}
                    {...register('que_aprendere_curso')}
                  />
                </div>
                <div className="grid gap-3">
                  <p className="font-medium">Público objetivo</p>
                  <input
                    type="text"
                    className={reusableStyles.inputFormForCourseMaintenance}
                    {...register('publico_objetivo_curso')}
                  />
                </div>
                <div className="grid gap-3">
                  <p className="font-medium">Duración total del curso</p>
                  <div className="grid grid-cols-2 gap-5">
                    <div className="grid col-span-1 gap-1">
                      <input
                        type="number"
                        className={reusableStyles.inputFormForCourseMaintenance}
                        {...register('duracion_horas_curso')}
                      />
                      <p className="text-gray-600">Horas</p>
                    </div>
                    <div className="grid col-span-1 gap-1">
                      <input
                        type="number"
                        className={reusableStyles.inputFormForCourseMaintenance}
                        {...register('duracion_minutos_curso')}
                      />
                      <p className="text-gray-600">Minutos</p>
                    </div>
                  </div>
                </div>
                <div className="grid gap-3">
                  <p className="font-medium">Materiales Incluidos</p>
                  <input
                    type="text"
                    className={reusableStyles.inputFormForCourseMaintenance}
                    {...register('materiales_incluidos_curso')}
                  />
                </div>
                <div className="grid gap-3">
                  <p className="font-medium">Requisitos/instrucciones</p>
                  <input
                    type="text"
                    className={reusableStyles.inputFormForCourseMaintenance}
                    {...register('duracion_minutos_curso')}
                  />
                </div>
                <div className="grid gap-3">
                  <p className="font-medium">Etiqueta del curso</p>
                  <input
                    type="text"
                    className={reusableStyles.inputFormForCourseMaintenance}
                    {...register('etiquetas_curso')}
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
