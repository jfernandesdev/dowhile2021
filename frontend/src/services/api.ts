import axios from 'axios';

export const api = axios.create({
  baseURL: 'https://api-dowhile2021.herokuapp.com',
})
