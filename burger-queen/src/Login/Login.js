import './Login.css';
import { signIn } from "../Firebase/firebaseApp.js"

function Login() {  
    return (
        <div className = "Login">
            <section className="Login-left-section">
                <img className="Login-logo" alt = "Login burger queen logo" src="../img/Burger Queen.png"/>
                <p className = "Login-error"></p>
            </section>
            <form className="Login-form">
                <img className="Login-top-bun" alt= "login burger bun" src = "../img/TopBun.png"/>
                <input className="Login-user-input" id="loginUserInput" type="text" placeholder="User"/>
                <input className = "Login-password-input" id= "loginPasswordInput" type="password" placeholder="Password "/>
                <img className="Login-submit" alt="login button" src="../img/Boton entrar.png" onClick={() => {
                    const valorBotonUser = document.getElementById("loginUserInput").value;
                    const valorBotonPw = document.getElementById("loginPasswordInput").value;
                    signIn(valorBotonUser, valorBotonPw); 
                    }}/>
            </form>
        </div>
    )
}

export default Login;