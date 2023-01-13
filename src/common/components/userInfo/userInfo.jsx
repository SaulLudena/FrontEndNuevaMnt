import { useState, useEffect } from 'react'
export default function userInfo() {
  const [userName, setUserName] = useState()

  useEffect(() => {
    setUserName(sessionStorage.getItem('nombre_usuario'))
  }, [])
  /*corregir los undefined y manejar los context, aplicar el primer principio solid */
  return (
    <div className="flex justify-between gap-3">
      <div className=""></div>
      <div className="">
        <p>{`Hola ${userName}`}</p>
      </div>
    </div>
  )
}
