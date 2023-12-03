import { userLoginHandler } from '@/utils/auth/LoginMethods';
import { useState } from 'react'
import { useForm } from 'react-hook-form';

const useLoginIndexContainer = () => {

  const {
    control,
    handleSubmit
  } = useForm();

  const [buttonLoading, setButtonLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const loginButtonClickHandler = handleSubmit(async (data: any) => {
    setButtonLoading(true);
    setErrorMessage("");

    const loginRes = await userLoginHandler(data.email, data.password);

    if (loginRes.type !== "success") {
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
