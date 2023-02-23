/*Importando coponentes */
import SideNav from '../../src/common/components/sidenav/sidenav'
import ShoppingCart from '../../src/common/components/shoppinfCart/shoppingCart'
/*Importando head tag */
import Head from 'next/head'

export default function Dashboard() {
  //crear un layout que contenga el topnav y los elementos de dashboard
  return (
    <>
      <Head>
        <title>Nuevamente</title>
      </Head>
      <div className=" w-full h-screen flex ">
        <SideNav />
        <ShoppingCart />
      </div>
    </>
  )
}
