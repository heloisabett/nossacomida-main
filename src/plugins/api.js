import axios from 'axios'

const api = axios.create({
  baseURL: 'https://ourfood-backend.1.us-1.fl0.io/api/'
})

export default api