import Head from 'next/head'
import Layout from '../../../src/common/components/layout'
import CourseMaintenance from '../../../src/common/components/dashboardElements/courseMaintenance/courseMaintenance'
export default function Dashboard() {
  //crear un layout que contenga el topnav y los elementos de dashboard
  return (
    <>
      <Head>
        <title>Nuevamente</title>
      </Head>
      <div className=" w-full h-screen flex ">
        <Layout>
          <CourseMaintenance />
        </Layout>
      </div>
    </>
  )
}
