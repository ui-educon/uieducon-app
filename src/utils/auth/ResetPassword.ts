import firebaseAuth from "@/firebase.config";
import { sendPasswordResetEmail } from "firebase/auth";

export type resetPasswordResponse = {
  type: "success",
} | {
  type: "failure",
  message: string,
  errCode?: string
}

export const resetPasswordHandler = async (email: string) => {

  if (!email) {
    const res: resetPasswordResponse = {
      type: "failure",
      message: "Please provide your email"
    }
    return res;
  }

  try {
    await sendPasswordResetEmail(firebaseAuth, email);
    const res: resetPasswordResponse = {
      type: "success",
    }

    return res;
  } catch (error: any) {
    const errorCode = error.code;
    let errorMessage = error.message;

    if (errorCode === "auth/invalid-email") {
      errorMessage = "Invalid Email"
    }

    const res: resetPasswordResponse = {
      type: "failure",
      message: errorMessage,
      errCode: errorCode
    }
    return res;
  }

}