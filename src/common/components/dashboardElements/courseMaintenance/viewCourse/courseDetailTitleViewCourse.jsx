import { AiFillStar } from 'react-icons/ai'

export default function CourseDetailTitleViewCourse({ courseDetail }) {
  return (
    <div className=" relative 2xl:col-span-2 lg:col-span-1  h-full grid bg-white rounded-xl">
      <div className="bg-[#000000] rounded-xl">
        <img
          src={
            courseDetail.url_imagen_principal_curso === undefined ||
            courseDetail.url_imagen_principal_curso.length === 0 ||
            courseDetail.url_imagen_principal_curso === null
              ? 'https://www.thermaxglobal.com/wp-content/uploads/2020/05/image-not-found.jpg'
              : courseDetail.url_imagen_principal_curso
          }
          alt=""
          className="w-full h-56 object-cover opacity-[12%] rounded-xl"
        />
        <div className="absolute border-2 top-0 w-full h-full flex items-center rounded-xl">
          <div className=" grid gap-3 max-w-[90%] w-full m-auto">
            <p className="text-white text-3xl font-bold ">
              {courseDetail.nombre_curso === undefined ||
              courseDetail.nombre_curso.length === 0 ||
              courseDetail.nombre_curso === null
                ? 'Sin titulo'
                : courseDetail.nombre_curso}
            </p>
            <div className="flex gap-1">
              <AiFillStar className="text-[#FFF409]" />
              <AiFillStar className="text-[#FFF409]" />
              <AiFillStar className="text-[#FFF409]" />
              <AiFillStar className="text-white" />
              <AiFillStar className="text-white" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
