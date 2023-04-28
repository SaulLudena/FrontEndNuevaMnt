import { useEffect, useState } from 'react'
import CourseInstructorItem from './courseInstructorItem'
import CreateCourseButton from './createCourseButton'
import axios from 'axios'
import Cookies from 'js-cookie'
import Link from 'next/link'
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
    <div className="grid gap-10 ">
      <div className="grid w-full gap-2 text-3xl font-bold">
        <div className="flex">
          <Link href="/dashboard/" className="text-sm font-medium text-gray-500 ">
            <p className="flex">Regresar</p>
          </Link>
        </div>
        <h1>Gestiona todos los cursos impartidos por ti</h1>
      </div>
      <div className="grid grid-cols-1 gap-10 2xl:grid-cols-3 lg:grid-cols-2">
        <CreateCourseButton />
      </div>
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
