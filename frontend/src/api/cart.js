import API from './axios';
export const getCart = () => API.get('/cart');
export const addToCart = (productId) => API.post('/cart/add', { productId });
export const removeFromCart = (productId) => API.post('/cart/remove', { productId });