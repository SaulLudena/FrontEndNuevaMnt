import React from 'react'
import Image from 'next/image'
import srcLogoNuevamente from '../../../../public/assets/nuevamente_logo.png'
export default function Logo() {
  return <Image src={srcLogoNuevamente} width={80} height={80} alt={srcLogoNuevamente} />
}
