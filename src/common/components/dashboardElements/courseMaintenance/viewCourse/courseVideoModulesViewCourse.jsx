import { Disclosure } from '@headlessui/react'
import { BsChevronUp, BsFillPlayFill } from 'react-icons/bs'
import { AiFillEye, AiFillUnlock } from 'react-icons/ai'
export default function courseVideoModulesViewCourse({ courseDetail }) {
  return (
    <div className="p-5 overflow-y-scroll bg-white 2xl:col-span-2 lg:col-span-2 scroller h-96 rounded-xl">
      <div className="grid gap-3 ">
        {courseDetail.tb_modulo &&
          courseDetail.tb_modulo.map((modulo, indexModule) => {
            return (
              <Disclosure as="div" key={modulo.id_modulo}>
                {({ open }) => (
                  <>
                    <Disclosure.Button className="flex w-full justify-between rounded-lg bg-[#FFF409] p-5 text-left text-sm font-medium focus:outline-none  focus-visible:ring-opacity-75">
                      <span>
                        Modulo {indexModule + 1} : {modulo.nombre_modulo}
                      </span>
                      <BsChevronUp className={`${open ? 'rotate-180 transform' : ''} h-5 w-5 `} />
                    </Disclosure.Button>
                    <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500 ">
                      {courseDetail.tb_modulo[indexModule].tb_leccion.length === 0 ? (
                        <p>Sin lecciones</p>
                      ) : (
                        courseDetail.tb_modulo[indexModule].tb_leccion.map((leccion, index) => {
                          return (
                            <div
                              className="flex items-center justify-between p-4 hover:bg-gray-100"
                              key={leccion.id_leccion}
                            >
                              <div className="flex items-center gap-2">
                                <div className="p-2 rounded-full ">
                                  {leccion.tipo_visualizacion_leccion === 1 ? <AiFillEye /> : <AiFillUnlock />}
                                </div>
                                <p>{leccion.nombre_leccion}</p>
                              </div>
                              <div>
                                <p>
                                  {leccion.duracion_hora_leccion +
                                    ':' +
                                    leccion.duracion_minuto_leccion +
                                    ':' +
                                    leccion.duracion_segundo_leccion}
                                </p>
                              </div>
                            </div>
                          )
                        })
                      )}
                    </Disclosure.Panel>
                  </>
                )}
              </Disclosure>
            )
          })}
      </div>
    </div>
  )
}
