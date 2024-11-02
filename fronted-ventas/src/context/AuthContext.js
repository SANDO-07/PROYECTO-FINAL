import React, { createContext, useState, useEffect } from 'react';
import { login as apiLogin, logout as apiLogout } from '../services/authService';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const login = async (credentials) => {
    const response = await apiLogin(credentials);
    setUser(response.data.user);
  };

  const logout = async () => {
    await apiLogout();
    setUser(null);
  };

  useEffect(() => {
    // Aquí podrías verificar el estado de sesión en el backend o en localStorage
  }, []);

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
