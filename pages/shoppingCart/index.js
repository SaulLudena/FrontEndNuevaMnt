/*Importando coponentes */
import SideNav from '../../src/common/components/sidenav/sidenav'
import ShoppingCart from '../../src/common/components/shoppinfCart/shoppingCart'
/*Importando head tag */
import Head from 'next/head'
import Layout from '../../src/common/components/layout'
export default function Dashboard() {
  //crear un layout que contenga el topnav y los elementos de dashboard
  return (
    <>
      <Head>
        <title>Carrito de compras</title>
      </Head>
      <div className=" w-full h-screen flex ">
        <Layout>
          <ShoppingCart />
        </Layout>
      </div>
    </>
  )
}
