import React, { useState, useEffect } from 'react'

import { term } from '../../services/api'

import * as S from './styled'

export default function PodcastList() {
  const [form, setForm] = useState()

  const [podcasts, setPodcasts] = useState([])

  const [results, setResults] = useState(0)

  useEffect(() => {
    async function getData() {
      const { data } = await term.get('', { params: { term: form } })

      setPodcasts(data.results)

      setResults(data.resultCount)
    }

    getData()
  }, [form])

  return (
    <S.ContainerWrapper>
      <S.Input
        type="text"
        onChange={e => setForm(e.target.value)}
        placeholder="Type something...."
      />

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
