/*Importando head tag */
import Head from 'next/head'
import Layout from '../../src/common/components/layout'
import SettingsProfile from '../../src/common/components/settingsProfile/settings'
export default function index() {
  return (
    <>
      <Head>
        <title>Nuevamente</title>
      </Head>
      <div className=" w-full h-screen flex ">
        <Layout>
          <SettingsProfile />
        </Layout>
      </div>
    </>
  )
}
