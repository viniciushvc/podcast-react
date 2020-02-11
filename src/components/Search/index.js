import React from 'react'

import * as S from './styled'

export default function PodcastList({ onChange }) {
  return (
    <S.Input type="text" onChange={onChange} placeholder="Type something...." />
  )
}
