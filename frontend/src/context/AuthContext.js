import React, { createContext, useState, useEffect } from "react";
import { jwtDecode } from "jwt-decode";
import authService from "../services/authService";

export const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(() => localStorage.getItem("token"));

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      try {
        const decoded = jwtDecode(token);
        // Check if token is expired
        if (decoded.exp * 1000 > Date.now()) {
          setUser({ id: decoded.id, ...decoded });
          setToken(token);
        } else {
          setUser(null);
          setToken(null);
          localStorage.removeItem("token");
        }
      } catch (err) {
        setUser(null);
        setToken(null);
        localStorage.removeItem("token");
      }
    } else {
      setUser(null);
      setToken(null);
    }
  }, []);

  const login = async (email, password) => {
    const res = await authService.login(email, password);
    if (res.success) {
      setUser(res.user || { id: jwtDecode(res.token).id });
      setToken(res.token);
      localStorage.setItem("token", res.token);
    }
    return res;
  };

  const register = async (email, password, displayName) => {
    const res = await authService.register(email, password, displayName);
    if (res.success) {
      setUser(res.user || { id: jwtDecode(res.token).id });
      setToken(res.token);
      localStorage.setItem("token", res.token);
    }
    return res;
  };

  const logout = () => {
    setUser(null);
    setToken(null);
    localStorage.removeItem("token");
  };

  return (
    <AuthContext.Provider value={{ user, token, login, register, logout }}>
      {children}
    </AuthContext.Provider>
  );
}
