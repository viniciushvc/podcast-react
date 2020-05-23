import React from 'react'

import * as S from './styled'

export default function ({ mt }) {
  return (
    <S.SpinnerWrapper mt={mt}>
      <div className="spin-1" />
      <div className="spin-2" />
    </S.SpinnerWrapper>
  )
}
