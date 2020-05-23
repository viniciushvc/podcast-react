import React, { useContext } from 'react'

import { BsPlus, BsDash } from 'react-icons/bs'

import { PlayerContext } from '@/contexts/PlayerContext'

export default function Speed() {
  const { config, changeConfig } = useContext(PlayerContext)

  return (
    <div>
      <button type="button" onClick={() => changeConfig('SPEED', 'slow')}>
        <BsDash size="40" />
      </button>
      {config.speed_mode}
      <button type="button" onClick={() => changeConfig('SPEED', 'fast')}>
        <BsPlus size="40" />
      </button>
    </div>
  )
}
