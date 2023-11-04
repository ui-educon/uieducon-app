import { userRegistrationHandler } from '@/utils/auth/SignupMethods';
import { useRouter } from 'next/router';
import React, { useState } from 'react'
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';

const useRegisterIndexContainer = () => {
  const {
    control,
    handleSubmit
  } = useForm();

  const router = useRouter();

  const [buttonLoading, setButtonLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const registerButtonClickHandler = handleSubmit(async (data: any) => {

    setButtonLoading(true);
    setErrorMessage("");

    const registerRes = await userRegistrationHandler(data.email, data.password, data.name);

    if (registerRes.type === "success") {
      router.push('/')
      toast.success("You are sucessfully registered. Please verify your email by clicking on verification link mailed to your registered email address", { duration: 10000 })
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
