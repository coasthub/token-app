import axios from 'axios'
import { Component } from 'react'

const api = axios.create({
    baseUrl: `https://5dct0wxvh9.execute-api.us-east-1.amazonaws.com/default/token_generator`
})
export default api