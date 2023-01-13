export default function setSessionStorage(userObjectApi) {
  sessionStorage.setItem('nombre_usuario', userObjectApi.meta.userData.nombre_usuario)
}
