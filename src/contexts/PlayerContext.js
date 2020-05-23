import React, { useState, useEffect, createContext } from 'react'

export const PlayerContext = createContext()

export default function ({ children }) {
  const player = document.getElementById('player')

  const [config, setConfig] = useState({
    is_playing: false,
    progress: 0,
    playbackRate: 1,
    speed_mode: 1,
    track_name: '',
    duration: 0,
    currentTime: 0,
    source: '',
  })

  useEffect(() => {
    if (player) {
      if (config.source) config.is_playing ? player.play() : player.pause()

      player.currentTime = config.currentTime
    }
  }, [player, config])

  return (
    <PlayerContext.Provider
      value={{
        config,
        setConfig,
        player,
      }}
    >
      {children}
    </PlayerContext.Provider>
  )
}
