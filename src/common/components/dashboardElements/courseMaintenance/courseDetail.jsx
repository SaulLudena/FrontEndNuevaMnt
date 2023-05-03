import TopNav from '../../topnav/topNav'
import ViewCourse from './viewCourse/view_course'

export default function courseDetail() {
  return (
    <div className="flex flex-1 w-full pt-5 pb-5 pr-5 overflow-hidden">
      <div className="bg-[#F7F7F7]  rounded-xl h-full p-9 flex flex-col gap-10 overflow-y-scroll scroller w-full ">
        <TopNav />
        <div className="grid w-full gap-2 text-3xl font-bold">
          <h1>Detalles del curso</h1>
        </div>
        <div className="">
          <ViewCourse />
        </div>
      </div>
    </div>
  )
}
