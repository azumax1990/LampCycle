import React, { memo, useContext, VFC } from 'react'
import styled from 'styled-components';

// Reactスライダー
import Slick from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// 画像インポート
import SrFirst from '../../images/sr400.jpeg'
import SrSecond from '../../images/sr400-second.jpeg'
import SrFourth from '../../images/sr400-forth.jpeg'
import LampImage from '../../images/lamp_cycle.jpeg'
import ShirtImage from '../../images/lamp-t.jpeg'
import ShirtsImage from '../../images/lamp-tunagi.jpeg'
import { Link } from 'react-router-dom';
import { LoginUserContext } from '../../App';
import { useSignOut } from '../../hooks/useSignOut';

const Header = styled.header`
  border-bottom: 1px solid rgb(247 244 244);
`
const Container = styled.div`
  padding: 20px 40px;
  display: flex;
  justify-content: space-between;
`
const AppTitle = styled.h2`
  margin: 0;
`
const HeaderItemsWrapper = styled.div`
  display: flex;
`
const HeaderItem = styled.p`
  margin: 0 0 0 15px;
  padding: 7px;
  &:hover {
    background-color: rgb(247 244 244);
    cursor: pointer;
  }
`
const ImagesWrapper = styled.div`
  padding: 40px 0 60px 0;
  width: 700px;
  height: 400px;
  margin: 0 auto;
`
const TopBackImage = styled.div`
  background-image: url(${SrFourth});
  background-size: cover;
  background-position: center bottom;
  width: 700px;
  height: 400px;
`
const TextContainer = styled.div`
  padding: 20px 40px;
`
const ImageText = styled.p`
 color: #fff;
 font-weight: bold;
 font-size: 20px;
`
const ImageMiddleText = styled.p`
 color: #fff;
 font-weight: bold;
 font-size: 40px;
 margin: 0;
`

const TopImage = styled.img`
  width: 700px;
  height: 400px;
`
const MiddleSection = styled.section`
  background-color: rgb(247 244 244);
`
const MiddleContainer = styled.div`
  padding: 20px 100px;
`
const ProductTitle = styled.h2`
  font-weight: bold;
  font-size: 20px;
  padding-bottom: 10px;
`
const ProductsWrapper = styled.div`
  display: flex;
`
const ProductContainer = styled.div`
  width: 18%;
  margin: 0 10px;
  background-color: #fff;
  &:hover {
    cursor: pointer;
  }
`
const ProductImg = styled.img`
  width: 100%;
  height: 250px;
`
const ProductName = styled.p`
  font-size: 16px;
  padding-left: 10px;
`
const ProductPrice = styled.p`
  font-size: 18px;
  padding-left: 10px;
  font-weight: bold;
`

export const TopPage: VFC = memo(() => {
  const { currentUser } = useContext(LoginUserContext)
  const { signOut }     = useSignOut()
  
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    autoplay:	true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrow:	true
  };
  

  return (
    <>
      <Header>
        <Container>
          <AppTitle>LampCycle</AppTitle>
          <HeaderItemsWrapper>
            {!currentUser ? (
              <>
                <Link to="/sign_up" style={{ color: "black", textDecoration: "none"}}>
                  <HeaderItem>新規登録</HeaderItem>
                </Link>
                <Link to="/sign_in" style={{ color: "black", textDecoration: "none"}}>
                  <HeaderItem>ログイン</HeaderItem>
                </Link>
              </>
              )
              : (
                <>
                  <HeaderItem>{currentUser.name}</HeaderItem>
                  <HeaderItem onClick={signOut}>ログアウト</HeaderItem>
                </>
              )
            }
          </HeaderItemsWrapper>
        </Container>  
      </Header>
      <ImagesWrapper>
        <Slick {...settings}>
          <TopImage src={LampImage}></TopImage>
          <TopBackImage>
            <TextContainer>
              <ImageText>カスタムバイクの販売からレンタルまで</ImageText>
              <ImageMiddleText>当日返却2980円〜</ImageMiddleText>
            </TextContainer>
          </TopBackImage>
          <TopImage src={SrFirst} />
          <TopImage src={SrSecond}></TopImage>
          <TopImage src={ShirtImage}></TopImage>
          <TopImage src={ShirtsImage}></TopImage>
        </Slick>
      </ImagesWrapper>
      <MiddleSection>
        <MiddleContainer>
          <ProductTitle>レンタルバイク</ProductTitle>
          <ProductsWrapper>
            <ProductContainer>
              <ProductImg src={'https://source.unsplash.com/random'}/>
              <ProductName>SR400</ProductName>
              <ProductPrice>¥2980~</ProductPrice>
            </ProductContainer>
            <ProductContainer>
              <ProductImg src={'https://source.unsplash.com/random'}/>
            </ProductContainer>
            <ProductContainer>
              <ProductImg src={'https://source.unsplash.com/random'}/>
            </ProductContainer>
            <ProductContainer>
              <ProductImg src={'https://source.unsplash.com/random'}/>
            </ProductContainer>
            <ProductContainer>
              <ProductImg src={'https://source.unsplash.com/random'}/>
            </ProductContainer>
          </ProductsWrapper>
        </MiddleContainer>
        <MiddleContainer>
          <ProductTitle>レンタルバイク</ProductTitle>
          <ProductsWrapper>
            <ProductContainer>
              <ProductImg src={'https://source.unsplash.com/random'}/>
              <ProductName>SR400</ProductName>
              <ProductPrice>¥2980~</ProductPrice>
            </ProductContainer>
            <ProductContainer>
              <ProductImg src={'https://source.unsplash.com/random'}/>
            </ProductContainer>
            <ProductContainer>
              <ProductImg src={'https://source.unsplash.com/random'}/>
            </ProductContainer>
            <ProductContainer>
              <ProductImg src={'https://source.unsplash.com/random'}/>
            </ProductContainer>
            <ProductContainer>
              <ProductImg src={'https://source.unsplash.com/random'}/>
            </ProductContainer>
          </ProductsWrapper>
        </MiddleContainer>
      </MiddleSection>
    </>
  )
})
