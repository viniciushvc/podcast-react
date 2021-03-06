import React from 'react'

import * as S from './styled'

import { ThemeSwitcher } from '../../base'
import { Container } from '../../utils'

export default function () {
  return (
    <S.HeaderWrapper>
      <Container>
        <S.HeaderContent>
          <S.HeaderLink to="/">Podcasts</S.HeaderLink>

          <S.Spacer />

          <ThemeSwitcher />
        </S.HeaderContent>
      </Container>
    </S.HeaderWrapper>
  )
}
