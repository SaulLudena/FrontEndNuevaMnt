import { Disclosure, Tab, Transition } from '@headlessui/react'

import { reusableStyles } from '../../../../../styles/styles'
import { BsChevronUp, BsFillPencilFill, BsFillCameraVideoFill, BsTrash, BsFillPlusCircleFill } from 'react-icons/bs'
import { VscSymbolStructure } from 'react-icons/vsc'
import { GrAttachment } from 'react-icons/gr'
import { AiOutlineInfoCircle, AiFillCheckCircle } from 'react-icons/ai'
import { MdViewModule, MdPlayLesson } from 'react-icons/md'

export default function TabNav() {
  return (
    <div className="">
      <div className="grid grid-cols-12 gap-10">
        <form className="col-span-8 flex flex-col gap-5">
          <div>
            <div className=" h-auto">
              <button className="px-10 py-4 flex items-center gap-3 justify-center rounded-lg bg-[#FFF409]">
                <AiFillCheckCircle /> Publicar curso
              </button>
            </div>
          </div>
          <div className="grid gap-3">
            <Disclosure>
              {({ open }) => (
                <>
                  <Disclosure.Button className={reusableStyles.disclosureItem}>
                    <div className="flex items-center gap-2">
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
                    <Disclosure.Panel className=" text-sm px-10">
                      <div className=" bg-white p-5 flex flex-col gap-5">
                        <div className="grid gap-3">
                          <p className="font-medium">Titulo del curso</p>
                          <input type="text" className={reusableStyles.inputFormForCourseMaintenance} />
                        </div>
                        <div className="grid gap-3">
                          <p className="font-medium">Slug del curso</p>
                          <input type="text" className={reusableStyles.inputFormForCourseMaintenance} />
                        </div>
                        <div className="grid gap-3">
                          <p className="font-medium">Sobre el curso</p>
                          <textarea type="text" className={reusableStyles.inputFormForCourseMaintenance} rows={6} />
                        </div>
                        <div className="grid gap-3">
                          <p className="font-medium">Titulo del curso</p>
                          <input type="text" className={reusableStyles.inputFormForCourseMaintenance} />
                        </div>
                        <div className="grid gap-3">
                          <p className="font-medium">Selecciona una categoria</p>
                          <select className={reusableStyles.inputFormForCourseMaintenance}>
                            <option>Negocios</option>
                            <option>Tecnologia</option>
                            <option>Emprendimiento</option>
                          </select>
                        </div>
                        <div className="grid gap-3">
                          <p className="font-medium">Precio del curso</p>
                          <div className="flex gap-5">
                            <div>
                              <div class="flex items-center  ">
                                <input
                                  id="default-radio-1"
                                  type="radio"
                                  value=""
                                  name="default-radio"
                                  className="w-4 h-4 text-blue-600 border-2 border-black  bg-red-300 "
                                />
                                <label
                                  for="default-radio-1"
                                  class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                                >
                                  Gratis
                                </label>
                              </div>
                            </div>
                            <div>
                              <div class="flex items-center">
                                <input
                                  checked
                                  id="default-radio-2"
                                  type="radio"
                                  value=""
                                  name="default-radio"
                                  class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                                />
                                <label
                                  for="default-radio-2"
                                  className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                                >
                                  Pagado
                                </label>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="grid gap-3">
                          <p className="font-medium">Thumbnail del curso</p>
                          <div className="grid grid-cols-2 gap-10">
                            <div className="col-span-1">
                              <input type="file" className={reusableStyles.inputFormForCourseMaintenance} />
                            </div>
                            <div className="col-span-1">
                              <p className="font-medium ">Pro tip:</p>
                              <ul className="list-disc rid gap-4 text-gray-700">
                                <li>El tamaño de la imagen debe ser 700x430 pixeles</li>
                                <li>Debes seleccionar una imagen</li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </Disclosure.Panel>
                  </Transition>
                </>
              )}
            </Disclosure>
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
                          />
                        </div>
                      </div>
                    </Disclosure.Panel>
                  </Transition>
                </>
              )}
            </Disclosure>
            <Disclosure>
              {({ open }) => (
                <>
                  <Disclosure.Button className={reusableStyles.disclosureItem}>
                    <div className="flex items-center gap-3">
                      <VscSymbolStructure />
                      <span>Maquetador de cursos</span>
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
                          {/*Aqui se imprimen los n modulos con sus respectivas lecciones */}
                          <div className="">
                            <Disclosure>
                              {({ open }) => (
                                <>
                                  <Disclosure.Button className={reusableStyles.courseModuleStyleCard}>
                                    <div className="flex justify-between items-center gap-2 w-full">
                                      <div className="flex items-center gap-2">
                                        <MdViewModule />
                                        <span>Introduccion</span>
                                      </div>
                                      <div className="flex gap-3 pr-4 ">
                                        <div className=" p-1 hover:bg-red-200">
                                          <BsFillPencilFill />
                                        </div>
                                        <div className="p-1 hover:bg-red-200">
                                          <BsTrash />
                                        </div>
                                      </div>
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
                                    <Disclosure.Panel className=" text-sm">
                                      <div className="px-5 py-2">
                                        <div>
                                          <div className="grid gap-2">
                                            {/*esto es una leccion */}
                                            <div className="p-3 bg-gray-50 flex justify-between">
                                              <div className="flex items-center gap-3">
                                                <MdPlayLesson />
                                                <p className="">Leccion 1: Video introductorio</p>
                                              </div>
                                              <div className="flex gap-3 ">
                                                <div className=" p-1 hover:bg-red-200">
                                                  <BsFillPencilFill />
                                                </div>
                                                <div className="p-1 hover:bg-red-200">
                                                  <BsTrash />
                                                </div>
                                              </div>
                                            </div>
                                            {/*esto es una leccion */}
                                            <div className="p-3 bg-gray-50 flex justify-between">
                                              <div className="flex items-center gap-3">
                                                <MdPlayLesson />
                                                <p className="">Leccion 1: Video introductorio</p>
                                              </div>
                                              <div className="flex gap-3  ">
                                                <div className=" p-1 hover:bg-red-200">
                                                  <BsFillPencilFill />
                                                </div>
                                                <div className="p-1 hover:bg-red-200">
                                                  <BsTrash />
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </Disclosure.Panel>
                                  </Transition>
                                </>
                              )}
                            </Disclosure>
                          </div>
                          <div className="">
                            <Disclosure>
                              {({ open }) => (
                                <>
                                  <Disclosure.Button className={reusableStyles.courseModuleStyleCard}>
                                    <div className="flex justify-between items-center gap-2 w-full">
                                      <div className="flex items-center gap-2">
                                        <MdViewModule />
                                        <span>Introduccion</span>
                                      </div>
                                      <div className="flex gap-3 pr-4 ">
                                        <div className=" p-1 hover:bg-red-200">
                                          <BsFillPencilFill />
                                        </div>
                                        <div className="p-1 hover:bg-red-200">
                                          <BsTrash />
                                        </div>
                                      </div>
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
                                    <Disclosure.Panel className=" text-sm">
                                      <div className="px-5 py-2">
                                        <div>
                                          <div className="grid gap-2">
                                            {/*esto es una leccion */}
                                            <div className="p-3 bg-gray-50 flex justify-between">
                                              <div className="flex items-center gap-3">
                                                <MdPlayLesson />
                                                <p className="">Leccion 1: Video introductorio</p>
                                              </div>
                                              <div className="flex gap-3 ">
                                                <div className=" p-1 hover:bg-red-200">
                                                  <BsFillPencilFill />
                                                </div>
                                                <div className="p-1 hover:bg-red-200">
                                                  <BsTrash />
                                                </div>
                                              </div>
                                            </div>
                                            {/*esto es una leccion */}
                                            <div className="p-3 bg-gray-50 flex justify-between">
                                              <div className="flex items-center gap-3">
                                                <MdPlayLesson />
                                                <p className="">Leccion 1: Video introductorio</p>
                                              </div>
                                              <div className="flex gap-3  ">
                                                <div className=" p-1 hover:bg-red-200">
                                                  <BsFillPencilFill />
                                                </div>
                                                <div className="p-1 hover:bg-red-200">
                                                  <BsTrash />
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </Disclosure.Panel>
                                  </Transition>
                                </>
                              )}
                            </Disclosure>
                          </div>
                          <div className="">
                            <Disclosure>
                              {({ open }) => (
                                <>
                                  <Disclosure.Button className={reusableStyles.courseModuleStyleCard}>
                                    <div className="flex justify-between items-center gap-2 w-full">
                                      <div className="flex items-center gap-2">
                                        <MdViewModule />
                                        <span>Introduccion</span>
                                      </div>
                                      <div className="flex gap-3 pr-4 ">
                                        <div className=" p-1 hover:bg-red-200">
                                          <BsFillPencilFill />
                                        </div>
                                        <div className="p-1 hover:bg-red-200">
                                          <BsTrash />
                                        </div>
                                      </div>
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
                                    <Disclosure.Panel className=" text-sm">
                                      <div className="px-5 py-2">
                                        <div>
                                          <div className="grid gap-2">
                                            {/*esto es una leccion */}
                                            <div className="p-3 bg-gray-50 flex justify-between">
                                              <div className="flex items-center gap-3">
                                                <MdPlayLesson />
                                                <p className="">Leccion 1: Video introductorio</p>
                                              </div>
                                              <div className="flex gap-3 ">
                                                <div className=" p-1 hover:bg-red-200">
                                                  <BsFillPencilFill />
                                                </div>
                                                <div className="p-1 hover:bg-red-200">
                                                  <BsTrash />
                                                </div>
                                              </div>
                                            </div>
                                            {/*esto es una leccion */}
                                            <div className="p-3 bg-gray-50 flex justify-between">
                                              <div className="flex items-center gap-3">
                                                <MdPlayLesson />
                                                <p className="">Leccion 1: Video introductorio</p>
                                              </div>
                                              <div className="flex gap-3  ">
                                                <div className=" p-1 hover:bg-red-200">
                                                  <BsFillPencilFill />
                                                </div>
                                                <div className="p-1 hover:bg-red-200">
                                                  <BsTrash />
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </Disclosure.Panel>
                                  </Transition>
                                </>
                              )}
                            </Disclosure>
                          </div>
                        </div>
                        <div>
                          <button className="px-5 py-3 bg-yellow-400 rounded-lg flex items-center gap-3">
                            <BsFillPlusCircleFill />
                            Agregar un nuevo modulo
                          </button>
                        </div>
                      </div>
                    </Disclosure.Panel>
                  </Transition>
                </>
              )}
            </Disclosure>
            <Disclosure>
              {({ open }) => (
                <>
                  <Disclosure.Button className={reusableStyles.disclosureItem}>
                    {' '}
                    <span>Google Meet</span>
                    <BsChevronUp className={`${open ? 'rotate-180 transform' : ''} h-5 w-5 `} />
                  </Disclosure.Button>
                  <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500"></Disclosure.Panel>
                </>
              )}
            </Disclosure>
            <Disclosure>
              {({ open }) => (
                <>
                  <Disclosure.Button className={reusableStyles.disclosureItem}>
                    <span>Zoom meeting</span>
                    <BsChevronUp className={`${open ? 'rotate-180 transform' : ''} h-5 w-5 `} />
                  </Disclosure.Button>
                  <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500">
                    If you're unhappy with your purchase for any reason, email us within 90 days and we'll refund you in
                    full, no questions asked.
                  </Disclosure.Panel>
                </>
              )}
            </Disclosure>
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
          </div>
        </form>
        <div className="col-span-4">
          <p className="font-medium text-2xl"> Consejos para la subida de cursos</p>
          <div>
            <ul className="list-disc p-5 grid gap-4 text-gray-700">
              <li>Set the Course Price option or make it free.</li>
              <li>Standard size for the course thumbnail is 700x430.</li>
              <li>Video section controls the course overview video.</li>
              <li>Course Builder is where you create & organize a course.</li>
              <li>Add Topics in the Course Builder section to create lessons, quizzes, and assignments.</li>
              <li>Prerequisites refers to the fundamental courses to complete before taking this particular course.</li>
              <li>Information from the Additional Data section shows up on the course single page.s</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
