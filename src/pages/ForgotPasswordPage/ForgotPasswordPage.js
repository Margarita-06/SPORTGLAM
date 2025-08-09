import { useState } from 'react';
import Swal from 'sweetalert2';
import { auth } from '../../firebase';
import { sendPasswordResetEmail } from 'firebase/auth';
import './ForgotPasswordPage.css'; // Importa el CSS
import logo from '../../imagenes/Logo.png';

function ForgotPasswordPage() {
  const [email, setEmail] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!email) {
      Swal.fire("Campo vacío", "Por favor ingresa tu correo.", "warning");
      return;
    }

    const formatoCorreo = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formatoCorreo.test(email)) {
      Swal.fire("Correo inválido", "Por favor escribe un correo válido.", "error");
      return;
    }

    try {
      await sendPasswordResetEmail(auth, email);
      Swal.fire({
        title: "¡Revisa tu correo!",
        html: `Te hemos enviado instrucciones para recuperar tu contraseña, tienes 60 minutos. <strong>¡Podría estar en SPAM!</strong>`,
        icon: "success",
        timer: 5000,
        showConfirmButton: false
      });
      setEmail('');
    } catch (error) {
      console.error("Error Firebase:", error.code, error.message);
      Swal.fire("Error", error.message, "error");
    }
  };

  const handleGoBack = () => {
    window.location.href = '/';
  };

  const handleCreateAccount = () => {
    window.location.href = '/register';
  };

  return (
    <div className="forgot-password-container">
      <div className="forgot-password-box">
        <img src={logo} alt="SportGlam Logo" className="logo-img" />
        <i className="fas fa-lock lock-icon"></i>
        <p className="message">
          ¿Tienes problemas para entrar? <br />
          Introduce tu correo electrónico o número de <br />
          teléfono asociado a tu cuenta y te enviaremos un <br />
          enlace para que vuelvas a entrar en tu cuenta.
        </p>
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            className="form-control"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Correo electrónico"
          />
          <button type="submit" className="btn-submit">Enviar enlace de acceso</button>
        </form>
        <div className="or">o</div>
        <button type="button" className="btn-secondary" onClick={handleCreateAccount}>
          Crear cuenta nueva
        </button>
        <button type="button" className="btn-secondary" onClick={handleGoBack}>
          Volver al inicio de sesión
        </button>
      </div>
    </div>
  );
}

export default ForgotPasswordPage;