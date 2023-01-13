/*Importando coponentes */
import SideNav from '../../src/common/components/sidenav/sidenav'
import DashboardElements from '../../src/common/components/DashboardElements/dashboardElements'
/*Importando head tag */
import Head from 'next/head'
import verifySessionStorage from '../../src/common/hooks/auth/sessionStorage/verifySessionStorage'
import Link from 'next/link'
import { useRouter } from 'next/router'
export default function dashboard() {
  const router = useRouter()
  const verifiedUser = verifySessionStorage()
  if (!verifiedUser) {
    router.push('/')
    return (
      <>
        <h1>No encontramos lo que estabas buscando</h1>
        <Link href="/">Ir a la página principal</Link>
      </>
    )
  } else {
    return (
      <>
        <Head>
          <title>Principal</title>
        </Head>
        <div className=" w-full h-screen flex ">
          <SideNav />
          <DashboardElements />
        </div>
      </>
    )
  }
}
