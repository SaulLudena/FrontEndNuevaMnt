import TopNav from '../topnav/topNav'
import CourseDetailTitle from './courseDetailTitle'
import CourseGoal from './courseGoal'
import CourseReview from './courseReview'
import CourseStart from './courseStart'
import CourseVideoModules from './courseVideoModules'
import CourseProgressDetail from './courseProgressDetail'
import QuestionsAndAnswers from './questionsAndAnswers'
export default function DetailCourse({ courseId }) {
  return (
    <div className="flex flex-1 w-full pt-5 pr-5 pb-5">
      <div className="bg-[#F7F7F7]  rounded-xl h-full p-9 flex flex-col gap-10 overflow-y-scroll scroller w-full ">
        <TopNav />

        <div className="grid lg:grid-cols-2  2xl:grid-cols-4  2xl:grid-rows-auto  gap-10">
          <CourseDetailTitle />
          <QuestionsAndAnswers />
          <CourseProgressDetail />
          <CourseGoal />
          <CourseReview />
        </div>
        <div className="grid lg:grid-cols-2  2xl:grid-cols-4  2xl:grid-rows-auto  gap-10   ">
          <CourseVideoModules />
          <CourseStart />
        </div>
      </div>
    </div>
  )
}
