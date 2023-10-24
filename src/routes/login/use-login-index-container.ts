import { userLoginHandler } from '@/utils/auth/LoginMethods';
import { useRouter } from 'next/router';
import React, { useState } from 'react'
import { useForm } from 'react-hook-form';

const useLoginIndexContainer = () => {

  const {
    control,
    handleSubmit
  } = useForm();

  const router = useRouter();

  const [buttonLoading, setButtonLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const loginButtonClickHandler = handleSubmit(async (data: any) => {
    setButtonLoading(true);
    setErrorMessage("");

    const loginRes = await userLoginHandler(data.email, data.password);

    if (loginRes.type === "success") {
      router.push('/')
    } else {
      setErrorMessage(loginRes.message)
    }

    setButtonLoading(false);
  })

  return {
    control,
    loginButtonClickHandler,
    errorMessage,
    buttonLoading
  }
}

export default useLoginIndexContainer
