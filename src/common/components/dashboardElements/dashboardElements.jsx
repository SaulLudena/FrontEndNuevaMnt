import TopNav from '../topnav/topNav'
import BigCardPresentation from '../bigCardPresentation'
import TotalCoursesCard from '../totalCourses/totalCourses'
import CompletedCourses from '../completedCourse/completedCourses'
import OfferCard from '../offerCard/offerCard'
import CourseProgress from '../courseProgress/coursePogress'
import CalendarOfActivities from '../calendarOfActivities/calendarOfActivities'
import FastAccessCourse from '../fastAccessCourse/fastAccessCourse'
import SuscriptionStatus from '../suscriptionStatus/suscriptionStatus'
import { useEffect, useState } from 'react'
import Cookies from 'js-cookie'
import axios from 'axios'
import Link from 'next/link'
import { GrAction, GrUserAdmin } from 'react-icons/gr'

export default function DashboardElements() {
  const [user, setUser] = useState({})
  useEffect(() => {
    const getUserData = async () => {
      try {
        const data = {
          nuevamentetoken: Cookies.get('nuevamenteToken'),
        }
        const response = await axios.post('http://localhost:3003/user/validateUserType', data)
        const myInfo = response.data.userInfo
        setUser(myInfo)
      } catch (error) {
        console.log(error)
      }
    }
    getUserData()
  }, [])
  return (
    <div className="flex flex-1 w-full pt-5 pb-5 pr-5 overflow-hidden">
      <div className="bg-[#F7F7F7]  rounded-xl h-full p-9 flex flex-col gap-10 overflow-y-scroll scroller w-full ">
        <TopNav />
        <div className="grid gap-10 lg:grid-cols-4 2xl:grid-cols-4 2xl:grid-rows-4 lg:grid-rows-2">
          {/*Tarjeta de presentacion */}
          <BigCardPresentation />

          {/*Tarjeta componente estado de la suscripcion */}
          <SuscriptionStatus />

          {/*Tarjeta componente calendario de actividades */}
          <CalendarOfActivities />

          {/*Tarjeta componente cursos comprados */}
          <TotalCoursesCard />

          {/*Tarjeta componente cursos completados */}
          <CompletedCourses />

          {/*Tarjeta componente progreso del curso */}
          <CourseProgress />

          {/*Tarjeta componente ofertas */}
          <OfferCard />

          {/*Tarjeta componente acceso rapido a los cursos */}
          <FastAccessCourse />
        </div>
        {user.id_tipo_usuario === 1 && user.rol_usuario === 'Administrador' ? (
          <div className="grid gap-10 lg:grid-cols-4 2xl:grid-cols-4  lg:grid-rows-2">
            <div className="w-full bg-white  lg:col-span-2 2xl:col-span-2 rounded-xl">
              <div className="flex gap-3">
                <div className="bg-[#FFF409] w-10 rounded-tl-xl rounded-bl-xl"></div>
                <div className="grid gap-6 p-5">
                  <p className="font-semibold text-gray-800">Ver cursos impartidos</p>
                  <span className="flex items-end gap-3">
                    <h1 className="text-3xl font-bold text-center">6</h1>
                    <p>cursos impartidos</p>
                  </span>
                  <Link href="#" className="py-3 px-5 bg-[#FFF409] rounded-lg">
                    Ver cursos impartidos
                  </Link>
                </div>
              </div>
            </div>
            <div className="w-full transition duration-100 bg-white  lg:col-span-2 2xl:col-span-2 rounded-xl hover:shadow-lg">
              <Link href="/dashboard/zonaDeMentores" className="flex h-full gap-3">
                <div className="bg-[#FFF409] w-10 rounded-tl-xl rounded-bl-xl"></div>
                <div className="flex items-center gap-6 p-5">
                  <div>
                    <div className="p-4 rounded-full ">
                      <GrAction size={100} className="text-emerald-800" />
                    </div>
                  </div>
                  <p className="font-semibold text-gray-800">Zona de mentores</p>
                </div>
              </Link>
            </div>

            <div className="w-full bg-white  lg:col-span-2 2xl:col-span-2 rounded-xl">
              <div className="flex h-full gap-3">
                <div className="bg-[#FFF409] w-10 rounded-tl-xl rounded-bl-xl"></div>
                <div className="grid gap-6 p-5 b">
                  <p className="font-semibold text-gray-800">Ganancia actual</p>
                  <span className="flex items-end gap-3">
                    <h1 className="text-3xl font-bold text-center">s/. 2000.00</h1>
                  </span>
                </div>
              </div>
            </div>
            {/*Hacer una validacion de tipo de usuario: Admin/Docente/Estudiante*/}
            <div className="w-full transition duration-100 bg-white  lg:col-span-2 2xl:col-span-2 rounded-xl hover:shadow-lg">
              <Link href="/dashboard/zonaDeMentores" className="flex h-full gap-3">
                <div className="bg-[#FFF409] w-10 rounded-tl-xl rounded-bl-xl"></div>
                <div className="flex items-center gap-6 p-5">
                  <div>
                    <div className="p-4 rounded-full ">
                      <GrUserAdmin size={100} className="text-emerald-800" />
                    </div>
                  </div>
                  <p className="font-semibold text-gray-800">Operaciones administrativas</p>
                </div>
              </Link>
            </div>
          </div>
        ) : (
          <div className="hidden"></div>
        )}
      </div>
    </div>
  )
}
