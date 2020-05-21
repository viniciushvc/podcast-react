import React from 'react'

import { Container } from '../../utils'

import * as S from './styled'

export default function () {
  return (
    <S.FooterWrapper>
      <Container>
        Made with React and <strong>♥</strong> by
        <S.Link
          href="http://github.com/viniciushvc"
          target="_blank"
          rel="noopener noreferrer"
        >
          &nbsp;Vinicius Vicentini
        </S.Link>
      </Container>
    </S.FooterWrapper>
  )
}
