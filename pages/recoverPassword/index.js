import React from 'react'
import Head from 'next/head'
import Recoverassword from '../../src/common/components/recoverPassword/recoverPassword'
export default function RecoverPassword() {
  return (
    <>
      <Head>
        <title>Recuperar contraseña | Nuevamente</title>
      </Head>
      <Recoverassword />
    </>
  )
}
