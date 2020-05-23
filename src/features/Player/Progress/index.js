import React, { useState, useEffect, useRef } from 'react'

import * as S from './styled'

export default function () {
  return (
    <S.ProgressWrapper>
      <progress value="0.1" max="1" />
    </S.ProgressWrapper>
  )
}
