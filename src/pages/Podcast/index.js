import React, { useState, useEffect } from 'react'

import { lookup } from '../../services/api'

import { Container } from '../../components'

export default function Podcast(props) {
  const { id } = props.match.params

  const [podcast, setPodcast] = useState({})

  useEffect(() => {
    async function getData() {
      const { data } = await lookup.get('', { params: { id: id } })

      setPodcast(data.results)
    }

    getData()
  }, [id])

  return (
    <Container>
      {podcast.artworkUrl600 && (
        <img src={podcast.artworkUrl600} alt="Podcast logo" />
      )}

      <h1>{podcast.kind}</h1>
    </Container>
  )
}
