import api from './api';

export const fetchOrders = () => api.get('/orders');
export const createOrder = (orderData) => api.post('/orders', orderData);
export const fetchOrderById = (id) => api.get(`/orders/${id}`);
