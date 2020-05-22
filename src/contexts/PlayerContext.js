import React, { useState, createContext, useRef } from 'react'

export const PlayerContext = createContext()

export default function ({ children }) {
  const [audioSource, setAudioSource] = useState()

  let player = useRef()

  const [playerConfig, setPlayerConfig] = useState({
    is_playing: false,
    progress: 0,
    playbackRate: 1,
    speed_mode: 1,
    track_name: '',
  })

  return (
    <PlayerContext.Provider
      value={{
        audioSource,
        setAudioSource,
        playerConfig,
        setPlayerConfig,
        player,
      }}
    >
      {children}
    </PlayerContext.Provider>
  )
}
