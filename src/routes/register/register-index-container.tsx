import { TextInput } from '@/components/common/text-input';
import React from 'react'
import useRegisterIndexContainer from './use-register-index-container';
import Button from '@/components/common/button';
import Link from 'next/link';

type Props = {}

const RegisterIndexContainer = (props: Props) => {

  const { buttonLoading, control, errorMessage, registerButtonClickHandler } = useRegisterIndexContainer()

  return (
    <main className='h-[calc(100vh-72px)] flex justify-center items-center common-frame-box'>
      <div className='space-y-11'>
        <h1 className='lg:text-6xl xs:text-4xl text-2xl font-bold'>
          <span className='text-[#050C26]'>Tell us about </span>
          <span className='text-[#7E3AF2]'>yourself!</span>
        </h1>

        <div className='w-[580px]'>
          <div className='space-y-6'>
            <TextInput
              name='name'
              control={control}
              label='Name'
              placeholder='Your name'
              containerClassName='flex flex-col'
              inputClassName='py-4 px-6 border border-[#050C2680] rounded-[4px]'
              type='text'
              required
            />
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
            onClick={registerButtonClickHandler}
          >
            Register
          </Button>
        </div>

        <div className='flex flex-col gap-6'>
          <Link href={'/login'} className='text-[#7E3AF2] font-medium w-fit underline'>Already a member? Login</Link>
        </div>

      </div>
    </main>
  )
}

export default RegisterIndexContainer