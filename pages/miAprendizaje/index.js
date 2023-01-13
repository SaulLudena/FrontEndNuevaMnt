import SideNav from '../../src/common/components/sidenav/sidenav'
import EnrolledCourses from '../../src/common/components/enrolledCourses/enrolledCourses'
import Head from 'next/head'
export default function index() {
  return (
    <>
      <Head>
        <title>Mi aprendizaje</title>
      </Head>
      <div className=" w-full h-screen flex ">
        <SideNav />
        <EnrolledCourses />
      </div>
    </>
  )
}
