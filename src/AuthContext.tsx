import React, { useState, useContext, ReactNode } from "react";

// Deze lijn was eerst zonder de <any | undefined>(undefined) maar toen kreeg ik een error. Dus toen was dit de fix na een paar minuten research.
const AuthContext = React.createContext<any | undefined>(undefined);

export function useAuth() {
  return useContext(AuthContext);
}

// Deze lijn was eerst zonder de : { children: ReactNode } maar toen kreeg ik een error. Dus toen was dit de fix na een paar minuten research.
export function AuthProvider({ children }: { children: ReactNode }) {
  const [loggedIn, setLoggedIn] = useState(false);
  const handleLogin = (username: string, password: string) => {
    if (username === "uncinc" && password === "letmein") {
      setLoggedIn(true);
      return true;
    } else {
      return false;
    }
  };
  const handleLogout = () => {
    setLoggedIn(false);
  };

  const authValue = {
    loggedIn,
    handleLogin,
    handleLogout,
  };

  return (
    <AuthContext.Provider value={authValue}>{children}</AuthContext.Provider>
  );
}
