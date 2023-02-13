import Register from '../../src/common/components/registerNewUser/register'
import Head from 'next/head'
export default function index() {
  return (
    <>
      <Head>
        <title>Registrate | Nuevamente</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Register />
    </>
  )
}
