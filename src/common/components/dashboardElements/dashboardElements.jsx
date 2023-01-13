import TopNav from '../topnav/topNav'
import BigCardPresentation from '../bigCardPresentation/bigCardPresentation'
import TotalCoursesCard from '../totalCourses/totalCourses'
import CompletedCourses from '../completedCourse/completedCourses'
import OfferCard from '../offerCard/offerCard'
import CourseProgress from '../courseProgress/coursePogress'
import CalendarOfActivities from '../calendarOfActivities/calendarOfActivities'
export default function dashboardElements() {
  return (
    <div className={`flex flex-1 overflow-hidden w-full pt-5 pr-5 pb-5`}>
      <div className="bg-[#F7F7F7] shadow-xl  rounded-xl h-full p-9 flex flex-col gap-4 overflow-y-scroll scroller w-full ">
        <TopNav />
        <div className="grid grid-cols-4 grid-rows-4 gap-10">
          {/*Tarjeta componentes numero 1 */}
          <div className="col-span-3 row-span-2 flex">
            <BigCardPresentation />
          </div>
          {/*Tarjeta componente ofertas */}
          <OfferCard />
          {/*Tarjeta componente cursos comprados */}
          <div className="col-span-1 row-span-1 ">
            <TotalCoursesCard />
          </div>
          {/*Tarjeta componente cursos completados */}
          <div className="col-span-1 row-span-1">
            <CompletedCourses />
          </div>
          {/*Tarjeta componente progreso del curso */}
          <CourseProgress />
          {/*Tarjeta componente calendario de actividades */}

          <CalendarOfActivities />
          {/*Tarjeta componente acceso rapido a los cursos */}
          <div className="col-span-2 row-span-1  w-full bg-white rounded-xl p-5">acceso rapido a cursos</div>
          {/*Tarjeta componente estado de la suscripcion */}
          <div className="col-span-1 row-span-1 w-full bg-white rounded-xl p-5">tarjeta estado de suscricion</div>
        </div>
      </div>
    </div>
  )
}
