import Head from 'next/head'
import Layout from '../../../../src/common/components/layout'
import CourseDetail from '../../../../src/common/components/dashboardElements/courseMaintenance/courseDetail'
export default function VistaCurso() {
  return (
    <>
      <Head>
        <title>Nuevamente</title>
      </Head>
      <div className="flex w-full h-screen ">
        <Layout>
          <CourseDetail />
        </Layout>
      </div>
    </>
  )
}
