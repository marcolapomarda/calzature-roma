import {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from "react";

type AuthErrorType = "user_not_registered" | "auth_required";

type AuthError = {
  type: AuthErrorType;
  message?: string;
} | null;

type AuthContextValue = {
  isLoadingAuth: boolean;
  isLoadingPublicSettings: boolean;
  authError: AuthError;
  navigateToLogin: () => void;
};

const AuthContext = createContext<AuthContextValue | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [isLoadingAuth, setIsLoadingAuth] = useState(true);
  const [isLoadingPublicSettings, setIsLoadingPublicSettings] =
    useState(true);
  const [authError] = useState<AuthError>(null);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsLoadingAuth(false);
      setIsLoadingPublicSettings(false);
    }, 300);
    return () => clearTimeout(timeout);
  }, []);

  const navigateToLogin = () => {
    // In questa versione statica non abbiamo una pagina di login.
    // Manteniamo la firma per compatibilità con il codice generato.
  };

  const value: AuthContextValue = {
    isLoadingAuth,
    isLoadingPublicSettings,
    authError,
    navigateToLogin,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth(): AuthContextValue {
  const ctx = useContext(AuthContext);
  if (!ctx) {
    throw new Error("useAuth deve essere usato dentro AuthProvider");
  }
  return ctx;
}

