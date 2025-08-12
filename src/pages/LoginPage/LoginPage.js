
// src/components/Login.js
import React from 'react';
import { Link } from 'react-router-dom';
import './LoginPage.css';
import Logo from '../../img/Logo.png';
import { auth, googleProvider, db } from '../../firebase';
import { signInWithEmailAndPassword, fetchSignInMethodsForEmail, linkWithCredential, EmailAuthProvider, signInWithPopup } from 'firebase/auth';
import { doc, getDoc } from 'firebase/firestore';
import { useState } from 'react';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';


function Login() {
  const [emailOrPhone, setEmailOrPhone] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  //const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    try {
      // Login con email y contraseña
      await signInWithEmailAndPassword(auth, emailOrPhone, password);
      //navigate('/dashboard'); // o tu ruta principal
    } catch (err) {
      setError('Correo/contraseña inválidos.');
      console.error(err);
    }
  };

  const handleGoogleLogin = async () => {
    setError('');
    try {
      await signInWithPopup(auth, googleProvider);
      //navigate('#');
    } catch (err) {
      setError('No se pudo iniciar sesión con Google.');
      console.error(err);
    }
  };

  /*const handleFacebookLogin = async () => {
    setError('');
    try {
      await signInWithPopup(auth, facebookProvider);
      navigate('/dashboard');
    } catch (err) {
      setError('No se pudo iniciar sesión con Facebook.');
      console.error(err);
    }
  };*/

  return (
    <form onSubmit={handleSubmit}>
      <div className="login-container">
        <div className="login-box">
          <img src={Logo} alt="SportGlam Logo" className="logo-img" />

          {error && <div className="alert-error">{error}</div>}

          <input
            type="text"
            placeholder="Teléfono, correo electrónico"
            className="form-input"
            value={emailOrPhone}
            onChange={(e) => setEmailOrPhone(e.target.value)}
            required
          />

          <input
            type="password"
            placeholder="Contraseña"
            className="form-input"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <button type="submit" className="btn-login">Iniciar sesión</button>

          <p className="or">Iniciar sesión con:</p>
          <div className="social-buttons">
            <button
              type="button"
              className="btn-social google"
              onClick={handleGoogleLogin}
            >
              <i className="fab fa-google"></i>
            </button>
            <button
              type="button"
              className="btn-social facebook"
              //onClick={handleFacebookLogin}
            >
              <i className="fab fa-facebook-f"></i>
            </button>
          </div>

          <Link to="/forgot" className="forgot">
            ¿Has olvidado tu contraseña?
          </Link>

          <div className="register-box">
            <Link to="/register" className="register">
              ¿No tienes una cuenta? ¡Regístrate!
            </Link>
          </div>
        </div>
      </div>
    </form>
  );
}

export default Login;