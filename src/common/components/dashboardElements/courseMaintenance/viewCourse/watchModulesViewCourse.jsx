import { useState } from 'react'
import { Disclosure } from '@headlessui/react'
import { BsChevronUp, BsFillPlayFill } from 'react-icons/bs'
import { AiFillCloseCircle, AiOutlineCloudDownload } from 'react-icons/ai'
import { BigPlayButton, Player } from 'video-react'
const courseData = [
  {
    module: 1,
    moduleTitle: 'Fundamentos',
    lesson: [
      {
        lessonId: 1,
        title: 'Introduccion',
        lessonVideoUrl: 'https://player.vimeo.com/video/253989945',
        posterVideo: 'https://images.genius.com/e7bc4bc0ad72f28752e27630299d2442.700x700x1.jpg',
      },
      {
        lessonId: 2,
        title: 'Metodologia',
        lessonVideoUrl: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4',
        posterVideo: 'https://images.genius.com/e7bc4bc0ad72f28752e27630299d2442.700x700x1.jpg',
      },
    ],
  },
  {
    module: 2,
    moduleTitle: 'Teorema del crecimiento',
    lesson: [
      {
        lessonId: 1,
        title: 'Concepto practicos 1',
        lessonVideoUrl: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4',
        posterVideo: 'https://images.genius.com/e7bc4bc0ad72f28752e27630299d2442.700x700x1.jpg',
      },
      {
        lessonId: 2,
        title: 'Concepto practicos 2',
        lessonVideoUrl: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4',
        posterVideo: 'https://images.genius.com/e7bc4bc0ad72f28752e27630299d2442.700x700x1.jpg',
      },
      {
        lessonId: 3,
        title: 'Concepto practicos 3',
        lessonVideoUrl: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerMeltdowns.mp4',
        posterVideo: 'https://images.genius.com/e7bc4bc0ad72f28752e27630299d2442.700x700x1.jpg',
      },
    ],
  },
]
export default function watchModulesViewCourse({ isOpen }) {
  const [isOpenProp, setIsOpenProp] = useState(isOpen)
  const [closeModal, setCloseModal] = useState(true)
  const [videoSelected, setVideoSelected] = useState('')
  const CloseModal = () => {
    setCloseModal(!closeModal)
  }

  return (
    <div
      className={`${isOpen ? 'fixed inset-0' : 'hidden opacity-0'} bg-[#000000f7] py-10 text-white  overflow-y-auto`}
    >
      <div className=" max-w-[70%] w-[2800px] m-auto max-h-[90%] h-[2800px] ">
        <div className="flex justify-end h-[7%]">
          <div>
            <button
              onClick={() => {
                setIsOpenProp(!isOpenProp)
                if (process.browser) {
                  window.location.reload()
                }
              }}
              className="flex items-center gap-2  p-2"
            >
              <p>Minimizar</p>
              <AiFillCloseCircle size={35} />
            </button>
          </div>
        </div>
        <div className=" h-[93%]">
          <div className=" grid grid-cols-3 gap-10 grid-rows-4  h-full">
            <div className="bg-white text-black row-span-6 p-5 rounded-lg overflow-y-auto">
              <div className=" grid gap-3">
                {courseData.map((course) => {
                  return (
                    <Disclosure as="div" key={course.module}>
                      {({ open }) => (
                        <>
                          <Disclosure.Button className="flex w-full justify-between rounded-lg bg-[#FFF409] p-5 text-left text-sm font-medium focus:outline-none  focus-visible:ring-opacity-75">
                            <span>
                              Modulo {course.module}: {course.moduleTitle}
                            </span>
                            <BsChevronUp className={`${open ? 'rotate-180 transform' : ''} h-5 w-5 `} />
                          </Disclosure.Button>
                          <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500 ">
                            {course.lesson.map((less, index) => {
                              return (
                                <div
                                  className={`flex  hover:bg-gray-100 w-full cursor-pointer rounded-lg `}
                                  key={less.lessonId}
                                >
                                  <button
                                    className=" flex w-full"
                                    onClick={() => {
                                      setVideoSelected(less.lessonVideoUrl)
                                      console.log(`el indice seleccionado es ${index + 1}`)
                                    }}
                                  >
                                    <div className=" flex justify-between  p-4 w-full items-center  ">
                                      <div className="flex gap-2 items-center">
                                        <div className="p-2 rounded-full ">
                                          <BsFillPlayFill />
                                        </div>
                                        <p>{less.title}</p>
                                      </div>
                                      <div>
                                        <p>01:20:021</p>
                                      </div>
                                    </div>
                                  </button>

                                  <div className="flex items-center  w-20 justify-center ">
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

            <div className="col-span-2 row-span-3  justify-center">
              <Player width="100%" height="100%" className="rounded-md" fluid={false} src={videoSelected}>
                <BigPlayButton position="center" />
              </Player>
            </div>

            <div className="bg-white  row-span-3 col-start-2 rounded-xl">
              <div className="p-5 h-full overflow-y-auto">
                <div className="">
                  <p className="px-5 py-2 bg-[#FFF409] rounded-lg text-black ">Recursos</p>
                </div>
                <div className="">
                  <ul className="">
                    <li className="py-2 px-5 flex justify-between items-center cursor-pointer hover:bg-stone-100 hover:text-black text-stone-400 rounded-xl">
                      <p>Lectura.pdf</p>
                      <AiOutlineCloudDownload size={25} />
                    </li>
                    <li className="py-2 px-5 flex justify-between items-center cursor-pointer hover:bg-stone-100 hover:text-black text-stone-400 rounded-xl">
                      <p>Lectura.pdf</p>
                      <AiOutlineCloudDownload size={25} />
                    </li>
                    <li className="py-2 px-5 flex justify-between items-center cursor-pointer hover:bg-stone-100 hover:text-black text-stone-400 rounded-xl">
                      <p>Lectura.pdf</p>
                      <AiOutlineCloudDownload size={25} />
                    </li>
                    <li className="py-2 px-5 flex justify-between items-center cursor-pointer hover:bg-stone-100 hover:text-black text-stone-400 rounded-xl">
                      <p>Lectura.pdf</p>
                      <AiOutlineCloudDownload size={25} />
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="bg-white  row-span-3 col-start-3 rounded-xl">
              <div className="p-5 h-full overflow-y-auto">
                <div className="">
                  <p className="px-5 py-2 bg-[#FFF409] rounded-lg text-black ">Preguntas y respuestas</p>
                </div>
                <div className="">
                  <ul className="pt-2">
                    <li className="py-2 px-5 flex gap-5 items-start  text-black  ">
                      <img
                        src="https://images.genius.com/e7bc4bc0ad72f28752e27630299d2442.700x700x1.jpg"
                        className="w-10 h-10 rounded-full"
                        alt=""
                      />
                      <div>
                        <span className="flex items-end gap-3">
                          <h1 className="font-bold text-lg">Freddy Ramirez</h1>
                          <p className="text-[#a9a9a9] text-sm">22/01/2023</p>
                        </span>
                        <p className="font-light">Tengo un par de preguntas respecto al curso y son las siguientes</p>
                      </div>
                    </li>
                    <li className="py-2 px-5 flex gap-5 items-start  text-black  ">
                      <img
                        src="https://images.genius.com/e7bc4bc0ad72f28752e27630299d2442.700x700x1.jpg"
                        className="w-10 h-10 rounded-full"
                        alt=""
                      />
                      <div>
                        <span className="flex items-end gap-3">
                          <h1 className="font-bold text-lg">Freddy Ramirez</h1>
                          <p className="text-[#a9a9a9] text-sm">22/01/2023</p>
                        </span>
                        <p className="font-light">Tengo un par de preguntas respecto al curso y son las siguientes</p>
                      </div>
                    </li>
                    <li className="py-2 px-5 flex gap-5 items-start  text-black  ">
                      <img
                        src="https://images.genius.com/e7bc4bc0ad72f28752e27630299d2442.700x700x1.jpg"
                        className="w-10 h-10 rounded-full"
                        alt=""
                      />
                      <div>
                        <span className="flex items-end gap-3">
                          <h1 className="font-bold text-lg">Freddy Ramirez</h1>
                          <p className="text-[#a9a9a9] text-sm">22/01/2023</p>
                        </span>
                        <p className="font-light">Tengo un par de preguntas respecto al curso y son las siguientes</p>
                      </div>
                    </li>
                    <li className="py-2 px-5 flex gap-5 items-start  text-black  ">
                      <img
                        src="https://images.genius.com/e7bc4bc0ad72f28752e27630299d2442.700x700x1.jpg"
                        className="w-10 h-10 rounded-full"
                        alt=""
                      />
                      <div>
                        <span className="flex items-end gap-3">
                          <h1 className="font-bold text-lg">Freddy Ramirez</h1>
                          <p className="text-[#a9a9a9] text-sm">22/01/2023</p>
                        </span>
                        <p className="font-light">Tengo un par de preguntas respecto al curso y son las siguientes</p>
                      </div>
                    </li>
                    <li className="py-2 px-5 flex gap-5 items-start  text-black  ">
                      <img
                        src="https://images.genius.com/e7bc4bc0ad72f28752e27630299d2442.700x700x1.jpg"
                        className="w-10 h-10 rounded-full"
                        alt=""
                      />
                      <div>
                        <span className="flex items-end gap-3">
                          <h1 className="font-bold text-lg">Freddy Ramirez</h1>
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
    </div>
  )
}
