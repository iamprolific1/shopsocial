// AuthProvider.tsx
import React, { useState, createContext, useContext, useEffect } from "react";
import { logUserIn, checkAuthStatus, refreshAccessToken } from "../services/authService";
import Cookies from "js-cookie";

export interface User {
    id?: string; 
    firstname?: string; 
    lastname?: string;
    username?: string;
    email?: string;
}

interface AuthContextType {
    isAuthenticated: boolean;
    user: User | null;
    isLoading: boolean;
    login: (email: string, password: string) => Promise<any>;
    logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

interface AuthProviderProps {
    children: React.ReactNode;
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
    const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
    const [user, setUser] = useState<User | null>(null);
    const [isLoading, setIsLoading] = useState<boolean>(true);

  // Login function
    const login = async (email: string, password: string): Promise<any> => {
        try {
            const response = await logUserIn(email, password);
            if (response.accessToken && response.refreshToken) {
                Cookies.set("accessToken", response.accessToken, {
                secure: true,
                sameSite: "strict",
                });
                Cookies.set("refreshToken", response.refreshToken, {
                secure: true,
                sameSite: "strict",
                });
                setIsAuthenticated(true);
                setUser(response.user);
                return { message: response.message, success: true };
        } else {
            return { message: "Token error", success: false };
        }
        } catch (error: any) {
            const errorMessage = error.response?.data?.message || "Login failed";
            console.error("Login error", errorMessage);
            return { message: errorMessage, success: false };
        }
    };

    
  // Logout function
    const logout = () => {
        Cookies.remove("accessToken");
        Cookies.remove("refreshToken");
        setIsAuthenticated(false);
        setUser(null);
    };
    
  // Check auth status on component mount
    const checkAuth = async () => {
        setIsLoading(true);
        try {
            const response = await checkAuthStatus();
            setIsAuthenticated(true);
            setUser(response.user);
        } catch (error) {
            const refreshToken = Cookies.get("refreshToken");
            if (refreshToken) {
            const { accessToken, userData } = await refreshAccessToken();
            if (accessToken && userData) {
                setIsAuthenticated(true);
                setUser(userData)
            } else {
                logout();
            }
            } else {
            logout();
            }
        } finally {
            setIsLoading(false);
        }
    };

    useEffect(() => {
        checkAuth();
    }, []);

    return (
        <AuthContext.Provider
        value={{
            isAuthenticated,
            user,
            isLoading,
            login,
            logout,
        }}
        >
        {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error("useAuth must be used within an AuthProvider");
    }
    return context;
};
