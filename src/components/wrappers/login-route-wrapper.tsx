import { useAppSelector } from '@/core/redux/hooks';
import { useRouter } from 'next/router';
import React from 'react'
import FullScreenLoader from '../Loaders/FullScreenLoader';

type Props = {
  children: any
}

const LoginRouteWrapper = ({ children }: Props) => {
  const { currentUser, userLoading } = useAppSelector(state => state.authState)
  const router = useRouter();

  if (userLoading) {
    return <FullScreenLoader />
  } else if (currentUser) {
    const routeToRedirect = sessionStorage.getItem("loginFrom") || "/"
    router.push(routeToRedirect);
    return <></>
  } else {
    return children;
  }
};

export default LoginRouteWrapper