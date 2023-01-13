import settingCookies from '../../hooks/auth/settingCookies'
import setSessionStorage from '../../hooks/auth/sessionStorage/setSessionStorage'
//permite validar la existencia de un usuario, crea la cookie y redirige al dashboard
export default function handleRedirect(userObjectApi) {
  const { message, status } = userObjectApi
  if (message === 'OK' && status === 200) {
    setSessionStorage(userObjectApi)
    settingCookies(userObjectApi)
    window.location.href = '/dashboard/'
  } else {
    return alert(message)
  }
}
