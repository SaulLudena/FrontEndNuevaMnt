import { AiFillStar } from 'react-icons/ai'
/*recibir props y utilizarlos */
export default function courseDetailTitle() {
  return (
    <div className=" relative 2xl:col-span-2 lg:col-span-1  h-full grid bg-white rounded-xl">
      <div className="bg-[#000000] rounded-xl">
        <img
          src="https://res.cloudinary.com/dbtzbuew2/image/upload/v1671035838/cld-sample.jpg"
          alt=""
          className="w-full h-56 object-cover opacity-[12%] rounded-xl"
        />
        <div className="absolute border-2 top-0 w-full h-full flex items-center rounded-xl">
          <div className=" grid gap-3 max-w-[90%] w-full m-auto">
            <p className="text-white text-3xl font-bold ">Marketing para Networkers</p>
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
