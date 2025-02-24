/* eslint-disable no-unused-vars */
/* eslint-disable no-console */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import './Login.css';
import { useState } from 'react';
import { signIn } from '../../Firebase/firebaseAuth';

function Login() {
  const [user, setUser] = useState();
  const [loginError, setLoginError] = useState();
  const [password, setPassword] = useState();
  const handleSignInClick = (userMail, userPassword) => {
    // eslint-disable-next-line no-unused-vars
    signIn(userMail, userPassword).then((userCredential) => userCredential).catch((error) => {
      console.log(error.code);
      switch (error.code) {
        case 'auth/user-not-found':
          return setLoginError('Ingresa un usuarix validx');
        case 'auth/wrong-password':
          return setLoginError('Ingresa la contraseña correcta');
        case 'auth/invalid-email':
          return setLoginError('Ingresa tu usuarix y contraseña');
        default: return setLoginError('');
      }
    });
  };

  return (
    <div className="Login">
      <section className="Login-left-section">
        <img className="Login-logo" alt="Login burger queen logo" src="../img/Burger Queen.png" />
        <p className="Login-error">{loginError}</p>
      </section>
      <form className="Login-form">
        <img className="Login-top-bun" alt="login burger bun" src="../img/TopBun.png" />
        <input className="Login-user-input" id="loginUserInput" type="text" placeholder="User" onChange={(e) => { setUser(e.target.value); }} />
        <input className="Login-password-input" id="loginPasswordInput" type="password" placeholder="Password " onChange={(e) => { setPassword(e.target.value); }} />
        <img
          className="Login-submit"
          alt="login button"
          src="../img/Boton entrar.png"
          onClick={() => {
            handleSignInClick(user, password);
          }}
        />
      </form>
    </div>
  );
}

export default Login;
