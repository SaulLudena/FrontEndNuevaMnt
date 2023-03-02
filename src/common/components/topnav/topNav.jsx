import { RiShutDownLine, RiLightbulbLine } from 'react-icons/ri'
import { FiBell, FiUser } from 'react-icons/fi'
import { BiShoppingBag } from 'react-icons/bi'
import { AiOutlineShoppingCart, AiOutlineInfoCircle } from 'react-icons/ai'
import UserInfo from '../userInfo/userInfo'
import cookies from 'js-cookie'
import Link from 'next/link'
import { Menu, Transition } from '@headlessui/react'
import { Fragment, useEffect, useState } from 'react'

export default function topNav() {
  const logout = () => {
    cookies.remove('nuevamenteToken')
    if (process.browser) {
      window.location.reload()
    }
  }

  const [countCart, setCountCart] = useState(0)
  const updateCartCount = () => {
    const existingItem = JSON.parse(localStorage.getItem('selectedItems'))
    !existingItem ? setCountCart(0) : setCountCart(existingItem.length)
  }
  useEffect(() => {
    updateCartCount()
  }, [])

  return (
    <div className="flex items-center justify-between ">
      <div>
        <UserInfo />
      </div>
      <div className="flex items-center gap-2">
        {/*Boton menu para ir al carrito de compras */}
        <Menu className="relative" as="div">
          <Menu.Button className="flex justify-between text-xl text-gray-400 group group-hover:text-gray-700 rounded-3xl">
            <Link href="/shoppingCart/" className="p-4 transition duration-200 group-hover:bg-gray-200 rounded-xl">
              <AiOutlineShoppingCart className="text-gray-700" />
              <div className="absolute text-sm text-white translate-x-4 rounded-full -translate-y-9 ">
                <div className="">
                  <p className="px-[0.3rem] bg-black rounded-full">{countCart}</p>
                </div>
              </div>
            </Link>
          </Menu.Button>
        </Menu>
        {/*Boton menu para ver mis notificaciones */}
        <Menu className="relative" as="div">
          <Menu.Button className="flex justify-between text-xl text-gray-400 group group-hover:text-gray-700 rounded-3xl">
            <div className="p-4 transition duration-200 group-hover:bg-gray-200 rounded-xl">
              <FiBell className="text-gray-700" />
              <div className="absolute translate-x-4 -translate-y-7 ">
                <div className="w-2 h-2 rounded-full bg-rose-600"></div>
              </div>
            </div>
          </Menu.Button>
          <Transition
            as={Fragment}
            enter="transition ease-out duration-100"
            enterFrom="transform opacity-0 scale-95"
            enterTo="transform opacity-100 scale-100"
            leave="transition ease-in duration-75"
            leaveFrom="transform opacity-100 scale-100"
            leaveTo="transform opacity-0 scale-95"
          >
            <Menu.Items className="absolute right-0 z-10 flex flex-col w-56 mt-2 origin-top-right bg-white border-gray-300 divide-y rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
              <Menu.Item className="flex items-center gap-3 p-3 text-gray-600 rounded-t-lg hover:bg-gray-50 hover:text-black">
                {({ active }) => (
                  <a href="#">
                    <p>Mis notificaciones</p>
                  </a>
                )}
              </Menu.Item>
              <Menu.Item className="flex items-center gap-3 p-3 text-gray-600 rounded-t-lg hover:bg-gray-50 hover:text-black">
                {({ active }) => (
                  <div className="flex items-start gap-5 px-5 py-2">
                    <img
                      src="https://images.genius.com/e7bc4bc0ad72f28752e27630299d2442.700x700x1.jpg"
                      className="w-10 h-10 rounded-full"
                      alt=""
                    />
                    <div>
                      <p className="text-sm">Has ganado nuevos luxes...</p>
                    </div>
                  </div>
                )}
              </Menu.Item>
              <Menu.Item className="flex items-center gap-3 p-3 text-gray-600 rounded-t-lg hover:bg-gray-50 hover:text-black">
                {({ active }) => (
                  <div className="flex items-start gap-5 px-5 py-2">
                    <img
                      src="https://images.genius.com/e7bc4bc0ad72f28752e27630299d2442.700x700x1.jpg"
                      className="w-10 h-10 rounded-full"
                      alt=""
                    />
                    <div>
                      <p className="text-sm">Has culminado el curso marketing par...</p>
                    </div>
                  </div>
                )}
              </Menu.Item>
            </Menu.Items>
          </Transition>
        </Menu>
        {/*Boton menu para ver mis Lux's */}
        <Menu className="relative" as="div">
          <Menu.Button className="flex justify-between text-xl text-gray-400 group group-hover:text-gray-700 rounded-3xl">
            <div className="p-4 transition duration-200 group-hover:bg-gray-200 rounded-xl">
              <RiLightbulbLine className="text-gray-700" />
              <div className="absolute translate-x-4 -translate-y-7 ">
                <div className="w-2 h-2 rounded-full bg-amber-400"></div>
              </div>
            </div>
          </Menu.Button>
          <Transition
            as={Fragment}
            enter="transition ease-out duration-100"
            enterFrom="transform opacity-0 scale-95"
            enterTo="transform opacity-100 scale-100"
            leave="transition ease-in duration-75"
            leaveFrom="transform opacity-100 scale-100"
            leaveTo="transform opacity-0 scale-95"
          >
            <Menu.Items className="absolute right-0 z-10 flex flex-col w-56 mt-2 origin-top-right bg-white border-gray-300 divide-y rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
              <Menu.Item className="flex items-center gap-3 p-3 text-gray-600 rounded-t-lg hover:bg-gray-50 hover:text-black">
                {({ active }) => (
                  <a href="#">
                    <p>Mis lux's</p>
                  </a>
                )}
              </Menu.Item>
              <Menu.Item className="flex items-center gap-3 p-3 text-gray-600 rounded-t-lg hover:bg-gray-50 hover:text-black">
                {({ active }) => (
                  <div className="flex items-start gap-5 px-5 py-2">
                    <img
                      src="https://images.genius.com/e7bc4bc0ad72f28752e27630299d2442.700x700x1.jpg"
                      className="w-10 h-10 rounded-full"
                      alt=""
                    />
                    <div>
                      <p className="text-sm">Has ganado nuevos luxes...</p>
                    </div>
                  </div>
                )}
              </Menu.Item>
              <Menu.Item className="flex items-center gap-3 p-3 text-gray-600 rounded-t-lg hover:bg-gray-50 hover:text-black">
                {({ active }) => (
                  <div className="flex items-start gap-5 px-5 py-2">
                    <img
                      src="https://images.genius.com/e7bc4bc0ad72f28752e27630299d2442.700x700x1.jpg"
                      className="w-10 h-10 rounded-full"
                      alt=""
                    />
                    <div>
                      <p className="text-sm">Has culminado el curso marketing par...</p>
                    </div>
                  </div>
                )}
              </Menu.Item>
            </Menu.Items>
          </Transition>
        </Menu>
        {/*Boton menu para ver mis opciones de logout entre otras */}
        <Menu className="relative" as="div">
          <Menu.Button className="flex justify-between text-xl text-gray-400 group group-hover:text-gray-700 rounded-3xl">
            <div className="p-4 transition duration-200 group-hover:bg-gray-200 rounded-xl">
              <FiUser className="text-gray-700" />
            </div>
          </Menu.Button>
          <Transition
            as={Fragment}
            enter="transition ease-out duration-100"
            enterFrom="transform opacity-0 scale-95"
            enterTo="transform opacity-100 scale-100"
            leave="transition ease-in duration-75"
            leaveFrom="transform opacity-100 scale-100"
            leaveTo="transform opacity-0 scale-95"
          >
            <Menu.Items className="absolute right-0 z-10 flex flex-col w-56 mt-2 origin-top-right bg-white border-gray-300 divide-y rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
              <Menu.Item className="flex items-center gap-3 p-3 text-gray-600 rounded-t-lg hover:bg-gray-50 hover:text-black">
                {({ active }) => (
                  <a className={`${active && 'bg-blue-500'} `} href="#">
                    <FiUser />
                    <p>Mi perfil</p>
                  </a>
                )}
              </Menu.Item>
              <Menu.Item className="flex items-center gap-3 p-3 text-gray-600 hover:bg-gray-50 hover:text-black">
                {({ active }) => (
                  <a className={`${active && 'bg-blue-500'} `} href="#">
                    <BiShoppingBag />
                    <p>Historial de compras</p>
                  </a>
                )}
              </Menu.Item>
              <Menu.Item className="flex items-center gap-3 p-3 text-gray-600 hover:bg-gray-50 hover:text-black">
                {({ active }) => (
                  <a className={`${active && 'bg-blue-500'} `} href="#">
                    <AiOutlineInfoCircle />
                    <p>Politicas y privacidad</p>
                  </a>
                )}
              </Menu.Item>
              <Menu.Item
                className="flex items-center gap-3 p-3 text-gray-600 rounded-b-lg cursor-pointer hover:bg-gray-50 hover:text-black"
                onClick={() => {
                  logout()
                }}
              >
                <span>
                  <RiShutDownLine />
                  <p>Cerrar sesion</p>
                </span>
              </Menu.Item>
            </Menu.Items>
          </Transition>
        </Menu>
      </div>
    </div>
  )
}
