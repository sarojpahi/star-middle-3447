import React, { createContext, useEffect, useState } from "react";
import {
  signOut,
  onAuthStateChanged,
  RecaptchaVerifier,
  signInWithPhoneNumber,
} from "firebase/auth";
import { auth } from "./Firebase";
export const AuthContext = createContext();
export const UserAuthContextProvider = ({ children }) => {
  const [user, setUser] = useState("");
  const setUpRecapta = (number) => {
    const recaptchaVerifier = new RecaptchaVerifier(
      "recaptcha-container",
      { size: "invisible" },
      auth
    );
    recaptchaVerifier.render();
    return signInWithPhoneNumber(auth, number, recaptchaVerifier);
  };
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentuser) => {
      setUser(currentuser);
    });
    return () => unsubscribe();
  }, []);
  const logout = () => signOut(auth);
  const value = { user, setUser, logout, setUpRecapta };
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
