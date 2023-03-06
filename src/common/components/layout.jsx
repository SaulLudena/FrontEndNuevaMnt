import React from 'react'
import SideNav from '../components/sidenav/sidenav'
export default function layout({ children }) {
  return (
    <>
      <SideNav />
      {children}
    </>
  )
}
