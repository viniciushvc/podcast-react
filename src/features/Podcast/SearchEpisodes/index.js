import React from 'react'

import * as S from './styled'

export default function ({ episodes, onSubmit, onChange }) {
  return (
    <S.SearchWrapper onSubmit={onSubmit}>
      <div>{episodes} episodes</div>

      <S.Input type="text" placeholder="Search episodes" onChange={onChange} />
    </S.SearchWrapper>
  )
}
