import { makeNewUserInDb } from "@/core/api-calls/user/user-apis";
import firebaseAuth from "@/firebase.config";
import { User, createUserWithEmailAndPassword, sendEmailVerification, updateProfile } from "firebase/auth";

export type signUpResponse = {
  type: "success",
  user: User
} | {
  type: "failure",
  message: string,
  errCode?: string
}

export const userRegistrationHandler = async (email: string, password: string, name: string) => {
  if (!email) {
    const res: signUpResponse = {
      type: "failure",
      message: "Please provide your email"
    }
    return res;
  }

  if (!password) {
    const res: signUpResponse = {
      type: "failure",
      message: "Please provide your password"
    }
    return res;
  }

  if (!name) {
    const res: signUpResponse = {
      type: "failure",
      message: "Please provide your name"
    }
    return res;
  }

  try {
    const userCredential = await createUserWithEmailAndPassword(firebaseAuth, email, password)
    const user = userCredential.user;
    await updateProfile(user, { displayName: name, photoURL: `https://ui-avatars.com/api/?name=${name}&format=png` });
    await sendEmailVerification(user);
    await makeNewUserInDb();

    const res: signUpResponse = {
      type: "success",
      user: user
    }
    return res;
  } catch (error: any) {
    const errorCode = error.code;
    let errorMessage = error.message;

    if (errorCode === "auth/email-already-in-use") {
      errorMessage = "You have an existing account with this email";
    } else if (errorCode === "auth/invalid-email") {
      errorMessage = "Invalid Email";
    } else if (errorCode === "auth/weak-password") {
      errorMessage = "Password should be at least 6 characters";
    }

    const res: signUpResponse = {
      type: "failure",
      message: errorMessage,
      errCode: errorCode
    }

    return res
  }
}