// authService.js
import AsyncStorage from '@react-native-async-storage/async-storage';

// Base URL - verify this is correct
const BASE_URL = 'https://grocery-backend-shivam.vercel.app/api/v1/auth';

export const authService = {
  // Login
  login: async (email, password) => {
    try {
      console.log('Attempting login with:', email);
      console.log('Full URL:', `${BASE_URL}/login`);

      const response = await fetch(`${BASE_URL}/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email,
          password,
        }),
      });

      console.log('Response status:', response.status);
      console.log('Response headers:', response.headers);

      // Get the raw response text first
      const responseText = await response.text();
      console.log('Raw response:', responseText.substring(0, 200)); // Log first 200 chars

      // Try to parse as JSON
      let data;
      try {
        data = JSON.parse(responseText);
      } catch (parseError) {
        console.error('JSON parse error. Response was:', responseText);
        throw new Error(`Server returned invalid JSON. Status: ${response.status}`);
      }

      console.log('Login response:', data);

      if (!response.ok) {
        throw new Error(data.message || `HTTP error! status: ${response.status}`);
      }

      if (data.success && data.token) {
        // Store authentication data
        await AsyncStorage.setItem('token', data.token);
        await AsyncStorage.setItem('user', JSON.stringify(data.user));

        console.log('Login successful, token stored');
        return data;
      }

      throw new Error(data.message || 'Login failed');
    } catch (error) {
      console.error('Login service error:', error);
      throw error;
    }
  },

  // Signup/Register
  signup: async (name, email, password, phone, role = 'user', fcmToken = null) => {
    try {
      console.log('Attempting signup with:', { name, email, phone, role, fcmToken });
      console.log('Full URL:', `${BASE_URL}/register`);

      const response = await fetch(`${BASE_URL}/register`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name,
          email,
          password,
          phone,
          role,
          fcmToken,
        }),
      });

      console.log('Response status:', response.status);
      console.log('Response content-type:', response.headers.get('content-type'));

      // Get the raw response text first
      const responseText = await response.text();
      console.log('Raw response (first 500 chars):', responseText.substring(0, 500));

      // Try to parse as JSON
      let data;
      try {
        data = JSON.parse(responseText);
      } catch (parseError) {
        console.error('JSON parse error. Full response:', responseText);
        throw new Error(`Server returned HTML/invalid response. Status: ${response.status}. Check if URL is correct.`);
      }

      console.log('Signup response:', data);

      if (!response.ok) {
        throw new Error(data.message || `HTTP error! status: ${response.status}`);
      }

      if (data.success && data.token) {
        // Store authentication data
        await AsyncStorage.setItem('token', data.token);
        await AsyncStorage.setItem('user', JSON.stringify(data.user));

        console.log('Signup successful, token stored');
        return data;
      }

      throw new Error(data.message || 'Signup failed');
    } catch (error) {
      console.error('Signup service error:', error);
      throw error;
    }
  },

  // Update FCM Token
  updateFCMToken: async (token, fcmToken) => {
    try {
      console.log('Updating FCM token...');

      const response = await fetch(`${BASE_URL}/update-fcm-token`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`,
        },
        body: JSON.stringify({ fcmToken }),
      });

      const responseText = await response.text();
      const data = JSON.parse(responseText);

      if (!response.ok) {
        throw new Error(data.message || 'Failed to update FCM token');
      }

      console.log('FCM token updated successfully');
      return data;
    } catch (error) {
      console.error('Error updating FCM token:', error);
      throw error;
    }
  },

  // Forgot Password
  forgotPassword: async (email) => {
    try {
      const response = await fetch(`${BASE_URL}/forgot-password`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });

      const responseText = await response.text();
      const data = JSON.parse(responseText);

      if (!response.ok) {
        throw new Error(data.message || 'Failed to send reset link');
      }

      return data;
    } catch (error) {
      throw error;
    }
  },

  // Reset Password
  resetPassword: async (token, newPassword) => {
    try {
      const response = await fetch(`${BASE_URL}/reset-password/${token}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ password: newPassword }),
      });

      const responseText = await response.text();
      const data = JSON.parse(responseText);

      if (!response.ok) {
        throw new Error(data.message || 'Password reset failed');
      }

      return data;
    } catch (error) {
      throw error;
    }
  },

  // Get Current User
  getCurrentUser: async (token) => {
    try {
      const response = await fetch(`${BASE_URL}/me`, {
        method: 'GET',
        headers: {
          'Authorization': `Bearer ${token}`,
        },
      });

      const responseText = await response.text();
      const data = JSON.parse(responseText);

      if (!response.ok) {
        throw new Error(data.message || 'Failed to get user');
      }

      return data;
    } catch (error) {
      throw error;
    }
  },

  // Update Profile
  updateProfile: async (token, name, email) => {
    try {
      const response = await fetch(`${BASE_URL}/update-profile`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`,
        },
        body: JSON.stringify({ name, email }),
      });

      const responseText = await response.text();
      const data = JSON.parse(responseText);

      if (!response.ok) {
        throw new Error(data.message || 'Failed to update profile');
      }

      // Update stored user data
      await AsyncStorage.setItem('user', JSON.stringify(data.data));

      return data;
    } catch (error) {
      throw error;
    }
  },

  // Change Password
  changePassword: async (token, currentPassword, newPassword) => {
    try {
      const response = await fetch(`${BASE_URL}/change-password`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`,
        },
        body: JSON.stringify({ currentPassword, newPassword }),
      });

      const responseText = await response.text();
      const data = JSON.parse(responseText);

      if (!response.ok) {
        throw new Error(data.message || 'Failed to change password');
      }

      // Update token if returned
      if (data.token) {
        await AsyncStorage.setItem('token', data.token);
      }

      return data;
    } catch (error) {
      throw error;
    }
  },

  // Logout
  logout: async () => {
    try {
      await AsyncStorage.removeItem('token');
      await AsyncStorage.removeItem('user');
      console.log('Logged out successfully');
    } catch (error) {
      console.error('Logout error:', error);
      throw error;
    }
  },

  // Check if user is logged in
  isLoggedIn: async () => {
    try {
      const token = await AsyncStorage.getItem('token');
      return !!token;
    } catch (error) {
      return false;
    }
  },

  // Get stored token
  getToken: async () => {
    try {
      return await AsyncStorage.getItem('token');
    } catch (error) {
      return null;
    }
  },

  // Get stored user
  getStoredUser: async () => {
    try {
      const user = await AsyncStorage.getItem('user');
      return user ? JSON.parse(user) : null;
    } catch (error) {
      return null;
    }
  },
};