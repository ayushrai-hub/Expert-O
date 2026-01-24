import { User, AuthResponse, UserRole } from '../types/auth';

// API endpoints for authentication
const API_BASE_URL = 'http://localhost:3001/api';

const apiClient = {
  async request<T>(endpoint: string, options: RequestInit = {}): Promise<T> {
    const url = `${API_BASE_URL}${endpoint}`;
    
    const defaultOptions: RequestInit = {
      headers: {
        'Content-Type': 'application/json',
        ...options.headers,
      },
      ...options,
    };

    const response = await fetch(url, defaultOptions);
    
    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      throw new Error(errorData.message || `HTTP error! status: ${response.status}`);
    }

    return response.json();
  },

  async get<T>(endpoint: string, headers?: HeadersInit): Promise<T> {
    return this.request<T>(endpoint, {
      method: 'GET',
      headers,
    });
  },

  async post<T>(endpoint: string, data?: any, headers?: HeadersInit): Promise<T> {
    return this.request<T>(endpoint, {
      method: 'POST',
      headers,
      body: data ? JSON.stringify(data) : undefined,
    });
  },

  async put<T>(endpoint: string, data?: any, headers?: HeadersInit): Promise<T> {
    return this.request<T>(endpoint, {
      method: 'PUT',
      headers,
      body: data ? JSON.stringify(data) : undefined,
    });
  },

  async delete<T>(endpoint: string, headers?: HeadersInit): Promise<T> {
    return this.request<T>(endpoint, {
      method: 'DELETE',
      headers,
    });
  }
};

export const authAPI = {
  login: async (email: string, password: string): Promise<AuthResponse> => {
    return apiClient.post<AuthResponse>('/auth/login', {
      email,
      password
    });
  },

  register: async (name: string, email: string, password: string, role: UserRole): Promise<AuthResponse> => {
    return apiClient.post<AuthResponse>('/auth/register', {
      name,
      email,
      password,
      role
    });
  },

  forgotPassword: async (email: string): Promise<{ success: boolean; message: string }> => {
    return apiClient.post<{ success: boolean; message: string }>('/auth/forgot-password', {
      email
    });
  },

  resetPassword: async (token: string, password: string): Promise<{ success: boolean; message: string }> => {
    return apiClient.post<{ success: boolean; message: string }>('/auth/reset-password', {
      token,
      password
    });
  },

  verifyToken: async (token: string): Promise<{ success: boolean; data: { user: User; token: string } }> => {
    return apiClient.get<{ success: boolean; data: { user: User; token: string } }>('/auth/verify-token', {
      'Authorization': `Bearer ${token}`
    });
  }
};