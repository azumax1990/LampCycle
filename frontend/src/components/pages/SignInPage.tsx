import React, { memo, VFC } from 'react'
import { Header } from '../organisms/header/Header'
import { SignInForm } from '../organisms/signIn/SignInForm'
import { Footer } from '../organisms/signIn/Footer'

export const SignInPage: VFC = memo(() => {
  return (
    <>
      <Header />
      <SignInForm />
      <Footer />
    </>
  )
})