import { Disclosure } from '@headlessui/react'
import { useState } from 'react'
import { AiFillCloseCircle } from 'react-icons/ai'
import { BsChevronUp, BsFillPlayFill } from 'react-icons/bs'
import { BigPlayButton, Player } from 'video-react'
import 'video-react/dist/video-react.css'
export default function WatchModules({ isOpen }) {
  const [isOpenProp, setIsOpenProp] = useState(isOpen)
  return (
    <div
      className={`${isOpen ? 'fixed inset-0' : 'hidden opacity-0'} bg-[#000000f7] py-10 text-white  overflow-y-auto`}
    >
      <div className=" max-w-[95%] w-[2800px] m-auto">
        <div className="flex justify-end">
          <button
            onClick={() => {
              setIsOpenProp(isOpenProp)
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
        <div>
          <div className=" grid grid-cols-3 gap-10 h-full">
            <div className="bg-white text-black h-full row-span- p-5 rounded-lg">
              <div className="grid gap-3">
                <Disclosure as="div">
                  {({ open }) => (
                    <>
                      <Disclosure.Button className="flex w-full justify-between rounded-lg bg-[#FFF409] p-5 text-left text-sm font-medium focus:outline-none  focus-visible:ring-opacity-75">
                        <span>Modulo 1</span>
                        <BsChevronUp className={`${open ? 'rotate-180 transform' : ''} h-5 w-5 `} />
                      </Disclosure.Button>
                      <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500 ">
                        <div className=" flex justify-between p-4 items-center cursor-pointer hover:bg-gray-100 ">
                          <div className="flex gap-2 items-center">
                            <div className="p-2 rounded-full ">
                              <BsFillPlayFill />
                            </div>
                            <p>
                              If you're unhappy with your purchase for any reason, email us within 90 days and we'll
                              refund you in full, no questions asked.
                            </p>
                          </div>
                          <div>
                            <p>01:20:021</p>
                          </div>
                        </div>
                        <div className=" flex justify-between p-4 items-center cursor-pointer hover:bg-gray-100 ">
                          <div className="flex gap-2 items-center">
                            <div className="p-2 rounded-full ">
                              <BsFillPlayFill />
                            </div>
                            <p>
                              If you're unhappy with your purchase for any reason, email us within 90 days and we'll
                              refund you in full, no questions asked.
                            </p>
                          </div>
                          <div>
                            <p>01:20:021</p>
                          </div>
                        </div>
                        <div className=" flex justify-between p-4 items-center cursor-pointer hover:bg-gray-100 ">
                          <div className="flex gap-2 items-center">
                            <div className="p-2 rounded-full ">
                              <BsFillPlayFill />
                            </div>
                            <p>
                              If you're unhappy with your purchase for any reason, email us within 90 days and we'll
                              refund you in full, no questions asked.
                            </p>
                          </div>
                          <div>
                            <p>01:20:021</p>
                          </div>
                        </div>
                      </Disclosure.Panel>
                    </>
                  )}
                </Disclosure>
                <Disclosure as="div">
                  {({ open }) => (
                    <>
                      <Disclosure.Button className="flex w-full justify-between rounded-lg bg-[#FFF409] p-5 text-left text-sm font-medium focus:outline-none  focus-visible:ring-opacity-75">
                        <span>Modulo 2</span>
                        <BsChevronUp className={`${open ? 'rotate-180 transform' : ''} h-5 w-5 `} />
                      </Disclosure.Button>
                      <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500 ">
                        <div className=" flex justify-between p-4 items-center cursor-pointer hover:bg-gray-100 ">
                          <div className="flex gap-2 items-center">
                            <div className="p-2 rounded-full ">
                              <BsFillPlayFill />
                            </div>
                            <p>
                              If you're unhappy with your purchase for any reason, email us within 90 days and we'll
                              refund you in full, no questions asked.
                            </p>
                          </div>
                          <div>
                            <p>01:20:021</p>
                          </div>
                        </div>
                        <div className=" flex justify-between p-4 items-center cursor-pointer hover:bg-gray-100 ">
                          <div className="flex gap-2 items-center">
                            <div className="p-2 rounded-full ">
                              <BsFillPlayFill />
                            </div>
                            <p>
                              If you're unhappy with your purchase for any reason, email us within 90 days and we'll
                              refund you in full, no questions asked.
                            </p>
                          </div>
                          <div>
                            <p>01:20:021</p>
                          </div>
                        </div>
                        <div className=" flex justify-between p-4 items-center cursor-pointer hover:bg-gray-100 ">
                          <div className="flex gap-2 items-center">
                            <div className="p-2 rounded-full ">
                              <BsFillPlayFill />
                            </div>
                            <p>
                              If you're unhappy with your purchase for any reason, email us within 90 days and we'll
                              refund you in full, no questions asked.
                            </p>
                          </div>
                          <div>
                            <p>01:20:021</p>
                          </div>
                        </div>
                        <div className=" flex justify-between p-4 items-center cursor-pointer hover:bg-gray-100 ">
                          <div className="flex gap-2 items-center">
                            <div className="p-2 rounded-full ">
                              <BsFillPlayFill />
                            </div>
                            <p>
                              If you're unhappy with your purchase for any reason, email us within 90 days and we'll
                              refund you in full, no questions asked.
                            </p>
                          </div>
                          <div>
                            <p>01:20:021</p>
                          </div>
                        </div>
                      </Disclosure.Panel>
                    </>
                  )}
                </Disclosure>
                <Disclosure as="div">
                  {({ open }) => (
                    <>
                      <Disclosure.Button className="flex w-full justify-between rounded-lg bg-[#FFF409] p-5 text-left text-sm font-medium focus:outline-none  focus-visible:ring-opacity-75">
                        <span>Modulo 3</span>
                        <BsChevronUp className={`${open ? 'rotate-180 transform' : ''} h-5 w-5 `} />
                      </Disclosure.Button>
                      <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500 ">
                        <div className=" flex justify-between p-4 items-center cursor-pointer hover:bg-gray-100 ">
                          <div className="flex gap-2 items-center">
                            <div className="p-2 rounded-full ">
                              <BsFillPlayFill />
                            </div>
                            <p>
                              If you're unhappy with your purchase for any reason, email us within 90 days and we'll
                              refund you in full, no questions asked.
                            </p>
                          </div>
                          <div>
                            <p>01:20:021</p>
                          </div>
                        </div>
                        <div className=" flex justify-between p-4 items-center cursor-pointer hover:bg-gray-100 ">
                          <div className="flex gap-2 items-center">
                            <div className="p-2 rounded-full ">
                              <BsFillPlayFill />
                            </div>
                            <p>
                              If you're unhappy with your purchase for any reason, email us within 90 days and we'll
                              refund you in full, no questions asked.
                            </p>
                          </div>
                          <div>
                            <p>01:20:021</p>
                          </div>
                        </div>
                        <div className=" flex justify-between p-4 items-center cursor-pointer hover:bg-gray-100 ">
                          <div className="flex gap-2 items-center">
                            <div className="p-2 rounded-full ">
                              <BsFillPlayFill />
                            </div>
                            <p>
                              If you're unhappy with your purchase for any reason, email us within 90 days and we'll
                              refund you in full, no questions asked.
                            </p>
                          </div>
                          <div>
                            <p>01:20:021</p>
                          </div>
                        </div>
                        <div className=" flex justify-between p-4 items-center cursor-pointer hover:bg-gray-100 ">
                          <div className="flex gap-2 items-center">
                            <div className="p-2 rounded-full ">
                              <BsFillPlayFill />
                            </div>
                            <p>
                              If you're unhappy with your purchase for any reason, email us within 90 days and we'll
                              refund you in full, no questions asked.
                            </p>
                          </div>
                          <div>
                            <p>01:20:021</p>
                          </div>
                        </div>
                      </Disclosure.Panel>
                    </>
                  )}
                </Disclosure>
              </div>
            </div>

            <div className="col-span-2 bg-gray-600  justify-center ">
              <Player
                width="100%"
                className="rounded-md"
                fluid={true}
                src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4"
              >
                <BigPlayButton position="center" />
              </Player>
            </div>

            <div className="bg-white col-start-2 h-full text-black">
              <div>
                <div>
                  <p>Recursos</p>
                </div>
                <div>
                  <ul>
                    <li>Lectura.pdf</li>
                    <li>Grilla.xcv</li>
                    <li>Lectura_2.pdf</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="bg-white">
              <div>preguntas y comentarios</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
