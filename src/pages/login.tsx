import LoginRouteWrapper from '@/components/wrappers/login-route-wrapper'
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
      <LoginRouteWrapper>
        <LoginIndexContainer />
      </LoginRouteWrapper>
    </>
  )
}

export default Login