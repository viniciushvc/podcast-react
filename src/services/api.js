import axios from 'axios'

const instance = axios.create({
  baseURL: 'https://cors-anywhere.herokuapp.com/https://itunes.apple.com',
})

export default instance
