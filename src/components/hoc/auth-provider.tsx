import { handleGet } from '@/core/api-calls/Axios';
import { setAuthCurrentUser, setAuthFirebaseLoading, setAuthIsEmailVerified, setAuthUserLoading } from '@/core/redux/reducers/auth-state-reducer/auth-state-reducer';
import { setUserData } from '@/core/redux/reducers/user-data-reducer/user-data-reducer';
import firebaseAuth from '@/firebase.config';
import { User } from 'firebase/auth';
import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';

type Props = {
  children: any
}

const AuthProvider = ({ children }: Props) => {

  const dispatch = useDispatch();

  const fetchUserDetails = async (user: User) => {
    dispatch(setAuthUserLoading(true));

    const userDetails = (await handleGet("/user/get-details-by-id", { user_id: user.uid })).data;

    dispatch(setUserData(userDetails));
    dispatch(setAuthUserLoading(false));
  };

  useEffect(() => {
    firebaseAuth.onAuthStateChanged((user) => {
      if (user && user.email && user.photoURL && user.displayName) {
        const userToDispatch = {
          email: user.email,
          photoURL: user.photoURL,
          displayName: user.displayName,
        };
        dispatch(setAuthCurrentUser(userToDispatch));
        dispatch(setAuthIsEmailVerified(user.emailVerified));
        fetchUserDetails(user);
      } else {
        dispatch(setAuthCurrentUser(null));
        dispatch(setAuthUserLoading(false));
      }
      dispatch(setAuthFirebaseLoading(false));
    });
  }, []);

  return (children)
}

export default AuthProvider