/*Importando coponentes */
import SideNav from '../../src/common/components/sidenav/sidenav'
import Myprofile from '../../src/common/components/myprofile/myprofile'
/*Importando head tag */
import Head from 'next/head'

export default function index() {
  //crear un layout que contenga el topnav y los elementos de dashboard
  return (
    <>
      <Head>
        <title>Mi perfil</title>
      </Head>
      <div className=" w-full h-screen flex ">
        <SideNav />

        <Myprofile />
      </div>
    </>
  )
}
