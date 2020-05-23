import React, { useContext } from 'react'

import { PlayerContext } from '@/contexts/PlayerContext'

export default function () {
  const { config } = useContext(PlayerContext)

  return (
    <div>
      <span className="title">{config.track_name}</span>
    </div>
  )
}
