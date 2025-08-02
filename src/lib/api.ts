import axios from 'axios';

const API_URL = (import.meta.env.VITE_API_URL || 'http://localhost:3000') + '/api';

const api = axios.create({
    baseURL: API_URL,
    withCredentials: true,
    headers: {
        'Content-Type': 'application/json'
    }
});

// Add request interceptor to attach token
api.interceptors.request.use((config) => {
    const token = localStorage.getItem('token');
    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
});

// Auth APIs
export const authAPI = {
    login: (credentials: { email: string; password: string }) => 
        api.post('/auth/login', credentials),
    register: (userData: { username: string; email: string; password: string }) => 
        api.post('/auth/register', userData),
    logout: () => api.post('/auth/logout')
};

// Events APIs
export const eventsAPI = {
    getAllEvents: () => api.get('/events'),
    getEvent: (id: number) => api.get(`/events/${id}`),
    createEvent: (eventData: any) => api.post('/events', eventData),
    updateEvent: (id: number, eventData: any) => api.put(`/events/${id}`, eventData),
    deleteEvent: (id: number) => api.delete(`/events/${id}`)
};

export default api;
