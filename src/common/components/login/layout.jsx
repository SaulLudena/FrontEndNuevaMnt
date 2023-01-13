import { useState } from 'react'
/*Importando componentes */
import LeftSide from './leftSide'
import RightSide from './rightSIde'
import LoginMessage from './loginMessage'

export default function Layout() {
  return (
    <div className="grid grid-cols-1  h-screen lg:grid-cols-2">
      <LeftSide />
      <RightSide />
    </div>
  )
}
