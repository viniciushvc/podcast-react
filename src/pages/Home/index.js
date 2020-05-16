import React, { useState } from 'react'

import api from '../../services/api'

import { Container, PodcastList, Search } from '../../components'

export default function Home() {
  const [form, setForm] = useState('')

  const [podcasts, setPodcasts] = useState([])

  async function getData() {
    const { data } = await api.get('/search', {
      params: {
        entity: 'podcast',
        term: form,
      },
    })

    setPodcasts(data.results)
  }

  function onSubmit(e) {
    e.preventDefault()

    getData()
  }

  return (
    <Container>
      <Search onSubmit={onSubmit} onChange={(e) => setForm(e.target.value)} />

      <PodcastList podcasts={podcasts} />
    </Container>
  )
}
