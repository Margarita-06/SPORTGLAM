// src/components/Login.js
import React from 'react';
import { Link } from 'react-router-dom';
import './LoginPage.css';
import logo from '../../imagenes/Logo.png';

function Login() {
  return (
    <div className="login-container">
      <div className="login-box">
        <img src={logo} alt="SportGlam Logo" className="logo-img" />
        <input type="text" placeholder="Teléfono, correo electrónico" class ="form-input"/>
        <input type="password" placeholder="Contraseña" class ="form-input"/>
        <button className="btn-login">Iniciar sesión</button>

        <p className="or">Iniciar sesión con:</p>
        <div className="social-buttons">
          <button className="btn-social google"><i className="fab fa-google"></i></button>
          <button className="btn-social facebook"><i className="fab fa-facebook-f"></i></button>
        </div>

        <Link to="/forgot-password" className="forgot">¿Has olvidado tu contraseña?</Link>
        <Link to="/register" className="register">¿No tienes una cuenta? ¡Regístrate!</Link>

        <footer className="footer">© SportGlam 2025</footer>
      </div>
    </div>
  );
}

export default Login;