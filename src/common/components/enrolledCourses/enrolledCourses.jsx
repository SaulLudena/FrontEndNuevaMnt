import React,{ useEffect ,useState} from 'react'
import TopNav from '../topnav/topNav'
import CardCourseItem from './cardCourseItem'
import axios from 'axios'
import Cookies from 'js-cookie'

export default function EnrolledCourses() {
  const [purchasedCourses,setPurchasedCourses] = useState([])

  useEffect(() => {
    const purchasedCoursesByUser = async () => {
      try {
        const result = await axios.post('http://localhost:3003/course/getCoursesPurchasedByUser',{
          nuevamntToken: Cookies.get('nuevamenteToken'),
        })
		setPurchasedCourses(result.data.purchases)

      } catch (error) {
        console.log(error)
      }
    }
    purchasedCoursesByUser()
  }, [])

  return (
    <div className="flex flex-1 w-full pt-5 pb-5 pr-5 overflow-hidden">
      <div className="bg-[#F7F7F7] rounded-xl h-full p-9  flex flex-col gap-14 overflow-y-scroll scroller w-full ">
        <TopNav />
        <div className="grid gap-10 ">
          <div className="grid w-full gap-2 text-3xl font-bold">
            <h1>Revisa tus cursos en el momento que desees.</h1>
            <h1> No importa donde estés !</h1>
          </div>
          <div className="grid grid-cols-1 gap-10 2xl:grid-cols-3 lg:grid-cols-2">
{
	purchasedCourses.map((purchasedCourse) => {

		return <CardCourseItem key={purchasedCourse.tb_pedido_curso.tb_curso.id_curso} enrolledCourse={purchasedCourse.tb_pedido_curso.tb_curso} />
	})
}

          </div>
        </div>
      </div>
    </div>
  )
}
