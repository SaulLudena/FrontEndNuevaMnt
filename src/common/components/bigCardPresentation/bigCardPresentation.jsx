import Link from 'next/link'
import Image from 'next/image'
import srcBgBigCardPresentation from '../../../../public/assets/big_card_presentation_bg.png'
export default function bigCardPresentation() {
  return (
    <div className="lg:col-span-4 2xl:col-span-3 row-span-2 flex">
      <div className="w-full bg-white rounded-xl p-10 shadow-xl ">
        <div className="flex h-full ">
          <div className=" w-96 flex flex-col justify-between gap-10 text-gray-800  h-full">
            <h1 className="text-3xl font-bold ">La mejor inversión es la educación</h1>
            <p className="text-gray-400">
              ed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem
              aperiam, eaque ipsa quae.ed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium
              doloremque laudantium
            </p>
            <Link href="/" className="p-4 flex justify-center rounded-2xl bg-[#FFF409]">
              Comenzar ya !
            </Link>
          </div>
          <div className=" w-full flex items-center justify-center">
            {<Image src={srcBgBigCardPresentation} alt="alt" className="object-cover h-80 select-none" />}
          </div>
        </div>
      </div>
    </div>
  )
}
