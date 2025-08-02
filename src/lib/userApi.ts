import api from './api';
import { LoginCredentials, RegisterData, AuthResponse, User } from '../types/user';

export const userAPI = {
    login: async (credentials: LoginCredentials): Promise<AuthResponse> => {
        const response = await api.post<AuthResponse>('/auth/login', credentials);
        if (response.data.token) {
            localStorage.setItem('token', response.data.token);
        }
        return response.data;
    },

    register: async (data: RegisterData): Promise<AuthResponse> => {
        const response = await api.post<AuthResponse>('/auth/register', data);
        if (response.data.token) {
            localStorage.setItem('token', response.data.token);
        }
        return response.data;
    },

    logout: async (): Promise<void> => {
        localStorage.removeItem('token');
        await api.post('/auth/logout');
    },

    getCurrentUser: async (): Promise<User> => {
        const response = await api.get<User>('/auth/me');
        return response.data;
    },

    updateProfile: async (userId: number, data: Partial<User>): Promise<User> => {
        const response = await api.put<User>(`/users/${userId}`, data);
        return response.data;
    }
};
