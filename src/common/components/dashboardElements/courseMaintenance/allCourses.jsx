import { useEffect, useState } from 'react'
import CourseInstructorItem from './courseInstructorItem'
import CreateCourseButton from './createCourseButton'

import axios from 'axios'
import Cookies from 'js-cookie'
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
  console.log(registeredCourses)
  return (
    <div className=" grid gap-10">
      <div className="text-3xl font-bold  w-full grid gap-2">
        <h1>Gestiona todos los cursos impartidos por ti</h1>
      </div>
      <div className="grid 2xl:grid-cols-3 lg:grid-cols-2 grid-cols-1 gap-10">
        <CreateCourseButton />
      </div>
      <div className=" grid 2xl:grid-cols-4 lg:grid-cols-2 grid-cols-1 gap-10">
        {registeredCourses.length > 0 ? (
          registeredCourses.map((registeredCourse) => {
            return <CourseInstructorItem key={registeredCourse.id_curso} registeredCourse={registeredCourse} />
          })
        ) : (
          <div className="text-2xl text-gray-400 font-medium className  p-5 ">No tienes cursos registrados</div>
        )}
      </div>
    </div>
  )
}
