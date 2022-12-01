import Link from 'next/link'
/*Importando iconos */
import { AiOutlineMenuUnfold } from 'react-icons/ai'
import { BsFillHouseDoorFill } from 'react-icons/bs'
import { BiBrain } from 'react-icons/bi'
import { FaGraduationCap } from 'react-icons/fa'
/*Importnado cookie */
import cookie from 'js-cookie'
/*Importando useState */
import { useState } from 'react'
/*Importando los componentes*/
import TopNav from '../src/common/components/topnav/topNav'
import TotalCoursesCard from '../src/common/components/totalCourses/totalCourses'
import CompletedCourses from '../src/common/components/completedCourse/completedCourses'
import BigCardPresentation from '../src/common/components/bigCardPresentation/bigCardPresentation'

export default function dashboard() {
  //estado para la session (cookie), en teoria cookie y session son cosas distintas pero estoy programando solito asi que... xd
  const [isOpen, setIsOpen] = useState(false)

  //funcion que intercala el estado del sidenav, abre y cierra
  const openOrCloseSideNav = () => {
    setIsOpen(true)
    isOpen ? setIsOpen(false) : setIsOpen(true)
    console.log(isOpen)
  }

  //verifica que exista una cookie y si no existe entonces redireccionamos al usuario deslogeado al login
  const validateCookie = () => {
    //falta poner un renderizado condicional, basicamente si la cookie no existe entonces que imprima una mensaje raro o lo redireccione a otra página
    /*cookieUserName ? <Dashboard/> : <NotFound404/>*/
    const Getnombre_usuario = cookie.get('userName')
    if (!Getnombre_usuario) {
      if (process.browser) {
        window.location.href = '/'
      }
    }
  }
  //ejecutamos la funcion validateCookie
  validateCookie()

  return (
    <div className="grid grid-cols-12  h-screen border-2overflow-hidden">
      <div
        className={`h-screen sticky bg-white grid  ${
          isOpen ? 'col-span-2 justify-center' : 'col-span-1 justify-center'
        }`}
      >
        <div className="flex flex-col justify-between h-full">
          {/*Logo */}
          <div className=" h-32 flex items-center justify-center">
            <p>Logo</p>
          </div>
          {/*Opciones primarias */}
          <div className="px-0 flex flex-col h-full gap-0 pt-14">
            <Link href="/dashboard/" className="group transition ">
              <div className="group-hover:text-amber-500 flex justify-between  px-12 py-3 rounded-xl text-gray-400 ">
                <div className="flex items-center gap-10 w-full">
                  <BsFillHouseDoorFill className="group-hover:text-amber-500 text-gray-400" />
                  {isOpen ? <p className="text-sm ">Principal</p> : ''}
                </div>
              </div>
            </Link>
            <Link href="/dashboard/buscarCursos" className="group transition ">
              <div className="group-hover:text-gray-700 flex justify-between  px-12 py-3 rounded-xl text-gray-400">
                <div className="flex items-center gap-10 w-full">
                  <BiBrain className="group-hover:text-gray-700 text-gray-400" />
                  {isOpen ? <p className="text-sm">Mi aprendizaje</p> : ''}
                </div>
              </div>
            </Link>
            <Link href="/dashboard/cursosInscritos  " className="group transition">
              <div className="group-hover:text-gray-700 flex justify-between  px-12 py-3 rounded-xl text-gray-400">
                <div className="flex items-center gap-10 w-full">
                  <FaGraduationCap className="group-hover:text-gray-700 text-gray-400" />
                  {isOpen ? <p className="text-sm">Más cursos</p> : ''}
                </div>
              </div>
            </Link>
          </div>
          {/*Opciones de logout */}
          <div className="px-0 flex flex-col gap-0 h-32 ">
            <button className="group transition" onClick={openOrCloseSideNav}>
              <div className="group-hover:text-gray-700 flex justify-between  px-12 py-3 rounded-xl text-gray-400">
                <AiOutlineMenuUnfold />
              </div>
            </button>
          </div>
        </div>
      </div>
      <div className={`${isOpen ? `col-span-10` : 'col-span-11'} overflow-hidden w-full py-5 pr-5`}>
        <div className="bg-[#F7F7F7] rounded-xl h-full p-9 flex flex-col gap-4 overflow-y-scroll scroller">
          <TopNav />
          <div className="grid grid-cols-4 grid-rows-4 gap-10">
            {/*Tarjeta componentes numero 1 */}
            <div className="col-span-3 row-span-2 flex">
              <BigCardPresentation />
            </div>
            {/*Tarjeta componente ofertas */}
            <div className="col-span-1 row-span-2 rounded-3xl overflow-hidden text-white break-words bg-[conic-gradient(at_top_right,_var(--tw-gradient-stops))] from-gray-700 via-gray-900 to-black"></div>
            {/*Tarjeta componente cursos comprados */}
            <div className="col-span-1 row-span-1 ">
              <TotalCoursesCard />
            </div>
            {/*Tarjeta componente cursos completados */}
            <div className="col-span-1 row-span-1">
              <CompletedCourses />
            </div>
            {/*Tarjeta componente progreso del curso */}
            <div className="col-span-1 row-span-2 w-full bg-white rounded-xl p-5">tarjeta progreso del curso</div>
            {/*Tarjeta componente calendario de actividades */}
            <div className="col-span-1 row-span-1 w-full bg-white rounded-xl p-5">tarjeta calendario de activdades</div>
            {/*Tarjeta componente acceso rapido a los cursos */}
            <div className="col-span-2 row-span-1  w-full bg-white rounded-xl p-5">acceso rapido a cursos</div>
            {/*Tarjeta componente estado de la suscripcion */}
            <div className="col-span-1 row-span-1 w-full bg-white rounded-xl p-5">tarjeta estado de suscricion</div>
          </div>
        </div>
      </div>
    </div>
  )
}
