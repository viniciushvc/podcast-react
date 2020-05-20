import React, { useState, useEffect } from 'react'

import { useParams } from 'react-router-dom'

import api from '../../services/api'

import parser from '../../util/parser'

import { Container, LazyImage, SearchEpisodes } from '../../components'

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
        <S.FlexWrapper>
          <S.ImageWrapper>
            <LazyImage
              src={podcast?.artworkUrl600}
              alt="Podcast logo"
              width="120px"
              height="120px"
              rounded
            />
          </S.ImageWrapper>

          <S.InfoWrapper>
            <h1>{podcast?.trackName}</h1>

            <h2>{podcast?.genres.join(', ')}</h2>

            <a href={podcast?.collectionViewUrl}>
              {podcast?.collectionViewUrl}
            </a>

            <a
              href={podcast?.feedUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              {podcast?.feedUrl}
            </a>
          </S.InfoWrapper>
        </S.FlexWrapper>

        <SearchEpisodes />

        <ul>
          {episodes?.map((episode) => (
            <li key={episode.title}>
              <S.FlexWrapper>
                <LazyImage
                  src={episode.itunes.image}
                  alt=""
                  width="120px"
                  height="120px"
                  rounded
                />

                <S.InfoWrapper>
                  <p>data: {new Date(episode.isoDate).toLocaleDateString()}</p>

                  <p>sobre: {episode.content}</p>

                  <p>link: {episode.link}</p>

                  <p>{episode.title}</p>

                  <button
                    type="button"
                    onClick={() => console.log(episode.enclosure.url)}
                  >
                    play
                  </button>
                </S.InfoWrapper>
              </S.FlexWrapper>

              <br />
              <br />
            </li>
          ))}
        </ul>
      </S.PodcastWrapper>
    </Container>
  )
}
