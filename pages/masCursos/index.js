import SideNav from '../../src/common/components/sidenav/sidenav'
import MoreCourses from '../../src/common/components/moreCourses/moreCourses'
import Head from 'next/head'
export default function index() {
  //importar las funciones de verifyCookie
  return (
    <>
      <Head>
        <title>Mas cursos</title>
      </Head>
      <div className=" w-full h-screen flex ">
        <SideNav />
        <MoreCourses />
      </div>
    </>
  )
}
