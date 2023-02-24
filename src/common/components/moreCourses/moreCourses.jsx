import React from 'react'
import TopNav from '../topnav/topNav'
import MoreCourseItem from './moreCourseItem'
const courses = [
  {
    course_id: 1,
    course_title: 'Marketing para networkers',
    enrrolled_people: 14,
    course_description: 'lorem ipsum more nato vim sere lorem ipsum more nato vim serevlorem ipsum more nato vim sere',
    course_teacher: 'Jeff Blas',
    course_rathe: 24,
    course_price: 1200,
  },
  {
    course_id: 2,
    course_title: 'Fotografia para principantes',
    enrrolled_people: 20,
    course_description: 'lorem ipsum more nato vim sere lorem ipsum more nato vim serevlorem ipsum more nato vim sere',
    course_teacher: 'Jesus Branco',
    course_rathe: 24,
    course_price: 1100,
  },
  {
    course_id: 3,
    course_title: 'Chino mandarin basico',
    enrrolled_people: 4,
    course_description: 'lorem ipsum more nato vim sere lorem ipsum more nato vim serevlorem ipsum more nato vim sere',
    course_teacher: 'Saul Ludena',
    course_rathe: 24,
    course_price: 1200,
  },
  {
    course_id: 4,
    course_title: 'Optimizacion de sistemas operativos',
    enrrolled_people: 60,
    course_description: 'lorem ipsum more nato vim sere lorem ipsum more nato vim serevlorem ipsum more nato vim sere',
    course_teacher: 'Boris Strugatsky',
    course_rathe: 24,
    course_price: 1900,
  },
]
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
            {courses.map((course, index) => {
              return <MoreCourseItem courseObj={course} key={index + 1} />
            })}
          </div>
        </div>
      </div>
    </div>
  )
}
