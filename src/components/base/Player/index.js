import React, { useContext, useRef } from 'react'

import {
  BsFillSkipForwardFill,
  BsSkipBackwardFill,
  BsFillPlayFill,
  BsPauseFill,
  BsPlus,
  BsDash,
} from 'react-icons/bs'

import { PlayerContext } from '@/contexts/PlayerContext'

import { Container } from '../../utils'

import * as S from './styled'

export default function () {
  const { audioSource, playerConfig, setPlayerConfig } = useContext(
    PlayerContext
  )

  let { player } = useContext(PlayerContext)

  function togglePlay() {
    if (playerConfig.is_playing) {
      player.pause()
    } else {
      player.play()
    }

    setPlayerConfig({
      ...playerConfig,
      is_playing: !playerConfig.is_playing,
    })
  }

  function changeSpeed(value) {
    if (value === 'fast') {
      if (player.playbackRate < 3) player.playbackRate += 0.5
    } else if (player.playbackRate > 0.5) {
      player.playbackRate -= 0.5
    }

    setPlayerConfig({
      ...playerConfig,
      speed_mode: player.playbackRate,
    })
  }

  function changeTime(value) {
    if (value === 'backwards') {
      player.currentTime -= 30
    } else if (value === 'forward') {
      player.currentTime += 30
    } else {
      player.currentTime = value
    }
  }

  function slideVolume(value) {
    player.volume = value / 100

    setPlayerConfig({
      ...playerConfig,
      playbackRate: player.volume,
    })
  }

  return (
    <S.PlayerWrapper>
      <Container>
        <S.PlayerFlex>
          <div className="actions">
            <button type="button" onClick={() => changeTime('backwards')}>
              <BsSkipBackwardFill size="20" />
            </button>
            <button type="button" onClick={togglePlay}>
              {playerConfig.is_playing ? (
                <BsPauseFill size="40" />
              ) : (
                <BsFillPlayFill size="40" />
              )}
            </button>
            <button type="button" onClick={() => changeTime('forward')}>
              <BsFillSkipForwardFill size="20" />
            </button>
          </div>

          <div className="info-wrapper">
            <div>
              <span className="title">{playerConfig.track_name}</span>

              <input
                type="range"
                className="time"
                min="1"
                max="100"
                onChange={(e) => changeTime(e.target.value)}
              />
            </div>
          </div>

          <div className="add">
            <button type="button" onClick={() => changeSpeed('slow')}>
              <BsDash size="40" />
            </button>
            {playerConfig.speed_mode}
            <button type="button" onClick={() => changeSpeed('fast')}>
              <BsPlus size="40" />
            </button>

            <input
              type="range"
              min="1"
              max="100"
              onChange={(e) => slideVolume(e.target.value)}
            />
          </div>

          <audio src={audioSource} ref={(ref) => (player = ref)} />
        </S.PlayerFlex>
      </Container>
    </S.PlayerWrapper>
  )
}
