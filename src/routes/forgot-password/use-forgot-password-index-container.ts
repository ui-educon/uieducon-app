import { resetPasswordHandler } from '@/utils/auth/ResetPassword';
import { useRouter } from 'next/router';
import { useState } from 'react'
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';

const useForgotPasswordIndexContainer = () => {

  const {
    control,
    handleSubmit
  } = useForm();

  const router = useRouter();

  const [buttonLoading, setButtonLoading] = useState(false);

  const forgotPasswordClickHandler = handleSubmit(async (data: any) => {
    setButtonLoading(true);

    const res = await resetPasswordHandler(data.email);

    if (res.type === "success") {
      router.push('/login')
      toast.success("We've emailed you a reset password link", { duration: 10000 });
    } else {
      toast.error(res.message);
    }

    setButtonLoading(false);
  })

  return { control, forgotPasswordClickHandler, buttonLoading }
}

export default useForgotPasswordIndexContainer
