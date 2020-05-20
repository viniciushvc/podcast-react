import React from 'react'

import * as S from './styled'

export default function ({ episodes = 'x' }) {
  return (
    <S.SearchWrapper>
      <p>{episodes} episodes</p>

      <S.Input type="text" placeholder="Search episodes" />
    </S.SearchWrapper>
  )
}
