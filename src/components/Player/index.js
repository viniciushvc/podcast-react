import React, { useState } from 'react'

import { Container } from '../'

import * as S from './styled'

export default function () {
  const [player, setPlayer] = useState({
    is_playing: false,
    progress: 0,
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
    _player.playbackRate = value

    setPlayer({ ...player, speed_mode: value })
  }

  function volumeUp() {
    if (_player.volume < 1) {
      _player.volume += 0.1

      setPlayer({ ...player, speed_mode: _player.volume })
    }
  }

  function volumeDown() {
    if (_player.volume > 0.1) {
      _player.volume -= 0.1

      setPlayer({ ...player, speed_mode: _player.volume })
    }
  }

  return (
    <S.PlayerWrapper>
      <Container>
        <button type="button">Backwards 30</button>
        <button type="button" onClick={togglePlay}>
          Play
        </button>
        <button type="button">Forward 30</button>
        speed
        <button type="button" onClick={() => changeSpeed(0.5)}>
          .5
        </button>
        <button type="button" onClick={() => changeSpeed(1)}>
          1
        </button>
        <button type="button" onClick={() => changeSpeed(1.5)}>
          1.5
        </button>
        <button type="button" onClick={() => changeSpeed(2)}>
          2
        </button>
        volume
        <button type="button" onClick={() => volumeDown()}>
          -
        </button>
        <button type="button" onClick={() => volumeUp()}>
          +
        </button>
        <div style={{ width: player.progress * 100 + '%' }}></div>
        <audio ref={(ref) => (_player = ref)}>
          <source src="https://nerdcast.jovemnerd.com.br/nerdcast_725_esports.mp3" />
        </audio>
      </Container>
    </S.PlayerWrapper>
  )
}
