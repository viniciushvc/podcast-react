import React, { useContext } from 'react'

import { PlayerContext } from '@/contexts/PlayerContext'

export default function () {
  const { player, config, setConfig } = useContext(PlayerContext)

  function slideVolume(value) {
    player.volume = value / 100

    setConfig({
      ...config,
      playbackRate: player.volume,
    })
  }

  return (
    <div className="add">
      <input
        type="range"
        min="1"
        max="100"
        onChange={(e) => slideVolume(e.target.value)}
      />
    </div>
  )
}
