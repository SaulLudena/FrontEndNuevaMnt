import { Disclosure } from '@headlessui/react'
import { BsChevronUp, BsFillPlayFill } from 'react-icons/bs'

export default function courseVideoModulesViewCourse({ courseDetail }) {
  return (
    <div className="bg-white p-5 2xl:col-span-2 lg:col-span-2 overflow-y-scroll scroller h-96 rounded-xl">
      <div className=" grid gap-3">
        {courseDetail.tb_modulo &&
          courseDetail.tb_modulo.map((modulo, index) => {
            return (
              <Disclosure as="div" key={modulo.id_modulo}>
                {({ open }) => (
                  <>
                    <Disclosure.Button className="flex w-full justify-between rounded-lg bg-[#FFF409] p-5 text-left text-sm font-medium focus:outline-none  focus-visible:ring-opacity-75">
                      <span>{modulo.nombre_modulo}</span>
                      <BsChevronUp className={`${open ? 'rotate-180 transform' : ''} h-5 w-5 `} />
                    </Disclosure.Button>
                    <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500 ">
                      {courseDetail.tb_modulo[index].tb_leccion.map((leccion, index) => {
                        return (
                          <div
                            className=" flex justify-between p-4 items-center cursor-pointer hover:bg-gray-100"
                            key={leccion.id_leccion}
                          >
                            <div className="flex gap-2 items-center">
                              <div className="p-2 rounded-full ">
                                <BsFillPlayFill />
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
                      })}
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
