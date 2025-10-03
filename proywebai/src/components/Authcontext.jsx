import { useState, useEffect, createContext, useContext } from "react";
import { useNavigate } from "react-router-dom";

    const AuthContext = createContext();

    export function AuthProvider({ children }) {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [loading, setLoading] = useState(true);

    useEffect(() => {

        const checkToken = () => {
        try {
            const token = localStorage.getItem("token");
            setIsAuthenticated(!!token);
        } catch (error) {
            setIsAuthenticated(false);
        } finally {
            setLoading(false);
        }
    };

    checkToken();

    
    const handleStorageChange = (event) => {
      if (event.key === "token") {
        setIsAuthenticated(!!event.newValue);
      }
    };

    window.addEventListener("storage", handleStorageChange);

    
    return () => {
      window.removeEventListener("storage", handleStorageChange);
    };
    }, []);

    
    const login = (token) => {
        localStorage.setItem("token", token);
        setIsAuthenticated(true);
    };

    
    const logout = () => {
        localStorage.removeItem("token");
        setIsAuthenticated(false);
    };

    const value = {
        isAuthenticated,
        login,
        logout,
    };
  
  
    return (
        <AuthContext.Provider value={value}>
        {!loading && children}
        </AuthContext.Provider>
        );
    }


    export function useAuth() {
    return useContext(AuthContext);
    }
