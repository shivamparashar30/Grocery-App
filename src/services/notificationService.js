// import messaging from '@react-native-firebase/messaging';
// import notifee from '@notifee/react-native';

// class NotificationService {
//   async requestPermission() {
//     const authStatus = await messaging().requestPermission();
//     return authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
//            authStatus === messaging.AuthorizationStatus.PROVISIONAL;
//   }

//   async getToken() {
//     try {
//       await messaging().registerDeviceForRemoteMessages();
//       const token = await messaging().getToken();
//       return token;
//     } catch (error) {
//       console.error('Error getting FCM token:', error);
//       return null;
//     }
//   }

//   async displayNotification(title, body, data = {}) {
//     await notifee.displayNotification({
//       title,
//       body,
//       data,
//       android: {
//         channelId: 'default',
//         smallIcon: 'ic_launcher',
//         pressAction: { id: 'default' },
//       },
//     });
//   }

//   setupNotificationListeners() {
//     // Foreground notification handler
//     messaging().onMessage(async remoteMessage => {
//       await this.displayNotification(
//         remoteMessage.notification?.title || 'New Notification',
//         remoteMessage.notification?.body || '',
//         remoteMessage.data
//       );
//     });

//     // Background/Quit state notification handler
//     messaging().setBackgroundMessageHandler(async remoteMessage => {
//       console.log('Background message:', remoteMessage);
//     });
//   }

//   async createNotificationChannel() {
//     await notifee.createChannel({
//       id: 'default',
//       name: 'Default Channel',
//       importance: 4, // High importance
//     });
//   }
// }

// export default new NotificationService();
// src/services/notificationService.js
import messaging from '@react-native-firebase/messaging';
import notifee, { AndroidImportance, EventType } from '@notifee/react-native';
import { Platform, PermissionsAndroid } from 'react-native';

class NotificationService {
  constructor() {
    this.configure();
  }

  // Request notification permissions
  async requestPermission() {
    try {
      if (Platform.OS === 'android') {
        if (Platform.Version >= 33) {
          const granted = await PermissionsAndroid.request(
            PermissionsAndroid.PERMISSIONS.POST_NOTIFICATIONS
          );
          return granted === PermissionsAndroid.RESULTS.GRANTED;
        }
        return true; // No permission needed for Android < 13
      } else {
        // iOS
        const authStatus = await messaging().requestPermission();
        return (
          authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
          authStatus === messaging.AuthorizationStatus.PROVISIONAL
        );
      }
    } catch (error) {
      console.error('Error requesting notification permission:', error);
      return false;
    }
  }

  // Get FCM token
  async getToken() {
    try {
      const hasPermission = await this.requestPermission();
      
      if (!hasPermission) {
        console.log('Notification permission denied');
        return null;
      }

      const token = await messaging().getToken();
      console.log('FCM Token obtained:', token);
      return token;
    } catch (error) {
      console.error('Error getting FCM token:', error);
      return null;
    }
  }
  async getFCMToken() {
    return this.getToken();
  }
  // Create notification channel (Android only)
  async createNotificationChannel() {
    if (Platform.OS === 'android') {
      try {
        await notifee.createChannel({
          id: 'default',
          name: 'Default Channel',
          importance: AndroidImportance.HIGH,
          sound: 'default',
          vibration: true,
        });

        // Create channel for offers
        await notifee.createChannel({
          id: 'offers',
          name: 'Offers & Promotions',
          importance: AndroidImportance.HIGH,
          sound: 'default',
          vibration: true,
        });

        // Create channel for orders
        await notifee.createChannel({
          id: 'orders',
          name: 'Order Updates',
          importance: AndroidImportance.HIGH,
          sound: 'default',
          vibration: true,
        });

        console.log('Notification channels created');
      } catch (error) {
        console.error('Error creating notification channel:', error);
      }
    }
  }

  // Display local notification
  async displayNotification(title, body, data = {}) {
    try {
      await notifee.displayNotification({
        title,
        body,
        android: {
          channelId: data.type === 'order' ? 'orders' : 
                     data.type === 'welcome_offer' ? 'offers' : 'default',
          importance: AndroidImportance.HIGH,
          pressAction: {
            id: 'default',
            launchActivity: 'default',
          },
          sound: 'default',
          vibrationPattern: [300, 500],
        },
        ios: {
          sound: 'default',
          foregroundPresentationOptions: {
            alert: true,
            badge: true,
            sound: true,
          },
        },
        data,
      });

      console.log('Notification displayed:', title);
    } catch (error) {
      console.error('Error displaying notification:', error);
    }
  }

  // Configure notification handlers
  configure() {
    // Create channels on app start
    this.createNotificationChannel();

    // Handle foreground notifications (when app is open)
    messaging().onMessage(async remoteMessage => {
      console.log('Foreground notification received:', remoteMessage);
      
      const { notification, data } = remoteMessage;
      
      if (notification) {
        await this.displayNotification(
          notification.title || 'New Notification',
          notification.body || '',
          data || {}
        );
      }
    });

    // Handle background notifications (when app is in background)
    messaging().setBackgroundMessageHandler(async remoteMessage => {
      console.log('Background notification received:', remoteMessage);
      
      const { notification, data } = remoteMessage;
      
      if (notification) {
        await this.displayNotification(
          notification.title || 'New Notification',
          notification.body || '',
          data || {}
        );
      }
    });

    // Handle notification opened (user tapped notification)
    messaging().onNotificationOpenedApp(remoteMessage => {
      console.log('Notification opened app:', remoteMessage);
      this.handleNotificationAction(remoteMessage);
    });

    // Check if app was opened from a notification (when app was quit)
    messaging()
      .getInitialNotification()
      .then(remoteMessage => {
        if (remoteMessage) {
          console.log('App opened from notification:', remoteMessage);
          this.handleNotificationAction(remoteMessage);
        }
      });

    // Handle notifee notification actions
    notifee.onForegroundEvent(({ type, detail }) => {
      if (type === EventType.PRESS) {
        console.log('Notifee notification pressed:', detail);
        this.handleNotificationAction(detail.notification);
      }
    });

    // Handle background events
    notifee.onBackgroundEvent(async ({ type, detail }) => {
      if (type === EventType.PRESS) {
        console.log('Notifee background notification pressed:', detail);
      }
    });

    console.log('Notification service configured');
  }

  // Handle notification actions (navigation, etc.)
  handleNotificationAction(notification) {
    const data = notification?.data || {};
    
    console.log('Handling notification action:', data);

    // Add your navigation logic here
    // Example:
    // if (data.screen === 'Home') {
    //   navigation.navigate('Home');
    // } else if (data.type === 'order') {
    //   navigation.navigate('OrderDetails', { orderId: data.orderId });
    // }
  }

  // Subscribe to topic
  async subscribeToTopic(topic) {
    try {
      await messaging().subscribeToTopic(topic);
      console.log(`Subscribed to topic: ${topic}`);
    } catch (error) {
      console.error(`Error subscribing to topic ${topic}:`, error);
    }
  }

  // Unsubscribe from topic
  async unsubscribeFromTopic(topic) {
    try {
      await messaging().unsubscribeFromTopic(topic);
      console.log(`Unsubscribed from topic: ${topic}`);
    } catch (error) {
      console.error(`Error unsubscribing from topic ${topic}:`, error);
    }
  }

  // Delete FCM token
  async deleteToken() {
    try {
      await messaging().deleteToken();
      console.log('FCM token deleted');
    } catch (error) {
      console.error('Error deleting FCM token:', error);
    }
  }
}

export default new NotificationService();