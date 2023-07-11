import { useState } from 'react'
import { Disclosure } from '@headlessui/react'
import { BsChevronUp, BsFillPlayFill } from 'react-icons/bs'
import { AiFillCloseCircle, AiOutlineCloudDownload } from 'react-icons/ai'
import { BigPlayButton, Player } from 'video-react'

export default function watchModulesViewCourse({ courseDetail }) {
  const [videoSelected, setVideoSelected] = useState('')

  return (
    <div className="z-40 pb-20">
      <div className="">
        <div className="grid grid-cols-5 grid-rows-5 gap-5 ">
          <div className="row-span-5 p-3 bg-white rounded-lg">
            <div className="grid gap-3 ">
              {courseDetail.tb_modulo &&
                courseDetail.tb_modulo.map((modulo, index) => {
                  console.log(modulo)
                  return (
                    <Disclosure as="div" key={modulo.id_modulo}>
                      {({ open }) => (
                        <>
                          <Disclosure.Button className="flex w-full justify-between rounded-lg bg-[#FFF409] p-5 text-left text-sm font-medium focus:outline-none  focus-visible:ring-opacity-75">
                            <span>Modulo {modulo.nombre_modulo}</span>
                            <BsChevronUp className={`${open ? 'rotate-180 transform' : ''} h-5 w-5 `} />
                          </Disclosure.Button>
                          <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500 ">
                            {modulo.tb_leccion.map((leccion, index) => {
                              return (
                                <div
                                  className={`flex  hover:bg-gray-100  cursor-pointer rounded-lg `}
                                  key={leccion.id_leccion}
                                >
                                  <button
                                    className="flex w-full "
                                    onClick={() => {
                                      setVideoSelected(leccion.url_video_leccion)
                                      console.log(`el indice seleccionado es ${index + 1}`)
                                    }}
                                  >
                                    <div className="flex items-center justify-between w-full p-4 ">
                                      <div className="flex items-center gap-2">
                                        <div className="p-2 rounded-full ">
                                          <BsFillPlayFill />
                                        </div>
                                        <p>{leccion.nombre_leccion}</p>
                                      </div>
                                      <div>
                                        <p>01:20:021</p>
                                      </div>
                                    </div>
                                  </button>

                                  <div className="flex items-center justify-center w-20 ">
                                    <input
                                      id="bordered-checkbox-1"
                                      type="checkbox"
                                      value=""
                                      name="bordered-checkbox"
                                      className="w-7 h-7 "
                                    />
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
          <div className="justify-center col-span-4 row-span-3 ">
            <iframe
              src="https://player.vimeo.com/video/253989945?h=fffb00&color=fffb00&title=0"
              className="w-full h-full rounded-md"
              allow="autoplay; fullscreen; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
          <div className="col-span-2 col-start-2 row-span-2 row-start-4 bg-white 3 rounded-xl">
            <div className="p-5 overflow-y-auto ">
              <div className="">
                <p className="px-5 py-2 bg-[#FFF409] rounded-lg text-black ">Recursos</p>
              </div>
              <div className="">
                <ul className="mt-3">
                  {courseDetail.tb_recursos &&
                    courseDetail.tb_recursos.map((recurso, index) => {
                      console.log(recurso)
                      return (
                        <li
                          className="flex items-center justify-between px-5 py-4 cursor-pointer hover:bg-stone-100 hover:text-black text-stone-400 rounded-xl"
                          key={recurso.id_recurso}
                        >
                          <p>{recurso.nombre_recurso}</p>
                          <AiOutlineCloudDownload size={25} />
                        </li>
                      )
                    })}
                </ul>
              </div>
            </div>
          </div>
          <div className="col-span-2 col-start-4 row-span-2 row-start-4 bg-white rounded-xl">
            <div className="p-5 overflow-y-auto ">
              <div className="">
                <p className="px-5 py-2 bg-[#FFF409] rounded-lg text-black ">Preguntas y respuestas</p>
              </div>
              <div className="">
                <ul className="pt-2">
                  <li className="flex items-start gap-5 px-5 py-2 text-black ">
                    <img
                      src="https://images.genius.com/e7bc4bc0ad72f28752e27630299d2442.700x700x1.jpg"
                      className="w-10 h-10 rounded-full"
                      alt=""
                    />
                    <div>
                      <span className="flex items-end gap-3">
                        <h1 className="text-lg font-bold">Freddy Ramirez</h1>
                        <p className="text-[#a9a9a9] text-sm">22/01/2023</p>
                      </span>
                      <p className="font-light">Tengo un par de preguntas respecto al curso y son las siguientes</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-5 px-5 py-2 text-black ">
                    <img
                      src="https://images.genius.com/e7bc4bc0ad72f28752e27630299d2442.700x700x1.jpg"
                      className="w-10 h-10 rounded-full"
                      alt=""
                    />
                    <div>
                      <span className="flex items-end gap-3">
                        <h1 className="text-lg font-bold">Freddy Ramirez</h1>
                        <p className="text-[#a9a9a9] text-sm">22/01/2023</p>
                      </span>
                      <p className="font-light">Tengo un par de preguntas respecto al curso y son las siguientes</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-5 px-5 py-2 text-black ">
                    <img
                      src="https://images.genius.com/e7bc4bc0ad72f28752e27630299d2442.700x700x1.jpg"
                      className="w-10 h-10 rounded-full"
                      alt=""
                    />
                    <div>
                      <span className="flex items-end gap-3">
                        <h1 className="text-lg font-bold">Freddy Ramirez</h1>
                        <p className="text-[#a9a9a9] text-sm">22/01/2023</p>
                      </span>
                      <p className="font-light">Tengo un par de preguntas respecto al curso y son las siguientes</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-5 px-5 py-2 text-black ">
                    <img
                      src="https://images.genius.com/e7bc4bc0ad72f28752e27630299d2442.700x700x1.jpg"
                      className="w-10 h-10 rounded-full"
                      alt=""
                    />
                    <div>
                      <span className="flex items-end gap-3">
                        <h1 className="text-lg font-bold">Freddy Ramirez</h1>
                        <p className="text-[#a9a9a9] text-sm">22/01/2023</p>
                      </span>
                      <p className="font-light">Tengo un par de preguntas respecto al curso y son las siguientes</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-5 px-5 py-2 text-black ">
                    <img
                      src="https://images.genius.com/e7bc4bc0ad72f28752e27630299d2442.700x700x1.jpg"
                      className="w-10 h-10 rounded-full"
                      alt=""
                    />
                    <div>
                      <span className="flex items-end gap-3">
                        <h1 className="text-lg font-bold">Freddy Ramirez</h1>
                        <p className="text-[#a9a9a9] text-sm">22/01/2023</p>
                      </span>
                      <p className="font-light">Tengo un par de preguntas respecto al curso y son las siguientes</p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
