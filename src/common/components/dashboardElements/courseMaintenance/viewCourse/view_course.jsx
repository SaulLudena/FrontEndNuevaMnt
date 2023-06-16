import axios from 'axios'
import Cookies from 'js-cookie'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'

import CourseDetailTitleViewCourse from './courseDetailTitleViewCourse'
import CourseIntroductoryVideoViewCourse from './courseIntroductoryVideoViewCourse'
import CourseGoalViewCourse from './courseGoalViewCourse'
import CourseMadeByViewCourse from './courseMadeByViewCourse'
import CourseDetailsViewCourse from './courseDetailsViewCourse'
import CourseResourcesViewCourse from './courseResourcesViewCourse'
import QuestionsAndAnswersViewCourse from './questionsAndAnswersViewCourse'
import CoursStartViewCourse from './courseStartViewCourse'
import CourseProgressViewCourse from './courseProgresViewCourse'
import CourseVideoModulesViewCourse from './courseVideoModulesViewCourse'
export default function view_course() {
  const router = useRouter()
  const { idCurso } = router.query
  const [getCourseById, setGetCourseById] = useState({})
  /*una vez renderizado el componente se hara la peticion al servidor y el useEffect
  apunta a la propiedad idCurso viendo si cambia o no */
  useEffect(() => {
    try {
      const getCourseById = async () => {
        if (idCurso) {
          const response = await axios.post('http://localhost:3003/course/getCourseById', {
            nuevamntToken: Cookies.get('nuevamenteToken'),
            id_curso: idCurso,
          })
          setGetCourseById(response.data.getCourseById[0])
          console.log(response.data.getCourseById[0])
        }
      }
      getCourseById()
    } catch (error) {
      console.log(error)
    }
  }, [idCurso])

  return (
    <div className="flex flex-1 w-full">
      <div className="bg-[#F7F7F7]  rounded-xl h-full flex flex-col gap-10 overflow-y-scroll scroller w-full ">
        <div className="grid gap-10 lg:grid-cols-1 2xl:grid-cols-2 2xl:grid-rows-auto ">
          <div className="grid grid-cols-2 col-span-1 gap-10">
            <div className="col-span-2">
              <CourseDetailTitleViewCourse courseDetail={getCourseById} />
            </div>
            <div className="sm:col-span-2 lg:col-span-1">
              <CourseMadeByViewCourse courseDetail={getCourseById} />
            </div>
            <div className="lg:col-span-1 sm:col-span-2">
              <CourseDetailsViewCourse courseDetail={getCourseById} />
            </div>
          </div>
          <div className="">
            <CourseIntroductoryVideoViewCourse courseDetail={getCourseById} />
          </div>
        </div>
        <div className="grid gap-10 lg:grid-cols-1 2xl:grid-cols-2 2xl:grid-rows-auto ">
          <div className="grid grid-cols-2 col-span-1 gap-10 ">
            <div className="col-span-2 ">
              <CourseGoalViewCourse courseDetail={getCourseById} />
            </div>
            <div className="xl:col-span-1 lg:col-span-2">
              {/*aqui empieza el componente*/}
              <CourseResourcesViewCourse />
            </div>
            <div className=" xl:col-span-1 lg:col-span-2">
              <QuestionsAndAnswersViewCourse />
            </div>
          </div>
          <div className="">
            <CoursStartViewCourse />
          </div>
        </div>
        <div className="grid gap-10 lg:grid-cols-2 2xl:grid-cols-2 2xl:grid-rows-auto">
          <div className="grid grid-cols-2 col-span-1 gap-10 bg-white">
            <div className="col-span-2 ">
              <CourseProgressViewCourse courseDetail={getCourseById} />
            </div>
          </div>
          <div className="border-2 border-black ">
            <CourseVideoModulesViewCourse courseDetail={getCourseById} />
          </div>
        </div>
      </div>
    </div>
  )
}
