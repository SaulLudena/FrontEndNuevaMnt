import { useEffect, useState } from 'react'
import CourseInstructorItem from './courseInstructorItem'
import CreateCourseButton from './createCourseButton'
import axios from 'axios'
import Cookies from 'js-cookie'
import Link from 'next/link'
import { GrReturn } from 'react-icons/gr'
import { reusableStyles } from '../../../../styles/styles'
export default function AllCourses() {
  const [registeredCourses, setRegisteredCourses] = useState([])
  useEffect(() => {
    const fetchingCategories = async () => {
      try {
        const result = await axios.post('http://localhost:3003/course/getRegisteredCousesByAdminOrInstructor', {
          nuevamntToken: Cookies.get('nuevamenteToken'),
        })
        setRegisteredCourses(result.data.getRegisteredCousesByAdminOrInstructor)
      } catch (error) {
        console.log(error)
      }
    }
    fetchingCategories()
  }, [])

  return (
    <div className="grid gap-7">
      <div className="grid w-full gap-5 ">
        <h1 className="text-3xl font-bold">Bienvenido a tu zona de mentores</h1>
      </div>
      <div className="flex items-center gap-10">
        <Link href="/dashboard" className=" bg-white rounded-xl hover:shadow-lg transition duration-200">
          <div className="flex items-center ">
            <div className="h-full flex ">
              <div className="rounded-l-xl p-1 bg-emerald-300  h-24"></div>
            </div>

            <div className="py-5 px-10 ">
              <GrReturn size={50} />
            </div>
          </div>
        </Link>
        <div className="grid grid-cols-3 gap-10 2xl:grid-cols-1 lg:grid-cols-2">
          <CreateCourseButton />
        </div>
      </div>
      {/*
      <div className="flex justify-between items-center">
        <h1 className="text-xl ">Tus cursos creados</h1>
        <div>
          <input type="text" className={reusableStyles.inputFormForCourseMaintenance} placeholder="Busca tus cursos" />
        </div>
      </div>
    */}

      <div className="grid grid-cols-1 gap-10 2xl:grid-cols-4 lg:grid-cols-2">
        {/*Listamos todos los cursos que haya registrado el usuario actual */}
        {registeredCourses.length > 0 ? (
          registeredCourses.map((registeredCourse) => {
            return <CourseInstructorItem key={registeredCourse.id_curso} registeredCourse={registeredCourse} />
          })
        ) : (
          <div className="p-5 text-2xl font-medium text-gray-400 className ">No tienes cursos registrados</div>
        )}
      </div>
    </div>
  )
}
