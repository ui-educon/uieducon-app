import { useAppSelector } from "@/core/redux/hooks";
import FullScreenLoader from "../Loaders/FullScreenLoader";
import { useRouter } from "next/router";

type Props = {
  children: any
}

const PrivateRouteWrapper = ({ children }: Props) => {
  const { currentUser, userLoading, isEmailVerified } = useAppSelector(state => state.authState)
  const router = useRouter();

  if (userLoading) {
    return <FullScreenLoader />
  } else if (!currentUser) {
    router.push('/login');
    return <></>
  } else if (!isEmailVerified) {
    return <div>
      Email Not Verified
      {children}
      </div>
  } else {
    return children;
  }
};

export default PrivateRouteWrapper;
