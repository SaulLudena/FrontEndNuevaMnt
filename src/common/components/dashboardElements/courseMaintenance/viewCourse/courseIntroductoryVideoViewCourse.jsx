import { AiFillStar } from 'react-icons/ai'

export default function CourseIntroductoryVideoViewCourse({ courseDetail }) {
  return (
    <div className=" relative 2xl:col-span-2 lg:col-span-1  h-full grid bg-black rounded-3xl">
      <video width={320} height={240}>
        <source src="https://vimeo.com/253989945" type="video/mp4" />
        <source src="" type="video/ogg" />
        Your browser does not support the video tag.
      </video>
    </div>
  )
}
