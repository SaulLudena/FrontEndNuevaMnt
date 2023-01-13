import { useEffect, useState } from 'react'

export default function verifySessionStorage() {
  const [statusRender, setStatusRender] = useState(true)

  useEffect(() => {
    const myfunction = () => {
      const session_nombre_usuario = sessionStorage.getItem('nombre_usuario')

      if (!session_nombre_usuario) {
        if (process.browser) {
          //window.location.href = '/'
          setStatusRender(!statusRender)
        }
      } else {
        setStatusRender(statusRender)
      }
    }
    return myfunction()
  }, [])
  return statusRender
}
