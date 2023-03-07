/*Importando coponentes */

/*Importando head tag */
import axios from 'axios'
import Cookies from 'js-cookie'
import Head from 'next/head'
import Layout from '../../../src/common/components/layout'
export default function Dashboard() {
  //crear un layout que contenga el topnav y los elementos de dashboard
  return (
    <>
      <Head>
        <title>Nuevamente</title>
      </Head>
      <div className=" w-full h-screen flex ">
        <Layout>a</Layout>
      </div>
    </>
  )
}
