import { useAppSelector } from "@/core/redux/hooks";
import FullScreenLoader from "../Loaders/FullScreenLoader";
import { useRouter } from "next/router";
import EmailVerifyScreen from "../email-verify-screen";

type Props = {
  children: any
}

const PrivateRouteWrapper = ({ children }: Props) => {
  const { currentUser, userLoading, isEmailVerified } = useAppSelector(state => state.authState)
  const router = useRouter();

  if (userLoading) {
    return <FullScreenLoader />
  } else if (!currentUser) {
    sessionStorage.setItem("loginFrom", router.asPath)
    router.push('/login');
    return <></>
  } else if (!isEmailVerified) {
    return <EmailVerifyScreen />
  } else {
    return children;
  }
};

export default PrivateRouteWrapper;
