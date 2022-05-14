import React from 'react';
import { Routes, Route } from "react-router-dom"
import Dashboard from './components/dashboard';
import Register from './components/Register';
import Createpost from "./components/createpost";
import Home from './components/home';
import Login from './components/login';
import Logout from './components/logout';
import ProtectedRoute from './components/protectedRoute';


function App() {

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={ <Home/> } />
        <Route path="login" element={ <Login/> } />
        <Route path = "Register" element={<Register />} />
        // PROTECTED ROUTES
        <Route
          path="dashboard"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />
        <Route
          path="createform"
          element={
            <ProtectedRoute>
              <Createpost />
            </ProtectedRoute>
          }
        />
        <Route
          path="logout"
          element={
            <ProtectedRoute>
              <Logout />
            </ProtectedRoute>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
