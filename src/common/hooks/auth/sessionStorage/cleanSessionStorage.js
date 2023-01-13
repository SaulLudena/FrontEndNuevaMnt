export default function clearSessionStorage() {
  if (process.browser) {
    sessionStorage.clear()
    window.location.href = '/'
  }
}
