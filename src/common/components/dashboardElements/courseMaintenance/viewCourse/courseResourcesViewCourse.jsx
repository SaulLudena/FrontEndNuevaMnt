import { AiFillFolderOpen } from 'react-icons/ai'

export default function CourseResourcesViewCourse() {
  return (
    <div className="h-full p-5 transition duration-200 bg-white rounded-xl hover:shadow-xl">
      <div className="flex flex-col justify-between h-full gap-7">
        <div className="flex justify-between ">
          <p className="text-xl font-bold">Recursos del curso</p>
          <div>
            <div className="flex items-center justify-center w-10 h-10 bg-yellow-400 rounded-full ">
              <AiFillFolderOpen className="text-black" />
            </div>
          </div>
        </div>
        <div>
          <span className="flex items-end">
            <h1 className="mr-2 text-5xl font-bold">5</h1> <p>recursos en total</p>
          </span>
        </div>
      </div>
    </div>
  )
}
