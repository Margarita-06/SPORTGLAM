import { useState } from 'react';
import Swal from 'sweetalert2';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../firebase';
import { db } from '../../firebase';
import { doc, setDoc } from 'firebase/firestore';
import './RegisterPage.css'; // Importa el CSS
import logo from '../../imagenes/Logo.png';

function RegisterPage() {
  const [formData, setFormData] = useState({
    nombresApellidos: '', // Combinamos nombres y apellidos en un campo
    telefono: '',
    email: '',
    ciudad: '',
    direccion: '',
    password: '',
    confirmPassword: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validaciones
    for (const key in formData) {
      if (formData[key] === '') {
        Swal.fire("Campos incompletos", "Por favor llena todos los campos.", "warning");
        return;
      }
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      Swal.fire("Correo inválido", "Escribe un correo válido.", "error");
      return;
    }

    if (formData.password !== formData.confirmPassword) {
      Swal.fire("Contraseña", "Las contraseñas no coinciden.", "error");
      return;
    }

    try {
      const userCredential = await createUserWithEmailAndPassword(auth, formData.email, formData.password);
      const user = userCredential.user;

      // Guardar datos adicionales en Firestore
      await setDoc(doc(db, 'usuarios', user.uid), {
        nombresApellidos: formData.nombresApellidos,
        telefono: formData.telefono,
        email: formData.email,
        ciudad: formData.ciudad,
        direccion: formData.direccion,
        estado: 'pendiente'
      });

      Swal.fire("¡Registro exitoso!", "Usuario registrado correctamente.", "success").then(() => {
        window.location.href = "/";
      });
    } catch (error) {
      if (error.code === 'auth/email-already-in-use') {
        Swal.fire("Error", "Este correo ya está registrado.", "error");
      } else {
        console.error(error);
        Swal.fire("Error", "No se pudo registrar el usuario.", "error");
      }
    }
  };

  return (
    <div className="register-container">
      <div className="register-box">
        <img src={logo} alt="SportGlam Logo" className="logo-img" />
        <h3 className="title">Regístrate para conocer nuestras promociones</h3>
        <form onSubmit={handleSubmit}>
          <input type="text" className="form-control" name="nombresApellidos" value={formData.nombresApellidos} onChange={handleChange} placeholder="Nombres y apellidos" />
          <input type="tel" className="form-control" name="telefono" value={formData.telefono} onChange={handleChange} placeholder="Número de teléfono" />
          <input type="email" className="form-control" name="email" value={formData.email} onChange={handleChange} placeholder="Correo electrónico" />
          <input type="text" className="form-control" name="ciudad" value={formData.ciudad} onChange={handleChange} placeholder="Ciudad" />
          <input type="text" className="form-control" name="direccion" value={formData.direccion} onChange={handleChange} placeholder="Dirección" />
          <p className="login-label">Iniciar sesión con:</p>
          <div className="or">o</div>
          <div className="social-buttons">
            <button type="button" className="btn-social google"><i className="fab fa-google"></i></button>
            <button type="button" className="btn-social facebook"><i className="fab fa-facebook-f"></i></button>
          </div>
          <a href="/" className="login-link">¿Tienes una cuenta? ENTRAR</a>
        </form>
      </div>
    </div>
  );
}

export default RegisterPage;