
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
        <input type="text" placeholder="Teléfono, correo electrónico" className="form-input"/>
        <input type="password" placeholder="Contraseña" className="form-input"/>
        <button className="btn-login">Iniciar sesión</button>

        <p className="or">Iniciar sesión con:</p>
        <div className="social-buttons">
          <button className="btn-social google"><i className="fab fa-google"></i></button>
          <button className="btn-social facebook"><i className="fab fa-facebook-f"></i></button>
        </div>

        <Link to="/forgot-password" className="forgot">¿Has olvidado tu contraseña?</Link>
        <div className="register-box">
          <Link to="/register" className="register">¿No tienes una cuenta? ¡Regístrate!</Link>
        </div>

      </div>
    </div>
  );
}

export default Login;