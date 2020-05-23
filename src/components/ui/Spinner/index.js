import React from 'react'

import * as S from './styled'

export default function ({ mt }) {
  return (
    <S.SpinnerWrapper mt={mt}>
      <div className="cube cube-2" />
      <div className="cube cube-3" />
      <div className="cube cube-4" />
      <div className="cube cube-1" />
      <div className="cube cube-2" />
      <div className="cube cube-3" />
      <div className="cube cube-0" />
      <div className="cube cube-1" />
      <div className="cube cube-2" />
    </S.SpinnerWrapper>
  )
}
