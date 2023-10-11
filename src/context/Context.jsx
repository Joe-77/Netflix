import { createContext, useState } from "react";
import { createNewUser, resetPass, signInUser } from "../Auth/auth";
import { useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";
import { toast } from "react-toastify";
import { auth } from "../Firebase/firebaseConfig";
import { movies } from "../data/data";


export const Context = createContext();

export const ContextProvider = ({ children }) => {
  const navigate = useNavigate();

  const mutateSignUp = createNewUser();
  const mutateSignIn = signInUser();
  const mutateReset = resetPass();

  const [isAuth, setIsAuth] = useState(localStorage.getItem("auth"));

  const signUp = (user) => {
    mutateSignUp.mutateAsync(user);
    localStorage.setItem("auth", false);
    setIsAuth(false);
  };

  const logIn = (user) => {
    mutateSignIn.mutateAsync(user, {
      onSuccess: () => {
        localStorage.setItem("auth", true);
        setIsAuth(true);
      },
    });
  };

  const resetPassword = (email) => {
    mutateReset.mutateAsync(email);
  };

  const userSignOut = async () => {
    await signOut(auth)
      .then(() => {
        localStorage.setItem("auth", false);
        setIsAuth(false);
        localStorage.clear();
        toast.success("Sign Out Successfully");
      })
      .catch(() => {
        toast.error("Sign Out Failed, try again!");
      });
  };

  return (
    <Context.Provider
      value={{ isAuth, signUp, logIn, userSignOut, resetPassword , movies }}
    >
      {children}
    </Context.Provider>
  );
};
