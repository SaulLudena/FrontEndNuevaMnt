import Link from 'next/link'
import Image from 'next/image'
import srcBgBigCardPresentation from '../../../public/assets/big_card_presentation_bg.png'
export default function bigCardPresentation() {
  return (
    <div className="flex row-span-2 lg:col-span-4 2xl:col-span-3">
      <div className="w-full p-10 bg-white shadow-xl rounded-xl ">
        <div className="flex h-full ">
          <div className="flex flex-col justify-between h-full gap-10 text-gray-800  w-96">
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
          <div className="flex items-center justify-center w-full ">
            {<Image src={srcBgBigCardPresentation} alt="alt" className="object-cover select-none h-80" />}
          </div>
        </div>
      </div>
    </div>
  )
}
