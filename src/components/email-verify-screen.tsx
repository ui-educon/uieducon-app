import React from 'react'
import Button from './common/button'
import Link from 'next/link'
import { useAppSelector } from '@/core/redux/hooks'

type Props = {}

const EmailVerifyScreen = (props: Props) => {

  const currentUser = useAppSelector(state => state.authState.currentUser)

  return (
    <main className='h-[calc(100vh-72px)] flex justify-center items-center common-frame-box'>
      <div className='space-y-11 w-[580px]'>
        <p className='font-semibold text-lg bg-red-600 text-white text-center p-5 w-full'>Email Verification Pending</p>
        <div className='space-y-4'>
          <h1 className='lg:text-6xl xs:text-4xl text-2xl font-bold'>
            <span className='text-[#050C26]'>Welcome </span>
            <span className='text-[#7E3AF2]'>{currentUser?.displayName}!</span>
          </h1>
          <p className='text-gray-400 text-sm'>We&#39;ve sent a verification link to your registered email address. Please verify your email and reload this page.</p>
        </div>

        <div className='flex gap-4 flex-col'>
          <Button
            // loading={buttonLoading}
            className='w-full min-w-[242px] py-4 bg-[#7E3AF2] rounded-[4px] text-white'
          // onClick={loginButtonClickHandler}
          >
            Resend Verification Link
          </Button>
          <Link href={'/'} className='w-full min-w-[242px] py-4 border-2 border-[#7E3AF2] rounded-[4px] text-[#7E3AF2] text-center hover:bg-[#7E3AF2] hover:text-white duration-300'>Back to Home</Link>
        </div>

      </div>
    </main>
  )
}

export default EmailVerifyScreen