import React, { memo, VFC } from 'react'
import styled from 'styled-components'

const FooterWrapper = styled.footer`
  display: flex;
  justify-content: end;
  background-color: rgb(247 244 244);
`
const FooterText = styled.p`
  font-weight: bold;
  font-size: 16px;
  padding-right: 40px;
  &:hover {
    opacity: 0.6;
    cursor: pointer;
  }
`
export const Footer: VFC = memo(() => {
  return (
    <>
      <FooterWrapper>
        <FooterText>プライバシーポリシー</FooterText>
        <FooterText>利用規約</FooterText>
        <FooterText>LampCycle</FooterText>
      </FooterWrapper>
    </>
  )
})
