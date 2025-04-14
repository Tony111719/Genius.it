import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:5000/api', // Cambia con l'URL del tuo backend
});

export default api;
