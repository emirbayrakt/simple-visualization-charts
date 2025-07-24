import axios from 'axios';

export const api = axios.create({
  baseURL: 'http://5c3db915a9d04f0014a98a79.mockapi.io',
  timeout: 5000,
});
