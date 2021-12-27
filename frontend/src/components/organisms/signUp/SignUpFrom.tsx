import React, { memo, VFC } from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { useForm } from 'react-hook-form';

import { useSignUp } from '../../../hooks/useSignUp'
import { SignUpType } from '../../../types'
import { SubmitButton } from '../../atoms/SubmitButton';
import { LinkButton } from '../../atoms/LinkButton';

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
const LabelTag = styled.label`
  font-size: 14px;
  font-weight: bold;
`
const InputContainer = styled.div`
  padding-bottom: 25px;
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
const SignUpText = styled.p`
  text-align: center;
  border-top: 2px solid rgb(247 244 244);
  margin-top: 50px;
  padding-top: 25px;
`
export const SignUpFrom: VFC = memo(() => {

  const { signUp } = useSignUp()
  const { register, handleSubmit, formState: { errors }, } = useForm<SignUpType>();
  const onSubmit = (data: SignUpType) => signUp(data);

  return (
    <>
      <MainSection>
       <PageTitle>会員登録</PageTitle>
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
          <InputContainer>
            <LabelTag htmlFor="formPasswordConfirmation">パスワード確認</LabelTag><Span>必須</Span>
            <InputTag type="password" id="formPasswordConfirmation" placeholder='12345678' {...register("password_confirmation", { required: true })}/>
            {errors.password_confirmation && <ErrorText>もう一度入力してください</ErrorText>}
          </InputContainer>
          <InputContainer>
            <LabelTag htmlFor="formName">名前</LabelTag><Span>必須</Span>
            <InputTag id="formName" placeholder='田中太郎' {...register("name", { required: true })}/>
            {errors.name && <ErrorText>名前を入力してください</ErrorText>}
          </InputContainer>
          <InputContainer>
            <LabelTag htmlFor="formPhoneNumber">電話番号</LabelTag><Span>必須</Span>
            <InputTag id="formPhoneNumber" placeholder='09012345678(ハイフンなし)' {...register("phone_number", { required: true, pattern: /^\d{10,11}$/ })}/>
            {errors.phone_number && <ErrorText>もう一度入力してください</ErrorText>}
          </InputContainer>
          <InputContainer>
            <LabelTag htmlFor="formPostCode">郵便番号</LabelTag><Span>必須</Span>
            <InputTag id="formPostCode" placeholder='1234567(ハイフンなし)' {...register("post_code", { required: true, pattern: /^\d{7}$/ })}/>
            {errors.post_code && <ErrorText>もう一度入力してください</ErrorText>}
          </InputContainer>
          <InputContainer>
            <LabelTag htmlFor="formAddress">住所</LabelTag><Span>必須</Span>
            <InputTag id="formAddress" placeholder='福岡県福岡市早良区原３丁目１９-２５-１０１' {...register("address", { required: true })}/>
            {errors.address && <ErrorText>住所を入力してください</ErrorText>}
          </InputContainer>
          <InputContainer>
            <LabelTag htmlFor="formBuildingName">建物名</LabelTag>
            <InputTag id="formBuildingName" placeholder='ランプマンション' {...register("building_name")}/>
          </InputContainer>
          <SubmitButton value="登録" />
        </Form>
        <SignUpText>アカウントをお持ちの方</SignUpText>
        <Link to="/sign_in" style={{ color: "black", textDecoration: "none"}}>
          <LinkButton>ログインページ</LinkButton>
        </Link>
      </MainSectionContainer>
     </MainSection>
    </>
  )
})
