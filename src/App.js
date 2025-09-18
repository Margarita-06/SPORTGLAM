import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import LoginPage from './pages/LoginPage/LoginPage';
import RegisterPage from './pages/RegisterPage/RegisterPage';
import ForgotPasswordPage from './pages/ForgotPasswordPage/ForgotPasswordPage';
import ResetPasswordPage from './pages/ForgotPasswordPage/ForgotPasswordPage';
import DashboardPage from './pages/DashboardPage/DashboardPage';
import FeaturedProducts from './pages/DashboardPage/FeaturedProducts';
import UsersPages from './pages/UsersPages/UserPages';
import NotFoundPage from './pages/Components/NotFound';
import ProtectedRoute from './pages/Components/ProtectedRoute';
import FeaturedWatches from './pages/DashboardPage/FeaturedWatches';
import WatchDetail from './pages/DashboardPage/WatchDetail';
import ProductDetail from "./pages/DashboardPage/ProductDetail";

// 👇 Importa camisetas
import FeaturedShirts from './pages/DashboardPage/FeaturedShirts';
import ShirtsDetail from './pages/DashboardPage/ShirtsDetail';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Redirección a la página de login por defecto */}
        <Route path="/" element={<Navigate to="/login" replace />} />
        
        {/* Rutas públicas */}
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/reset-password" element={<ResetPasswordPage />} />
        <Route path="/forgot" element={<ForgotPasswordPage />} />

        {/* Rutas privadas */}
        <Route path="/dashboard" element={<ProtectedRoute><DashboardPage /></ProtectedRoute>} />
        <Route path="/featuredproducts" element={<ProtectedRoute><FeaturedProducts /></ProtectedRoute>} /> 
        <Route path="/users" element={<ProtectedRoute><UsersPages /></ProtectedRoute>} />

        {/* Relojes */}
        <Route path="/featuredwatches" element={<ProtectedRoute><FeaturedWatches /></ProtectedRoute>} /> 
        <Route path="/watch" element={<ProtectedRoute><WatchDetail /></ProtectedRoute>} /> 
        <Route path="/product/:id" element={<ProductDetail />} />

        {/* Camisetas 👕 */}
        <Route path="/featuredshirts" element={<ProtectedRoute><FeaturedShirts /></ProtectedRoute>} />
        <Route path="/shirts/:id" element={<ProtectedRoute><ShirtsDetail /></ProtectedRoute>} />

        {/* Página 404 */}
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
