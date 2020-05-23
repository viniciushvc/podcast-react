import React, { useContext } from 'react'

import { Container } from '@/components/utils'

import Action from './Actions'
import Info from './Info'
import Progress from './Progress'
import Speed from './Speed'
import Volume from './Volume'

import { PlayerContext } from '@/contexts/PlayerContext'

import * as S from './styled'

export default function () {
  const { config } = useContext(PlayerContext)

  return (
    <S.PlayerWrapper>
      <Container>
        <S.PlayerFlex>
          <Action />

          <div className="info-wrapper">
            <div>
              <Info />

              <Progress />
            </div>
          </div>

          <div className="add">
            <Speed />

            <Volume />
          </div>

          <audio id="player" src={config.source} />
        </S.PlayerFlex>
      </Container>
    </S.PlayerWrapper>
  )
}
