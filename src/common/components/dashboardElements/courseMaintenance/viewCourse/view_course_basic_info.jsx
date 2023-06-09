import { Disclosure, Transition } from '@headlessui/react'
import React from 'react'
import { BsChevronUp, BsFillPencilFill } from 'react-icons/bs'
import { reusableStyles } from '../../../../../styles/styles'

export default function View_course_basic_info({ getCourseById }) {
  return (
    <Disclosure defaultOpen={true}>
      {({ open }) => (
        <>
          <Disclosure.Button className={reusableStyles.disclosureItem}>
            <div className="flex items-center gap-2 ">
              <BsFillPencilFill size={15} />
              <span>Informacion del curso</span>
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
                  <p className="font-medium">Titulo del curso</p>
                  <input
                    type="text"
                    className={reusableStyles.inputFormForCourseMaintenanceDisabled}
                    value={getCourseById.nombre_curso}
                    disabled
                  />
                </div>

                <div className="grid gap-3">
                  <p className="font-medium">Slug del curso</p>
                  <input
                    type="text"
                    className={reusableStyles.inputFormForCourseMaintenanceDisabled}
                    value={getCourseById.slug_curso}
                    disabled
                  />
                </div>
                <div className="grid gap-3">
                  <p className="font-medium">Sobre el curso</p>
                  <textarea
                    type="text"
                    className={reusableStyles.inputFormForCourseMaintenanceDisabled}
                    rows={6}
                    value={getCourseById.descripcion_curso}
                    disabled
                  />
                </div>

                <div className="grid gap-3">
                  <p className="font-medium">Categoria del curso</p>

                  <input
                    type="text"
                    className={reusableStyles.inputFormForCourseMaintenanceDisabled}
                    value={
                      getCourseById.tb_categoria_curso ? getCourseById.tb_categoria_curso.nombre_categoria_curso : ''
                    }
                    disabled
                  />
                </div>
                <div className="grid gap-3">
                  <p className="font-medium">Tipo de costo del curso</p>
                  <div className="gap-5 ">
                    {getCourseById.tipo_precio_curso === '0' ? (
                      <div htmlFor="field-wind" className={reusableStyles.inputPriceFree}>
                        <p>Gratis</p>
                      </div>
                    ) : getCourseById.tipo_precio_curso === 'null' ? (
                      <div htmlFor="field-wind" className={reusableStyles.inputFormForCourseMaintenanceDisabled}>
                        <p>Sin establecer</p>
                      </div>
                    ) : (
                      <div className="flex flex-col gap-3">
                        <div htmlFor="field-wind" className={reusableStyles.inputPriceToBuy}>
                          <p>De pago</p>
                        </div>

                        <div>
                          <div className="grid grid-cols-2 gap-5">
                            <div className="grid gap-3 ">
                              <p className="font-medium">Precio regular</p>
                              <div className="flex">
                                <p className="p-3 border-2 border-r-0 rounded-l-lg bg-emerald-300 border-emerald-300">
                                  S/.
                                </p>
                                <input
                                  type="number"
                                  className={reusableStyles.inputFormForCourseMaintenanceDisabled}
                                  placeholder="0"
                                  value={getCourseById.precio_regular_curso}
                                  disabled
                                />
                              </div>
                            </div>
                            <div className="grid gap-3">
                              <p className="font-medium">Precio descuento</p>
                              <div className="flex">
                                <p className="p-3 border-2 border-r-0 rounded-l-lg bg-emerald-300 border-emerald-300">
                                  S/.
                                </p>
                                <input
                                  type="number"
                                  className={reusableStyles.inputFormForCourseMaintenanceDisabled}
                                  placeholder="0"
                                  value={getCourseById.precio_descuento_curso}
                                  disabled
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
                <div className="grid gap-3">
                  <p className="font-medium">Thumbnail del curso</p>
                  <div className="grid grid-cols-2 gap-10">
                    <div className="grid col-span-1 gap-3">
                      <img src={getCourseById.url_imagen_principal_curso} alt="image not found" />
                    </div>
                  </div>
                </div>
              </div>
            </Disclosure.Panel>
          </Transition>
        </>
      )}
    </Disclosure>
  )
}
