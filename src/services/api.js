import axios from 'axios'

const cors =
  process.env.NODE_ENV === 'development'
    ? 'https://cors-anywhere.herokuapp.com/'
    : ''

const instance = axios.create({
  baseURL: `${cors}https://itunes.apple.com`,
})

export default instance
