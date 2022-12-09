
const regexEmail = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;

export default function Validate(userData) {
    let errors = {}
  
    if (!regexEmail.test(userData.username)) {errors.username = 'Debe ser un correo electrónico';}
    if (!userData.username) {errors.username = 'No puede estar vacio';}
    if (userData.username.length > 35) {errors.username = 'No puede ser tan largo';}
    if (!userData.password) {errors.password = 'No puede estar vacio';}
    if (userData.password.length < 6 || userData.password.length > 10) {errors.password = 'Debe tener entre 6 y 10 caracteres';}
    
  
  return errors;
}