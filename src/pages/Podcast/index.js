import React, { useState, useEffect } from 'react'

import api from '../../services/api'

import parser from '../../util/parser'

import { Container } from '../../components'

import * as S from './styled'

export default function Podcast(props) {
  const { id } = props.match.params

  const [podcast, setPodcast] = useState()

  const [episodes, setEpisodes] = useState([])

  useEffect(() => {
    async function getData() {
      const { data } = await api.get('/lookup', {
        params: {
          entity: 'podcast',
          id: id,
        },
      })

      setPodcast(data.results[0])
    }

    getData()
  }, [id])

  useEffect(() => {
    async function getData() {
      if (podcast) {
        const feed = await parser.parseURL(
          'https://cors-anywhere.herokuapp.com/' + podcast?.feedUrl
        )

        setEpisodes(feed.items)
      }
    }

    getData()
  }, [podcast])

  return (
    <Container>
      <S.PodcastImageWrapper>
        <S.PodcastImage src={podcast?.artworkUrl600} alt="Podcast logo" />
      </S.PodcastImageWrapper>

      <h1>{podcast?.trackName}</h1>

      <ul>
        {episodes?.map((episode) => (
          <li key={episode.title}>
            <div>
              <p>{episode.title}</p>

              <audio controls>
                {/* <source src={episode.enclosure.url} /> */}
              </audio>
            </div>

            <br />
            <br />
          </li>
        ))}
      </ul>
    </Container>
  )
}
