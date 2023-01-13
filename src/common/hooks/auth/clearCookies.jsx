import cookie from 'js-cookie'
export default function cleanCookies() {
  if (process.browser) {
    cookie.remove('userName')
    cookie.remove('userObject')
    window.location.href = '/'
  }
}
