import { setAuthCurrentUser } from '@/core/redux/reducers/auth-state-reducer/auth-state-reducer';
import { userRegistrationHandler } from '@/utils/auth/SignupMethods';
import { useState } from 'react'
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { useDispatch } from 'react-redux';

const useRegisterIndexContainer = () => {
  const {
    control,
    handleSubmit
  } = useForm();

  const [buttonLoading, setButtonLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const dispatch = useDispatch();

  const registerButtonClickHandler = handleSubmit(async (data: any) => {

    setButtonLoading(true);
    setErrorMessage("");

    const registerRes = await userRegistrationHandler(data.email, data.password, data.name);

    if (registerRes.type === "success") {
      toast.success("You are sucessfully registered. Please verify your email by clicking on verification link mailed to your registered email address", { duration: 10000 });

      const userToDispatch = {
        email: registerRes.user.email,
        photoURL: registerRes.user.photoURL,
        displayName: registerRes.user.displayName,
      };
      dispatch(setAuthCurrentUser(userToDispatch));
    } else {
      setErrorMessage(registerRes.message)
    }

    setButtonLoading(false);

  })

  return {
    control,
    buttonLoading,
    errorMessage,
    registerButtonClickHandler
  }
}

export default useRegisterIndexContainer
