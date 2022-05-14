import React from 'react';
import {  Navigate } from 'react-router-dom';

const ProtectedRoute = ({ children })  => {
  const auth  =localStorage.getItem('user-token')

  if (!auth) {
    return <Navigate to="/login" replace />;
  }

  return children;
};

export default ProtectedRoute;