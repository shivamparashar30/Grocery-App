// store/slices/userSlice.js - FIXED VERSION
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { authService } from '../../services/authService';

const BASE_URL = 'https://grocery-backend-shivam.vercel.app/api/v1/auth';
// Async thunk to fetch user profile
export const fetchUserProfile = createAsyncThunk(
  'user/fetchProfile',
  async (_, { getState, rejectWithValue }) => {
    try {
      const { auth } = getState();
      let token = auth.token;
      
      // If no token in Redux, try AsyncStorage
      if (!token) {
        token = await authService.getToken();
      }
      
      if (!token) {
        throw new Error('No authentication token found');
      }

      console.log('Fetching user profile with token:', token ? 'Token exists' : 'No token');
      
      const response = await authService.getCurrentUser(token);
      
      console.log('getCurrentUser response:', response);
      
      if (response.success) {
        const userData = response.data || response.user;
        console.log('User data received:', userData);
        console.log('Phone in user data:', userData.phone);
        
        // Update AsyncStorage
        await AsyncStorage.setItem('user', JSON.stringify(userData));
        return userData;
      }
      
      throw new Error(response.message || 'Failed to fetch profile');
    } catch (error) {
      console.error('Fetch profile error:', error);
      console.error('Error message:', error.message);
      return rejectWithValue(error.message);
    }
  }
);

// Async thunk to update user profile
export const updateUserProfile = createAsyncThunk(
  'user/updateProfile',
  async ({ name, email, phone }, { getState, rejectWithValue }) => {
    try {
      const { auth } = getState();
      let token = auth.token;
      
      // If no token in Redux, try AsyncStorage
      if (!token) {
        token = await authService.getToken();
      }
      
      if (!token) {
        throw new Error('No authentication token found');
      }

      console.log('Updating user profile...');
      console.log('Data to update:', { name, email, phone });
      console.log('Using token:', token ? 'Token exists' : 'No token');

      const response = await fetch(`${BASE_URL}/update-profile`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`,
        },
        body: JSON.stringify({ name, email, phone }),
      });

      console.log('Update response status:', response.status);
      console.log('Update response ok:', response.ok);

      const responseText = await response.text();
      console.log('Update response text:', responseText);
      
      let data;
      
      try {
        data = JSON.parse(responseText);
      } catch (parseError) {
        console.error('JSON parse error:', parseError);
        console.error('Response was:', responseText);
        throw new Error('Server returned invalid response');
      }

      console.log('Parsed update response:', data);

      if (!response.ok) {
        throw new Error(data.message || 'Failed to update profile');
      }

      if (data.success) {
        const updatedUser = data.data || data.user;
        console.log('Updated user data:', updatedUser);
        console.log('Phone in updated data:', updatedUser.phone);
        
        // Update AsyncStorage
        await AsyncStorage.setItem('user', JSON.stringify(updatedUser));
        console.log('AsyncStorage updated');
        
        return updatedUser;
      }

      throw new Error(data.message || 'Update failed');
    } catch (error) {
      console.error('Update profile error:', error);
      console.error('Error message:', error.message);
      return rejectWithValue(error.message);
    }
  }
);

// Async thunk to load stored user data
export const loadStoredUser = createAsyncThunk(
  'user/loadStored',
  async (_, { rejectWithValue }) => {
    try {
      const storedUser = await authService.getStoredUser();
      if (storedUser) {
        console.log('Loaded stored user:', storedUser);
        console.log('Phone in stored user:', storedUser.phone);
      }
      return storedUser;
    } catch (error) {
      console.error('Error loading stored user:', error);
      return rejectWithValue(error.message);
    }
  }
);

const userSlice = createSlice({
  name: 'user',
  initialState: {
    data: null,
    loading: false,
    updating: false,
    error: null,
    updateSuccess: false,
  },
  reducers: {
    clearError: (state) => {
      state.error = null;
    },
    clearUpdateSuccess: (state) => {
      state.updateSuccess = false;
    },
    setUserData: (state, action) => {
      state.data = action.payload;
      console.log('User data set in Redux:', action.payload);
    },
    clearUserData: (state) => {
      state.data = null;
      state.error = null;
      state.updateSuccess = false;
      console.log('User data cleared from Redux');
    },
  },
  extraReducers: (builder) => {
    builder
      // Fetch user profile
      .addCase(fetchUserProfile.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchUserProfile.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
        state.error = null;
        console.log('User profile fetched successfully');
      })
      .addCase(fetchUserProfile.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
        console.error('Failed to fetch user profile:', action.payload);
      })
      // Update user profile
      .addCase(updateUserProfile.pending, (state) => {
        state.updating = true;
        state.error = null;
        state.updateSuccess = false;
      })
      .addCase(updateUserProfile.fulfilled, (state, action) => {
        state.updating = false;
        state.data = action.payload;
        state.error = null;
        state.updateSuccess = true;
        console.log('User profile updated successfully');
      })
      .addCase(updateUserProfile.rejected, (state, action) => {
        state.updating = false;
        state.error = action.payload;
        state.updateSuccess = false;
        console.error('Failed to update user profile:', action.payload);
      })
      // Load stored user
      .addCase(loadStoredUser.fulfilled, (state, action) => {
        if (action.payload) {
          state.data = action.payload;
          console.log('Stored user loaded into Redux');
        }
      });
  },
});

export const { clearError, clearUpdateSuccess, setUserData, clearUserData } = userSlice.actions;
export default userSlice.reducer;