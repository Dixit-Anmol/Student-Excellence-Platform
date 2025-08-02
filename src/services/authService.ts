import apiClient from '../lib/apiClient';
import { LoginCredentials, RegisterCredentials, AuthResponse } from '../types/auth';

export const authService = {
    login: async (credentials: LoginCredentials): Promise<AuthResponse> => {
        const response = await apiClient.post('/auth/login', credentials);
        return response.data;
    },

    register: async (credentials: RegisterCredentials): Promise<AuthResponse> => {
        const response = await apiClient.post('/auth/register', credentials);
        return response.data;
    },

    logout: async () => {
        await apiClient.post('/auth/logout');
        localStorage.removeItem('token');
    }
};
