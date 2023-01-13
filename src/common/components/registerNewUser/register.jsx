import React from 'react'
import RightSide from '../login/rightSIde'
import RegisterForm from '../registerNewUser/registerForm'
export default function register() {
  return (
    <div className="grid grid-cols-1  h-screen lg:grid-cols-2">
      <RegisterForm />
      <RightSide />
    </div>
  )
}
