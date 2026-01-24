import React, { createContext, useContext, useReducer, useEffect } from 'react';
import { AuthContextType, AuthState, LoginCredentials, RegisterData, User, Role } from '../types/auth';
import { authAPI } from '../services/api';

// Mock user data for development
const mockUsers: User[] = [
  {
    id: '1',
    email: 'admin@expert-o.com',
    name: 'Admin User',
    role: Role.ADMIN,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    id: '2',
    email: 'client@example.com',
    name: 'John Client',
    role: Role.CLIENT,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    id: '3',
    email: 'talent@example.com',
    name: 'Sarah Talent',
    role: Role.TALENT,
    createdAt: new Date(),
    updatedAt: new Date()
  }
];

type AuthAction =
  | { type: 'LOGIN_START' }
  | { type: 'LOGIN_SUCCESS'; payload: User }
  | { type: 'LOGIN_FAILURE'; payload: string }
  | { type: 'REGISTER_START' }
  | { type: 'REGISTER_SUCCESS'; payload: User }
  | { type: 'REGISTER_FAILURE'; payload: string }
  | { type: 'LOGOUT' }
  | { type: 'CLEAR_ERROR' };

const initialState: AuthState = {
  user: null,
  isAuthenticated: false,
  isLoading: false,
  error: null
};

const authReducer = (state: AuthState, action: AuthAction): AuthState => {
  switch (action.type) {
    case 'LOGIN_START':
    case 'REGISTER_START':
      return {
        ...state,
        isLoading: true,
        error: null
      };
    case 'LOGIN_SUCCESS':
    case 'REGISTER_SUCCESS':
      return {
        ...state,
        user: action.payload,
        isAuthenticated: true,
        isLoading: false,
        error: null
      };
    case 'LOGIN_FAILURE':
    case 'REGISTER_FAILURE':
      return {
        ...state,
        user: null,
        isAuthenticated: false,
        isLoading: false,
        error: action.payload
      };
    case 'LOGOUT':
      return {
        ...state,
        user: null,
        isAuthenticated: false,
        isLoading: false,
        error: null
      };
    case 'CLEAR_ERROR':
      return {
        ...state,
        error: null
      };
    default:
      return state;
  }
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

interface AuthProviderProps {
  children: React.ReactNode;
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer, initialState);

  // Check for existing session on mount
  useEffect(() => {
    const savedUser = localStorage.getItem('expert-o-user');
    if (savedUser) {
      try {
        const user = JSON.parse(savedUser);
        dispatch({ type: 'LOGIN_SUCCESS', payload: user });
      } catch (error) {
        localStorage.removeItem('expert-o-user');
      }
    }
  }, []);

  const login = async (credentials: LoginCredentials): Promise<void> => {
    dispatch({ type: 'LOGIN_START' });

    try {
      const response = await authAPI.login(credentials.email, credentials.password);
      
      if (!response.success) {
        throw new Error(response.message);
      }

      localStorage.setItem('expert-o-user', JSON.stringify(response.data.user));
      localStorage.setItem('expert-o-token', response.data.token);
      dispatch({ type: 'LOGIN_SUCCESS', payload: response.data.user });
    } catch (error) {
      dispatch({ 
        type: 'LOGIN_FAILURE', 
        payload: error instanceof Error ? error.message : 'Login failed' 
      });
    }
  };

  const register = async (data: RegisterData): Promise<void> => {
    dispatch({ type: 'REGISTER_START' });

    try {
      const response = await authAPI.register(data.name, data.email, data.password, data.role);
      
      if (!response.success) {
        throw new Error(response.message);
      }

      localStorage.setItem('expert-o-user', JSON.stringify(response.data.user));
      localStorage.setItem('expert-o-token', response.data.token);
      dispatch({ type: 'REGISTER_SUCCESS', payload: response.data.user });
    } catch (error) {
      dispatch({ 
        type: 'REGISTER_FAILURE', 
        payload: error instanceof Error ? error.message : 'Registration failed' 
      });
    }
  };

  const logout = (): void => {
    localStorage.removeItem('expert-o-user');
    dispatch({ type: 'LOGOUT' });
  };

  const resetPassword = async (email: string): Promise<{ error: Error | null }> => {
    try {
      const response = await authAPI.forgotPassword(email);
      
      if (!response.success) {
        throw new Error(response.message);
      }

      return { error: null };
    } catch (error) {
      return {
        error: error instanceof Error ? error : new Error('Password reset failed')
      };
    }
  };

  const clearError = (): void => {
    dispatch({ type: 'CLEAR_ERROR' });
  };

  const value: AuthContextType = {
    ...state,
    login,
    register,
    resetPassword,
    logout,
    clearError
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};
