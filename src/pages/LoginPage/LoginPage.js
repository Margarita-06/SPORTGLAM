// src/components/Login.js
import React from 'react';
import './LoginPage.css';

function Login() {
  return (
    <div className="login-container">
      <div className="login-box">
        <div className="logo">SC</div>
        <h1 className="title">SPORTGLAM</h1>
        <input type="text" placeholder="Teléfono, correo electrónico" />
        <input type="password" placeholder="Contraseña" />
        <button className="btn-login">Iniciar sesión</button>

        <p className="or">Iniciar sesión con:</p>
        <div className="social-buttons">
          <button className="btn-social google"><i className="fab fa-google"></i></button>
          <button className="btn-social facebook"><i className="fab fa-facebook-f"></i></button>
        </div>

        <a href="#" className="forgot">¿Has olvidado tu contraseña?</a>
        <a href="#" className="register">¿No tienes una cuenta? ¡Regístrate!</a>

        <footer className="footer">© SportGlam 2025</footer>
      </div>
    </div>
  );
}

export default Login;
