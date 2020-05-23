import React, { useState, useContext, useEffect } from 'react'

import { useParams } from 'react-router-dom'

import { PlayerContext } from '@/contexts/PlayerContext'

import { getPodcast, getEpisodes } from '@/rest/podcasts'

import { SearchEpisodes, Episodes } from '@/features/Podcast'

import { Container, LazyImage } from '@/components/utils'

import { Spinner } from '@/components/ui'

import * as S from './styled'

export default function () {
  const { id } = useParams()
  const [podcast, setPodcast] = useState()
  const [episodes, setEpisodes] = useState([])
  const [filter, setFilter] = useState()
  const [loading, setLoading] = useState(true)

  const { config, setConfig } = useContext(PlayerContext)

  useEffect(() => {
    async function getData() {
      const info = await getPodcast(id)
      setPodcast(info)

      const episodes = await getEpisodes(info.feedUrl)
      setEpisodes({ original: episodes, filtered: episodes })

      setLoading(false)
    }

    getData()
  }, [id])

  function playEpisode(id) {
    const filtered = episodes.filtered.map((item, i) => {
      if (i === id) {
        setConfig({
          ...config,
          is_playing: true,
          track_name: item.title,
          source: item.enclosure.url,
        })

        if (!item.active) return { ...item, active: true }
      }

      return { ...item, active: false }
    })

    setEpisodes({ original: episodes, filtered })
  }

  function filterEpisode(e) {
    e.preventDefault()

    if (filter) {
      const temp = episodes.original.filter((item) =>
        item.title.toLowerCase().includes(filter.toLowerCase())
      )

      setEpisodes({ original: episodes, filtered: temp })
    }
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

        {loading && <Spinner />}

        {!loading && (
          <Episodes
            episodes={episodes.filtered}
            onPlay={(e) => playEpisode(e)}
          />
        )}
      </S.PodcastWrapper>
    </Container>
  )
}
