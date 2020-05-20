import React, { useState } from 'react'

import { Container } from '../'

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
        <button type="button" onClick={() => changeTime('backwards')}>
          Backwards 30
        </button>
        <button type="button" onClick={togglePlay}>
          {player.is_playing ? 'Pause' : 'Play'}
        </button>
        <button type="button" onClick={() => changeTime('forward')}>
          Forward 30
        </button>
        <button type="button" onClick={() => changeSpeed('slow')}>
          -
        </button>
        speed: {player.speed_mode}
        <button type="button" onClick={() => changeSpeed('fast')}>
          +
        </button>
        time
        <input
          type="range"
          min="1"
          max="100"
          onChange={(e, b) => changeTime(e.target.value)}
        />
        volume
        <input
          type="range"
          min="1"
          max="100"
          onChange={(e, b) => slideVolume(e.target.value)}
        />
        <div style={{ width: player.progress * 100 + '%' }}></div>
        <audio ref={(ref) => (_player = ref)}>
          <source src={src} />
        </audio>
      </Container>
    </S.PlayerWrapper>
  )
}
