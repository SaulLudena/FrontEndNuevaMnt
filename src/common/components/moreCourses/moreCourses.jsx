import React from 'react'
import TopNav from '../topnav/topNav'
import MoreCourseItem from './moreCourseItem'
export default function moreCourses() {
  return (
    <div className={`flex flex-1 overflow-hidden w-full pt-5 pr-5 pb-5`}>
      <div className="bg-[#F7F7F7] rounded-xl h-full p-9 flex flex-col gap-4 overflow-y-scroll scroller w-full ">
        <TopNav />
        <div className=" grid gap-10">
          <div className="text-3xl font-bold  w-full grid gap-2">
            <h1>Adquiere los mejores cursos</h1>
          </div>
          <div className=" grid 2xl:grid-cols-1 gap-10">
            <MoreCourseItem />
            <MoreCourseItem />
            <MoreCourseItem />
            <MoreCourseItem />
            <MoreCourseItem />
          </div>
        </div>
      </div>
    </div>
  )
}
