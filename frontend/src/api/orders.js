import API from './axios';
export const placeOrder = () => API.post('/orders/place');
export const getOrders = () => API.get('/orders');