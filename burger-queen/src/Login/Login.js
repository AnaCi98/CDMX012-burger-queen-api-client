import './Login.css';

function Login() {
    return (
        <div className = "Login">
            <section className="Login-left-section">
                <img className="Login-logo" alt = "Login burger queen logo" src="../img/Burger Queen.png"/>
                <p className = "Login-error"></p>
            </section>
            <form className="Login-form">
                <img className="Login-top-bun" alt= "login burger bun" src = "../img/TopBun.png"/>
                <input className="Login-user"type="text" placeholder="User"/>
                <input className = "Login-password" type="password" placeholder="Password "/>
                <img className="Login-submit" alt="login button" src="../img/Boton entrar.png"/>
            </form>
        </div>
    )
}

export default Login;