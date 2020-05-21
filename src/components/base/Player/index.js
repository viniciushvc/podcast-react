import React, { useState } from 'react'

import {
  BsFillSkipForwardFill,
  BsSkipBackwardFill,
  BsFillPlayFill,
  BsPauseFill,
  BsPlus,
  BsDash,
} from 'react-icons/bs'

import { Container } from '../../utils'

import * as S from './styled'

export default function ({
  src = 'https://nerdcast.jovemnerd.com.br/nerdcast_725_esports.mp3',
}) {
  const [player, setPlayer] = useState({
    is_playing: false,
    progress: 0,
    playbackRate: 1,
    speed_mode: 1,
  })

  let _player = React.createRef()

  function togglePlay() {
    if (player.is_playing) {
      _player.pause()
    } else {
      _player.play()
    }

    setPlayer({ ...player, is_playing: !player.is_playing })
  }

  function changeSpeed(value) {
    if (value === 'fast') {
      if (_player.playbackRate < 3) _player.playbackRate += 0.5
    } else {
      if (_player.playbackRate > 0.5) _player.playbackRate -= 0.5
    }

    console.log(_player.currentTime)

    setPlayer({ ...player, speed_mode: _player.playbackRate })
  }

  function changeTime(value) {
    if (value === 'backwards') {
      _player.currentTime -= 30
    } else if ('forward') {
      _player.currentTime += 30
    } else {
      _player.currentTime = value
    }
  }

  function slideVolume(value) {
    _player.volume = value / 100

    setPlayer({ ...player, playbackRate: _player.volume })
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
              {player.is_playing ? (
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
              <span className="title">
                NerdCast 725 - Profissionais dos eSports
              </span>

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
            {player.speed_mode}
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
          <audio ref={(ref) => (_player = ref)}>
            <source src={src} />
          </audio>
        </S.PlayerFlex>
      </Container>
    </S.PlayerWrapper>
  )
}
