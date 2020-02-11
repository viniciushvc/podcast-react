import React from 'react'

import { Container } from '../'

import * as S from './styled'

export default function Logo() {
  return (
    <Container>
      <S.LogoWrapper>
        <S.LogoLink to="/">Podcast</S.LogoLink>
      </S.LogoWrapper>
    </Container>
  )
}
