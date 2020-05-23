import api from '@/services/api'

import parser from '@/util/parser'

export async function getPodcasts(term) {
  const { data } = await api.get('/search', {
    params: {
      entity: 'podcast',
      term,
    },
  })

  return data.results
}

export async function getPodcast(id) {
  const { data } = await api.get('/lookup', {
    params: {
      entity: 'podcast',
      id,
    },
  })

  return data.results[0]
}

export async function getEpisodes(url) {
  const { items } = await parser.parseURL(
    `https://cors-anywhere.herokuapp.com/${url}'`
  )

  return items
}
