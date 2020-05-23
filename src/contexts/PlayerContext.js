import React, { useState, useEffect, createContext } from 'react'

import { DEFAULT_SETTINGS, changeSettings } from '@/utils/player'

export const PlayerContext = createContext()

export default function ({ children }) {
  const player = document.getElementById('player')

  const [config, setConfig] = useState(DEFAULT_SETTINGS)

  function changeConfig(type, value) {
    const newConfig = changeSettings(type, value, config)

    setConfig(newConfig)
  }

  useEffect(() => {
    if (player) {
      config.paused && player.pause()

      config.is_playing && player.play()

      player.currentTime = config.currentTime

      player.volume = config.volume

      player.playbackRate = config.playbackRate
    }

    console.log(player, config)
  }, [config])

  return (
    <PlayerContext.Provider
      value={{
        config,
        changeConfig,
      }}
    >
      {children}
    </PlayerContext.Provider>
  )
}
