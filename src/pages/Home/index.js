import React, { useState } from 'react'

import { getPodcasts } from '@/rest/podcasts'

import { Podcasts, Hero } from '@/features/Home'

import { Container } from '@/components/utils'

import { Spinner } from '@/components/ui'

export default function () {
  const [form, setForm] = useState()
  const [podcasts, setPodcasts] = useState([])
  const [loading, setLoading] = useState(false)

  async function getData(e) {
    e.preventDefault()

    try {
      setLoading(true)
      const data = await getPodcasts(form)
      setPodcasts(data)
    } catch (error) {
      console.log(error)
    } finally {
      setLoading(false)
    }
  }

  return (
    <>
      <Hero onSubmit={getData} onChange={(e) => setForm(e.target.value)} />

      <Container>
        {loading && <Spinner mt="50px" />}

        {!loading && <Podcasts podcasts={podcasts} />}
      </Container>
    </>
  )
}
