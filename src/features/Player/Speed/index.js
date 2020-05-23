import React, { useContext } from 'react'

import { BsPlus, BsDash } from 'react-icons/bs'

import { PlayerContext } from '@/contexts/PlayerContext'

export default function Speed() {
  const { config, setConfig } = useContext(PlayerContext)

  let { player } = useContext(PlayerContext)

  function changeSpeed(value) {
    if (value === 'fast') {
      if (player.playbackRate < 3) player.playbackRate += 0.5
    } else if (player.playbackRate > 0.5) {
      player.playbackRate -= 0.5
    }

    setConfig({
      ...config,
      speed_mode: player.playbackRate,
    })
  }

  return (
    <div>
      <button type="button" onClick={() => changeSpeed('slow')}>
        <BsDash size="40" />
      </button>
      {config.speed_mode}
      <button type="button" onClick={() => changeSpeed('fast')}>
        <BsPlus size="40" />
      </button>
    </div>
  )
}
