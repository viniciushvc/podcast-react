import React from 'react'

import { Container, Search } from '../'

import * as S from './styled'

export default function ({ onSubmit, onChange }) {
  return (
    <S.HeroWrapper>
      <Container>
        <Search onSubmit={onSubmit} onChange={onChange} />
      </Container>
    </S.HeroWrapper>
  )
}
