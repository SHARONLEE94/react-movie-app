import React from 'react'
import styled from 'styled-components'

function LoginPage() {
  return (
    <Container>
      <Content>
        <Center>
          <LogoOne src='/images/cta-logo-one.svg'/>
          <SignUpLink>지금 가입</SignUpLink>
          <Description>
            영화에 대한 프리미어 액세스를 얻으십시오.<br/>
            디즈니 플러스 가격은 다음 주부터 1000원 인상됩니다.
          </Description>
          <LogoTwo src='/images/cta-logo-two.png'/>
        </Center>
        <BgImage />
      </Content>
    </Container>
  )
}

export default LoginPage

const Container = styled.section``
const Content = styled.div``
const Center = styled.div``
const LogoOne = styled.img``
const SignUpLink = styled.a``
const Description = styled.p``
const LogoTwo = styled.img``
const BgImage = styled.div``
