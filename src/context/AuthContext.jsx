import { createContext, useState, useEffect } from "react";
import { loginUser } from "../services/api";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {

  const [user, setUser] = useState(null);

  const login = async (email, password) => {

    const res = await loginUser({
      email,
      password,
    });

    localStorage.setItem("token", res.data.access_token);

    setUser(res.data);
  };

  const logout = () => {

    localStorage.removeItem("token");
    setUser(null);
  };

  useEffect(() => {

    const token = localStorage.getItem("token");

    if (token) {
      setUser({ token });
    }

  }, []);

  return (

    <AuthContext.Provider
      value={{
        user,
        login,
        logout,
      }}
    >

      {children}

    </AuthContext.Provider>
  );
};