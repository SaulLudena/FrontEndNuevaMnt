import Head from 'next/head'
import Layout from '../../../../src/common/components/layout'
import UpdateCourse from '../../../../src/common/components/dashboardElements/courseMaintenance/courseUpdate'

export default function Index() {
  return (
    <>
      <Head>
        <title>Nuevamente</title>
      </Head>
      <div className="flex w-full h-screen ">
        <Layout>
          <UpdateCourse />
        </Layout>
      </div>
    </>
  )
}
