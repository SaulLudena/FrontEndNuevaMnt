import axios from 'axios'
import Cookies from 'js-cookie'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'

import { reusableStyles } from '../../../../../styles/styles'
import { BiSolidGraduation } from 'react-icons/bi'
import { MdUpdate } from 'react-icons/md'

export default function ViewCourse() {
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
          <div className="grid gap-2">
            <div className="grid gap-2">
              <p className="text-3xl font-bold">Marketing para networkers</p>
              <p>Categoria: Marketing</p>
            </div>
            <div className="grid grid-cols-12 gap-10 ">
              <div className="col-span-8 ">
                <div>
                  <img
                    src="http://localhost:3003/images/course_images/1686330726436-Frame 69.png"
                    alt="image not working"
                    className="w-full rounded-xl"
                  />
                </div>
                <div>
                  <ul>
                    <li>Informacion del curso</li>
                    <li>Reseñas</li>
                    <li>Recursos</li>
                  </ul>
                </div>
              </div>
              <div className="grid col-span-4 gap-10 grid-wos-6">
                <div className="grid gap-5 p-10 bg-white ">
                  <p className="text-xl font-bold ">Progreso del curso</p>
                  <div>0/0 lecciones</div>
                  <button className={reusableStyles.button}>Completar curso</button>
                </div>
                <div className="grid gap-5 p-10 bg-white">
                  <span>
                    <p>0 total de inscritos</p>
                  </span>
                  <span>
                    <p>Actualizado 9, de junio de 2023</p>
                  </span>
                </div>
                <div className="grid gap-5 p-10 bg-white">
                  <p>Un curso de</p>
                  <div className="flex items-center gap-2">
                    <img
                      src="http://localhost:3003/images/course_images/1686330726436-Frame 69.png"
                      alt=""
                      className="rounded-full w-14 h-14"
                    />
                    <p>Saul cornejo</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/*<View_course_basic_info getCourseById={getCourseById} />
            <View_course_video_preview getCourseById={getCourseById} />
            <View_course_course_modules_lessons getCourseById={getCourseById} />
            <View_course_resources getCourseById={getCourseById} />
            <Course_video_preview />
            <Course_builder />
            <Course_resources />
            <Course_extra_info /> */}
        </div>
      </div>
    </div>
  )
}
