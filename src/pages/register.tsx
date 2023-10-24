import RegisterIndexContainer from '@/routes/register/register-index-container'
import Head from 'next/head'
import React from 'react'

type Props = {}

const Register = (props: Props) => {
  return (
    <>
      <Head>
        <title>Register</title>
      </Head>

      <RegisterIndexContainer />
    </>
  )
}

export default Register