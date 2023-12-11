import axios from 'axios'

const api = axios.create({
  baseURL: 'http://192.168.137.170:19003/api/'
})

export default api