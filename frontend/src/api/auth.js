import axios from 'axios'
const API = 'http://localhost:3000/api/auth'

export const login = async (data) => {
  return axios.post(`${API}/login`, data)
}

export const register = async (data) => {
  return axios.post(`${API}/register`, data)
}