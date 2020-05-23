import React, { useContext } from 'react'

import { PlayerContext } from '@/contexts/PlayerContext'

export default function () {
  const { config, changeConfig } = useContext(PlayerContext)

  return (
    <div className="add">
      <input
        type="range"
        value={config.volume * 100}
        min="1"
        max="100"
        onChange={(e) => changeConfig('VOLUME', e.target.value / 100)}
      />
    </div>
  )
}
