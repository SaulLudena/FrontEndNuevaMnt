import CourseInstructorItem from './courseInstructorItem'
import CreateCourseButton from './createCourseButton'
export default function AllCourses() {
  return (
    <div className=" grid gap-10">
      <div className="text-3xl font-bold  w-full grid gap-2">
        <h1>Gestiona todos los cursos impartidos por ti</h1>
      </div>
      <div className="grid 2xl:grid-cols-3 lg:grid-cols-2 grid-cols-1 gap-10">
        <CreateCourseButton />
      </div>
      <div className=" grid 2xl:grid-cols-3 lg:grid-cols-2 grid-cols-1 gap-10">
        <CourseInstructorItem nombreCurso="Marketing para networkers" />
        <CourseInstructorItem nombreCurso="Matematica financiera 1" />
        <CourseInstructorItem nombreCurso="Redaccion intensiva" />
        <CourseInstructorItem nombreCurso="Javascript 2" />
      </div>
    </div>
  )
}
