import React from 'react'

import { Container, SearchPodcasts } from '../'

import * as S from './styled'

export default function ({ onSubmit, onChange }) {
  return (
    <S.HeroWrapper>
      <Container>
        <SearchPodcasts onSubmit={onSubmit} onChange={onChange} />
      </Container>
    </S.HeroWrapper>
  )
}
