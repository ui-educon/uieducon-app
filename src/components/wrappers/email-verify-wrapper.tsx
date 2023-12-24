import { useAppSelector } from "@/core/redux/hooks";
import React from "react";
import FullScreenLoader from "../Loaders/FullScreenLoader";
import EmailVerifyScreen from "../email-verify-screen";

type Props = {
  children: any;
};

const EmailVerifyWrapper = ({ children }: Props) => {
  const { currentUser, userLoading, isEmailVerified } = useAppSelector(
    (state) => state.authState
  );

  if (userLoading) {
    return <FullScreenLoader />;
  } else if (currentUser && !isEmailVerified) {
    return <EmailVerifyScreen />;
  } else {
    return children;
  }
};

export default EmailVerifyWrapper;
