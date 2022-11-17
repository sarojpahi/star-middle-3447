import React, { createContext, useEffect, useState } from "react";
import {
  signOut,
  onAuthStateChanged,
  RecaptchaVerifier,
  signInWithPhoneNumber,
} from "firebase/auth";
import { auth } from "./Firebase";
import { useNavigate } from "react-router-dom";
const initialDetail = {
  address: "",
  email: "",
  fullname: "",
  mobile: "",
  name: "",
};
export const AuthContext = createContext();
export const UserAuthContextProvider = ({ children }) => {
  const navigate = useNavigate();
  const [user, setUser] = useState("");
  const [userDetails, setUserDetails] = useState(initialDetail);
  const [number, setNumber] = useState("");

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
  }, [user]);
  const logout = () => {
    signOut(auth);
    navigate("/");
  };
  const value = {
    user,
    setUser,
    logout,
    setUpRecapta,
    number,
    setNumber,
    setUserDetails,
    userDetails,
  };
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
