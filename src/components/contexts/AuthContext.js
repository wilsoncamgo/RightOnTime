import React, { useContext, useState, useEffect } from "react";
import { auth } from "../../firebase";

const AuthContext = React.createContext();
export function useAuth() {
  return useContext(AuthContext);
}
export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState();
  function signup(email, password) {
    return auth.createUserWithEmailAndPassword(email, password);
  }
  function signupanon(){
      return auth.signInAnonymously();
  }
  function login(email,password){
    return auth.signInWithEmailAndPassword(email,password);
  }
  function signout(){
    return auth.signOut();
  }
  useEffect(() => {
    const unsuscribe=auth.onAuthStateChanged((user) => {
      setCurrentUser(user);
    })
    return unsuscribe
  }, []);

  const value = {
    currentUser,
    signup,
    signupanon,
    login,
    signout
  };
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
