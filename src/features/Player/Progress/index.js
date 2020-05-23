import React, { useContext } from 'react'

import { PlayerContext } from '@/contexts/PlayerContext'

import * as S from './styled'

export default function () {
  let { config, setConfig } = useContext(PlayerContext)

  const curPercentage = (config.currentTime / config.duration) * 100

  function calcClickedTime(e) {
    const clickPositionInPage = e.pageX
    const bar = document.querySelector('.bar__progress')
    const barStart = bar.getBoundingClientRect().left + window.scrollX
    const barWidth = bar.offsetWidth
    const clickPositionInBar = clickPositionInPage - barStart
    const timePerPixel = config.duration / barWidth
    return timePerPixel * clickPositionInBar
  }

  function handleTimeDrag(e) {
    setConfig({ ...config, currentTime: calcClickedTime(e) })

    const updateTimeOnMove = (eMove) => {
      setConfig({ ...config, currentTime: calcClickedTime(eMove) })
    }

    document.addEventListener('mousemove', updateTimeOnMove)

    document.addEventListener('mouseup', () => {
      document.removeEventListener('mousemove', updateTimeOnMove)
    })
  }

  return (
    <S.ProgressWrapper>
      <div className="bar">
        <span className="bar__time">{config.currentTime}</span>
        <div
          className="bar__progress"
          style={{
            background: `linear-gradient(to right, orange ${curPercentage}%, white 0)`,
          }}
          onMouseDown={(e) => handleTimeDrag(e)}
        >
          <span
            className="bar__progress__knob"
            style={{ left: `${curPercentage - 2}%` }}
          />
        </div>
        <span className="bar__time">{config.duration}</span>
      </div>
    </S.ProgressWrapper>
  )
}
