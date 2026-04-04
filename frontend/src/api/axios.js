import axios from 'axios';

const configuredApiBaseUrl = (import.meta.env.VITE_API_BASE_URL || '/api').replace(/\/$/, '');
const assetBaseUrl = configuredApiBaseUrl.endsWith('/api')
  ? configuredApiBaseUrl.slice(0, -4)
  : configuredApiBaseUrl;

const API = axios.create({ baseURL: configuredApiBaseUrl });

// Automatically attach JWT token to every request
API.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if (token) config.headers.Authorization = `Bearer ${token}`;
  return config;
});

export const getUploadUrl = (fileName) => {
  if (fileName && fileName.startsWith('http')) return fileName;
  return `${assetBaseUrl || ''}/uploads/${fileName}`;
};

export default API;
