import React from 'react'

import { Container } from '../../utils'

import * as S from './styled'

export default function () {
  return (
    <Container>
      <S.LogoWrapper>
        <S.LogoLink to="/">Podcast</S.LogoLink>
      </S.LogoWrapper>
    </Container>
  )
}
