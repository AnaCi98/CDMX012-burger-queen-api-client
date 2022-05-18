/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import { useNavigate } from 'react-router-dom';
import './Login.css';
import { useState } from 'react';
import { signIn } from '../../Firebase/firebaseAuth';

function Login() {
  const navigate = useNavigate();
  // eslint-disable-next-line no-unused-vars
  const [user, setUser] = useState();
  const [password, setPassword] = useState();
  const handleSignInClick = (userMail, userPassword) => {
    signIn(userMail, userPassword);
    navigate('/waiter');
  };
  return (
    <div className="Login">
      <section className="Login-left-section">
        <img className="Login-logo" alt="Login burger queen logo" src="../img/Burger Queen.png" />
        <p className="Login-error" />
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
