import TopNav from '../topnav/topNav'

export default function DetailCourse({ enrolledCourse }) {
  console.log(enrolledCourse)
  return (
    <div className="flex flex-1 w-full pt-5 pb-5 pr-5">
      <div className="bg-[#F7F7F7]  rounded-xl h-full p-9 flex flex-col gap-10 overflow-y-scroll scroller w-full ">
        <TopNav />
        <div>{enrolledCourse?.nombre_curso}</div>
      </div>
    </div>
  )
}
