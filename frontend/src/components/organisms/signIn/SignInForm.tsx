import React, { memo, VFC } from 'react'
import { useForm } from 'react-hook-form'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { useSignIn } from '../../../hooks/useSignIn'
import { SignInType } from '../../../types'
import { LinkButton } from '../../atoms/LinkButton'
import { SubmitButton } from '../../atoms/SubmitButton'

const MainSection = styled.section`
  width: 640px;
  margin: 0 auto;
  padding: 30px 0;
`
const PageTitle = styled.h1`
  text-align: center;
  margin: 0;
`
const MainSectionContainer = styled.div`
  padding: 20px 40px;
`
const Form = styled.form`
`
const Span = styled.span`
  font-size: 14px;
  font-weight: bold;
  color: #fff;
  background-color: #ff333f;
  padding: 3px;
  margin-left: 5px;
`
const ErrorText = styled.p`
  color: red;
  margin: 0;
  padding-top: 10px;
  padding-left: 10px;
`
const InputTag = styled.input`
  width: 100%;
  font-size: 14px;
  box-sizing:border-box;
  padding: 15px;
  margin-top: 10px;
  border-radius: 4px;
  border: 1px solid #9e9e9e;
  outline: none;
` 
const LabelTag = styled.label`
  font-size: 14px;
  font-weight: bold;
`
const InputContainer = styled.div`
  padding-bottom: 25px;
`
const SignInText = styled.p`
  text-align: center;
  border-top: 2px solid rgb(247 244 244);
  margin-top: 50px;
  padding-top: 25px;
`

export const SignInForm: VFC = memo(() => {
  const { signIn } = useSignIn()  
  const { register, handleSubmit, formState: { errors }, } = useForm<SignInType>();
  const onSubmit = (data: SignInType) => signIn(data);
  return (
    <>
      <MainSection>
        <PageTitle>ログイン</PageTitle>
        <MainSectionContainer>
          <Form onSubmit={handleSubmit(onSubmit)}>
            <InputContainer>
              <LabelTag htmlFor="formEmail">Eメール</LabelTag><Span>必須</Span>
              <InputTag id="formEmail" placeholder='lampcycle@gmail.com' {...register("email", { required: true, pattern: /^[A-Za-z0-9]{1}[A-Za-z0-9_.-]*@{1}[A-Za-z0-9_.-]{1,}.[A-Za-z0-9]{1,}$/ })}/>
              {errors.email && <ErrorText>もう一度入力してください</ErrorText>}
            </InputContainer>
            <InputContainer>
              <LabelTag htmlFor="formPassword">パスワード</LabelTag><Span>必須</Span>
              <InputTag type="password" id="formPassword" placeholder='123456(6文字以上)' {...register("password", { required: true, minLength: 6 })}/>
              {errors.password && <ErrorText>6文字以上で入力してください</ErrorText>}
            </InputContainer>
            <SubmitButton value="ログイン" />
          </Form>
          <SignInText>アカウントをお持ちでない方</SignInText>
          <Link to="/sign_up" style={{ color: "black", textDecoration: "none"}}>
            <LinkButton>会員登録</LinkButton>
          </Link>
        </MainSectionContainer>
      </MainSection> 
    </>
  )
})
