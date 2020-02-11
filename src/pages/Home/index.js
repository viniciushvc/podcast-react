import React, { useState, useEffect } from 'react'

import api from '../../services/api'

import { Container, PodcastList, Search } from '../../components'

export default function Home() {
  const [form, setForm] = useState()

  const [podcasts, setPodcasts] = useState([])

  const [results, setResults] = useState(0)

  useEffect(() => {
    async function getData() {
      const { data } = await api.get('/search', {
        params: {
          entity: 'podcast',
          term: '/' + form,
        },
      })

      setPodcasts(data.results)

      setResults(data.resultCount)
    }

    getData()
  }, [form])

  return (
    <Container>
      <Search onChange={e => setForm(e.target.value)} />

      <PodcastList podcasts={podcasts} results={results} />
    </Container>
  )
}
