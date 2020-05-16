import React from 'react'

import * as S from './styled'

export default function PodcastList({ onSubmit, onChange }) {
  return (
    <S.InputWrapper onSubmit={onSubmit}>
      <S.Input
        type="text"
        onChange={onChange}
        placeholder="Type something...."
      />
    </S.InputWrapper>
  )
}
