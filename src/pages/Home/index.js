import React, { useState, useEffect } from 'react'

import { Container } from '../../components/utils'

import { Podcasts, Hero } from '../../components/pages'

import api from '../../services/api'

export default function () {
  const [form, setForm] = useState('nerdcast')

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

  useEffect(() => {
    getData()
  }, [])

  function onSubmit(e) {
    e.preventDefault()

    getData()
  }

  return (
    <div>
      <Hero onSubmit={onSubmit} onChange={(e) => setForm(e.target.value)} />

      <Container>
        <Podcasts podcasts={podcasts} />
      </Container>
    </div>
  )
}
