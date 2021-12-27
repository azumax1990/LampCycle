import React, { memo, VFC } from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { useForm } from 'react-hook-form'

import { useSignIn } from '../../hooks/useSignIn'
import { SignInType } from '../../types'
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