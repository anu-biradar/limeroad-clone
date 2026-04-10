import API from './axios';
export const getAllProducts = () => API.get('/products');
export const getByCategory = (cat) => API.get(`/products/${cat}`);
export const addProduct = (formData) => API.post('/products/add', formData); // FormData for images
export const getProductById = (id) => API.get(`/products/id/${id}`);
export const getSuggestedProducts = (id) => API.get(`/products/id/${id}/suggested`);