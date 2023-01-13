/*Importando el metodo validarUsuario */
import { validateUser } from './validateUser'
//permite saber si se ha ingresado datos en la casilla
export default function validateInputLength(emailForm, passwordForm) {
  emailForm.length <= 0 || passwordForm.length <= 0
    ? alert('Ingrese todos los campos')
    : validateUser(emailForm, passwordForm)
}
