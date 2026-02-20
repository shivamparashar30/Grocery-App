// store/slices/authSlice.js - FIXED VERSION
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { authService } from '../../services/authService';

// Async thunks
export const loginUser = createAsyncThunk(
  'auth/login',
  async ({ email, password }, { rejectWithValue }) => {
    try {
      const response = await authService.login(email, password);
      return response;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const signupUser = createAsyncThunk(
  'auth/signup',
  async ({ name, email, password, phone, role, fcmToken }, { rejectWithValue }) => {
    try {
      const response = await authService.signup(name, email, password, phone, role, fcmToken);
      return response;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const loadStoredAuth = createAsyncThunk(
  'auth/loadStored',
  async (_, { rejectWithValue }) => {
    try {
      // ✅ Use 'token' and 'user' keys (same as authService)
      const token = await AsyncStorage.getItem('token');
      const user = await AsyncStorage.getItem('user');
      
      console.log('Loading stored auth...');
      console.log('Token exists:', !!token);
      console.log('User exists:', !!user);
      
      if (token && user) {
        return {
          token,
          user: JSON.parse(user),
        };
      }
      return null;
    } catch (error) {
      console.error('Error loading stored auth:', error);
      return rejectWithValue(error.message);
    }
  }
);

export const logoutUser = createAsyncThunk(
  'auth/logout',
  async (_, { rejectWithValue }) => {
    try {
      await authService.logout();
      return null;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    token: null,
    isAuthenticated: false,
    loading: false,
    error: null,
    isInitialized: false,
  },
  reducers: {
    clearError: (state) => {
      state.error = null;
    },
    setToken: (state, action) => {
      state.token = action.payload;
      state.isAuthenticated = !!action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      // Login
      .addCase(loginUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.loading = false;
        state.token = action.payload.token;
        state.isAuthenticated = true;
        state.error = null;
        console.log('Login successful, token set in Redux');
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
        state.isAuthenticated = false;
        console.error('Login failed:', action.payload);
      })
      // Signup
      .addCase(signupUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(signupUser.fulfilled, (state, action) => {
        state.loading = false;
        state.token = action.payload.token;
        state.isAuthenticated = true;
        state.error = null;
        console.log('Signup successful, token set in Redux');
      })
      .addCase(signupUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
        state.isAuthenticated = false;
        console.error('Signup failed:', action.payload);
      })
      // Load stored auth
      .addCase(loadStoredAuth.pending, (state) => {
        state.loading = true;
      })
      .addCase(loadStoredAuth.fulfilled, (state, action) => {
        state.loading = false;
        state.isInitialized = true;
        if (action.payload) {
          state.token = action.payload.token;
          state.isAuthenticated = true;
          console.log('Stored auth loaded successfully');
        } else {
          console.log('No stored auth found');
        }
      })
      .addCase(loadStoredAuth.rejected, (state, action) => {
        state.loading = false;
        state.isInitialized = true;
        state.isAuthenticated = false;
        console.error('Error loading stored auth:', action.payload);
      })
      // Logout
      .addCase(logoutUser.fulfilled, (state) => {
        state.token = null;
        state.isAuthenticated = false;
        state.error = null;
        console.log('Logout successful');
      });
  },
});

export const { clearError, setToken } = authSlice.actions;
export default authSlice.reducer;