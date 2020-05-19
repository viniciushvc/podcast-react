import React from 'react'

import * as S from './styled'

export default function ({ onSubmit, onChange }) {
  return (
    <S.InputWrapper onSubmit={onSubmit}>
      <S.Input type="text" onChange={onChange} placeholder="Podcast name" />
    </S.InputWrapper>
  )
}
