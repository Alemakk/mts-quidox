import axios from 'axios'
import { token, status } from './interceptors'
const instance = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL,
  headers: {
    'X-Frame-Options': 'sameorigin',
    'Access-Control-Allow-Origin': '*'
  },
  data: {},
  timeout: 180000
})

token(instance)
status(instance)

export default instance
