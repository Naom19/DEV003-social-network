import { entrarConGoogle, signInUser } from '../lib/index';

export const home = (onNavigate) => {
  // creamos elementos
  const homeDiv = document.createElement('div');
  const homeContainer = document.createElement('div');
  const imgContainer = document.createElement('div');
  const deskContainer = document.createElement('div');
  // se crea div para insertar imagen del boton google
  const googleimg = document.createElement('div');
  const title = document.createElement('h2');
  const subTitle = document.createElement('h2');
  const registerButton = document.createElement('button');
  const logInButton = document.createElement('button');
  const logInGoogle = document.createElement('button');
  const inputEmail = document.createElement('input');
  const inputPsw = document.createElement('input');

  // Aquí le dimos clases a los elementos
  registerButton.className = 'botones';
  logInButton.className = 'botones';
  logInGoogle.className = 'googleIcon';
  // se asigna clase para dar estilo al div para el boton de google
  googleimg.classList = 'googleIcon';
  logInGoogle.id = 'btnlogInGoogle';
  title.className = 'titulo';
  subTitle.className = 'subtitulo';
  homeDiv.className = 'homediv';
  deskContainer.className = 'deskContainer';
  imgContainer.className = 'imgContainer';
  homeContainer.className = 'homeContainer';
  registerButton.textContent = 'Crea una cuenta';
  logInButton.textContent = 'Inicia sesión';
  title.textContent = '<CiberFem>';
  subTitle.textContent = 'Inspiración para programadoras';
  inputEmail.className = 'inputs';
  inputEmail.placeholder = 'ingresa tu email aqui';
  inputPsw.className = 'inputs';
  inputPsw.placeholder = 'ingresa tu contraseña';
  inputPsw.type = 'password';

  registerButton.addEventListener('click', () => {
    onNavigate('/registro');
  });
/*
  logInButton.addEventListener('click', () => {
    onNavigate('/feed');
  });
*/
  logInGoogle.addEventListener('click', () => {
    entrarConGoogle(onNavigate);
  });
  homeContainer.append(inputEmail, inputPsw, logInButton, registerButton, logInGoogle);
  deskContainer.append(imgContainer, homeContainer);
  homeDiv.append(title, subTitle, deskContainer);
//funcion para login con usuarios creados  signInWithEmailAndPassword -> signInUser
  logInButton.addEventListener('click', (e) => {
    e.preventDefault();
    signInUser(inputEmail.value, inputPsw.value)
      .then((userCredential) => {
        console.log('iniciasesion')
        // Signed in
        const user = userCredential.user;
        // pasa onNavigate como parametro llevando al feed si el usario se logea
        onNavigate('/feed');
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
      });
  });
 
  return homeDiv;
};


