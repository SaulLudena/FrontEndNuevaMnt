import handleRedirect from './handleRedirect'
//fetch para traer los datos del usuario
export default async function fetchUser(email, password) {
  const BASE_URL = await fetch('http://localhost:3003/user/validateUser', {
    method: 'post',
    headers: new Headers({
      'Content-type': 'application/x-www-form-urlencoded;charset=UTF-8',
    }),
    body: `email_usuario=${email}&contra_usuario=${password}`,
  })
  const result = await BASE_URL.json()
  const userObjectApi = result
  handleRedirect(userObjectApi)
}
