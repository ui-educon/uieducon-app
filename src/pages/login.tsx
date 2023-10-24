import LoginIndexContainer from '@/routes/login/login-index-container'
import Head from 'next/head'
import React from 'react'

type Props = {}

const Login = (props: Props) => {
  return (
    <>
      <Head>
        <title>Login</title>
      </Head>
      <LoginIndexContainer />
    </>
  )
}

export default Login