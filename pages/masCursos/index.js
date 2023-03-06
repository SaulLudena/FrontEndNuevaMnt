import SideNav from '../../src/common/components/sidenav/sidenav'
import MoreCourses from '../../src/common/components/moreCourses/moreCourses'
import Head from 'next/head'
import axios from 'axios'
import Layout from '../../src/common/components/layout'
export default function index({ myInfo }) {
  //importar las funciones de verifyCookie
  return (
    <>
      <Head>
        <title>Mas cursos</title>
      </Head>
      <div className=" w-full h-screen flex ">
        <Layout>
          <MoreCourses myInfo={myInfo} />
        </Layout>
      </div>
    </>
  )
}

export async function getServerSideProps() {
  const response = await axios.get('http://localhost:3003/course/getAllCoursesToBuy')
  const myInfo = response.data.getAllCoursesToBuy
  return {
    props: { myInfo },
  }
}
