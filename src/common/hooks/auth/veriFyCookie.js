import cookie from 'js-cookie'
export default function veryfiCookie() {
  const Getnombre_usuario = cookie.get('userName')
  if (!Getnombre_usuario) {
    return false
  }
  return true
}
