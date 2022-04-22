import react, { useState, createContext } from "react";
import { initializeApp } from "firebase/app";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { firebaseConfig } from "./authentication.service";

export const AuthenticationContext = createContext();

export const AuthenticationContextProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);

  const onLogin = (email, password) => {
    const auth = getAuth(app);
    const app = initializeApp(firebaseConfig);
    setIsLoading(true);
    signInWithEmailAndPassword(auth, email, password)
      .then((u) => {
        setUser(u);
        setIsLoading(false);
      })
      .catch((e) => {
        setIsLoading(false);
        const eS = e.toString();

        if (eS.includes("invalid-email")) {
          setError("Error: Invalid e-mail address");
        } else if (eS.includes("internal-error")) {
          setError("Error: Something went wrong");
        } else if (eS.includes("wrong-password")) {
          setError("Error: Incorrect password");
        } else {
          setError(eS);
        }
      });
  };
  return (
    <AuthenticationContext.Provider
      value={{
        isAuthenticated: !!user,
        user,
        isLoading,
        error,
        onLogin,
      }}
    >
      {children}
    </AuthenticationContext.Provider>
  );
};
