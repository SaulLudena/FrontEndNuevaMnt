import { RiShutDownLine, RiLightbulbLine } from 'react-icons/ri'
import { FiBell, FiUser } from 'react-icons/fi'
import { BiShoppingBag } from 'react-icons/bi'
import { AiOutlineShoppingCart, AiOutlineInfoCircle } from 'react-icons/ai'
import UserInfo from '../userInfo/userInfo'
import cookies from 'js-cookie'
import Link from 'next/link'
import { Menu, Transition } from '@headlessui/react'
import { Fragment } from 'react'
const logout = () => {
  cookies.remove('nuevamenteToken')
  if (process.browser) {
    window.location.reload()
  }
}

export default function topNav() {
  return (
    <div className="flex items-center justify-between ">
      <div>
        <UserInfo />
      </div>
      <div className="flex gap-2 items-center">
        {/*Boton menu para ir al carrito de compras */}
        <Menu className="relative" as="div">
          <Menu.Button className=" group group-hover:text-gray-700 flex justify-between text-xl rounded-3xl text-gray-400">
            <Link href="/shoppingCart/" className="transition duration-200  group-hover:bg-gray-200 p-4 rounded-xl">
              <AiOutlineShoppingCart className="text-gray-700" />
            </Link>
          </Menu.Button>
        </Menu>
        {/*Boton menu para ver mis notificaciones */}
        <Menu className="relative" as="div">
          <Menu.Button className=" group group-hover:text-gray-700 flex justify-between text-xl rounded-3xl text-gray-400">
            <div className="transition duration-200  group-hover:bg-gray-200 p-4 rounded-xl">
              <FiBell className="text-gray-700" />
              <div className="absolute translate-x-4 -translate-y-7 ">
                <div className=" w-2 h-2 bg-teal-500 rounded-full"></div>
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
            <Menu.Items className="mt-2 flex flex-col absolute z-10  border-gray-300 right-0  w-56 origin-top-right divide-y  rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
              <Menu.Item className=" p-3 hover:bg-gray-50 hover:text-black text-gray-600 rounded-t-lg flex items-center gap-3">
                {({ active }) => (
                  <a href="#">
                    <p>Mis notificaciones</p>
                  </a>
                )}
              </Menu.Item>
              <Menu.Item className=" p-3 hover:bg-gray-50 hover:text-black text-gray-600 rounded-t-lg flex items-center gap-3">
                {({ active }) => (
                  <div className="py-2 px-5 flex gap-5 items-start">
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
              <Menu.Item className=" p-3 hover:bg-gray-50 hover:text-black text-gray-600 rounded-t-lg flex items-center gap-3">
                {({ active }) => (
                  <div className="py-2 px-5 flex gap-5 items-start">
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
          <Menu.Button className=" group group-hover:text-gray-700 flex justify-between text-xl rounded-3xl text-gray-400">
            <div className="transition duration-200  group-hover:bg-gray-200 p-4 rounded-xl">
              <RiLightbulbLine className="text-gray-700" />
              <div className="absolute translate-x-4 -translate-y-7 ">
                <div className=" w-2 h-2 bg-amber-400 rounded-full"></div>
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
            <Menu.Items className="mt-2 flex flex-col absolute z-10  border-gray-300 right-0  w-56 origin-top-right divide-y  rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
              <Menu.Item className=" p-3 hover:bg-gray-50 hover:text-black text-gray-600 rounded-t-lg flex items-center gap-3">
                {({ active }) => (
                  <a href="#">
                    <p>Mis lux's</p>
                  </a>
                )}
              </Menu.Item>
              <Menu.Item className=" p-3 hover:bg-gray-50 hover:text-black text-gray-600 rounded-t-lg flex items-center gap-3">
                {({ active }) => (
                  <div className="py-2 px-5 flex gap-5 items-start">
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
              <Menu.Item className=" p-3 hover:bg-gray-50 hover:text-black text-gray-600 rounded-t-lg flex items-center gap-3">
                {({ active }) => (
                  <div className="py-2 px-5 flex gap-5 items-start">
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
          <Menu.Button className=" group group-hover:text-gray-700 flex justify-between text-xl rounded-3xl text-gray-400">
            <div className="transition duration-200  group-hover:bg-gray-200 p-4 rounded-xl">
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
            <Menu.Items className="mt-2 flex flex-col absolute z-10  border-gray-300 right-0  w-56 origin-top-right divide-y  rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
              <Menu.Item className=" p-3 hover:bg-gray-50 hover:text-black text-gray-600 rounded-t-lg flex items-center gap-3">
                {({ active }) => (
                  <a className={`${active && 'bg-blue-500'} `} href="#">
                    <FiUser />
                    <p>Mi perfil</p>
                  </a>
                )}
              </Menu.Item>
              <Menu.Item className="p-3 hover:bg-gray-50 hover:text-black text-gray-600 flex items-center gap-3">
                {({ active }) => (
                  <a className={`${active && 'bg-blue-500'} `} href="#">
                    <BiShoppingBag />
                    <p>Historial de compras</p>
                  </a>
                )}
              </Menu.Item>
              <Menu.Item className=" p-3 hover:bg-gray-50 hover:text-black text-gray-600 flex items-center gap-3">
                {({ active }) => (
                  <a className={`${active && 'bg-blue-500'} `} href="#">
                    <AiOutlineInfoCircle />
                    <p>Politicas y privacidad</p>
                  </a>
                )}
              </Menu.Item>
              <Menu.Item
                className="cursor-pointer p-3 hover:bg-gray-50 hover:text-black text-gray-600 flex items-center gap-3 rounded-b-lg"
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
