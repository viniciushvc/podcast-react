import React from 'react'

import * as S from './styled'

export default function ({ podcasts }) {
  return (
    <S.ContainerWrapper>
      <S.CardList>
        {podcasts?.map((podcast) => (
          <S.CardItem key={podcast.trackId}>
            <S.CardLink to={`/podcast/${podcast.trackId}`}>
              <S.CardImage
                src={podcast.artworkUrl100}
                alt={podcast.trackName}
              />
              <S.CardTitle>{podcast.collectionName}</S.CardTitle>
            </S.CardLink>
          </S.CardItem>
        ))}
      </S.CardList>
    </S.ContainerWrapper>
  )
}
