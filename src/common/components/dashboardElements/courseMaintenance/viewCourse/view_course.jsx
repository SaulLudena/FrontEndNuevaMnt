import axios from 'axios'
import Cookies from 'js-cookie'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import View_course_basic_info from './view_course_basic_info'
import View_course_video_preview from './view_course_video_preview'
import View_course_course_modules_lessons from './view_course_course_modules_lessons'
export default function viewCourse() {
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

  /*recuperar el id, llamar el detalle del curso y  */
  return (
    <div className="">
      <div className="grid grid-cols-12 gap-10">
        <div className="flex flex-col col-span-12 gap-5">
          <div className="grid gap-3">
            <View_course_basic_info getCourseById={getCourseById} />
            <View_course_video_preview getCourseById={getCourseById} />
            <View_course_course_modules_lessons getCourseById={getCourseById} />
            {/*            <Course_video_preview />
            <Course_builder />
            <Course_resources />
            <Course_extra_info /> */}
          </div>
        </div>
      </div>
    </div>
  )
}
