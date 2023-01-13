import fetchUser from './fetchUser'

//metodo para validar que el usuario ingresado sea igual al registrado en el sistema backend-baseDeDatos. Este metodo recibe 2 parametros, email y password
export const validateUser = async (email, password) => {
  try {
    fetchUser(email, password)
  } catch (error) {
    console.log(error, 'vacio chamo')
  }
}
