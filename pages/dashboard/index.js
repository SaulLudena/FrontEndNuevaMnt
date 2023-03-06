/*Importando coponentes */

import DashboardElements from '../../src/common/components/DashboardElements/dashboardElements'
/*Importando head tag */
import Head from 'next/head'
import Layout from '../../src/common/components/layout'
export default function Dashboard() {
  //crear un layout que contenga el topnav y los elementos de dashboard
  return (
    <>
      <Head>
        <title>Nuevamente</title>
      </Head>
      <div className=" w-full h-screen flex ">
        <Layout>
          <DashboardElements />
        </Layout>
      </div>
    </>
  )
}
