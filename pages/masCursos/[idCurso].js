import Head from 'next/head'
import Layout from '../../src/common/components/layout'
import DetailCourse from '../../src/common/components/detailCourse/detailCourse'
export default function MasCursoDetalle() {
  return (
    <>
      <Head>
        <title>Nuevamente</title>
      </Head>
      <div className="flex w-full h-screen ">
        <Layout>
          <DetailCourse />
        </Layout>
      </div>
    </>
  )
}
