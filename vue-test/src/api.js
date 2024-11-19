import axios from 'axios'

// LaravelのAPIエンドポイントを設定
const apiClient = axios.create({
  baseURL: 'http://172.16.3.136:8000/api', // Laravel APIのベースURL
  headers: {
    'Content-Type': 'application/json',
  },
})

export default apiClient
