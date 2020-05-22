import React from 'react'

import PlayerContext from '@/contexts/PlayerContext'

import Routes from './routes'

import GlobalStyle from './styles/global'

export default function () {
  return (
    <>
      <GlobalStyle />

      <PlayerContext>
        <Routes />
      </PlayerContext>
    </>
  )
}
