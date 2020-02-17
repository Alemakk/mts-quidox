import axios from 'axios'

const instance = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL,
  headers: {
    'X-Frame-Options': 'sameorigin',
    'Access-Control-Allow-Origin': '*'
  },
  // data: {},
  timeout: 180000
})

export default instance
