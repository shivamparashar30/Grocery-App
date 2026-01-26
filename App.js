// App.js
import React, {useEffect} from 'react';
import { AuthProvider } from './src/context/AuthContext';
import RootNavigator from './src/navigation/RootNavigator';
import notificationService from './src/services/notificationService';

const App = () => {
  useEffect(() => {
    // Initialize notifications when app starts
    const initializeNotifications = async () => {
      try {
        // Request permissions
        const hasPermission = await notificationService.requestPermission();
        
        if (hasPermission) {
          console.log('Notification permission granted');
          
          // Get  token
         const token = await notificationService.getToken();
          
          if (token) {
            console.log('FCM Token:', token);
            // You can store this token or send it to your backend
          }
        } else {
          console.log('Notification permission denied');
        }
      } catch (error) {
        console.error('Error initializing notifications:', error);
      }
    };

    initializeNotifications();
  }, []);
  return (
    <AuthProvider>
      <RootNavigator />
    </AuthProvider>
  );
};

export default App;