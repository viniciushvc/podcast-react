import React, { useContext } from 'react'

import {
  BsFillSkipForwardFill,
  BsSkipBackwardFill,
  BsFillPlayFill,
  BsPauseFill,
} from 'react-icons/bs'

import { PlayerContext } from '@/contexts/PlayerContext'

export default function () {
  const { config, changeConfig } = useContext(PlayerContext)

  return (
    <div className="actions">
      <button type="button" onClick={() => changeConfig('TIME', 'backwards')}>
        <BsSkipBackwardFill size="20" />
      </button>
      <button type="button" onClick={() => changeConfig('TOGGLE_PLAY')}>
        {config.is_playing ? (
          <BsPauseFill size="40" />
        ) : (
          <BsFillPlayFill size="40" />
        )}
      </button>
      <button type="button" onClick={() => changeConfig('TIME', 'forward')}>
        <BsFillSkipForwardFill size="20" />
      </button>
    </div>
  )
}
