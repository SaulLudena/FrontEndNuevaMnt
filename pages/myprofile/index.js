/*Importando coponentes */

/*Importando head tag */
import Head from 'next/head'
import Layout from '../../src/common/components/layout'
export default function index() {
  //crear un layout que contenga el topnav y los elementos de dashboard
  return (
    <>
      <Head>
        <title>Mi perfil</title>
      </Head>
      <div className=" w-full h-screen flex ">
        <Layout></Layout>
      </div>
    </>
  )
}
