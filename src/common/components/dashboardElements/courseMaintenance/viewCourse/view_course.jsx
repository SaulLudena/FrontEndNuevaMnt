import axios from 'axios'
import Cookies from 'js-cookie'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'

import CourseDetailTitleViewCourse from './courseDetailTitleViewCourse'
import CourseGoalViewCourse from './courseGoalViewCourse'
import CourseProgressDetailViewCourse from './courseProgresViewCourse'
import CourseReviewViewCourse from './courseReviewsViewCourse'
import CourseStartViewCourse from './courseStartViewCourse'
import CourseVideoModulesViewCourse from './courseVideoModulesViewCourse'
import QuestionsAndAnswersViewCourse from './questionsAndAnswersViewCourse'

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
        <div className="grid lg:grid-cols-2  2xl:grid-cols-4  2xl:grid-rows-auto  gap-10">
          <CourseDetailTitleViewCourse courseDetail={getCourseById} />
          <QuestionsAndAnswersViewCourse courseDetail={getCourseById} />
          <CourseProgressDetailViewCourse courseDetail={getCourseById} />
          <CourseGoalViewCourse courseDetail={getCourseById} />
          <CourseReviewViewCourse courseDetail={getCourseById} />
        </div>
        <div className="grid lg:grid-cols-2  2xl:grid-cols-4  2xl:grid-rows-auto  gap-10">
          <CourseVideoModulesViewCourse courseDetail={getCourseById} />
          <CourseStartViewCourse courseDetail={getCourseById} />
        </div>
      </div>
    </div>
  )
}
