import { Navigate, Outlet } from 'react-router-dom';
import { useAuth } from '../components/Authcontext.jsx'; 

function ProtectedRoute({ allowedRoles }) {
  const { isAuthenticated, user } = useAuth();

  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  if (allowedRoles && !allowedRoles.includes(user?.role_id)) {
    return <Navigate to="/notfound" replace />;
  }

  return <Outlet />;
}

export default ProtectedRoute;