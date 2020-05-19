import React, { useState, useEffect } from 'react'

import { useParams } from 'react-router-dom'

import api from '../../services/api'

import parser from '../../util/parser'

import { Container } from '../../components'

import * as S from './styled'

export default function () {
  const { id } = useParams()

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
      <S.PodcastWrapper>
        <S.ImageWrapper>
          <S.Image src={podcast?.artworkUrl600} alt="Podcast logo" />
        </S.ImageWrapper>

        <S.InfoWrapper>
          <h1>{podcast?.trackName}</h1>

          <p>{podcast?.genres.join(', ')}</p>

          <p> {podcast?.collectionViewUrl}</p>

          <p>{podcast?.feedUrl}</p>

          <p>Total de episódios: {episodes?.length}</p>

          <button>Compartilhar</button>
        </S.InfoWrapper>
      </S.PodcastWrapper>

      <hr />

      <h1>Episodes</h1>

      <input type="text" placeholder="Find episode" />

      <ul>
        {episodes?.map((episode) => (
          <li key={episode.title}>
            <div>
              <S.Image src={episode.itunes.image} alt="" />

              <p>data: {new Date(episode.isoDate).toLocaleDateString()}</p>

              <p>sobre: {episode.content}</p>

              <p>link: {episode.link}</p>

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
