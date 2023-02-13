import TopNav from '../topnav/topNav'
import BigCardPresentation from '../bigCardPresentation/bigCardPresentation'
import TotalCoursesCard from '../totalCourses/totalCourses'
import CompletedCourses from '../completedCourse/completedCourses'
import OfferCard from '../offerCard/offerCard'
import CourseProgress from '../courseProgress/coursePogress'
import CalendarOfActivities from '../calendarOfActivities/calendarOfActivities'
import FastAccessCourse from '../fastAccessCourse/fastAccessCourse'
import SuscriptionStatus from '../suscriptionStatus/suscriptionStatus'

export default function DashboardElements() {
  return (
    <div className="flex flex-1 overflow-hidden w-full pt-5 pr-5 pb-5">
      <div className="bg-[#F7F7F7]  rounded-xl h-full p-9 flex flex-col gap-7 overflow-y-scroll scroller w-full ">
        <TopNav />
        {/*
        tamanio original: grid-cols-1 grid-cols-4
        tamanio mediano: grid-cols-3
        tamanio grande: grid-cols-4 grid-rows-4
        */}
        <div className="grid lg:grid-cols-4  2xl:grid-cols-4  2xl:grid-rows-4 lg:grid-rows-2 gap-10">
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
      </div>
    </div>
  )
}
