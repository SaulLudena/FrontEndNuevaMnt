import { AiFillStar } from 'react-icons/ai'
import { BsBookmark } from 'react-icons/bs'

export default function MoreCourseItem() {
  return (
    <div href={`/miAprendizaje/detalleCurso/`} className="p-5 bg-white rounded-xl group-hover:shadow-xl">
      <div className="flex gap-10">
        <div className="flex justify-between">
          <img
            src="https://images.unsplash.com/photo-1561489413-985b06da5bee"
            alt=""
            className="w-[35rem] rounded-lg object-cover"
          />
        </div>
        <div className="w-full flex flex-col justify-around">
          <h1 className="text-2xl font-bold ">Marketing para Networking</h1>
          <p className="font-medium">12 personas inscritas</p>
          <p>
            En este curso aprenderas las bases para adentrarte en el epico mundo del networking, llevandote a caminos
            que desafien tu vida
          </p>
          <span className="flex gap-1">
            <p>Dictado por:</p>
            <p className="font-bold">Jeff Blass</p>
          </span>
          <div className="flex gap-1">
            <AiFillStar className="text-[#FFF409]" />
            <AiFillStar className="text-[#FFF409]" />
            <AiFillStar className="text-[#FFF409]" />
            <AiFillStar className="text-gray-400" />
            <AiFillStar className="text-black" />
          </div>
          <div className="flex gap-2">
            <button>Comprar</button>
            <button>Añadir al carrito</button>
          </div>
        </div>
        <div className="flex flex-col justify-between w-60 ">
          <BsBookmark />

          <p className="break-normal">S/. 1200.00</p>
        </div>
      </div>
    </div>
  )
}
