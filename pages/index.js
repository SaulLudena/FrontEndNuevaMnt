//importando el componente con toda su lógica
import Login from '../src/common/components/login/login'
import Head from 'next/head'
export default function IndexPage() {
  //retornamos el componente Login y lo mostramos
  return (
    <>
      <Head>
        <title>Login</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Login />
    </>
  )
}
