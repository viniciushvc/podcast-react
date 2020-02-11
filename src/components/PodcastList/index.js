import React from 'react'

import * as S from './styled'

export default function PodcastList({ results, podcasts }) {
  return (
    <S.ContainerWrapper>
      {results > 0 && <S.ResultTitle>Total results: {results}</S.ResultTitle>}

      <S.CardList>
        {podcasts?.map(podcast => (
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
