import React, { VFC, memo } from 'react'
import styled from 'styled-components'
import { makers, weights } from '../../data'

import { Header } from '../organisms/header/Header'
import { SubmitButton } from '../atoms/SubmitButton' 
import { PostBike } from '../../types'
import { usePostBike } from '../../hooks/usePostBike'
import { useForm } from 'react-hook-form'

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
const Form = styled.form``
const InputContainer = styled.div`
  padding-bottom: 25px;
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

const SelectTag = styled.select`
  width: 100%;
  padding: 15px;
  margin-top: 10px;
  outline: none;
  font-size: 16px;
`
const OptionTag = styled.option`
`
const ImageTag = styled.img`
  width: 100%;
  height: 200px;
  padding-top: 20px;
`
const ResetButton = styled.button`
  margin-left: auto;
`

export const BikePost: VFC = memo(() => {
  const { onSubmitBike }           = usePostBike()
  const { register, handleSubmit } = useForm<PostBike>();
  const onSubmit = (data: PostBike) => onSubmitBike(data);

  return (
    <>
      <Header />
      <MainSection>
        <PageTitle>バイク登録</PageTitle>
        <MainSectionContainer>
          <Form onSubmit={handleSubmit(onSubmit)}>
            <InputContainer>
              <LabelTag htmlFor='name'>名前</LabelTag>
              <InputTag id='name' {...register("name")}/>
            </InputContainer>
            <InputContainer>
              <LabelTag htmlFor='maker'>メーカー</LabelTag>
              <SelectTag id='maker' {...register("maker")}>
                {makers.map((maker, index) => (
                  <OptionTag key={index} value={maker} >{maker}</OptionTag>
                  )
                )}
              </SelectTag>
            </InputContainer>
            <InputContainer>
              <LabelTag htmlFor='weight'>排気量</LabelTag>
              <SelectTag id='weight'  {...register("weight")}>
                {weights.map((weight, index) => (
                  <OptionTag key={index} value={weight}>{weight}</OptionTag>
                  )
                )}
              </SelectTag>
            </InputContainer>
            <InputContainer>
              <LabelTag htmlFor='image'>写真</LabelTag>
              <InputTag id='image' type="file"  {...register("image")}/>
            </InputContainer>
            <SubmitButton value={"登録"}  />
          </Form>
        </MainSectionContainer>
      </MainSection>
    </>
  )
})
