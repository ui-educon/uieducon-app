import ForgotPasswordIndexContainer from '@/routes/forgot-password/forgot-password-index-container'
import Head from 'next/head'
import React from 'react'

type Props = {}

const ForgotPassword = (props: Props) => {
  return (
    <>
      <Head>
        <title>Forgot Password</title>
      </Head>
      <ForgotPasswordIndexContainer />
    </>
  )
}

export default ForgotPassword