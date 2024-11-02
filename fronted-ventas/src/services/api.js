import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:8080/api', // Cambia a la URL de tu backend
  headers: { 'Content-Type': 'application/json' },
});

export default api;
