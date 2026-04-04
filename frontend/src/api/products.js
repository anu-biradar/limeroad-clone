import API from './axios';
export const getAllProducts = () => API.get('/products');
export const getByCategory = (cat) => API.get(`/products/${cat}`);
export const addProduct = (formData) => API.post('/products/add', formData); // FormData for images