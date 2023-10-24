import Button from '@/components/common/button';
import { TextInput } from '@/components/common/text-input';
import React from 'react'
import useLoginIndexContainer from './use-login-index-container';
import Link from 'next/link';

type Props = {}

const LoginIndexContainer = (props: Props) => {

  const {
    control,
    loginButtonClickHandler,
    errorMessage,
    buttonLoading
  } = useLoginIndexContainer()

  return (
    <main className='h-[calc(100vh-72px)] flex justify-center items-center common-frame-box'>
      <div className='space-y-11 w-[580px]'>
        <h1 className='lg:text-6xl xs:text-4xl text-2xl font-bold'>
          <span className='text-[#050C26]'>Welcome </span>
          <span className='text-[#7E3AF2]'>Back!</span>
        </h1>

        <div>
          <div className='space-y-6'>
            <TextInput
              name='email'
              control={control}
              label='Email'
              placeholder='something@gmail.com'
              containerClassName='flex flex-col'
              inputClassName='py-4 px-6 border border-[#050C2680] rounded-[4px]'
              type='email'
              required
            />
            <TextInput
              name='password'
              control={control}
              label='Password'
              placeholder='********'
              containerClassName='flex flex-col'
              inputClassName='py-4 px-6 border border-[#050C2680] rounded-[4px]'
              type='password'
              required
            />
          </div>
          {errorMessage && <p className='text-xs mt-2 text-red-500'>{errorMessage}</p>}
        </div>

        <div>
          <Button
            loading={buttonLoading}
            className='w-[242px] py-4 bg-[#7E3AF2] rounded-[4px] text-white'
            onClick={loginButtonClickHandler}
          >
            Login
          </Button>
        </div>

        <div className='flex flex-col gap-6'>
          <Link href={'/forgot-password'} className='text-[#7E3AF2] font-medium w-fit underline'>Forgot your password?</Link>
          <Link href={'/register'} className='text-[#7E3AF2] font-medium w-fit underline'>Not a member yet?</Link>
        </div>

      </div>
    </main>
  )
}

export default LoginIndexContainer