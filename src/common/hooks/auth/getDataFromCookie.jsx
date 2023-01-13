import cookie from 'js-cookie'
import { useEffect, useState } from 'react'
export default function getDataFromCookie() {
  const [session, setSession] = useState('')
  useEffect(() => {
    setSession(cookie.get('userObject'))
  }, [])
  return session
}
