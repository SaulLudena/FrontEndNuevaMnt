import { AiFillStar } from 'react-icons/ai'
import { addToCart } from '../shoppinfCart/shoppingCartlogic'
export default function MoreCourseItem({ courseObj }) {
  return (
    <div
      href={`/miAprendizaje/detalleCurso/`}
      className="p-10 rounded-xl  bg-gradient-to-r from-[#FFF409] via-white to-white opacity-90"
    >
      <div className="flex gap-14">
        <div className="flex justify-between">
          <img
            src="https://images.unsplash.com/photo-1561489413-985b06da5bee"
            alt="Course image"
            className=" w-[18rem] h-[18rem] rounded-lg object-cover"
          />
        </div>
        <div className="w-full flex flex-col justify-around">
          <h1 className="text-2xl font-bold ">{courseObj.course_title}</h1>
          <p className="font-medium">
            <strong>Personas inscritas :</strong> {courseObj.enrrolled_people}
          </p>
          <p>Descripcion: {courseObj.course_description}</p>
          <span className="flex gap-1">
            <p>Dictado por:</p>
            <p className="font-bold">{courseObj.course_teacher}</p>
          </span>
          <div className="flex gap-1">
            <AiFillStar className="text-[#FFF409]" />
            <AiFillStar className="text-[#FFF409]" />
            <AiFillStar className="text-[#FFF409]" />
            <AiFillStar className="text-gray-400" />
            <AiFillStar className="text-black" />
          </div>
          <div className="flex gap-2">
            <button className="bg-gray-600 px-5 py-2 rounded-full text-white" onClick={addToCart}>
              Comprar
            </button>
            <button className="hover:bg-gray-600 hover:text-white px-5 py-2 rounded-full">Añadir al carrito</button>
          </div>
        </div>
        <div className="flex flex-col-reverse  justify-start w-60 ">
          <div className="flex justify-end h-full">
            <p className="text-xl font-medium">S/. {courseObj.course_price}</p>
          </div>
        </div>
      </div>
    </div>
  )
}
