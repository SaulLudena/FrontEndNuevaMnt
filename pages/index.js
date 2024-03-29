//importando el componente con toda su lógica
import Login from '../src/common/components/login/login'
import Head from 'next/head'
export default function IndexPage() {
  //pagina principal donde se renderiza el componente Login y un head para el titulo de la pagina
  return (
    <>
      <Head>
        <title>Login</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="icon" type="image/png" href="/public/assets/nuevamente_logo.png" />
      </Head>
      <Login />
    </>
  )
}
