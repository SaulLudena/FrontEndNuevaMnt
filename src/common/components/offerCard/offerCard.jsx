import Link from 'next/link'
import Image from 'next/image'
import ImageSrc from '../../../../public/assets/bg_offers.png'
export default function offerCard() {
  return (
    <div className="2xl:col-span-1 lg:col-span-2 row-span-2 rounded-3xl overflow-hidden text-white break-words bg-[conic-gradient(at_top_right,_var(--tw-gradient-stops))] from-gray-700 via-gray-900 to-black relative">
      <Image src={ImageSrc} alt="alt  " className="h-full select-none w-full" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-full w-full p-5 flex flex-col justify-around">
        <h1 className="text-white ">Solo por esta semana, obten</h1>
        <div className="flex gap-6 items-end">
          <span className="text-6xl font-bold text-[#FFF409]">35%</span>
          <span>de descuento</span>
        </div>
        <p>por tiempo limitado obtén un 35% de descuento en los cursos que publicamos. Aprovecha ahora !</p>
        <div>
          <Link href="/" className="p-4 flex justify-center rounded-2xl bg-[#FFF409] text-black">
            Comenzar ya !
          </Link>
        </div>
      </div>
    </div>
  )
}
