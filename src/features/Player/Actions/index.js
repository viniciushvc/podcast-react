import React, { useContext } from 'react'

import {
  BsFillSkipForwardFill,
  BsSkipBackwardFill,
  BsFillPlayFill,
  BsPauseFill,
} from 'react-icons/bs'

import { PlayerContext } from '@/contexts/PlayerContext'

export default function () {
  const { config, setConfig } = useContext(PlayerContext)

  let { player } = useContext(PlayerContext)

  function togglePlay() {
    if (config.is_playing) {
      player.pause()
    } else {
      player.play()
    }

    setConfig({
      ...config,
      is_playing: !config.is_playing,
    })
  }

  function changeTime(value) {
    if (value === 'backwards') {
      player -= 30
    } else if (value === 'forward') {
      player += 30
    } else {
      player = value
    }
  }

  return (
    <div className="actions">
      <button type="button" onClick={() => changeTime('backwards')}>
        <BsSkipBackwardFill size="20" />
      </button>
      <button type="button" onClick={togglePlay}>
        {config.is_playing ? (
          <BsPauseFill size="40" />
        ) : (
          <BsFillPlayFill size="40" />
        )}
      </button>
      <button type="button" onClick={() => changeTime('forward')}>
        <BsFillSkipForwardFill size="20" />
      </button>
    </div>
  )
}
