/* eslint-disable react/prop-types */
import { Navigate, Outlet } from 'react-router-dom';

const ProtectedView = ({ logged, redirect = '/singin' }) => {
  if (!logged) {
    return <Navigate to={redirect} replace />;
  }
  return <Outlet />;
};

export default ProtectedView; 
