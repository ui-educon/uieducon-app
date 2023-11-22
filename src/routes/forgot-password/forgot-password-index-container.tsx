import { TextInput } from '@/components/common/text-input'
import Link from 'next/link'
import React from 'react'
import useForgotPasswordIndexContainer from './use-forgot-password-index-container'
import Button from '@/components/common/button'
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';

type Props = {}

const ForgotPasswordIndexContainer = (props: Props) => {

  const { control, forgotPasswordClickHandler, buttonLoading } = useForgotPasswordIndexContainer();

  return (
    <main className='h-[calc(100vh-72px)] flex justify-center items-center common-frame-box'>
      <div className='space-y-11'>
        <h1 className='lg:text-6xl xs:text-4xl text-2xl font-bold'>
          <span className='text-[#050C26]'>Let&#39;s </span>
          <span className='text-[#7E3AF2]'>reset </span>
          <span className='text-[#050C26]'>your password</span>
        </h1>

        <div className='w-[580px]'>
          <div className='space-y-6'>
            <TextInput
              name='email'
              control={control}
              label='Email'
              pattern={{ value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i, message: "" }}
              placeholder='something@gmail.com'
              containerClassName='flex flex-col'
              errorMessage='Please provide a valid email'
              inputClassName='py-4 px-6 border border-[#050C2680] rounded-[4px]'
              type='email'
              required
            />
          </div>
        </div>

        <div className='space-y-2'>
          <div className='flex gap-1 items-center'>
            <InfoOutlinedIcon className='w-4' />
            <p className='text-gray-700 text-xs'>We&#39;ll send you a password reset link on your registered email</p>
          </div>
          <Button
            loading={buttonLoading}
            className='w-[242px] py-4 bg-[#7E3AF2] rounded-[4px] text-white'
            onClick={forgotPasswordClickHandler}
          >
            Send Reset Link
          </Button>
        </div>

        <div className='flex flex-col gap-6'>
          <Link href={'/login'} className='text-[#7E3AF2] font-medium w-fit underline'>Login</Link>
          <Link href={'/register'} className='text-[#7E3AF2] font-medium w-fit underline'>Not a member yet?</Link>
        </div>

      </div>
    </main>
  )
}

export default ForgotPasswordIndexContainer