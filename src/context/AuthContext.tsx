import {
  createContext,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";

type User = {
  id: number;
  username: string;
  email: string;
  role: string;
};

type AuthContextType = {
  token: string | null;
  userDTO: User | null;
  isAuthenticated: boolean;
  login: (jwtToken: string, userData: User) => void;
  logout: () => void;
};

type AuthProviderProps = {
  children: ReactNode;
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const isTokenExpired = (token: string): boolean => {
    try {
      const payload = JSON.parse(atob(token.split(".")[1]));

      return payload.exp * 1000 < Date.now();
    } catch {
      return true;
    }
  };

  const [token, setToken] = useState<string | null>(() => {
    const storedToken = localStorage.getItem("token");

    if (!storedToken) {
      return null;
    }

    if (isTokenExpired(storedToken)) {
      localStorage.removeItem("token");
      localStorage.removeItem("user");

      return null;
    }

    return storedToken;
  });

  const [user, setUser] = useState<User | null>(() => {
    const storedUser = localStorage.getItem("user");
    return storedUser ? JSON.parse(storedUser) : null;
  });

  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(!!token);

  useEffect(() => {
    if (token) {
      localStorage.setItem("token", token);

      if (user) {
        localStorage.setItem("user", JSON.stringify(user));
      }

      setIsAuthenticated(true);
    } else {
      localStorage.removeItem("token");
      localStorage.removeItem("user");

      setIsAuthenticated(false);
    }
  }, [token, user]);

  const login = (jwtToken: string, userData: User) => {
    setToken(jwtToken);
    setUser(userData);
  };

  const logout = () => {
    setToken(null);
    setUser(null);

    localStorage.removeItem("token");
    localStorage.removeItem("user");
  };

  return (
    <AuthContext.Provider
      value={{
        token,
        userDTO: user,
        isAuthenticated,
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
    throw new Error("useAuth must be used within AuthProvider");
  }

  return context;
};
