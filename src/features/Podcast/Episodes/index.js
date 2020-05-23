import React, { memo } from 'react'

import { BsFillPlayFill, BsPauseFill, BsReplyAll } from 'react-icons/bs'

import * as S from './styled'

function Episodes({ episodes, onPlay, loading }) {
  return (
    <S.EpisodesWrapper>
      {episodes?.map((episode, id) => (
        <S.Episode
          key={episode.title}
          className={episode.active ? 'active' : ''}
        >
          <S.FlexWrapper align="center" justify="space-between">
            <button
              className="play"
              title="Play episode"
              type="button"
              onClick={() => onPlay(id)}
            >
              {episode.active ? (
                <BsPauseFill size="20" color="currentColor" />
              ) : (
                <BsFillPlayFill size="20" color="currentColor" />
              )}
            </button>

            {episode.active}

            <div className="title">{episode.title}</div>

            <p className="date">
              {new Date(episode.isoDate).toLocaleDateString()}
            </p>

            <button className="actions" title="Share episode" type="button">
              <BsReplyAll size="20" color="currentColor" />
            </button>
          </S.FlexWrapper>
        </S.Episode>
      ))}
    </S.EpisodesWrapper>
  )
}

export default memo(Episodes)
