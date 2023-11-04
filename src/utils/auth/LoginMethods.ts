import firebaseAuth from "@/firebase.config";
import { User, signInWithEmailAndPassword } from "firebase/auth";

export type loginResponse = {
  type: "success",
  user: User
} | {
  type: "failure",
  message: string,
  errCode?: string
}

export const userLoginHandler = async (email: string, password: string) => {

  if (!email) {
    const res: loginResponse = {
      type: "failure",
      message: "Please provide your email"
    }
    return res;
  }

  if (!password) {
    const res: loginResponse = {
      type: "failure",
      message: "Please provide your password"
    }
    return res;
  }

  try {
    const userCredential = await signInWithEmailAndPassword(firebaseAuth, email, password)
    const user = userCredential.user;

    const res: loginResponse = {
      type: "success",
      user: user
    }

    return res;

  } catch (error: any) {
    const errorCode = error.code;
    let errorMessage = error.message;

    if (errorCode === "auth/invalid-email") {
      errorMessage = "Please provide a valid email"
    } else if (errorCode === "auth/invalid-login-credentials") {
      errorMessage = "Invalid Credentials"
    }

    const res: loginResponse = {
      type: "failure",
      message: errorMessage,
      errCode: errorCode
    }

    return res;
  }


}