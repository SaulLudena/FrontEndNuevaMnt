import React from 'react'
import TopNav from '../topnav/topNav'
import CardCourseItem from './cardCourseItem'
const myCourses = [
  {
    courseId: 1,
    courseName: 'Marketing para negocios',
    courseDescription:
      'loremIpsuum more loremIpsuum davis morte an objetooremIpsuum davis morte an objetooremIpsuum davis morte an objetooremIpsuum davis morte an objeto',
    courseGoal: 'Mejorar tus habilidades para negociar',
    courseMethodology: 'loremreloeorleroremre lreorme oreor lre lrleoremelreor',
    coursePrice: 1400.0,
    courseRate: 27,
    courseImage: 'url/imagecourse.png',
    courseBannerImage: 'url/imagecourse.png',
    courseProgress: 6,
    courseTotalLessons: 20,
  },
  {
    courseId: 2,
    courseName: 'React para principiantes',
    courseDescription:
      'loremIpsuum more loremIpsuum davis morte an objetooremIpsuum davis morte an objetooremIpsuum davis morte an objetooremIpsuum davis morte an objeto',
    courseGoal: 'Mejorar tus habilidades para negociar',
    courseMethodology: 'loremreloeorleroremre lreorme oreor lre lrleoremelreor',
    coursePrice: 1400.0,
    courseRate: 27,
    courseImage: 'url/imagecourse.png',
    courseBannerImage: 'url/imagecourse.png',
    courseProgress: 2,
    courseTotalLessons: 15,
  },
  {
    courseId: 3,
    courseName: 'Liderazgo en tiempos modernos',
    courseDescription:
      'loremIpsuum more loremIpsuum davis morte an objetooremIpsuum davis morte an objetooremIpsuum davis morte an objetooremIpsuum davis morte an objeto',
    courseGoal: 'Mejorar tus habilidades para negociar',
    courseMethodology: 'loremreloeorleroremre lreorme oreor lre lrleoremelreor',
    coursePrice: 1400.0,
    courseRate: 27,
    courseImage: 'url/imagecourse.png',
    courseBannerImage: 'url/imagecourse.png',
    courseProgress: 15,
    courseTotalLessons: 18,
  },
]
export default function EnrolledCourses() {
  return (
    <div className="flex flex-1 overflow-hidden w-full pt-5 pr-5 pb-5">
      <div className="bg-[#F7F7F7] rounded-xl h-full p-9  flex flex-col gap-14 overflow-y-scroll scroller w-full ">
        <TopNav />
        <div className=" grid gap-10">
          <div className="text-3xl font-bold  w-full grid gap-2">
            <h1>Revisa tus cursos en el momento que desees.</h1>
            <h1> No importa donde estés !</h1>
          </div>
          <div className=" grid 2xl:grid-cols-3 lg:grid-cols-2 grid-cols-1 gap-10">
            {myCourses.map((courseObject) => {
              return <CardCourseItem key={courseObject.courseId} courseObject={courseObject} />
            })}
          </div>
        </div>
      </div>
    </div>
  )
}
