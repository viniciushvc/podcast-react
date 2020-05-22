import React, { useState, useEffect } from 'react'

import { useParams } from 'react-router-dom'

import api from '@/services/api'

import parser from '@/util/parser'

import { SearchEpisodes, Episodes } from '@/features/Podcast'

import { Container, LazyImage } from '@/components/utils'

import * as S from './styled'

export default function () {
  const { id } = useParams()
  const [podcast, setPodcast] = useState()
  const [episodes, setEpisodes] = useState([])
  const [filteredEpisodes, setFilteredEpisodes] = useState([])
  const [filter, setFilter] = useState()

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
        setFilteredEpisodes(feed.items)
      }
    }

    getData()
  }, [podcast])

  function playEpisode(id) {
    const episode = filteredEpisodes.map((item, i) => {
      if (i === id) {
        if (!item.active) return { ...item, active: true }
      }

      return { ...item, active: false }
    })

    setFilteredEpisodes(episode)
  }

  function filterEpisode(e) {
    e.preventDefault()

    const temp = episodes.filter((item) =>
      item.title.toLowerCase().includes(filter.toLowerCase())
    )

    setFilteredEpisodes(temp)
  }

  return (
    <Container>
      <S.PodcastWrapper>
        <S.FlexWrapper align="flex-end">
          <S.ImageWrapper>
            <LazyImage
              src={podcast?.artworkUrl600}
              alt={`${podcast?.trackName} logo`}
              width="150px"
              height="150px"
              rounded
            />
          </S.ImageWrapper>

          <S.InfoWrapper>
            <h1>{podcast?.trackName}</h1>

            <h2>{podcast?.genres.join(', ')}</h2>
          </S.InfoWrapper>
        </S.FlexWrapper>

        <SearchEpisodes
          onSubmit={(e) => filterEpisode(e)}
          onChange={(e) => setFilter(e.target.value)}
          episodes={episodes.length}
        />

        <Episodes episodes={filteredEpisodes} onPlay={(e) => playEpisode(e)} />
      </S.PodcastWrapper>
    </Container>
  )
}
