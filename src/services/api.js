import axios from 'axios'

export const term = axios.create({
  baseURL: 'https://itunes.apple.com/search?entity=podcast',
})

export const lookup = axios.create({
  baseURL: 'https://itunes.apple.com/lookup?entity=podcast&id=',
})
