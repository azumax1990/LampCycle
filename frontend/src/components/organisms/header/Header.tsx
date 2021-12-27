import React, { VFC, memo } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const HeaderWrapper = styled.header`
  border-bottom: 1px solid rgb(247 244 244);
`
const Container = styled.div`
  padding: 20px 40px;
`
const AppTitle = styled.h2`
  margin: 0;
`
export const Header: VFC = memo(() => {
  return (
    <>
     <HeaderWrapper>
       <Container>
         <Link to="/" style={{ color: "black", textDecoration: "none"}}>
          <AppTitle>
            LampCycle
          </AppTitle>
         </Link>
       </Container>
     </HeaderWrapper> 
    </>
  )
})
