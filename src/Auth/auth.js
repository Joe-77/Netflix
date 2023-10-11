// Sign Up a new user

import {
  createUserWithEmailAndPassword,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { useMutation } from "react-query";
import { auth, db } from "../Firebase/firebaseConfig";
import { doc, setDoc } from "firebase/firestore";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { getError } from "../utility/firebaseError";

export const createNewUser = () => {
  const navigation = useNavigate();

  const createUser = async (user) => {
    const email = user.email;
    const name = user.userName;
    const password = user.password;

    await createUserWithEmailAndPassword(auth, email, password).then(
      (userCredential) => {
        const user = userCredential.user;
        const userRef = doc(db, "users", user.uid);

        updateProfile(user, {
          displayName: name,
        });

        setDoc(userRef, {
          id: user.uid,
          displayName: name,
          email: email,
        });
      }
    );
  };

  return useMutation({
    mutationFn: (user) => createUser(user),
    onSuccess: () => {
      toast.success("Created Account Successfully");
      navigation("/login");
    },
    onError: (error) => {
      const errorMsg = getError(error.message);
      toast.error(errorMsg + " " + "!");
    },
  });
};

// Login

export const signInUser = () => {
  const navigate = useNavigate();
  const login = async (user) => {
    const email = user.email;
    const password = user.password;

    await signInWithEmailAndPassword(auth, email, password);
  };

  return useMutation({
    mutationFn: (user) => login(user),
    onSuccess: () => {
      toast.success("Login Successfully");
      navigate("/");
    },
    onError: (error) => {
      const errorMsg = getError(error.message);
      toast.error(errorMsg);
    },
  });
};

// Reset Password

export const resetPass = () => {
  const navigate = useNavigate();
  const resetPassword = (email) => {
    sendPasswordResetEmail(auth, email)
      .then(() => {
        toast.success("Check your mail to change new password");
        navigate("/login");
      })
      .catch((error) => {
        const errorMsg = getError(error.message);
        toast.error(errorMsg);
      }); 
  };

  return useMutation({
    mutationFn: (email) => resetPassword(email),
  });
};
