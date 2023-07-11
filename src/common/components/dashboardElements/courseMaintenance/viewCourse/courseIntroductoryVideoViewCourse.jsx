import { useState } from 'react'
import { AiFillPlayCircle } from 'react-icons/ai'
import Image from 'next/image'
import srcIntroductoryImage from '../../../../../../public/assets/Cohete.png'
export default function CourseIntroductoryVideoViewCourse({ courseDetail }) {
  const [hideOverlay, setHideOverlay] = useState(false)
  const handleHideOverlay = () => {
    setHideOverlay(true)
  }
  return (
    <div className="relative grid h-full bg-black 2xl:col-span-2 lg:col-span-1 rounded-3xl">
      <div
        className={
          hideOverlay ? 'hidden' : 'rounded-3xl absolute h-full w-full flex items-center bg-black justify-center'
        }
      >
        <Image
          src={srcIntroductoryImage}
          width={420}
          height={420}
          alt="thumbnail preview"
          className="object-cover h-96 w-96 opacity-20"
        />
      </div>
      <div
        className={
          hideOverlay
            ? 'hidden'
            : ' text-white w-full h-full flex items-center justify-center absolute index-2 cursor-pointer'
        }
        onClick={() => {
          handleHideOverlay()
        }}
      >
        <AiFillPlayCircle size={65} />
      </div>
      <iframe
        src="https://player.vimeo.com/video/253989945?h=fffb00&color=fffb00&title=0"
        className="w-full h-full rounded-xl"
        allow="autoplay; fullscreen; picture-in-picture"
        allowFullScreen
      ></iframe>
    </div>
  )
}
