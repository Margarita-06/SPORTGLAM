import React from 'react';
import { useNavigate } from 'react-router-dom';
import './NotFound.css';

function NotFoundPage() {
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate('/');
  };

  return (
    <div className="not-found-container">
      <div className="not-found-box">
        <h1>404</h1>
        <p>¡Ups! La página que buscas no existe o fue movida.</p>
        <button className="btn-back" onClick={handleGoBack}>Volver al inicio</button>
      </div>
    </div>
  );
}

export default NotFoundPage;