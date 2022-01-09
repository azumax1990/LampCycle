import React, { memo, VFC } from 'react'
import { Header } from '../organisms/header/Header'
import { SignUpFrom } from '../organisms/signUp/SignUpFrom'
import { Footer } from '../organisms/signUp/Footer'

export const SignUpPage: VFC = memo(() => {
  
  return (
    <>
     <Header />
     <SignUpFrom />
     <Footer />
    </>
  )
})
