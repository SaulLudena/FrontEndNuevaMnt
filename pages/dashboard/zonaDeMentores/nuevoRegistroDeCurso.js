import Head from 'next/head'
import Layout from '../../../src/common/components/layout'
import CourseMaintenanceCreate from '../../../src/common/components/dashboardElements/courseMaintenance/courseMaintenanceCreate'
export default function nuevoRegistroDeCurso() {
  return (
    <>
      <Head>
        <title>Nuevamente</title>
      </Head>
      <div className="flex w-full h-screen ">
        <Layout>
          <CourseMaintenanceCreate />
        </Layout>
      </div>
    </>
  )
}
